// Tooltips for disabled vanilla tools.
// Must be in client_scripts for player-side display.
// See server_scripts/disable_vanilla_tools.js for the server-side logic.

const VANILLA_TOOLS = [
    // Iron
    'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel',
    'minecraft:iron_hoe', 'minecraft:iron_sword',
    // Gold
    'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel',
    'minecraft:golden_hoe', 'minecraft:golden_sword',
    // Diamond
    'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel',
    'minecraft:diamond_hoe', 'minecraft:diamond_sword',
    // Netherite
    'minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_shovel',
    'minecraft:netherite_hoe', 'minecraft:netherite_sword'
];

ItemEvents.modifyTooltips(event => {
    event.modify(VANILLA_TOOLS, text => {
        text.add(Text.red(
            '§c§l✖ Unusable §7§oConvert to a §e§oSilent Gear §7§otool at the Anvil!'))
    });
});