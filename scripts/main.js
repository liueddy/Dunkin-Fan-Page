// functionality for changing image
const myImage = document.querySelector("img");
const link = document.querySelector("a");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dunkin-coffee-and-donut.png") {
    myImage.setAttribute("src", "images/dunkin-wiki.PNG");
    myImage.setAttribute("alt","Screenshot of Dunkin Article on Wikipedia.");
    link.setAttribute("href","https://en.wikipedia.org/wiki/Dunkin'_Donuts");
    link.textContent = "The Dunkin Wikipedia Article!!";
  } else {
    myImage.setAttribute("src", "images/dunkin-coffee-and-donut.png");
    myImage.setAttribute("alt","Coffee and Donut from Dunkin");
    link.setAttribute("href","https://www.dunkindonuts.com/en");
    link.textContent = "The Dunkin Website!!";
  }
};

// functionality for setting username
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const userName = prompt("Please enter your name.");
    if (!userName) {
      setUserName();
    } else {
      localStorage.setItem("name", userName);
      myHeading.textContent = `Welcome ${userName}`;
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
  } else {  
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
};
