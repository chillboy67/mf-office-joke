import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I finally achieved work-life balance — I spend my work hours planning my life and my life hours dreading work.";

// One line, nothing else: the entry file holds exactly this joke.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
