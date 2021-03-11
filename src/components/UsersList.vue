<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Users</h1>
      Total: {{ totalUsers }}
    </div>

    <hr />
    <input type="text" v-model="textFilter" />

    <hr />

    <ul class="product-list">
      <li v-for="user in filteredUsersList" :key="user.id">
        <suspense>
          <router-link :to="`/detail/${user.id}`">
            <article class="grid product-container card">
              <div class="image">
                <img :src="`${user.avatar_url}`" alt="" />
              </div>
              <div class="product-container__content">
                <p>
                  <span class="grey-text">Name: </span>
                  <strong>{{ user.login }}</strong>
                </p>
              </div>
            </article>
          </router-link>
        </suspense>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { userService } from '@/services/users';
import { UserEntity } from '@/types';
import { defineComponent } from 'vue';

const matchStrings = (strA: string, strB: string) =>
  strA.toLocaleLowerCase().match(strB.toLocaleLowerCase());

export default defineComponent({
  data() {
    return {
      list: {} as UserEntity,
      timerId: 0,
    };
  },

  computed: {
    textFilter: {
      get() {
        return this.$store.getters['CompaniesModule/textFilter'];
      },
      set(newFilter: string) {
        this.simpleDebounce(
          () =>
            this.$store.dispatch('CompaniesModule/setTextFilter', newFilter),
          300
        );
      },
    },
  },
  async created() {
    this.list = await userService.getUser(this.textFilter);
  },
  methods: {
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
.product-list {
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
