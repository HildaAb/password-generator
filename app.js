const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@£$%&*()_+-";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;

  let password = "";

  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }
  pwEl.innerText = password;
}

function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }

  if (lowerEl.checked) {
    xs.push(getLowercase());
  }

  if (numberEl.checked) {
    xs.push(getNumber());
  }

  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", async () => {
  const textToCopy = pwEl.innerHTML;
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert("Password copied to clippboard!");
  } catch (err) {
    console.error("Eroor. Password coudn´t be copied", err);
  }
});
