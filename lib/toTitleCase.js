const toTitlecase = (s) => {
  s.toLowerCase();
  let words = s.split(" ");
  words = words.map((word) => {
    const first = word.charAt(0);
    const rest = word.split("").splice(1).join("");
    return first.toUpperCase() + rest;
  });
  return words.join(" ");
};

export default toTitlecase;
