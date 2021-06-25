<script>
import vOrders from "../../views/Orders/vOrders.vue";
import AddOrder from "../../components/AddOrder.vue";
import AvailableRestaurants from "../../components/AvailableRestaurants";
import Bill from "../../components/Bill";

export default [
  {
    path: "/orders",
    // name: 'Orders',
    component: vOrders,
    meta: {
      requiresAuth: true,
    },

    children: [
      {
        path: "",
        component: AvailableRestaurants,
      },
      {
        path: "add/:id",
        component: AddOrder,
      },
      {
        path: "bill/:id",
        component: Bill,
      },
    ],
  },
  // {
  //   path: '/orders/',
  //   component: AvailableRestaurants,
  // },
  // {
  //   path: '/orders/add:id',
  //   component: AddOrder,
  // },
];
</script>
