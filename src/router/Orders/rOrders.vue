<script>
import vOrders from '../../views/Orders/vOrders.vue';
import AddOrder from '../../components/AddOrder.vue';

export default [
  {
    path: '/orders',
    name: 'Orders',
    component: vOrders,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/add/:id',
        component: AddOrder,
      },
      // {
      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      //   path: 'posts',
      //   component: UserPosts
      // }
    ],
    // methods: {
    //   getRestaurants: function() {},
    // },
    // beforeMount() {
    //   this.getRestaurants();
    // },
  },
];
</script>
