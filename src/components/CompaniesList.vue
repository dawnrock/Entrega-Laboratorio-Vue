<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between"></div>

    <hr />
    <h2>Busca la compañía</h2>
    <input type="text" v-model="textFilter" />
    <hr />

    <suspense>
      <ul class="company-list">
        <router-link :to="`/detail/${companiesList.id}`">
          <article id="companiesList" class="grid product-container card">
            <div class="image">
              <img :src="`${companiesList.avatar_url}`" alt="" />
            </div>
            <div class="product-container__content">
              <p>
                <span class="grey-text">Name: </span>
                <strong>{{ companiesList.login }}</strong>
              </p>
              <p>
                <span class="grey-text">Location: </span>
                <strong>{{ companiesList.location }}</strong>
              </p>
              <p>
                <span class="grey-text">Type: </span>
                <strong>{{ companiesList.type }}</strong>
              </p>
              <p>
                <span class="grey-text">Description: </span>
                <strong>{{ companiesList.description }}</strong>
              </p>
              <p>
                <span class="grey-text">Email: </span>
                <strong>{{ companiesList.email }}</strong>
              </p>
            </div>
          </article>
        </router-link>
      </ul>
    </suspense>
  </section>
</template>

<script lang="ts">
import { userService } from '@/services/users';
import { CompaniesEntity } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      companiesList: [] as CompaniesEntity[],
      timerId: 0,
    };
  },

  computed: {
    textFilter: {
      get() {
        return this.$store.getters['CompaniesModule/textFilter'];
      },
      set(newFilter: string) {
        this.$store.dispatch('CompaniesModule/setTextFilter', newFilter);
        this.simpleDebounce(async () => {
          this.getOrganizations();
        }, 300);
      },
    },
  },
  async created() {
    this.getOrganizations();
  },

  methods: {
    async getOrganizations() {
      if (this.textFilter) {
        this.companiesList = await userService.getCompanies(this.textFilter);
      }
    },

    simpleDebounce(fn: any, delay = 300) {
      return ((...args) => {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
          this.timerId = 0;
          fn(...args);
        }, delay);
      })();
    },
  },
});
</script>

<style lang="scss" scoped>
.company-list {
  justify-content: center;
  align-content: space-between;

  li {
    margin-bottom: 2em;
  }
  img {
    width: 250px;
    margin: 10%;
  }
}
.product-container {
  justify-content: flex-start;
  grid-template-rows: 300px;
}
</style>
