const UIService = {};
UIService.stopLadda = () => {
  setTimeout(function() {
    window.Ladda.stopAll();
  }, 100);
};
UIService.stopLoading = () => {
  UIService.stopLadda();
  window.NProgress.done();
  window.$('body').css('pointer-events', 'auto');
};

UIService.startLoading = () => {
  window.NProgress.start();
  window.$('body').css('pointer-events', 'none');
};
export default UIService;
