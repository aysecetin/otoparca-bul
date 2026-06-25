import { BarChart3, Box, ClipboardList, Crown, LayoutDashboard, Plus, ReceiptText, Store, Warehouse } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/panel", label: "Genel Bakış", icon: LayoutDashboard, end: true },
  { to: "/panel/stoklar", label: "Stoklarım", icon: Box },
  { to: "/panel/stoklar?new=1", label: "Yeni Parça Ekle", icon: Plus },
  { to: "/panel/depolar", label: "Depolarım", icon: Warehouse },
  { to: "/panel/cari", label: "Cari Hesaplar", icon: ReceiptText },
  { to: "/panel/talepler", label: "Gelen Talepler", icon: ClipboardList },
  { to: "/parcaci/denizli-oto-far", label: "Dükkan Profilim", icon: Store },
  { to: "/parcaci-olarak-katil", label: "Paketim", icon: Crown },
];

export default function DashboardShell({ children }: { children?: React.ReactNode }) {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="rounded-lg border border-line bg-white p-3 shadow-sm">
          <div className="mb-3 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white"><BarChart3 size={19} /></span>
            <div>
              <p className="font-extrabold">Parçacı Paneli</p>
              <p className="text-xs text-slate-500">Demo yönetim ekranı</p>
            </div>
          </div>
          <nav className="grid gap-1">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink key={item.label} to={item.to} end={item.end} className={({ isActive }) => `side-link ${isActive ? "side-link-active" : ""}`}>
                  <Icon size={18} /> {item.label}
                </NavLink>
              );
            })}
          </nav>
        </aside>
        <div>{children ?? <Outlet />}</div>
      </div>
    </section>
  );
}
