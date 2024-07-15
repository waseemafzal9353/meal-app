import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Chinese', '#f54242'),
    new Category('c3', 'Mexican', '#f5a442'),
    new Category('c4', 'Indian', '#f5d142'),
    new Category('c5', 'French', '#368dff'),
    new Category('c6', 'Japanese', '#41d95d'),
    new Category('c7', 'American', '#9eecff'),
    new Category('c8', 'Thai', '#b9ffb0'),
    new Category('c9', 'Spanish', '#ffc7ff'),
    new Category('c10', 'Greek', '#47fced'),
    new Category('c11', 'Mediterranean', '#f5428d')
];


export const MEALS = [
    new Meal(
        'm1',
        ['c1', 'c2'],
        'Spaghetti Carbonara',
        'affordable',
        'simple',
        'https://example.com/spaghetti-carbonara.jpg',
        30,
        ['Spaghetti', 'Eggs', 'Pancetta', 'Pecorino Cheese', 'Black Pepper'],
        [
            'Cook spaghetti according to package instructions.',
            'In a bowl, beat the eggs and mix in the cheese and pepper.',
            'Cook the pancetta until crispy, then mix with the pasta.',
            'Remove from heat and quickly mix in the egg mixture.',
            'Serve immediately.'
        ],
        true,
        false,
        true,
        false
    ),
    new Meal(
        'm2',
        ['c3'],
        'Tacos',
        'affordable',
        'simple',
        'https://example.com/tacos.jpg',
        20,
        ['Tortillas', 'Ground Beef', 'Tomatoes', 'Lettuce', 'Cheese', 'Sour Cream'],
        [
            'Cook the ground beef with spices until fully cooked.',
            'Warm the tortillas.',
            'Assemble the tacos with beef, tomatoes, lettuce, cheese, and sour cream.'
        ],
        false,
        false,
        false,
        true
    ),
    new Meal(
        'm3',
        ['c4'],
        'Butter Chicken',
        'pricey',
        'challenging',
        'https://example.com/butter-chicken.jpg',
        50,
        ['Chicken', 'Butter', 'Tomato Puree', 'Cream', 'Spices'],
        [
            'Marinate the chicken with yogurt and spices for a few hours.',
            'Cook the chicken in butter until browned.',
            'Add tomato puree and cream, and let simmer until thickened.',
            'Serve with naan or rice.'
        ],
        false,
        false,
        false,
        false
    ),
    new Meal(
        'm4',
        ['c5'],
        'Croissants',
        'pricey',
        'hard',
        'https://example.com/croissants.jpg',
        180,
        ['Flour', 'Butter', 'Milk', 'Yeast', 'Sugar'],
        [
            'Mix flour, milk, yeast, and sugar to form a dough.',
            'Roll out the dough, fold in the butter, and repeat multiple times.',
            'Cut and shape the dough into croissants.',
            'Let them rise, then bake until golden brown.'
        ],
        true,
        false,
        true,
        true
    ),
    new Meal(
        'm5',
        ['c6'],
        'Sushi',
        'pricey',
        'hard',
        'https://example.com/sushi.jpg',
        60,
        ['Sushi Rice', 'Nori', 'Raw Fish', 'Vegetables', 'Soy Sauce'],
        [
            'Cook the sushi rice and let it cool.',
            'Prepare the fish and vegetables.',
            'Place the nori on a bamboo mat, spread the rice, and add fillings.',
            'Roll tightly and slice into pieces.',
            'Serve with soy sauce.'
        ],
        false,
        false,
        true,
        true
    ),
    new Meal(
        'm6',
        ['c7'],
        'Burger',
        'affordable',
        'simple',
        'https://example.com/burger.jpg',
        25,
        ['Ground Beef', 'Buns', 'Lettuce', 'Tomato', 'Cheese', 'Pickles'],
        [
            'Form the ground beef into patties and grill until desired doneness.',
            'Toast the buns on the grill.',
            'Assemble the burger with lettuce, tomato, cheese, and pickles.'
        ],
        false,
        false,
        false,
        true
    ),
    new Meal(
        'm7',
        ['c8'],
        'Pad Thai',
        'affordable',
        'medium',
        'https://example.com/pad-thai.jpg',
        40,
        ['Rice Noodles', 'Chicken', 'Tofu', 'Eggs', 'Bean Sprouts', 'Peanuts', 'Tamarind Paste'],
        [
            'Cook the rice noodles according to package instructions.',
            'Stir-fry the chicken and tofu until cooked through.',
            'Add the eggs and scramble them in the pan.',
            'Mix in the noodles, bean sprouts, and tamarind paste.',
            'Garnish with crushed peanuts.'
        ],
        true,
        false,
        false,
        true
    ),
    new Meal(
        'm8',
        ['c9'],
        'Paella',
        'pricey',
        'challenging',
        'https://example.com/paella.jpg',
        60,
        ['Rice', 'Saffron', 'Seafood', 'Chicken', 'Peas', 'Bell Peppers'],
        [
            'Cook the chicken and seafood until done.',
            'Add rice, saffron, and broth, and let it simmer.',
            'Mix in the vegetables and let the rice cook completely.',
            'Serve warm.'
        ],
        false,
        false,
        false,
        false
    ),
    new Meal(
        'm9',
        ['c10'],
        'Moussaka',
        'pricey',
        'challenging',
        'https://example.com/moussaka.jpg',
        90,
        ['Eggplants', 'Ground Beef', 'Tomatoes', 'Onions', 'Bechamel Sauce'],
        [
            'Slice and bake the eggplants until soft.',
            'Cook the ground beef with onions and tomatoes.',
            'Layer the eggplants and beef in a baking dish.',
            'Top with bechamel sauce and bake until golden brown.'
        ],
        false,
        false,
        false,
        false
    ),
    new Meal(
        'm10',
        ['c11'],
        'Falafel',
        'affordable',
        'simple',
        'https://example.com/falafel.jpg',
        45,
        ['Chickpeas', 'Onions', 'Garlic', 'Parsley', 'Spices'],
        [
            'Blend chickpeas, onions, garlic, and parsley into a mixture.',
            'Form into balls and fry until crispy.',
            'Serve with pita bread and tahini sauce.'
        ],
        true,
        true,
        true,
        true
    )
];
