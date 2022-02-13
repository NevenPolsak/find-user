import { users } from "./users.js";


//FOR OF LOOP USERS IMPORT
for (let userDiv of users) {
  showUsers(userDiv);
}

//FUNCTION SHOW USERS
function showUsers(userDiv) {
  //CREATE DIV ELEMENT FOR USER
  const user = document.createElement("div");
  //CREATE CLASS NAME FO USER
  user.className = "user col-md-4";
  //CREATE IMG ELEMENT
  const img = document.createElement("img");
  //CREATE IMG CLASS NAME
  img.className = "img-rounded";
  //CREATE IMG SRC
  img.src = `https://randomuser.me/api/portraits/${userDiv.gender}/${userDiv.id}.jpg`;
  //CREATE IMG ALT
  img.alt = userDiv.name;

  //CREATE P ELEMENT FOR MNAME
  const mname = document.createElement("p");
  //CREATE CLASS NAME FOR MNAME
  mname.className = "name";
  //CREATE INNER TEXT FOR MNAME
  mname.innerText = userDiv.name;

  //CREATE P ELEMENT FOR EMAIL
  const email = document.createElement("p");
  //CREATE CLASS NAME FOR EMAIL
  email.className = "email";
  //CREATE EMAIL INNER TEXT
  email.innerText = userDiv.email;

  //ON USER ELEMENT APPEND IMG,MNAME,EMAIL
  user.append(img, mname, email);

  //APPEND USER ON USERS ELEMENT
  document.querySelector(".users").append(user);
}

//FUNCTION NOTFOUND
function notFound() {
  //CREATE DIV ELEMENT NOTFOUND
  const notFound = document.createElement("div");
  //CREATE NOTFOUND CLASS NAME
  notFound.className = "not-found";
  //CREATE STYLE FOR NOTFOUND
  notFound.style.display = "none";

  //CREATE SPAN ELEMENT
  const span = document.createElement("span");

  //CREATE H3 ELEMENT
  const h3 = document.createElement("h3");
  //CREATE H3 INNER TEXT
  h3.innerText = "404";

  //ON SPAN APPEND H3
  span.append(h3);

  //CREATE H1 ELEMENT
  const h1 = document.createElement("h1");
  //CREATE H1 INNER TEXT
  h1.innerText = "No User Fun";

  //ON NOTFOUND APPEND SPAN,H1
  notFound.append(span, h1);

  //APPEND NOTFOUND ON USERS
  document.querySelector(".users").append(notFound);
}

notFound();

//FILTER USERS EVENT
document.querySelector("#search-user").addEventListener("keyup", function (e) {
  //INPUT VALUE
  const keyword = e.target.value.toLowerCase();

  //SELECT ALL USER CLASS
  const findUser = document.querySelectorAll(".user");
  let notFound = true;
  //FOR OF LOOP FIND USERS
  for (let user of findUser) {
    const name = user.children[1].innerText.toLowerCase();
    const email = user.children[2].innerText.toLowerCase();

    //IF ELSE USER DISPLAY
    if (name.includes(keyword) || email.includes(keyword)) {
      user.style.display = "block";

      notFound = false;
    } else {
      user.style.display = "none";
    }

    //IF ELSE NOTFOUND DISPLAY
    if (notFound) {
      document.querySelector(".not-found").style.display = "block";
    } else {
      document.querySelector(".not-found").style.display = "none";
    }
  }
});
