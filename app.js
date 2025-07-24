const app = Vue.createApp({
  data() {
    return{
      showBook: false,
      books:[
      {title: 'name of the wind', author: 'patric hero'},
      {title: 'name of the air', author: 'patric hero'},
      {title: 'name of the wildd', author: 'patric hero'},
      {title: 'hello of the widow', author: 'patric hero'},
      ]
    }
  },


  methods: {
    toggleShowBook(){
      this.showBook = !this.showBook
    },

    handleEvent(event,data) {
    console.log(event,event.type )
    if(data){
      console.log(data)
      
    }
    },

    handleMouseMove(e) {
     this.x = e.offsetX
     this.y = e.offsetY
      
    }
  }

  
});

app.mount("#app");
