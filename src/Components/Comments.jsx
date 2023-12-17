import React, { useState, useEffect } from "react";
import { Comment, Icon } from "semantic-ui-react";
import axios from "axios";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.dir(err));
  }, [postId]);

  return (
    <Comment.Group className="comments">
      {comments.map((comment) => (
        <Comment>
          <Comment.Avatar as="a" src="/images/avatar/small/stevie.jpg" />
          <Comment.Content>
            <Comment.Author>Stevie Feliciano</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
              <div>
                <Icon name="star" />5 Faves
              </div>
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
}

export default Comments;
