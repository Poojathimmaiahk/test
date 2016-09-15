mod.controller("dataController",function($scope){
    $scope.x="First data item";
    $scope.y="Second data item";
});

mod.controller("finalController",function($scope){
    $scope.current=[];
    $scope.places=['Mysore','Banglore','Chennai','Hassan'];
    $scope.games=['Chess','VideoGame','Tennis','cricket'];
    $scope.technologies=['JAVA','C++','ANGULAR JS','PHYTON'];
});