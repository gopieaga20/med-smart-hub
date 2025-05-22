
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
import { ThemeToggle } from '../theme/ThemeToggle';

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
    <aside className="w-64 bg-white dark:bg-snapdoc-dark flex flex-col h-screen py-6 px-3 text-sidebar-foreground">
      <div className="flex justify-center items-center px-4 mb-8">
        <div className="h-16 w-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-1 border-2 border-snapdoc-blue/30 dark:border-snapdoc-blue/50">
          <img src="/lovable-uploads/5beece02-10c5-4085-a653-c9fe2fd0db6b.png" alt="SnapDoc Logo" className="h-12 w-12 object-contain" />
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
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
