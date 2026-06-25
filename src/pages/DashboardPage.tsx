import { AlertTriangle, Eye, MessageCircle, Package, ReceiptText, TrendingUp, Warehouse } from "lucide-react";
import DashboardShell from "../components/DashboardShell";
import { cariAccounts, parts, requests, warehouseItems } from "../data/mockData";
import { formatPrice } from "../utils/format";

export default function DashboardPage() {
  const visible = parts.filter((part) => part.visible).length;
  const lowStock = parts.filter((part) => part.stock <= 2).length;
  const openBalance = cariAccounts.reduce((total, account) => total + Math.max(account.debit - account.credit, 0), 0);
  const lowWarehouse = warehouseItems.filter((item) => item.quantity <= 2).length;
  const stats = [
    { label: "Toplam ürün sayısı", value: parts.length, icon: Package },
    { label: "Webde görünen ürün", value: visible, icon: Eye },
    { label: "Gelen talep sayısı", value: requests.length, icon: TrendingUp },
    { label: "Düşük stoklu ürünler", value: lowStock, icon: AlertTriangle },
    { label: "Depo uyarısı", value: lowWarehouse, icon: Warehouse },
    { label: "Açık cari bakiye", value: formatPrice(openBalance), icon: ReceiptText },
    { label: "WhatsApp tıklamaları", value: 38, icon: MessageCircle },
  ];

  return (
    <DashboardShell>
      <div className="mb-6">
        <span className="eyebrow-dark">Parçacı paneli</span>
        <h1 className="mt-2 text-3xl font-extrabold">Genel Bakış</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
          <h2 className="text-xl font-extrabold">Tahsilat bekleyen cariler</h2>
          <div className="mt-4 grid gap-3">
            {cariAccounts.filter((account) => account.status !== "Ödendi").slice(0, 3).map((account) => (
              <div className="list-row" key={account.id}>
                <span>{account.customerName}</span>
                <strong>{formatPrice(account.debit - account.credit)}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-extrabold">Depo konum uyarıları</h2>
          <div className="mt-4 grid gap-3">
            {warehouseItems.filter((item) => item.quantity <= 2).map((item) => (
              <div className="list-row" key={item.id}>
                <span>{item.partName}</span>
                <strong>{item.shelf} / {item.box}</strong>
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
