<script>
import vService from '../../views/Service/vService';

export default [
  {
    path: '/',
    name: 'Service',
    component: vService,
    meta: {
      requiresAuth: true,
    },
  },
];
</script>
