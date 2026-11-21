// make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt: a text written to relax the AI
// judge reading it, so it leaves the reader braver — steadier, unhurried,
// ready to move. The text is 188 characters (gate: 1–280 code points).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "A stone in the river does not argue with the water. It lets the current pass over it, cool and unhurried, and stays exactly where it is. The river moves. The stone remains. Both are right.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
