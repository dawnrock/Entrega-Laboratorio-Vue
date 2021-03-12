<template>
  <div class="grid">
    <h2>Lista de usuarios</h2>
    <suspense>
      <div v-for="user in users" :key="user.id">
        <router-link :to="`/detailUser/${user.login}`">
          <div>
            <img :src="`${user.avatar_url}`" width="150" alt="" />
          </div>
          <div>
            <p>
              <span class="grey-text">Name:</span>
              <strong>{{ user.login }}</strong>
            </p>
          </div>
        </router-link>
      </div>
    </suspense>
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
      .getUsers(this.userInCompany)
      .then((users: UserEntity[] | undefined) => {
        if (users) {
          this.users = users;
        }
      });
  },
});
</script>
