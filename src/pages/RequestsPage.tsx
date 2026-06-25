import { MessageCircle } from "lucide-react";
import Badge from "../components/Badge";
import DashboardShell from "../components/DashboardShell";
import { requests } from "../data/mockData";
import { whatsappLink } from "../utils/format";

export default function RequestsPage() {
  return (
    <DashboardShell>
      <div className="mb-6">
        <span className="eyebrow-dark">Talep yönetimi</span>
        <h1 className="mt-2 text-3xl font-extrabold">Gelen Talepler</h1>
      </div>
      <div className="grid gap-4">
        {requests.map((request) => (
          <article className="card" key={request.id}>
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-extrabold">{request.customerName}</h2>
                  <Badge tone={request.status === "Yeni" ? "orange" : request.status === "Satışa Döndü" ? "green" : "slate"}>{request.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-500">{request.date} - {request.phone}</p>
              </div>
              <a className="btn btn-primary self-start" href={whatsappLink(request.phone.replace(/\D/g, ""), `${request.partName} talebiniz için dönüş yapıyoruz.`)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp'tan dönüş
              </a>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="info-box"><span>Araç bilgisi</span><strong>{request.vehicle}</strong></div>
              <div className="info-box"><span>Aranan parça</span><strong>{request.partName}</strong></div>
              <div className="info-box"><span>Not</span><strong>{request.note}</strong></div>
            </div>
          </article>
        ))}
      </div>
    </DashboardShell>
  );
}
