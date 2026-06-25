import { Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { brands, cities } from "../data/mockData";

export default function SearchPanel({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [city, setCity] = useState("Denizli");

  function submit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams({ q: query, brand, model, year, city });
    navigate(`/parca-ara?${params.toString()}`);
  }

  return (
    <form onSubmit={submit} className={`search-panel ${compact ? "search-panel-compact" : ""}`}>
      <label>
        <span>Parça adı</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Örn. Clio sol far" />
      </label>
      <label>
        <span>Marka</span>
        <select value={brand} onChange={(event) => setBrand(event.target.value)}>
          <option value="">Tümü</option>
          {brands.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label>
        <span>Model</span>
        <input value={model} onChange={(event) => setModel(event.target.value)} placeholder="Örn. Egea" />
      </label>
      <label>
        <span>Yıl</span>
        <input value={year} onChange={(event) => setYear(event.target.value)} placeholder="2018" />
      </label>
      <label>
        <span>Şehir</span>
        <select value={city} onChange={(event) => setCity(event.target.value)}>
          {cities.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <button className="btn btn-primary min-h-12" type="submit">
        <Search size={18} /> Parça Ara
      </button>
    </form>
  );
}
