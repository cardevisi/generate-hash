function toHex(input) {

  var hash = "",
    alphabet = "!@%-0123456789abcdef",
    alphabetLength = alphabet.length;

  do {
    hash = alphabet[input % alphabetLength] + hash;
    input = parseInt(input / alphabetLength, 10);
  } while (input);

  return hash;

}
