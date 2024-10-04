const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const userButton = document.querySelector(".user-button");
const userImage = document.querySelector("#user-img");

function getData() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      const profilePic = user.picture.large;
      userImage.setAttribute("src", profilePic);
      userName.textContent =
        user.name.title + " " + user.name.first + " " + user.name.last;
      userEmail.textContent = user.email;
    })
    .catch((error) => console.log("error"));
}

userButton.addEventListener("click", getData);
