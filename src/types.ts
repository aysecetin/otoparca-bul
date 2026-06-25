export type PartType = "Orijinal" | "Yan sanayi" | "Çıkma";
export type StockStatus = "Stokta var" | "Sınırlı stok" | "Talep üzerine";
export type RequestStatus = "Yeni" | "Görüşüldü" | "Satışa Döndü" | "Uygun Değil";

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  description: string;
  brands: string[];
  location: string;
  district: string;
  city: string;
  hours: string;
  phone: string;
  whatsapp: string;
  badges: string[];
  package: string;
  approved: boolean;
}

export interface Part {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: string;
  compatibility: string;
  oem: string;
  type: PartType;
  price: number;
  stock: number;
  status: StockStatus;
  sellerId: string;
  visible: boolean;
  description: string;
}

export interface CustomerRequest {
  id: string;
  customerName: string;
  phone: string;
  vehicle: string;
  partName: string;
  note: string;
  date: string;
  status: RequestStatus;
}
