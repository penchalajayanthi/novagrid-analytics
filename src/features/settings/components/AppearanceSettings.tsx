import { useEffect } from "react";
import { Radio } from "antd";

interface AppearanceSettingsProps {
  theme: "light" | "dark" | "system";
  onChange: (
    theme: "light" | "dark" | "system"
  ) => void;
}

const AppearanceSettings = ({
  theme,
  onChange,
}: AppearanceSettingsProps) => {
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      root.classList.add(
        prefersDark ? "dark" : "light"
      );
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

      <h2 className="mb-6 text-xl font-bold text-slate-800 dark:text-white">
        Appearance
      </h2>

      <Radio.Group
        value={theme}
        onChange={(e) => onChange(e.target.value)}
      >
        <div className="space-y-4">

          <Radio value="light">
            Light Theme
          </Radio>

          <Radio value="dark">
            Dark Theme
          </Radio>

          <Radio value="system">
            System Default
          </Radio>

        </div>

      </Radio.Group>

    </div>
  );
};

export default AppearanceSettings;