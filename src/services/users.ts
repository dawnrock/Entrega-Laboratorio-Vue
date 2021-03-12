import { UserEntity, CompaniesEntity } from '@/types';

export const userService = {
  async getUsers(org: string): Promise<UserEntity[]> {
    const books: UserEntity[] = await fetch(
      `https://api.github.com/orgs/${org}/members`
    ).then(response => response.json());
    return books;
  },

  async getCompanies(org: string): Promise<CompaniesEntity[]> {
    const companiesBooks: CompaniesEntity[] = await fetch(
      `https://api.github.com/orgs/${org}`
    ).then(response => response.json());
    return companiesBooks;
  },

  async getUserInCompany( login: string): Promise<UserEntity> {
    const userInCompany: UserEntity = await fetch(
      `https://api.github.com/users/${login}`
    ).then(response => response.json());
    return userInCompany;
  },
};

