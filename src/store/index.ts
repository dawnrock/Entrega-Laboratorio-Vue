import { createStore } from 'vuex';
import CompaniesModule from './companiesModule';

export default createStore({
  modules: {
    CompaniesModule,
  },
});
