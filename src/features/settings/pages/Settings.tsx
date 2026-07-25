import { useState } from "react";

import { Button, notification } from "antd";

import {
  FiSave,
  FiLogOut,
} from "react-icons/fi";

import SettingsHeader from "../components/SettingsHeader";
import SettingsTabs, {
  type SettingsTab,
} from "../components/SettingsTabs";

import ProfileSettings from "../components/ProfileSettings";
import SecuritySettings from "../components/SecuritySettings";
import NotificationSettings from "../components/NotificationSettings";
import AppearanceSettings from "../components/AppearanceSettings";
import LanguageSettings from "../components/LanguageSettings";

const Settings = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [activeTab, setActiveTab] =
    useState<SettingsTab>("profile");

  const handleSave = () => {
    notification.success({
      message: "Settings Saved",
      description:
        "Your settings have been updated successfully.",
      placement: "topRight",
    });
  };

  const handleLogout = () => {
    notification.info({
      message: "Logged Out",
      description:
        "You have been logged out successfully.",
      placement: "topRight",
    });

    // Later:
    // navigate("/login");
  };

  return (
    <div className="space-y-8">

      <SettingsHeader />

      <SettingsTabs
        active={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "profile" && (
        <ProfileSettings />
      )}

      {activeTab === "security" && (
        <SecuritySettings />
      )}

      {activeTab === "notifications" && (
        <NotificationSettings />
      )}

      {activeTab === "appearance" && (
        <AppearanceSettings
    theme={theme}
    onChange={setTheme}
/>
      )}

      {activeTab === "language" && (
        <LanguageSettings />
      )}

      <div className="flex justify-end gap-4">

        <Button
          icon={<FiLogOut />}
          danger
          size="large"
          onClick={handleLogout}
        >
          Logout
        </Button>

        <Button
          type="primary"
          icon={<FiSave />}
          size="large"
          onClick={handleSave}
        >
          Save Changes
        </Button>

      </div>

    </div>
  );
};

export default Settings;