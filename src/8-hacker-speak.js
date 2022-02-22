export const hackerSpeak = (words) => {
  let word = words.replaceAll("a",4).replaceAll("e",3).replaceAll("i",1).replaceAll("o",0).replaceAll("s",5)
  .replaceAll("A",4).replaceAll("E",3).replaceAll("I",1).replaceAll("O",0).replaceAll("S",5);

  return word;
}

