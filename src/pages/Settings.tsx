
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Save, Key, Shield, Bell, Eye, EyeOff, Clock, Database, LifeBuoy } from 'lucide-react';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-doctor-neutral-gray dark:text-gray-400">Manage your account and application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            <a href="#account" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-primary/10 text-primary">
              <Key className="h-5 w-5 mr-3" />
              Account Settings
            </a>
            <a href="#2fa" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/30">
              <Shield className="h-5 w-5 mr-3" />
              Two-Factor Authentication
            </a>
            <a href="#notifications" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/30">
              <Bell className="h-5 w-5 mr-3" />
              Notifications
            </a>
            <a href="#schedule" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/30">
              <Clock className="h-5 w-5 mr-3" />
              Schedule Preferences
            </a>
            <a href="#data" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/30">
              <Database className="h-5 w-5 mr-3" />
              Data Management
            </a>
            <a href="#support" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/30">
              <LifeBuoy className="h-5 w-5 mr-3" />
              Help & Support
            </a>
          </nav>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          <div id="account" className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium">Account Settings</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    defaultValue="Sarah"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    defaultValue="Johnson"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    defaultValue="sarah.johnson@hospital.org"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    defaultValue="(555) 987-6543"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Specialty
                  </label>
                  <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800">
                    <option>Cardiology</option>
                    <option>Internal Medicine</option>
                    <option>Family Medicine</option>
                    <option>Pediatrics</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Medical License #
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    defaultValue="CA-MD-12345"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                      defaultValue="••••••••••••"
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 px-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} className="text-gray-500" /> : <Eye size={18} className="text-gray-500" />}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Save size={16} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
          
          <div id="2fa" className="bg-white dark:bg-card rounded-xl shadow overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium">Two-Factor Authentication</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="enable-2fa"
                    type="checkbox"
                    checked={twoFactorEnabled}
                    onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <label htmlFor="enable-2fa" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Enable Two-Factor Authentication
                </label>
              </div>
              
              {twoFactorEnabled && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Verification Method
                    </label>
                    <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800">
                      <option>Text Message (SMS)</option>
                      <option>Authenticator App</option>
                      <option>Email</option>
                      <option>Security Key</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number for Verification
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                      defaultValue="(555) 987-6543"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      This is the phone number where we'll send verification codes when you log in.
                    </p>
                  </div>
                  
                  <div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      Set Up Two-Factor Authentication
                    </button>
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">Why use Two-Factor Authentication?</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Two-Factor Authentication adds an extra layer of security to your account by requiring both your password and a verification code to log in. 
                  This helps protect your account from unauthorized access even if your password is compromised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
