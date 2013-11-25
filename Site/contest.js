var baseURL = "http://54.227.240.28:8080/BigNoizAdminGen/";

$('.buttonFinish').click(function(){
   
    
    
});
function submitContest(){

    var concertlatitude = $("#concertlatitude").val();
    var concertlongitude = $("#concertlongitude").val();
    var contestdescription = $("#contestdescription").val();  
    var contestdescriptionheader = $("#contestdescriptionheader").val();
    var contestdescriptionimage = $("#contestdescriptionimage").val();
    var contestenddate = $("#contestenddate").val();
    var contestimageurl = $("#contestimageurl").val();
    var conteststartdate = $("#conteststartdate").val();
    var interval = $("#interval").val();
    var jambaseeventid = $("#jambaseeventid").val();
    var numTickets = $("#numTickets").val();
    var numWinners = $("#numWinners").val();
    var prizeValue = $("#prizeValue").val();
    var sponsorId = $("#sponsorId").val();
    var tag = $("#tag").val();
    var title = $("#title").val();
    
    
    var urlcall = baseURL;
    urlcall += "Contests/Add?";
    urlcall += "&concertlatitude="+concertlatitude;
    urlcall += "&concertlongitude="+concertlongitude;
    urlcall += "&contestdescription="+contestdescription;
    urlcall += "&contestdescriptionheader="+contestdescriptionheader;
    urlcall += "&contestdescriptionimage="+contestdescriptionimage;
    urlcall += "&contestenddate="+contestenddate;
    urlcall += "&contestimageurl="+contestimageurl;
    urlcall += "&conteststartdate="+conteststartdate;
    urlcall += "&interval="+interval;
    urlcall += "&jambaseeventid="+jambaseeventid;
    urlcall += "&numTickets="+numTickets;
    urlcall += "&numWinners="+numWinners;
    urlcall += "&prizeValue="+prizeValue;
    urlcall += "&sponsorId="+sponsorId;
    urlcall += "&tag="+tag;
    urlcall += "&title="+title;

    $.ajax({ 
       type: "POST",
       dataType: "jsonp",
       url: urlcall,
       contentType: 'application/json',
          success: function (data, status) {
            alert('sucess works');
            var res = eval(data);
            var newContestId = res[0].result; 
            alert("new contest id: "+newContestId);
          }
    });
    
    
}



function contestEvents() {
var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/HighlightedEvents";
$.ajax({
type: "GET",
dataType: "jsonp",
url: urlcall,
contentType: 'application/json',
success: function (data, status) {
var res = eval(data);
var output = '';
for(var i=0; i< res.length; i++)
  {
      var eventArtist = res[i].artistName;
      var eventVenue = res[i].venuName;
      var eventState = res[i].venuCity;
      var eventDate = res[i].date;
      var eventID = res[i].id;
      output += '<li><div class="col-lg-2"><span class="date subs"><p>'+eventDate+'</p></span></div>'
      output += '<div class="col-lg-4"><span class="title">'+eventArtist+'</span><span><p class="subs">'+eventState+eventVenue+'</p></span></div>'
      output += '<div class="pull-right"><input type="checkbox" value='+eventID+' id='+eventID+'></div></li>'
  }
$('ul.searcResults').html(output);
sortContent();
       }
    });
}


submitContest();
contestEvents();