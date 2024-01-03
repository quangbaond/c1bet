<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const profile = computed(() => store.state.userStore.profile);
let useVND = new Intl.NumberFormat('vn-VI', {
    style: 'currency',
    currency: 'VND',
});
</script>
<template>
    <div class="flex justify-between px-6 py-6" v-if="profile">
        <div>
            <span class="text-gray text-sm">{{ profile?.username }}</span>
        </div>
        <div>
            <span class="text-gray text-sm">{{ profile?.balance?.toFixed(2) + 'đ' }}</span>
        </div>
    </div>
</template>