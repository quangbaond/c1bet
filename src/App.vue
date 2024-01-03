<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import DeviceDetector from "device-detector-js";
import { useStore } from "vuex";
import LayoutMobileBlank from "@/layouts/mobile/Blank.vue";
import { useRouter } from "vue-router";
import LayoutMobileDefault from "@/layouts/mobile/Default.vue";
import LayoutDesktopBlank from "@/layouts/desktop/Blank.vue";
import LayoutDesktopDefault from "@/layouts/desktop/Default.vue";

const store = useStore();
const myDevice = computed(() => store.state.device);
const router = useRouter();
const layout = computed(() => router.currentRoute.value.meta.layout);

onMounted(() => {
  const deviceDetector = new DeviceDetector();
  const userAgent =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
  const device = deviceDetector.parse(userAgent);
  store.commit("setDevice", device);
});
</script>

<template>
  <div>
    <div id="device_mobile" v-if="myDevice && myDevice?.device?.type === 'mobile'">
      <LayoutMobileBlank v-if="layout === 'blank'">
        <router-view></router-view>
      </LayoutMobileBlank>
      <LayoutMobileDefault v-else>
        <router-view></router-view>
      </LayoutMobileDefault>
    </div>
    <div id="device_desktop" v-else>
      <LayoutDesktopBlank v-if="layout === 'blank'">
        <router-view></router-view>
      </LayoutDesktopBlank>
      <LayoutDesktopDefault v-else>
        <router-view></router-view>
      </LayoutDesktopDefault>
    </div>
  </div>
</template>

