
<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const modules = [Pagination];
const banners = ref([
    {
        id: 1,
        image: "https://images.11029984.com/mcs-images/announcement/c1bet88f3/mcs_1702538425013_5-min.png",
    },
    {
        id: 2,
        image: "https://images.11029984.com/mcs-images/announcement/c1bet88f3/mcs_1702538380715_1-min.png",
    },
    {
        id: 3,
        image: "https://images.11029984.com/mcs-images/announcement/c1bet88f3/mcs_1702538402479_3-min.png",
    },
])
</script>
<template>
    <div class="banner">
        <swiper :pagination="{ clickable: true }" :slides-per-view="1" :space-between="50" :loop="true" :modules="modules"
            class="mySwiper">
            <swiper-slide v-for="banner in banners" :key="banner.id">
                <img :src="banner.image" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<style>
.swiper-pagination-bullet-active {
    background: #fff;
}
</style>