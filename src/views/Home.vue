<template>
 <div class="home">
  <CompaniesList />
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CompaniesList from '@/components/CompaniesList.vue';
export default defineComponent({
 name: 'Home',
 components: {
  CompaniesList,
 },
});
</script>
