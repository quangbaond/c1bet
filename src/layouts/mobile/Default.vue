<script setup lang="ts">
import Banner from "@/components/mobile/Banner.vue";
import Notice from "@/components/mobile/Notice.vue";
import NavMember from "@/components/mobile/NavMember.vue";
</script>
<template>
  <div id="layout__default">
    <Banner />
    <Notice />
    <NavMember />
    <slot></slot>
  </div>
</template>