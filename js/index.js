// ham

const $ham = document.querySelector(".ham");
const $nav = document.querySelector(".bottom_nav");

$ham.addEventListener("click", function () {
  $nav.classList.toggle("on");
});

// tab box

const $menu = document.querySelectorAll(".tab_menu>li");
const $content = document.querySelectorAll(".tab_content>li");

$menu.forEach((btn, i) => {
  btn.addEventListener("mouseover", function () {
    $menu.forEach((a) => {
      a.classList.remove("on");
    });
    $menu[i].classList.add("on");

    $content.forEach((b) => {
      b.classList.remove("on");
    });
    $content[i].classList.add("on");
  });
});
