var obj={};
var l=1;
$(document).ready(function(){
    $(".abc").click(function(){

    	var title=$(".textClass").val();
        $.ajax({
        	type:'GET',
        	url: 'http://www.omdbapi.com/?s='+title,	
        	dataType:'json',
        	success: function(jsonData)
        	{
        			obj=JSON.stringify(jsonData);
        			var json=$.parseJSON(obj);
        			json=json.Search;
            		$(json).each(function(i,val){
            		$.each(val,function(k,v){
            			if(l!=json.length)
            			{
		            		var table = document.getElementById("myTable");
		            		var row = table.insertRow(l);

							var cell1 = row.insertCell(0);
							var cell2 = row.insertCell(1);
							

							cell2.innerHTML = "Name : "+json[l].Title+"<br> Year : "+json[l].Year+"<br> imdbID : "+json[l].imdbID+"<br> Type : "+json[l].Type;
                        
							cell1.innerHTML = "<img src="+json[l].Poster+">";

							
							l=l+1;
						}
            		
            		});
            		});
        	},
        	error: function()
        	{
        			alert('Error in Loading');
        	}
        });
            
  
    });
  });
  

