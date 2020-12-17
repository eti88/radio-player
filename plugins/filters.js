import Vue from "vue";

Vue.filter("stripHtml", function (value) {
  return value.replace(/(<([^>]+)>)/gi, "");
});
