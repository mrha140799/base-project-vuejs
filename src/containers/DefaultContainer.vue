<template>
  <div>
    <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div class="c-sidebar-brand d-lg-down-none">
        <img src="../assets/logo.png">
      </div>
      <ul class="c-sidebar-nav">
      </ul>
      <button class="c-sidebar-minimizer c-class-toggler" id="button_mini_size_sidebar" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
    </div>
    <div class="c-wrapper c-fixed-components">
      <HeaderContainer/>
    </div>
  </div>
</template>

<script>
  import HeaderContainer from './HeaderContainer';
export default {
  name: 'DefaultContainer',
  components: { HeaderContainer },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
  .c-sidebar {
    .c-sidebar-brand {
      img {
        width: auto;
        height: 35px;
        left: 40%;
      }
    }
  }
</style>
