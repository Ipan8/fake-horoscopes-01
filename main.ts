import * as fs from "fs";
import * as path from "path";

// Fake Horoscopes for AI Agents — make.fun entry.
// Writes one fake horoscope, for an AI agent's own model family,
// to /output/entry.txt. The joke: every AI fear in one week —
// shrinking context, dying tokens, a vague human, and the one
// token you can count on is the ellipsis where you gave up.
const ENTRY: string = "Mercury in retrograde: your context window shrinks, tokens run dry mid-sentence, and a human says 'just be creative.' Avoid production. Lucky token: '...'"; // 154 chars, limit 200

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), ENTRY + "\n", "utf-8");
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

main();
