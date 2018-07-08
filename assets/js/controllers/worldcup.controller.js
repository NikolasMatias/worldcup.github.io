const Worldcup = {
    install(Vue, options) {
        Vue.mixin({
            data: function() {
                return {
                    urlWorldCup: 'https://worldcup.sfg.io',
                    group_teams: []
                };
            },
            watch: {

            },
            methods: {
                getGroupResults: function () {
                    let self = this;

                    axios.get(this.urlWorldCup).then(function (result) {
                        self.group_teams = result;
                    }).catch(function (errors) {
                        console.log(errors);
                    });
                }
            }
        });
    }
};

export default Worldcup;