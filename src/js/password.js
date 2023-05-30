export class Password {
  constructor(length, { hasNum, hasLower, hasUpper, hasSymbol }) {
    this.length = length;
    this.hasNum = hasNum;
    this.hasLower = hasLower;
    this.hasUpper = hasUpper;
    this.hasSymbol = hasSymbol;
  }

  numString = "0123456789";
  lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  symbolString = "!@#$%^&*()_-+=[]{}|;':\",.<>?/</>";

  generatePassword() {
    let password = [];
    if (this.hasNum || this.hasLower || this.hasUpper || this.hasSymbol)
      while (password.length < this.length) {
        if (this.hasNum && password.length < this.length)
          password.push(
            this.numString[Math.floor(Math.random() * this.numString.length)]
          );
        if (this.hasLower && password.length < this.length)
          password.push(
            this.lowerCaseString[
              Math.floor(Math.random() * this.lowerCaseString.length)
            ]
          );
        if (this.hasUpper && password.length < this.length)
          password.push(
            this.upperCaseString[
              Math.floor(Math.random() * this.upperCaseString.length)
            ]
          );
        if (this.hasSymbol && password.length < this.length)
          password.push(
            this.symbolString[
              Math.floor(Math.random() * this.symbolString.length)
            ]
          );
      }
    else return "Check at least one inclusion.";
    return this.shufflePassword(password.join(""));
  }

  shufflePassword(password) {
    let chars = password.split("");

    // Fisher-Yates (Knuth) shuffle algorithm to shuffle the array
    for (let i = chars.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = chars[i];
      chars[i] = chars[j];
      chars[j] = temp;
    }

    let shuffledString = chars.join("");

    return shuffledString;
  }
}
