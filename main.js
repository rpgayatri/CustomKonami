var typed = [];
const letterContainer = document.querySelectorAll(".container");
const myKonami = "travel";

window.addEventListener("keyup", e => {
  //   var typedLetters = "";
  var slicedWord = "";
  typed = [...typed, e.key];

  if (typed.length > myKonami.length) {
    slicedWord = typed.slice(typed.length - myKonami.length, typed.length);
  } else {
    slicedWord = typed;
  }

  slicedWord.forEach((letter, index) => {
    letterContainer.forEach(container => {
      if (container.dataset.position == index) {
        container.innerHTML = `<b>${letter}</b>`;
      }
    });
  });

  if (slicedWord.join("").toLowerCase() == myKonami) {
    cornify_add();
  }
});
