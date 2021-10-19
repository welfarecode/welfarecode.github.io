<template>
    <div class="footer-container">
    <footer class="bg-light text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase"><strong>연락처</strong></h5>

            <p>
              PHONE NUMBER : 010-2078-9868<br>
              <a href="mailto:20095@galmae.hs.kr" class="email">E-MAIL : 20095@galmae.hs.kr</a><br>
              <span class="full-text">
                ANOTHER WEBSITE : <a href="https://www.notion.so/welfarecode/Welfare-Code" class="notion">
                  WELFARECODE/NOTION</a>
              </span>
              <span class="short-text">
                ANOTHER WEBSITE : <a href="https://www.notion.so/welfarecode/Welfare-Code" class="notion">
                  NOTION</a>
              </span>

            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase"><strong>sponser</strong></h5>

            <p>
              갈매고등학교 <br>
              <strong>김기태 선생님</strong> <br>
              동현그룹<br>
            </p>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(255, 255, 255, 0.103);">
        © There is no Copyright:
        WELFARE-CODE
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>
<script>

export default {
    
}
</script>
<style>

  .footer-container {
      padding-top: 2rem;
    }

    .notion {
      font-weight: 700;
      text-decoration: none;
      color: plum;
    }

    .notion:hover {
      color: skyblue;
    }

    .email {
      text-decoration: none;
      color: black;
    }

    .email:hover {
      color: gray;
    }

    .short-text {
      display: none;
    }

    .full-text {
      text-decoration: none;
    }

    /* 작은 화면일 때 푸터에 웹사이트 주소 대신 'NOTION'으로 표기 */

    @media(max-width: 600px) {
      

      .full-text {
        display: none;
        color: #000;
      }

      .short-text {
        display: inline-block;
      }
    }
</style>