import images from './images';

const wines = [
  {
    title: 'Brunello di montalcino',
    price: '£65',
    tags: 'FR | 750 ml',
  },
  {
    title: 'HouseWine',
    price: '£18',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Moscato Dolce',
    price: '£28',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Chianti classico',
    price: '£30',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Merlot',
    price: '£24',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '£8',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '£8',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '£8',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '£8',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '£8',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'FOOD, DRINKS ,FUN , DANCING ,MUSIC ',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'FOOD, DRINKS ,FUN , DANCING ,MUSIC',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'FOOD, DRINKS ,FUN , DANCING, MUSIC',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
