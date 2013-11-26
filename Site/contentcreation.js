$('#wizard').smartWizard();
 $(function() {
$( "#conteststartdate" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 1,
onClose: function( selectedDate ) {
$( "#contestenddate" ).datepicker( "option", "minDate", selectedDate );
}
});
$( "#contestenddate" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 1,
onClose: function( selectedDate ) {
$( "#conteststartdate" ).datepicker( "option", "maxDate", selectedDate );
}
});
});

function setupLabel() {
if ($('.label_radio input').length) {
    $('.label_radio').each(function(){ 
        $(this).removeClass('r_on');
    });
    $('.label_radio input:checked').each(function(){ 
        $(this).parent('label').addClass('r_on');
    });
};
};
$(document).ready(function(){
    $('body').addClass('has-js');
    $('.label_check, .label_radio').click(function(){
        setupLabel();
    });
    setupLabel(); 
    $('input#title').keyup(function(){
            var output = $(this).val();
            $('#previewtitle').text(output);
        });
    $('input#tag').keyup(function(){
            var output = $(this).val();
            $('#previewtag').text(output);
        });
});

var baseURL = "http://54.227.240.28:8080/BigNoizAdminGen/";

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
    alert('clickworks');
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
var outputdesign = '';
for(var i=0; i< res.length; i++)
  {
      var eventArtist = res[i].artistName;
      var eventVenue = res[i].venuName;
      var eventState = res[i].venuCity;
      var eventDate = res[i].date;
      var eventID = res[i].id;
      output += '<li><span class="date subs"><p>'+eventDate+'</p></span>';
      output += '<div class="col-lg-4"><span class="title">'+eventArtist+'</span> <span><p class="subs">'+eventState+ ' - ' +eventVenue+'</p></span></div>';
      output += '<div class="pull-right"><input type="checkbox" name="checkbox" value='+eventID+' id="checkthis"></div></li>';  
  }

$('ul.searcResults').html(output);

$('#checkthis').click(function () {
    if ($(this).val() == eventID){
      outputdesign += ' <label>Venue</label><input type="text" name="venue" id="venue" value='+eventVenue+' />';
      outputdesign += ' <label>Location</label><input type="text" name="location" id="location" value='+eventState+' />';
      outputdesign += ' <label>Date</label><input type="text" name="date" id="date" value='+eventDate+' />';
       $('.ctestdetails').html(outputdesign);
    }
});
sortContent();
       }
    });
}
function summaryList(){
$('#title').keyup(function(){
     $('.summaryTitle').text($(this).val());
});
$('#tag').keyup(function(){
     $('.summaryTag').text($(this).val());
});
$('#venue').keypress(function(){
     $('#summaryVenue').text($(this).val());
});
$('#location').keypress(function(){
     $('#summaryLocation').text($(this).val());
});
$('#date').keypress(function(){
     $('#summaryDate').text($(this).val());
});
$('#contestdescriptionheader').change(function(){
     $('#summaryDescHead').text($(this).val());
});
$('#contestdescriptionimage').change(function(){
     $('#summaryDescImg').text($(this).val());
});
$('#contestdescription').change(function(){
     $('#summaryDescText').text($(this).val());
});
$('#interval').change(function(){
     $('#summaryInterval').text($(this).val());
});
$('#numWinners').change(function(){
     $('#summaryWinners').text($(this).val());
});
$('#numTickets').change(function(){
     $('#summaryTickets').text($(this).val());
});

}
summaryList();
submitContest();
contestEvents();