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

							var cell5 = row.insertCell(0);
							var cell2 = row.insertCell(1);
							var cell3 = row.insertCell(2);
							var cell4 = row.insertCell(3);
							var cell1 = row.insertCell(4);

							cell1.innerHTML = json[l].Title;
							cell2.innerHTML = json[l].Year;
							cell3.innerHTML = json[l].imdbID;
							cell4.innerHTML = json[l].Type;
							cell5.innerHTML = "<img src="+json[l].Poster+">";

							
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
  

