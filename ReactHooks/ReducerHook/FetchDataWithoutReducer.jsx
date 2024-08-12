import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataWithoutReducer() {
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  const [Posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicod.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
        setError("");
      })
      .catch((Error) => {
        setLoading(true);
        setPosts({});
        setError("There has been an error");
      });
  }, []);
  return (
    <div>
      {Loading ? " " : Posts.title}
      {Error ? Error : null}
    </div>
  );
}

export default FetchDataWithoutReducer;
