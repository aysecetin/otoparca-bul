import { AlertTriangle, Eye, MessageCircle, Package, TrendingUp } from "lucide-react";
import DashboardShell from "../components/DashboardShell";
import { parts, requests } from "../data/mockData";

export default function DashboardPage() {
  const visible = parts.filter((part) => part.visible).length;
  const lowStock = parts.filter((part) => part.stock <= 2).length;
  const stats = [
    { label: "Toplam ürün sayısı", value: parts.length, icon: Package },
    { label: "Webde görünen ürün", value: visible, icon: Eye },
    { label: "Gelen talep sayısı", value: requests.length, icon: TrendingUp },
    { label: "WhatsApp tıklamaları", value: 38, icon: MessageCircle },
    { label: "Düşük stoklu ürünler", value: lowStock, icon: AlertTriangle },
  ];

  return (
    <DashboardShell>
      <div className="mb-6">
        <span className="eyebrow-dark">Parçacı paneli</span>
        <h1 className="mt-2 text-3xl font-extrabold">Genel Bakış</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div className="card compact" key={item.label}>
              <Icon className="text-emerald-700" />
              <p className="mt-4 text-3xl font-extrabold">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-extrabold">Düşük stoklu ürünler</h2>
          <div className="mt-4 grid gap-3">
            {parts.filter((part) => part.stock <= 2).map((part) => (
              <div className="list-row" key={part.id}>
                <span>{part.name}</span>
                <strong>{part.stock} adet</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-extrabold">Son talepler</h2>
          <div className="mt-4 grid gap-3">
            {requests.slice(0, 3).map((request) => (
              <div className="list-row" key={request.id}>
                <span>{request.customerName} - {request.partName}</span>
                <strong>{request.status}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
