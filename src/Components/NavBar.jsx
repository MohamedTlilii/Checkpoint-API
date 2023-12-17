import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { Menu, Segment } from 'semantic-ui-react';

function NavBar() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="users">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item name="posts">
            <Link to="/posts">Posts</Link>
          </Menu.Item>
        </Menu>
      </Segment>
    </div>
  );
}

export default NavBar;