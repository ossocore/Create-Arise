// Remove all vanilla tool recipes (iron through netherite).
//
// Combined with disable_vanilla_tools.js:
//   - Recipes are removed (this file) — prevents crafting
//   - Chest-loot tools are disabled (disable_vanilla_tools.js) — prevents usage
//
// Players must convert chest-loot vanilla tools to Silent Gear at the Anvil.
// Stone & wood tiers are handled by Overgeared (early game) and are not
// affected here — see overgeared_tweak.js for stone-tier adjustments.

ServerEvents.recipes(event => {

    // ================================================================
    // Iron tier
    // ================================================================
    event.remove({ output: 'minecraft:iron_pickaxe' });
    event.remove({ output: 'minecraft:iron_axe' });
    event.remove({ output: 'minecraft:iron_shovel' });
    event.remove({ output: 'minecraft:iron_hoe' });
    event.remove({ output: 'minecraft:iron_sword' });

    // ================================================================
    // Gold tier
    // ================================================================
    event.remove({ output: 'minecraft:golden_pickaxe' });
    event.remove({ output: 'minecraft:golden_axe' });
    event.remove({ output: 'minecraft:golden_shovel' });
    event.remove({ output: 'minecraft:golden_hoe' });
    event.remove({ output: 'minecraft:golden_sword' });

    // ================================================================
    // Diamond tier
    // ================================================================
    event.remove({ output: 'minecraft:diamond_pickaxe' });
    event.remove({ output: 'minecraft:diamond_axe' });
    event.remove({ output: 'minecraft:diamond_shovel' });
    event.remove({ output: 'minecraft:diamond_hoe' });
    event.remove({ output: 'minecraft:diamond_sword' });

    // ================================================================
    // Netherite tier — also remove the smithing table upgrades
    // ================================================================
    event.remove({ output: 'minecraft:netherite_pickaxe' });
    event.remove({ output: 'minecraft:netherite_axe' });
    event.remove({ output: 'minecraft:netherite_shovel' });
    event.remove({ output: 'minecraft:netherite_hoe' });
    event.remove({ output: 'minecraft:netherite_sword' });

    // Remove netherite smithing trim template recipe (prevents upgrade path)
    // These are smithing table recipes, not crafting table, so explicit removal is needed
    event.remove({ type: 'minecraft:smithing_transform', output: 'minecraft:netherite_pickaxe' });
    event.remove({ type: 'minecraft:smithing_transform', output: 'minecraft:netherite_axe' });
    event.remove({ type: 'minecraft:smithing_transform', output: 'minecraft:netherite_shovel' });
    event.remove({ type: 'minecraft:smithing_transform', output: 'minecraft:netherite_hoe' });
    event.remove({ type: 'minecraft:smithing_transform', output: 'minecraft:netherite_sword' });

});
