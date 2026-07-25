import { settingsData } from "../data/settings";

export const settingsService = {
  getSettings: async () => {
    return Promise.resolve(settingsData);
  },

  saveSettings: async () => {
    return Promise.resolve(true);
  },
};