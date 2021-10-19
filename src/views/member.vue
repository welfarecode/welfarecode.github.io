<template>
    <swiper class="swiper" :options="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="image" v-for="image in images">
                <img :src="image" />
            </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    import {
        Swiper,
        SwiperSlide
    } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                images: ['https://imgur.com/FpTzxzn.png', 'https://imgur.com/eEcajIt.png',
                    'https://imgur.com/RLhvS8R.png', 'https://imgur.com/A70uwze.png'    
                ],
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }
    }
</script>

<style>
    .swiper img {
        height: 600px;
        width: 100%;
        z-index: 1;
    }
    .swiper-button-prev {
        background-image: url("https://imgur.com/MCZoEJ7.png") !important;
    }
</style>