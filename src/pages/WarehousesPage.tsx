import { MapPinned, Search } from "lucide-react";
import { useMemo, useState } from "react";
import Badge from "../components/Badge";
import DashboardShell from "../components/DashboardShell";
import { warehouseItems } from "../data/mockData";

export default function WarehousesPage() {
  const [query, setQuery] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const warehouses = Array.from(new Set(warehouseItems.map((item) => item.warehouse)));

  const filtered = useMemo(() => {
    return warehouseItems.filter((item) => {
      const text = `${item.partName} ${item.warehouse} ${item.shelf} ${item.box}`.toLocaleLowerCase("tr-TR");
      return text.includes(query.toLocaleLowerCase("tr-TR")) && (!warehouse || item.warehouse === warehouse);
    });
  }, [query, warehouse]);

  return (
    <DashboardShell>
      <div className="mb-6">
        <span className="eyebrow-dark">Depo yönetimi</span>
        <h1 className="mt-2 text-3xl font-extrabold">Depolarım</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Parçanın hangi rafta, kutuda veya depoda olduğunu takip etmek isteyen dükkanlar için modüler depo ekranı.
        </p>
      </div>

      <div className="mb-4 grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm md:grid-cols-[1fr_240px]">
        <label className="field mb-0">
          <span>Parça veya raf ara</span>
          <div className="input-with-icon"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Far, A-03, Kutu 12..." /></div>
        </label>
        <label className="field mb-0">
          <span>Depo</span>
          <select value={warehouse} onChange={(event) => setWarehouse(event.target.value)}>
            <option value="">Tümü</option>
            {warehouses.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((item) => (
          <article className="card" key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-extrabold">{item.partName}</h2>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-500"><MapPinned size={16} /> {item.warehouse}</p>
              </div>
              <Badge tone={item.quantity <= 2 ? "orange" : "green"}>{item.quantity} adet</Badge>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="info-box"><span>Raf</span><strong>{item.shelf}</strong></div>
              <div className="info-box"><span>Kutu/Konum</span><strong>{item.box}</strong></div>
              <div className="info-box"><span>Son hareket</span><strong>{item.movementType}</strong></div>
            </div>
            <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">{item.lastMovement} - {item.note}</p>
          </article>
        ))}
      </div>
    </DashboardShell>
  );
}
