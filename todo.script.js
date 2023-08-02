let todos = []
function showTodo(){
var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      todos = JSON.parse(this.responseText);
      console.log(todos);
      let todoTable = `<table class="table">
                        <thead>
                          <tr>
                           <th scope="col">id</th>
                            <th scope="col">title</th>
                        
                           <th scope="col">completed</th>
                          </tr>
                         </thead>
                        <tbody>`;

      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        let checked = todo.completed ? 'checked' : '';
        let disabled = todo.completed ? 'disabled' : '';

        todoTable += `<tr>
                       <td>${todo.id}</td>
                       <td>${todo.title}</td>
                 
                       <td><input type="checkbox" class="form-check-input" id="" onclick="handleCheck()" ${checked} ${disabled}></td>
                     </tr>`;

      }

      todoTable += `</tbody></table>`
      document.getElementById("tbl").innerHTML = todoTable;
    }
  };


  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

let checkedTodos = 0;

function checkCount() {
  return new Promise((resolve, reject) => {
    checkedTodos++;
    if (checkedTodos == 5)
      resolve(true)
  })
}

function handleCheck() {
  checkCount().then(() => alert('congrats'))
}

function logout() {
  window.location.href = "index.html";
}