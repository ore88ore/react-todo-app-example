import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TodoDetailPage from "./pages/TodoDetailPage";
import CreateTodoPage from "./pages/CreateTodoPage";
import EditTodoPage from "./pages/EditTodoPage";
import CompletedTodosPage from "./pages/CompletedTodosPage";

function App() {
  return (
    <TodoProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo/:id" element={<TodoDetailPage />} />
              <Route path="/create" element={<CreateTodoPage />} />
              <Route path="/edit/:id" element={<EditTodoPage />} />
              <Route path="/completed" element={<CompletedTodosPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;
