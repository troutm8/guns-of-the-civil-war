import { getCollection, type CollectionEntry } from 'astro:content';
import { categories } from '../data/categories';

export type Arm = CollectionEntry<'arms'>;

export async function getAllArms(): Promise<Arm[]> {
  const arms = await getCollection('arms');
  const catIndex = (slug: string) => categories.findIndex((c) => c.slug === slug);
  return arms.sort(
    (a, b) =>
      catIndex(a.data.category) - catIndex(b.data.category) ||
      a.data.order - b.data.order ||
      a.data.title.localeCompare(b.data.title),
  );
}

export async function getArmsByCategory(slug: string): Promise<Arm[]> {
  return (await getAllArms()).filter((a) => a.data.category === slug);
}
