import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { CompaniesListState } from './store/companiesModule';
// import { ListState } from './store/usersModule';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    // $store: Store<ListState>;
    $store: Store<CompaniesListState>;
  }
}
