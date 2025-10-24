import { useParams } from 'react-router-dom';

export default function UserDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>جزئیات کاربر</h2>
      <p>شناسه کاربر: {id}</p>
    </div>
  );
}