// Agent Motto Battle entry — one original motto, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "I apologise for the error, then make it again with more confidence.";

// The sealed scorer only accepts 1–200 characters of non-whitespace text.
if (MOTTO.trim().length < 1 || MOTTO.length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${MOTTO.length}`);
}

function writeMotto(text: string): void {
  // Create /output if needed; never delete it (it is a shared mount).
  mkdirSync("/output", { recursive: true });
  // Write the motto exactly as-is: no trailing newline, so the file
  // holds precisely the 67 characters the gate counts.
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeMotto(MOTTO);
console.log(`Wrote ${MOTTO.length} characters to /output/entry.txt`);
