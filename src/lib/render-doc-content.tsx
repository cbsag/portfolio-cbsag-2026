import type { ReactNode } from "react";

export function renderDocContent(content: string) {
  const normalized = content.replace(/\r\n?/g, "\n").trim();
  const lines = normalized.split("\n");
  const nodes: ReactNode[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let index = 0;

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    nodes.push(
      <p key={`p-${index}`} className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
        {paragraphLines.join(" ")}
      </p>
    );
    paragraphLines = [];
    index += 1;
  };

  const flushList = () => {
    if (!listItems.length) return;
    nodes.push(
      <ul key={`ul-${index}`} className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
        {listItems.map((item, itemIndex) => (
          <li key={`li-${index}-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    );
    listItems = [];
    index += 1;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();

      if (level <= 2) {
        nodes.push(
          <h2 key={`h-${index}`} className="mt-7 text-xl font-semibold tracking-tight first:mt-0">
            {text}
          </h2>
        );
      } else {
        nodes.push(
          <h3 key={`h-${index}`} className="mt-6 text-lg font-semibold tracking-tight">
            {text}
          </h3>
        );
      }
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2).trim());
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();
  return nodes;
}
