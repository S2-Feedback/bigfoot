const SpinnerService = that => {
  return that.$loading.show({
    // Optional parameters
    container: null,
    canCancel: false,
    lockscroll: true,
    height: 100,
    width: 100,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    loader: "spinner"
  });
};

export default SpinnerService;
