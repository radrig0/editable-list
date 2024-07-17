export const getRandomVibrantColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (100 - 65) + 65);
  const lightness = Math.floor(Math.random() * (100 - 50) + 50);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};