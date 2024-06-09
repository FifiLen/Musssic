// app/dashboard/layout.jsx
import SideNav from "../../components/SideNav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="w-64">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
