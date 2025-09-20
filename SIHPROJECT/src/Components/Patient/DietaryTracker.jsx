// src/components/DietaryTracker.jsx
import React from 'react';
import Card from './Card';
import { FaUtensils } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DietaryTracker = ({ analysis }) => {
  const GUNA_COLORS = ['#8884d8', '#82ca9d'];
  return (
    <Card title="Dietary Analysis" icon={FaUtensils}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-600 text-center mb-2">Rasa (Six Tastes)</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={analysis.rasa} layout="vertical" margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={70} />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" name="Actual" fill="#8884d8" />
              <Bar dataKey="prescribed" name="Prescribed" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h4 className="font-semibold text-gray-600 text-center mb-2">Guna (Qualities)</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={analysis.guna} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {analysis.guna.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={GUNA_COLORS[index % GUNA_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default DietaryTracker;