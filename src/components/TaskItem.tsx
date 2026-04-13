import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import type { Task } from '../context/TaskContext';
import { useTasks } from '../context/TaskContext';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask } = useTasks();

  const getNextStatus = (status: string) => {
    if (status === 'To Do') return 'In Progress';
    if (status === 'In Progress') return 'Done';
    return 'Done'; // or loop back, but probably not
  };

  const getStatusVariant = (status: string) => {
    if (status === 'To Do') return 'secondary';
    if (status === 'In Progress') return 'warning';
    return 'success';
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        {task.description && <Card.Text>{task.description}</Card.Text>}
        <Badge bg={getStatusVariant(task.status)}>{task.status}</Badge>
        <div className="mt-2">
          {task.status !== 'Done' && (
            <Button
              size="sm"
              variant="outline-primary"
              className="me-2"
              onClick={() => updateTask(task.id, { status: getNextStatus(task.status) })}
            >
              Move to {getNextStatus(task.status)}
            </Button>
          )}
          <Button
            size="sm"
            variant="outline-danger"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;