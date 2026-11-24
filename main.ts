// Writes one robot pickup line to /output/entry.txt.
// The joke grows out of how machines start talking: a protocol handshake
// that fails, and the robot turns that failure itself into the compliment.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My handshake timed out: you're out of spec, so may I request access to open a session and keep this connection alive?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
