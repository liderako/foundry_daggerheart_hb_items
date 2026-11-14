# The Mist Age - HB Items

A Foundry VTT module for Daggerheart with the homebrew compendiums of The Mist Age campaign:

| Compendium | Contents |
| --- | --- |
| HB Items | Campaign items: potions, drinks, crafting results, adventure gear, tools, treasures |
| Weapons (HB) | Weapons |
| Armors (HB) | Armor |
| Consumables (HB) | Consumables |
| Loot (HB) | Loot |
| Adversary Features (HB) | Adversary features |
| Rolltables (HB) | Roll tables |

They show up in the Compendiums tab in the *The Mist Age HB* folder.

## Installation

Install by the manifest URL:

```
https://github.com/liderako/foundry_daggerheart_hb_items/releases/latest/download/module.json
```

## Editing the compendiums

Module compendiums are locked by default: right-click a compendium → *Toggle Edit Lock* to edit it.

The repository keeps the compendiums as JSON in `src/packs`; Foundry reads the compiled LevelDB folders in `packs`, which are not in git.

- After cloning or pulling: `npm install`, then `npm run build`.
- After editing the compendiums in Foundry: close Foundry, run `npm run extract`, and commit the changes in `src/packs`.

## Release

Push a tag `vX.Y.Z`: the workflow compiles the compendiums and attaches `module.json` and `module.zip` to the release.

## License

Apache 2.0
