function toWeirdCase(string) {
  let out = "";
  let spaceCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      spaceCount++;
    }
    if ((i - spaceCount) % 2 == 0) {
      out += string[i].toUpperCase();
    } else {
      out += string[i].toLowerCase();
    }
  }
  return out;
}

toWeirdCase("Element of weridness");
