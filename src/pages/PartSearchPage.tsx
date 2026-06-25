import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PartCard from "../components/PartCard";
import SearchPanel from "../components/SearchPanel";
import { brands, parts } from "../data/mockData";
import { PartType, StockStatus } from "../types";

export default function PartSearchPage() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [brand, setBrand] = useState(params.get("brand") ?? "");
  const [model, setModel] = useState(params.get("model") ?? "");
  const [year, setYear] = useState(params.get("year") ?? "");
  const [district, setDistrict] = useState(params.get("city") ?? "Denizli");
  const [type, setType] = useState<PartType | "">("");
  const [status, setStatus] = useState<StockStatus | "">("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(() => {
    return parts.filter((part) => {
      const haystack = `${part.name} ${part.brand} ${part.model} ${part.compatibility}`.toLocaleLowerCase("tr-TR");
      return (
        haystack.includes(query.toLocaleLowerCase("tr-TR")) &&
        (!brand || part.brand === brand) &&
        (!model || part.model.toLocaleLowerCase("tr-TR").includes(model.toLocaleLowerCase("tr-TR"))) &&
        (!year || part.year.includes(year)) &&
        (!type || part.type === type) &&
        (!status || part.status === status) &&
        (!maxPrice || part.price <= Number(maxPrice))
      );
    });
  }, [brand, maxPrice, model, query, status, type, year]);

  return (
    <section className="section">
      <div className="section-title text-left">
        <span className="eyebrow-dark">Parça arama</span>
        <h1>Aradığın parçayı filtrele, uygun parçacıyla görüş</h1>
      </div>
      <div className="mb-6 rounded-lg border border-line bg-white p-4 shadow-sm">
        <SearchPanel compact />
      </div>
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="rounded-lg border border-line bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 flex items-center gap-2 font-extrabold"><SlidersHorizontal size={19} /> Filtreler</div>
          <div className="grid gap-4">
            <label className="field"><span>Parça adı</span><input value={query} onChange={(event) => setQuery(event.target.value)} /></label>
            <label className="field"><span>Araç markası</span><select value={brand} onChange={(event) => setBrand(event.target.value)}><option value="">Tümü</option>{brands.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="field"><span>Model</span><input value={model} onChange={(event) => setModel(event.target.value)} /></label>
            <label className="field"><span>Yıl</span><input value={year} onChange={(event) => setYear(event.target.value)} /></label>
            <label className="field"><span>Şehir / ilçe</span><input value={district} onChange={(event) => setDistrict(event.target.value)} /></label>
            <label className="field"><span>Parça türü</span><select value={type} onChange={(event) => setType(event.target.value as PartType | "")}><option value="">Tümü</option><option>Orijinal</option><option>Yan sanayi</option><option>Çıkma</option></select></label>
            <label className="field"><span>Azami fiyat</span><input type="number" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} placeholder="5000" /></label>
            <label className="field"><span>Stok durumu</span><select value={status} onChange={(event) => setStatus(event.target.value as StockStatus | "")}><option value="">Tümü</option><option>Stokta var</option><option>Sınırlı stok</option><option>Talep üzerine</option></select></label>
          </div>
        </aside>
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="font-bold">{filtered.length} sonuç bulundu</p>
            <p className="text-sm text-slate-500">{district || "Tüm şehirler"} için demo liste</p>
          </div>
          <div className="grid gap-4">
            {filtered.map((part) => <PartCard key={part.id} part={part} />)}
            {filtered.length === 0 && <div className="empty-state">Bu filtrelerle sonuç yok. Filtreleri biraz genişletmeyi deneyin.</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
