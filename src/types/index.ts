export interface UserEntity {
  id: string;
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
}

export interface CompaniesEntity {
  id: string;
  login: string;
  name: string;
  location: string;
  avatar_url: string;
}
