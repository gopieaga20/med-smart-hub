
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-doctor-neutral-gray" size={18} />
        <input
          type="search"
          placeholder="Search patients by name, ID or phone..."
          className="pl-10 py-2 pr-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-doctor-purple focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button className="px-4 py-2 bg-white border rounded-lg flex items-center gap-2 hover:bg-doctor-light-gray transition-colors">
        <Filter size={16} />
        <span>Filter</span>
      </button>
      <button className="px-4 py-2 bg-doctor-purple text-white rounded-lg hover:bg-doctor-purple/90 transition-colors">
        New Patient
      </button>
    </div>
  );
};

export default PatientSearch;
