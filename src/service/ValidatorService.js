const ValidatorService = {};
ValidatorService.required = {
  required: true,
  message: 'Required',
  trigger: 'blur'
};
ValidatorService.requiredChange = {
  required: true,
  message: 'Required',
  trigger: 'change'
};
ValidatorService.checkAz = {
  pattern: /^[a-zA-Z]+$/g,
  message: 'incorrect',
  trigger: 'blur'
};
export default ValidatorService;
