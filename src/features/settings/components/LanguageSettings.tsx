import { Select } from "antd";

const LanguageSettings = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Language & Region
      </h2>

      <Select
        defaultValue="English"
        size="large"
        className="w-72"
        options={[
          {
            value: "English",
            label: "English",
          },
          {
            value: "Telugu",
            label: "Telugu",
          },
          {
            value: "Hindi",
            label: "Hindi",
          },
        ]}
      />

    </div>
  );
};

export default LanguageSettings;