var typed = [];

const myKonami = "travel";

window.addEventListener("keyup", e => {
  typed = [...typed, e.key];

  var slicedWord = typed.slice(typed.length - myKonami.length, typed.length);

  if (slicedWord.join("") == myKonami) {
    cornify_add();
  }
});
