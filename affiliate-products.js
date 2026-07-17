/**
 * @typedef {'amazon-es' | 'thomann' | 'music-store' | 'other'} AffiliateMerchant
 * @typedef {'best-overall' | 'budget' | 'young-children' | 'quality' | 'classroom'} AffiliateBadge
 * @typedef {object} AffiliateProduct
 * @property {string} id
 * @property {string} slug
 * @property {string} name
 * @property {string} shortName
 * @property {AffiliateMerchant} merchant
 * @property {string} affiliateUrl
 * @property {string} imageSrc
 * @property {string} imageAlt
 * @property {number=} noteCount
 * @property {string=} noteRange
 * @property {boolean=} colorCoded
 * @property {boolean=} matchesWebsiteColors
 * @property {string=} material
 * @property {string=} recommendedAges
 * @property {string} bestFor
 * @property {string[]} strengths
 * @property {string[]} limitations
 * @property {AffiliateBadge=} badge
 * @property {boolean} active
 * @property {number} displayOrder
 * @property {string} lastReviewedAt
 */

/** @type {AffiliateProduct[]} */
export const affiliateProducts = [
  {
    id: 'fuzeau-8288-metallonotes',
    slug: 'fuzeau-8288-metallonotes',
    name: 'Fuzeau 8288 Metallonotes de colores',
    shortName: 'Fuzeau 8288',
    merchant: 'amazon-es',
    affiliateUrl: 'https://www.amazon.es/dp/B001ANXJPE?tag=xcanchal-21',
    imageSrc: '/images/affiliate/fuzeau-metallonotes.png',
    imageAlt: 'Ilustración orientativa de un metalófono infantil de ocho láminas de colores con mazas y caja',
    noteCount: 8,
    noteRange: '8 notas (Do a Do agudo)',
    colorCoded: true,
    matchesWebsiteColors: false,
    bestFor: 'empezar con canciones de ocho notas y experimentar cambiando el orden de las láminas.',
    strengths: [
      'Ocho láminas de colores afinadas para una escala sencilla.',
      'Las láminas se pueden separar y reorganizar.',
      'Incluye dos mazas y una caja para guardarlas.'
    ],
    limitations: [
      'Las piezas separadas requieren supervisión y guardado tras jugar.',
      'Los colores no tienen por qué coincidir con los de este xilófono online.'
    ],
    badge: 'best-overall',
    active: true,
    displayOrder: 1,
    lastReviewedAt: '2026-07-18'
  },
  {
    id: 'stoies-rainbow-xylophone',
    slug: 'stoies-rainbow-xylophone',
    name: 'Stoie’s xilófono arcoíris de madera',
    shortName: 'Stoie’s arcoíris',
    merchant: 'amazon-es',
    affiliateUrl: 'https://www.amazon.es/dp/B0CTHGWB7C?tag=xcanchal-21',
    imageSrc: '/images/affiliate/stoies-rainbow.png',
    imageAlt: 'Ilustración orientativa de un xilófono infantil de madera con ocho láminas de colores y mazas',
    noteCount: 8,
    noteRange: '8 notas en Do mayor',
    colorCoded: true,
    matchesWebsiteColors: false,
    recommendedAges: '3 a 5 años (según el fabricante)',
    bestFor: 'niños pequeños que se inician con un instrumento de ocho notas.',
    strengths: [
      'Ocho notas afinadas en Do mayor.',
      'Incluye dos mazas y un libro de canciones.',
      'El código de colores ayuda a identificar cada lámina.'
    ],
    limitations: [
      'Está orientado a las primeras edades; conviene seguir la edad indicada por el fabricante.',
      'Los colores no tienen por qué coincidir con los de este xilófono online.'
    ],
    badge: 'young-children',
    active: true,
    displayOrder: 2,
    lastReviewedAt: '2026-07-18'
  },
  {
    id: 'a-star-wooden-xylophone',
    slug: 'a-star-wooden-xylophone',
    name: 'A-Star xilófono diatónico de madera',
    shortName: 'A-Star de madera',
    merchant: 'amazon-es',
    affiliateUrl: 'https://www.amazon.es/dp/B08L88H4FY?tag=xcanchal-21',
    imageSrc: '/images/affiliate/a-star-wooden.png',
    imageAlt: 'Ilustración orientativa de un xilófono diatónico de madera con ocho láminas y mazas',
    noteCount: 8,
    noteRange: '8 notas diatónicas (Do a Do agudo)',
    material: 'Madera',
    bestFor: 'quien busca un xilófono de madera sencillo para practicar melodías de ocho notas.',
    strengths: [
      'Ocho notas diatónicas para canciones sencillas.',
      'Láminas y dos mazas de madera.',
      'Diseño simple, pensado para empezar a practicar.'
    ],
    limitations: [
      'Tiene una sola octava, por lo que no cubre melodías con más registro.',
      'Comprueba la presentación y disponibilidad actuales antes de comprar.'
    ],
    badge: 'budget',
    active: true,
    displayOrder: 3,
    lastReviewedAt: '2026-07-18'
  }
];
