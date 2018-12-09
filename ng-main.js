var app = angular.module('myApp',['angularUtils.directives.dirPagination']);

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

app.controller('tableCtrl',function($scope,$http){
    $http.get('https://cors.io/?http://dummy.restapiexample.com/api/v1/employees').then((res)=>{
        $scope.tableData = res;
    })

    $scope.limitData = 10;
    $scope.sortColum = "employee_name";
    $scope.reverseSort = false;

    $scope.sortData = function(data){
        console.log(data)
        $scope.reverseSort = ($scope.sortColum == data) ? !$scope.reverseSort : false;
        $scope.sortColum = data;
    }

    $scope.getSortClass = function(data){
        if($scope.sortColum == data){
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }

        return '';
    } 

    // $scope.removeData = function(data){
    //     $http.delete('http://dummy.restapiexample.com/api/v1/delete/'+data).then((res)=>{
    //         alert(res.data.text);
    //     })
    // }
})


             