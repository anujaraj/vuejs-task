<template>

<div id="access" v-bind:style="{background: '#001020',height: '100%',marginTop:'150px',
      fontSize: '13px', transition: '20s'}">

    <p  v-bind:style="{fontFamily:'cursive',textAlign:'center',
      fontSize: '30px', transition: '20s',color:'white'}">Early Access </p>  

<div class="container">
    
    <div class="row" v-bind:style="{fontFamily:'cursive',textAlign:'center',color:'white'}">
      <div class="col">
        <p  v-bind:style="{fontSize: '25px'}">Request for early access!</p> 
 <p  v-bind:style="{ fontSize: '20px'}">
Be the first ones to try it out</p> 
      </div>
    </div>
    <div class="row">  
      <div class="col-55" v-bind:style="{fontFamily:'cursive',textAlign:'center',
      fontSize: '30px', width:'600px',height:'70px',background:'white',marginTop:'7px',marginLeft:'40px'}">
        <input  type="text" placeholder="email address">
      </div>
      <div class="col-10">
        <input type="submit" value="Request">
      </div>
    </div>


</div>
</div>

</template>

<script>

export default {
 name  : 'access',


}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  padding: 2px;
  margin: 2px;
  resize: vertical;
  
  box-shadow: 0 8px 16px rgb(169,43,226);
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  font-size:20px;
  background-color: rgb(204,0,170);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  width:400px;
  height:70px;
  margin-left:40px;
  margin-top:'70px'
   
}

input[type=submit]:hover {
  box-shadow: 0 2px 4px rgb(169,43,226);
}
.row {
  margin-top:10px;
  padding: 10px;
  font-family: cursive;
  font-size:15px;
  text-align: center;
  background-color: #b82be2;
  color:white;
  margin:15px;
  height:170px;
   border-radius: 10px 10px 10px 10px;
}
.row:hover {
   box-shadow: 0 8px 16px rgb(169,43,226);
}

.container {
  border-radius: 5px;
  background-color: #001020;
  padding: 20px;
  color:white;
}

.col-25 {
  float: left;
  width : 25%;
  margin-top: 6px;
}

.col-55 {
  float: left; 
  border-radius: 5px;

}
.col-10 {
  float: left; 
  margin-top: 6px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit],input[type=text] {
    width: 100%;
    margin-top: 0;
    height : 300px

  }
}

</style>