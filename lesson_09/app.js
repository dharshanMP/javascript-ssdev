const arr = [];

render_to_do_list();

function render_to_do_list() {
  let to_do_html = "";

  for (let i = 0; i < arr.length; i++) {
    const todo_object = arr[i];
    const due_work = todo_object.work;
    const date = todo_object.duedate;

    const html = `<div>${due_work}</div> <div>${date}</div> <button class = "delete_btn" onclick = "
    arr.splice(${i}, 1); 
    render_to_do_list();
    ">Delete</button>`;

    to_do_html += html;
  }
  console.log(to_do_html);
  document.querySelector(".js-todo-list").innerHTML = to_do_html;
}

function add_to_do() {
  let input_element = document.querySelector(".js-input");
  let input_date_element = document.querySelector(".js-input-date");

  const ToDoName = input_element.value;
  const ToDoDate = input_date_element.value;

  arr.push({ work: ToDoName, duedate: ToDoDate });
  console.log(arr);

  input_element.value = "";
  input_date_element.value = "";
  render_to_do_list();
}
