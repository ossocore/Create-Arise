# Create: Arise — Performance Tuning Implementation Plan

## Overview

This plan addresses 7 performance issues identified during audit, ordered by impact. Each change is specified with exact file paths and values.

---

## Step 1: Enable Flywheel Backend (CRITICAL)

**File:** [`minecraft/config/flywheel-client.toml`](../minecraft/config/flywheel-client.toml)

**Change:** Set `backend` from `"OFF"` to `"DEFAULT"`

```toml
# Before:
backend = "OFF"

# After:
backend = "DEFAULT"
```

**Why:** Flywheel is Create's dedicated GPU-instanced rendering engine. When OFF, Create uses vanilla block entity rendering — extremely CPU-heavy for all those cogwheels, shafts, belts, and contraptions. Setting to DEFAULT auto-selects the best backend (INDIRECT when shaders active, GPU-instanced otherwise). With `iris-flywheel-compat` already installed, this is safe.

**Expected impact:** Major CPU improvement in bases with Create machinery.

---

## Step 2: Add JVM Garbage Collection Tuning Flags (CRITICAL)

**File:** [`instance.cfg`](../instance.cfg)

**Changes needed:**
1. Set `OverrideJavaArgs=true` (line 33)
2. Set `MaxMemAlloc=10240` (line 27) — see Step 4
3. Set `JavaArgs` with the following flags (new line, after `OverrideJavaArgs`)

**Note:** In PrismLauncher's `instance.cfg`, custom JVM args are specified differently depending on the launcher version. The standard approach is to add a `JavaArgs` field:

```
OverrideJavaArgs=true
JavaArgs=-XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UseStringDeduplication -XX:+ParallelRefProcEnabled -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+PerfDisableSharedMem
```

**Flag breakdown:**

| Flag | Purpose |
|------|---------|
| `-XX:+UseG1GC` | Modern garbage collector, designed for large heaps |
| `-XX:G1HeapRegionSize=4M` | Optimal region size for Minecraft's allocation patterns |
| `-XX:+UseStringDeduplication` | Deduplicates identical strings — saves 10-15% heap in modded MC |
| `-XX:+ParallelRefProcEnabled` | Processes references in parallel during GC |
| `-XX:+DisableExplicitGC` | Prevents mods from forcing full GCs |
| `-XX:+AlwaysPreTouch` | Pre-allocates heap memory at startup (reduces runtime stutter) |
| `-XX:+PerfDisableSharedMem` | Disables perf memory mapping (reduces overhead on Windows) |

**Expected impact:** Reduced GC stutter, more consistent frame times.

---

## Step 3: Enable C2ME Density Function Compiler (HIGH)

**File:** [`minecraft/config/c2me.toml`](../minecraft/config/c2me.toml)

**Change:** Set `useDensityFunctionCompiler` from `"default"` (false) to `true`

```toml
# In [vanillaWorldGenOptimizations] section:
# Before:
useDensityFunctionCompiler = "default"

# After:
useDensityFunctionCompiler = true
```

**Why:** This compiles worldgen noise functions to JVM bytecode, significantly accelerating terrain generation. With Terralith, Biomes O' Plenty, and Tectonic all generating custom terrain, this directly addresses chunk loading performance.

**Expected impact:** Faster chunk generation, reduced stutter when exploring new terrain.

---

## Step 4: Increase RAM Allocation (HIGH)

**File:** [`instance.cfg`](../instance.cfg)

**Change:** Increase `MaxMemAlloc` from `8192` to `10240`

```ini
# Before:
MaxMemAlloc=8192

# After:
MaxMemAlloc=10240
```

**Why:** 8GB is workable but tight for ~100 mods with custom worldgen, Create contraptions, and entity-heavy gameplay. 10GB gives enough headroom for G1GC to work efficiently while staying comfortably within typical 16GB system limits.

**Note:** If you have 16GB+ of system RAM, 12GB (`12288`) would be even better. If you only have 16GB total RAM, 10GB is the safe recommendation leaving 6GB for OS and other apps.

---

## Step 5: Enable ModernFix Performance Mixins (MEDIUM)

**File:** [`minecraft/config/modernfix-mixins.properties`](../minecraft/config/modernfix-mixins.properties)

**Changes:** Append these lines to the end of the file:

