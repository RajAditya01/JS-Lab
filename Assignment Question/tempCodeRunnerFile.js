// What is the use of a constructor function in javascript? Write a javascript code to create a constructor function named Person with three arguments such as name, age, gender and four objects of the type Person and also display on web page.

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const person1 = new Person("Alice", 25, "Female");
const person2 = new Person("Bob", 30, "Male");
const person3 = new Person("Charlie", 28, "Male");
const person4 = new Person("Diana", 22, "Female");

const people = [person1, person2, person3, person4];

// Display on the web page
const container = document.getElementById("container");

people.forEach((person) => {
  const personDiv = document.createElement("div");
  personDiv.innerHTML = `
      <h2>Name: ${person.name}</h2>
      <p>Age: ${person.age}</p>
      <p>Gender: ${person.gender}</p>
    `;
  container.appendChild(personDiv);
});
