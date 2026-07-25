import { Switch } from "antd";

const NotificationSettings = () => {
  return (
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-xl font-bold">
        Notifications
      </h2>

      <div className="flex justify-between">
        <span>Email Notifications</span>
        <Switch defaultChecked />
      </div>

      <div className="flex justify-between">
        <span>Push Notifications</span>
        <Switch defaultChecked />
      </div>

      <div className="flex justify-between">
        <span>SMS Notifications</span>
        <Switch />
      </div>

      <div className="flex justify-between">
        <span>Weekly Reports</span>
        <Switch defaultChecked />
      </div>

    </div>
  );
};

export default NotificationSettings;