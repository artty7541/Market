<template>
  <div>
    <div >
      <nav class="navbar navbar-dark bg-secondary ">
        <router-link to="/" class="btn btn-lg btn-info">
          <i class="glyphicon glyphicon-dashboard pull-left"></i>
          <span>โต๊ะ A1<br /></span>
        </router-link>
        <div class="col">
          <router-link to="/other" type="button" class="btn btn-light">
          <img
            class="img5"
            src="../assets/bell.jpg"
            alt="table"
            style="width: 30px"
          />
        </router-link>
        </div>
<div >
        <router-link to="/details/market" type="button" class="btn btn-light">
          <img
            class="img5"
            src="../assets/shop.jpg"
            alt="table"
            style="width: 30px"
          />
        </router-link>
</div>
        
        
      </nav>
    </div>
    <hr />
    
  </div>
</template>
<style>
.button {
  color: aliceblue;
}
.button {
  background-color: #585757;
  border: none;
  color: rgb(0, 0, 0);
  padding: 50px 100px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 24px 10px;
  cursor: pointer;
}

input[type="text"]:focus {
  width: 97%;
}
input[type="text"] {
  width: 97%;
  box-sizing: border-box;
  border: 2px solid rgb(204, 204, 204);
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  margin-left: 10px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 24px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
.img5 {
  width: 50%;
  height: auto;
}
.h7 {
  background-color: black;
  color: rgb(145, 139, 139);
}
</style>
<script>
</script>
