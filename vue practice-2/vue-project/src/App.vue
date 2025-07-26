<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>

</template>

<script>
export default {
  data() {
    return {
      title: 'my first vue app'
    }
  },
  methods:{
    handleClick(){
      // Logs the actual DOM element (the input field) to the browser console
      console.log(this.$refs.name);
      
      // Adds a CSS class called 'active' to the input element
      // This can be used for styling (like changing border color, background, etc.)
      this.$refs.name.classList.add('active')
      
      // Puts the cursor focus on the input field
      // This makes the input field active so user can immediately type
      this.$refs.name.focus()
      
    }
  }
}
</script>

<style >
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

/* Styles for when the input has the 'active' class */
input.active {
  border: 2px solid blue;
  background-color: #f0f8ff;
  outline: none;
}

/* Basic input styling */
input {
  padding: 8px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
