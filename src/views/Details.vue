<template>
 <h2>Lista de usuarios</h2>
 <div class="grid ">
  <div v-for="user in users" :key="user.id">
   <router-link :to="`/detailUser/${user.login}`">
    <div class="card">
     <img :src="`${user.avatar_url}`" width="150" alt="" />
     <p>
      <span>Login:</span>
      <strong>{{ user.login }}</strong>
     </p>
    </div>
   </router-link>
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
  company(): string {
   return this.$store.getters['CompaniesModule/textFilter'];
  },
 },
 created() {
  userService.getUsers(this.company).then((users: UserEntity[] | undefined) => {
   if (users) {
    this.users = users;
   }
  });
 },
});
</script>
