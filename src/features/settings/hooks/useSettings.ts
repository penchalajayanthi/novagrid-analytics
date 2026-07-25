import { useEffect, useState } from "react";

import { settingsService } from "../services/settingsService";

import type { SettingsData } from "../types/settings.types";

export const useSettings = () => {
  const [settings, setSettings] =
    useState<SettingsData | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      setLoading(true);

      const data =
        await settingsService.getSettings();

      setSettings(data);

      setLoading(false);
    };

    loadSettings();
  }, []);

  return {
    settings,
    loading,
  };
};