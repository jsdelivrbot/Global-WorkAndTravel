/*
 * Written by:  Saeed Ghiassy
 * File: main.js
 * 
 * Description:
 * This is a Custom Javascript file for both index and summery page
 * in order to pass data to server side NodeJS application as well as 
 * implementing table view for ng-Table             
 * 
 * 
 */

// Method to get current date
function today(){
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    document.getElementById("check").value = curr_date + "/" + curr_month + "/" + curr_year;
}

//Implementing onload function for "index.html" file
window.onload = function() {
  var submitButton = document.getElementById('showModalButton');
  submitButton.addEventListener('click', function(event) {
    document.getElementById('modalFirstName').value = document.getElementById('FirstName').value;
    document.getElementById('modalLastName').value = document.getElementById('LastName').value;
    document.getElementById('modalAge').value = document.getElementById('Age').value;
    document.getElementById('modalEmail').value = document.getElementById('Email').value;
    document.getElementById('modalCountry').value = document.getElementById('Country').value;
    document.getElementById('modalPhone').value = document.getElementById('Phone').value;
    document.getElementById('modalDate').value = document.getElementById('Date').value;
    
  });
};


///////////////////////////////////////////////////////////////////////////////
// This variable used by ng-Table to retive data from NodeJS file 
// And/Or sort and filter inputs for the table
///////////////////////////////////////////////////////////////////////////////

var app = angular.module('ngTableTutorial', ['ngTable']);
app.controller('tableController', function ($scope, $filter, ngTableParams) {

$scope.users = getJSON();
 
 $scope.usersTable = new ngTableParams({
                page: 1,
                count: 10
            }, {
                total: $scope.users.length, 
                getData: function ($defer, params) {
                   $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
                   $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                   $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                   $defer.resolve($scope.data);
                }
            });
 
            });
            

// Method to retund JSON out put from NodeJS server File
function getJSON()
{
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", 'http://127.0.0.1:3030/getNode', false);
    xhReq.send(null);
    return JSON.parse(xhReq.responseText);
}

