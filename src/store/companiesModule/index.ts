import { ActionContext } from 'vuex';

export interface CompaniesListState {
  textFilter: string;
}
const state: () => CompaniesListState = () => ({
  textFilter: 'lemoncode',
});

const mutationTypes = {
  SET_TEXT_FILTER: 'SET_TEXT_FILTER',
};

const actions = {
  setTextFilter(
    { commit }: ActionContext<CompaniesListState, unknown>,
    newFilter: string
  ) {
    commit(mutationTypes.SET_TEXT_FILTER, newFilter);
  },
};

const mutations = {
  [mutationTypes.SET_TEXT_FILTER](
    state: CompaniesListState,
    newFilter: string
  ) {
    state.textFilter = newFilter;
  },
};

const getters = {
  textFilter: (state: CompaniesListState) => state.textFilter,
};

const CompaniesModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default CompaniesModule;
