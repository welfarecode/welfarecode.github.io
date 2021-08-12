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
              E-MAIL : 20095@galmae.hs.kr<br>
              <span class="full-text">
                ANOTHER WEBSITE : <a href="https://www.notion.so/welfarecode/Welfare-Code" class="notion">
                  https://www.notion.so/welfarecode/Welfare-Code</a>
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
        <a class="text-dark" href="https://team-welfarecode.github.io/" target="_blank">WELFARE-CODE</a>
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
      text-decoration: none;
    }

    .short-text {
      display: none;
    }

    /* 작은 화면일 때 푸터에 웹사이트 주소 대신 'NOTION'으로 표기 */

    @media(max-width: 600px) {

      .full-text {
        display: none;
      }

      .short-text {
        display: inline-block;
      }
    }
</style>