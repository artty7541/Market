<template>
    <div>
        <div>
      <div class="container-fluid">
        <form>
          <input type="text" name="search" placeholder="Search.." />
        </form>
        
      </div>

     
    </div>
    <hr />
    <br />

    <div class="container">
     
        <h5 class="text-decoration-none text-dark">รายการอาหาร </h5>
        
        <div class=" text-left card p-1 m-2">
          <router-link to="/details" class="text-decoration-none  d-flex"
            ><img
              src="../assets//kraprow.jpg"
              class="imge img-fluid  rounded"
              alt="table"
              
            />
            <div style="padding: 10px ; position : relative ; top:5px ">
            <p class="text-dark"> กะเพราหมูสับไข่ดาว</p>
            <p class="text-secondary">รายละเอียด</p>
            <h5 class="text-dark">฿ 60</h5>
            </div>
          </router-link>
          
        </div>
     
   
      
        <div class=" text-left card p-1 m-2">
          <router-link to="/details" class="text-decoration-none d-flex"
            ><img
              src="../assets/fried-rice.jpg"
              class="imge img-fluid  rounded"
              alt="table"
              
            />
            <div style="padding: 10px ; position : relative ; top:5px ">
            <p class="text-dark">
              ข้าวผัด
            </p>
                        <p class="text-secondary"> รายละเอียด</p>

            <h5 class="text-dark">฿ 60</h5>
            </div>
          </router-link>
          
        </div>
      

      
       
        <div class=" text-left card p-1 m-2">
          <router-link to="/details" class="text-decoration-none d-flex"
            ><img
              src="../assets/PT1.jpg"
              class="imge img-fluid  rounded"
              alt="table"
              
            />
            <div style="padding: 10px ; position : relative ; top:5px ">
            <p class="text-dark">
              ผัดไทย
            </p>
                        <p class="text-secondary">  รายละเอียด</p>

            <h5 class="text-dark">฿ 60</h5>
            </div>
          </router-link>
         
        </div>
     
    </div>
    
   
    </div>

</template>
<style >
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
  border: 2px solid #ccc;
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
.imge {
  width: 160px;
  height: 60px;
}
.h7 {
  background-color: black;
  color: rgb(145, 139, 139);
}

</style>