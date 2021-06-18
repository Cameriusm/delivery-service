<template>
  <div>
    <AvailableRestaurants />
  </div>
</template>

<script>
import AvailableRestaurants from '../../components/AvailableRestaurants.vue';

export default {
  name: 'Login',
  data() {
    return {}; // isDisplayed: false;
  },
  props: {
    msg: String,
  },

  components: {
    // Restaurant,
    AvailableRestaurants,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
