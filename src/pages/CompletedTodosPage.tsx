import TodoList from '../components/TodoList';

const CompletedTodosPage = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-testid="completed-todos-page">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">完了済みのタスク</h2>
      <TodoList showCompleted={true} />
    </div>
  );
};

export default CompletedTodosPage;
