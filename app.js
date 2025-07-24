const app = Vue.createApp({
  data() {
    return{

      url: "https://www.thenetninja.co.uk",
      showBook: false,
      books:[
      {title: 'name of the wind', author: 'patric rothfuss', img: 'assets/1.jpg', isFav: true},
      {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
      {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true},
      {title: 'the final empire',  author: 'brandon sanderson', img: 'assets/3.jpg', isFav: false},
      ]
    }
  },


  methods: {
    toggleShowBook(){
      this.showBook = !this.showBook
    },

    toggleisFav(book){
      book.isFav = !book.isFav
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
