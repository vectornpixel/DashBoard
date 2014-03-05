/* 
Big Noiz Ajax Calls & JS
Author     : Asim Craft.
 */

$('#wizard').smartWizard();
 $(function() {
$( "#conteststartdate_txt" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 1,
onClose: function( selectedDate ) {
$( "#contestenddate_txt" ).datepicker( "option", "minDate", selectedDate);
}
});
$( "#contestenddate_txt" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 1,
onClose: function( selectedDate ) {
$( "#conteststartdate_txt" ).datepicker( "option", "maxDate", selectedDate ).val();
}
});
$( "#contestenddate_txt" ).datepicker("option","dateFormat", "yy-mm-dd");
$( "#conteststartdate_txt" ).datepicker("option","dateFormat", "yy-mm-dd");
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
    $('input#title_txt').keyup(function(){
            var output = $(this).val();
            $('#previewtitle').text(output);
        });
    $('input#tag_txt').keyup(function(){
            var output = $(this).val();
            $('#previewtag').text(output);
        });
});

var baseURL = "http://54.227.240.28:8080/BigNoizAdminGen/Contests/Add?";

function submitContest(){
    
    //var concertlatitude = $("#concertlatitude_txt").val();
    //var concertlongitude = $("#concertlongitude_txt").val();
    var contestdescription = $("#contestdescription_txt").val();  
    var contestdescriptionheader = $("#contestdescriptionheader_txt").val();
    var contestdescriptionimage = $("#contestdescriptionimage_txt").val();
    var contestenddate = $("#contestenddate_txt").val();
    var contestimageurl = $("#contestimageurl_txt").val();
    var conteststartdate = $("#conteststartdate_txt").val();
    var interval = $("#interval_txt").val();
    //var jambaseeventid = $("#jambaseeventid_txt").val();
    var numTickets = $("#numTickets_txt").val();
    var numWinners = $("#numWinners_txt").val();
    //var prizeValue = $("#prizeValue_txt").val();
    //var sponsorId = $("#sponsorId_txt").val();
    var tag = $("#tag_txt").val(); 
    var title = $("#title_txt").val();
    
    
    var urlcall = baseURL;
 
    //urlcall += "&concertlatitude="+concertlatitude;
    //urlcall += "&concertlongitude="+concertlongitude;
    urlcall += "&contestdescription="+contestdescription;
    urlcall += "&contestdescriptionheader="+contestdescriptionheader;
    urlcall += "&contestdescriptionimage="+contestdescriptionimage;
    urlcall += "&contestenddate="+contestenddate;
    urlcall += "&contestimageurl="+contestimageurl;
    urlcall += "&conteststartdate="+conteststartdate;
    urlcall += "&interval="+interval;
    //urlcall += "&jambaseeventid="+jambaseeventid;
    urlcall += "&numTickets="+numTickets;
    urlcall += "&numWinners="+numWinners;
    //urlcall += "&prizeValue="+prizeValue;
    //urlcall += "&sponsorId="+sponsorId;
    urlcall += "&tag="+tag;
    urlcall += "&title="+title;
    console.log(urlcall);
    $.ajax({ 
       type: "POST",
       dataType: "jsonp",
       url: urlcall,
       contentType: 'application/json',
          success: function (data, status) {
          //alert('Contest Submitted');
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
//var dates = '';
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

/*$('#venue').change(function(){
     $('#summaryContestEnd').text($(this).val());
});*/

$('#checkthis').click(function () {
    if ($(this).val() == eventID){
      outputdesign += ' <label>Venue</label><div class="disabledform">'+eventVenue+'</div>';
      outputdesign += ' <label>Location</label><div class="disabledform">'+eventState+'</div>';
      outputdesign += ' <label>Date</label><div class="disabledform">'+eventDate+'</div>';
      //dates += ' <li><h3 class="day">'+eventDate+'</h3></li>';
      //dates += ' <li><h3 class="month"></h3></li>';
      //dates += '<li><p></p></li>';
       $('.ctestdetails').html(outputdesign);
       //$('ul.previewDate').html(dates);
       //dateformat();
    }
});

 $("#attachevent").change(function(){
            $( "#attachevent option:selected").each(function(){
                if($(this).attr("value")=="No"){
                    $(".searcResults").fadeOut(400);
                }
                if($(this).attr("value")=="Yes"){
                    $(".searcResults").fadeIn(400);
                }
            });
        }).change();
sortContent();

       }
    });
}

function summaryList(){
var output = '';
var contestenddate = $("#contestenddate_txt").val();
var conteststartdate = $("#conteststartdate_txt").val();
var interval = $("#interval_txt").val();
var numTickets = $("#numTickets_txt").val();
var numWinners = $("#numWinners_txt").val();
var sponsorId = $("#sponsorId_txt").val();
//var contestimageurl = $("#contestimageurl_txt").val();
//var title = $("#title").val();
$('#title_txt').keyup(function(){
     $('.summaryTitle').text($(this).val());
});
$('#tag_txt').keyup(function(){
     $('.summaryTag').text($(this).val());
     
});$('#contestdescriptionheader_txt').keyup(function(){
     $('#summaryDescHead').text($(this).val());
});
$('#contestdescription_txt').keyup(function(){
     $('#summaryDescText').text($(this).val());
});
$('#interval_txt').change(function(){
     $('#summaryInterval_txt').text($(this).val());
});
$('#numWinners_txt').change(function(){
     $('#summaryWinners').text($(this).val());
});

$('#numTickets_txt').change(function(){
     $('#summaryTickets').text($(this).val());
});
$('#conteststartdate_txt').change(function(){
     $('#summaryContestStart').text($(this).val());
});
$('#contestenddate_txt').change(function(){
     $('#summaryContestEnd').text($(this).val());
});
/*$('#contestimageurl_txt').change(function(){
     $('#summaryImage').attr('src', $(this).val());
             .text($(this).val());
});*/
 output += '<h4>Title: <span class="summaryTitle"></span></h4>';
 output += '<h4>Tag: <span class="summaryTag"></span></h4>';
 output += '<h4>Sponsor: <span id="summarySponsor">'+sponsorId+'</span></h4>';
 output += '<h4>Desc. Head: <span id="summaryDescHead"></span></h4>';
 output += '<h4>Desc. Text: <span id="summaryDescText"></span></h4>';
 output += '<h4>Interval: <span id="summaryInterval">'+interval+'</span></h4>';
 output += '<h4>Winners: <span id="summaryWinners">'+numWinners+'</span></h4>';
 output += '<h4>Tickets: <span id="summaryTickets">'+numTickets+'</span></h4>';
 output += '<h4>Contest Start Date: <span id="summaryContestStart">'+conteststartdate+'</span></h4>';
 output += '<h4>Contest End Date: <span id="summaryContestEnd">'+contestenddate+'</span></h4>';
  //output += '<h4>Contest image: <img id="summaryImage">'+contestimageurl+'</h4>';

 $('.formsummary').html(output);
  
}
summaryList();
//submitContest();
contestEvents();