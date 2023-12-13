const nameBox = document.querySelector("#name-box");
const emailBox = document.querySelector("#email-box");
const usernameBox = document.querySelector("#username-box");
const addButton = document.querySelector("#add-button");

async function grabData() {
  const nameData = nameBox.value;
  const emailData = emailBox.value;
  const usernameData = usernameBox.value;
  const user = {
    name: `${nameData}`,
    email: `${emailData}`,
    username: `${usernameData}`,
  };
  window.location.href = "index.html";
  fetch("http://localhost:3000/users", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json() )
    .then((user) => {
      
      return user;
    });
}

addButton.onclick = grabData;

//window.location.href = "users.html";
