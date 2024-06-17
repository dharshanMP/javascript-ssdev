function total() {
  let inputElement = document.querySelector(".js-cost-input");
  let cost = Math.round(Number(inputElement.value));

  if (cost === 7.99) {
    cost += 10;
  }

  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

function submit() {
  const input_Element = document.querySelector(".js-myname");
  const my_name = input_Element.value;
  document.querySelector(".js-name").innerHTML = `${my_name}`;
}
