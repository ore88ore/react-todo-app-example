import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTodoContext } from '../context/TodoContext';

const TodoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getTodoById, deleteTodo, toggleComplete } = useTodoContext();
  const navigate = useNavigate();

  const todo = id ? getTodoById(id) : undefined;

  if (!todo) {
    return (
      <div className="container mx-auto px-4 py-8 text-center" data-testid="todo-not-found">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">タスクが見つかりません</h2>
        <p className="text-gray-600 mb-6">
          指定されたIDのタスクは存在しないか、削除された可能性があります。
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          ホームに戻る
        </Link>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDelete = () => {
    if (window.confirm('このタスクを削除してもよろしいですか？')) {
      deleteTodo(todo.id);
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" data-testid="todo-detail-page">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <h2
            className={`text-2xl font-bold ${
              todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'
            }`}
          >
            {todo.title}
          </h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              todo.completed
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {todo.completed ? '完了' : '未完了'}
          </span>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 whitespace-pre-wrap">{todo.description}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-500">作成日時: {formatDate(todo.createdAt)}</p>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`px-4 py-2 rounded-md ${
              todo.completed
                ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
            data-testid="toggle-status-button"
          >
            {todo.completed ? '未完了に戻す' : '完了にする'}
          </button>
          <Link
            to={`/edit/${todo.id}`}
            className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-md"
            data-testid="edit-button"
          >
            編集
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-md"
            data-testid="delete-button"
          >
            削除
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800"
          data-testid="back-to-home"
        >
          ← タスク一覧に戻る
        </Link>
      </div>
    </div>
  );
};

export default TodoDetailPage;
