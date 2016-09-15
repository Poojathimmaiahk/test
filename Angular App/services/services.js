mod.service("shareService",function(){
    this.name="initial value";
    this.update="update name";
    this.setName=function(name)
    {this.name=name;
    }
});

mod.service("empService",function(){
    this.employees=[];
   this.addEmployee=function(x){
       this.employees.push(x);
   }
    
});

mod.service("playerService",function(){
    this.next=function(name)
    {this.name=name;}
    
}