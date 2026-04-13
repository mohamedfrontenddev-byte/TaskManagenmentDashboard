import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useTasks } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title: title.trim(), description: description.trim(), status: 'To Do' });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Button type="submit" variant="primary">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TaskForm;