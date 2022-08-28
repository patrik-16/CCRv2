<template>

</template>

<script>

//import Vue from "vue";
//Vue.use(Dropdown);
//
//
//export default {
//  name: "Dropdown",
//    data() {
//      return {
//        options: [
//          { name: "Cat", id: "cat" },
//          { name: "Dog", id: "dog" },
//          { name: "Elephant", id: "elephant" },
//          { name: "Girafe", id: "girafe" },
//          { name: "Snake", id: "snake" },
//          { name: "Spider", id: "spider" },
//          { name: "Unicorn", id: "unicorn" }
//        ],
//
//        selected: { name: null, id: null }
//      };
//    },
//
//    methods: {
//      validateSelection(selection) {
//        this.selected = selection;
//        console.log(selection.name + " has been selected");
//      },
//
//      getDropdownValues(keyword) {
//        console.log("You could refresh options by querying the API with " + keyword);
//      }
//    }
//}


import Vue from "vue";

Vue.use(Dropdown);

export default {
  name: "Drop",
  // el: "#app2",

  data() {
    return {

      selected: { name: null, id: null }
    };
  },

  methods: {
    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.name + " has been selected");
    },

    getDropdownValues(keyword) {
      console.log("You could refresh options by querying the API with " + keyword);
    }
  }
}
</script>

<style scoped>

</style>
