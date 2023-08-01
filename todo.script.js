let checkedTodos = 0;

function fetchApi() {
  return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
              var data = JSON.parse(this.responseText);
              console.log(data);
              resolve(data);
          } else if (this.readyState === 4 && this.status !== 200) {
              reject('Failed to fetch data from the API.');
          }
      };

      xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
      xhttp.send();
  });
}

document.getElementById("fetchDataBtn").addEventListener("click", function () {
  fetchApi()
    .then(data => {
      let todos = data;
      let todoTable = `<table class="table">
                        <thead>
                          <tr>
                           <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th scope="col">status</th>
                           <th scope="col">completed</th>
                          </tr>
                         </thead>
                        <tbody>`;

      // Assuming you have an empty variable todoTable and todos array

      for (let i = 0; i < todos.length && i < 10; i++) {
        const todo = todos[i];
        let checkedAttr = todo.completed ? 'checked' : '';
        let disabledAttr = todo.completed ? 'disabled' : '';

        todoTable += `<tr>
                       <td>${todo.id}</td>
                       <td>${todo.title}</td>
                       <td>${todo.completed}</td>
                       <td><input type="checkbox" class="form-check-input" id="" onclick="handleCheck()" ${checkedAttr} ${disabledAttr}></td>
                     </tr>`;

        if (todo.completed) checkedTodos++;
      }


      todoTable += `</tbody></table>`
      console.log(checkedTodos);
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
  return new Promise((resolve) => {

  })

}

function logout() {
  window.location.href = "index.html";
}