var typed = [];
const letterContainer = document.querySelectorAll(".container");

/* defining our custom konami */
const myKonami = "travel";

/* listen for event whenever a button on the keyboard is clicked */
window.addEventListener("keyup", e => {
  var slicedWord = "";
  typed = [...typed, e.key];

  /* if length of letters typed is greater than the Konami length, then slice the last 6 letters typed and store it as an array */
  if (typed.length > myKonami.length) {
    slicedWord = typed.slice(typed.length - myKonami.length, typed.length);
  } else {
    /* if length of word typed is less that the konami itself, keep entire word without slicing */
    slicedWord = typed;
  }

  /* updating the show-to-user-boxes with the last 6 letters typed */
  slicedWord.forEach((letter, index) => {
    letterContainer.forEach(container => {
      if (container.dataset.position == index) {
        container.innerHTML = `<b>${letter}</b>`;
      }
    });
  });

  /* add the magic with cornify JS */
  if (slicedWord.join("").toLowerCase() == myKonami) {
    cornify_add();
  }
});
