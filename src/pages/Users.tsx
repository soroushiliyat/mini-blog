import { Link } from 'react-router-dom';

const users = [
  { id: '1', name: 'Soroush' },
  { id: '2', name: 'Negar' },
  { id: '3', name: 'Arash' },
];

export default function Users() {
  return (
    <div>
      <h2>Users list</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}




