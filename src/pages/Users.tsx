import { Link } from 'react-router-dom';

const users = [
  { id: '1', name: 'سوروش' },
  { id: '2', name: 'نگار' },
  { id: '3', name: 'آرش' },
];

export default function Users() {
  return (
    <div>
      <h2>لیست کاربران</h2>
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




