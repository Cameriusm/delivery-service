<script>
import vLogin from "../../views/Login/vLogin";

export default [
  {
    path: "/login",
    name: "Login",
    component: vLogin,
    props: true,
    meta: {
      requiresVisitor: true,
    },
  },
];
</script>
