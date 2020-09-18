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
      <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
        <button class="c-header-toggler ml-0 c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
          <i class="cil-menu"></i>
        </button>
      </header>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'DefaultContainer',
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
