
import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-doctor-neutral-gray" size={18} />
        <input
          type="search"
          placeholder="Search patients, tasks, documents..."
          className="pl-10 py-2 pr-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-doctor-purple focus:border-transparent"
        />
      </div>
      
      <div className="flex items-center gap-5">
        <div className="relative">
          <Bell size={20} className="text-doctor-neutral-gray hover:text-doctor-purple cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-doctor-alert-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-doctor-purple flex items-center justify-center text-white">
            <User size={16} />
          </div>
          <span className="font-medium">Dr. Sarah Johnson</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
