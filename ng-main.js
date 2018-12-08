var app = angular.module('myApp',[]);

app.controller('userCtrl',function($scope,$http){
    $http.get('https://reqres.in/api/users').then((res)=>{
        $scope.userData = res;
        $scope.totalUsers = $scope.userData.data.total;
        $scope.totalPages = $scope.userData.data.total_pages;  
        $scope.allUser =[];
        
        while($scope.totalPages>0){
            $http.get('https://reqres.in/api/users?page='+$scope.totalPages).then((data)=>{
                $scope.allUser.push(data.data);
            })
            $scope.totalPages--;
        }
    })
})

             