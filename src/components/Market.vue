<template>
    <div>
        <div class="container">
     
        <h5 class="text-decoration-none text-dark">รายการอาหารที่สั่ง</h5>
        <br>
        
        <div class=" text-left card p-1 m-2">
          <router-link to="" class="text-decoration-none  d-flex"
            ><img
              src="../assets//kraprow.jpg"
              class="imge img-fluid  rounded"
              alt="table"
              
            />
            <div style="padding: 10px ; position : relative ; top:5px ">
            <p class="text-dark"> กะเพราหมูสับไข่ดาว</p>
            <h5 class="text-dark">฿ 60</h5>
            </div>
     
           

          </router-link>
          
        </div>
     
   
      
        <div class=" text-left card p-1 m-2">
          <router-link to="" class="text-decoration-none d-flex"
            ><img
              src="../assets/fried-rice.jpg"
              class="imge img-fluid  rounded"
              alt="table"
              
            />
            <div style="padding: 10px ; position : relative ; top:5px ">
            <p class="text-dark">
              ข้าวผัด
            </p>
                       

            <h5 class="text-dark">฿ 60</h5>
            </div>
             

          </router-link>
          
        </div>
      

      
       
        <div class=" text-left card p-1 m-2">
         
          <router-link to="" class="text-decoration-none d-flex"
            ><img
              src="../assets/PT1.jpg"
              class="imge img-fluid  rounded"
              alt="table"
              
            />
            <div style="padding: 10px ; position : relative ; top:5px ">
            <p class="text-dark">
              ผัดไทย
            </p>
 
            <h5 class="text-dark">฿ 60</h5>
              
            </div> 
        
         


          </router-link>
         
        </div>
        <br>
        <br>
        <hr/>
        
      <div class="container">
      <div class="d-flex" >
          <p>
              3 รายการ
          </p>
          <h5 style="padding-left:160px">
              ฿ 180
          </h5>
      </div>
<router-link to="/other" type="button" class="btn btn-info btn-lg btn-block">สั่งอาหาร 3 รายการ</router-link>
<br>
  </div >
    </div>
    </div>
</template>
<script>


</script>

<style>

.imge1 {
  width: 70%;
  height: 70%;
  margin-left: 15%;
}
.close {
    vertical-align: middle;
    border: none;
    color: inherit;
    border-radius: 50%;
    background: transparent;
    position: relative;
    width: 32px;
    height: 32px;
    opacity: 0.6;
}
.close:focus,
.close:hover {
    opacity: 1;
    background: rgba(128, 128, 128, 0.5);
}
.close:active {
    background: rgba(128, 128, 128, 0.9);
}
/* tines of the X */
.close::before,
.close::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    width: 4px;
    background-color: currentColor;
}
.close::before {
    transform: translate(-50%, -50%) rotate(45deg);
}
.close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
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