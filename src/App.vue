<template>
  <div id="app">
 
     
    <nav class="main-nav">
      <Burger></Burger>
    </nav>

    <Navbar>
      <ul class="sidebar-panel-nav">
        <li><router-link to="/"> Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/works">How it Works</router-link></li>
        <li><router-link to="/features">Features</router-link></li>
        <li><router-link to="/integrations">Integrations</router-link></li>
        <li id="earlyaccess" v-bind:style="{background: ' #b82be2',border:'1 px black',borderRadius:'10px 10px 10px 10px',
      fontSize: '15px',marginLeft:'20px',float:'left'}"><router-link to="/form">Early Access</router-link></li>
      </ul>
    </Navbar>
    
    <router-view></router-view>
  </div>
  
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Navbar from "./components/Menu/Navbar.vue";


export default {
  name: "app",
  components: {
    Burger,
    Navbar,
    
    
  },
  

};
</script>
<style>
html {
  height: 100%;
}

body {
  
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background:  rgb(0,8,16);
 
}



.main-nav {
  
  color:white;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
  width:100%

}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  margin-left:5px
  
}
ul.sidebar-panel-nav > li > a>earlyaccess {

  margin-left:20px
  
}
/* Responsive  */
@media screen and (max-width: 700px) {
  .ul>sidebar-panel-nav > li  {
    overflow-y:auto;
    width: 30px;
    display:block;
    height:30px
  }


}
</style>
