<template>
  <div class="article-wrapper">
    <div v-if="!items.length">Nothing in here.</div>
    <article class="article" v-for="{ info, path } in items" :key="path">
        <RouterLink :to="path">
          {{ info.title }}
        </RouterLink>
      <hr />
      <div class="article-info">
        <span v-if="info.author" class="author">Author: {{ info.author }}</span>
        <span v-if="info.date" class="date"
          >Date: {{ new Date(info.date).toLocaleDateString() }}</span
        >
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss" scoped>
.article-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    article{
        display: flex;
        height: 100px;
        width: 50%;
        border-bottom:1px solid var(--c-border) ;
        align-items: center;
        a{
            font-size: 2em;
        }
    }
}
</style>