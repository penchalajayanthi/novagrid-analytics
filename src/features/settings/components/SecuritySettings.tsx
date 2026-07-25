import { Input, Switch } from "antd";

const SecuritySettings = () => {
  return (
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-xl font-bold">
        Security
      </h2>

      <Input.Password
        placeholder="Current Password"
        size="large"
      />

      <Input.Password
        placeholder="New Password"
        size="large"
      />

      <Input.Password
        placeholder="Confirm Password"
        size="large"
      />

      <div className="flex items-center justify-between">

        <span>Enable Two Factor Authentication</span>

        <Switch />

      </div>

    </div>
  );
};

export default SecuritySettings;