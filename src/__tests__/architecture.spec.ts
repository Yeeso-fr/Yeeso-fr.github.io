import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { describe, expect, it } from "vitest";

const SRC = new URL("../../src", import.meta.url).pathname;

function collectFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath));
    } else if ([".ts", ".tsx"].includes(extname(entry.name))) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractImports(filePath: string): string[] {
  const content = readFileSync(filePath, "utf-8");
  const importRegex =
    /^(?:import|export)\s+(?:type\s+)?.*?from\s+["']([^"']+)["']/gm;
  return [...content.matchAll(importRegex)].map((match) => match[1]);
}

type Violation = { file: string; import: string };

function findViolations(layer: string, forbidden: string): Violation[] {
  const dir = join(SRC, layer);
  const violations: Violation[] = [];
  for (const file of collectFiles(dir)) {
    for (const imp of extractImports(file)) {
      if (imp.startsWith(forbidden)) {
        violations.push({ file: relative(SRC, file), import: imp });
      }
    }
  }
  return violations;
}

function findExternalImports(
  layer: string,
  allowedExternal: string[],
): Violation[] {
  const dir = join(SRC, layer);
  const violations: Violation[] = [];
  for (const file of collectFiles(dir)) {
    for (const imp of extractImports(file)) {
      const isRelative = imp.startsWith(".");
      const isNodeBuiltin = imp.startsWith("node:");
      const isInternal = imp.startsWith("@/");
      if (!isRelative && !isNodeBuiltin && !isInternal) {
        const isAllowed = allowedExternal.some(
          (pkg) => imp === pkg || imp.startsWith(`${pkg}/`),
        );
        if (!isAllowed) {
          violations.push({ file: relative(SRC, file), import: imp });
        }
      }
    }
  }
  return violations;
}

// ──────────────────────────────────────────────────────────
// Layer rules (each layer may only depend on layers below it)
//
// config       → no internal imports at all; no external libraries
// entities     → no internal imports except sibling entities; only zod externally
// infrastructure → entities only; any external lib
// usecases     → infrastructure + entities; any external lib
// ui-kit       → entities + use cases + config; any external lib; no app
// app          → ui-kit + use cases + entities + config; no infrastructure
// ──────────────────────────────────────────────────────────

describe("config — must not import any other layer", () => {
  it("must not import from entities", () => {
    expect(findViolations("config", "@/entities")).toEqual([]);
  });

  it("must not import from infrastructure", () => {
    expect(findViolations("config", "@/infrastructure")).toEqual([]);
  });

  it("must not import from usecases", () => {
    expect(findViolations("config", "@/usecases")).toEqual([]);
  });

  it("must not import from ui-kit", () => {
    expect(findViolations("config", "@/ui-kit")).toEqual([]);
  });

  it("must not import from app", () => {
    expect(findViolations("config", "@/app")).toEqual([]);
  });

  it("must not use any external library", () => {
    expect(findExternalImports("config", [])).toEqual([]);
  });
});

describe("entities — must not import upper or sibling layers", () => {
  it("must not import from infrastructure", () => {
    expect(findViolations("entities", "@/infrastructure")).toEqual([]);
  });

  it("must not import from usecases", () => {
    expect(findViolations("entities", "@/usecases")).toEqual([]);
  });

  it("must not import from ui-kit", () => {
    expect(findViolations("entities", "@/ui-kit")).toEqual([]);
  });

  it("must not import from app", () => {
    expect(findViolations("entities", "@/app")).toEqual([]);
  });

  it("must only use zod as external library", () => {
    expect(findExternalImports("entities", ["zod"])).toEqual([]);
  });
});

describe("infrastructure — must not import upper layers", () => {
  it("must not import from usecases", () => {
    expect(findViolations("infrastructure", "@/usecases")).toEqual([]);
  });

  it("must not import from ui-kit", () => {
    expect(findViolations("infrastructure", "@/ui-kit")).toEqual([]);
  });

  it("must not import from app", () => {
    expect(findViolations("infrastructure", "@/app")).toEqual([]);
  });
});

describe("usecases — must not import upper layers", () => {
  it("must not import from ui-kit", () => {
    expect(findViolations("usecases", "@/ui-kit")).toEqual([]);
  });

  it("must not import from app", () => {
    expect(findViolations("usecases", "@/app")).toEqual([]);
  });
});

describe("ui-kit — must not import infrastructure or app", () => {
  it("must not import from infrastructure", () => {
    expect(findViolations("ui-kit", "@/infrastructure")).toEqual([]);
  });

  it("must not import from app", () => {
    expect(findViolations("ui-kit", "@/app")).toEqual([]);
  });
});

describe("app — must not import infrastructure directly", () => {
  it("must not import from infrastructure", () => {
    expect(findViolations("app", "@/infrastructure")).toEqual([]);
  });
});
