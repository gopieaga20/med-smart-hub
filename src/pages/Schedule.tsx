
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, User, FileText } from 'lucide-react';
import { addDays, format } from 'date-fns';

type AppointmentType = {
  id: string;
  patientName: string;
  time: string;
  duration: string;
  type: 'consultation' | 'follow-up' | 'procedure' | 'other';
  notes?: string;
};

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock appointments data
  const appointments: AppointmentType[] = [
    {
      id: '1',
      patientName: 'James Wilson',
      time: '09:00 AM',
      duration: '30 min',
      type: 'follow-up',
      notes: 'Follow-up on hypertension medication adjustment'
    },
    {
      id: '2',
      patientName: 'Maria Garcia',
      time: '10:00 AM',
      duration: '45 min',
      type: 'consultation',
      notes: 'New patient consultation for chronic back pain'
    },
    {
      id: '3',
      patientName: 'Robert Lee',
      time: '11:30 AM',
      duration: '30 min',
      type: 'follow-up'
    },
    {
      id: '4',
      patientName: 'Emily Carter',
      time: '01:00 PM',
      duration: '60 min',
      type: 'procedure',
      notes: 'Minor procedure - mole removal'
    },
    {
      id: '5',
      patientName: 'David Thompson',
      time: '03:00 PM',
      duration: '30 min',
      type: 'consultation'
    }
  ];

  // Filter appointments for selected date (in a real app, this would fetch from an API)
  const dateString = date ? format(date, 'yyyy-MM-dd') : '';
  const todayAppointments = appointments; // In a real app, filter by date
  
  // Type-specific styling
  const getTypeStyles = (type: AppointmentType['type']) => {
    switch (type) {
      case 'consultation':
        return 'bg-blue-100 text-blue-700';
      case 'follow-up':
        return 'bg-green-100 text-green-700';
      case 'procedure':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Schedule</h1>
        <p className="text-doctor-neutral-gray">Manage your appointments and calendar</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-doctor-purple" />
              Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md"
            />
            
            <div className="mt-4 space-y-2">
              <h3 className="font-medium text-sm">Upcoming Days</h3>
              {[0, 1, 2, 3].map((dayOffset) => {
                const day = addDays(new Date(), dayOffset);
                return (
                  <div key={dayOffset} className="flex justify-between items-center p-2 rounded hover:bg-gray-100 cursor-pointer">
                    <div>
                      <div className="font-medium">{format(day, 'EEEE')}</div>
                      <div className="text-sm text-gray-500">{format(day, 'MMM d, yyyy')}</div>
                    </div>
                    <div className="text-sm font-medium text-doctor-purple">5 appointments</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              {date ? format(date, 'MMMM d, yyyy') : 'Today'}
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous Day
              </Button>
              <Button variant="outline" size="sm">
                Next Day
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="text-center w-24">
                    <div className="text-lg font-bold">{appointment.time}</div>
                    <div className="text-sm text-gray-500">{appointment.duration}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-doctor-purple" />
                      <span className="font-medium">{appointment.patientName}</span>
                    </div>
                    {appointment.notes && (
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                        <FileText size={14} />
                        {appointment.notes}
                      </div>
                    )}
                  </div>
                  <div className={`rounded-full px-3 py-1 text-xs font-medium ${getTypeStyles(appointment.type)}`}>
                    {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button className="bg-doctor-purple hover:bg-doctor-purple/90">
                + New Appointment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Schedule;
