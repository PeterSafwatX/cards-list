// Step 1: Define your dynamic variables
let name = "Adam Ashraf";
let age = 21;
let university = "GUC";
let faculty = "MET";

// Step 2: Select the HTML elements using their IDs
const nameElement = document.getElementById("card-name");
const ageElement = document.getElementById("card-age");
const universityElement = document.getElementById("card-university");
const facultyElement = document.getElementById("card-faculty");

// Step 3: Inject the variable values into the elements
nameElement.textContent = name;
ageElement.textContent = `age ${age}`;
universityElement.textContent = university;
facultyElement.textContent = faculty;

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});