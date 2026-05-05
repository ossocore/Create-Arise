// Infernal Catalyst — used to light obsidian nether portals
StartupEvents.registry('item', event => {
    event.create('infernal_catalyst')
        .displayName('Infernal Catalyst')
        .maxStackSize(16);
});
