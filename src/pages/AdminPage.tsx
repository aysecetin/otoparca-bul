import { Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import Badge from "../components/Badge";
import { cariAccounts, parts, requests, sellers, warehouseItems } from "../data/mockData";
import { formatPrice } from "../utils/format";

export default function AdminPage() {
  const [query, setQuery] = useState("");
  const filteredSellers = useMemo(() => sellers.filter((seller) => seller.name.toLocaleLowerCase("tr-TR").includes(query.toLocaleLowerCase("tr-TR"))), [query]);
  const topSearches = ["Clio sol far", "Egea ön tampon", "Golf 7 debriyaj", "Astra sağ stop"];
  const openBalance = cariAccounts.reduce((total, account) => total + Math.max(account.debit - account.credit, 0), 0);

  return (
    <section className="section">
      <div className="section-title text-left">
        <span className="eyebrow-dark">Admin demo</span>
        <h1>Platformun genel durumunu tek ekranda gör</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
        <div className="stat-card">Toplam parçacı <strong>{sellers.length}</strong></div>
        <div className="stat-card">Toplam parça <strong>{parts.length}</strong></div>
        <div className="stat-card">Toplam müşteri talebi <strong>{requests.length}</strong></div>
        <div className="stat-card">Cari bakiye <strong>{formatPrice(openBalance)}</strong></div>
        <div className="stat-card">Depo kaydı <strong>{warehouseItems.length}</strong></div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card">
          <h2 className="text-xl font-extrabold">En çok aranan parçalar</h2>
          <div className="mt-4 grid gap-3">
            {topSearches.map((item, index) => (
              <div className="list-row" key={item}><span>{index + 1}. {item}</span><strong>{24 - index * 4} arama</strong></div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-extrabold">En çok seçilen modüller</h2>
          <div className="mt-4 grid gap-3">
            {["Dijital Vitrin", "Cari Hesap", "Stok + Depo", "Talep Yönetimi"].map((module, index) => (
              <div className="list-row" key={module}><span>{module}</span><strong>{18 - index * 3} pilot</strong></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card">
          <h2 className="text-xl font-extrabold">Onay bekleyen parçacılar</h2>
          <div className="mt-4 grid gap-3">
            {sellers.filter((seller) => !seller.approved).map((seller) => (
              <div className="list-row" key={seller.id}><span>{seller.name}</span><button className="btn btn-secondary btn-sm" type="button">Onayla</button></div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-extrabold">Tahsilat bekleyen cariler</h2>
          <div className="mt-4 grid gap-3">
            {cariAccounts.filter((account) => account.status !== "Ödendi").slice(0, 3).map((account) => (
              <div className="list-row" key={account.id}><span>{account.customerName}</span><strong>{formatPrice(account.debit - account.credit)}</strong></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 card">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-xl font-extrabold">Pilot parçacılar listesi</h2>
          <label className="input-with-icon max-w-sm"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Parçacı ara" /></label>
        </div>
        <div className="mt-5 grid gap-3">
          {filteredSellers.map((seller) => (
            <div className="list-row flex-wrap" key={seller.id}>
              <span className="flex items-center gap-3"><ShieldCheck className="text-mint" size={18} /> {seller.name}</span>
              <span className="flex flex-wrap gap-2">
                <Badge tone={seller.approved ? "green" : "orange"}>{seller.approved ? "Onaylı" : "Bekliyor"}</Badge>
                <Badge>{seller.package}</Badge>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
