<template>
        <div class="header-wrapper">
        <header>
        <nav class="container">
            <div class="logo"> 
                <router-link class="logo_img" to="/"><i class="pi pi-prime" style="font-size: 2.3rem"></i></router-link> 
                <router-link class="header" to="/">Tendo</router-link>
            </div>
            <div class="nav-links">
                <ul v-if="!mobile">
                    <router-link class="link" to="/">Dashboard</router-link>
                    <router-link class="link" to="/link">Link</router-link>
                    <Button label="Sign Out" icon="pi pi-sign-out" iconPos="left" @click="logout"/>

                </ul>
            </div>
        </nav>
        <img v-if="mobile" @click="toggleMobileNav" class="menu-icon" src="../assets/burger_ico.svg" alt="burger">
        <transition name="slide-fade">
             <ul class="mobile-nav" v-if="mobileNav">
                <router-link class="link" to="/">Dashboard</router-link>
                <router-link class="link" to="/surveys">Surveys</router-link>
             </ul>
        </transition>
    </header>
    </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    components: {Button},
      data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen)
        this.checkScreen()
    },
    methods: {
        logout() {
          this.$store.dispatch('logout').then(() => {
            this.$router.push('/login')
          })
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return
            }
            this.mobile = false;
            this.mobileNav = false;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        
    },
    watch: {
    '$route' () {
      this.mobileNav = false
    }
  }
   
}
</script>

<style scoped>

.pi{
  /* color:#42b983; */
}
.mobile-nav{
  border-right: 7px solid #2196F3;
}
.p-button {
    color: #2196F3  !important;
    background: transparent !important;
    border:transparent !important;
    padding: 0;

}
.p-button-icon{
  margin-right: 10px;
}	
.logo .logo_img{
    /* color: #42b983; */
    margin-right: 10px;
    margin-top: 20px;
}
header {
  z-index: 999 !important;
  padding: 0 30px;
}
.header-wrapper{
width: 100%;
border-bottom:3px solid #a9a9a9;
}
header .link {
  font-weight: 500;
  margin: 0 8px;
  padding-bottom: 2px;
}
header .pi{
    line-height: 0 !important;
}
header nav {
  display: flex;
  padding: 10px 0;
}
header nav .logo {
  display: flex;
  align-items: center;
}
header nav .logo .header {
  font-weight: 600;
  font-size: 26px;
  color: #a9a9a9;
  text-decoration: none;
}
header nav .nav-links {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  
}

header nav .nav-links .active {
  border-bottom: 3px solid #2196F3;
}
header nav ul .link {
  margin-right: 32px;
  transition: color 0.3s;
}
header nav ul .link:hover{
    color:  #2196F3;
}
header nav ul .link:last-child {
  margin-left: 0;
}
header .menu-icon {
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 25px;
  height: 35px;
  width: auto;
}
header .mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #fff;
    top: -16px;
  left: 0;
  z-index: 999;
}
header .mobile-nav .active {
  color: #2196F3 !important;
}
header .mobile-nav .link {
  padding: 15px 0;
  color: #dbdbdb;
}
header .slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
header .slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
header .slide-fade-enter-from, header .slide-fade-leave-to {
  transform: translateX(-250px);
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #a9a9a9;
}
.link-light {
  color: #dbdbdb;
}
</style>