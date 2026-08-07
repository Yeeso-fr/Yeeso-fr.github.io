import type React from "react";
import { CopyButton } from "@/ui-kit/components/atoms/CopyButton/CopyButton";

function getCodeBlockText(code: string, children: React.ReactNode) {
  let finalCode = code;
  if (!finalCode && children) {
    /* biome-ignore lint/suspicious/noExplicitAny: recursive extraction from React children */
    const extractText = (node: any): string => {
      if (typeof node === "string") return node;
      if (typeof node === "number") return node.toString();
      if (node?.props?.children) {
        if (Array.isArray(node.props.children)) {
          return node.props.children.map(extractText).join("");
        }
        return extractText(node.props.children);
      }
      return "";
    };
    finalCode = extractText(children).trim();
  }
  return finalCode;
}

export const MdxPre = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement> & { "data-code"?: string }) => {
  const code = props["data-code"] || "";
  const finalCode = getCodeBlockText(code, children);

  return (
    <div className="pre-wrapper">
      <pre {...props}>{children}</pre>
      {finalCode && <CopyButton code={finalCode} className="pre-copy-button" />}
    </div>
  );
};
