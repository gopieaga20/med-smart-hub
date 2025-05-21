
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  User, 
  FileText, 
  Calendar, 
  CheckSquare, 
  BarChart3, 
  MessageCircle,
  Settings, 
  LogOut, 
  Home 
} from 'lucide-react';

type SidebarLinkProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const SidebarLink = ({ to, icon, label }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
            : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
        }`
      }
    >
      <div className="w-5 h-5">{icon}</div>
      <span>{label}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar flex flex-col h-screen py-6 px-3 text-sidebar-foreground">
      <div className="flex items-center gap-2 px-4 mb-8">
        <div className="bg-white rounded-lg p-2">
          <span className="text-doctor-purple font-bold text-lg">Doc+</span>
        </div>
        <h1 className="font-bold text-xl">DoctorCare+</h1>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        <SidebarLink to="/" icon={<Home size={18} />} label="Dashboard" />
        <SidebarLink to="/patients" icon={<User size={18} />} label="Patients" />
        <SidebarLink to="/documentation" icon={<FileText size={18} />} label="Documentation" />
        <SidebarLink to="/schedule" icon={<Calendar size={18} />} label="Schedule" />
        <SidebarLink to="/tasks" icon={<CheckSquare size={18} />} label="Tasks" />
        <SidebarLink to="/analytics" icon={<BarChart3 size={18} />} label="Analytics" />
        <SidebarLink to="/chat" icon={<MessageCircle size={18} />} label="AskAI" />
      </nav>

      <div className="border-t border-sidebar-border pt-4 mt-auto">
        <SidebarLink to="/settings" icon={<Settings size={18} />} label="Settings" />
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
          <LogOut size={18} />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
