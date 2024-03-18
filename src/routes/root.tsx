import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <div className="flex flex-col md:flex-row shrink-0 w-full h-screen bg-black text-white">
      <div className="md:basis-1/4">
        <div className="flex w-full justify-between">
          <h1 className="p-4 font-bold">UI/UX components</h1>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <nav className="p-4" data-testid="navigation">
          <div>
            <Link to="/password">Password Input</Link>
          </div>
          <div>
            <Link to="/calendar">Calendar</Link>
          </div>
        </nav>
      </div>
      <div className="mt-8 px-8 py-5 md:basis-3/4">
        <Outlet />
      </div>
      
    </div>
  );
}