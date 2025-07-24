const app = Vue.createApp({
  data() {
    return{
      showBook: false,
      title: 'the final empire',
      author: 'Raj maharjan',
      age: 22,
      x: 0,
      y: 0

    }
  },
  // methods: {
  //   changeTitle(title) {
  //     this.title = title
  //   }
  // }

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
