import { useSelector } from 'react-redux';
import { getUserName } from './userSlice';

function UserName() {
  const username = useSelector(getUserName);

  return (
    username && (
      <div className="hidden text-sm font-semibold md:inline-block ">
        {username}
      </div>
    )
  );
}

export default UserName;
