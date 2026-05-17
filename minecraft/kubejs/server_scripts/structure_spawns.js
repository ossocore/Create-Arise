// =====================================================================
// BIOME CATEGORIES (Terralith + Vanilla)
// =====================================================================

const BIOMES_PLAINS = [
    "minecraft:plains", "minecraft:sunflower_plains", "minecraft:meadow",
    "terralith:blooming_plateau", "terralith:blooming_valley", "terralith:brushland",
    "terralith:lavender_valley", "terralith:lush_valley", "terralith:moonlight_valley",
    "terralith:sakura_valley", "terralith:shrubland", "terralith:steppe", "terralith:valley_clearing"
];

const BIOMES_DESERT_SAVANNA = [
    "minecraft:desert", "minecraft:badlands", "minecraft:eroded_badlands", "minecraft:wooded_badlands",
    "minecraft:savanna", "minecraft:savanna_plateau", "minecraft:windswept_savanna",
    "terralith:ancient_sands", "terralith:arid_highlands", "terralith:ashen_savanna",
    "terralith:desert_canyon", "terralith:desert_oasis", "terralith:desert_spires",
    "terralith:fractured_savanna", "terralith:gravel_desert", "terralith:hot_shrubland",
    "terralith:lush_desert", "terralith:red_oasis", "terralith:sandstone_valley",
    "terralith:savanna_badlands", "terralith:savanna_slopes", "terralith:warped_mesa", "terralith:white_mesa"
];

const BIOMES_SNOWY = [
    "minecraft:snowy_plains", "minecraft:ice_spikes", "minecraft:snowy_taiga", "minecraft:snowy_beach",
    "minecraft:frozen_river", "minecraft:snowy_slopes", "minecraft:jagged_peaks", "minecraft:frozen_peaks",
    "terralith:alpha_islands_winter", "terralith:cold_shrubland", "terralith:frozen_cliffs",
    "terralith:glacial_chasm", "terralith:ice_marsh", "terralith:skylands_winter",
    "terralith:snowy_badlands", "terralith:snowy_cherry_grove", "terralith:snowy_maple_forest",
    "terralith:snowy_shield", "terralith:wintry_lowlands"
];

const BIOMES_FOREST = [
    "minecraft:forest", "minecraft:flower_forest", "minecraft:birch_forest", "minecraft:dark_forest",
    "minecraft:old_growth_birch_forest", "minecraft:taiga", "minecraft:old_growth_pine_taiga",
    "minecraft:old_growth_spruce_taiga", "minecraft:cherry_grove", "minecraft:grove", "minecraft:windswept_forest",
    "terralith:alpine_grove", "terralith:birch_taiga", "terralith:cloud_forest", "terralith:forested_highlands",
    "terralith:lavender_forest", "terralith:moonlight_grove", "terralith:sakura_grove", "terralith:siberian_grove",
    "terralith:siberian_taiga", "terralith:temperate_highlands", "terralith:wintry_forest"
];

const BIOMES_JUNGLE = [
    "minecraft:jungle", "minecraft:bamboo_jungle", "minecraft:sparse_jungle",
    "terralith:amethyst_rainforest", "terralith:jungle_mountains", "terralith:rocky_jungle", "terralith:tropical_jungle"
];

const BIOMES_SWAMP = [
    "minecraft:swamp", "minecraft:mangrove_swamp", "terralith:orchid_swamp"
];

const BIOMES_MOUNTAIN = [
    "minecraft:windswept_hills", "minecraft:windswept_gravelly_hills", "minecraft:stony_peaks",
    "terralith:amethyst_canyon", "terralith:alpine_highlands", "terralith:basalt_cliffs",
    "terralith:bryce_canyon", "terralith:caldera", "terralith:emerald_peaks", "terralith:granite_cliffs",
    "terralith:haze_mountain", "terralith:highlands", "terralith:painted_mountains", "terralith:rocky_mountains",
    "terralith:scarlet_mountains", "terralith:stony_spires", "terralith:white_cliffs",
    "terralith:windswept_spires", "terralith:yellowstone", "terralith:yosemite_cliffs", "terralith:yosemite_lowlands"
];

const BIOMES_OCEAN_BEACH = [
    "minecraft:ocean", "minecraft:deep_ocean", "minecraft:warm_ocean", "minecraft:lukewarm_ocean",
    "minecraft:deep_lukewarm_ocean", "minecraft:cold_ocean", "minecraft:deep_cold_ocean",
    "minecraft:frozen_ocean", "minecraft:deep_frozen_ocean", "minecraft:beach", "minecraft:stony_shore",
    "terralith:deep_warm_ocean", "terralith:gravel_beach", "terralith:alpha_islands"
];

// All standard Overworld land biomes (excludes oceans and underground/nether)
const BIOMES_ALL_LAND = [].concat(BIOMES_PLAINS, BIOMES_DESERT_SAVANNA, BIOMES_SNOWY, BIOMES_FOREST, BIOMES_JUNGLE, BIOMES_SWAMP, BIOMES_MOUNTAIN);


// =====================================================================
// STRUCTURE CATEGORIES
// =====================================================================
// These arrays group the structure IDs based on where they should spawn.

const STRUCTS_PLAINS_GENERAL = [
    "minecraft:village_plains", "minecraft:pillager_outpost", "minecraft:trail_ruins",
    "terralith:fortified_village", "terralith:oak_cabin", "mbs:abandoned_house", "mbs:cozy_camp",
    "mbs:plainsandgrass_campfire", "mbs:plainsandgrass_house_2", "mbs:wheat_feild_tall_1",
    "mss:small_oak_house", "mvs:barn", "mvs:campsite", "mvs:house", "mvs:windmill",
    "mvs:wooden_wheat_farm", "create_rustic_structures:rustic_well", "betterarcheology:archeology_sites"
];

