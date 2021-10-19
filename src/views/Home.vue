<template>
    <div id="app">
        <image-slider>
            <div @click="prev" class="prev_btn">
                <img src="https://imgur.com/MCZoEJ7.png" />
                <span class="blind">이전</span>
            </div>
            <div @click="next" class="next_btn">
                <img src="https://imgur.com/X5zAUW4.png" />
                <span class="blind">다음</span>
            </div>
            <div class="number">
                <span class="currentNumber">{{show_currentNumber + 1}}</span> |
                <span class="amount">4</span>
            </div>
            <transition-group name="fade">
                <div v-for="i in [currentNumber]" :key="i">
                    <img :src="currentImg" width="100%" height="600px" v-on:mouseover="stopRotation"
                        v-on:mouseout="startRotation" />
                </div>
                <div class="back_title" :key="title">
                    <span>{{ title[show_currentNumber] }}</span>
                </div>
                <div class="alt" :key="alt">
                    <span v-html="alt[show_currentNumber]"></span>
                </div>
            </transition-group>

        </image-slider>


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
    export default {

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
            }
        },
        mounted() {
            this.startRotation();
        },
        computed: {
            currentImg: function() {
                return this.images[Math.abs(this.currentNumber) % this.images.length]; 
            },
            show_currentNumber : function() {
                return Math.abs(this.currentNumber) % this.images.length
            }
        },

        methods: {

            startRotation: function () {
                this.timer = setInterval(this.next, 6000);
            },

            stopRotation: function () {
                clearTimeout(this.timer);
                this.timer = null;
            },

            next: function () {
                this.currentNumber++;
            },
            prev: function () {
                this.currentNumber--;
            }
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

    body {
        margin: 0;
        padding: 0;
        line-height: 1.4;
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

    image-slider .prev_btn img {
        position: absolute;
        bottom: 240px;
        width: 50px;
        height: 50px;
        left: 100px;
    }

    image-slider .next_btn img {
        position: absolute;
        bottom: 240px;
        width: 50px;
        height: 50px;
        right: 100px;
    }

    .blind {
        position: absolute;
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
        padding: 0 140px 120px;
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
        position: absolute;
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
        bottom: 280px;
        width: 300px;
        height: 50px;
        left: 200px;
        font-weight: bold;
        font-size: 32px;
        color: white;
    }

    .alt {
        position: absolute;
        bottom: 210px;
        width: 350px;
        height: 50px;
        left: 200px;
        font-weight: bold;
        font-size: 19px;
        color: white;
    }

    .number {
        position: absolute;
        bottom: 140px;
        width: 50px;
        height: 50px;
        left: 200px;
        font-weight: bold;
        font-size: 16px;
        color: white;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s ease;
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-leave-to {
        display: none;
    }






    @media only screen and (max-width: 1600px) {
        .summary_container {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
</style>