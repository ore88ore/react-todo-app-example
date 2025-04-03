import TodoForm from '../components/TodoForm';

const CreateTodoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-testid="create-todo-page">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">新規タスク作成</h2>
        <TodoForm />
      </div>
    </div>
  );
};

export default CreateTodoPage;
