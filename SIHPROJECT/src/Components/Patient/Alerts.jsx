// src/components/Alerts.jsx
import React from 'react';
import Card from './Card';
import { FaBell, FaInfoCircle } from 'react-icons/fa';

const Alerts = ({ alerts }) => {
    const alertStyles = {
        warning: {
            bg: 'bg-yellow-50',
            text: 'text-yellow-800',
            icon: <FaBell className="text-yellow-500" />
        },
        info: {
            bg: 'bg-blue-50',
            text: 'text-blue-800',
            icon: <FaInfoCircle className="text-blue-500" />
        }
    };

    return (
        <Card title="Alerts & Notifications" icon={FaBell}>
            <div className="space-y-3">
                {alerts.map(alert => {
                    const style = alertStyles[alert.type] || alertStyles.info;
                    return (
                        <div key={alert.id} className={`p-4 rounded-lg flex items-start ${style.bg}`}>
                            <div className="mr-3 flex-shrink-0 mt-1">{style.icon}</div>
                            <p className={`text-sm font-medium ${style.text}`}>{alert.message}</p>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};

export default Alerts;