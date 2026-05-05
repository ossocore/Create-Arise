// Nether Portal Gating — Infernal Catalyst system

const CATALYST = 'kubejs:infernal_catalyst';

// Load Java classes once at top level
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
const $Direction = Java.loadClass('net.minecraft.core.Direction');
const $PortalShape = Java.loadClass('net.minecraft.world.level.portal.PortalShape');
const $Axis = Java.loadClass('net.minecraft.core.Direction$Axis');


// Disable vanilla portal lighting; handle catalyst activation
BlockEvents.rightClicked('minecraft:obsidian', event => {
    var player = event.player;
    var item = event.item;
    var level = event.level;
    var block = event.block;

    if (level.isClientSide() || !item) return;

    if (item.id === CATALYST) {
        if (lightPortal(level, block.pos)) {
            if (!player.isCreative()) item.shrink(1);
            player.tell(Text.of('§a✔ Portal activated!'));
            event.cancel();
        } else {
            player.tell(Text.of('§c✖ No valid portal frame found!'));
            player.tell(Text.of('§7  Build a standard obsidian frame (4×5 minimum, upright).'));
        }
    } else if (item.id === 'minecraft:flint_and_steel' || item.id === 'minecraft:fire_charge') {
        event.cancel();
        player.tell(Text.of('§c✖ Obsidian portals are disabled!'));
        player.tell(Text.of('§7  Use an §eInfernal Catalyst§7 to activate the portal.'));
    }
});


// Portal lighting via vanilla PortalShape API
function lightPortal(level, clickedPos) {
    try {
        // clickedPos is an obsidian frame block. PortalShape needs a position
        // INSIDE the portal interior, not on the frame. Try all 6 adjacent
        // positions to find the interior.
        var directions = [
            $Direction.UP, $Direction.DOWN,
            $Direction.NORTH, $Direction.SOUTH,
            $Direction.EAST, $Direction.WEST
        ];

        for (var i = 0; i < 6; i++) {
            var interiorPos = clickedPos.relative(directions[i]);

            // findEmptyPortalShape returns an Optional<PortalShape>
            var shapeX = $PortalShape.findEmptyPortalShape(level, interiorPos, $Axis.X);
            if (shapeX.isPresent()) {
                shapeX.get().createPortalBlocks();
                return true;
            }

            var shapeZ = $PortalShape.findEmptyPortalShape(level, interiorPos, $Axis.Z);
            if (shapeZ.isPresent()) {
                shapeZ.get().createPortalBlocks();
                return true;
            }
        }

        return false;
    } catch (err) {
        console.error('[Create: Arise] portal lighting failed: ' + err);
        return false;
    }
}


// Recipe
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        Item.of(CATALYST, 1),
        [
            'minecraft:diamond',
            'minecraft:redstone',
            Fluid.of('minecraft:lava', 500)
        ]
    );
});

console.info('[Create: Arise] Nether Gating loaded — Infernal Catalyst system');
