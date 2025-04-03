import { useParams, Navigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import { useTodoContext } from '../context/TodoContext';

const EditTodoPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getTodoById } = useTodoContext();

  const todo = id ? getTodoById(id) : undefined;

  if (!todo) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8" data-testid="edit-todo-page">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">タスクの編集</h2>
        <TodoForm initialData={todo} isEditing={true} />
      </div>
    </div>
  );
};

export default EditTodoPage;
