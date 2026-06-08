// ─── Types for the Genially-style Presentation System ───
// These types define the data contract for any unit/presentation.
// To create a new unit, implement PresentationData with your content.

/** A single item in the interactive index/table of contents */
export interface IndexItem {
  num: number;
  label: string;
  slideIndex: number;
}

/** A card representing an element of a medical model (slide 3 pattern) */
export interface ElementCard {
  num: string;
  title: string;
  question: string;
  color: string;
  items: string[];
}

/** A card representing a specific medical model (slide 4 pattern) */
export interface ModelCard {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

/** An emergent/special model card with +Info modal */
export interface EmergentModel {
  icon: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  reference?: string;
}

/** A single entry in the timeline */
export interface TimelineEntry {
  model: string;
  era: string;
  dates: string;
  emoji: string;
}

/** A row in the detailed timeline table */
export interface TimelineTableRow {
  model: string;
  era: string;
  chars: string;
  period: string;
}

/** A continuation slide for the diachronic timeline explanation */
export interface TimelineContinuationData {
  badge: string;
  heading: string;
  intro: string;
  animatedText: string;
}

/** A comparison box (diacrónica vs sincrónica) */
export interface ComparisonBox {
  icon: string;
  title: string;
  text: string;
  variant: 'primary' | 'accent';
}

/** A historical example block */
export interface HistoricalExample {
  label: string;
  text: string;
  footnote: string;
}

/** A glass card for the actuality slide */
export interface ActualityBox {
  image?: string;
  icon?: string;
  title: string;
  text: string;
  delay: string;
}

/** A tag/chip shown in the conclusion */
export interface ConclusionTag {
  text: string;
  variant: 'primary-bg' | 'accent-bg' | 'primary-solid';
}

/** A bibliographic source */
export interface SourceEntry {
  type: 'book' | 'electronic';
  text: string;
  url?: string;
}

/** Text block used in the text+image slides */
export interface TextBlock {
  content: string;
  variant: 'primary' | 'accent';
}

// ─── Slide-specific data shapes ──────────────────────────

export interface CoverData {
  title: string;
  author: string;
  image: string;
  imageAlt: string;
}

export interface DefinitionData {
  badge: string;
  heading: string;
  blocks: TextBlock[];
  image: string;
  imageAlt: string;
}

export interface ElementsData {
  badge: string;
  heading: string;
  intro: string;
  elements: ElementCard[];
  footnote: string;
}

export interface ModelsData {
  badge: string;
  heading: string;
  subtitle: string;
  models: ModelCard[];
  emergent: EmergentModel;
}

export interface TimelineData {
  badge: string;
  heading: string;
  hint: string;
  text: string;
  entries: TimelineEntry[];
  tableRows: TimelineTableRow[];
}

export interface SyncData {
  badge: string;
  comparisons: ComparisonBox[];
  important: string;
  example: HistoricalExample;
  image: string;
  imageAlt: string;
}

export interface ActualityData {
  badge: string;
  heading: string;
  intro: string;
  bgImage: string;
  boxes: ActualityBox[];
}

export interface ConclusionData {
  badge: string;
  heading: string;
  paragraphs: string[];
  tags: ConclusionTag[];
  image: string;
}

export interface SourcesData {
  heading: string;
  sources: SourceEntry[];
}

/** Full presentation data contract */
export interface PresentationData {
  title: string;
  description: string;
  totalSlides: number;
  cover: CoverData;
  indexItems: IndexItem[];
  definition: DefinitionData;
  elements: ElementsData;
  models: ModelsData;
  timeline: TimelineData;
  timelineContinuation: TimelineContinuationData;
  sync: SyncData;
  actuality: ActualityData;
  conclusion: ConclusionData;
  sources: SourcesData;
}
