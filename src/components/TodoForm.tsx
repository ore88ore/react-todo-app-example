import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodoContext } from '../context/TodoContext';
import { Todo } from '../types';

interface TodoFormProps {
  initialData?: Todo;
  isEditing?: boolean;
}

const TodoForm = ({ initialData, isEditing = false }: TodoFormProps) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const { addTodo, updateTodo } = useTodoContext();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const newErrors: { title?: string; description?: string } = {};
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = 'タイトルは必須です';
      isValid = false;
    }

    if (!description.trim()) {
      newErrors.description = '説明は必須です';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (isEditing && initialData) {
      updateTodo(initialData.id, { title, description });
      navigate(`/todo/${initialData.id}`);
    } else {
      addTodo(title, description);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="todo-form">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="todo-title-input"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          説明
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="todo-description-input"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          data-testid="cancel-button"
        >
          キャンセル
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          data-testid="submit-button"
        >
          {isEditing ? '更新' : '作成'}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
