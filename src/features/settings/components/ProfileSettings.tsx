import { Input } from "antd";
import { useAuthStore } from "../../../store/authStore";

const ProfileSettings = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-xl font-bold">
        Profile Settings
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <Input
            value={user?.name ?? ""}
            size="large"
            readOnly
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <Input
            value={user?.email ?? ""}
            size="large"
            readOnly
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Role
          </label>

          <Input
            value={user?.role ?? ""}
            size="large"
            readOnly
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            User ID
          </label>

          <Input
            value={user?.id ?? ""}
            size="large"
            readOnly
          />
        </div>

      </div>

    </div>
  );
};

export default ProfileSettings;