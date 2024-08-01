// src/components/AddTodo.js
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const AddTodo = ({ addTodo, categories }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    addTodo({
      text,
      category,
      completed: false,
      id: Date.now().toString(),
    });
    setText("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Todo
      </Button>
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddTodo;
