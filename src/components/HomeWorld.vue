<template>
  <div>
    <Header></Header>
    <div id="home">
        {{ info }} {{user}}
        <b-button variant="primary"  @click="doLogout" size="lg">Logout</b-button>
        <br/>mapState: {{name}}
        <br/>
        <b-button variant="primary"  @click="aumenta" size="lg">Increase</b-button>
    </div>
  </div>
</template>
<script>
  import {  mapActions, mapGetters, mapState } from 'vuex'
  import Header from '@/components/Header.vue'
  export default {
    name: 'home', 
    components: {
      Header
    },  
    data () {
      return {
        info: 'You are have been login and this is Home Page'
      }
    },
    created(){
      console.log('mapGetters: ',this.user);
      console.log('mapState: ',this.name);
      console.log('Token: ',this.$store.state.login.token);
      this.$store.commit('test');
    },
    computed : {
      ...mapGetters('login',{
        user:'USER'
      }),
      ...mapState({
        name: state => state.login.user
      })
    },
    methods: {
      ...mapActions('login', {
        logout: 'logout'
      }),
      ...mapActions('count',{
        aumenta:'increase'
      }),
      reset() {
        this.$refs.form.reset();
      },
      doLogout() {
        this.logout();
      }
    },
  }
</script>