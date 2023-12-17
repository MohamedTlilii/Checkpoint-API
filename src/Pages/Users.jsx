import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") 
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="users">
      {users.map((user) => (
        <Card className="user" key={user.id}>
          <Image
            src="https://icones.pro/wp-content/uploads/2021/02/symbole-masculin-icone-l-utilisateur-noir.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{user.name}</Card.Header>
            <Card.Meta>
              <span className="date"><Icon name="mail" /> {user.email}</span>
            </Card.Meta>
            <Card.Description>
              <span>Address</span>
              <ul>
                
                  <li> City : {user.address.city}</li>
                  <li> Street :{user.address.street}</li>
               
              </ul>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            
              <Icon name="phone" />
              {user.phone}
            
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export default Users;