import { Clock, MapPin, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import PartCard from "../components/PartCard";
import { parts, sellers } from "../data/mockData";
import { whatsappLink } from "../utils/format";

export default function SellerProfilePage() {
  const { id } = useParams();
  const seller = sellers.find((item) => item.id === id) ?? sellers[0];
  const featured = parts.filter((item) => item.sellerId === seller.id);

  return (
    <section className="section">
      <div className="rounded-lg bg-ink p-6 text-white shadow-panel sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-5 sm:flex-row">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-lg bg-white text-2xl font-extrabold text-ink">{seller.avatar}</span>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">{seller.name}</h1>
              <p className="mt-3 max-w-3xl leading-7 text-slate-200">{seller.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {seller.badges.map((badge) => <Badge key={badge} tone="orange">{badge}</Badge>)}
              </div>
            </div>
          </div>
          <a className="btn btn-primary self-start" href={whatsappLink(seller.whatsapp, `${seller.name} dükkanına parça talebi göndermek istiyorum.`)} target="_blank" rel="noreferrer">
            <Send size={18} /> Bu dükkana talep gönder
          </a>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[360px_1fr]">
        <aside className="grid gap-4 self-start">
          <div className="card">
            <h2 className="text-lg font-extrabold">Dükkan bilgileri</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <p className="flex gap-2"><MapPin size={17} /> {seller.location}</p>
              <p className="flex gap-2"><Clock size={17} /> {seller.hours}</p>
              <p className="flex gap-2"><MessageCircle size={17} /> {seller.phone}</p>
            </div>
          </div>
          <div className="card">
            <h2 className="text-lg font-extrabold">Uzman olduğu markalar</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {seller.brands.map((brand) => <Badge key={brand} tone="blue">{brand}</Badge>)}
            </div>
          </div>
          <div className="card bg-green-50">
            <ShieldCheck className="text-mint" />
            <p className="mt-3 font-extrabold">Güven rozeti</p>
            <p className="mt-2 text-sm text-slate-600">Bu işletme pilot parçacı listesinde demo olarak gösterilir.</p>
          </div>
        </aside>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">Öne çıkan parçalar</h2>
            <Link to="/parca-ara" className="text-sm font-bold text-emerald-700">Tümünü gör</Link>
          </div>
          <div className="grid gap-4">
            {featured.map((part) => <PartCard key={part.id} part={part} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
