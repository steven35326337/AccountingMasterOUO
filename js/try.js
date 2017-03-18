var fdb = new ForerunnerDB();
var db = fdb.db("8787");
var accountCollection = db.collection('account');
	  


         accountCollection.load();
	   function cs (stuff,money){
	  	return "<tr class='danger'><td>"+ stuff +"</td><td>"+ money +"</td></tr>"
	  }
	  

	   setTimeout(function(){
	   	var account=accountCollection.find(
         {},
         {$orderBy:{date:-1},
         }
	    );

	   	for (var i = 0 ; i <account.length; i++){
	   		var date = account[i].date;
	   		var stuff = account[i].stuff;
	   		var money = account[i].money;
	   		 $("#account").append(cs(stuff,money))

	   	};
	
	   } ,500);
       