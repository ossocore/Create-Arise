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
