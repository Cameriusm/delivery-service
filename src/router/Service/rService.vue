<script>
import vService from '../../views/Service/vService';

export default [
  {
    path: '/',
    name: 'Service',
    component: vService,
    props: true,
    meta: {
      requiresAuth: true,
    },
    // methods: {
    //   getRestaurants: function() {},
    // },
    // beforeMount() {
    //   this.getRestaurants();
    // },
  },
];
</script>
