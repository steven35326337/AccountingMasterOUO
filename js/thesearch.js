var fdb = new ForerunnerDB();
var db = fdb.db("8787");
var accountCollection = db.collection('account');
         accountCollection.load();
	   function cs (stuff,money){
	  	return "<tr><td>"+ stuff +"</td><td>"+ money +"</td></tr>"
	  }
	   $("#chaShuin").click(function(){
	   	$("#chaShuin").find("tr").remove();
	   	var account=accountCollection.find({
	   		date:{
	   			$gte:$("#date").val(),
	   			$lte:$("#date2").val()
	   		}
	   	}, {
	   		$orderBy:{date:-1},
        });
	   	for (var i = 0 ; i <account.length; i++){
	   		var stuff = account[i].stuff;
	   		var money = account[i].money;
	   		 $("#account").append(cs(stuff,money))
	   	};
	   });
       