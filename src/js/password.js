export class Password {
  constructor(length, { noDuplicate, hasNum, hasLower, hasUpper, hasSymbol }) {
    this.length = length;
    this.hasNum = hasNum;
    this.hasLower = hasLower;
    this.hasUpper = hasUpper;
    this.hasSymbol = hasSymbol;
  }

  numString = '0123456789';
  lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
  upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  symbolString = '!@#$%^&*()_-+=[]{}|;\':",.<>?/</>';

  generatePassword() {
    let password = '';
    const numOfCharPerCategory = this.calculateNumberOfChar(this.length);
    let nums = '',
      lowerCaseLetters = '',
      upperCaseLetters = '',
      symbols = '';

    if (this.hasNum) {
      nums = this.generateNumbers(numOfCharPerCategory);
      password += nums;
    }
    if (this.hasLower) {
      lowerCaseLetters = this.generateLowerCase(numOfCharPerCategory);
      password += lowerCaseLetters;
    }
    if (this.hasUpper) {
      upperCaseLetters = this.generateUpperCase(numOfCharPerCategory);
      password += upperCaseLetters;
    }
    if (this.hasSymbol) {
      symbols = this.generateSymbols(numOfCharPerCategory);
      password += symbols;
    }

    return this.shufflePassword(password);
  }

  calculateNumberOfChar(length) {
    const passwordStructure = [
      this.hasNum,
      this.hasLower,
      this.hasUpper,
      this.hasSymbol,
    ];
    const activePasswordStructure = passwordStructure.filter(
      (value) => value === true
    ).length;
    return this.length / activePasswordStructure;
  }

  generateNumbers(length) {
    const numbers = [];
    for (let i = 0; i < length; i++) {
      numbers.push(
        this.numString[Math.floor(Math.random() * this.numString.length)]
      );
    }
    return numbers.join('');
  }

  generateLowerCase(length) {
    const lowerCase = [];
    for (let i = 0; i < length; i++) {
      lowerCase.push(
        this.lowerCaseString[
          Math.floor(Math.random() * this.lowerCaseString.length)
        ]
      );
    }
    return lowerCase.join('');
  }

  generateUpperCase(length) {
    const upperCase = [];
    for (let i = 0; i < length; i++) {
      upperCase.push(
        this.upperCaseString[
          Math.floor(Math.random() * this.upperCaseString.length)
        ]
      );
    }
    return upperCase.join('');
  }

  generateSymbols(length) {
    const symbols = [];
    for (let i = 0; i < length; i++) {
      symbols.push(
        this.symbolString[Math.floor(Math.random() * this.symbolString.length)]
      );
    }
    return symbols.join('');
  }

  shufflePassword(password) {
    let chars = password.split('');

    // Use Fisher-Yates (Knuth) shuffle algorithm to shuffle the array
    for (let i = chars.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = chars[i];
      chars[i] = chars[j];
      chars[j] = temp;
    }

    let shuffledString = chars.join('');

    return shuffledString;
  }
}
