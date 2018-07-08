import Worldcup from "./controllers/worldcup.controller";

Vue.component('v-select', VueSelect.VueSelect);

Vue.use(Worldcup);

new Vue({
    el: '#worldcup',
    data: {

    },
    watch: {

    },
    mounted: function () {
        this.getGroupResults();
    },
    methods: {
        //
    }
});