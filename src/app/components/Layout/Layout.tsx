import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={'min-w-[320px] min-h-screen flex p-5'}>
      <div
        className={'min-w-[80%] m-auto border-8 rounded p-6 drop-shadow-xl flex'}
        style={{ backgroundColor: 'rgba(219, 219, 219, 0.8)' }}
      >
        <div className={'m-auto text-center'}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
