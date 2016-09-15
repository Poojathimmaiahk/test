var controller=mod.controller("FirstController",function($scope,$rootScope)
{
$scope.greeting="hi...info is sent from controller";
    $scope.global="this is not global";
    $rootScope.global="this is  accessible to everywhere in the prgm";
     $scope.newvariable="this is my new variable";
    $rootScope.newvariable="new variable is global "
});

/*two way data binding change in controller reflects in view ,change in view reflects in controller*/

var test2=mod.controller("formcontroller",function($scope)
    {
        $scope.name="pooja";
        $scope.test=$scope.name;
        $scope.$watch(function(){
            $scope.test=$scope.name; 
        });

                         
     });

var validator=mod.controller("validator",function($scope,empService)
     {
    $scope.emp={eno:'',name:'', age:'',email :''};
    $scope.errors={eno:'',name:'', age:'',email :''};
    
    $scope.validate=function(){
        
        $scope.errors={eno:'',name:'', age:'',email :''};
        if($scope.emp.eno.length==0)
            $scope.errors.eno="eno cannot be empty";
        
        if($scope.emp.name.length==0)
            $scope.errors.name="name cannot be empty";
        
        if($scope.emp.age.length==0)
            $scope.errors.age="age cannot be empty";
        
        if($scope.emp.email.length==0)
            $scope.errors.email="email cannot be empty";
        if($scope.errors.eno.length==0&&$scope.errors.name.length==0&&$scope.errors.age.length==0&&$scope.errors.email.length==0)
        {   var temp={
            eno:$scope.emp.eno,
            name:$scope.emp.name,
            age:$scope.emp.age,
            email:$scope.emp.email
        };
            empService.addEmployee(temp);
            console.log("Employee is added");
        
        }
    }
});

mod.controller("report",function($scope,empService){
    $scope.getEmployees=function(){
        $scope.emp=empService.employees;
        /*for(var x in emp){
            console.log(emp[x].eno+" "+emp[x].name);
        }*/
    }
});

mod.controller("repeat",function($scope){
    $scope.menu=['Information technology','Energy','Health care','Phrama','Entertainment'];
});

mod.controller("bookController",function($scope,$http){
     $http.get("data/books.json")
    .then(function(response) {
        $scope.books= response.data;
    });
    
    
});

mod.controller("playercontroller",function($scope,$hhtp){
     $http.get("data/batsmen.json")
    .then(function(response) {
        $scope.player= response.data;
         $scope.current=0;
         $scope.now=$scope.player[$scope.current];
         $scope.next=function()
         {
            if($scope.current==0
               $scope.current==(scope.player.length-1)
            else
                $scope.current++;
         }
            
          $scope.previous=function()
         {
            if($scope.current==0)
               $scope.current==(scope.player.length-1)
            else
                $scope.current--;
         }
         }
    });
}
               
               
               
               