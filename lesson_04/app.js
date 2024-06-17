const display_input = document.getElementById("display");

function cal(input) {
  if (input === "=") {
    display_input.value = eval(display_input.value);
  } else {
    display_input.value += input;
  }
}

function clear_screen() {
  display_input.value = "";
}
