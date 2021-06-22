<template>
  <div class="availables-restaurants-main">
    <div class="available-restaurants">
      <div class="form">
        <div class="restaurant-title">
          <h1>Чек - "Restaurant" - "Creator name"</h1>
        </div>
        <div class="form-menu">
          <div class="form-menu-user-order">
            <div>
              "Name"
            </div>
            <div>
              "Number"
            </div>
            <div>
              "Address"
            </div>
            <div>
              "Price"
            </div>
          </div>
          <div class="form-menu-user-order">
            <div>
              "Name"
            </div>
            <div>
              "Number"
            </div>
            <div>
              "Address"
            </div>
            <div>
              "Price"
            </div>
          </div>
          <div class="form-menu-user-order">
            <div>
              "Name"
            </div>
            <div>
              "Number"
            </div>
            <div>
              "Address"
            </div>
            <div>
              "Price"
            </div>
          </div>
        </div>
        <div class="form-href-creator">
          <div class="form-href-buttons">
            <button>Оплатить заказ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantMenu',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-menu-user-order > div {
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center;
  font-weight: 700;
  /* height: 100px; */
  /* line-height: 100%; */
  /* text-align: center; */
  flex-direction: row;
  /* background-image: linear-gradient(
    109.6deg,
    rgb(104, 138, 184) 11.2%,
    rgb(101, 75, 196) 100.2%
  ); */
  /* align-items: center; */
  width: 100px;
  height: 80%;
  margin: 0 25px;
  border-radius: 15px;
  text-align: center;
  background-color: rgb(107, 142, 219);
}
.form-menu-user-order {
  /* margin: 25px 0; */
  margin: 25px auto;
  vertical-align: middle;
  /* width: 90%; */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 60px;
  background-image: linear-gradient(
    109.6deg,
    rgb(76, 126, 190) 11.2%,
    rgb(101, 75, 196) 100.2%
  );

  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  /* border: 1px solid black; */
  /* background: red; */
  border-radius: 15px;
}
#style-4::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

#style-4::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

#style-4::-webkit-scrollbar-thumb {
  background-color: #393f77;
  border: 2px solid #384279;
}

#style-7::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}
#style-7::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

#style-7::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148))
  );
}

.restaurant-title {
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  /* background-color: rgb(91, 66, 180); */
}

.availables-restaurants-main {
  background-image: linear-gradient(
    109.6deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgb(90, 50, 236) 100.2%
  );
  height: 100vh;
}
.form {
  /* background-color: rgb(39, 75, 160); */
  background-image: linear-gradient(
    109.6deg,
    rgb(62, 136, 179) 11.2%,
    rgb(87, 55, 204) 100.2%
  );
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  border-radius: 15px;

  color: white;
  padding: 20px;
  width: 60%;
  height: auto;
  margin: 0 auto 0 auto;
}
.available-restaurants {
  padding-top: 125px;
  margin: 0 auto 0 auto;
}

.form-href-creator button {
  appearance: none;
  margin-top: 10px;
  /* margin: 0 auto; */
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #5d34ec;
  border-radius: 3px;
  width: 150px;
  cursor: pointer;
  font-size: 15px;
  transition-duration: 0.25s;
}
.form-href-creator button:hover {
  background-color: #f5f7f9;
}
/* .form-href button:hover {
  background-color: #f5f7f9;
} */
.form-href-buttons {
  width: 190px;
  margin: 0 auto;
}
.form-href-creator button {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-image 1s ease-in-out;
  text-align: center;
}
</style>
