export interface InfectionSearchRequest {
  domains: string[] | null;
  root_domains: string[] | null;
  app_domains: string[] | null;
  ips: string[] | null;
  infection_date_from: string | null;
  infection_date_to: string | null;
  next: string | null;
  size: number;
}
