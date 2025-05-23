
import React from 'react';
import { Clock } from 'lucide-react';

interface PatientAppointmentProps {
  patient: {
    id: string;
    name: string;
    time: string;
    avatar?: string;
    reason: string;
    status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  };
}

const PatientAppointment = ({ patient }: PatientAppointmentProps) => {
  const statusColors = {
    'scheduled': 'status-scheduled',
    'in-progress': 'status-in-progress',
    'completed': 'status-completed',
    'cancelled': 'status-cancelled'
  };

  return (
    <div className="flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
      <div className="flex items-center gap-3">
        {patient.avatar ? (
          <img src={patient.avatar} alt={patient.name} className="h-10 w-10 rounded-full" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-semibold">
            {patient.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
        )}
        <div>
          <div className="font-medium">{patient.name}</div>
          <div className="text-sm text-doctor-neutral-gray flex items-center gap-1">
            <Clock size={14} />
            <span>{patient.time}</span>
            <span className="mx-1">•</span>
            <span>{patient.reason}</span>
          </div>
        </div>
      </div>
      <div className={`text-xs rounded-full px-2 py-1 ${statusColors[patient.status]}`}>
        {patient.status === 'in-progress' ? 'In Progress' : patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
      </div>
    </div>
  );
};

export default PatientAppointment;
