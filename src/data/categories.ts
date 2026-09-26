// The five small-arms departments of the site. Order here is display order.
export const categories = [
  {
    slug: 'muskets',
    name: 'Muskets & Rifle-Muskets',
    blurb:
      'The muzzle-loading shoulder arms carried by the great mass of infantry on both sides, from the smoothbores of 1861 to the Springfield and Enfield rifle-muskets.',
  },
  {
    slug: 'breechloaders',
    name: 'Breechloaders & Repeaters',
    blurb:
      'Infantry rifles loaded at the breech — the Sharps, the Spencer and the Henry — that foretold the end of the muzzle-loader.',
  },
  {
    slug: 'carbines',
    name: 'Cavalry Carbines',
    blurb:
      'Short, light breechloaders issued to mounted troops, in a bewildering variety of patterns and calibers.',
  },
  {
    slug: 'handguns',
    name: 'Revolvers & Pistols',
    blurb:
      'Percussion revolvers of Colt, Remington and their Confederate imitators, carried by officers, cavalrymen and artillerists.',
  },
  {
    slug: 'sharpshooter',
    name: "Sharpshooters' Rifles",
    blurb:
      'Precision arms of the marksmen and skirmishers, including the celebrated English Whitworth.',
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export const categorySlugs = categories.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function getCategory(slug: string) {
  const c = categories.find((c) => c.slug === slug);
  if (!c) throw new Error(`Unknown category: ${slug}`);
  return c;
}
