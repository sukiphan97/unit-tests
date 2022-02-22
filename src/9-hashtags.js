export const hashtags = (text) => {
  const hash = text.split(" ").filter(t => t.startsWith("#"));
  return hash;
  
}
