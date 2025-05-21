
import React from 'react';
import Layout from '../components/layout/Layout';
import { FileText, Edit, Trash, Check, ArrowUp, ArrowDown } from 'lucide-react';

const Documentation = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Clinical Documentation</h1>
        <p className="text-doctor-neutral-gray">Create, view and manage clinical notes and documentation</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h2 className="font-semibold">Patient Selection</h2>
            </div>
            <div className="p-4">
              <div className="relative mb-4">
                <input
                  type="search"
                  placeholder="Search patients..."
                  className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-doctor-purple focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-doctor-light-gray card-hover bg-doctor-light-purple/20">
                  <div className="font-medium">James Wilson</div>
                  <div className="text-sm text-doctor-neutral-gray">45 yrs • Male • ID: P001</div>
                  <div className="text-xs text-doctor-purple mt-1">Admitted • Cardiology</div>
                </div>
                
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-doctor-light-gray card-hover">
                  <div className="font-medium">Emily Carter</div>
                  <div className="text-sm text-doctor-neutral-gray">62 yrs • Female • ID: P002</div>
                  <div className="text-xs text-blue-600 mt-1">Outpatient • Endocrinology</div>
                </div>
                
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-doctor-light-gray card-hover">
                  <div className="font-medium">Robert Lee</div>
                  <div className="text-sm text-doctor-neutral-gray">38 yrs • Male • ID: P003</div>
                  <div className="text-xs text-green-600 mt-1">Discharged • Orthopedics</div>
                </div>
                
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-doctor-light-gray card-hover">
                  <div className="font-medium">Maria Garcia</div>
                  <div className="text-sm text-doctor-neutral-gray">53 yrs • Female • ID: P004</div>
                  <div className="text-xs text-blue-600 mt-1">Outpatient • Neurology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="flex gap-3 mb-4">
            <button className="px-4 py-2 bg-doctor-purple text-white rounded-lg hover:bg-doctor-purple/90 transition-colors flex items-center gap-2">
              <FileText size={16} />
              <span>New Note</span>
            </button>
            
            <button className="px-4 py-2 bg-white border rounded-lg hover:bg-doctor-light-gray transition-colors flex items-center gap-2">
              <div className="flex items-center gap-1">
                <ArrowUp size={14} />
                <ArrowDown size={14} />
              </div>
              <span>Filter</span>
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h2 className="font-semibold">James Wilson's Documentation</h2>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Progress Note - Cardiology</h3>
                  <div className="text-sm text-doctor-neutral-gray">May 21, 2025 at 9:15 AM</div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-doctor-light-gray rounded-full">
                    <Edit size={16} className="text-doctor-purple" />
                  </button>
                  <button className="p-1 hover:bg-doctor-light-gray rounded-full">
                    <Trash size={16} className="text-doctor-alert-red" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold uppercase text-doctor-neutral-gray">Subjective</h4>
                  <p className="mt-1">
                    Patient is a 45-year-old male presenting for follow-up of hypertension and recent chest pain episodes. Reports intermittent chest pressure and shortness of breath on exertion. No radiating pain. Episodes last 5-10 minutes and resolve with rest.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold uppercase text-doctor-neutral-gray">Objective</h4>
                  <p className="mt-1">
                    Vitals: BP 148/92, HR 78, RR 16, Temp 98.6°F, O2 97% on RA<br/>
                    Cardiac exam: Regular rate and rhythm. Normal S1, S2. No murmurs, gallops, or rubs.<br/>
                    Lungs clear to auscultation bilaterally.<br/>
                    ECG: Normal sinus rhythm. No acute ST changes.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold uppercase text-doctor-neutral-gray">Assessment</h4>
                  <p className="mt-1">
                    1. Hypertension, poorly controlled<br/>
                    2. Angina pectoris, stable<br/>
                    3. Hyperlipidemia
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold uppercase text-doctor-neutral-gray">Plan</h4>
                  <p className="mt-1">
                    1. Increase amlodipine to 10mg daily<br/>
                    2. Add isosorbide mononitrate 30mg daily for angina<br/>
                    3. Continue atorvastatin 40mg daily<br/>
                    4. Schedule cardiac stress test<br/>
                    5. Follow-up in 2 weeks
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between border-t pt-4">
                <div className="text-sm text-doctor-neutral-gray">
                  <span className="font-medium">Updated by:</span> Dr. Sarah Johnson
                </div>
                <button className="text-doctor-purple flex items-center gap-1 text-sm">
                  <Check size={14} />
                  <span>Sign & Lock Note</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
