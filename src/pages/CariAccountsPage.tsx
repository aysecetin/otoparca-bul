import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Badge from "../components/Badge";
import DashboardShell from "../components/DashboardShell";
import { cariAccounts } from "../data/mockData";
import { AccountStatus } from "../types";
import { formatPrice } from "../utils/format";

export default function CariAccountsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<AccountStatus | "">("");

  const filtered = useMemo(() => {
    return cariAccounts.filter((account) => {
      const text = `${account.customerName} ${account.phone} ${account.accountType}`.toLocaleLowerCase("tr-TR");
      return text.includes(query.toLocaleLowerCase("tr-TR")) && (!status || account.status === status);
    });
  }, [query, status]);

  return (
    <DashboardShell>
      <div className="mb-6">
        <span className="eyebrow-dark">Cari takip</span>
        <h1 className="mt-2 text-3xl font-extrabold">Cari Hesaplar</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Parçacı isterse sadece cari modülünü kullanabilir; müşteri, servis ve esnaf hesaplarını borç/alacak olarak takip eder.
        </p>
      </div>

      <div className="mb-4 grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
        <label className="field mb-0">
          <span>Cari ara</span>
          <div className="input-with-icon"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Müşteri, servis veya telefon" /></div>
        </label>
        <label className="field mb-0">
          <span>Durum</span>
          <select value={status} onChange={(event) => setStatus(event.target.value as AccountStatus | "")}>
            <option value="">Tümü</option>
            <option>Açık</option>
            <option>Tahsilat Bekliyor</option>
            <option>Ödendi</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((account) => {
          const balance = account.debit - account.credit;
          return (
            <article className="card" key={account.id}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-extrabold">{account.customerName}</h2>
                  <p className="mt-1 text-sm text-slate-500">{account.accountType} - {account.phone}</p>
                </div>
                <Badge tone={account.status === "Ödendi" ? "green" : account.status === "Tahsilat Bekliyor" ? "orange" : "slate"}>{account.status}</Badge>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="info-box"><span>Borç</span><strong>{formatPrice(account.debit)}</strong></div>
                <div className="info-box"><span>Alacak</span><strong>{formatPrice(account.credit)}</strong></div>
                <div className="info-box"><span>Bakiye</span><strong>{formatPrice(balance)}</strong></div>
              </div>
              <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-bold text-ink">Son işlem: {account.lastTransaction}</p>
                <p className="mt-1">{account.note}</p>
              </div>
            </article>
          );
        })}
      </div>
    </DashboardShell>
  );
}
