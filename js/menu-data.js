/* Shawarma Friends — full menu. Prices in AUD. */
const MENU = [
  {
    id: "shawarma",
    label: "Shawarma",
    groups: [
      {
        title: "Wraps",
        items: [
          { name: "Meat Shawarma Wrap", price: 16, desc: "Tahini, onion, parsley, tomato, pickles" },
          { name: "Chicken Shawarma Wrap", price: 14, desc: "Garlic sauce, pickles" },
          { name: "Mixed Shawarma Wrap", price: 17, desc: "Tahini, onion, parsley, tomato, garlic, pickles" },
          { name: "Kofta Wrap", price: 15, desc: "Hummus, tahini, onion, parsley, tomato, pickles" },
          { name: "Chicken Tawouk Wrap", price: 15, desc: "Garlic, pickles, coleslaw, chips" },
          { name: "Falafel Wrap", price: 13, desc: "Hummus, tahini, pickles, lettuce, tomato, parsley" },
          { name: "Crispy Chicken Wrap", price: 16, desc: "Mayo, pickles, lettuce" },
          { name: "Crispy Chicken Zinger Wrap", price: 17, desc: "Chilli mayo, pickles, lettuce, cheese" },
          { name: "Chicken Schnitzel Wrap", price: 16, desc: "Mayo, pickles, lettuce" },
          { name: "French Fries Wrap", price: 11, desc: "Coleslaw, pickles, mayo, tomato sauce" }
        ]
      },
      {
        title: "Snack Packs",
        note: "Served with your choice of sauce.",
        items: [
          { name: "Meat Shawarma Snack Pack", price: 23 },
          { name: "Chicken Shawarma Snack Pack", price: 21 },
          { name: "Mixed Shawarma Snack Pack", price: 24 },
          { name: "Crispy Chicken Snack Pack", price: 26 }
        ]
      },
      {
        title: "Shawarma Plates",
        items: [
          { name: "Arabic Meat Shawarma Plate", price: 25, desc: "Arab meat roll cut into 6 pieces, chips, garlic sauce, tahini, pickles, coleslaw, spicy bread, and any drink" },
          { name: "Arabic Chicken Shawarma Plate", price: 23, desc: "Arab chicken roll, chips, garlic sauce, tomato sauce, pickles, coleslaw, spicy bread, and any drink" },
          { name: "Meat Shawarma Plate", price: 35, desc: "Two meat rolls, garlic, tahini, hummus, pickles, small chips, coleslaw" },
          { name: "Chicken Shawarma Plate", price: 34, desc: "Two chicken rolls, garlic, tahini, hummus, pickles, small chips, coleslaw" },
          { name: "Mixed Shawarma Plate", price: 36, desc: "One meat roll and one chicken roll, garlic, tahini, hummus, pickles, small chips, coleslaw" }
        ]
      },
      {
        title: "Shawarma by Weight",
        note: "Carved off the spit, packed to take home.",
        items: [
          { name: "Chicken — 250 g", price: 21 },
          { name: "Chicken — 500 g", price: 39 },
          { name: "Chicken — 1 kg", price: 61 },
          { name: "Meat — 250 g", price: 23 },
          { name: "Meat — 500 g", price: 41 },
          { name: "Meat — 1 kg", price: 66 }
        ]
      }
    ]
  },
  {
    id: "grill",
    label: "Charcoal Grill",
    groups: [
      {
        title: "Charcoal Grill",
        items: [
          { name: "Mixed Grill", price: 37, desc: "One lamb, one chicken, one kofta and one chicken kebab skewer, hummus, baba ghanoush, garlic, pickles, spicy bread" },
          { name: "Mashawi Plate", price: 24, desc: "Any two skewers — chicken, lamb, kofta or chicken kebab — with spicy bread and garlic" },
          { name: "Lamb Cutlets", price: 41, desc: "Garlic, pickles, baba ghanoush, hummus, and salad" },
          { name: "Ribs", price: 41, desc: "Garlic, pickles, baba ghanoush, hummus, and salad" },
          { name: "Charcoal Fish", price: 26, desc: "Two barramundi fillets, hummus, pickles, tartare sauce and chips" }
        ]
      }
    ]
  },
  {
    id: "mains",
    label: "Mains",
    groups: [
      {
        title: "Rice Mains",
        items: [
          { name: "Rice Kabsa", price: 26, desc: "Yoghurt cucumber, fresh tomato sauce" },
          { name: "Rice Mandi", price: 26, desc: "Yoghurt cucumber, fresh tomato sauce, and kabsa sauce" },
          { name: "Rice Mansaf", price: 26, desc: "Yoghurt cucumber, fresh tomato sauce, and kabsa sauce" },
          { name: "Fatteh Shawarma", price: 24, desc: "Fried bread, yellow rice, nuts, choice of garlic or tahini sauce" },
          { name: "Lemon & Garlic Chicken", price: 26, desc: "Grilled chicken breast, lemon, garlic, choice of rice or chips" }
        ]
      }
    ]
  },
  {
    id: "bakery",
    label: "Pide & Manoush",
    groups: [
      {
        title: "Pide",
        items: [
          { name: "Lamb Shawarma Pide", price: 27, desc: "Shawarma meat, cheese, feta" },
          { name: "Chicken Shawarma Pide", price: 25, desc: "Chicken shawarma, cheese, mushroom" },
          { name: "Sujuk Friends Pide", price: 25, desc: "Cheese, sujuk, chicken, onion, tomato, capsicum" },
          { name: "Sujuk Pide", price: 25, desc: "Sujuk, cheese, olive, feta, egg splash" },
          { name: "Spinach Pide", price: 25, desc: "Spinach, cheese, feta" },
          { name: "Vegetarian Pide", price: 25, desc: "Pizza sauce, cheese, mushroom, onion, olive, tomato, capsicum" }
        ]
      },
      {
        title: "Manoush",
        items: [
          { name: "Za'atar (Oregano)", price: 6 },
          { name: "Za'atar with Cheese", price: 10 },
          { name: "Za'atar with Vegetables", price: 10 },
          { name: "Muhammara", price: 9 },
          { name: "Muhammara with Cheese", price: 11 },
          { name: "Cheese Halloumi", price: 11 },
          { name: "Triple Cheese", price: 16 },
          { name: "Labneh & Vegetables", price: 11 },
          { name: "Cheese & Vegetables", price: 13 },
          { name: "Sujuk & Cheese", price: 13 },
          { name: "Lahm Bi Ajeen", price: 13 }
        ]
      }
    ]
  },
  {
    id: "pizza",
    label: "Pizza",
    groups: [
      {
        title: "Mediterranean Pizza",
        items: [
          { name: "Lamb Shawarma Pizza", price: 20, desc: "Pizza sauce, lamb shawarma, onion, tomato, feta, olive, cheese, oregano" },
          { name: "Chicken Shawarma Pizza", price: 20, desc: "Pizza sauce, chicken shawarma, onion, mushroom, cheese, capsicum — choice of BBQ or peri peri" },
          { name: "Mixed Meat Pizza", price: 20, desc: "Pizza sauce, lamb and chicken shawarma, onion, mushroom, cheese, capsicum" },
          { name: "Pepperoni Pizza", price: 20, desc: "Pizza sauce, cheese, pepperoni" },
          { name: "Mexicano Pizza", price: 20, desc: "Pizza sauce, cheese, pepperoni, onion, capsicum, light chilli" },
          { name: "Margherita Pizza", price: 17, desc: "Pizza sauce, cheese, oregano" },
          { name: "Garlic & Cheese", price: 17 }
        ]
      }
    ]
  },
  {
    id: "starters",
    label: "Starters & Salads",
    groups: [
      {
        title: "Appetisers",
        items: [
          { name: "Hummus", price: 11, desc: "Chickpeas, tahini, lemon, olive oil" },
          { name: "Baba Ghanoush", price: 11, desc: "Smoked eggplant, tahini, labneh, olive oil" },
          { name: "Friends Hummus with Meat", price: 15, desc: "Meat shawarma, chickpeas, tahini, lemon, olive oil, almond" },
          { name: "Friends Hummus with Chicken", price: 15, desc: "Chicken shawarma, chickpeas, tahini, lemon, olive oil, almond" },
          { name: "Friends Baba Ghanoush with Meat", price: 16, desc: "Smoked eggplant, tahini, labneh, olive oil, tomato sauce, almond" },
          { name: "Friends Baba Ghanoush with Chicken", price: 16, desc: "Smoked eggplant, tahini, labneh, olive oil, tomato sauce, almond" },
          { name: "Falafel Plate (6 pcs)", price: 15, desc: "Tahini, pickles, bread" },
          { name: "Kibbeh (4 pcs)", price: 15 },
          { name: "Meat Sambusak (4 pcs)", price: 15 },
          { name: "Cheese Sambusak (4 pcs)", price: 13 },
          { name: "French Fries", price: 7 }
        ]
      },
      {
        title: "Salads",
        items: [
          { name: "Tabouli Salad", price: 11, desc: "Parsley, burghul, tomato, onion, mint, lemon, olive oil, Friends dressing" },
          { name: "Fattoush Salad", price: 11, desc: "Lettuce, tomato, cucumber, capsicum, radish, herbs, crispy fried bread, Friends dressing" },
          { name: "Greek Salad", price: 12, desc: "Lettuce, tomato, cucumber, capsicum, herbs, feta, oregano, Friends dressing" },
          { name: "Coleslaw Salad", price: 9, desc: "Cabbage, carrot, mayo, Friends dressing" }
        ]
      },
      {
        title: "Dips",
        note: "House-made, $3 each.",
        items: [
          { name: "Garlic", price: 3 },
          { name: "Hummus", price: 3 },
          { name: "Baba Ghanoush", price: 3 },
          { name: "Tahini", price: 3 },
          { name: "Chilli", price: 3 },
          { name: "Friends Sauce", price: 3 },
          { name: "Friends Chilli", price: 3 }
        ]
      }
    ]
  },
  {
    id: "extras",
    label: "Combos, Extras & Drinks",
    groups: [
      {
        title: "Crunch Combos",
        items: [
          { name: "Fish & Chips", price: 15 },
          { name: "Tenders & Chips", price: 13 },
          { name: "Nuggets & Chips", price: 12 },
          { name: "Crispy Chicken Tenders", price: 11 }
        ]
      },
      {
        title: "Add-Ons",
        items: [
          { name: "Yellow Rice", price: 10 },
          { name: "Brown Rice", price: 10 }
        ]
      },
      {
        title: "Bozza",
        items: [
          { name: "500 g Takeaway Container", price: 25 },
          { name: "1 kg Takeaway Container", price: 40 }
        ]
      },
      {
        title: "Cold Drinks",
        items: [
          { name: "Coca-Cola", price: 4.5 },
          { name: "Coca-Cola Zero Sugar", price: 3.5 },
          { name: "Pepsi", price: 4.5 },
          { name: "Pepsi Max", price: 3.5 },
          { name: "Sprite", price: 4.5 },
          { name: "Sprite Zero Sugar", price: 3.5 },
          { name: "Fanta", price: 4.5 },
          { name: "Solo", price: 3.5 },
          { name: "Red Bull", price: 5.5 },
          { name: "Red Bull Zero Sugar", price: 3.5 },
          { name: "Monster", price: 5.5 },
          { name: "Water", price: 4.5 },
          { name: "Sparkling Water", price: 5 }
        ]
      }
    ]
  }
];
