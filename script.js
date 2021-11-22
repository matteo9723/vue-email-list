const app = new Vue({
  el: '#app',

  data:{
    mails:[],
    loading:true,
  },

  
  methods:{
    printMail(){
    
      for(let i = 0 ; i < 10 ; i++){
         
       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=> {
         
         

          let data = response.data;
          console.log(data);
          this.mails.push(data.response);      
          console.log(this.mails);
          
        })
        .catch((error)=> {
          
          console.log(error);
        });
      }; 
        
    }
  },
  
  mounted(){
    this.printMail();
  },

});