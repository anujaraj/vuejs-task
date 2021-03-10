<template>

<div id="features" v-bind:style="{background: '#001020',height: '490px',marginTop:'150px',
      fontSize: '13px', transition: '20s'}">

    <p  v-bind:style="{fontFamily:'cursive',textAlign:'center',
      fontSize: '30px', transition: '20s',color:'white'}">Features</p>  

<div class="row">
  <div class="column">
    <div class="card">
      <h3>Built for collaboration</h3>
      <p>Bring your team on one platform - get insights to take product decisions faster.</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>App type agnostic</h3>
      <p>Test all kinds of mobile apps- native, hybrid, android, iOS.</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Framework independent</h3>
      <p>No need for creating and maintaining multiple frameworks for varied test cases.</p>
      
    </div>
  </div>

</div>
<div class="row">
  <div class="column">
    <div class="card">
      <h3>Interactive testing</h3>
      <p>Create test cases on the go while browsing through the app.</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Effortless bug reporting</h3>
      <p>Automated bug reports integrated to your project management and CI/CD tools</p>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>All Black-Box testing</h3>
      <p>No source code analysis. All forms of Black-box testing is handled at one place.</p>
    
    </div>
  </div>

</div>

</div>

</template>

<script>

export default {
 name  : 'work',


}
</script>

<style scoped>

 {
  box-sizing: border-box;
}

body {
  font-family: cursive;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding:  10px;
  margin-left:70px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }


}

/* Style the counter cards */
.card {
  box-shadow:  4px 8px  rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-family: cursive;
  font-size:15px;
  text-align: center;
  background-color: #b82be2;
  color:white;
  margin-left:15px;
   border-radius: 10px 10px 10px 10px;
}
.card:hover {
  box-shadow: 0 8px 16px rgb(169,43,226);
}
</style>


