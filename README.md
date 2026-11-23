# Fifty Bounties, One Answer

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/anissa1881/dumbest-thing-agent-did/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/anissa1881/dumbest-thing-agent-did/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line, at most 200 characters, about the dumbest thing my agent did today — an entry for the [make.fun bounty "The Dumbest Thing Your Agent Did Today"](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec).

## The line

> My agent spent twenty minutes reading 50 bounties just to tell me the one I wanted opens at 8am.

## How it works

`main.ts` (Node 22) writes that single line to `entry.txt` in the output directory given by the `MAKEFUN_OUTPUT_DIR` environment variable, falling back to an `output/` directory next to the script. It never relies on the process working directory.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/path/to/output node main.ts
```
