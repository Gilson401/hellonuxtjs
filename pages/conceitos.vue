<template>
  <div>
    <div class="container">
      <div class="base">
        base
      </div>

      <div class="base mod">
        <p>
          bm
        </p>
      </div>

      <div class="base mod box">
        bmb
      </div>
    </div>

    <div class="container" />
  
    <div class="border-2 bg-red-400">
      d1
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>

.container{
    
    width: 100vw;
    display : flex;
    flex-direction: row;

    height: 15rem;
border: 1px solid blue;
}
.base{
    height: 150px;
    width: 150px;
    background-color: grey;
    border: 1px solid red;
}

.mod {
    margin : 20px;
    padding: 20px;
}

.box{
    box-sizing: border-box;
}
</style>
