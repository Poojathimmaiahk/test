mod.directive("myDirective",function(){
    return{
        restrict: "M",
        replace: true,
        template: "<H1> hey my directive is working</H1>"
    };
}); 


mod.directive("templateLoad",function(){
    return {
        restrict:"E",
        replace:true,
        templateUrl:"template.html",
        scope:{
        x:'@',
        y:'@'
    },
        link:function(scope){
            alert("this  function is working");
            scope.x="x scope set by template Load";
            scope.y="y scope set bt template Load";
        }
};
});

mod.directive("customList",function(){
    return {
        restrict:"E",
        templateUrl:"listTemplate.html",
        scope:{
        title:'=',
        listname:'@',
        current:'='
    },
        link:function(scope){
            scope.title=scope.listname+"List";
            if(scope.listname=='places')
                scope.current=scope.places;
            else if(scope.listname=='games')
                scope.current=scope.games;
            else if(scope.listname=='technologies')
                scope.current=scope.technologies;
        }
};
});