// src/components/Sidebar.js
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const Sidebar = ({
  categories,
  addCategory,
  selectCategory,
  selectedCategory,
}) => {
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory) {
      addCategory(newCategory);
      setNewCategory("");
    }
  };

  return (
    <div
      style={{ width: "250px", padding: "1rem", borderRight: "1px solid #ccc" }}
    >
      <Typography variant="h6">Categories</Typography>
      <List>
        {categories.map((category, index) => (
          <ListItem
            button
            key={index}
            selected={selectedCategory === category}
            onClick={() => selectCategory(category)}
          >
            <ListItemText primary={category} color="primary" />
          </ListItem>
        ))}
      </List>
      <TextField
        label="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        fullWidth
        margin="normal"
        variant="standard"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleAddCategory}
        fullWidth
      >
        Add Category
      </Button>
    </div>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCategory: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};

export default Sidebar;
