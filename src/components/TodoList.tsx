import { useMemo } from 'react';
import { useTodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

interface TodoListProps {
  showCompleted?: boolean;
}

const TodoList = ({ showCompleted = false }: TodoListProps) => {
  const { todos } = useTodoContext();

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed === showCompleted);
  }, [todos, showCompleted]);

  if (filteredTodos.length === 0) {
    return (
      <div
        className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200"
        data-testid="empty-todo-list"
      >
        <p className="text-gray-500 text-lg">
          {showCompleted
            ? 'まだ完了したタスクはありません'
            : 'タスクがありません。新しいタスクを作成しましょう！'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-testid="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
