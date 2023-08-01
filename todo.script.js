let checkedTodos = 0;

document.getElementById("fetchDataBtn").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
      let todos = data;
      let todoTable = `<table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">title</th>
                                    <th scope="col">check</th>
                                  </tr>
                                </thead>
                                <tbody>`;

      todos.forEach((todo) => {
        todoTable += `<tr>
                          <td>${todo.id}</td>
                          <td>${todo.title}</td>
                          <td><input type="checkbox" class="form-check-input" id="" onclick="handleCheck()"></td>
                          </tr>`
      });
      todoTable += `</tbody></table>`

      document.getElementById("tbl").innerHTML = todoTable;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

});

function handleCheck() {
  checkedTodos++
  if (checkedTodos >= 5)
    alert('congrats')
}

function logout() {
  window.location.href = "index.html";
}