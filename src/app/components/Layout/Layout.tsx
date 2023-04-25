import { Outlet } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';

const Layout = () => {
  return (
    <div className={'min-w-[320px] min-h-screen flex p-5'}>
      <div
        className={
          'min-w-[80%] min-h-[80vh] m-auto border-8 dark:border-zinc-800 rounded p-6 drop-shadow-xl flex bg-[#DBDBDB]/[.8] dark:bg-[#000]/[.5] transition linear'
        }
      >
        <div className={'m-auto text-center'}>
          <header>
            <ThemeSwitcher />
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
