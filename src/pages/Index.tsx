import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import StatCard from '../components/dashboard/StatCard';
import PatientAppointment from '../components/dashboard/PatientAppointment';
import TaskCard from '../components/dashboard/TaskCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import AskAIButton from '../components/dashboard/AskAIButton';
import { User, Calendar, CheckSquare, Clock, FileText, AlertCircle, MessageCircle } from 'lucide-react';

const Index = () => {
  // Mock data for today's appointments
  const todayAppointments = [
    {
      id: '1',
      name: 'James Wilson',
      time: '9:00 AM',
      reason: 'Follow-up Consultation',
      status: 'completed' as const
    },
    {
      id: '2',
      name: 'Emily Carter',
      time: '10:30 AM',
      reason: 'Diabetes Checkup',
      status: 'in-progress' as const
    },
    {
      id: '3',
      name: 'Robert Lee',
      time: '11:45 AM',
      reason: 'Post-Op Review',
      status: 'scheduled' as const
    },
    {
      id: '4',
      name: 'Maria Garcia',
      time: '2:15 PM',
      reason: 'Cardiac Assessment',
      status: 'scheduled' as const
    }
  ];

  // Mock tasks data
  const initialTasks = [
    {
      id: 't1',
      title: 'Review lab results for James Wilson',
      category: 'lab' as const,
      priority: 'high' as const,
      dueTime: '12:00 PM',
      patientName: 'James Wilson',
      completed: false
    },
    {
      id: 't2',
      title: 'Update prescription for Emily Carter',
      category: 'prescription' as const,
      priority: 'medium' as const,
      dueTime: '2:00 PM',
      patientName: 'Emily Carter',
      completed: false
    },
    {
      id: 't3',
      title: 'Schedule follow-up for Robert Lee',
      category: 'follow-up' as const,
      priority: 'low' as const,
      patientName: 'Robert Lee',
      completed: false
    },
    {
      id: 't4',
      title: 'Complete discharge summary',
      category: 'other' as const,
      priority: 'high' as const,
      dueTime: '4:00 PM',
      completed: true
    }
  ];

  const [tasks, setTasks] = useState(initialTasks);

  // Mock activity data
  const recentActivities = [
    {
      id: 'a1',
      type: 'note' as const,
      patientName: 'Emily Carter',
      description: 'Added progress notes for diabetes follow-up',
      time: '30 minutes ago'
    },
    {
      id: 'a2',
      type: 'prescription' as const,
      patientName: 'James Wilson',
      description: 'Updated medication for hypertension',
      time: '1 hour ago'
    },
    {
      id: 'a3',
      type: 'lab' as const,
      patientName: 'Robert Lee',
      description: 'Ordered CBC and metabolic panel',
      time: '2 hours ago'
    }
  ];

  const handleTaskToggle = (id: string, completed: boolean) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed } : task
    ));
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, Dr. Sarah Johnson</h1>
        <p className="text-doctor-neutral-gray">Here's your overview for Wednesday, May 21, 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Patients" 
          value="128" 
          icon={<User size={24} className="text-doctor-purple" />} 
          change={{ value: 4, isPositive: true }}
        />
        <StatCard 
          title="Appointments Today" 
          value="8" 
          icon={<Calendar size={24} className="text-doctor-bright-blue" />} 
          iconBg="bg-doctor-bright-blue/10"
        />
        <StatCard 
          title="Tasks Pending" 
          value="5" 
          icon={<CheckSquare size={24} className="text-orange-500" />} 
          iconBg="bg-orange-100"
        />
        <StatCard 
          title="On Call Hours" 
          value="3:45" 
          icon={<Clock size={24} className="text-green-600" />} 
          iconBg="bg-green-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="px-4 py-3 border-b flex justify-between items-center">
                <h2 className="font-semibold flex items-center gap-2">
                  <Calendar size={16} className="text-doctor-purple" />
                  Today's Appointments
                </h2>
                <button className="text-sm text-doctor-purple hover:underline">
                  View all
                </button>
              </div>
              <div className="divide-y">
                {todayAppointments.map(appointment => (
                  <PatientAppointment key={appointment.id} patient={appointment} />
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="px-4 py-3 border-b flex justify-between items-center">
                <h2 className="font-semibold flex items-center gap-2">
                  <AlertCircle size={16} className="text-doctor-alert-red" />
                  Critical Alerts
                </h2>
                <button className="text-sm text-doctor-purple hover:underline">
                  View all
                </button>
              </div>
              <div className="p-4">
                <div className="p-3 border rounded-lg mb-3 bg-doctor-alert-red/10 border-doctor-alert-red/20">
                  <div className="font-medium">Abnormal Lab Result</div>
                  <div className="text-sm text-doctor-neutral-gray">James Wilson - Critical potassium levels</div>
                  <div className="text-xs text-doctor-neutral-gray mt-1">15 minutes ago</div>
                </div>
                
                <div className="p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                  <div className="font-medium">Medication Alert</div>
                  <div className="text-sm text-doctor-neutral-gray">Emily Carter - Possible drug interaction</div>
                  <div className="text-xs text-doctor-neutral-gray mt-1">1 hour ago</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h2 className="font-semibold flex items-center gap-2">
                <CheckSquare size={16} className="text-doctor-purple" />
                Tasks
              </h2>
              <button className="text-sm text-doctor-purple hover:underline">
                View all
              </button>
            </div>
            <div className="divide-y">
              {tasks.map(task => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onTaskToggle={handleTaskToggle} 
                />
              ))}
            </div>
            <div className="px-4 py-3 border-t">
              <button className="text-doctor-purple hover:underline text-sm font-medium">
                + Add New Task
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h2 className="font-semibold flex items-center gap-2">
                <FileText size={16} className="text-doctor-purple" />
                Recent Activity
              </h2>
            </div>
            <div className="p-4">
              <ActivityFeed activities={recentActivities} />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-doctor-purple to-doctor-purple/80 text-white rounded-xl shadow mt-6 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">Try AskAI Assistant</h3>
                <p className="text-white/80 text-sm mt-1">Get quick answers to your clinical questions</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <button className="bg-white/10 w-full text-left p-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                🔍 Show my patient list for today
              </button>
              <button className="bg-white/10 w-full text-left p-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                💊 Suggest treatment for hypertension
              </button>
              <button className="bg-white/10 w-full text-left p-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                📊 Summarize Emily's recent labs
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <AskAIButton />
    </Layout>
  );
};

export default Index;
