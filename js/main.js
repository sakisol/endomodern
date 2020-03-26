var app = new Vue({
  el: "#app",
  data: {
    view: "home",
    pageIndex: 0
  },
  methods: {
    changeView(page) {
      this.view = page; //change to indicated page id name
      window.scrollTo(0, 0); //go to the top of the page
    }
  }
}); //end of methods
