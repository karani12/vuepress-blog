<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList :items="articles.items" />
      </main>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { useBlogType } from "vuepress-plugin-blog2/lib/client";
import ArticleList from "../components/ArticleCard.vue";
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
const articles = useBlogType("article");
console.log(articles.value)
</script>