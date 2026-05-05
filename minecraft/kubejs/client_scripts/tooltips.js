const VANILLA_TOOLS = [
    'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel',
    'minecraft:iron_hoe', 'minecraft:iron_sword',
    'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel',
    'minecraft:golden_hoe', 'minecraft:golden_sword',
    'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel',
    'minecraft:diamond_hoe', 'minecraft:diamond_sword',
    'minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_shovel',
    'minecraft:netherite_hoe', 'minecraft:netherite_sword'
];

ItemEvents.modifyTooltips(event => {
    event.modify(VANILLA_TOOLS, text => {
        text.add(Text.red('§c§l✖ Unusable §7§oConvert to §e§oSilent Gear §7§oat the Anvil!'))
    });

    event.modify('kubejs:infernal_catalyst', text => {
        text.add(Text.of('§7§oA volatile concentrate of diamond and lava'));
        text.add(Text.of(''));
        text.add(Text.of('§6❖ Right-click an obsidian portal frame to activate'));
    });
});
