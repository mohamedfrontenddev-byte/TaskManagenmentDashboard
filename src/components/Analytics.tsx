import React from 'react';
import { Container } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTasks } from '../context/TaskContext';

const Analytics: React.FC = () => {
  const { tasks } = useTasks();

  const statusCounts = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = [
    { name: 'To Do', value: statusCounts['To Do'] || 0, color: '#6c757d' },
    { name: 'In Progress', value: statusCounts['In Progress'] || 0, color: '#ffc107' },
    { name: 'Done', value: statusCounts['Done'] || 0, color: '#28a745' },
  ];

  const totalTasks = tasks.length;
  const doneTasks = statusCounts['Done'] || 0;
  const completionRate = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return (
    <Container>
      <h1 className="my-4">Analytics</h1>
      <h3>Completion Rate: {completionRate}%</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Analytics;