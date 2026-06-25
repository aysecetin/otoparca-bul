import { CheckCircle2, Send } from "lucide-react";

const promises = [
  "Program kullanmak zorunda değilsiniz.",
  "Sadece vitrin, sadece cari veya sadece stok/depo seçebilirsiniz.",
  "Müşteriler size WhatsApp üzerinden ulaşabilir.",
  "İlk ay pilot kullanım modül bazlı ücretsiz olabilir.",
];

export default function JoinPage() {
  return (
    <section className="section">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow-dark">Parçacı olarak katıl</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Dükkanına gereken modülü seç, dijitalleşmeye küçük başla</h1>
          <p className="mt-4 leading-8 text-slate-600">
            OtoParça Bul; vitrin, stok, depo ve cari hizmetlerini parça parça kullanabileceğiniz sade bir parçacı yönetim prototipidir.
          </p>
          <div className="mt-8 grid gap-3">
            {promises.map((item) => (
              <div className="flex gap-3 rounded-lg border border-line bg-white p-4 shadow-sm" key={item}>
                <CheckCircle2 className="shrink-0 text-mint" />
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <form className="card">
          <h2 className="text-2xl font-extrabold">Pilot katılım formu</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="field"><span>Dükkan adı</span><input placeholder="Örn. Denizli Oto Far" /></label>
            <label className="field"><span>Yetkili kişi</span><input placeholder="Ad soyad" /></label>
            <label className="field"><span>Telefon</span><input placeholder="+90 5xx xxx xx xx" /></label>
            <label className="field"><span>Şehir / ilçe</span><input placeholder="Denizli / Merkezefendi" /></label>
            <label className="field sm:col-span-2"><span>Hangi parça gruplarında çalışıyorsunuz?</span><input placeholder="Far, stop, tampon, mekanik, çıkma parça..." /></label>
            <label className="field sm:col-span-2">
              <span>Hangi hizmete ihtiyacınız var?</span>
              <select>
                <option>Sadece dijital vitrin</option>
                <option>Sadece cari hesap takibi</option>
                <option>Stok + depo yönetimi</option>
                <option>Vitrin + stok + depo + cari</option>
                <option>Kararsızım, görüşmek istiyorum</option>
              </select>
            </label>
            <label className="field"><span>Yazılım kullanıyor musunuz?</span><select><option>Hayır</option><option>Evet</option></select></label>
            <label className="field"><span>Webde stok göstermek ister misiniz?</span><select><option>Kararsızım</option><option>Evet</option><option>Hayır</option></select></label>
            <label className="field"><span>Cari hesap tutuyor musunuz?</span><select><option>Evet, defterde</option><option>Evet, programda</option><option>Hayır</option></select></label>
            <label className="field"><span>Depo/raf takibi gerekiyor mu?</span><select><option>Kararsızım</option><option>Evet</option><option>Hayır</option></select></label>
          </div>
          <button className="btn btn-primary mt-5 w-full" type="button"><Send size={18} /> Demo başvuru gönder</button>
        </form>
      </div>
    </section>
  );
}
