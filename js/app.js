import Vue from "vue";  
Vue.component('login-chamo', require('./login.vue'));
Vue.component('nav-bar', require('./navbar.vue'));

var tareas = new Vue({
    el: '#tarea',
    data: {
        tareas: [],
        tipo_tarea: [],
        responsables: [],
        restore_filters:[],
        prueba : "test",
        search:"",
        status_filtro:0,
        pass:"" ,
        username:""
    },
    methods: {
        upload: function (){
            //DECLARING MULTIPLE PROMISES AND FECTHING DATA!
            console.log("HOLAAAAA");
            const tareasPromise = fetch('./dataset/tareas.json');
            const responsablesPromise = fetch('./dataset/responsables.json');
            const tipo_tareaPromise = fetch('./dataset/tipo_tarea.json');
            Promise
            //WAITING FOR ALL TO COMPLETE
            .all ([tareasPromise, responsablesPromise, tipo_tareaPromise])
            .then (responses => {
                //CONVERTING AL PROMISES INTO JSON  
                return Promise.all (responses.map (resp => resp.json() ))   

            })
            //FORMAT THE ANSWER TO GET MULTIPLE ARRAYS
            .then(respon => {
                console.log(respon);
                const [tareas,responsables,tipo_tarea] = respon.map(res => res);
                this.tareas = tareas;
                this.responsables = responsables;
                this.tipo_tarea = tipo_tarea; 
                let self = this;
                self.username = self.responsables[0].username;                
            })
            .catch ((err) => {
                console.log(err);
                })
        }
    },
    
    mounted(){
            console.log("MONTA PRIMERO");
            this.upload();
        }
    
})