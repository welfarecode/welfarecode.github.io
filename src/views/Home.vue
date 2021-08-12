<template>
    <div id="app">
        <img src="../assets/home.jpg" width="100%" />
        <div class="brief_all">
            <span class="brief">
                <router-link to="/news"><strong>뉴스</strong></router-link>
                <router-link to="/news/20210811">
                    <strong><br><br>{{ name }}와 우석헌 박물관은 3D프린터를 이용..</strong>
                </router-link>
                <div class="detail ">
                    <router-link to="/news/20210811">
                        {{ name }}와 우석헌 박물관은 3D프린터를 이용한<br>바이러스 모형을 제작/전시하기로 결정했다.만들어지는
                        <br>바이러스 모형은 사스,메르스,코로나, 모두 3개로
                    </router-link>
                </div>
            </span>
            <span class="brief">
                <strong>서비스</strong>
                <router-link to="/news">
                    <strong><br><br>{{ name }}와 우석헌 박물관은 3D프린터를 이용..</strong>
                </router-link>
                <div class="detail">
                    {{ name }}와 우석헌 박물관은 3D프린터를 이용한 바이러스 모형을 제작/전시하기로 결정했다.만들어지는 바이러스 모형은 사스,메르스,코로나, 모두 3개..
                </div>
            </span>
            <span class="brief">
                <strong>동아리 소개</strong>
                <router-link to="/news">
                    <strong><br><br>{{ name }}</strong>
                </router-link>
                <div class="detail">
                    {{ name }}와 우석헌 박물관은 3D프린터를 이용한 바이러스 모형을 제작/전시하기로 결정했다.만들어지는 바이러스 모형은 사스,메르스,코로나, 모두 3개..
                </div>
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        // 데이터 모음
        data() {
            return {
                name: "WELFARE-CODE",
            }
        }
    }
</script>

<style scoped>

    a {
        text-decoration:none;
        color: black;
    }
    a:hover {
        text-decoration: underline;
        color: black;
    }

    .detail {
        font-size: 15.5px;
        margin-top: 1rem;
    }
    .brief {
        text-align: left;
        display: inline-block;
        width: 33.3%;
        height: 150px;
        border-right: 1px solid rgb(201, 201, 201);
    }

    .brief_all {
        margin: 5rem 8rem;
    }
</style>