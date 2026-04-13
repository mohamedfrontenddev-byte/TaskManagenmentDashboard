import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTasks } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <Container>
      <h1 className="my-4">Smart Task Dashboard</h1>
      <TaskForm />
      <Row>
        <Col md={4}>
          <TaskList tasks={tasks} status="To Do" />
        </Col>
        <Col md={4}>
          <TaskList tasks={tasks} status="In Progress" />
        </Col>
        <Col md={4}>
          <TaskList tasks={tasks} status="Done" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;