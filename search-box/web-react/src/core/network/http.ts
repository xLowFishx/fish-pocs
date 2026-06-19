export function get(url: string) {
  if (!url) return new Promise((resolve) => resolve([]));

  return fetch(url)
  .then((res) => {
    return res.json();
  })
}