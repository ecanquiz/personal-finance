<template>
  <div id="example1">
  <slot class="myslot"></slot>    
  </div>
</template>

<style scoped> 
#example1 {
  position: relative;
  height: 75vh;
  background-image: linear-gradient(rgba(0,0,0,0) 20%, rgba(0,0,0,100) 80%), url(../../assets/images/voy.webp);  
  background-size: cover;  
  /*background-position: right bottom, left top;*/
  background-repeat: no-repeat;
  padding: 0px;
  width: 100vh;
  color: white;  
    text-align: center;
    justify-content: center;
}

.myslot {
  position: absolute;
  bottom: 0;
}
</style>
