<template>
    <header class="header-area header-default sticky-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-7 col-sm-4 col-md-4 col-lg-2">
                <div class="header-logo-area">
                    <router-link to="/">
                        <img class="logo-main" height="55" src="../assets/logo.png" alt="Logo" />
                        <img class="logo-light" height="55" src="../assets/logo.png" alt="Logo" />
                    </router-link>
                </div>
                </div>
                <div class="col-5 col-sm-8 col-md-8 col-lg-10">
                <div class="header-align">
                    <div class="header-navigation-area navigation-style-two">
                    <ul class="main-menu nav justify-content-center">
                        <li><router-link to="/" active-class="active">Home</router-link></li>
                        <li><router-link to="/about-us" active-class="active">About Us</router-link></li>
                        <li><router-link to="/contact-us" active-class="active">Contact Us</router-link></li>
                    </ul>
                    </div>
                    <div class="header-action-area">
                        <button class="btn-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <a class="btn-theme btn-two" href="#/">Create A Post</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>