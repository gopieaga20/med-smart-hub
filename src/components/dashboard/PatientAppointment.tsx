
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
    'scheduled': 'bg-blue-100 text-blue-700',
    'in-progress': 'bg-doctor-purple/20 text-doctor-purple',
    'completed': 'bg-green-100 text-green-700',
    'cancelled': 'bg-red-100 text-red-700'
  };

  return (
    <div className="flex items-center justify-between p-3 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        {patient.avatar ? (
          <img src={patient.avatar} alt={patient.name} className="h-10 w-10 rounded-full" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-doctor-light-purple text-doctor-purple flex items-center justify-center font-semibold">
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
