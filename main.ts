// "Fifty Bounties, One Answer" — entry for
// u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
// Writes the single entry line to entry.txt in the output directory
// given by MAKEFUN_OUTPUT_DIR, or to ./output next to this script.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "My agent spent twenty minutes reading 50 bounties just to tell me the one I wanted opens at 8am.";

const outDir =
  (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim() ||
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
