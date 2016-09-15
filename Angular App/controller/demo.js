mod.controller("alpha",function($scope){
    $scope.one="text field1";
    $scope.two="text field2";
});

mod.controller("beta",function($scope){
    $scope.two="text field-beta1";
    $scope.three="text field-beta2";
});
mod.controller("one",function($scope,shareService){
    $scope.name=shareService.name;
     $scope.update=shareService.update;
    $scope.setName=function(){
        shareService.setName($scope.name);
        $scope.after=shareService.name;
    }
});
mod.controller("two",function($scope,shareService,$interval){
    $scope.name=shareService.name;
    $interval(function(){
        $scope.name=shareService.name;
    },1000);
});

