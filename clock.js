const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  hour < 10 ? (hour = "0" + hour) : hour;
  min < 10 ? (min = "0" + min) : min;
  sec < 10 ? (sec = "0" + sec) : sec;

  horas.textContent = hour;
  minutos.textContent = min;
  segundos.textContent = sec;
});

const cor1 = document.getElementById("color1");
const cor2 = document.getElementById("color2");
const cor3 = document.getElementById("color3");

cor1.addEventListener("click", () => {
  const cor = window.getComputedStyle(cor1).background;
  document.body.style.background = cor;
});

cor2.addEventListener("click", () => {
  const cor = window.getComputedStyle(cor2).background;
  document.body.style.background = cor;
});

cor3.addEventListener("click", () => {
  const cor = window.getComputedStyle(cor3).background;
  document.body.style.background = cor;
});

function getGradientColors(gradient) {
  const gradientParts = gradient.match(/rgb\(.+?\)/g);
  return gradientParts;
}
