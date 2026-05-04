
BlockEvents.drops(event => {
    if(event.tool?.id === "minecraft:wooden_pickaxe" && event.block.id === "minecraft:stone"){
        event.removeItem("minecraft:cobblestone");
        event.addItem(Item.of("overgeared:knappable_rock"))
    }
});