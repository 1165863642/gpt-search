export const getAssetsImages = (name: string) => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}