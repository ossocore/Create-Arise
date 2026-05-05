// Disable vanilla tools — make them unusable while keeping them in chest loot.
//
// Vanilla tools still generate in chests (structures, dungeons, etc.), but:
//   - Block breaking with any vanilla tool is cancelled (user gets a chat message)
//   - Damage dealt with any vanilla weapon is cancelled (user gets a chat message)
//
// Tooltips are handled in client_scripts/tooltips.js.
//
// Players must convert vanilla tools to Silent Gear equivalents at the Anvil.
// This preserves progression: chest loot becomes a *source of materials*, not a bypass.

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

// ================================================================
// Block breaking — cancel any attempt to break blocks with a
// vanilla tool. The player receives a chat message explaining why.
// ================================================================
BlockEvents.broken(event => {
    const heldItem = event.player.mainHandItem;
    if (heldItem.empty) return;
    if (VANILLA_TOOLS.includes(heldItem.id)) {
        event.cancel();
        event.player.tell(Text.of('§c✖ Vanilla tools are unusable! Convert to Silent Gear at the Anvil.'));
    }
});

// ================================================================
// Entity damage — cancel damage dealt by vanilla weapons.
// This prevents combat use while still allowing the tool to be
// held (so it's still visible in inventories / chest UI).
// ================================================================
EntityEvents.hurt(event => {
    const { source } = event;
    // Only cancel if the damage source is a player attacking with a vanilla weapon
    if (!source.player) return;
    const heldItem = source.player.mainHandItem;
    if (heldItem.empty) return;
    if (VANILLA_TOOLS.includes(heldItem.id)) {
        event.cancel();
        source.player.tell(Text.of('§c✖ Vanilla weapons are unusable! Convert to Silent Gear at the Anvil.'));
    }
});
