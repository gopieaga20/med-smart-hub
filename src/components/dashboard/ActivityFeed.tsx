
import React from 'react';

type ActivityType = 'note' | 'prescription' | 'lab' | 'admission' | 'discharge';

interface Activity {
  id: string;
  type: ActivityType;
  patientName: string;
  description: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  const getActivityIcon = (type: ActivityType) => {
    switch (type) {
      case 'note': return '📝';
      case 'prescription': return '💊';
      case 'lab': return '🧪';
      case 'admission': return '🏥';
      case 'discharge': return '🚶';
      default: return '📋';
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-doctor-light-purple flex items-center justify-center text-lg">
            {getActivityIcon(activity.type)}
          </div>
          <div className="flex-1">
            <div className="font-medium">{activity.patientName}</div>
            <div className="text-sm text-doctor-neutral-gray">{activity.description}</div>
            <div className="text-xs text-doctor-neutral-gray mt-1">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
