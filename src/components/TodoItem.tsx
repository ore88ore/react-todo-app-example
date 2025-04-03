import { Link } from 'react-router-dom';
import { Todo } from '../types';
import { useTodoContext } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleComplete, deleteTodo } = useTodoContext();

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div
      className={`border rounded-lg p-4 mb-4 shadow-sm transition-all ${
        todo.completed ? 'bg-gray-50' : 'bg-white'
      }`}
      data-testid={`todo-item-${todo.id}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3
            className={`text-xl font-semibold mb-1 ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
          >
            {todo.title}
          </h3>
          <p
            className={`mb-2 ${
              todo.completed ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {todo.description}
          </p>
          <p className="text-sm text-gray-500">
            作成日時: {formatDate(todo.createdAt)}
          </p>
        </div>
        <div className="flex flex-col space-y-2 ml-4">
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`px-3 py-1 rounded text-sm ${
              todo.completed
                ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
            data-testid={`toggle-todo-${todo.id}`}
          >
            {todo.completed ? '未完了に戻す' : '完了にする'}
          </button>
          <Link
            to={`/edit/${todo.id}`}
            className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded text-sm text-center"
            data-testid={`edit-todo-${todo.id}`}
          >
            編集
          </Link>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded text-sm"
            data-testid={`delete-todo-${todo.id}`}
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
