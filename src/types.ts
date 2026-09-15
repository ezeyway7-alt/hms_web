export interface HospitalModule {
  id: string;
  name: string;
  nameNe: string;
  code: string;
  category: 'clinical' | 'diagnostic' | 'pharmaceutical' | 'financial' | 'administrative' | 'specialized';
  shortDesc: string;
  longDesc: string;
  keyFeatures: string[];
  userRoles: string[];
  integrations: string[];
  badge?: string;
}

export interface EcosystemIntegration {
  id: string;
  title: string;
  titleNe: string;
  acronym: string;
  subtitle: string;
  description: string;
  protocols: string[];
  keyBenefits: string[];
  status: 'Ready' | 'Certified' | 'Native';
  logoPlaceholder: string;
}

export interface KeyFeature {
  id: string;
  title: string;
  titleNe: string;
  description: string;
  badge: string;
  iconName: string;
  details: string[];
}

export interface ComparisonPoint {
  dimension: string;
  hamroHMS: string;
  legacySoftware: string;
  manualPaperwork: string;
}

export interface ClientFacility {
  name: string;
  location: string;
  province: string;
  type: 'Government Hospital' | 'Private Hospital' | 'Medical College' | 'Ayurvedic Center' | 'Community Clinic';
  beds: string;
  modulesDeployed: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: string;
}
