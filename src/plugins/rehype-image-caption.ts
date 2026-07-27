import { visit } from "unist-util-visit";

export default function rehypeImageCaption() {
  return (tree: any) => {
    visit(tree, "element", (node: any, index: number | undefined, parent: any) => {
      if (node.tagName !== "img" || !node.properties?.alt) return;

      const alt = node.properties.alt;

      // hanya bungkus dengan figure jika belum
      if (parent?.tagName === "figure") return;

      parent.children[index!] = {
        type: "element",
        tagName: "figure",
        properties: { class: "md-figure" },
        children: [
          node,
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: alt }],
          },
        ],
      };
    });
  };
}
