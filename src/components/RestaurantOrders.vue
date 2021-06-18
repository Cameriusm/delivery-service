<template>
  <div class="availables-restaurants-main">
    <div class="available-restaurants">
      <div class="form">
        <div class="restaurant-title">
          <h1>"Restaurant"</h1>
        </div>
        <div class="form-menu">
          <div class="form-side-orders" id="style-4">
            <div class="form-side-inner">
              <div class="first-order"><div>"Order"</div></div>
              <div><div>"Order"</div></div>
              <div><div>"Order"</div></div>
              <div><div>"Order"</div></div>
              <div><div>"Order"</div></div>
              <div><div>"Order"</div></div>
              <div><div>"Order"</div></div>
            </div>
          </div>
          <div class="form-menu-orders" id="style-4">
            <div>
              <div class="form-menu-title">
                <p>"Menu Item"</p>
              </div>
              <div class="form-menu-elems">
                <p>"Image"</p>
                <p>"Description"</p>
                <p>"Price"</p>
                <p>"Quantity"</p>
              </div>
            </div>

            <div>
              <div class="form-menu-title">
                <p>"Menu Item"</p>
              </div>
              <div class="form-menu-elems">
                <p>"Image"</p>
                <p>"Description"</p>
                <p>"Price"</p>
                <p>"Quantity"</p>
              </div>
            </div>
            <div>
              <div class="form-menu-title">
                <p>"Menu Item"</p>
              </div>
              <div class="form-menu-elems">
                <p>"Image"</p>
                <p>"Description"</p>
                <p>"Price"</p>
                <p>"Quantity"</p>
              </div>
            </div>
            <div>
              <div class="form-menu-title">
                <p>"Menu Item"</p>
              </div>
              <div class="form-menu-elems">
                <p>"Image"</p>
                <p>"Description"</p>
                <p>"Price"</p>
                <p>"Quantity"</p>
              </div>
            </div>
            <div>
              <div class="form-menu-title">
                <p>"Menu Item"</p>
              </div>
              <div class="form-menu-elems">
                <p>"Image"</p>
                <p>"Description"</p>
                <p>"Price"</p>
                <p>"Quantity"</p>
              </div>
            </div>
            <div>
              <div class="form-menu-title">
                <p>"Menu Item"</p>
              </div>
              <div class="form-menu-elems">
                <p>"Image"</p>
                <p>"Description"</p>
                <p>"Price"</p>
                <p>"Quantity"</p>
              </div>
            </div>
          </div>
          <!-- <div class="form-current-orders"></div> -->
        </div>
        <div class="form-href-creator">
          <div class="form-href-buttons">
            <button>Добавить заказ</button>
          </div>
        </div>

        <!-- <div class="form-href">
          <p>"название"</p>
          <p>"описание"</p>
          <p>"цена"</p>
          <p>"img url"</p>
        </div> -->
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
.form-menu-elems {
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
}
.form-menu-elems p {
  margin: 0 25px;
}

.form-side-inner > div > div {
  cursor: pointer;
  line-height: 50px;
  text-align: left;
  margin-left: 15%;
}
.form-menu-orders > div > div {
  line-height: 50px;
  text-align: center;
}
.form-menu-orders > div {
  margin: 15px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin: 0 auto; */
  width: 90%;
  /* margin-left: 15px; */
  height: auto;
  border-radius: 5px;
  align-items: center;
  background-color: rgb(97, 95, 199);
  /* border: 1px solid black; */
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
}
.form-side-inner > div {
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  width: 80%;
  margin: 10px auto;
  height: 50px;
  border-radius: 5px;

  background-color: rgb(108, 106, 219);
  /* background-color: rgb(77, 107, 206); */
}
.form-menu {
  display: flex;
}

.form-side-orders {
  overflow-y: scroll;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: rgb(66, 93, 180);
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  width: 200px;
  height: 400px;
}
.form-menu-orders {
  overflow-y: scroll;
  margin: 0 15px;
  border-radius: 5px;
  background-color: rgb(66, 93, 180);
  /* background-color: rgb(91, 66, 180); */
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  /* background-image: linear-gradient(
    109.6deg,
    rgb(91, 66, 180) 11.2%,
    rgb(90, 50, 236) 100.2%
  ); */

  width: 100%;
  height: 400px;
}
/*
.form-current-orders {
  border-radius: 5px;
  margin: 0 25px;
  background-color: rgb(91, 66, 180);
  width: 150px;
  height: 500px;
}*/
.restaurant-title {
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  /* background-color: rgb(91, 66, 180); */
}
.delete-button p {
  cursor: pointer;
  align-items: center;
  border-radius: 5px;
  width: auto;
  text-align: center;
  height: auto;
  background-color: rgb(152, 171, 236);
}
.delete-button {
  cursor: pointer;
  align-items: center;
  border-radius: 5px;
  /* width: 20px; */
  text-align: center;

  background-color: rgb(152, 171, 236);
}
.form-href-header {
  justify-content: space-between;
  display: flex;
}

.form-href-credentials {
  text-align: left;
  padding: 10px;
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
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #5d34ec;
  border-radius: 3px;
  width: 190px;
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
.form-href-creator button {
  margin-left: 15px;
}
.form-href-creator {
  cursor: pointer;
  /* margin: 20px auto 20px auto; */
  padding: 10px;
  border-radius: 15px;
  /* width: 80%; */
  /* background-image: linear-gradient(
    109.6deg,
    rgb(73, 143, 184) 11.2%,
    rgb(91, 61, 199) 100.2%
  ); */
  /* background-color: rgb(54, 125, 184); */
  margin-top: 10px;
  transition: background-image 1s ease-in-out;
  text-align: left;
}
/* .form-href {
}
.form-href p {
  margin: 0 5px;
} */
/* .form-href:hover {
  transition: background-image 1s ease-in-out;
  transition-duration: 0.55s;
  background-image: linear-gradient(
    109.6deg,
    rgb(91, 61, 199) 11.2%,
    rgb(73, 143, 184) 100.2%
  );
  background-image: linear-gradient(
    109.6deg,
    rgb(78, 153, 197) 11.2%,
    rgb(110, 79, 221) 100.2%
  );
  background: rgba(122, 212, 240, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
} */
</style>
