import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-200">
            Todo App
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200">
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-blue-200">
                新規作成
              </Link>
            </li>
            <li>
              <Link to="/completed" className="hover:text-blue-200">
                完了済み
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
