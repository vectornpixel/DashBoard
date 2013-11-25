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
    //alert('testing');
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
       type: "GET",
       dataType: "jsonp",
       url: urlcall,
       contentType: 'application/json',
          success: function (data, status) {
           // alert('sucess works');
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
var outputdesign = '';
for(var i=0; i< res.length; i++)
  {
      var eventArtist = res[i].artistName;
      var eventVenue = res[i].venuName;
      var eventState = res[i].venuCity;
      var eventDate = res[i].date;
      var eventID = res[i].id;
      output += '<li><div class="col-lg-4"><span class="date subs"><p>'+eventDate+'</p></span></div>';
      output += '<div class="col-lg-4"><span class="title">'+eventArtist+'</span> <span><p class="subs">'+eventState+ ' - ' +eventVenue+'</p></span></div>';
      output += '<div class="pull-right"><input type="checkbox" name="checkbox" value='+eventID+' id="checkthis"></div></li>';  
  }


$('ul.searcResults').html(output);

$('#checkthis').click(function () {

    if ($(this).val() == eventID){
      outputdesign += ' <label>Venue</label><input type="text" name="venue" id="venue" value='+eventVenue+' />';
      outputdesign += ' <label>Location</label><input type="text" name="location" id="location" value='+eventState+' />';
       $('.ctestdetails').html(outputdesign);
    }
   
    
    //$("#txtAge").toggle(this.checked);
});
sortContent();
       }
    });
}

/*function contestEventsDesign(){
$('#radio_button :checked').live('change',function(){
alert('Something is checked.');
});

}*/
function contestEventsDesign(){

/*$('#checkthis').change(function() {
  if ($(this).is(':checked')) {
    alert('Checked');
  } else {
    alert('Unchecked');
  }
});*/

}
contestEventsDesign();
submitContest();
contestEvents();