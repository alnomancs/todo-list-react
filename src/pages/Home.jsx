import { Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import AddTodo from "../components/AddTodo";
import Sidebar from "../components/Sidebar";
import TodoList from "../components/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [categories, setCategories] = useLocalStorage("categories", ["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const toggleComplete = (id) => {
    console.log(id);
    console.log(todos);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos =
    selectedCategory === "All"
      ? todos
      : todos.filter((todo) => todo.category === selectedCategory);

  return (
    <div
      style={{
        display: "flex",
        border: "2px solid red",
        borderRadius: "50px",
        padding: "10px",
      }}
    >
      <Sidebar
        categories={categories}
        addCategory={addCategory}
        selectCategory={selectCategory}
        selectedCategory={selectedCategory}
      />
      <Container maxWidth="sm">
        <Paper elevation={1} style={{ padding: "2rem", marginTop: "2rem" }}>
          <Typography variant="h3" align="center" gutterBottom>
            To-Do List React Application
          </Typography>
          <AddTodo addTodo={addTodo} categories={categories} />
          <TodoList
            todos={filteredTodos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
