import React from "react";

// const DestructuringFC = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hi my Name is {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

const DestructuringFC = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hi my name is {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
export default DestructuringFC;
