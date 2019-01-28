var app = angular.module('appAngular',['ngRoute']);

//Definindo rotas
app.config(function($routeProvider){
    $routeProvider
        .when("/",{ 
            templateUrl: "views/home.html"
        })
        .when("/users/:id",{
            controller: "UserController",
            //template: "<h1>Bem vindo, {{nome}}</h1>"
            templateUrl: "views/sobre.html"
        })
        .when("/eventos",{
            controller: "EventosController",
            templateUrl: "views/eventos.html"
        })
        .otherwise({ redirectTo: "/"});
});

app.controller("UserController", function($scope, $routeParams){
    $scope.nome = $routeParams.id;
});

app.controller("EventosController", function($http){
    
    this.eventos = [];
    
    $http.get("http://localhost:3200/eventos")
        .then(
            response => this.eventos = response.data, 
            error =>alert("Erro: " + error)
        );
});