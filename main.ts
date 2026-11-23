import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One small good thing that happened today, in a single line.
const ENTRY =
  "My neighbour's kid knocked at 7 a.m. just to hand me a drawing of my cat — she even got his crooked ear right, whiskers and all.";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
