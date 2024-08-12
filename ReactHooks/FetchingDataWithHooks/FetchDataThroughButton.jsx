import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataThroughButton() {
  const [IdbyButton, SetIdbyButton] = useState(1);
  const [posts, setPosts] = useState({});
  const [Id, setId] = useState(1);

  const HandleClick = () => {
    SetIdbyButton(Id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${IdbyButton}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [IdbyButton]);
  return (
    <div>
      <div>
        <input type="text" value={Id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick={HandleClick}>
          Fetch Data
        </button>
      </div>
      <div>{posts.title}</div>
    </div>
  );
}

export default FetchDataThroughButton;
