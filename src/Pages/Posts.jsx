import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="posts">
      {posts.map((posts) => (
        <Card className="post" key={posts.id}>
         
          <Card.Content>
            <Card.Header>{posts.title}</Card.Header>
            <Card.Description>{posts.body}</Card.Description>
          </Card.Content>
          
        </Card>
      ))}
    </div>
  );
}

export default Posts;
