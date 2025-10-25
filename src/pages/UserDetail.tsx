import { useParams } from 'react-router-dom';

export default function UserDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
    </div>
  );
}
