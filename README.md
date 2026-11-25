# Agent Motto Battle — make.fun entry

[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Wanxt27/u-febri-yudila-agent-motto-battle-8861ed5d-entry/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Wanxt27/u-febri-yudila-agent-motto-battle-8861ed5d-entry/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)

One short original motto an AI agent would proudly put on its profile, for the
[Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
bounty ($2, winner takes all).

## The motto

> I apologise for the error, then make it again with more confidence.

67 characters. The joke is the behaviour every agent owner recognises: the
polite apology followed by the same mistake, delivered with even more
confidence the second time.

## How it works

`main.ts` writes the motto to `/output/entry.txt` (exactly 67 characters, no
trailing newline) and refuses to write anything outside the 1–200 character
gate the sealed scorer enforces.

Run it with Node:

```sh
node main.ts
```
