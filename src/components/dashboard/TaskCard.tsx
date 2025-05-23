
import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    category: 'lab' | 'prescription' | 'follow-up' | 'other';
    priority: 'high' | 'medium' | 'low';
    dueTime?: string;
    patientName?: string;
    completed: boolean;
  };
  onTaskToggle: (id: string, completed: boolean) => void;
}

const TaskCard = ({ task, onTaskToggle }: TaskCardProps) => {
  const priorityColors = {
    'high': 'text-red-600 dark:text-red-400',
    'medium': 'text-amber-600 dark:text-amber-400',
    'low': 'text-green-600 dark:text-green-400'
  };
  
  const categoryIcons = {
    'lab': '🧪',
    'prescription': '💊',
    'follow-up': '📞',
    'other': '📋'
  };

  return (
    <div className="flex items-center gap-3 p-3 border-b last:border-b-0">
      <div 
        className="cursor-pointer" 
        onClick={() => onTaskToggle(task.id, !task.completed)}
      >
        {task.completed ? (
          <CheckCircle className="text-green-500" size={20} />
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-doctor-neutral-gray dark:border-gray-400" />
        )}
      </div>
      <div className="flex-1">
        <div className={`font-medium text-gray-800 dark:text-gray-100 ${task.completed ? 'line-through text-doctor-neutral-gray dark:text-gray-400' : ''}`}>
          {task.title}
        </div>
        <div className="text-sm text-doctor-neutral-gray dark:text-gray-400 flex items-center gap-2 mt-1">
          <span className="mr-1">{categoryIcons[task.category]}</span>
          {task.patientName && <span>Patient: {task.patientName}</span>}
          {task.dueTime && (
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {task.dueTime}
            </span>
          )}
        </div>
      </div>
      {!task.completed && (
        <div className={`${priorityColors[task.priority]} flex items-center gap-1`}>
          {task.priority === 'high' && <AlertCircle size={14} />}
          <span className="text-xs font-medium">
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