const STRUCTS_DESERT_SAVANNA = [
    "minecraft:desert_pyramid", "minecraft:village_desert", "minecraft:village_savanna",
    "terralith:fortified_desert_village", "terralith:desert_outpost", "terralith:rubble_desert",
    "mbs:desert_big_house_1", "mbs:desert_campfire", "mbs:desert_cart_1", "mss:desert_pyramid",
    "mss:desert_well", "mvs:desert_house", "mvs:acacia_log_pile", "mvs:acacia_well",
    "create_rustic_structures:rustic_windmill", "betterarcheology:fossil_sites"
];

const STRUCTS_SNOWY = [
    "minecraft:igloo", "minecraft:village_snowy", "minecraft:ocean_ruin_cold",
    "terralith:glacial_hut", "terralith:igloo", "terralith:frosted_dungeon",
    "mvs:medium_igloo_1", "mvs:small_igloo", "mvs:snowy_dog_hut", "mvs:snowy_fossil",
    "friendsandfoes:iceologer_cabin", "mowziesmobs:frostmaw_spawn"
];

const STRUCTS_FOREST = [
    "minecraft:village_taiga", "minecraft:mansion", "terralith:rubble_forest", "terralith:rubble_taiga",
    "terralith:valley_lodge", "terralith:mage_tower", "mbs:fir_well", "mbs:pine_tree", "mbs:pine_well",
    "mss:spruce_huts", "mvs:birch_well", "mvs:oak_well", "mvs:dark_oak_well", "mvs:shed",
    "create_rustic_structures:rustic_barn", "create_rustic_structures:rustic_smithy",
    "friendsandfoes:illusioner_shack", "createmechanicalcompanion:illager_workshop"
];

const STRUCTS_JUNGLE = [
    "minecraft:jungle_pyramid", "terralith:rubble_jungle", "mbs:jungle_campfire", "mbs:jungle_house_2",
    "mss:jungle", "mvs:jungle_tower", "mvs:jungle_well", "mowziesmobs:umvuthana_grove"
];

const STRUCTS_SWAMP = [
    "minecraft:swamp_hut", "terralith:witch_hut", "mbs:willow_well", "mss:mangrove", "mss:muddy_water_hole",
    "mvs:small_swamp_house"
];

const STRUCTS_MOUNTAIN = [
    "terralith:rubble_mountain", "terralith:mining_outpost", "terralith:spire", "mbs:watch_tower",
    "mbs:mini_watch_tower", "mss:volcano", "mss:castle_tower", "friendsandfoes:citadel"
];

const STRUCTS_OCEAN = [
    "minecraft:ocean_ruin_warm", "minecraft:shipwreck", "minecraft:shipwreck_beached",
    "minecraft:monument", "minecraft:buried_treasure", "mbs:pirate_stash_1",
    "mss:palm_island", "mvs:small_ship", "mvs:ocean_tower", "betterarcheology:underwater_ruins"
];

// Things that can spawn virtually anywhere on land (ruined portals, small rocks, general ruins)
const STRUCTS_ANY_LAND = [
    "minecraft:ruined_portal", "mbs:rock_pile", "mbs:bone_remains", "mbs:grave_yard",
    "mss:tree_1", "mss:tree_2", "mss:tree_3", "mvs:boulder", "mvs:paths", "mvs:cart", "mvs:pile",
    "mvs:statue_ruins"
];


// =====================================================================
// KUBEJS TAG GENERATOR LOGIC
// =====================================================================

// Helper function to turn "mod:structure_name" into "mod:has_structure/structure_name"
function getTags(structureArray) {
    return structureArray.map(id => {
        let parts = id.split(':');
        return `${parts[0]}:has_structure/${parts[1]}`;
    });
}

ServerEvents.tags('worldgen/biome', event => {

    // 1. Map Plains structures to Plains biomes
    getTags(STRUCTS_PLAINS_GENERAL).forEach(tag => event.add(tag, BIOMES_PLAINS));

    // 2. Map Desert/Savanna structures to Desert/Savanna biomes
    getTags(STRUCTS_DESERT_SAVANNA).forEach(tag => event.add(tag, BIOMES_DESERT_SAVANNA));

    // 3. Map Snowy structures to Snowy biomes
    getTags(STRUCTS_SNOWY).forEach(tag => event.add(tag, BIOMES_SNOWY));

    // 4. Map Forest structures to Forest biomes
    getTags(STRUCTS_FOREST).forEach(tag => event.add(tag, BIOMES_FOREST));

    // 5. Map Jungle structures to Jungle biomes
    getTags(STRUCTS_JUNGLE).forEach(tag => event.add(tag, BIOMES_JUNGLE));

    // 6. Map Swamp structures to Swamp biomes
    getTags(STRUCTS_SWAMP).forEach(tag => event.add(tag, BIOMES_SWAMP));

    // 7. Map Mountain structures to Mountain biomes
    getTags(STRUCTS_MOUNTAIN).forEach(tag => event.add(tag, BIOMES_MOUNTAIN));

    // 8. Map Ocean/Beach structures to Ocean biomes
    getTags(STRUCTS_OCEAN).forEach(tag => event.add(tag, BIOMES_OCEAN_BEACH));

    // 9. Map universal structures to ALL land biomes
    getTags(STRUCTS_ANY_LAND).forEach(tag => event.add(tag, BIOMES_ALL_LAND));

    console.info("[KubeJS] Successfully categorized and linked Terralith biomes to structure tags.");
});