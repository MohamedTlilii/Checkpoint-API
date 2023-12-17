import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // Assuming you want users data, not posts
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>Posts</div>
  )
}

export default Posts