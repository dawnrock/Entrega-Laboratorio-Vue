<template>
  <div class="grid">
    <h1>Details</h1>

    <div v-for="user in users" :key="user.id">
      <div>
        <img :src="`${user.avatar_url}`" width="150" alt="" />
      </div>
      <h1>Name: {{ user.login }}</h1>

      <p><span class="grey-text">URL: </span>{{ user.url }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { UserEntity } from '@/types';
import { userService } from '@/services/users';

export default defineComponent({
  components: {},
  data: () => ({
    users: [] as UserEntity[],
  }),
  computed: {
    userInCompany(): string {
      return this.$store.getters['CompaniesModule/textFilter'];
    },
  },
  created() {
    userService
      .getUser(this.userInCompany)
      .then((users: UserEntity[] | undefined) => {
        if (users) {
          this.users = users;
        }
      });
  },
});
</script>
