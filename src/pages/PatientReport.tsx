
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { FileText, User, Activity, Calendar, Clock, ArrowLeft, Printer } from 'lucide-react';

interface PatientData {
  id: string;
  name: string;
  age: number;
  gender: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
  insurance: string;
  emergencyContact: string;
  allergies: string[];
  medications: Array<{name: string, dosage: string, frequency: string}>;
  conditions: string[];
  recentVisits: Array<{date: string, reason: string, doctor: string}>;
  labs: Array<{date: string, type: string, result: string, status: string}>;
  status: string;
  condition: string;
}

const PatientReport = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in a real app, this would be fetched from an API
    const mockPatientData: Record<string, PatientData> = {
      'P001': {
        id: 'P001',
        name: 'James Wilson',
        age: 45,
        gender: 'Male',
        dateOfBirth: 'April 15, 1980',
        address: '123 Main St, Anytown, CA 94501',
        phone: '(555) 123-4567',
        email: 'james.wilson@email.com',
        insurance: 'Blue Shield - #BSP98765432',
        emergencyContact: 'Lisa Wilson (Wife) - (555) 765-4321',
        allergies: ['Penicillin', 'Sulfa drugs'],
        medications: [
          { name: 'Amlodipine', dosage: '5mg', frequency: 'Daily' },
          { name: 'Atorvastatin', dosage: '40mg', frequency: 'Daily' },
          { name: 'Aspirin', dosage: '81mg', frequency: 'Daily' }
        ],
        conditions: ['Hypertension', 'Hyperlipidemia', 'Angina pectoris'],
        recentVisits: [
          { date: 'May 21, 2025', reason: 'Follow-up Consultation', doctor: 'Dr. Sarah Johnson' },
          { date: 'April 12, 2025', reason: 'Chest Pain', doctor: 'Dr. Sarah Johnson' },
          { date: 'March 3, 2025', reason: 'Annual Physical', doctor: 'Dr. Robert Chen' }
        ],
        labs: [
          { date: 'May 21, 2025', type: 'Lipid Panel', result: 'LDL: 130 mg/dL', status: 'Elevated' },
          { date: 'May 21, 2025', type: 'Comprehensive Metabolic Panel', result: 'Potassium: 3.2 mEq/L', status: 'Low' },
          { date: 'April 12, 2025', type: 'Troponin', result: '0.01 ng/mL', status: 'Normal' }
        ],
        status: 'Admitted',
        condition: 'Stable'
      },
      'P002': {
        id: 'P002',
        name: 'Emily Carter',
        age: 62,
        gender: 'Female',
        dateOfBirth: 'March 3, 1963',
        address: '456 Oak Ave, Anytown, CA 94501',
        phone: '(555) 234-5678',
        email: 'emily.carter@email.com',
        insurance: 'Medicare - #MCP12345678',
        emergencyContact: 'David Carter (Son) - (555) 876-5432',
        allergies: ['Latex', 'Iodine'],
        medications: [
          { name: 'Metformin', dosage: '1000mg', frequency: 'Twice daily' },
          { name: 'Insulin Glargine', dosage: '20 units', frequency: 'Nightly' },
          { name: 'Lisinopril', dosage: '10mg', frequency: 'Daily' }
        ],
        conditions: ['Type 2 Diabetes', 'Hypertension', 'Osteoarthritis'],
        recentVisits: [
          { date: 'May 20, 2025', reason: 'Diabetes Checkup', doctor: 'Dr. Sarah Johnson' },
          { date: 'March 15, 2025', reason: 'Joint Pain', doctor: 'Dr. Michael Williams' },
          { date: 'February 2, 2025', reason: 'Glucose Monitoring', doctor: 'Dr. Sarah Johnson' }
        ],
        labs: [
          { date: 'May 20, 2025', type: 'HbA1c', result: '7.2%', status: 'Elevated' },
          { date: 'May 20, 2025', type: 'Fasting Glucose', result: '145 mg/dL', status: 'Elevated' },
          { date: 'February 2, 2025', type: 'Kidney Function', result: 'eGFR: 65 mL/min', status: 'Decreased' }
        ],
        status: 'Outpatient',
        condition: 'Improving'
      }
    };

    setTimeout(() => {
      if (patientId && mockPatientData[patientId]) {
        setPatient(mockPatientData[patientId]);
      }
      setLoading(false);
    }, 500); // Simulating API delay
  }, [patientId]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!patient) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Patient Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">The patient record you requested could not be found.</p>
          <Link to="/patients" className="mt-6 inline-flex items-center text-primary hover:underline">
            <ArrowLeft size={16} className="mr-2" /> Back to Patients List
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <Link to="/patients" className="text-primary hover:underline flex items-center">
              <ArrowLeft size={16} className="mr-1" /> Back
            </Link>
            <h1 className="text-2xl font-bold">Patient Report</h1>
          </div>
          <p className="text-doctor-neutral-gray dark:text-gray-400">Detailed view of patient information and medical history</p>
        </div>
        <div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200">
            <Printer size={16} />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          {/* Patient Info Card */}
          <div className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300 mb-6">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-blue-50 dark:bg-blue-900/20">
              <h2 className="font-semibold flex items-center gap-2">
                <User size={16} className="text-primary" />
                Patient Information
              </h2>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <div className="h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl font-semibold">
                  {patient.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold">{patient.name}</h3>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  ID: {patient.id}
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2">
                  <div className="text-gray-500 dark:text-gray-400">Age:</div>
                  <div>{patient.age} years</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-gray-500 dark:text-gray-400">Gender:</div>
                  <div>{patient.gender}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-gray-500 dark:text-gray-400">Date of Birth:</div>
                  <div>{patient.dateOfBirth}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-gray-500 dark:text-gray-400">Status:</div>
                  <div>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      patient.status === 'Admitted' ? 'status-in-progress' : 
                      patient.status === 'Outpatient' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 
                      'status-completed'
                    }`}>
                      {patient.status}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-gray-500 dark:text-gray-400">Condition:</div>
                  <div>
                    <span className={`text-sm font-medium ${
                      patient.condition === 'Stable' ? 'status-stable' :
                      patient.condition === 'Improving' ? 'status-improving' :
                      patient.condition === 'Recovered' ? 'status-recovered' :
                      patient.condition === 'Critical' ? 'status-critical' :
                      'text-gray-600 dark:text-gray-400'
                    }`}>
                      {patient.condition}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300 mb-6">
            <div className="px-4 py-3 border-b">
              <h2 className="font-semibold">Contact Information</h2>
            </div>
            <div className="p-4 text-sm space-y-3">
              <div>
                <div className="text-gray-500 dark:text-gray-400">Address:</div>
                <div className="mt-1">{patient.address}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Phone:</div>
                <div className="mt-1">{patient.phone}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Email:</div>
                <div className="mt-1">{patient.email}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Insurance:</div>
                <div className="mt-1">{patient.insurance}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Emergency Contact:</div>
                <div className="mt-1">{patient.emergencyContact}</div>
              </div>
            </div>
          </div>
          
          {/* Allergies & Conditions */}
          <div className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="px-4 py-3 border-b">
              <h2 className="font-semibold">Allergies & Conditions</h2>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Allergies:</h3>
                <div className="flex flex-wrap gap-2">
                  {patient.allergies.map((allergy, index) => (
                    <span key={index} className="bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded-full text-xs">
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Medical Conditions:</h3>
                <div className="flex flex-wrap gap-2">
                  {patient.conditions.map((condition, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          {/* Medications */}
          <div className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300 mb-6">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-amber-50 dark:bg-amber-900/20">
              <h2 className="font-semibold flex items-center gap-2">
                <FileText size={16} className="text-amber-600 dark:text-amber-400" />
                Current Medications
              </h2>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Medication
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Dosage
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Frequency
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-card divide-y divide-gray-200 dark:divide-gray-700">
                  {patient.medications.map((medication, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {medication.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {medication.dosage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {medication.frequency}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Recent Visits */}
          <div className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300 mb-6">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-green-50 dark:bg-green-900/20">
              <h2 className="font-semibold flex items-center gap-2">
                <Calendar size={16} className="text-green-600 dark:text-green-400" />
                Recent Visits
              </h2>
              <Link to={`/documentation?patientId=${patient.id}`} className="text-sm text-primary hover:underline">
                View All Notes
              </Link>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Reason
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Provider
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-card divide-y divide-gray-200 dark:divide-gray-700">
                  {patient.recentVisits.map((visit, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {visit.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {visit.reason}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {visit.doctor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Recent Labs */}
          <div className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-purple-50 dark:bg-purple-900/20">
              <h2 className="font-semibold flex items-center gap-2">
                <Activity size={16} className="text-purple-600 dark:text-purple-400" />
                Recent Laboratory Results
              </h2>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Test
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Result
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-card divide-y divide-gray-200 dark:divide-gray-700">
                  {patient.labs.map((lab, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {lab.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {lab.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {lab.result}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${
                          lab.status === 'Normal' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          lab.status === 'Elevated' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' :
                          lab.status === 'Low' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          lab.status === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                          lab.status === 'Decreased' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          {lab.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientReport;
