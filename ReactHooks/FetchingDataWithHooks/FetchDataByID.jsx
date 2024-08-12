import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [posts, setPosts] = useState({});
  const [Id, SetId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Id]);
  return (
    <div>
      <input
        type="text"
        value={Id}
        onChange={(event) => SetId(event.target.value)}
      />

      <div>{posts.title}</div>
    </div>
  );
}

export default FetchData;
