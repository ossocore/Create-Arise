# Create: Arise — Modpack Architecture & Progression Design (DRAFT v4)

> ⚠️ **THIS IS A LIVING DRAFT.** Nothing here is final. Everything is subject to change through playtesting, iteration, and new ideas. The mod list, gates, recipes, and stages described below are *current best guesses* — not commitments.
>
> **Purpose**: A shared reference so developers and AI assistants have a consistent mental model of the pack's intent. Update freely as decisions evolve.
>
> **Last Updated**: 2026-05-04

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Mod Stack Overview](#2-mod-stack-overview)
3. [Progression Stages — Overview](#3-progression-stages--overview)
4. [Stage 1: Tough Beginnings (Earlygame)](#4-stage-1-tough-beginnings-earlygame)
5. [Stage 2: Overgeared — Tool Age (Early→Mid)](#5-stage-2-overgeared--tool-age-earlymid)
6. [Stage 3: Create Automation — The Andesite Age (Midgame, Overworld)](#6-stage-3-create-automation--the-andesite-age-midgame-overworld)
7. [Stage 4: The Void Gap & Sky Islands (Midgame, Vertical Expansion)](#7-stage-4-the-void-gap--sky-islands-midgame-vertical-expansion)
8. [Stage 5: The Molten Opal Pipeline (Midgame, Core Mechanic)](#8-stage-5-the-molten-opal-pipeline-midgame-core-mechanic)
9. [Stage 6: The Nether — Brass Age & Advanced Create (Mid→Late)](#9-stage-6-the-nether--brass-age--advanced-create-midlate)
10. [Stage 7: The End (Lategame)](#10-stage-7-the-end-lategame)
11. [Horizontal Progression Threads](#11-horizontal-progression-threads)
12. [Recipe Design Philosophy](#12-recipe-design-philosophy)
13. [Open Design Questions](#13-open-design-questions)

---

## 1. Design Philosophy

### Core Principles

1. **Create Is the Backbone — But Automating Resources With It IS Frequently The Gate**
   - Create machines themselves are not arbitrarily gated. The natural Create progression (andesite → brass → train/steam) stands on its own.
   - However, what you can *do* with those machines often depends on automating a specific resource first. Automation throughput itself becomes a gate.
   - Custom content (Molten Opal, Crying Obsidian, and anything else we add) gates access to new dimensions, new machine tiers, or new capabilities — but these gates are not set in stone. **Expect more gates, not fewer, as the pack develops.**

2. **Semi-Expert ≠ Tedious**
   - Progression is *noticeably slowed* but not through grind. The bottleneck is automation — you cannot hand-mine your way through.
   - Early game is survival-focused (Tough Beginnings + Overgeared). Midgame demands automated processing pipelines. Lategame demands massive throughput.
   - **Expensive first-time recipes** serve as goalposts that unlock a cascade of new content. Once unlocked, **cheaper alternate recipes** become available.

3. **Horizontal Progression Is Essential**
   - A single vertical pipeline (Opal → Diamonds) is flat and boring on its own.
   - Parallel threads (storage upgrades, glider tiers, Silent Gear material progression, food automation) ensure the player always has something meaningful to pursue.

4. **Automation Is The Reward**
   - Anything the player does manually more than a few times should have an automation path.
   - Create machines are the tools for this, but Sophisticated Backpacks/Storage and Silent Gear provide complementary non-Create progression.

5. **Every Gate Must Be Intentional**
   - If something is gated, there is a *reason* (a dramatic moment, a new dimension, a new capability).
   - No arbitrary "you need 50 gold ingots to craft a thing you'll use once." Instead: "You need to build a Crying Obsidian portal frame" — that's a dramatic moment with a Create fabrication process behind it.

6. **Iterative Over Perfect — The Mod Stack Is Not Fixed**
   - This document uses **[TBD: placeholder]** markers for sections that lack detail. These are gaps to be filled via playtesting, not invented wholesale.
   - The mod list in Section 2 describes what's currently in the pack. **More mods will likely be added** (Oritech is one example being considered). Others may be removed. The mod stack is a living thing.
   - Progression stages, gates, and recipes described here are *current hypotheses*. Playtesting will reveal what works and what doesn't.

---

## 2. Mod Stack Overview

> ⚠️ **The mod list is not frozen.** Mods will be added (e.g., Oritech is under consideration), removed if they don't fit, or replaced with better alternatives. This section describes the *current* understanding of each mod's role — update it as the pack evolves.

### Core (Required for Pack Identity)

| Mod | Role in Progression |
|-----|-------------------|
| [`Create`](https://modrinth.com/mod/create) | Central automation mod. All factory gameplay. |
| [`Create: Aeronautics`](https://modrinth.com/mod/create-aeronautics) | Airships for void gap crossing and sky island transport. Requires a **Simulator** component to enable physics. |
| [`Overgeared`](https://www.curseforge.com/minecraft/mc-mods/overgeared) | Tool/weapon crafting minigame. Quality system. **Earlygame only** (stone + copper tiers). Deprecated after Silent Gear Anvil is obtained. May be forked later to remove irrelevant features. |
| [`Tough Beginnings`](https://www.curseforge.com/minecraft/mc-mods/tough-beginnings) | Stone-age survival. No punching trees/stone. |
| [`Silent Gear`](https://www.curseforge.com/minecraft/mc-mods/silent-gear) | Modular gear system. **Primary tool crafting system for iron+ tiers.** Gated behind Create Mechanical Press assembly of the Silent Gear Anvil. |

### Support (Enable Core Loop)

| Mod | Role |
|-----|------|
| [`KubeJS`](https://modrinth.com/mod/kubejs) + [`KubeJS Create`](https://modrinth.com/mod/kubejs-create) | Recipes, mechanics, void gap, progression scripting |
| [`Sophisticated Backpacks`](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) | Inventory expansion (horizontal progression) |
| [`Sophisticated Storage`](https://www.curseforge.com/minecraft/mc-mods/sophisticated-storage) | Base storage upgrades |
| [`Gliders`](https://www.curseforge.com/minecraft/mc-mods/gliders) | Mobility expansion (horizontal progression) |
| [`Create Jetpack`](https://modrinth.com/mod/create-jetpack) | Late-midgame mobility, airship complement |
| [`Enchancement`](https://modrinth.com/mod/enchancement) | Enchantment rebalance (less grind, more choice) |
| [`Champions`](https://www.curseforge.com/minecraft/mc-mods/champions-unofficial) | Elite mobs, difficulty scaling, loot |
| [`Progressive Difficulty`](https://www.curseforge.com/minecraft/mc-mods/hyperstorms-progressive-difficulty) | World scales with player progress |
| [`Spice of Life: Carrot Edition`](https://www.curseforge.com/minecraft/mc-mods/spice-of-life-carrot-edition) | Food diversity incentive |
| [`Hunger Strike`](https://www.curseforge.com/minecraft/mc-mods/hunger-strike) | Hunger overhaul |
| [`Create: Food`](https://www.curseforge.com/minecraft/mc-mods/create-food) | Automation-friendly food processing |
| [`Create: The Factory Must Grow`](https://modrinth.com/mod/create-industry) | Industrial processing, more complex chains |
| [`Create: Liquid Fuel`](https://www.curseforge.com/minecraft/mc-mods/create-liquid-fuel) | Fuel diversity for Create machines |
| [`Create: Mechanical Companion`](https://www.curseforge.com/minecraft/mc-mods/create-mechanical-companion) | QoL Create tools |
| [`Accessories`](https://www.curseforge.com/minecraft/mc-mods/accessories) | Curio-like accessory slots |
| [`EMI`](https://modrinth.com/mod/emi) | Recipe viewer |
| [`FTB Chunks`](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) | Chunk claiming |
| [`Waystones`](https://www.curseforge.com/minecraft/mc-mods/waystones) | Fast travel (expensive recipes) |

### Worldgen (Exploration Incentive)

| Mod | Role |
|-----|------|
| [`Terralith`](https://modrinth.com/mod/terralith) | Overworld biome diversity |
| [`Tectonic`](https://modrinth.com/mod/tectonic) | Terrain height variation, mountain ranges |
| [`Moog's Structures`](https://www.curseforge.com/minecraft/mc-mods/moogs-structure-lib) suite | Exploration rewards, dungeon loot |
| [`YUNG's Better X`](https://www.curseforge.com/minecraft/mc-mods/yungs-api-neoforge) suite | Dungeon/structure revamps |
| [`Create: Rustic Structures`](https://www.curseforge.com/minecraft/mc-mods/create-rustic-structures) | Create-themed world buildings |

---

## 3. Progression Stages — Overview

```
Stage 1: Tough Beginnings (Overworld Surface)
    │
    ▼
Stage 2a: Overgeared Stone Age (Overworld Surface)
    │  Flint tools → Stone tools via Overgeared
    ▼
Stage 2b: Overgeared Copper Age (Overworld Surface, early automation)
    │  Copper tools via Overgeared. Copper pickaxe is minimum to mine iron.
    │  Player must build Create Water Wheel + Mechanical Press.
    │  Horizontal: Storage (copper chests), Food, Gliders
    │
    ▼  [GATE: Silent Gear Anvil — expensive, requires Mechanical Press]
    │
Stage 3: Create Andesite Age + Silent Gear (Overworld, iron+ tools)
    │  Silent Gear becomes primary tool system. Iron tools unlocked.
    │  Full automation begins.
    │
    ├──── Horizontal: Backpack upgrades, Glider upgrades, Silent Gear materials
    │
    ▼
Stage 4: Void Gap & Sky Islands (Overworld, vertical expansion)
    │
    ▼
Stage 5: Molten Opal Pipeline (Overworld, midgame core)
    │
    ├──── Horizontal: Backpack tiers, Glider upgrades, Silent Gear materials
    │
    ▼
Stage 6: Nether (Brass Age, advanced Create)
    │
    ├──── Horizontal: Jetpack, TFMG, Hypertubes
    │
    ▼
Stage 7: The End (Lategame)
```

> **This is a rough sketch, not a commitment.** More stages may be inserted. Stages may merge. Resource automation gates may appear between any of these stages. The mod stack will grow — expect this to change.

### Gates (Current Hypotheses)

> **These are not the only gates.** As the pack develops, automating specific resources with Create will frequently *become* the gate. This table captures current ideas — expect it to grow.

| Gate | Requirement | Opens | Confidence |
|------|------------|-------|------------|
| **Silent Gear Anvil** | Expensive recipe (vanilla anvil-level material cost) + Create Mechanical Press assembly | Iron tools and all Silent Gear crafting | 🟢 Confirmed |
| **Void Gap Crossing** | Airship with Simulator (andesite-level components) | Sky Islands | 🟡 Likely |
| **Molten Opal Processing** | Create processing (bulk blasting, cooling TBD), fluid handling | Diamonds | 🟡 Likely |
| **Nether Portal Activation** | Crying Obsidian portal frame (fabricated via Create line) | Nether | 🟡 Likely |
| **End Portal Activation** | [TBD: placeholder] | The End | 🔴 Unknown |
| **More gates TBD** | Resource automation thresholds, new mod integration | Various | 🔴 Unknown |

---

## 4. Stage 1: Tough Beginnings (Earlygame)

### Concept

The player spawns into a world where punching trees and stone yields nothing. They must use low-tech survival mechanics to reach basic tool capability.

### Flow

```
Spawn → Mine gravel → Flint (via right-click knapping on rock)
  → Craft Flint Knife (cuts grass → Fiber Rope)
  → Craft Flint Axe → Chop trees
  → Gather wood → Build basic shelter → Flint Pickaxe
  → Mine stone → Knappable Rocks → Stone tools via Overgeared
```

### Key Design Points

- **Tough Beginnings** handles the core: no punching trees or stone.
- **Overgeared's knapping** bridges the gap: breaking stone drops knappable rock instead of cobblestone, which the player uses to craft stone-tier tools at the Stone Smithing Anvil.
- **Food**: Scavenging berries, hunting animals. Hunger Strike and Spice of Life encourage varied diets from the start.
- **Stamina**: [`Stamina For Tweakers`](minecraft/config/staminafortweakers.json5) limits sprinting — early exploration is deliberate and risky.
- **Death**: `You're in Grave Danger` preserves inventory, reducing frustration from this vulnerable period.

### 🚩 Design Flags

- **Tough Beginnings + Overgeared overlap**: Both modify early stone/tool acquisition. Needs verification of compatibility.
- **Pacing check**: How long does it take to go from spawn to first stone pickaxe? If >30 minutes, players may quit. If <5 minutes, Tough Beginnings serves no purpose. **Needs playtesting.**

---

## 5. Stage 2: Overgeared — Tool Age (Earlygame Only — Stone + Copper)

### Concept

Overgeared replaces vanilla tool crafting with a smithing minigame. The player forges tools with quality tiers that directly affect stats, via the **Stone Smithing Anvil** and later the **Smithing Anvil**.

**Important scope change**: Overgeared now covers **stone and copper tiers only**. Iron tools and above require Silent Gear. This creates a clear boundary and a natural Copper Age gap that the player must bridge through early Create automation.

### Flow

```
Stage 2a — Stone Age:
  Create Stone Smithing Anvil (shift-click stone on ground)
    → Cast tool heads (clay mold + furnace → tool cast)
    → Forge stone tools via minigame
    → Stone pickaxe allows mining copper ore

Stage 2b — Copper Age:
  Mine copper → smelt → forge copper tools via Overgeared
    → Copper pickaxe is the minimum harvest level for iron ore
    → BUT player cannot yet make iron tools — need Silent Gear
    → Player must now build Create infrastructure:
        Water Wheel → Mechanical Power → Mechanical Press
    → This is the Copper Age gap — horizontal progression time

Stage 2c — Silent Gear Gate:
  Craft expensive Silent Gear Anvil (requires Mechanical Press)
    → Silent Gear Anvil unlocked → Iron tools at last!
    → Overgeared becomes deprecated from this point
```

### Overgeared Quality System

| Quality | Durability Bonus | Mining Speed Bonus | How to Reach |
|---------|-----------------|-------------------|--------------|
| Masterwork | ×1.6 | ×1.5 | 5% chance on Perfect, or 50% with Master ingredient |
| Perfect | ×1.5 | ×1.3 | Score ≥ 0.9, needs 50 blueprint uses |
| Expert | ×1.3 | ×1.15 | Score ≥ 0.6, needs 20 blueprint uses |
| Well | ×1.0 | ×1.0 | Score ≥ 0.3, needs 10 blueprint uses |
| Poor | ×0.7 | ×0.7 | Default, needs 5 blueprint uses |

### Key Design Points

- **Blueprint progression**: Starting zone size is small (20%). Blueprint use at the Drafting Table expands it — the more you forge, the easier it becomes.
- **Casting** is the first multi-step manufacturing process: clay mold → furnace → tool cast → combine with material → forged tool. This is a tutorial in manufacturing that foreshadows Create's processing lines.
- **Material quality matters**: Higher-quality ingredients increase the chance of a higher-quality result.
- **Vanilla tool crafting is disabled** (stone through netherite) — removed from crafting table, Create Mechanical Crafter, and netherite smithing table. See [`remove_vanilla_tools.js`](minecraft/kubejs/server_scripts/remove_vanilla_tools.js).
- **Overgeared scope ends at copper**: After building the Silent Gear Anvil, Overgeared becomes mostly irrelevant. The mod may be forked later to remove unused features.

### Overgeared ↔ Silent Gear Boundary

These two gear systems are now strictly separated by tier:

| Aspect | Overgeared | Silent Gear |
|--------|-----------|-------------|
| **Role** | Tool *quality* system (limited tiers) | Primary tool crafting system (all iron+ tiers) |
| **Covers** | Stone, Copper only | Iron, Gold, Diamond, Netherite, and all custom materials |
| **When** | Earlygame only | Midgame → Endgame |
| **Unlock** | Start (Stone Smithing Anvil) | Expensive anvil recipe + Create Mechanical Press |
| **After unlock** | Deprecated | Primary gear system |
| **Conversion recipes** | N/A | Disabled (players cannot convert vanilla tools to Silent Gear) |

**Design Intent**: The player starts with Overgeared (stone → copper tools with quality). To reach iron, they must build Create infrastructure and craft an expensive Silent Gear Anvil using the Mechanical Press. This forces a meaningful Copper Age with horizontal progression. After the Silent Gear Anvil is built, Overgeared is no longer needed — Silent Gear handles all future tool and weapon crafting.

---

## 6. Stage 3: Create Automation — The Andesite Age (Midgame, Overworld)

### Concept

The player transitions from hand-crafting to automation. This stage introduces Create's core machines.

**Note**: The Andesite Age actually begins during the Copper Age gap (Stage 2b). The player needs a Mechanical Press to craft the Silent Gear Anvil, so they must build basic Create infrastructure before reaching iron tools. After the Silent Gear Anvil, full automation unfolds.

### Flow

```
[Copper Age gap — early Andesite Age begins here]
  Build Water Wheel → Mechanical power
  → Craft Mechanical Press (required for Silent Gear Anvil)
  → Craft expensive Silent Gear Anvil

[Full Andesite Age — after iron tools]
  → Expand: Crushing Wheel, Basin, Mixer, Encased Fan
  → Automate: andesite alloy, cogwheel production, iron from washing
  → Build first contraption (drill, harvester)
  → Scale up → Prepare for airship construction
```

### Key Design Points

- **Andesite alloy**: Default Create recipe (andesite + iron nugget) works here. No custom gating needed.
- **Zinc availability**: Default Create worldgen. Verify with Terralith/Tectonic that zinc spawns remain accessible.
- **The Mechanical Press is the first gate**: The player's first Create machine is built specifically to craft the Silent Gear Anvil. This gives a clear, directed goal.
- **This stage is naturally paced** by the player's understanding of Create. The Ponder system is the tutorial.
- **The Silent Gear Anvil** is the first custom gate in the Create progression. See recipe details in [Section 5](#5-stage-2-overgeared--tool-age-earlygame-only--stone--copper).

### Horizontal Progression Available in This Stage

| Thread | How to Progress |
|--------|----------------|
| **Storage** | Sophisticated Storage: basic chests → copper → iron |
| **Backpacks** | Leather backpack (early), Copper backpack (mid) |
| **Food** | Spice of Life encourages variety. Create: Food adds automation recipes. |
| **Gliders** | Basic glider (wood + leather/silk). Accessible before airship — essential for void gap safety. |

---

## 7. Stage 4: The Void Gap & Sky Islands (Midgame, Vertical Expansion)

### Concept

Above a certain altitude, the atmosphere is unstable. Blocks placed there decay and break after a few seconds. The player must build an airship (Create: Aeronautics) powerful enough to cross this gap and reach the Sky Islands above.

### The Void Gap Mechanic

When a player places a block at Y ∈ [100, 140]:
1. Block is placed normally
2. After 3-5 seconds, cracking particles appear
3. After another 2 seconds, the block breaks with no drops
4. Clear visual feedback communicates: *"this zone destroys things"*

**Purpose**: Creates a dramatic barrier that feels natural (atmospheric instability, void corruption). Forces the player to use airships rather than building a bridge.

### The Airship & The Simulator

Create: Aeronautics requires a **Simulator** component to activate the physics engine for any airship or aircraft. Without it, contraptions remain stationary. This is the key gate.

- **Unlocking the Simulator** is the goal of the Andesite Age. Its recipe should be crafted via Create processing — multiple components assembled at a Deployer/Mechanical Press, requiring a modest production line.
- **Fuel**: What powers the airship? **[TBD: placeholder]** Create: Liquid Fuel integration? Standard Create furnace engine? The Simulator itself may consume a resource.

### Sky Islands

- Generated as floating islands at Y=160+, above the void gap.
- Contain **Molten Opal lakes** — the primary resource.
- May contain unique mobs, ores, or structures **[TBD: placeholder]**.
- Exploring multiple Sky Islands is incentivized (Opal is needed in quantity, islands may have unique loot).

### 🚩 Design Flags

- **Permanent block destruction**: Warn players about the void zone. Add ambient particles at the boundary. EMI page or in-game book.
- **Fall damage**: Gliders are *essential* for Sky Islands. Ensure basic glider is accessible before airship travel.
- **Airship cost vs reward**: Building an airship requires investment. The first crossing should feel like a major achievement.

---

## 8. Stage 5: The Molten Opal Pipeline (Midgame, Core Mechanic)

### Concept

Molten Opal is a fluid found in lakes on the Sky Islands. The player must pump it, transport it via airship, and process it through Create machines to obtain **Diamonds** — which gate the Nether.

### The Pipeline

```
Sky Island (Molten Opal Lake)
    │
    ▼ [Create Hose Pulley + Pump]
Airship Fluid Tanks (Create: Aeronautics)
    │
    ▼ [Fly back through void gap]
Base Processing Facility
    │
    ▼ [Create Basin + Spout processing]
Diamonds + Byproducts
```

### Pipeline Details

| Step | Machine(s) | Input | Output |
|------|-----------|-------|--------|
| Pumping | Hose Pulley + Mechanical Pump | Molten Opal source | Molten Opal (piped) |
| Transport | Airship Fluid Tanks | Molten Opal (via pipe) | Transported fluid |
| Processing | Create Basin + Bulk Blasting/Cooling (TBD) | Molten Opal (large quantities) | Diamonds + byproducts |
| Alternative | More expensive direct processing | Molten Opal (very large quantities) | Diamonds (no cooling needed) |

**Important**: Molten Opal is a fluid. It has no corresponding block, item, or intermediate material beyond the diamond output. No solidified opal block, no opal shards — just a fluid-to-diamond processing line.

### First-Time vs Repeatable Recipes

| Recipe | Cost | Availability |
|--------|------|-------------|
| Standard Opal → Diamond | Moderate Molten Opal volume (processed via Bulk Blasting/Cooling) | Always |
| Cheap Opal → Diamond (catalyzed) | Reduced volume (requires a Nether catalyst) | After first Nether visit |
| Expensive Direct Opal → Diamond | Very large Molten Opal volume | Always (fallback) |

**Design Intent**: The first Diamond is a major achievement — multiple steps, multiple machines. After reaching the Nether, the player unlocks a more efficient catalyst that reduces Opal consumption, rewarding automation.

### 🚩 Design Flags

- **Pipeline complexity**: 6+ steps (fly → pump → transport → land → pipe → process). This is satisfying the first time but could become tedious. **Mitigation**: Once the player sets up an automated airship route or train-based fluid logistics, the pipeline runs itself.
- **Lake depletion**: Are Opal lakes finite? If yes, the player must explore for more Sky Islands (exploration incentive) or the fluid becomes renewable some other way. If no (infinite source), the pipeline is fully automatable. **Needs decision.**
- **Byproduct utility**: If processing generates byproducts (stone types, slag, etc.), they should have a use — building materials, ingredient for other Create recipes. **Without purpose, byproducts are waste.**

---

## 9. Stage 6: The Nether — Brass Age & Advanced Create (Mid→Late)

### Concept

The Nether is gated behind a **Crying Obsidian portal frame**. The player must fabricate Crying Obsidian through a Create processing line, assemble a complete portal frame, and activate it.

### The Crying Obsidian Gate

Instead of using diamonds on a standard obsidian frame, the player **crafts the frame itself** from Crying Obsidian.

**[TBD: placeholder — recipe design needed]**

Possible approach: Molten Opal + some other fluid/ingredient processed through Create machines yields Crying Obsidian. The player then builds a portal frame (minimum 10 blocks) from this material.

**Dramatic moment**: The player has built a portal to another dimension through *industrial fabrication*. This is distinct from vanilla's "mine and place" approach — it signals that this pack is about manufacturing, not mining.

### Nether Progression

```
Enter Nether
  │
  ▼
Gather: Blaze Rods (blaze burners), Quartz (brass), Ancient Debris (netherite), Glowstone
  │
  ▼
Blaze Burners → Heated Create processing (bulk smelting, steam engines)
  │
  ▼
Brass → Precision mechanisms, trains, deployers
  │
  ▼
Steam Engine → High-power generation, trains
  │
  ▼
Netherite → Silent Gear upgrades
  │
  ▼
[Prepare for The End]
```

### What the Nether Unlocks

| Item | Gates |
|------|-------|
| **Blaze Burners** | Heated Create recipes (bulk smelting, cooking, industrial ovens) |
| **Brass** | Trains, deployers, advanced mechanical components, precision crafting |
| **Steam Engine** | High-volume power generation |
| **Trains** | Long-distance logistics (sky island ↔ base ↔ Nether hub) |
| **Netherite** | Top-tier Silent Gear materials |
| **Access to Bastions/Fortresses** | Unique loot, Nether Wart for potions |

### 🚩 Design Flags

- **Crying Obsidian recipe**: Needs careful balancing. If too easy, the Nether gate is meaningless. If too hard, players get stuck. **Target**: Requires setting up an automated pipeline, but not the *full* scale of a megabase.
- **Brass age is natural**: Default Create already gates brass behind Nether quartz. No custom gating needed.
- **Trains and logistics**: The Nether is where the player's logistics empire begins. Trains connect surface bases, Sky Islands, and Nether hubs.

---

## 10. Stage 7: The End (Lategame)

**[TBD: placeholder — needs significant design]**

- How is the End portal gated? Different approach from Nether's Crying Obsidian — each dimension gate should feel distinct.
- End gameplay: Ender Dragon fight (customized via Enchancement/Champions?), end cities, elytra.
- Elytra acquisition: Major milestone. Integration with Create Jetpack for ultimate mobility.
- Silent Gear apex materials in End cities.

---

## 11. Horizontal Progression Threads

These threads run parallel to the main pipeline. They provide QoL upgrades, alternative goals, and progress that doesn't depend on the main dimension gates.

### 11.1 Storage (Sophisticated Storage)

| Tier | Material | Slots | Likely Gated By |
|------|----------|-------|-----------------|
| Basic Chest | Wood | 27 | Start |
| Copper Chest | Copper | 36 | Andesite Age |
| Iron Chest | Iron | 45 | Andesite Age |
| Gold Chest | Gold | 54 | Opal Pipeline |
| Diamond Chest | Diamond | 63 | Opal Pipeline |
| Netherite Chest | Netherite | 72 | Nether |

Sophisticated Storage has Create integration — Create sorting systems can manage storage networks.

### 11.2 Backpacks (Sophisticated Backpacks)

| Tier | Slots | Upgrade Slots | Likely Gated By |
|------|-------|---------------|-----------------|
| Leather | 27 | 1 | Start |
| Copper | 45 | 1 | Andesite Age |
| Iron | 54 | 2 | Andesite Age |
| Gold | 81 | 3 | Opal Pipeline |
| Diamond | 108 | 5 | Opal Pipeline |
| Netherite | 120 | 7 | Nether |

### 11.3 Gliders

| Glider | Material | Likely Gated By |
|--------|----------|-----------------|
| Basic Glider | Wood, Leather/Phantom Membrane | Start |
| Reinforced Glider | Iron, Leather | Andesite Age |
| **[TBD]** | Opal-involved? | Opal Pipeline |
| **[TBD]** | Nether-involved? | Nether |

**Essential before airships** — fall damage mitigation for Sky Islands.

### 11.4 Silent Gear Materials

**Silent Gear is the primary tool crafting system for iron+ tiers.** After the Silent Gear Anvil is crafted (gated behind Create Mechanical Press), all tools and weapons are made through Silent Gear.

Material tiers broadly:

| Tier | Example Materials | Harvest Level | Source |
|------|------------------|---------------|--------|
| Iron | Iron | Iron | Smelting (first tier via Silent Gear) |
| Opal-tier | Opal-based materials | Diamond | Opal Pipeline |
| Nether | Blaze, Quartz, Netherite, Crimson Steel | Netherite | Nether |
| End | End-gem materials, Tyrian Steel | End | End |

Silent Gear's support machines become midgame projects:
- **Material Grader**: Grades materials for better stats (median grade: C)
- **Salvager**: Recovers materials from old tools
- **Starlight Charger**: Charges materials with starlight energy
- **Crude Mixer**: Creates compound alloys

**Silent Gear conversion recipes are disabled** — players cannot convert vanilla tools into Silent Gear equivalents. All Silent Gear tools must be crafted from parts at the Silent Gear Anvil.

### 11.5 Food & Farming

- **Spice of Life: Carrot Edition** rewards diverse eating (health bonuses for eating many unique foods).
- **Create: Food** adds automation-friendly food production chains.
- **TFMG** (Create: The Factory Must Grow) adds industrial-scale food processing.
- **Hunger Strike** makes food management impactful.

Food is a QoL/health thread, not a main progression gate.

### 11.6 Mobility

| Method | Speed | Vertical | Gated By |
|--------|-------|----------|----------|
| Walking | Slow | No | Start |
| Glider | Fast (descending) | Descend only | Start |
| Airship | Moderate | Yes | Andesite Age (Simulator) |
| Create Jetpack | Fast | Yes (limited fuel) | Nether |
| Elytra | Very Fast | Glide | End |
| Trains | Very Fast | Tracks | Nether (brass) |

---

## 12. Recipe Design Philosophy

### Guidelines

1. **First-time recipes are expensive. Repeat recipes are cheaper.**
   - The first Diamond from Opal costs a large volume. After the first Nether visit, a catalyst reduces cost.
   - The first furnace costs 2× the usual. After smelting your first iron, the standard recipe unlocks.
   - **This rewards reaching milestones.**

2. **If it's automatable, it should be automated.**
   - Any item used more than ~16 times in the progression should have a Create processing recipe.
   - Manual crafting is for *learning*. Automated crafting is for *using*.

3. **Byproducts are not waste.**
   - Processing chains produce secondary materials that feed into other chains.
   - Opal processing produces stone-type byproducts → building materials for train tracks, airship docks.
   - This creates ecosystem interconnectivity.

4. **Recipe costs scale with automation capability.**
   - At the start: recipes use small numbers (1-4 items).
   - Opal age: moderate numbers (4-16 items).
   - Nether: large numbers (16-64 items).
   - This reflects the player's growing throughput.

5. **EMI is the documentation.**
   - All custom recipes must be visible in EMI.
   - Tooltips should guide ("This item is crafted in a Basin with Molten Opal").

### Alternate Recipe Unlock Pattern

```
Player encounters recipe gate
    │
    ├──► Has the milestone item? → Cheaper recipe available
    │
    └──► No milestone? → Expensive recipe shown
                │
                ▼
        Player does expensive recipe once
                │
                ▼
        Milestone item obtained → Cheaper recipe unlocks
```

---

## 13. Open Design Questions

These are questions that will be answered through playtesting and iteration. **This list is not exhaustive** — the design process will surface many more as mods are added, recipes are tested, and progression is evaluated.

### Major Design Work Remaining

- **Satisfying progression beyond the basic pipeline**: What does the player *do* at each stage beyond "automate the next resource"? Exploration incentives, boss fights, base-building goals, cosmetic rewards — all need deeper thought.
- **Content integration thoroughness**: Every mod in the pack should feel like it *belongs* — not just "present but irrelevant." This means custom recipe chains connecting mods, cross-mod gating, and purpose-built interactions.
- **Mod additions under consideration**: Oritech and others. Each new mod needs evaluation: does it fill a gap, add meaningful content, and integrate cleanly with Create?
- **What does "done" look like?**: The pack needs a clear end condition — whether that's a final boss, an achievement wall, or a "you've automated everything" state.

### Specific Open Questions

1. **The Simulator**: Exactly what components are needed to build a Create: Aeronautics Simulator? What's the recipe chain? This is the single most important gate in the midgame.

2. **Crying Obsidian fabrication**: What's the Create processing line that produces Crying Obsidian? (Molten Opal + water + some catalyst? Pressing operation? Basin recipe?)

3. **Molten Opal lake depletion**: Finite (exploration-driven) or infinite (fully automatable)? Both have implications for the pipeline's long-term design.

4. **Airship fuel**: What powers the airship? Standard furnace engine? Create: Liquid Fuel? Something else?

5. **The End gate**: How does the player access the End? It should feel distinct from the Nether gate. (Eyes of Ender requiring custom components? A different fabrication process?)

6. ~~**Overgeared ↔ Silent Gear balance**~~ ✅ **Resolved**: Overgeared covers stone + copper only. Silent Gear is the primary tool system for iron+ tiers. The Silent Gear Anvil (gated behind Create Mechanical Press) is the transition point. Overgeared becomes deprecated after this point. See [Section 5](#5-stage-2-overgeared--tool-age-earlygame-only--stone--copper).

7. **Byproduct ecosystem**: What exactly does Opal processing produce besides Diamonds? What are those byproducts used for?

8. **Void gap entity effects**: Should entities (mobs, players) also be affected in the void zone? Fall damage? Debuffs? Or just blocks?

9. **Endgame scope**: Is The End the final stage, or is there post-End content (Aether, etc.)? Not currently planned but open for discussion.

---

*End of Architecture Document v4. This file is a design reference — it describes intent, not implementation status. Update it when design decisions change.*
