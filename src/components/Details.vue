<template>
  <div class="container">
    <div class="text-left p-1 m-2 ">
      <router-link to="" class="text-decoration-none d-flex"
        ><img
          src="../assets//kraprow.jpg"
          class="imge1 img-fluid rounded"
          alt="table"
        />
      </router-link>
    </div>
    <br />
    <br />
    <div class="">
      <h5 class="text-decoration-none text-dark" style="font-size: 25px ">
        กะเพราหมูสับไข่ดาว
      </h5>
      <div class="" style="padding: 5px; position: relative; top: px; left: 30px d-flex">
        <p class="text-dark d-flex">฿ 60</p>
   
       
					
      </div>
      <hr />
    </div>
    <div class="">
      <h5
        class="text-decoration-none text-dark ;"
        style="
          padding: 5px;
          position: relative;
          top: px;
          left: 30px;
          font-size: 20px;
        "
      >
        เนื้อสัตว์
      </h5>
      <div>
       
<label class="container1 d-flex">หมู   
    <h8 class="container2">+ ฿ 0</h8>
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
<label class="container1 d-flex">กุ่ง
    <h8 class="container2">+ ฿ 10</h8>
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
<label class="container1 d-flex">ปลาหมึก
    <h8 class="container3">+ ฿ 10</h8>
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
<label class="container1 d-flex">ทะเล
    <h8 class="container4">+ ฿ 10</h8>
  <input type="checkbox">
  <span class="checkmark"></span>
</label>

      </div>
      <hr />
    </div>
    <div class="container">
  <form>
    <div class="form-group">
      <label for="comment">หมายเหตุ</label>
      <div style="padding: 5px; position: relative; top: px; left: 25px">
      <p class="text-secondary" style="left: 30px; "> ใส่รายละเอียดเพิ่มเติม</p>
      </div>
      <textarea class="form-control" rows="5" id="comment"></textarea>
    </div>
  </form>
  <br>
</div>
    
  <div class="container">
<router-link to="/details/market" type="button" class="btn btn-info btn-lg btn-block">เพิ่มใส่ตระกล้า</router-link>
<br>
  </div >
  </div>
</template>

<script>
export default {};
</script>

<style>

.imge1 {
  width: 70%;
  height: 70%;
  margin-left: 15%;
}

/* The container */
.container1 {
  display: block;
  position: relative;
  padding-left: 90px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container2 {
  padding-left: 70px;
  margin-bottom: 12px;
  font-size: 15px;
  
}
.container3 {
  padding-left: 32px;
  margin-bottom: 12px;
  font-size: 15px;
  
}
.container4 {
  padding-left: 55px;
  margin-bottom: 12px;
  font-size: 15px;
  
}
/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 50px;
  height: 22px;
  width: 22px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>