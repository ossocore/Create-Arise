// Gate the Silent Gear Anvil behind Create Mechanical Press infrastructure.
// - Removes the default cheap recipe for silentgear:stone_anvil
// - Adds an expensive recipe requiring iron sheets (made via Mechanical Press)
// - This forces the player through a Copper Age where they must build
//   basic Create automation before unlocking iron tools.

ServerEvents.recipes(event => {

    // ================================================================
    // Remove the default Silent Gear Anvil recipe
    // ================================================================
    event.remove({ output: 'silentgear:stone_anvil' });

    // ================================================================
    // Add expensive recipe requiring Create Mechanical Press processing
    // 
    // The recipe requires Iron Sheets, which are made by pressing an
    // Iron Ingot in the Mechanical Press. This naturally gates the anvil
    // behind Create infrastructure without consuming the press itself.
    //
    // Cost breakdown:
    //   3x Iron Block     = 27 iron ingots (matching vanilla anvil cost)
    //   2x Iron Sheet     = 2 iron ingots pressed via Mechanical Press
    //   1x Andesite Casing = Create component (andesite alloy + wood)
    //   3x Smooth Stone   = base building material
    //
    // Total: ~29 iron ingots + create components = meaningful copper age gate
    // ================================================================
    event.shaped('silentgear:stone_anvil', [
        'III',
        'SAS',
        'SSS'
    ], {
        I: 'minecraft:iron_block',
        S: 'create:iron_sheet',
        A: 'create:andesite_casing'
    });

});
