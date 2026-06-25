import { ArrowRight, CheckCircle2, MessageCircle, Search, Store, Wrench, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchPanel from "../components/SearchPanel";

const shopBenefits = [
  "Sadece dijital vitrinle başlayabilirsin",
  "İhtiyacın varsa stok ve depo ekleyebilirsin",
  "Cari hesapları defter yerine panelden takip edebilirsin",
  "Kullanmadığın modüle ödeme yapmak zorunda kalmazsın",
];

const packages = [
  {
    name: "Vitrin Paketi",
    price: "Pilot başlangıç",
    summary: "İnternette görünmek isteyen ama stok programı kullanmak istemeyen dükkanlar için.",
    bestFor: "Web sitesi olmayan, WhatsApp üzerinden talep almak isteyen küçük parçacılar.",
    features: ["Dükkan profil sayfası", "WhatsApp talep butonu", "Öne çıkan parçalar", "Stok göstermek zorunlu değil"],
    details: ["Müşteri dükkan profilini, konumu ve uzman olduğu markaları görür.", "Parça varsa vitrinde listelenir, yoksa müşteri talep bırakabilir.", "İlk aşamada karmaşık stok girişi yapmadan dijital vitrin açılır."],
  },
  {
    name: "Cari Takip Paketi",
    price: "Modül bazlı",
    summary: "Stok ihtiyacı olmayan ama müşteri/esnaf hesabı takip eden işletmeler için.",
    bestFor: "Defterde borç-alacak tutan, servislerle çalışan veya tahsilat takibi yapan parçacılar.",
    features: ["Müşteri ve servis hesapları", "Borç/alacak takibi", "Açık bakiye görünümü", "Tahsilat bekleyenler listesi"],
    details: ["Müşteri, servis ve esnaf hesapları ayrı kartlarda tutulur.", "Borç, alacak ve kalan bakiye tek ekranda görünür.", "Tahsilat bekleyen hesaplar panelde öne çıkar."],
  },
  {
    name: "Stok + Depo Paketi",
    price: "Modül bazlı",
    summary: "Parçanın adedini ve dükkanda nerede durduğunu takip etmek isteyenler için.",
    bestFor: "Raf, kutu, depo veya çıkma parça alanı olan stoklu çalışan dükkanlar.",
    features: ["Stok listesi", "Raf/kutu/depo konumu", "Düşük stok uyarısı", "Ürün giriş-çıkış hareketleri"],
    details: ["Her parçaya stok adedi ve depo konumu girilebilir.", "Raf, kutu veya depo alanına göre arama yapılır.", "Düşük stoklu ürünler panelde uyarı olarak gösterilir."],
  },
  {
    name: "Tam Yönetim Paketi",
    price: "Gelişmiş demo",
    summary: "Hem müşteri getirmek hem de içerideki işi takip etmek isteyen işletmeler için.",
    bestFor: "Vitrin, stok, depo, cari ve talep yönetimini birlikte kullanmak isteyen parçacılar.",
    features: ["Dijital vitrin", "Stok, depo ve cari", "Talep yönetimi", "Panel istatistikleri"],
    details: ["Müşteri vitrinden parçayı görür ve WhatsApp ile ulaşır.", "Dükkan içeride stok, depo ve cari takibini aynı panelden yapar.", "Yönetici panelinde paket, talep ve pilot işletme takibi yapılır."],
  },
];

const modules = [
  ["Dijital Vitrin", "Web sitesi olmayan dükkan için profil, ürün vitrini ve WhatsApp talebi."],
  ["Stok Takibi", "Ürün adedi, web görünürlüğü ve düşük stok kontrolü."],
  ["Depo Yönetimi", "Parçanın raf, kutu ve depo konumunu hızlıca bulma."],
  ["Cari Hesap", "Müşteri, servis ve esnaf için borç/alacak takibi."],
];

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<(typeof packages)[number] | null>(null);

  return (
    <>
      <section className="hero-band">
        <div className="hero-slide hero-slide-one" aria-hidden="true" />
        <div className="hero-slide hero-slide-two" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
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
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
              <ul className="mt-5 grid gap-3 text-sm text-slate-600">
                {item.features.map((feature) => <li className="flex gap-2" key={feature}><CheckCircle2 size={17} className="shrink-0 text-mint" /> {feature}</li>)}
              </ul>
              <button className="btn btn-secondary mt-6 w-full" type="button" onClick={() => setSelectedPackage(item)}>
                Paketi incele <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </section>

      {selectedPackage && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="eyebrow-dark">Paket içeriği</span>
                <h2 className="mt-3 text-2xl font-extrabold">{selectedPackage.name}</h2>
                <p className="mt-2 text-sm font-bold text-mint">{selectedPackage.price}</p>
              </div>
              <button className="icon-button" type="button" onClick={() => setSelectedPackage(null)} aria-label="Paket penceresini kapat">
                <X size={20} />
              </button>
            </div>

            <p className="mt-5 rounded-lg bg-slate-50 p-4 leading-7 text-slate-700">{selectedPackage.summary}</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-extrabold">Kimler için uygun?</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{selectedPackage.bestFor}</p>
              </div>
              <div>
                <h3 className="font-extrabold">Pakete dahil olanlar</h3>
                <ul className="mt-2 grid gap-2 text-sm text-slate-600">
                  {selectedPackage.features.map((feature) => (
                    <li className="flex gap-2" key={feature}><CheckCircle2 size={16} className="shrink-0 text-mint" /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-extrabold">Nasıl çalışır?</h3>
              <div className="mt-3 grid gap-3">
                {selectedPackage.details.map((detail) => (
                  <div className="list-row" key={detail}>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary flex-1" to="/parcaci-olarak-katil">Bu paketle başvur</Link>
              <button className="btn btn-secondary flex-1" type="button" onClick={() => setSelectedPackage(null)}>Diğer paketlere bak</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
