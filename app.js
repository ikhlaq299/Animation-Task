var idChild = document.getElementById("idChild");
var txt = document.getElementsByClassName("txt");

idChild.addEventListener("mouseover", () => {
  txt[0].classList.add("animate");
  txt[0].classList.remove("reverse");
  txt[1].classList.add("animate");
  txt[1].classList.remove("reverse");
});
idChild.addEventListener("mouseout", () => {
    txt[0].classList.remove("animate");
    txt[0].classList.add("reverse");
    txt[1].classList.remove("animate");
    txt[1].classList.add("reverse");
});
