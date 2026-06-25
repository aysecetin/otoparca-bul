import { ArrowLeft, BookmarkCheck, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import PartCard from "../components/PartCard";
import { parts, sellers } from "../data/mockData";
import { formatPrice, whatsappLink } from "../utils/format";

export default function PartDetailPage() {
  const { id } = useParams();
  const part = parts.find((item) => item.id === id) ?? parts[0];
  const seller = sellers.find((item) => item.id === part.sellerId)!;
  const similar = parts.filter((item) => item.id !== part.id && (item.brand === part.brand || item.type === part.type)).slice(0, 2);

  return (
    <section className="section">
      <Link to="/parca-ara" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-700"><ArrowLeft size={17} /> Arama sonuçlarına dön</Link>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="card">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">{part.name}</h1>
              <p className="mt-2 text-slate-600">{part.compatibility}</p>
            </div>
            <p className="text-3xl font-extrabold text-ink">{formatPrice(part.price)}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="blue">{part.type}</Badge>
            <Badge tone={part.status === "Stokta var" ? "green" : "orange"}>{part.status}</Badge>
            <Badge>OEM: {part.oem}</Badge>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Marka / Model", `${part.brand} ${part.model}`],
              ["Yıl", part.year],
              ["Stok adedi", `${part.stock} adet`],
              ["Parça kodu", part.oem],
            ].map(([label, value]) => (
              <div className="info-box" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-extrabold">Açıklama</h2>
            <p className="mt-3 leading-7 text-slate-600">{part.description}</p>
          </div>
        </article>

        <aside className="card self-start">
          <div className="flex items-center gap-3">
            <span className="avatar">{seller.avatar}</span>
            <div>
              <Link to={`/parcaci/${seller.id}`} className="font-extrabold hover:text-emerald-700">{seller.name}</Link>
              <p className="text-sm text-slate-500">{seller.district}, {seller.city}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 text-sm text-slate-600">
            <p className="flex gap-2"><MapPin size={17} /> {seller.location}</p>
            <p className="flex gap-2"><Phone size={17} /> {seller.phone}</p>
          </div>
          <div className="mt-6 grid gap-3">
            <a className="btn btn-primary" href={whatsappLink(seller.whatsapp, `${part.name} stok ve fiyat bilgisi alabilir miyim?`)} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp butonu
            </a>
            <button className="btn btn-secondary" type="button"><BookmarkCheck size={18} /> Parçayı ayırt</button>
          </div>
        </aside>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-extrabold">Benzer parçaları gör</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {similar.map((item) => <PartCard key={item.id} part={item} />)}
        </div>
      </div>
    </section>
  );
}
