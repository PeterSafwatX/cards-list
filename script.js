let name = "Mariam Ashraf";
let age = 20;
let major = "BI";
let meeting = "Nice To Meet You!";

const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const majorElement = document.getElementById("major");
const mmeetingElement = document.getElementById("meeting");

nameElement.innerHTML = name;
ageElement.innerHTML = "age: " + age;
majorElement.innerHTML = "major: " + major;
mmeetingElement.innerHTML = meeting;