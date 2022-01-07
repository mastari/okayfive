$(document).ready(() => {
  set();
});

function set() {
  $(".width").html(window.innerWidth);
  $(".height").html(window.innerHeight);
  requestAnimationFrame(set);
}
