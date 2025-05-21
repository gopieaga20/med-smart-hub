
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, LineChart, PieChart, Calendar, User, FileText, Clock } from 'lucide-react';
import { 
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const Analytics = () => {
  // Mock data for patient visits chart
  const patientVisitsData = [
    { name: 'Jan', consultations: 65, procedures: 28, followups: 40 },
    { name: 'Feb', consultations: 59, procedures: 30, followups: 45 },
    { name: 'Mar', consultations: 80, procedures: 25, followups: 55 },
    { name: 'Apr', consultations: 81, procedures: 22, followups: 60 },
    { name: 'May', consultations: 56, procedures: 27, followups: 48 },
    { name: 'Jun', consultations: 55, procedures: 34, followups: 52 },
    { name: 'Jul', consultations: 67, procedures: 30, followups: 58 }
  ];

  // Mock data for diagnosis distribution
  const diagnosisData = [
    { name: 'Hypertension', value: 35, color: '#8B5CF6' },
    { name: 'Type 2 Diabetes', value: 25, color: '#EC4899' },
    { name: 'Lower Back Pain', value: 15, color: '#F97316' },
    { name: 'Anxiety Disorder', value: 12, color: '#0EA5E9' },
    { name: 'Respiratory Infection', value: 8, color: '#10B981' },
    { name: 'Other', value: 5, color: '#6B7280' }
  ];

  // Mock data for department referrals
  const departmentReferralData = [
    { name: 'Cardiology', referrals: 40 },
    { name: 'Orthopedics', referrals: 30 },
    { name: 'Neurology', referrals: 25 },
    { name: 'Endocrinology', referrals: 20 },
    { name: 'Gastroenterology', referrals: 15 },
    { name: 'Dermatology', referrals: 12 },
    { name: 'Oncology', referrals: 8 }
  ];

  // Chart configuration for the chart component
  const chartConfig = {
    consultations: { label: "Consultations", color: "#8B5CF6" },
    procedures: { label: "Procedures", color: "#EC4899" },
    followups: { label: "Follow-ups", color: "#0EA5E9" },
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-doctor-neutral-gray">Insights and statistics about your practice</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">1,248</div>
              <User className="h-5 w-5 text-doctor-purple" />
            </div>
            <div className="text-xs text-green-600 flex items-center mt-1">
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">286</div>
              <Calendar className="h-5 w-5 text-doctor-bright-blue" />
            </div>
            <div className="text-xs text-green-600 flex items-center mt-1">
              +8% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">452</div>
              <FileText className="h-5 w-5 text-orange-500" />
            </div>
            <div className="text-xs text-green-600 flex items-center mt-1">
              +15% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Avg. Visit Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">24 min</div>
              <Clock className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-xs text-red-600 flex items-center mt-1">
              -2 min from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-doctor-purple" />
              Patient Visits
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Month
              </Button>
              <Button variant="outline" size="sm">
                Quarter
              </Button>
              <Button variant="outline" size="sm">
                Year
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-80" config={chartConfig}>
              <RechartsLineChart data={patientVisitsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="consultations" 
                  name="Consultations"
                  stroke="#8B5CF6" 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="procedures" 
                  name="Procedures"
                  stroke="#EC4899" 
                />
                <Line 
                  type="monotone" 
                  dataKey="followups" 
                  name="Follow-ups"
                  stroke="#0EA5E9" 
                />
              </RechartsLineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-doctor-purple" />
              Referrals by Department
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={departmentReferralData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="referrals" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-doctor-purple" />
              Diagnosis Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={diagnosisData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {diagnosisData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-doctor-purple" />
              Weekly Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-sm font-medium text-gray-500">Patients</div>
                  <div className="text-2xl font-bold text-doctor-purple">48</div>
                  <div className="text-xs text-green-600">+5</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <div className="text-sm font-medium text-gray-500">Procedures</div>
                  <div className="text-2xl font-bold text-pink-600">12</div>
                  <div className="text-xs text-green-600">+2</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-sm font-medium text-gray-500">Referrals</div>
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-xs text-red-600">-1</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Most Common Procedures</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Blood Pressure Check</span>
                    <span className="font-medium">32</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Blood Glucose Test</span>
                    <span className="font-medium">18</span>
                  </li>
                  <li className="flex justify-between">
                    <span>ECG</span>
                    <span className="font-medium">9</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Nebulizer Treatment</span>
                    <span className="font-medium">7</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
