var mainApp = angular.module("mainApp", []);

mainApp.controller('contactsController', function ($scope, $http) {
    $scope.contactList = [];
    $scope.contact = {};
    $http({
        method: 'GET',
        url: 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts'
    }).then(function successCallback(response) {
        $scope.contactList = response.data;
    }, function errorCallback(response) {
    });
    $scope.addContact = function () {
        $scope.newContact = true;
        $scope.contact = {};
    };
    $scope.saveContact = function () {
        var index = $scope.contactList.findIndex(x => x.id == $scope.contact.id);
        if (index != -1) {
            $scope.contactList[index] = $scope.contact;
        }
        else {
            $scope.contact.id = $scope.contactList.length + 1;
            $scope.contactList.push($scope.contact);
        }
        $scope.newContact = false;
    }
    $scope.updateContact = function (index) {
        $scope.newContact = true;
        $scope.contact = $scope.contactList[index];
    }
    $scope.deleteContact = function (contact) {
        var index = $scope.contactList.indexOf(contact);
        $scope.contactList.splice(index, 1);
    }
});