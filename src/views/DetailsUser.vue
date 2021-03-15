<template>
 <h1>Detalle de Usuario</h1>

 <div class="grid">
  <div v-if="user">
   <img :src="`${user.avatar_url}`" alt="" width="300" />

   <p>
    <span>Name:</span>
    <strong>{{ user.name }}</strong>
   </p>
   <p>
    <span>Repository:</span>
    <strong>{{ user.repos_url }}</strong>
   </p>
   <p>
    <span>Bio:</span>
    <strong>{{ user.bio }}</strong>
   </p>
   <p>
    <span>Company:</span>
    <strong>{{ user.company }}</strong>
   </p>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { userService } from '@/services/users';
import { UserEntity } from '@/types';
import { RouteLocation } from 'node_modules/vue-router/dist/vue-router';
export default defineComponent({
 components: {},
 data: () => ({
  user: {} as UserEntity,
 }),
 computed: {
  login(): string {
   return String((this.$route as RouteLocation).params.id);
  },
 },
 created() {
  userService
   .getUserInCompany(this.login)
   .then((user: UserEntity | undefined) => {
    if (user) {
     this.user = user;
    }
   });
 },
});
</script>

<style></style>
