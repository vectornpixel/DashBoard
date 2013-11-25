
//these will be some sort of login/auth credentials
var adminId ='1111';
var token ='pwpwpwppwpw';

//if deploying to production then want glassfish url, else if working local then use localhost
//var baseURL = "http://glassfish-lb-862187038.us-east-1.elb.amazonaws.com/BigNoiseRest/admin/";
//var appBaseURL = "http://glassfish-lb-862187038.us-east-1.elb.amazonaws.com/BigNoiseRest/";
//var baseURL = "http://localhost:8080/BigNoiseRest/admin/";
var baseURL = "http://54.227.240.28:8080/BigNoizAdminGen/Contests/Add";    	
alert('url');
function loadEmUp()
{
	getAllContests();
}

//this function will be called if an error occurs on the server side
function CallbackError(data) {
	alert(data);
}

function submitContest2() {
        var tag='';
        var numWinners='';
        var numTickets='';
    	var concertName ='';
    	var jambaseArtistId ='';
    	var jambaseConcertId ='';
    	var jambaseVenueId  ='';
    	var androidBGImageURL ='';
    	var iphoneBGImageURL ='';
    	var smallImageURL = '';
    	var location ='';
    	var latitude ='';
    	var longitude ='';
    	var concertDate ='';
    	var startDate ='';
    	var endDate ='';
    	var description ='';
    	var description2 ='';
    	var legalDetailsURL ='';
    	var legalDetailsText ='';
    	var interval = 5;
    	var contentLabel ='';
    	var contentIconURL = '';
    	var sponsorId ='';
    	var contestdescriptionheader ='';
    	var contestdescriptionimage = '';
    	var prizeValue='';
    	//get field values
		tag=$("#tag_txt").val();
		numWinners=$("#numWinners_txt").val();
		numTickets=$("#numTickets_txt").val();
    	contestdescriptionheader=$("#contestdescriptionheader_txt").val();
    	contestdescriptionimage=$("#contestdescriptionimage_txt").val();
   	
    	concertName = $("#concertName_txt").val();
    	jambaseArtistId = $("#jambaseArtistId_txt").val();
    	jambaseConcertId = $("#jambaseConcertId_txt").val();
    	jambaseVenueId  = $("#jambaseVenueId_txt").val();
    	location = $("#location_txt").val();
    	latitude = $("#latitude_txt").val();
    	longitude = $("#longitude_txt").val();
    	concertDate = $("#concertDate_txt").val();
    	startDate = $("#startDate_txt").val();
    	endDate = $("#endDate_txt").val();
    	description = $("#description_txt").val();
    	description2 = $("#description2_txt").val();
    	legalDetailsURL = $("#legalDetailsURL_txt").val();
    	legalDetailsText = $("#legalDetailsText_txt").val();
    	interval = $("#interval_txt").val();
    	contentLabel = $("#contentLabel_txt").val();
    	contentIconURL = $("#contentIconURL_txt").val();
    	sponsorId = $("#sponsorId_txt").val();
    	prizeValue = $("#prizeValue_txt").val();
    	
    	//get image urls
    	var i = 0; 
    	$('.files').children('a').each(function () {
    		if(i == 0)
    		{
    			iphoneBGImageURL = this.href;
    			i++;
    		}
    		else if(i == 1)
    		{
    			androidBGImageURL = this.href;
    			i++;
    		}
    		else if(i == 2)
    		{
    			smallImageURL = this.href;
    		}
    	});
    	//alert("submitContest(): "+baseURL);
    	var urlcall = baseURL;
    	urlcall += "Contests/Add?";
    	urlcall += "adminId="+adminId;
    	urlcall += "&token="+token;
    	urlcall += "&concertName="+concertName;
    	urlcall += "&jambaseArtistId="+jambaseArtistId;
    	urlcall += "&jambaseConcertId="+jambaseConcertId;
    	urlcall += "&jambaseVenueId="+jambaseVenueId;
    	urlcall += "&location="+location;
    	urlcall += "&concertlatitude="+latitude;
    	urlcall += "&concertlongitude="+longitude;
    	urlcall += "&concertDate="+concertDate;
    	urlcall += "&conteststartdate="+startDate;
    	urlcall += "&contestenddate="+endDate;
    	urlcall += "&contestdescription="+description;
    	urlcall += "&contestdescription2="+description2;
    	urlcall += "&contestlegaldetailsurl="+legalDetailsURL;
    	urlcall += "&contestlegaldetailstext="+legalDetailsText;
    	urlcall += "&interval="+interval;
    	urlcall += "&contentLabel="+contentLabel;
    	urlcall += "&contentIconURL="+contentIconURL;
    	urlcall += "&sponsorId="+sponsorId;
    	urlcall += "&concertbigimageurlIphone="+iphoneBGImageURL;
    	urlcall += "&androidBGImageURL="+androidBGImageURL;
    	urlcall += "&concertsmallimageurl="+smallImageURL;
    	urlcall += "&tag="+tag;
    	urlcall += "&numWinners="+numWinners;
    	urlcall += "&numTickets="+numTickets;
    	urlcall += "&contestdescriptionheader="+contestdescriptionheader;
    	urlcall += "&contestdescriptionimage="+contestdescriptionimage;
    	urlcall += "&prizeValue="+prizeValue;
    
/*    	
    	urlcall += "Contests/Add?";
    	urlcall += "adminId="+adminId;
    	urlcall += "&token="+token;
    	urlcall += "&concertName="+concertName;
    	urlcall += "&jambaseArtistId="+jambaseArtistId;
    	urlcall += "&jambaseConcertId="+jambaseConcertId;
    	urlcall += "&jambaseVenueId="+jambaseVenueId;
    	urlcall += "&location="+location;
    	urlcall += "&latitude="+latitude;
    	urlcall += "&longitude="+longitude;
    	urlcall += "&concertDate="+concertDate;
    	urlcall += "&startDate="+startDate;
    	urlcall += "&endDate="+endDate;
    	urlcall += "&description="+description;
    	urlcall += "&description2="+description2;
    	urlcall += "&legalDetailsURL="+legalDetailsURL;
    	urlcall += "&legalDetailsText="+legalDetailsText;
    	urlcall += "&interval="+interval;
    	urlcall += "&contentLabel="+contentLabel;
    	urlcall += "&contentIconURL="+contentIconURL;
    	urlcall += "&sponsorId="+sponsorId;
    	urlcall += "&iphoneBGImageURL="+iphoneBGImageURL;
    	urlcall += "&androidBGImageURL="+androidBGImageURL;
    	urlcall += "&smallImageURL="+smallImageURL;
    	alert("about to GET: "+urlcall);
    	*/
    	$.ajax({ 
    		   type: "GET",
    		   dataType: "jsonp",
    		   url: urlcall,
    		   contentType: 'application/json',
    		      success: function (data, status) {
                          alert('workding');
    		        var res = eval(data);
    		        var newContestId = res[0].result;  //result is the new contest id. if == 0 then must have errored
    		        alert("new contest id: "+newContestId);
    		      }
    		});
    		
    }
    
	
    
    function getAllContests() {
    	
    	var urlcall = baseURL;
    	urlcall += "contests?";
    	urlcall += "adminId="+adminId;
    	urlcall += "&token="+token;
    	
    	/*$.getJSON(urlcall+"&callback=?",function(data){ 
    		var res = eval(data);
		    //code here
    	});*/
    	
    	$.ajax({ 
 		   type: "GET",
 		   dataType: "jsonp",
 		   url: urlcall,
 		   contentType: 'application/json',
 		   success: function (data) {
 		        var res = eval(data);
 		        var output = "";
 		        for(var i=0; i< res.length; i++)
 		        	{
 		        		output += "ContestId: "+res[i].ContestId+" <a onclick='removeContest(\""+res[i].ContestId+"\")' style='color:red'>[remove]</a><br>";
 		        		output += "ConcertName: "+res[i].ConcertName+"<br>";
 		        		output += "ConcertBigImageURL_Android: "+res[i].ConcertBigImageURL_Android+"<br>";
 		        		output += "ConcertBigImageURL_Iphone: "+res[i].ConcertBigImageURL_Iphone+"<br>";
 		        		output += "ConcertSmallImageURL: "+res[i].ConcertSmallImageURL+"<br>";
 		        		output += "ConcertLocation: "+res[i].ConcertLocation+"<br>";
 		        		output += "ContestStartDate: "+res[i].ContestStartDate+"<br>";
 		        		output += "ContestEndDate: "+res[i].ContestEndDate+"<br>";
 		        		output += "CurrentlyRunning: "+res[i].CurrentlyRunning+"<br><br>";
 		        		
 		        	}
 		         $("#contestsList_div").html(output);
 		      }
 		});
 		
    }

  //only a skeleton for kw 
    function getContestDetails(contestId)
    {
    	var urlcall = baseURL;
    	urlcall += "/contests/details?";
    	urlcall += "&contestId="+contestId;
    	urlcall += "adminId="+adminId;
    	urlcall += "&token="+token;
    	
    	
    	$.ajax({ 
 		   type: "GET",
 		   dataType: "jsonp",
 		   url: urlcall,
 		   contentType: 'application/json',
 		   success: function (data) {
 		        var res = eval(data);
 		        //res is 2 datasets. the first is a row of winners for the contest. the 2nd is the contest details
 		        var output = "";
 		        for(var i=0; i< res.length; i++)
 		        	{
 		        	//kw do your thing here with the results
 		        	
 		        	}
 		      }
 		});
    }
    
    function removeContest(contestId)
    {
    	var urlcall = baseURL;
    	urlcall += "contests/remove?";
    	urlcall += "adminId="+adminId;
    	urlcall += "&token="+token;
    	urlcall += "&contestId="+contestId;
    	
    	$.ajax({ 
  		   type: "GET",
  		   dataType: "jsonp",
  		   url: urlcall,
  		   contentType: 'application/json',
  		   success: function (data) {
  			 var res = eval(data);
		     var successful = res[0].result;  //1 = success 0 = fail
		     alert("successful: "+successful);
  		 }
 		});
  		   
    	
    }
    
    function makeFullPageJambaseConcert() {
    	
    	var JBconcertId = $("#concertId_txt").val();
    	
    	var urlcall = baseURL; //"http://localhost:8080/BigNoiseRest/admin/";
    	urlcall += "localsponsor/script/add?";
    	urlcall += "adminId="+adminId;
    	urlcall += "&token="+token;
    	urlcall += "&concertId="+JBconcertId;
    	
    	$.ajax({ 
  		   type: "GET",
  		   dataType: "jsonp",
  		   url: urlcall,
  		   contentType: 'application/json',
  		   success: function (data) {
  			 var res = eval(data);
		     var successful = res[0].result;  //1 = success 0 = fail
		     if(successful == 0)
		    	 alert("fail");
		     else
		     {
		    	 alert("successful");
		    	 $("#concertId_txt").val("");
  		     }
  		 }
 		});
    }
    
 function getAllContestsWinners() {
    	
	 var baseURL = "http://glassfish-lb-862187038.us-east-1.elb.amazonaws.com/BigNoiseRest/admin/";
	 
    	var urlcall =baseURL; //"http://localhost:8080/BigNoiseRest/admin/";
    	urlcall += "contests/allwinners";  

    	$.ajax({ 
 		   type: "GET",
 		   dataType: "jsonp",
 		   url: urlcall,
 		   contentType: 'application/json',
 		   success: function (data) {
 		        var res = eval(data);
 		        var output = "";
 		        for(var i=0; i< res.length; i++)
 		        	{
 		        		output += "ContestName: "+res[i].ConcertName+"<br>";
 		        		output += "ContestEndDate: "+res[i].ContestEndDate+"<br>";
 		        		output += "UserName: "+res[i].UserName+"<br><br>";
 		        		
 		        	}
 		         alert(output);
 		      }
 		});
 		
    }
 
 function getEventDetails(artistId, eventId)
 {
	 //if you want values to try this out then just go to jambase.com and click on an artist. the artist id will be in the url ex: 29769
	   //then if you mouse over the 'i' info button for any event on the right you will see the eventId in the link.
	 
	var appBaseURL = "http://glassfish-lb-862187038.us-east-1.elb.amazonaws.com/BigNoiseRest/";
	var urlcall = appBaseURL; //"http://localhost:8080/BigNoiseRest/";
 	urlcall += "web/event/details?";  
 	urlcall += "userId="+"0";
	urlcall += "&artistId="+artistId;
	urlcall += "&eventId="+eventId;
	
 	$.ajax({ 
		   type: "GET",
		   dataType: "jsonp",
		   url: urlcall,
		   contentType: 'application/json',
		   success: function (data) {
			    var res = eval(data);
		        alert(res[0].Title);
		        //Title, Subtitle, ContentDate, ContentBGURL_Android, JambaseArtistId, JambaseConcertId, JambaseVenueId, ConcertTicketURL, 
		         //venue.name, venue.city, venue.state, venue.zip, venue.address, venue.latitude, venue.longitude 
		   }
		});
 }
 
 function getContestDetails(contestId)
 {
	 var appBaseURL = "http://glassfish-lb-862187038.us-east-1.elb.amazonaws.com/BigNoiseRest/";
	 var urlcall = appBaseURL; //"http://localhost:8080/BigNoiseRest/";
 	 urlcall += "web/contest/details?";
 	 urlcall += "&contestId="+contestId;
 	 urlcall += "&userId="+"0";
 	
 	
 	$.ajax({ 
		   type: "GET",
		   dataType: "jsonp",
		   url: urlcall,
		   contentType: 'application/json',
		   success: function (data) {
		        var res = eval(data);
		        alert(res[0].ConcertName);
		        //ConcertBigImageURL_ANdroid, ConcertLocation, ConcertDate, ContestStartDate, ContestEndDate, 
		        //ContestDescription, ContestDescription2, ContestLegalDetailsURL,ContestLegalDetailsText,
		        //ContentLabel*, ContentIconURL**
		          //* if ContentLabel = '' then ContentLabel = 'Win Free Tickets'
		          //** if ContentIconURL = '' then use the blue bullseye image
		      }
		});
 }
    
