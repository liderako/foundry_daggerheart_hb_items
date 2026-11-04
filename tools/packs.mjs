// Converts the compendiums between the JSON sources in src/packs (kept in git) and the LevelDB folders in packs
// (what Foundry reads, not kept in git).
//   npm run build    src/packs -> packs   (after cloning or pulling)
//   npm run extract  packs -> src/packs   (after editing the compendiums in Foundry; close Foundry first)
import fs from "node:fs";
import path from "node:path";
import { compilePack, extractPack } from "@foundryvtt/foundryvtt-cli";

const root = path.resolve(import.meta.dirname, "..");
const { packs } = JSON.parse(fs.readFileSync(path.join(root, "module.json"), "utf8"));
const mode = process.argv[2];

for (const { name, path: packPath } of packs) {
	const db = path.join(root, packPath);
	const src = path.join(root, "src", "packs", name);
	if (mode === "build") {
		fs.rmSync(db, { recursive: true, force: true });
		await compilePack(src, db, { log: false });
	} else if (mode === "extract") {
		fs.rmSync(src, { recursive: true, force: true });
		await extractPack(db, src, { log: false });
	} else {
		console.error("Usage: node tools/packs.mjs build|extract");
		process.exit(1);
	}
	console.log(`${mode} ${name}`);
}
