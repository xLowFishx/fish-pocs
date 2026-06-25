export function get(url: string) {
  if (!url) return new Promise((resolve) => resolve([]));

  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Server responded with status: ${res.status}`);
      return res.json();
    })
}