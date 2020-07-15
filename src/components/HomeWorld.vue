<template>
    <div id="home">
         {{ info }} {{user}}
         <b-button variant="primary"  @click="doLogout" size="lg">Logout</b-button>
         <br/>mapState: {{name}}
         <br/>
         <b-button variant="primary"  @click="aumenta" size="lg">Logout</b-button>
  </div>
    
</template><script>
import {  mapActions, mapGetters, mapState } from 'vuex'
export default {
   name: 'home',   
   data () {
    return {
      info: 'You are have been login and this is Home Page'
    }
  },
  created(){
    console.log('mapGetters: ',this.user);
    console.log('mapState: ',this.name);
    this.$store.commit('teste');
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