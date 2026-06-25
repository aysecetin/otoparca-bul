import { Eye, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { sellers } from "../data/mockData";
import { Part } from "../types";
import { formatPrice, whatsappLink } from "../utils/format";
import Badge from "./Badge";

export default function PartCard({ part }: { part: Part }) {
  const seller = sellers.find((item) => item.id === part.sellerId)!;
  return (
    <article className="card grid gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link to={`/parca/${part.id}`} className="text-lg font-extrabold text-ink hover:text-emerald-700">
            {part.name}
          </Link>
          <p className="mt-1 text-sm text-slate-600">{part.compatibility}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-extrabold text-ink">{formatPrice(part.price)}</p>
          <p className="text-xs text-slate-500">KDV ve montaj için sorunuz</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge tone="blue">{part.type}</Badge>
        <Badge tone={part.status === "Stokta var" ? "green" : part.status === "Sınırlı stok" ? "orange" : "slate"}>{part.status}</Badge>
        <Badge>{part.brand}</Badge>
      </div>
      <div className="grid gap-2 text-sm text-slate-600">
        <p className="font-semibold text-ink">{seller.name}</p>
        <p className="flex items-center gap-2"><MapPin size={16} /> {seller.district}, {seller.city}</p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <a className="btn btn-primary flex-1" href={whatsappLink(seller.whatsapp, `${part.name} için bilgi almak istiyorum.`)} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> WhatsApp ile sor
        </a>
        <Link className="btn btn-secondary flex-1" to={`/parca/${part.id}`}>
          <Eye size={18} /> Detayları gör
        </Link>
      </div>
    </article>
  );
}
