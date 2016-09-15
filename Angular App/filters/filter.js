mod.filter('styleYear',function(){
    return(function(year){
      if(year<0)
          year=(year*-1)+"BC";
        else
            year=year+"AD";
        return year;
    });
});
 
mod.filter('pageFilter',function(){
    return(function(items,pages){
        var emps=[];
        for(var x in items){
            if(items[x].pages > pages)
                emps.push(items[x]);
        }
        return emps;
    });
    
}); 
