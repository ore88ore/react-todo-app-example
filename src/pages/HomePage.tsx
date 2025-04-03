import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-testid="home-page">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">未完了のタスク</h2>
        <Link
          to="/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          data-testid="create-todo-button"
        >
          新規タスク作成
        </Link>
      </div>
      <TodoList showCompleted={false} />
    </div>
  );
};

export default HomePage;
