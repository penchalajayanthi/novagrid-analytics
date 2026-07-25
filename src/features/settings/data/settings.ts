import type { SettingsData } from "../types/settings.types";

const user = JSON.parse(
    localStorage.getItem("user") || "{}"
);

export const settingsData: SettingsData = {
    profile: {
        fullName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        jobTitle: user.role || "",
    },

    security: {
        twoFactorEnabled: false,
    },

    notifications: {
        email: true,
        push: true,
        sms: false,
        weeklyReports: true,
    },

    appearance: {
        theme: "light",
    },

    language: {
        language: "English",
    },
};