//get html element
const usersTableBody = document.getElementById("usersTableBody");

//write function
function loadUsersTable(users) {
  for (const user of users) {
    let row = usersTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = user.name;

    let cell2 = row.insertCell();
    cell2.innerText = user.username;

    let cell3 = row.insertCell();
    cell3.innerText = user.email;

    let td8 = row.insertCell();
    let a1 = document.createElement("a");
    a1.innerText = "edit";
    a1.href = "edit.html";
    td8.appendChild(a1);

    let td9 = row.insertCell();
    let a2 = document.createElement("a");
    a2.innerText = "delete";
    a2.href = "delete.html";
    td9.appendChild(a2);
  }
}

function initialize() {
  let users = fetch("http://localhost:3000/users");

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      loadUsersTable(data);
    });
}

window.onload = initialize;
