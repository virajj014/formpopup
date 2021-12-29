let button_cod = document.getElementById("cod_btn");
let button_payonline = document.getElementById("payon_btn");

function cod_fcn() {
  if ((button_cod.style.backgroundColor = "white")) {
    button_cod.style.backgroundColor = "#fa8a53";
    button_cod.style.color = "white";
  }
  if ((button_payonline.style.backgroundColor = "#fa8a53")) {
    button_payonline.style.backgroundColor = "white";
    button_payonline.style.color = "#fa8a53";
  }
}

function payon_fcn() {
  // if ((button_payonline.style.backgroundColor = "white")) {
  //   button_payonline.style.backgroundColor = "#fa8a53";
  //   button_payonline.style.color = "white";
  // }
  if ((button_cod.style.backgroundColor = "#fa8a53")) {
    button_cod.style.backgroundColor = "white";
    button_cod.style.color = "#fa8a53";
  }

  let blur = document.getElementById("my_blur");
  blur.classList.toggle("active");

  document.getElementById("section4").style.display = "flex";
}

function cancel_pay() {
  let blur = document.getElementById("my_blur");
  document.getElementById("section4").style.display = "none";
  // filter: blur(20px);
  blur.classList.toggle("active").style.filter.blur("0px");

  // button_payonline.style.backgroundColor = "white";
  // button_payonline.style.color = "#fa8a53";
}
