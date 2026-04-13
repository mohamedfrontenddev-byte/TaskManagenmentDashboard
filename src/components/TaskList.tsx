import React from 'react';
import type { Task } from '../context/TaskContext';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  status: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status }) => {
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div>
      <h5>{status} ({filteredTasks.length})</h5>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
      {filteredTasks.length === 0 && <p>No tasks in {status.toLowerCase()}.</p>}
    </div>
  );
};

export default TaskList;