<template>
  <div class="home">
    <el-button v-ladda type="primary">{{a}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      a: 'Hello'
    };
  },
  methods: {
  },
  created() {
    window.toastr.success('abc');
  }
};
</script>
