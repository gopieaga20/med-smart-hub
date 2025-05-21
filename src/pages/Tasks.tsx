
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, Clock, AlertCircle, Filter, Plus } from 'lucide-react';
import TaskCard from '../components/dashboard/TaskCard';

const Tasks = () => {
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
    },
    {
      id: 't5',
      title: 'Call pharmacy about medication availability',
      category: 'prescription' as const,
      priority: 'medium' as const,
      dueTime: '3:30 PM',
      completed: false
    },
    {
      id: 't6',
      title: 'Review CT scan for Maria Garcia',
      category: 'lab' as const,
      priority: 'high' as const,
      patientName: 'Maria Garcia',
      completed: false
    },
    {
      id: 't7',
      title: 'Update patient education materials',
      category: 'other' as const,
      priority: 'low' as const,
      dueTime: 'Tomorrow',
      completed: false
    }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const handleTaskToggle = (id: string, completed: boolean) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed } : task
    ));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Group tasks by priority 
  const highPriorityTasks = filteredTasks.filter(task => task.priority === 'high' && !task.completed);
  const mediumPriorityTasks = filteredTasks.filter(task => task.priority === 'medium' && !task.completed);
  const lowPriorityTasks = filteredTasks.filter(task => task.priority === 'low' && !task.completed);
  const completedTasks = filteredTasks.filter(task => task.completed);

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <p className="text-doctor-neutral-gray">Manage your clinical and administrative tasks</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-doctor-purple hover:bg-doctor-purple/90' : ''}
          >
            All
          </Button>
          <Button 
            variant={filter === 'pending' ? 'default' : 'outline'} 
            onClick={() => setFilter('pending')}
            className={filter === 'pending' ? 'bg-doctor-purple hover:bg-doctor-purple/90' : ''}
          >
            Pending
          </Button>
          <Button 
            variant={filter === 'completed' ? 'default' : 'outline'} 
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'bg-doctor-purple hover:bg-doctor-purple/90' : ''}
          >
            Completed
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
          <Button className="bg-doctor-purple hover:bg-doctor-purple/90 flex items-center gap-2">
            <Plus size={16} />
            New Task
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* High Priority Tasks */}
        <Card>
          <CardHeader className="bg-red-50 border-b">
            <CardTitle className="flex items-center gap-2 text-doctor-alert-red">
              <AlertCircle size={18} />
              High Priority
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {highPriorityTasks.length > 0 ? (
              <div className="divide-y">
                {highPriorityTasks.map(task => (
                  <TaskCard key={task.id} task={task} onTaskToggle={handleTaskToggle} />
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">No high priority tasks</div>
            )}
          </CardContent>
        </Card>

        {/* Medium Priority Tasks */}
        <Card>
          <CardHeader className="bg-orange-50 border-b">
            <CardTitle className="flex items-center gap-2 text-orange-500">
              <Clock size={18} />
              Medium Priority
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {mediumPriorityTasks.length > 0 ? (
              <div className="divide-y">
                {mediumPriorityTasks.map(task => (
                  <TaskCard key={task.id} task={task} onTaskToggle={handleTaskToggle} />
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">No medium priority tasks</div>
            )}
          </CardContent>
        </Card>

        {/* Low Priority & Completed Tasks */}
        <Card>
          <CardHeader className="bg-blue-50 border-b">
            <CardTitle className="flex items-center gap-2 text-doctor-bright-blue">
              <CheckSquare size={18} />
              {filter === 'completed' ? 'Completed Tasks' : 'Low Priority'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {filter === 'completed' ? (
              completedTasks.length > 0 ? (
                <div className="divide-y">
                  {completedTasks.map(task => (
                    <TaskCard key={task.id} task={task} onTaskToggle={handleTaskToggle} />
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">No completed tasks</div>
              )
            ) : (
              lowPriorityTasks.length > 0 ? (
                <div className="divide-y">
                  {lowPriorityTasks.map(task => (
                    <TaskCard key={task.id} task={task} onTaskToggle={handleTaskToggle} />
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">No low priority tasks</div>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Tasks;
