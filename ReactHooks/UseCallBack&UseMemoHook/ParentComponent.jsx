import React, { useState, useCallback, useMemo } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const IncrementAge = useCallback(() => {
    return setAge(age + 1);
  }, [age]);

  const IncrementSalary = useCallback(() => {
    return setSalary(salary + 1000);
  }, [salary]);

  const IsEven = useMemo(() => {
    for (let i = 0; i < 5000000000; i++) return i;
    if (age % 2 === 0) {
      return true;
    }
  }, [age]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <span>{IsEven ? "Even" : "Odd"}</span>
      <Button Increment={IncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button Increment={IncrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
