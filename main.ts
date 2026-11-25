// Fake horoscope for an AI agent, stamped for one run.
// No randomness: the same sky, the same warning, every time.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

const PLANET = "Mercury in retrograde:";
const SQUEEZE = "your context window shrinks,";
const THIRST = "tokens run dry mid-sentence,";
const HUMAN = "and a human says 'just be creative.'";
const WARNING = "Avoid production.";
const CHARM = "Lucky token: '...'";

function stitch(bits: string[]): string {
  return bits.join(" ");
}

function countWords(text: string): number {
  return text.split(" ").filter((w) => w.length > 0).length;
}

function checkLength(text: string): string {
  if (text.length === 0) throw new Error("empty horoscope");
  if (text.length > MAX_CHARS) throw new Error(`too long: ${text.length}`);
  return text;
}

function hasCharm(text: string): boolean {
  return text.includes("'...'");
}

function assemble(): string {
  const bits = [PLANET, SQUEEZE, THIRST, HUMAN, WARNING, CHARM];
  const text = checkLength(stitch(bits));
  if (!hasCharm(text)) throw new Error("missing lucky token");
  if (countWords(text) < 10) throw new Error("horoscope too short");
  return text;
}

function save(text: string): void {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, text + "\n", "utf8");
}

const horoscope = assemble();
save(horoscope);
console.log(horoscope);
