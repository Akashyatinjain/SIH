// src/components/MedicalRecords.jsx
import React from 'react';
import Card from './Card';
import { FaFileMedical, FaDownload } from 'react-icons/fa';

const MedicalRecords = ({ records }) => (
    <Card title="Medical Records" icon={FaFileMedical}>
        <ul className="space-y-3">
            {records.map(record => (
                <li key={record.id} className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition">
                    <div>
                        <p className="font-medium text-gray-800">{record.name}</p>
                        <p className="text-sm text-gray-500">Date: {record.date}</p>
                    </div>
                    <button className="text-blue-500 hover:text-blue-700">
                        <FaDownload />
                    </button>
                </li>
            ))}
        </ul>
    </Card>
);

export default MedicalRecords;