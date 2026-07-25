export interface ProfileSettings {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  weeklyReports: boolean;
}

export interface AppearanceSettings {
  theme: "light" | "dark" | "system";
}

export interface LanguageSettings {
  language: string;
}

export interface SettingsData {
  profile: ProfileSettings;
  security: SecuritySettings;
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
  language: LanguageSettings;
}