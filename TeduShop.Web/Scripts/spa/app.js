/// <reference path="../plugins/angular/angular.js" />

var myApp = angular.module("myModule", []);
myApp.controller("schoolController", schoolController);
myApp.service('Validator',Validator) ;


studentController.$inject = ['$scope','Validator'];

function schoolController($scope, Validator)
{
   
    $scope.checkNumber = function ()
    {
        $scope.message = Validator.checkNumber($scope.num);
    }

    $scope.num = 1;
}

function Validator($window)
{
    return {
            checkNumber: _checkNumber
           }

    function _checkNumber(input)
    {
        if(input % 2==0)
        {
            return 'This is event';
        }
        else        
            return 'This is odd' ;  
    }
}

