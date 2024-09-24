import { ComputerInformation } from './ComputerInformation';
import { Credential } from './Credential';

export interface InfectionSearchResponse {
  search_id: string;
  search_consumed_credits: number;
  credits_left: number;
  next: string | null;
  total_items_count: number;
  items_count: number;
  data: InfectionSearchResponseItem[];
}

export interface InfectionSearchResponseItem {
  id: string;
  log_checksum: string;
  log_file_name: string;
  stealer_type: string;
  computer_information: ComputerInformation[];
  credentials: Credential[];
}
