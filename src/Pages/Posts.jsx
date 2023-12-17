import React, { useEffect, useState } from "react";
import { Button, Card, Comment, Icon } from "semantic-ui-react";
import axios from "axios";
import Comments from "../Components/Comments";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [postId, setPostId] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Card className="post" key={post.id}>
          <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <Card.Description>{posts.body}</Card.Description>
          </Card.Content>

          {showComments && post.id === postId && (
           <Comments postId={post.id}/>
          )}
          <Card.Meta className="post-meta">
          <Button
            onClick={() => {
              setShowComments(!showComments);
              setPostId(post.id);
            }}
          >
            Comments
          </Button>
          </Card.Meta>
        </Card>
      ))}
    </div>
  );
}

export default Posts;
