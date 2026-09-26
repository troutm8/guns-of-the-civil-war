// Prefix an internal path with the site's base path (the GitHub Pages
// project folder), so links work both locally and when deployed.
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
