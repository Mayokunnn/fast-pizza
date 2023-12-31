import { Outlet, useNavigation, useNavigate } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '../features/user/userSlice';

function AppLayout() {
  const navigate = useNavigate();
  const username = useSelector(getUserName);
  const { state } = useNavigation();
  const isLoading = state === 'loading';
  // useEffect(() => {
  //   if (!username) navigate('/');
  // }, [navigate, username]);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
