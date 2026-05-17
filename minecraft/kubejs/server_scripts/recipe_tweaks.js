
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

    event.remove({ output: 'toms_storage:storage_terminal' });

    //new storage terminal recipe
    event.shaped('toms_storage:storage_terminal', [
        'ABA',
        'CDE',
        'ABA'
    ], {
        A: 'create:andesite_casing',
        B: 'minecraft:dried_kelp',
        C: '#minecraft:chests',
        D: 'minecraft:redstone',
        E: 'minecraft:glass'
    });


    //remove old physics assembler recipe
    event.remove({ output: 'simulated:physics_assembler' })

    //new physics assembler recipe
    event.shaped('simulated:physics_assembler', [
        'XAX',
        'BCB',
        'DED'
    ], {
        A: 'create:analog_lever',
        B: 'create:andesite_casing',
        C: 'simulated:spring',
        D: 'create:cardboard_block',
        E: 'minecraft:iron_block',
        X: 'minecraft:cobblestone'
    });

});
