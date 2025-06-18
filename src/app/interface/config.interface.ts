export interface Field {
  ID?: string;
  Type: string;
  Text?: string;
  Placeholder?: string;
  Title?: string;
  AlertMessage?: string;
}
export interface Config {
  Title: string;
  Subtitle: string;
  Fields: Field[];
}
