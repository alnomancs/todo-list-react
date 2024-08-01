// src/components/TodoItem.js
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const TodoItem = ({
  todo: { id, text, completed, category },
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        onChange={() => toggleComplete(id)}
        color="success"
      />
      <ListItemText
        primary={text}
        secondary={
          // <IconButton edge="end" aria-label="comments">
          //   {category}
          // </IconButton>
          <Typography variant="body1" color="textSecondary">
            {category}
          </Typography>
        }
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      />
      <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(id)}>
        <DeleteIcon />
      </IconButton>
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
};

export default TodoItem;
