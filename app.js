const binaryInput = document.getElementById("binary");
const octalInput = document.getElementById("octal");
const decimalInput = document.getElementById("decimal");
const hexInput = document.getElementById("hexadecimal");

binaryInput.addEventListener("input", () => convertFrom("binary"));
octalInput.addEventListener("input", () => convertFrom("octal"));
decimalInput.addEventListener("input", () => convertFrom("decimal"));
hexInput.addEventListener("input", () => convertFrom("hexadecimal"));

const convertFrom = (baseType) => {
  let bases = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16,
  };

  let inputField = document.getElementById(baseType);
  let value = inputField.value.trim();

  if (!isValidNumber(value, bases[baseType])) {
    return;
  }

  let decimalValue = parseInt(value, bases[baseType]);

  binaryInput.value = decimalValue.toString(2);
  octalInput.value = decimalValue.toString(8);
  decimalInput.value = decimalValue.toString(10);
  hexInput.value = decimalValue.toString(16).toUpperCase();
};

const isValidNumber = (number, base) => {
  const regexPatterns = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9A-Fa-f]+$/,
  };

  return regexPatterns[base].test(number) || number === "";
};
