// =====================================================================
// CHEST LOOT TWEAKS — Replace gated items with appropriate alternatives
// =====================================================================
//
// Diamonds and iron are gated behind progression milestones in this modpack:
//   - Diamonds → must be processed from Molten Opal (sky islands)
//   - Iron     → gated behind the Silent Gear Anvil (requires Create press + sheets)
//
// Targeted chests:
//   - All vanilla minecraft:chests/*  (dungeons, temples, villages, bastions, etc.)
//   - MVS, MBS, MSS (Moog's structure suite)

LootJS.lootTables((event) => {

    // Target Regex matching Vanilla and Moog's chests
    const targetChests = [
        /^minecraft:chests\/.*/, // Vanilla chests are in a chests folder
        /^(mvs|mbs|mss):.*/      // Moog's chests are directly in the root folder
    ];

    // ================================================================
    // REPLACEMENT MODIFIER
    // ================================================================
    event.modifyLootTables(targetChests)

        // ================================================================
        // DIAMOND ITEMS → Stone / Leather (Overgeared early-game tier)
        // ================================================================
        .replaceItem('minecraft:diamond', 'minecraft:copper_ingot')

        // Diamond tools → Stone tools
        .replaceItem('minecraft:diamond_sword', 'minecraft:stone_sword')
        .replaceItem('minecraft:diamond_pickaxe', 'minecraft:stone_pickaxe')
        .replaceItem('minecraft:diamond_axe', 'minecraft:stone_axe')
        .replaceItem('minecraft:diamond_shovel', 'minecraft:stone_shovel')
        .replaceItem('minecraft:diamond_hoe', 'minecraft:stone_hoe')

        // Diamond armor → Leather armor
        .replaceItem('minecraft:diamond_helmet', 'minecraft:leather_helmet')
        .replaceItem('minecraft:diamond_chestplate', 'minecraft:leather_chestplate')
        .replaceItem('minecraft:diamond_leggings', 'minecraft:leather_leggings')
        .replaceItem('minecraft:diamond_boots', 'minecraft:leather_boots')

        // ================================================================
        // IRON ITEMS → Create andesite-age components
        // ================================================================
        .replaceItem('minecraft:iron_ingot', 'create:andesite_alloy')

        // Iron tools → basic Create components
        .replaceItem('minecraft:iron_sword', 'create:cogwheel')
        .replaceItem('minecraft:iron_pickaxe', 'create:andesite_casing')
        .replaceItem('minecraft:iron_axe', 'create:shaft')
        .replaceItem('minecraft:iron_shovel', 'create:large_cogwheel')
        .replaceItem('minecraft:iron_hoe', 'create:hand_crank')

        // Iron armor → andesite alloy
        .replaceItem('minecraft:iron_helmet', 'create:andesite_alloy')
        .replaceItem('minecraft:iron_chestplate', 'create:andesite_alloy')
        .replaceItem('minecraft:iron_leggings', 'create:andesite_alloy')
        .replaceItem('minecraft:iron_boots', 'create:andesite_alloy')

        // Block removals
        .removeItem('minecraft:diamond_block')
        .removeItem('minecraft:iron_block');


    // ================================================================
    // ARTIFACT BONUS — 15% chance for any artifact
    // ================================================================
    LootJS.lootTables(event => {

        const artifacts = [
            'artifacts:anglers_hat',
            'artifacts:antidote_vessel',
            'artifacts:aqua_dashers',
            'artifacts:bunny_hoppers',
            'artifacts:charm_of_shrinking',
            'artifacts:charm_of_sinking',
            'artifacts:chorus_totem',
            'artifacts:cloud_in_a_bottle',
            'artifacts:cowboy_hat',
            'artifacts:cross_necklace',
            'artifacts:crystal_heart',
            'artifacts:digging_claws',
            'artifacts:everlasting_beef',
            'artifacts:feral_claws',
            'artifacts:fire_gauntlet',
            'artifacts:flame_pendant',
            'artifacts:flippers',
            'artifacts:golden_hook',
            'artifacts:helium_flamingo',
            'artifacts:kitty_slippers',
            'artifacts:lucky_scarf',
            'artifacts:night_vision_goggles',
            'artifacts:novelty_drinking_hat',
            'artifacts:obsidian_skull',
            'artifacts:onion_ring',
            'artifacts:panic_necklace',
            'artifacts:pickaxe_heater',
            'artifacts:plastic_drinking_hat',
            'artifacts:pocket_piston',
            'artifacts:power_glove',
            'artifacts:rooted_boots',
            'artifacts:running_shoes',
            'artifacts:scarf_of_invisibility',
            'artifacts:shock_pendant',
            'artifacts:snorkel',
            'artifacts:snowshoes',
            'artifacts:steadfast_spikes',
            'artifacts:strider_shoes',
            'artifacts:superstitious_hat',
            'artifacts:thorn_pendant',
            'artifacts:umbrella',
            'artifacts:universal_attractor',
            'artifacts:vampiric_glove',
            'artifacts:villager_hat',
            'artifacts:warp_drive',
            'artifacts:whoopee_cushion',
            'artifacts:withered_bracelet'
        ];

        event.getLootTable(targetChests)
            .createPool(pool => {

                pool.randomChance(0.15);

                artifacts.forEach(artifact => {
                    pool.addEntry(
                        LootEntry.of(artifact).withWeight(1)
                    );
                });
            });

        console.info('[Create: Arise] Artifact loot pool loaded.');
    });

    console.info('[Create: Arise] Chest loot tweaks loaded — diamond→stone/leather, iron→Create components. 15% artifact chance added.');
});