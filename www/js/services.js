(function(angular) {

    var app = angular.module('timesApp');

    app.service('Times', function($http) {

        this.getLeagues = function getLeagues() {
            var url = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=PREFIX+owl%3A+<http%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23>%0D%0APREFIX+xsd%3A+<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%0D%0APREFIX+rdfs%3A+<http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23>%0D%0APREFIX+rdf%3A+<http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23>%0D%0APREFIX+foaf%3A+<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%0D%0APREFIX+dc%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F>%0D%0APREFIX+%3A+<http%3A%2F%2Fdbpedia.org%2Fresource%2F>%0D%0APREFIX+dbpedia2%3A+<http%3A%2F%2Fdbpedia.org%2Fproperty%2F>%0D%0APREFIX+dbpedia%3A+<http%3A%2F%2Fdbpedia.org%2F>%0D%0APREFIX+skos%3A+<http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23>%0D%0APREFIX+dbpediaO%3A+<http%3A%2F%2Fdbpedia.org%2Fontology%2F>%0D%0A%0D%0ASELECT+%3Fnomecampeonato+%3Fbrazao+%3FnumeroDeTimes+%3FPaisNome+WHERE+%7B%0D%0A+++%3FCampeonato+a+dbo%3ASoccerLeague.%0D%0A+++%3FCampeonato+rdfs%3Alabel+%3Fnomecampeonato.%0D%0A+++OPTIONAL+%7B+%3FCampeonato+foaf%3Adepiction+%3Fbrazao+%7D%0D%0A+++FILTER+%28lang%28%3Fnomecampeonato%29+%3D+%27pt%27%29%0D%0A+++OPTIONAL+%7B%3FCampeonato+dbo%3AnumberOfTeams+%3FnumeroDeTimes%7D%0D%0A+++OPTIONAL+%7B%3FCampeonato+dbo%3Acountry+%3FPais.+%3FPais+dbp%3AcommonName+%3FPaisNome%7D%0D%0A+++FILTER+%28%3Fnomecampeonato+like+%27Campeonato+Italiano+de+Futebol%27+%7C%7C+%0D%0A+++++++++++%3Fnomecampeonato+like+%27Campeonato+Brasileiro+de+Futebol%27+%7C%7C+%0D%0A+++++++++++%3Fnomecampeonato+like+%27La+Liga%27+%7C%7C+%0D%0A+++++++++++%3Fnomecampeonato+like+%27Premier+League%27+%7C%7C%0D%0A+++++++++++%3Fnomecampeonato+like+%27Bundesliga%27+%7C%7C%0D%0A+++++++++++%3Fnomecampeonato+like+%27Primeira+Liga%27+%29%0D%0A%7D&output=json&callback=JSON_CALLBACK";
            return $http.jsonp(url);
        };

        this.getTeams = function getTeams(leagueName) {
            var url  = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=PREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%0D%0APREFIX+dbpedia2%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbpedia%3A+%3Chttp%3A%2F%2Fdbpedia.org%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+dbpediaO%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2F%3E%0D%0A%0D%0ASELECT+%3FBody+%3Fnome+WHERE+%7B%0D%0A+++%3FBody+a+dbpediaO%3ASoccerClub.%0D%0A+++%3FBody+dbpedia2%3Aclubname+%3Fnome.%0D%0A+++%3FBody+dbo%3Aleague+%3Fcampeonato.%0D%0A+++%3Fcampeonato+a+dbo%3ASoccerLeague.%0D%0A+++%3Fcampeonato+rdfs%3Alabel+%3Fnomecampeonato%0D%0A+++FILTER+%28lang%28%3Fnomecampeonato%29+%3D+%27pt%27%29%0D%0A+++FILTER+%28%3Fnomecampeonato+like+%27<NOMECAMPEONATO>%27%29%0D%0A%7D&output=json&callback=JSON_CALLBACK"
                .replace('<NOMECAMPEONATO>', encodeURIComponent(leagueName));

            return $http.jsonp(url);
        };

        this.getTeam = function getTeam(leagueName, teamName) {
            var url  = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=PREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%0D%0APREFIX+dbpedia2%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbpedia%3A+%3Chttp%3A%2F%2Fdbpedia.org%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+dbpediaO%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2F%3E%0D%0A%0D%0ASELECT+%3FBody+%3Fnome+%3Fescudo+%3Fnometecnico+%3Fsite+%3Fdescricao+WHERE+%7B%0D%0A+++%3FBody+a+dbpediaO%3ASoccerClub.%0D%0A+++%3FBody+dbpedia2%3Aclubname+%3Fnome.%0D%0A+++OPTIONAL+%7B+%3FBody+foaf%3Adepiction+%3Fescudo.+%7D%0D%0A+++OPTIONAL+%7B+%3FBody+dbo%3Amanager+%3Ftecnico.+%3Ftecnico+dbp%3Afullname+%3Fnometecnico.+%7D%0D%0A+++OPTIONAL+%7B+%3FBody+dbo%3Aabstract+%3Fdescricao%0D%0A+++FILTER+%28lang%28%3Fdescricao%29+%3D+%27pt%27%29%7D%0D%0A+++OPTIONAL+%7B+%3FBody+dbp%3Awebsite+%3Fsite+%7D%0D%0A+++%3FBody+dbo%3Aleague+%3Fcampeonato.%0D%0A+++%3Fcampeonato+a+dbo%3ASoccerLeague.%0D%0A+++%3Fcampeonato+rdfs%3Alabel+%3Fnomecampeonato%0D%0A+++FILTER+%28lang%28%3Fnomecampeonato%29+%3D+%27pt%27%29%0D%0A+++FILTER+%28%3Fnomecampeonato+like+%27<NOMECAMPEONATO>%27%29%0D%0A+++FILTER+%28%3Fnome+like+%27<NOMETIME>%27%29%0D%0A%7D&output=json"
                .replace('<NOMECAMPEONATO>', encodeURIComponent(leagueName))
                .replace('<NOMETIME>', encodeURIComponent(teamName));

            return $http.get(url);
        };

    });

})(angular);