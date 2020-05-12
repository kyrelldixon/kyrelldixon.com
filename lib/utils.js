export function fontSizeFromText(text) {
  const wordCount = text.split(" ").length;
  let fontSize = 1;

  if (wordCount < 10) {
    fontSize = 4;
  } else if (wordCount < 20) {
    fontSize = 3;
  } else if (wordCount <= 30) {
    fontSize = 2.185;
  } else if (wordCount < 40) {
    fontSize = 2;
  } else if (wordCount < 50) {
    fontSize = 1.85;
  } else if (wordCount < 60) {
    fontSize = 1.65;
  } else if (wordCount < 70) {
    fontSize = 1.55;
  } else if (wordCount < 80) {
    fontSize = 1.36;
  } else if (wordCount < 90) {
    fontSize = 1.31;
  } else {
    fontSize = 1.264;
  }

  return `${fontSize}em`;
}
