export function routerBasename() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base || undefined;
}

export function absoluteAppUrl(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${window.location.origin}${base}${normalized}`;
}
