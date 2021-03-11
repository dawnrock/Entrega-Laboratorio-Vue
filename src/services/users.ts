import { UserEntity, CompaniesEntity } from '@/types';

export const userService = {
  async getUser(id: string): Promise<UserEntity[]> {
    const books: UserEntity[] = await fetch(
      `https://api.github.com/orgs/${id}/members`
    ).then(response => response.json());
    return books;
  },

  async getCompanies(org: string): Promise<CompaniesEntity[]> {
    const companiesBooks: CompaniesEntity[] = await fetch(
      `https://api.github.com/orgs/${org}`
    ).then(response => response.json());
    return companiesBooks;
  },

  // async getUserInCompany(login: CompaniesEntity['login']): Promise<CompaniesEntity | undefined> {
  //   if(!login) throw new Error('login is required');

  //   return this.getCompanies(login).then(list => {
  //     return list.find((item: CompaniesEntity) => String(item.id) === String(login));
  //   });
  // }
};
