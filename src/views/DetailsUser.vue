<template>
  <h1>Detalle de Usuario</h1>

  <div class="grid">
    <div v-if="user">
      <div class="image">
        <img :src="`${user.avatar_url}`" alt="" width="300" />
      </div>
      <p>
        <span class="grey-text">Login:</span>
        <strong>{{ user.login }}</strong>
      </p>
      <p>
        <span class="grey-text">Name:</span>
        <strong>{{ user.name }}</strong>
      </p>
      <p>
        <span class="grey-text">Repository:</span>
        <strong>{{ user.repos_url }}</strong>
      </p>
      <p>
        <span class="grey-text">Bio:</span>
        <strong>{{ user.bio }}</strong>
      </p>
      <p>
        <span class="grey-text">Company:</span>
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
