const PopupService = {};
PopupService.success = (message) => {
  window.toastr.success(message);
};
PopupService.error = (message) => {
  window.toastr.error(message);
};
PopupService.info = (message) => {
  window.toastr.info(message);
};
export default PopupService;
