import { Password } from './password.js';

const passwordLength = document.querySelector('#length-range-value');
const generatedPassword = document.querySelector('#generated-pass');

const passwordLengthRange = document.querySelector('#length-range');
const includeNum = document.querySelector('#numbers');
const includeLowercase = document.querySelector('#lowercase');
const includeUppercase = document.querySelector('#uppercase');
const includeSymbols = document.querySelector('#symbols');

const inputs = document.querySelectorAll('input[type="checkbox"]');
const copyBtn = document.querySelector('#copy-btn');
(() => {
  passwordLengthRange.value = 8;
  const password = new Password(Number.parseInt(passwordLengthRange.value), {
    hasNum: includeNum.checked,
    hasLower: includeLowercase.checked,
    hasUpper: includeUppercase.checked,
    hasSymbol: includeSymbols.checked,
  });
  generatedPassword.value = password.generatePassword();
})();

// Generate a random password when password length range value changes
passwordLengthRange.addEventListener('input', (e) => {
  passwordLength.innerText = e.target.value;
  const password = new Password(Number.parseInt(passwordLengthRange.value), {
    hasNum: includeNum.checked,
    hasLower: includeLowercase.checked,
    hasUpper: includeUppercase.checked,
    hasSymbol: includeSymbols.checked,
  });
  generatedPassword.value = password.generatePassword();
});

// Generate a random random password when checkbox is checked
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const password = new Password(Number.parseInt(passwordLengthRange.value), {
      hasNum: includeNum.checked,
      hasLower: includeLowercase.checked,
      hasUpper: includeUppercase.checked,
      hasSymbol: includeSymbols.checked,
    });
    generatedPassword.value = password.generatePassword();
  });
});

// Copy to clipboard
copyBtn.addEventListener('click', (e) => {
  navigator.clipboard
    .writeText(generatedPassword.value)
    .then(() => {
      'Text copied to clipboard';
    })
    .catch((err) => {
      console.log('Failed to copy', err);
    });

  e.target.innerText = 'Copied';

  setTimeout(() => {
    e.target.innerText = 'Copy';
  }, 5000);
});
