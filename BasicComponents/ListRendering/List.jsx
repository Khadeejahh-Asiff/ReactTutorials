import React from "react";

function List() {
  const Person = [
    { id: 1, name: "Kris", age: 28, skill: "ReactJS " },
    { id: 2, name: "Marie", age: 26, skill: "Angular" },
    { id: 3, name: "Jack", age: 30, skill: "VueJS " },
  ];

  const PersonMap = Person.map((Person) => (
    <h2>
      Hi I am {Person.name}. My id Number is {Person.id}. My age is {Person.age}
      . My skills are {Person.skill}.
    </h2>
  ));
  return <div>{PersonMap}</div>;
}

export default List;
