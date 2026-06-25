import { Plus, Search } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import DashboardShell from "../components/DashboardShell";
import { parts as initialParts } from "../data/mockData";
import { Part } from "../types";
import { formatPrice } from "../utils/format";

export default function StocksPage() {
  const [items, setItems] = useState<Part[]>(initialParts);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => items.filter((part) => {
    const text = `${part.name} ${part.compatibility}`.toLocaleLowerCase("tr-TR");
    return text.includes(query.toLocaleLowerCase("tr-TR")) && (!status || part.status === status);
  }), [items, query, status]);

  function addPart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const newPart: Part = {
      id: `demo-${Date.now()}`,
      name: String(form.get("name")),
      brand: String(form.get("brand") || "Fiat"),
      model: String(form.get("model") || "Egea"),
      year: String(form.get("year") || "2018-2022"),
      compatibility: `${form.get("brand")} ${form.get("model")} ${form.get("year")}`,
      oem: String(form.get("oem") || "DEMO-001"),
      type: "Yan sanayi",
      price: Number(form.get("price") || 0),
      stock: Number(form.get("stock") || 0),
      status: Number(form.get("stock") || 0) > 2 ? "Stokta var" : "Sınırlı stok",
      sellerId: "denizli-oto-far",
      visible: true,
      description: "Demo olarak panele eklenen ürün.",
    };
    setItems((current) => [newPart, ...current]);
    setModalOpen(false);
    event.currentTarget.reset();
  }

  function toggleVisible(id: string) {
    setItems((current) => current.map((part) => part.id === id ? { ...part, visible: !part.visible } : part));
  }

  return (
    <DashboardShell>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow-dark">Stok yönetimi</span>
          <h1 className="mt-2 text-3xl font-extrabold">Stoklarım</h1>
        </div>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)} type="button"><Plus size={18} /> Yeni ürün ekle</button>
      </div>

      <div className="mb-4 grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
        <label className="field mb-0"><span>Ürün ara</span><div className="input-with-icon"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Parça adı veya araç uyumu" /></div></label>
        <label className="field mb-0"><span>Durum</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option value="">Tümü</option><option>Stokta var</option><option>Sınırlı stok</option><option>Talep üzerine</option></select></label>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr><th>Parça adı</th><th>Araç uyumu</th><th>Stok</th><th>Fiyat</th><th>Webde</th><th>Durum</th><th></th></tr>
            </thead>
            <tbody>
              {filtered.map((part) => (
                <tr key={part.id}>
                  <td className="font-bold">{part.name}</td>
                  <td>{part.compatibility}</td>
                  <td>{part.stock}</td>
                  <td>{formatPrice(part.price)}</td>
                  <td><button className={`switch ${part.visible ? "switch-on" : ""}`} onClick={() => toggleVisible(part.id)} type="button" aria-label="Web görünürlüğü"><span /></button></td>
                  <td>{part.status}</td>
                  <td><button className="btn btn-secondary btn-sm" type="button">Düzenle</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <form className="modal" onSubmit={addPart}>
            <h2 className="text-xl font-extrabold">Yeni Parça Ekle</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="field"><span>Parça adı</span><input name="name" required placeholder="Örn. Toyota Corolla sağ ayna" /></label>
              <label className="field"><span>Marka</span><input name="brand" required placeholder="Toyota" /></label>
              <label className="field"><span>Model</span><input name="model" required placeholder="Corolla" /></label>
              <label className="field"><span>Yıl</span><input name="year" required placeholder="2019-2024" /></label>
              <label className="field"><span>OEM/parça kodu</span><input name="oem" placeholder="DEMO-001" /></label>
              <label className="field"><span>Stok adedi</span><input name="stock" type="number" required min="0" /></label>
              <label className="field sm:col-span-2"><span>Fiyat</span><input name="price" type="number" required min="0" /></label>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button className="btn btn-secondary" type="button" onClick={() => setModalOpen(false)}>Vazgeç</button>
              <button className="btn btn-primary" type="submit">Listeye ekle</button>
            </div>
          </form>
        </div>
      )}
    </DashboardShell>
  );
}
