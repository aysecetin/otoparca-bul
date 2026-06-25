import { Menu, Search, Store, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/parca-ara", label: "Parça Ara" },
  { to: "/parcaci/denizli-oto-far", label: "Parçacı Profili" },
  { to: "/panel", label: "Parçacı Paneli" },
  { to: "/parcaci-olarak-katil", label: "Katıl" },
  { to: "/admin-demo", label: "Admin Demo" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white">
              <Search size={20} />
            </span>
            <span>
              <span className="block text-lg font-extrabold tracking-tight">OtoParça Bul</span>
              <span className="hidden text-xs font-medium text-slate-500 sm:block">Sanayi için dijital vitrin</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/parca-ara" className="btn btn-ghost">
              <Search size={18} /> Ara
            </Link>
            <Link to="/parcaci-olarak-katil" className="btn btn-primary">
              <Store size={18} /> Parçacı Katılım
            </Link>
          </div>
          <button className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Menüyü aç">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-line bg-white px-4 py-3 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="mobile-nav-link">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="font-bold text-ink">OtoParça Bul</p>
            <p className="mt-1 max-w-2xl">Denizli sanayi odaklı, parça arayan müşteriyle yerel parçacıyı buluşturan MVP prototipi.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/parca-ara" className="footer-link">Parça Ara</Link>
            <Link to="/panel" className="footer-link">Panel</Link>
            <Link to="/parcaci-olarak-katil" className="footer-link">Katılım</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
