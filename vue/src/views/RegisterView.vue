<template>
  <form class="register" @submit="register">
  <div class="surface-card p-4 shadow-2 border-round w-full ">
    <div class="text-center mb-5">
        <i class="pi pi-prime mb-3" style="font-size: 3rem"></i>
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Already have an account?</span>
        <router-link to="/login" class="font-medium no-underline ml-2 link_com cursor-pointer">Sign In</router-link>
    </div>

    <div>
        <label for="name" class="block text-900 font-medium mb-2">Full name</label>
        <InputText id="name" type="text" class="w-full mb-3" v-model="user.name"/>

        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="text" class="w-full mb-3" v-model="user.email"/>

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" type="password" class="w-full mb-3" v-model="user.password"/>

        <label for="password_confirmation" class="block text-900 font-medium mb-2">Password Confirmation</label>
        <InputText id="password_confirmation" type="password" class="w-full mb-3" v-model="user.password_confirmation"/>
        
        <div class="mb-6">
            <a class="font-medium no-underline link_com text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button label="Sign In" icon="pi pi-user" class="w-full"  type="submit"></Button>
    </div>
</div>
</form>
</template>

<script >
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  export default{
    components: {InputText,Button},
    data(){
      return {
        user: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        }
      }
    },
    methods: {
      register(ev){
        ev.preventDefault();
        this.$store
            .dispatch('register', this.user)
            .then(() => {
              this.$router.push('/')
            })
      }
    }
  }
  </script>

<style>
.register{
  max-width: 600px;
  margin: 0 auto;
  margin-top: 25px;
}
.register i{
  color:#2196F3;
}
</style>