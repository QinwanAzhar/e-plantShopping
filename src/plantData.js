export const categories = [
  {
    name: 'Air-Purifying',
    blurb: 'Quiet workers that clean the air while you sleep.',
    plants: [
      { key: 'snake-plant', name: 'Snake Plant', cost: 18, description: 'Nearly indestructible, thrives on neglect.' },
      { key: 'peace-lily', name: 'Peace Lily', cost: 22, description: 'Glossy leaves and white blooms in low light.' },
    ],
  },
  {
    name: 'Succulents',
    blurb: 'Low-water sculptural shapes for sunny sills.',
    plants: [
      { key: 'echeveria', name: 'Echeveria', cost: 12, description: 'Rosette-shaped succulent in dusty green.' },
      { key: 'aloe-vera', name: 'Aloe Vera', cost: 15, description: 'Soothing gel-filled leaves, easy to keep.' },
    ],
  },
  {
    name: 'Aromatic',
    blurb: 'Fragrant leaves that double as kitchen herbs.',
    plants: [
      { key: 'lavender', name: 'Lavender', cost: 14, description: 'Calming scent, silvery-purple spikes.' },
      { key: 'rosemary', name: 'Rosemary', cost: 10, description: 'Piney, savory, and always within reach.' },
    ],
  },
];

export const allPlants = categories.flatMap((category) => category.plants);
