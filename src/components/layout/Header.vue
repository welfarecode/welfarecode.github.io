<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <div class="thumbnail">
        <router-link to="/" class="navbar-brand">
          <img src="../../assets/logo.png" width="80" height="80" alt="LOGO">
        </router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="ex">WELFARE-CODE</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/club/introduction" class="dropdown-item">CLUB INTRODUCTION</router-link>
              </li>
              <li>
                <router-link to="/club/value" class="dropdown-item">CLUB VALUE</router-link>
              </li>
              <li>
                <router-link to="/club/milestone" class="dropdown-item">CLUB MILESTONE</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <span class="ex">SERVICES</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/services/creditbot" class="dropdown-item">고교학점제 봇</router-link>
              </li>
              <li>
                <router-link to="/services/lunchon" class="dropdown-item">LUNCH-ON</router-link>
              </li>
              <li>
                <router-link to="/services/etc" class="dropdown-item">AND SO ON!</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/news" class="nav-item nav-link active">
              <span class="dropdown-none">NEWS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/member" class="nav-item nav-link active">
              <span class="dropdown-none">MEMBER</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<script>
  export default {
    name: 'navbar',
  };
</script>
<style>

  .nav-link:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5px;
    width: 0px;
    height: 3px;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
    opacity: 0;
    background-color: plum;
  }

  .nav-link:hover:after {
    width: 100%;
    opacity: 1;
  }

  .dropdown:hover>.dropdown-menu {
    display: block;
  }

  .container-fluid {
    z-index: 1;
    position: relative;
  }

  .navbar-nav>li {
    padding-right: 2rem;
    padding-left: 2rem;
    font-weight: 900;
  }

  .my-dropdown-toggle::after {
    content: none;
  }

  .thumbnail {
    margin-right: 18rem;
  }

   @media screen and (max-width: 959px) {
    .thumbnail {
        margin-right: 0rem;
    } 
  }
</style>
