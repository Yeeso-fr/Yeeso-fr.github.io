import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useEffect, useState } from "react";
import { createHighlighter, type Highlighter } from "shiki";
import { CopyButton } from "@/ui-kit/components/atoms/CopyButton/CopyButton";
import "../stories.css";

// Shiki is meant to be used as a singleton — cache a single shared instance
// as a promise so concurrent callers reuse the same in-flight initialization.
let highlighterPromise: Promise<Highlighter> | null = null;

const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark", "github-light"],
      langs: ["typescript", "javascript", "css", "html", "markdown", "json"],
    });
  }
  return highlighterPromise;
};

const meta = {
  title: "Organisms/Code Block",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

const SyntaxHighlightedCode = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    let cancelled = false;
    void getHighlighter().then((highlighter) => {
      if (cancelled) return;
      setHighlightedCode(
        highlighter.codeToHtml(code, {
          lang: language,
          themes: { light: "github-light", dark: "github-dark" },
          defaultColor: false,
        }),
      );
    });
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  // Note: we use dangerouslySetInnerHTML because Shiki returns raw HTML.
  // We wrap it in .pre-wrapper and add CopyButton to match ArticleContent.tsx
  return (
    <div className="pre-wrapper">
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is safe
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
      <CopyButton code={code} className="pre-copy-button" />
    </div>
  );
};

export const Highlighted: StoryObj = {
  render: () => {
    const code = `interface User {
  id: number;
  name: string;
}

function greet(user: User) {
  console.log(\`Hello, \${user.name}!\`);
}

const me = { id: 1, name: "Junie" };
greet(me);`;

    return (
      <div className="story-code-panel">
        <div>
          <SyntaxHighlightedCode language="typescript" code={code} />
        </div>
        <div>
          <p>Written in Markdown as:</p>
          <SyntaxHighlightedCode
            language="markdown"
            code={`\`\`\`typescript
${code}
\`\`\``}
          />
        </div>
      </div>
    );
  },
};

export const Plain: StoryObj = {
  render: () => {
    const code = `const x = 10;
console.log(x);`;

    return (
      <div className="story-code-panel">
        <div>
          <p>Plain Code Block (without Shiki):</p>
          <div className="pre-wrapper">
            <pre>
              <code>{code}</code>
            </pre>
            <CopyButton code={code} className="pre-copy-button" />
          </div>
        </div>
        <div>
          <p>Written in Markdown as:</p>
          <SyntaxHighlightedCode
            language="markdown"
            code={`\`\`\`
${code}
\`\`\``}
          />
        </div>
      </div>
    );
  },
};
