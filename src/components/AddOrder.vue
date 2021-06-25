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
            <div v-if="orders" class="form-side-inner">
              <div v-for="(order, index) in orders" :key="order.title">
                <div class="order-title">{{ order.title }}</div>
                <div>{{ order.price }}</div>
                <div>Кол-во: {{ order.quantity }}</div>
                <!-- <div>{{ order.quantity }}</div> -->
                <button
                  v-on:click="deleteOrder(index)"
                  class="delete-order-button"
                >
                  x
                </button>
              </div>
            </div>
            <div v-if="!orders.length" class="form-side-inner">
              <div>
                <div>
                  <div class="empty-order-list">
                    Здесь появятся ваши позиции!
                  </div>
                </div>
              </div>
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
                  <div class="form-menu-price">
                    <div class="price-tag">{{ item.price }}</div>
                    <button v-on:click="addNewOrder(item)">
                      Добавить
                    </button>
                  </div>
                  <!-- <div>{{ item.desc }}</div> -->
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="form-current-orders"></div> -->
        </div>
        <div class="form-href-creator">
          <div class="form-href-buttons">
            <button
              class="add-new-order-button"
              v-on:click="addOrder"
              :disabled="!orders.length"
            >
              Добавить к заказу
            </button>
            <div v-if="price" class="purchase-price">
              Стоимость:
              <!-- <span v-if="price">{{ price }} ₽</span> -->
              <span>{{ price }} ₽</span>
            </div>
            <button class="receipt-button" v-on:click="redirectBill">
              Итоговый Чек
            </button>
          </div>
        </div>
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
  data() {
    return {
      orders: [],
      price: 0,
    };
  },
  watch: {
    orders: {
      deep: true,
      handler(newVal) {
        this.price = newVal.reduce(
          (acc, e) => +e.price.replace(/\D/g, '') * e.quantity + acc,
          0
        );
      },
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
    // console.log(this.$route);
    console.log(this.$route.params.id);
  },
  methods: {
    addNewOrder(item) {
      let isOrderExist = false;
      if (
        this.orders.filter((el) => {
          if (el.title === item.title) {
            isOrderExist = true;
            el.quantity++;
          }
        })
      )
        if (!isOrderExist) {
          this.orders.push({ ...item, quantity: 1 });
        }
    },
    deleteOrder(index) {
      this.orders.splice(index, 1);
    },
    addOrder() {
      console.log(this.orders);
      console.log(this.price);
    },
    redirectBill() {
      this.$router.push({
        path: `/orders/bill/${this.$route.params.id}`,
        params: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-new-order-button {
  margin-left: 25px;
}
.receipt-button {
  /* padding-left: auto; */
  /* margin-left: 150px; */
  margin-left: auto;
  margin-right: 25px;
  /* float:right; */
}
.purchase-price {
  margin-left: 25px;
  font-weight: 700;
  font-size: 20px;
  cursor: default;
  margin-top: 18px;
}
.form-href-buttons {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
}
.form-menu-orders-inside {
  padding: 10px;
}
.empty-order-list {
  text-align: center;
  font-weight: 500;
  font-size: 20px;
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

.price-tag {
  /* margin-bottom: 15px; */
  padding-bottom: 10px;
}
.form-menu-price button:hover {
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
}
.form-menu-price button {
  /* margin-top: 15px; */
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #5d34ec;
  border-radius: 3px;
  /* width: 200px;
  height: 40px; */
  /* height: 40px; */
  cursor: pointer;
  font-size: 14px;
  transition-duration: 0.25s;
}
.form-menu-price {
  align-self: flex-end;
  width: 75px;
  /* margin: 0 auto; */
  text-align: center;
  font-weight: 600;
  display: flex;
  height: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}
.form-menu-title {
  text-align: center;

  font-weight: 700;
  font-size: 18px;
}
.form-menu-img img {
  width: 75px;
  height: 75px;
  border-radius: 5px;
}
.form-menu-elems {
  margin: 10px 0px;

  display: flex;
}
.order-title {
  width: 60px;
}
.form-side-inner > div > div {
  font-size: 14px;
  /* margin-top: 10px; */
  /* height: auto; */
  text-align: left;
  margin-left: 5%;
  padding-bottom: 5px;
  margin-top: 5px;
  cursor: default;
}
.form-menu-orders > div > div {
  /* line-height: 50px; */
  text-align: center;
}
.form-side-inner > div {
  /* margin-top: 5px; */
  position: relative;
  /* z-index: -1; */
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  width: 80%;
  margin: 15px auto;

  height: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: rgb(108, 106, 219);
  /* background-color: rgb(77, 107, 206); */
}
.form-menu-orders > div {
  margin: 15px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin: 0 auto; */
  width: 95%;
  /* margin-left: 15px; */
  height: auto;
  border-radius: 5px;
  align-items: center;
  /* background-color: rgb(112, 110, 202); */
  background-image: linear-gradient(
    109.6deg,
    rgb(82, 112, 194) 11.2%,
    rgb(90, 50, 236) 100.2%
  );
  /* border: 1px solid black; */
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
}
.form-menu {
  display: flex;
}

.form-side-orders {
  overflow-y: scroll;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: rgb(66, 119, 180);
  /* border: 1px solid gray; */
  background-image: linear-gradient(
    109.6deg,
    rgb(82, 112, 194) 11.2%,
    rgb(65, 117, 196) 100.2%
  );
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  width: 200px;
  height: 350px;
}
.form-menu-orders {
  overflow-y: scroll;
  margin: 0 15px;
  border-radius: 5px;
  /* background-color: rgb(66, 93, 180);
   */
  background-image: linear-gradient(
    109.6deg,
    rgb(62, 109, 179) 11.2%,
    rgb(87, 55, 204) 100.2%
  );
  box-shadow: 0 20px 30px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
    0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
    0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  width: 100%;

  height: 350px;
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
  /* min-height: 95vh; */
  min-height: 92vh;
  /* padding-bottom: 75px; */
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
  padding-top: 30px;
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
  height: 40px;
  cursor: pointer;
  font-size: 15px;
  transition-duration: 0.25s;
}
.form-href-creator button:disabled:hover {
  background-color: rgb(192, 192, 192);
}
.form-href-creator button:disabled {
  background-color: rgb(192, 192, 192);
  cursor: initial;
}
.form-href-creator button:hover {
  background-color: #f5f7f9;
}
/* .form-href-creator button {
  
} */
.form-href-creator {
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  transition: background-image 1s ease-in-out;
  text-align: left;
}
.delete-order-button {
  width: 20px;
  height: 20px;
  /* background-color: rgb(106, 136, 219); */
  color: #5d34ec;
  background-color: white;
  border: 1px solid rgb(50, 120, 153);
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  top: 5%;
  right: 5%;
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
