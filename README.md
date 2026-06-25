# OtoParça Bul

Sanayideki oto yedek parça satan küçük dükkanları, parça arayan müşterilerle buluşturan modern bir MVP/prototip web uygulaması.

Bu proje ilk aşamada tam ticari yazılım değil; fikri yatırımcıya, parçacılara ve potansiyel kullanıcılara göstermek için hazırlanmış gezilebilir bir demo prototiptir.

## Proje Fikri

Parça arayan müşteri tek tek dükkan gezmeden aradığı parçayı web üzerinden arayabilir. Parçacılar ise kendi dükkan profillerini, öne çıkan parçalarını ve ihtiyaç duydukları yönetim modüllerini dijital ortamda kullanabilir.

Platform sadece "stok programı" gibi konumlanmaz. Küçük parçacılar için:

- Dijital vitrin
- Stok takibi
- Depo/raf takibi
- Cari hesap takibi
- Gelen müşteri talebi yönetimi

gibi modülleri ihtiyaca göre sunar.

## Öne Çıkan Özellikler

- Parça arama ve filtreleme
- Parça detay sayfası
- Parçacı profil/dijital vitrin sayfası
- Parçacı paneli
- Stok yönetimi
- Depo/raf yönetimi
- Cari hesap yönetimi
- Gelen talepler ekranı
- Admin demo ekranı
- Light/Dark mode
- Mock data ile çalışan demo akışları
- Demo WhatsApp bağlantıları

## Modüler Paket Mantığı

Her parçacı tüm sistemi almak zorunda değildir. İhtiyacına göre modül seçebilir.

### Vitrin Paketi

Web sitesi olmayan dükkanlar için dijital profil, WhatsApp talebi ve öne çıkan parça vitrini.

### Cari Takip Paketi

Stok ihtiyacı olmayan ama müşteri, servis veya esnaf hesabı takip eden işletmeler için borç/alacak ekranı.

### Stok + Depo Paketi

Parça adedi, düşük stok uyarısı, depo, raf ve kutu konumu takip etmek isteyen dükkanlar için.

### Tam Yönetim Paketi

Dijital vitrin, stok, depo, cari, talep yönetimi ve panel istatistiklerini birlikte sunan kapsamlı demo paket.

## Sayfalar

- Ana Sayfa
- Parça Arama
- Parça Detay
- Parçacı Profil
- Parçacı Paneli
- Stoklarım
- Depolarım
- Cari Hesaplar
- Gelen Talepler
- Parçacı Olarak Katıl
- Admin Demo

## Kullanılan Teknolojiler

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React Icons

## Kurulum

Projeyi çalıştırmak için:

```bash
npm install
npm run dev
```

Terminalde görünen yerel adresi tarayıcıda açın. Genellikle:

```bash
http://127.0.0.1:5173/
```

Eğer 5173 doluysa Vite farklı bir port verebilir. Örneğin:

```bash
http://127.0.0.1:5174/
```

## Komutlar

Geliştirme sunucusu:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Build önizleme:

```bash
npm run preview
```

## GitHub'a Güncelleme Gönderme

Değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Güncelleme"
git push
```

Vercel bağlıysa `git push` sonrası canlı site otomatik güncellenir.

## Demo Notları

- Backend yoktur.
- Gerçek veritabanı yoktur.
- Gerçek ödeme sistemi yoktur.
- Gerçek kullanıcı girişi yoktur.
- Veriler `src/data/mockData.ts` dosyasında mock data olarak tutulur.
- WhatsApp bağlantıları demo link formatındadır.
- Stok ekleme gibi bazı işlemler sadece tarayıcı içi local state ile çalışır.

## Sunum İçin Kısa Açıklama

OtoParça Bul, küçük oto parçacılarını dijital vitrine taşıyan ve ihtiyaç halinde stok, depo ve cari modülleriyle destekleyen bir MVP prototiptir. Müşteri parça arar, uygun parçacıyı görür ve WhatsApp ya da telefonla hızlıca iletişime geçer. Parçacı ise sadece ihtiyacı olan modülleri kullanarak dijitalleşmeye düşük eforla başlayabilir.
