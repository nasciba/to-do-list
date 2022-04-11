import ToDoListPage from "./pages/ToDoListPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ToDoListPage/>}/>
    </Routes>
  );
}

export default App;
