export type PerfumeCategory =
  | "Extrait de Parfum"
  | "Eau de Parfum"
  | "Eau de Toilette";

export type PerfumeOccasion =
  | "Evening"
  | "Daytime"
  | "Formal"
  | "Casual"
  | "Signature";

export interface PerfumeProduct {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  category: PerfumeCategory;
  image: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  longevity: "Delicate" | "Moderate" | "Long-lasting" | "Exquisite";
  size: `${number}ml`;
  occasion: PerfumeOccasion[];
}
