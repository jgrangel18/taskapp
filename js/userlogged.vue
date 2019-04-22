<template>
    <h2>TEST SE LOGIO BRUTALIO</h2>
    
</template>


<script>

export default {
    props : [ "username" , "password"],
    data() {
      return {
        user: {
          email: '',
          password: '',
        }
      }
    
    },
    watch: {
      username: function() {
        this.user.email = this.username;
      }
    },
    methods: {

    },
        
    
    mounted() {
      console.log("Cargando Info del los users");

      this.datauser();

      //this.user.email = this.username;
    }

  
}
</script>
