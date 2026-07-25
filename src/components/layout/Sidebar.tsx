import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col bg-[#1B2340] text-white shadow-xl">

      {/* Logo */}
      <div className="flex-shrink-0 border-b border-slate-800 px-6 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide text-blue-500">
          NovaGrid
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Enterprise Analytics
        </p>
      </div>

      {/* Navigation */}
      <nav className="sidebar-scroll flex-1 px-3 py-6">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="flex-shrink-0 border-t border-slate-800 p-5">
        <p className="text-center text-xs text-slate-500">
          © 2026 NovaGrid Analytics
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;