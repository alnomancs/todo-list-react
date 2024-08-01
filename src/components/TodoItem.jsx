import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoItem = ({
  todo: { id, text, completed, category },
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTodo(id, editedText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedText(text);
    setIsEditing(false);
  };
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        onChange={() => toggleComplete(id)}
        color="success"
      />
      {isEditing ? (
        <TextField
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          fullWidth
          margin=""
        />
      ) : (
        <ListItemText
          primary={text}
          secondary={
            <Typography variant="body1" color="textSecondary">
              {category}
            </Typography>
          }
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        />
      )}

      {isEditing ? (
        <>
          <IconButton edge="end" aria-label="save" onClick={handleSaveClick}>
            <SaveIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="cancel"
            onClick={handleCancelClick}
          >
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton edge="end" aria-label="edit" onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteTodo(id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
