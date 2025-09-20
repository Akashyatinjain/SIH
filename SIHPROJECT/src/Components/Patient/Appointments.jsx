// src/components/Appointments.jsx
import React from 'react';
import Card from './Card';
import { FaCalendarCheck } from 'react-icons/fa';

const Appointments = ({ list }) => (
  <Card title="Upcoming Appointments" icon={FaCalendarCheck}>
    <ul className="space-y-3">
      {list.map((a) => (
        <li key={a.id} className="p-3 border rounded-lg flex justify-between items-center">
          <div>
            <div className="font-medium">{a.title}</div>
            <div className="text-sm text-gray-500">{a.date} • {a.time}</div>
          </div>
          <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Details</button>
        </li>
      ))}
    </ul>
  </Card>
);

export default Appointments;