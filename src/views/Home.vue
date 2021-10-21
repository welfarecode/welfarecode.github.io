<template>
    <div id="app">
        <swiper class="swiper" ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(image,index) in images" :key="image">
                <img :src="image" class="swiper-img" />
                <p class="back_title" v-html="title[index]"></p>
                <p class="alt" v-html="alt[index]"></p>
                <p class="number">{{ index+1 }} | {{ images.length }}</p>
            </swiper-slide>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="main_content">
            <ul class="content_summary">
                <li class="summary_container">
                    <h3 class="summary_title">뉴스</h3>

                    <div class="news_box">
                        <router-link to="/news/20210815">
                            <strong class="news_title">3D 프린터로 만든 바이러스, 우석헌 박물관에 전시</strong>
                            <p class="news_text">
                                3D 프린터로 만든 바이러스를 9월달에 우석헌 박물관에 전시하기로 결정했습니다.
                                만들어지는 바이러스 개수는 COVID-19, SARS, MERS 모두 3개로 <br>바이러스의 발생이라는 주제와 함께
                                전시될 예정입니다.
                            </p>
                        </router-link>
                    </div>
                </li>
                <li class="summary_container">
                    <h3 class="summary_title">서비스</h3>

                    <div class="service_box">
                        <router-link to="/services">
                            <strong class="service_title">"고교학점제 챗봇" 출시</strong>
                            <p class="service_text">
                                2025년부터 모든 고등학교에 도입되는 고교학점제는 기존의 학교생활과는 큰 차이점을
                                불러일으키고 있습니다. 그 중 학생들이 가장 어색해할 부분은 학생별 개인 시간표라고 할 수 있습니다.
                            </p>
                        </router-link>
                    </div>
                </li>
                <li class="summary_container">
                    <h3 class="summary_title">동아리 소개</h3>
                    <div class="intro_box">
                        <router-link to="/club/introduction">
                            <p class="intro_text">
                                사회적 약자, <br>나아가 모든 이들을 위한 <br>코딩을 합니다.
                            </p>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
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
        // 데이터 모음
        data() {
            return {
                name: "WELFARE-CODE",
                images: ['https://imgur.com/FpTzxzn.png', 'https://imgur.com/eEcajIt.png',
                    'https://imgur.com/RLhvS8R.png', 'https://imgur.com/A70uwze.png'
                ],
                title: ['WELFARE CODE', '고교학점제 봇'],
                alt: [
                    '나를 위한, 모두를 위한 <br />별 볼 일 없는 코딩',
                    '2025년, 새로운 교육이 찾아올 해. <br />그리고 새로운 도우미가 당신을 찾아갈 때.'
                ],
                currentNumber: 0,
                timer: null,
                // 스위퍼 슬라이드 옵션 주기
                swiperOption: {
                    slidesPerView: 'auto',
                    loop: true,
                    autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
                        delay: 3000, // 시간 설정
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
            }
        },
        mounted() {
            
        },
        computed: {
            
        },

        methods: {

        },
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    div {
        display: block;
    }

    li,
    ol,
    ul {
        list-style: none;
    }

    ul {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    h3 {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        -webkit-appearance: none;
    }

    .swiper-button-next {
        background-image: url('https://i.imgur.com/36dhI0c.png');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 4vw;
        height: 9vh;
        margin-top: 14vh;
        margin-right: 2vw;
    }

    .swiper-button-prev {
        background-image: url('https://i.imgur.com/dgJogVL.png');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 4vw;
        height: 9vh;
        margin-top: 14vh;
        margin-left: 2vw;
    }

    .swiper-button-next::after {
        display: none;
    }

    .swiper-button-prev::after {
        display: none;
    }


    .blind {
        display: none;
        overflow: hidden;
    }

    .prev_btn,
    .next_btn {
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
    }


    .main_content {
        max-width: 100%;
        top: 1rem;
        padding: 0 140px 120px;
        z-index: 999;
    }

    .content_summary {
        margin-top: 60px;
    }

    .content_summary:after {
        content: '';
        display: block;
        clear: both;
    }

    .summary_container:first-child {
        padding-left: 0;
    }

    .summary_container:first-child:before {
        display: none;
    }

    .summary_container::before {
        content: '';

        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: #efefef;
    }

    .summary_container {
        position: relative;
        float: left;
        width: 33%;
        padding-left: 50px;
        padding-right: 50px;
    }

    .summary_container:after {
        content: '';
        display: block;
        clear: both;
    }

    .summary_title {
        font-size: 18px;
        color: #212121;
        font-weight: bold;
    }

    .news_box,
    .service_box {
        width: 100%;
        height: 76px;
        margin: 31px 0 30px;
    }

    .intro_box {
        width: 100%;
        height: 76px;
        margin: 31px 0 30px;
    }

    .news_title,
    .service_title {
        display: block;
        font-size: 18px;
        color: #333;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }



    .news_text {
        height: 44px;
        margin-top: 10px;
        font-size: 15px;
        color: #878890;
        line-height: 1.5;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -webkit-line-clamp: 2;
        font-weight: 500;
    }

    .service_text {

        height: 44px;
        margin-top: 10px;
        font-size: 15px;
        color: #878890;
        line-height: 1.5;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -webkit-line-clamp: 2;
        font-weight: 500;
    }

    .intro_text {
        height: 76px;
        margin: 31px 0 10px;
        margin-right: 10px;
        font-size: 18px;
        color: #333;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -webkit-line-clamp: 3;
    }

    .back_title {
        position: absolute;
        bottom: 27vh;
        left: 11vw;
        font-weight: bold;
        font-size: 7vh;
        color: white;
        z-index: 999;
    }

    .alt {
        position: absolute;
        bottom: 18vh;
        left: 11vw;
        font-weight: bold;
        font-size: 3vh;
        color: white;
        z-index: 999;
    }

    .number {
        position: absolute;
        bottom: 12vh;
        left: 11vw;
        font-weight: bold;
        font-size: 3vh;
        color: white;
        z-index: 999;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s ease;
    }

    .swiper-img {
        width: 100%;
        height: 70vh;
    }

    @media only screen and (max-width: 1600px) {
        .summary_container {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

     @media only screen and (max-width: 900px) {
        .swiper-img {
            width: 100%;
            height: 40vh;
        }
        .back_title {
            bottom: 7vh;
            font-size: 35px;
        }

        .alt {
            bottom: 2vh;
            font-size: 15px;
        }

        .number {
            font-size: 15px;
            left:48%;
            bottom: 0;
        }
    }

    @media only screen and (max-width: 700px) {

        .back_title {
            bottom: 7vh;
            font-size: 17px;
        }

        .alt {
            bottom: 1vh;
            font-size: 10px;
        }

        .number {
            font-size: 10px;
            left:47%;
            bottom: 0;
        }
    }
</style>