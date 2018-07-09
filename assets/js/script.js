Vue.component('v-select', VueSelect.VueSelect);


new Vue({
    el: '#worldcup',
    mixins: [WorldCup],
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