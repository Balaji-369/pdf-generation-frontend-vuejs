<template>
  <div class="hello">
    <h1>ThinkBig</h1>
    <form action="/action_page.js">
    
  <label for="fname">Enter Student Name:</label><br>
  <input type="text" id="fname" name="fname" value="Manoj"><br>
  <label for="lname">Enter ID:</label><br>
  <input type="text" id="lname" name="lname" value="20223"><br><br>
  <input type="submit" value="Submit">
</form> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
