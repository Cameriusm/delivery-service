<template>
  <div class="availables-restaurants-main">
    <div class="available-restaurants">
      <div class="form">
        <div class="restaurant-title">
          <!-- <h1>"Restaurant"</h1> -->
          <h1>{{ menuTitle }}</h1>
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

          <div v-if="menuList" class="form-menu-orders" id="style-4">
            <div v-for="item in menuList" :key="item.name">
              <div class="form-menu-orders-inside">
                <div class="form-menu-title">
                  <p>{{ item.title }}</p>
                </div>
                <div class="form-menu-elems">
                  <div class="form-menu-img">
                    <img v-bind:src="item.img" alt="" />
                  </div>
                  <div class="form-menu-desc">{{ item.desc }}</div>
                  <div class="form-menu-price">{{ item.price }}</div>
                  <!-- <div>{{ item.desc }}</div> -->
                </div>
              </div>
            </div>
          </div>
          <!-- <div
              v-on:click="selectRestaurant(order.restaurant.id)"
              v-for="order in ordersList"
              :key="order.name"
            >
              <div class="form-menu-title">
                <p>{{ order.restaurant.menu }}</p>
              </div>
            </div> -->
          <!-- <div>
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

            -->

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
// import { mapActions, mapState } from 'vuex';
import { mapState } from 'vuex';
export default {
  name: 'AddOrder',
  props: {
    id: {
      type: Number,
    },
  },
  computed: mapState({
    menuList: function(state) {
      return state.restaurants.ordersList[this.$route.params.id - 1].restaurant
        .menu;
    },
    menuTitle: function(state) {
      return state.restaurants.ordersList[this.$route.params.id - 1].restaurant
        .name;
    },
    // ordersList: (state) => state.restaurants.ordersList,
  }),
  beforeMount() {
    console.log(this.$route);
    console.log(this.$route.params.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-menu-orders-inside {
  margin: 10px;
}

.form-menu-desc {
  width: 325px;
  /* display: flex;
  align-items: center; */
  /* line-height: 22px; */
  padding-top: 3%;
  /* height: auto; */

  display: flex;
  /* align-items: center; */
  height: 50px;
  font-size: 14px;

  margin: 0 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  /* margin-bottom: 10px; */
}

.form-menu-price {
  width: 75px;
  /* margin: 0 auto; */
  text-align: center;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}
.form-menu-title {
  text-align: left;
  /* width: 80%; */
  margin-left: 10%;
  /* text-align: center; */
  font-weight: 700;
  font-size: 18px;
}
.form-menu-img img {
  width: 75px;
  height: 75px;
  border-radius: 5px;
}
.form-menu-elems {
  width: 85%;
  /* margin-left: 10%; */
  margin: 10px 0;
  margin-left: 10%;
  /* margin-right: 5%; */
  display: flex;
  /* justify-content: center; */
  /* margin: 0 auto; */
}

.form-side-inner > div > div {
  cursor: pointer;
  line-height: 50px;
  text-align: left;
  margin-left: 15%;
}
.form-menu-orders > div > div {
  /* line-height: 50px; */
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
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  width: 100%;
  height: 400px;
}
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
  min-height: 100vh;
  padding-bottom: 75px;
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
.form-href-creator button {
  margin-left: 15px;
}
.form-href-creator {
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  transition: background-image 1s ease-in-out;
  text-align: left;
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
</style>
