
ServerEvents.recipes(event => {
    // Remove default Create andesite alloy recipes
    event.remove({ output: 'create:andesite_alloy' });

    event.shaped('1x create:andesite_alloy', [
        'ABC',
        'ABC'
    ], {
        A: 'minecraft:andesite',
        B: 'minecraft:iron_nugget',
        C: 'minecraft:gravel'
    }
    );

    // Mechanical Mixer recipe
    event.recipes.create.mixing(
        '1x create:andesite_alloy',
        [
            'minecraft:andesite',
            'minecraft:iron_ingot',
            'minecraft:gravel'
        ]
    );


    // Remove default chest recipe
    event.remove({ output: 'minecraft:chest' });

    // Add new chest recipe with iron nugget in the center
    event.shaped('minecraft:chest', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:iron_nugget'
    });

});
