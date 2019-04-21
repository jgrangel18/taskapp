<template>
  <div>
      <form action="#">
          <div class="form-group">
              <label for="email">Email address:</label>
              <input v-model="user.email" type="email" class="form-control" id="email">
          </div>
          <div class="form-group">
              <label for="pwd">Password:</label>
              <input v-model="user.password" type="password" class="form-control" id="pwd">
          </div>
          <div class="form-group form-check">
              <label class="form-check-label">
              <input class="form-check-input" type="checkbox"> Remember me
              </label>
          </div>
          <button v-on:click.stop="validate()" type="submit" class="btn btn-primary">Submit</button>
          <br>
          <br>
          <div v-if="errproblem==true" >
          
            <div v-for="error in errors" v-bind="id">
              
              <li>
                  {{error}}

              </li>
              
            </div>
         
                        

          </div>



      </form>

  </div>
</template>
<script>

export default {

    props : [ "username" , "password"],
    data() {
      return {
        user: {
          email: '',
          password: '',
        },
        responsables:[],
        errors:[],
        errproblem:false
      }
    
    },
    watch: {
      username: function() {
        this.user.email = this.username;
      }
    },
    methods: {
      imprimir: function(){
        console.log  ( " email "  + this.user.email);
        console.log("usuario" + this.user.password);
        
        
      },
      element: function(parametro){
        let elem = document.getElementById(parametro);
        return elem;    
      },

      validate: function (){
        this.errproblem = false;  
        this.errors =  [];
        let pwderr = this.element ("pwd");
        let emailerr = this.element ('email');
        if (this.user.email == "") {
            
            this.errors.push("El campo del correo no puede estar vacio")

            console.log(emailerr);
            console.log("EL CORREO NO PUEDE SER VACIO");
            this.errproblem = true;
            document.getElementById("email").style.border = "1px solid red";  

        }
        else if (this.user.password == ""){
          
            console.log(pwderr);
            this.errors.push("El campo de la contrasenia no puede ser vacio")
            console.log("el campo de la contrasenia no puede ser vacio");
            this.errproblem = true;
            document.getElementById("pwd").style.border = "1px solid red";  
            
        }
        else {
          this.validate_password();

        }


      }

      ,
      validate_password:function (){

        let  find_responsable = [];
        let find_password = []; 
        find_responsable = this.responsables.find(responsable => responsable.email == this.user.email || responsable.password == this.user.password );
        find_password = this.responsables.find(responsable => responsable.email == this.user.email && responsable.password == this.user.password );
        if (find_responsable == undefined){
          this.errors.push("Su usuario no existe porfavor registrese");
          console.log("Su usuario no existe porfavor registrese");
          this.errproblem = true;  

        } 
        else if (find_password == undefined){
          this.errors.push("Brutalio ha escrito mal su contrasenia o usuario");
          console.log("Brutalio ha escrito mal su contrasenia o usuario");
          this.errproblem = true;  

        }
        console.log("ENCONTRE AL RESPONSABLES"+ find_responsable);
        console.log("ENCONTRE LA PASSS"+ find_password);
        
      },
      datauser: function (){
            //DECLARING MULTIPLE PROMISES AND FECTHING DATA!
            const responsablesPromise = fetch('./dataset/responsables.json');
            Promise
            //WAITING FOR ALL TO COMPLETE
            .all ([responsablesPromise])
            .then (responses => {
                //CONVERTING AL PROMISES INTO JSON  
                return Promise.all (responses.map (resp => resp.json() ))   

            })
            //FORMAT THE ANSWER TO GET MULTIPLE ARRAYS
            .then(respon => {
                console.log(respon);
                const [responsables] = respon.map(res => res);
                this.responsables = responsables;
                                
            })
            .catch ((err) => {
                console.log(err);
                })
        }
    },

    
    mounted() {
      console.log("Cargando Info del los users");

      this.datauser();

      //this.user.email = this.username;
    }

  
}
</script>


