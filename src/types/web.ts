// Contrato de datos para presentaciones 16:9 con avance horizontal.
// Una unidad = portada + secciones; cada sección tiene una o más pantallas;
// cada pantalla es una lista de bloques. Si algo no cabe en una pantalla, va en la siguiente.

export interface Img {
  src: string;
  alt: string;
  credit?: string;
}

export type Block =
  | { type: 'text'; paragraphs: string[]; columns?: 2 }
  | { type: 'split'; image: Img; title?: string; blocks: Block[]; reverse?: boolean }
  | { type: 'stats'; items: { value: string; label: string; note?: string }[] }
  | { type: 'cards'; items: { title: string; text: string }[]; columns?: 2 } // text admite HTML (p. ej. <ul>)
  | { type: 'list'; title?: string; items: string[]; refs?: boolean }
  | { type: 'hotspots'; image: Img; points: { x: number; y: number; title: string; text: string; image?: Img }[] }
  | { type: 'callout'; text: string };

export type Screen = Block[];

export interface Section {
  id: string;
  label: string; // texto en el índice
  title: string;
  screens: Screen[];
}

export interface WebUnit {
  title: string;
  subtitle: string;
  author?: string;
  description: string;
  cover: Img;
  sections: Section[];
}
