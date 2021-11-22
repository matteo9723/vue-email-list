const app = new Vue({
  el: '#app',

  data:{
    mails:[],
    loading:true,
    text:'loading....'
  },

  
  methods:{
    printMail(){
    
      for(let i = 0 ; i < 10 ; i++){
         
       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=> {
         
          let data = response.data;
          this.mails.push(data.response);      
          if(this.mails.length==10){
            this.loading=false;
            console.log(this.mails);
          }
          
        })
        .catch((error)=> {
          
          this.text='error';
        });
      }; 
        
    }
  },
  
  mounted(){
    this.printMail();
  },

});