let WorldCup = {
    data: function() {
        return {
            urlWorldCup: 'https://worldcup.sfg.io',
            group_teams: [],
            team_maches: [],
            fifa_code: ''
        };
    },
    watch: {

    },
    methods: {
        getGroupResults: function () {
            let self = this;

            axios.get(this.urlWorldCup+"/teams/group_results").then(function (result) {
                self.group_teams = result.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        getMatchesCountry: function (fifa_code) {
            let self = this;

            axios.get(this.urlWorldCup+"/matches/country?fifa_code="+fifa_code).then(function (result) {
                self.team_maches = result.data;
            }).catch(function (errors) {
                console.log(errors);
            });
        }
    }
};