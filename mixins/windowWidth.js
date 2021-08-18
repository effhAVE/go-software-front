export default {
  data() {
    return {
      windowInnerWidth: null,
    };
  },

  methods: {
    handleWindowWidthChange() {
      this.windowInnerWidth = window.innerWidth;
    },
  },

  beforeMount() {
    this.handleWindowWidthChange();
    window.addEventListener("resize", this.handleWindowWidthChange);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowWidthChange);
  },
};
