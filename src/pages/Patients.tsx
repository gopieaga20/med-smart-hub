
import React from 'react';
import Layout from '../components/layout/Layout';
import PatientSearch from '../components/dashboard/PatientSearch';

const Patients = () => {
  const patientList = [
    { id: 'P001', name: 'James Wilson', age: 45, lastVisit: 'May 21, 2025', status: 'Admitted', condition: 'Stable' },
    { id: 'P002', name: 'Emily Carter', age: 62, lastVisit: 'May 20, 2025', status: 'Outpatient', condition: 'Improving' },
    { id: 'P003', name: 'Robert Lee', age: 38, lastVisit: 'May 19, 2025', status: 'Discharged', condition: 'Recovered' },
    { id: 'P004', name: 'Maria Garcia', age: 53, lastVisit: 'May 18, 2025', status: 'Outpatient', condition: 'Stable' },
    { id: 'P005', name: 'David Chen', age: 29, lastVisit: 'May 17, 2025', status: 'Admitted', condition: 'Critical' },
    { id: 'P006', name: 'Sarah Johnson', age: 41, lastVisit: 'May 16, 2025', status: 'Outpatient', condition: 'Stable' }
  ];

  const statusColors = {
    'Admitted': 'bg-doctor-purple/20 text-doctor-purple',
    'Outpatient': 'bg-blue-100 text-blue-700',
    'Discharged': 'bg-green-100 text-green-700'
  };

  const conditionColors = {
    'Stable': 'text-blue-600',
    'Improving': 'text-green-600',
    'Recovered': 'text-green-700',
    'Critical': 'text-doctor-alert-red'
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Patient Management</h1>
        <p className="text-doctor-neutral-gray">Search, view and manage patient records</p>
      </div>

      <div className="mb-6">
        <PatientSearch />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Condition
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientList.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {patient.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[patient.status as keyof typeof statusColors]}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${conditionColors[patient.condition as keyof typeof conditionColors]}`}>
                      {patient.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-doctor-purple hover:text-doctor-purple/80 mr-3">View</button>
                    <button className="text-doctor-bright-blue hover:text-doctor-bright-blue/80">Notes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t flex justify-between items-center">
          <div className="text-sm text-doctor-neutral-gray">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">128</span> patients
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-sm" disabled>Previous</button>
            <button className="px-3 py-1 border rounded text-sm bg-doctor-purple text-white">1</button>
            <button className="px-3 py-1 border rounded text-sm">2</button>
            <button className="px-3 py-1 border rounded text-sm">3</button>
            <button className="px-3 py-1 border rounded text-sm">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Patients;
