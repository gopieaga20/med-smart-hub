
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

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'Admitted': return 'status-in-progress';
      case 'Outpatient': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
      case 'Discharged': return 'status-completed';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getConditionClass = (condition: string) => {
    switch(condition) {
      case 'Stable': return 'status-stable';
      case 'Improving': return 'status-improving';
      case 'Recovered': return 'status-recovered';
      case 'Critical': return 'status-critical';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Patient Management</h1>
        <p className="text-snapdoc-neutral-gray dark:text-gray-400">Search, view and manage patient records</p>
      </div>

      <div className="mb-6">
        <PatientSearch />
      </div>

      <div className="grid-outline bg-card">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Patient ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Last Visit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Condition
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-snapdoc-blue/10">
              {patientList.map((patient) => (
                <tr key={patient.id} className="hover:bg-snapdoc-blue/5">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {patient.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {patient.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-snapdoc-neutral-gray dark:text-gray-400">
                    {patient.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-snapdoc-neutral-gray dark:text-gray-400">
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(patient.status)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getConditionClass(patient.condition)}`}>
                      {patient.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-snapdoc-blue hover:text-snapdoc-blue/80 mr-3">View</button>
                    <button className="text-snapdoc-blue hover:text-snapdoc-blue/80">Notes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-snapdoc-blue/10 flex justify-between items-center">
          <div className="text-sm text-snapdoc-neutral-gray dark:text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">128</span> patients
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-snapdoc-blue/20 rounded text-sm" disabled>Previous</button>
            <button className="px-3 py-1 border border-snapdoc-blue/20 rounded text-sm bg-snapdoc-blue text-white">1</button>
            <button className="px-3 py-1 border border-snapdoc-blue/20 rounded text-sm hover:bg-snapdoc-blue/10">2</button>
            <button className="px-3 py-1 border border-snapdoc-blue/20 rounded text-sm hover:bg-snapdoc-blue/10">3</button>
            <button className="px-3 py-1 border border-snapdoc-blue/20 rounded text-sm hover:bg-snapdoc-blue/10">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Patients;
