export interface Credential {
  url: string;
  creds: CredentialItem[];
}

interface CredentialItem {
  username: string;
  password: string;
}
