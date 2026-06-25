import { ArrowRight, CheckCircle2, MessageCircle, Search, Store, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import SearchPanel from "../components/SearchPanel";

const shopBenefits = [
  "Sadece dijital vitrinle başlayabilirsin",
  "İhtiyacın varsa stok ve depo ekleyebilirsin",
  "Cari hesapları defter yerine panelden takip edebilirsin",
  "Kullanmadığın modüle ödeme yapmak zorunda kalmazsın",
];

const packages = [
  { name: "Vitrin Paketi", price: "Pilot başlangıç", features: ["Dükkan profil sayfası", "WhatsApp talep butonu", "Stok göstermek zorunlu değil"] },
  { name: "Cari Takip Paketi", price: "Modül bazlı", features: ["Müşteri ve servis hesapları", "Borç/alacak takibi", "Tahsilat bekleyenler listesi"] },
  { name: "Stok + Depo Paketi", price: "Modül bazlı", features: ["Stok listesi", "Raf/kutu/depo konumu", "Düşük stok ve hareket takibi"] },
  { name: "Tam Yönetim Paketi", price: "Gelişmiş demo", features: ["Dijital vitrin", "Stok, depo ve cari", "Talep ve panel istatistikleri"] },
];

const modules = [
  ["Dijital Vitrin", "Web sitesi olmayan dükkan için profil, ürün vitrini ve WhatsApp talebi."],
  ["Stok Takibi", "Ürün adedi, web görünürlüğü ve düşük stok kontrolü."],
  ["Depo Yönetimi", "Parçanın raf, kutu ve depo konumunu hızlıca bulma."],
  ["Cari Hesap", "Müşteri, servis ve esnaf için borç/alacak takibi."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
          <div className="self-center">
            <span className="eyebrow">Denizli sanayi odaklı MVP</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Aradığın oto parçasını sanayide hızlıca bul
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Parça arayan müşterilerle yerel parçacıları buluştururken, dükkanlara vitrin, stok, depo ve cari modülleri sunuyoruz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary btn-lg" to="/parca-ara"><Search size={20} /> Parça Ara</Link>
              <Link className="btn btn-light btn-lg" to="/parcaci-olarak-katil"><Store size={20} /> Parçacı Olarak Katıl</Link>
            </div>
          </div>
          <div className="self-end rounded-lg border border-white/15 bg-white/10 p-4 shadow-panel backdrop-blur">
            <SearchPanel />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span className="eyebrow-dark">Küçük dükkanlar için</span>
          <h2>Parçacı neye ihtiyaç duyuyorsa onu kullanır</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {shopBenefits.map((item) => (
            <div className="card compact" key={item}>
              <CheckCircle2 className="text-mint" size={24} />
              <p className="mt-4 font-bold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-title">
          <span className="eyebrow-dark">Modüler yapı</span>
          <h2>Vitrin, stok, depo ve cari ayrı ayrı seçilebilir</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modules.map(([title, text]) => (
            <div className="card compact" key={title}>
              <MessageCircle className="text-mint" size={24} />
              <h3 className="mt-4 font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="section-title text-left">
            <span className="eyebrow-dark">Nasıl çalışır?</span>
            <h2>Üç adımda parçaya ve parçacıya ulaş</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["1", "Müşteri parça arar", "Parça adı, araç ve şehir bilgisiyle arama yapar."],
              ["2", "Uygun parçacılar listelenir", "Stok, fiyat ve konuma göre sonuçları görür."],
              ["3", "WhatsApp veya telefonla ulaşır", "Satıcıya hızlıca soru sorar ya da parçayı ayırtır."],
            ].map(([no, title, text]) => (
              <div className="card compact" key={no}>
                <span className="step-number">{no}</span>
                <h3 className="mt-4 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid gap-4 md:grid-cols-4">
          {["10+ pilot parçacı", "100+ örnek parça", "4 modüler hizmet", "Denizli sanayi odaklı başlangıç"].map((item) => (
            <div className="stat-card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-title">
          <span className="eyebrow-dark">Paketler</span>
          <h2>Her dükkan ihtiyacı kadar modül alır</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {packages.map((item) => (
            <article className="card" key={item.name}>
              <Wrench className="text-emerald-700" />
              <h3 className="mt-4 text-xl font-extrabold">{item.name}</h3>
              <p className="mt-2 text-sm font-bold text-mint">{item.price}</p>
              <ul className="mt-5 grid gap-3 text-sm text-slate-600">
                {item.features.map((feature) => <li className="flex gap-2" key={feature}><CheckCircle2 size={17} className="shrink-0 text-mint" /> {feature}</li>)}
              </ul>
              <Link to="/parcaci-olarak-katil" className="btn btn-secondary mt-6 w-full">Paketi incele <ArrowRight size={18} /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
