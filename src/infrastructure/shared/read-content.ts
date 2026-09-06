import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ZodType } from "zod";

const CONTENT_PATH = path.join(process.cwd(), "src/content");

export function readContent<T>(folder: string, schema: ZodType<T>): T[] {
  const folderPath = path.join(CONTENT_PATH, folder);
  if (!fs.existsSync(folderPath)) return [];
  const files = fs.readdirSync(folderPath);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(folderPath, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);
      try {
        return schema.parse({ ...data, content });
      } catch (error) {
        throw new Error(`Invalid frontmatter in ${filePath}`, {
          cause: error,
        });
      }
    });
}
