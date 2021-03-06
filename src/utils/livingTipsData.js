const livingTips = [
  {
    id: 1,
    isSaved: false,
    tip: 'Completely turn off equipment like televisions and stereos when you\'re not using them.',
    category: 'home'
  },
  {
    id: 2,
    isSaved: false,   
    tip: 'Choose energy-efficient appliances and light bulbs.',
    category: 'home'
  },
  {
    id: 3,
    isSaved: false,    
    tip: 'Save water: some simple steps can go a long way in saving water like, like turning off the tap when you are brushing your teeth or shaving. Try to collect the water used to wash vegetables and salad to water your houseplants.',
    category: 'home'
  },
  {
    id: 4,
    isSaved: false,    
    tip: 'Lower your shades or close your curtains on hot days, to keep the house cool and reduce the use of electric fans or air-conditioning.',
    category: 'home'
  },
  {
    id: 5, 
    isSaved: false,
    tip: 'Let clothes dry naturally.',
    category: 'home'
  },
  {
    id: 6, 
    isSaved: false,
    tip: 'Keep lids on pans when cooking to conserve energy.',
    category: 'home'
  },
  {
    id: 7, 
    isSaved: false,
    tip: 'Use rechargeable batteries.',
    category: 'home'
  },
  {
    id: 8, 
    isSaved: false,
    tip: 'Call your local government to see if they have a disposal location for used batteries, glass, plastics, paper or other wastes.',
    category: 'home'
  },
  {
    id: 9, 
    isSaved: false, 
    tip: 'Don’t use “throw away” products like paper plates and napkins, or plastic knives, forks and cups.',
    category: 'home'
  },
  {
    id: 10,
    isSaved: false, 
    tip: 'Send electronic greetings over email, instead of paper cards.',
    category: 'home'
  },
  {
    id: 11,
    isSaved: false, 
    tip: 'Collect rainwater to water your garden.',
    category: 'garden'
  },
  {
    id: 12,
    isSaved: false,
    tip: 'Water the garden early in the morning or late in the evening. This reduces water loss due to evaporation. Don’t over-water the garden. Water only until the soil becomes moist, not soggy.',
    category: 'garden'
  },
  {
    id: 13,
    isSaved: false,
    tip: 'Explore water efficient irrigation systems. Sprinkler irrigation and drip irrigation can be adapted to garden situations.',
    category: 'garden'
  },
  {
    id: 14,
    isSaved: false,
    tip: 'Make your garden lively - plant trees and shrubs that will attract birds. You can also put up bird nest boxes with food.',
    category: 'garden'
  },
  {
    id: 15,
    isSaved: false,
    tip: 'Put waste to work in your garden- sweep the fallen leaves and flowers into flowerbeds or under shrubs. This will increase soil fertility and also reduce the need for frequent watering.',
    category: 'garden'
  },
  {
    id: 16,
    isSaved: false,
    tip: 'If you have little space in your garden, you could make a compost pit to turn organic waste from the kitchen and garden to soil enriching manure.',
    category: 'garden'
  },
  {
    id: 17,
    isSaved: false,
    tip: 'Plant local species of trees, flowers and vegetables.',
    category: 'garden'
  },
  {
    id: 18,
    isSaved: false,
    tip: 'Don\'t use chemicals in the garden - as they will eventually end up in the water systems and can upset the delicate balance of lifecycles.',
    category: 'garden'
  },
  {
    id: 19,
    isSaved: false,
    tip: 'Organic and environmentally friendly fertilizers and pesticides are available - organic gardening reduces pollution and is better for wildlife.',
    category: 'garden'
  },
  {
    id: 20,
    isSaved: false,
    tip: 'Buy fruit and vegetables that are in season to help reduce enormous transport costs resulting from importing produce and, where possible, choose locally produced food.',
    category: 'grocery shopping'
  },
  {
    id: 21,
    isSaved: false,
    tip: 'When buying fish look out for a variety of non-endangered species and buy local fish if possible.',
    category: 'grocery shopping'
  },
  {
    id: 22,
    isSaved: false,
    tip: 'Bring your own bags to the grocery and refuse the plastic bags that create so much waste.',
    category: 'grocery shopping'
  },
  {
    id: 23,
    isSaved: false,
    tip: 'Look for products that have less packaging.',
    category: 'grocery shopping'
  },
  {
    id: 24,
    isSaved: false,
    tip: 'Use printers that can print on both sides of the paper; try to look into this option when replacing old printers.',
    category: 'work'
  },
  {
    id: 25,
    isSaved: false,
    tip: 'Use the back of a draft or unwanted printout instead of notebooks. Even with a double-sided printer there is likely to be plenty of spare paper to use!',
    category: 'work'
  },
  {
    id: 26,
    isSaved: false,
    tip: 'Always ask for and buy recycled paper if you can - for your business stationery and to use in your printers.',
    category: 'work'
  },
  {
    id: 27,
    isSaved: false,
    tip: 'Switch off computer monitors, printers and other equipment at the end of each day. Though in standby mode they\'re still using power - and that adds to global warming. Always turn off your office light and computer monitor when you go out for lunch or to a meeting.',
    category: 'work'
  },
  {
    id: 28,
    isSaved: false,
    tip: 'Go on holiday during the off-peak period to prevent over straining resources - you\'ll also avoid the crowds.',
    category: 'vacation'
  },
  {
    id: 29,
    isSaved: false,
    tip: 'Find out about places before you visit. You may be visiting an environmentally sensitive area, in which case you must take extra care to stay on footpaths and follow signs.',
    category: 'vacation'
  },
  {
    id: 30,
    isSaved: false,
    tip: 'Don\'t travel by air if you can avoid it because air travel uses up large amounts of fossil fuels and creates greenhouse gases.',
    category: 'vacation'
  },
  {
    id: 31,
    isSaved: false,
    tip: 'Dispose of any rubbish responsibly - it can be hazardous to wildlife.',
    category: 'vacation'
  },
  {
    id: 32,
    isSaved: false,
    tip: 'Use public transport, cycle or walk instead of using a car.',
    category: 'vacation'
  },
  {
    id: 33,
    isSaved: false,
    tip: 'Use facilities and trips run by local people whenever possible.',
    category: 'vacation'
  },
  {
    id: 34,
    isSaved: false,
    tip: 'Don\'t be tempted to touch wildlife and disturb habitats whether on land, at the coast or under water.',
    category: 'vacation'
  },
  {
    id: 35,
    isSaved: false,
    tip: 'Be careful what you choose to bring home as a holiday souvenir. Many species from coral and conch shells to elephants and alligators are endangered because they are killed for curios or souvenirs.',
    category: 'vacation'
  },
  {
    id: 36,
    isSaved: false,
    tip: 'Don’t leave any rubbish at the beach – it can be very dangerous for the wildlife.',
    category: 'vacation'
  },  
  {
    id: 37,
    isSaved: false,
    tip: 'Boats and jet-skis create noise and chemical pollution that is very disturbing to wildlife - don\'t keep the engine running unnecessarily.',
    category: 'vacation'
  },
  {
    id: 38,
    isSaved: false,
    tip: 'Always use both sides of a sheet of paper.',
    category: 'reduce, reuse, recycle'
  }, 
  {
    id: 39,
    isSaved: false,
    tip: 'Use e-mail to stay in touch, including cards, rather than faxing or writing.',
    category: 'reduce, reuse, recycle'
  },
  {
    id: 40,
    isSaved: false,
    tip: 'Share magazines with friends and pass them on to the doctor, dentist or local hospital for their waiting rooms.',
    category: 'reduce, reuse, recycle'
  }, 
  {
    id: 41,
    isSaved: false,
    tip: 'Use recyclable paper to make invitation cards, envelops, letter pads etc., if you can.',
    category: 'reduce, reuse, recycle'
  },
  {
    id: 42,
    isSaved: false,
    tip: 'Use washable nappies instead of disposables if you can.',
    category: 'reduce, reuse, recycle'
  }, 
  {
    id: 43,
    isSaved: false,
    tip: 'Recycle as much as you can.',
    category: 'reduce, reuse, recycle'
  },
  {
    id: 44,
    isSaved: false,
    tip: 'Give unwanted clothes, toys and books to charities and orphanages.',
    category: 'reduce, reuse, recycle'
  }, 
  {
    id: 45,
    isSaved: false,
    tip: 'Store food and other products in containers rather than foil and plastic wrap.',
    category: 'reduce, reuse, recycle' 
  }
];

export default livingTips;