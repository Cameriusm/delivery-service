<script>
import vRegister from '../../views/Register/vRegister';

export default [
  {
    path: '/register',
    name: 'Register',
    component: vRegister,
    meta: {
      requiresVisitor: true,
    },
  },
];
</script>
