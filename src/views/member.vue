<template>
    <div id="parent">
        <div id="container">
            <div class="child 표">
                <img src="../assets/pyo.png" width="320" height="215" />
            </div>
            <div class="child 조">
                <img src="https://cdn.discordapp.com/avatars/453779478150381598/865d7946379dff866b88ff88d23ac284.png"
                    width="320" height="215" />
            </div>
            <div class="child 장">
                <img src="../assets/face.jpg" width="320" height="215" />
            </div>
            <div class="child 한">
                <img src="https://cdn.discordapp.com/avatars/480235331396960257/54c9472bce4d8f40535c972993dd3828.png"
                    width="320" height="215" />
            </div>
            <div class="child 김">
                <img src="https://i.postimg.cc/ZKBK7sR0/f013643790bdf48770a0784ba653141b-mp4.gif" width="300"
                    height="215" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            $('.표').click(function () {
                $('#container').removeClass('second third fourth fifth').addClass('first');
            });
            $('.조').click(function () {
                $('#container').removeClass('first third fourth fifth').addClass('second');
            });
            $('.장').click(function () {
                $('#container').removeClass('first second fourth fifth').addClass('third');
            });
            $('.한').click(function () {
                $('#container').removeClass('first second third fifth').addClass('fourth');
            });
            $('.김').click(function () {
                $('#container').removeClass('first second third four').addClass('fifth');
                
            });
        }
    }
</script>
<style>
    #parent {
        left: 30%;
        margin-top: 10rem;
        margin-bottom: 10rem;
        position: relative;
        width: 600px;
        height: 600px;
        /* border: 1px solid rgba(0, 0, 0, 0.1); */
        border-radius: 50%;
        transform: rotate(0deg);
        transition: transform 0.7s linear;
        display: flex;
        justify-content: center;
    }

    .child {
        position: absolute;
        width: 200px;
        height: 200px;
        transition: transform 0.7s linear;

    }

    .표 {
        top: -120px;
        /* -child size/2 */
        left: 240px;
        /* parent size/2 - child size/2 */
    }

    .조 {
        top: 80px;
        /* -child size/2 */
        left: 510px;
        /* parent size/2 - child size/2 */
    }

    .장 {
        top: 420px;
        /* -child size/2 */
        left: 400px;
    }

    .한 {
        top: 420px;
        /* -child size/2 */
        left: 80px;
    }

    .김 {
        top: 80px;
        /* -child size/2 */
        left: -50px;
    }

    .child img {
        max-width: 100%;
        border-radius: 50%;
    }

    #container.first {
        transform: rotate(0deg);
    }

    #container.first div {
        transform: rotate(0deg);
    }

    #container.second {
        transform: rotate(-72deg);
    }

    #container.second div {
        transform: rotate(72deg);
    }

    #container.third {
        transform: rotate(-144deg);
    }

    #container.third div {
        transform: rotate(144deg);
    }

    #container.fourth {
        transform: rotate(-216deg);
    }

    #container.fourth div {
        transform: rotate(216deg);
    }

     #container.fifth {
        transform: rotate(-288deg);
    }

    #container.fifth div {
        transform: rotate(288deg);
    }

    #parent.first {
        transform: rotate(0deg);
    }

    #parent.first div {
        transform: rotate(0deg);
    }

    #parent.second {
        transform: rotate(-72deg);
    }

    #parent.second div {
        transform: rotate(72deg);
    }

    #parent.third {
        transform: rotate(-144deg);
    }

    #parent.third div {
        transform: rotate(144deg);
    }

    #parent.fourth {
        transform: rotate(-216deg);
    }

    #parent.fourth div {
        transform: rotate(216deg);
    }

     #parent.fifth {
        transform: rotate(-288deg);
    }

    #parent.fifth div {
        transform: rotate(288deg);
    }      
</style>