```properties
# User performance overrides
mixin.perf.dynamic_resources=true
mixin.perf.compact_entity_models=true
mixin.perf.faster_item_rendering=true
mixin.perf.deduplicate_location=true
mixin.perf.dynamic_languages=true
mixin.perf.faster_capabilities.bytecode_analysis=true
```

**Why:** These are ModernFix performance mixins that are disabled by default for maximum compatibility. They're well-tested and unlikely to cause issues in a modern NeoForge setup:

| Mixin | Gain |
|-------|------|
| `dynamic_resources` | Lazily loads model textures — faster startup, less CPU |
| `compact_entity_models` | Compresses entity model data — less memory, faster rendering |
| `faster_item_rendering` | Optimizes item render pipeline — better GUI/inventory FPS |
| `deduplicate_location` | Deduplicates Identifier strings — minor CPU/memory |
| `dynamic_languages` | Lazy language loading — **OMITTED (crashes with Connector/Sable)** |
| `faster_capabilities.bytecode_analysis` | Optimizes capability lookups — faster Forge event handling |

---

## Step 6: Lower Simulation Distance (MEDIUM)

**File:** [`minecraft/options.txt`](../minecraft/options.txt)

**Change:** Set `simulationDistance` from `10` to `6`

```properties
# Before:
simulationDistance:10

# After:
simulationDistance:6
```

**Why:** Simulation distance controls how many chunks around the player tick entities, fluids, and block entities. At 10 chunks with Terralith, Champions, Mowzie's Mobs, and the structure mods, this is a significant tick load. Dropping to 6 reduces tick processing area by **64%** (from ~314 chunks to ~113 chunks).

**Render distance** stays at 14 — you'll see the same world, just fewer chunks are actively simulating. Mobs will only spawn and function within 6 chunks.

**Note:** This is a per-player option — each player can adjust it in their own options if they want higher/lower.

---

## Step 7: Tune CPU-Heavy Visual Mods (LOWER)

### 7a. Smart Particles — Lower particle limit

**File:** [`minecraft/config/smart_particles/config.json`](../minecraft/config/smart_particles/config.json)

```json
{
  // Before:
  "particleLimit": 5000,
  
  // After:
  "particleLimit": 2000
}
```

### 7b. Particle Rain — Reduce particle density

**File:** [`minecraft/config/particlerain/config.json`](../minecraft/config/particlerain/config.json)

```json
{
  "perf": {
    // Before:
    "maxParticleAmount": 1500,
    "particleDensity": 100,
    
    // After:
    "maxParticleAmount": 800,
    "particleDensity": 60,
  }
}
```

### 7c. Entity Culling — Already well configured

[`entityculling.json`](../minecraft/config/entityculling.json) already has `tickCulling: true` and `create:contraption` whitelisted — this is fine as-is.

### 7d. Create — Lower fan particle density (optional)

**File:** [`minecraft/config/create-client.toml`](../minecraft/config/create-client.toml)

```toml
# Before:
fanParticleDensity = 0.5

# After:
fanParticleDensity = 0.25
```

---

## Execution Order

This is the recommended order to apply changes, matching the impact priority:

1. Toggle **Flywheel** backend (`flywheel-client.toml`) — restart required ✓
2. Add **JVM args** + **RAM bump** (`instance.cfg`) — restart required ✓
3. Enable **C2ME density compiler** (`c2me.toml`) — restart required ✓
4. Add **ModernFix mixins** (`modernfix-mixins.properties`) — restart required ✓
5. Lower **simulation distance** (`options.txt`) — applies immediately ✓
6. Tune **particle limits** (smart_particles, particlerain) — restart required ✓
7. Lower **Create fan particles** (`create-client.toml`) — restart required ✓

Steps 1-4 and 6-7 require a game restart. Step 5 takes effect immediately.

---

## Expected Results

| Area | Before | After |
|------|--------|-------|
| Create machinery rendering | CPU fallback rendering | GPU-instanced (Flywheel) |
| GC stutter | Default G1GC (untuned) | Tuned G1GC + string dedup |
| Chunk generation speed | Slow (interpreted noise) | Fast (compiled bytecode) |
| RAM headroom | Tight (8GB) | Comfortable (10GB) |
| Entity/item rendering | Standard path | Optimized (ModernFix) |
| Entity ticking load | 314 chunks | 113 chunks (~64% less) |
| Particle CPU cost | High (5k+ limit) | Moderate (2k limit) |
