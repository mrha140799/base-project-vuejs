import Navigations from '../../assets/json/Navigation';
export default {
  name: 'DefaultContainer',
  data() {
    return {
      navigations: Navigations,
      isChangeSideBarSize: false
    };
  },
  methods: {
    changeSideBarSize() {
      console.log(this.isChangeSideBarSize);
      this.isChangeSideBarSize = !this.isChangeSideBarSize;
    }
  },
  mounted() {
  }
};
