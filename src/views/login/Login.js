import ValidatorService from '../../service/ValidatorService';
import UIService from '../../service/UIService';
import PopupService from '../../service/PopupService';

export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        account: '',
        password: ''
      },
      userValid: {
        account: [ValidatorService.required],
        password: [ValidatorService.required]
      }
    };
  },
  methods: {
    async submitLogin() {
      this.$refs.loginForm.validate(async(valid) => {
        if (valid) {
          UIService.startLoading();
          PopupService.success('Logged in successfully');
          this.$router.push('/admin');
          UIService.stopLoading();
        } else {
          UIService.stopLoading();
        }
      });
    }
  }
};
