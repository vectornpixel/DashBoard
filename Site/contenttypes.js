/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// Set icons on each menu
function loadHA(){ 
$('#artistload').click(function(){
  $.ajax({
    type: "GET",
    url: "ha.html",
    data: { },
    async: true,
    success: function(data){

        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
    }
        });
/* 
Loads Web Services
 */
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/HighlightedArtists";

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
          var artistname = res[i].name;
          var artistimage = res[i].imageURL;
          var artiststartdate = res[i].startdate;
          var artistenddate = res[i].enddate;
          var artistevents = res[i].eventCount;
          var artisttag = res[i].tag;
          var artistsponsor = res[i].sponsorName;
          
          // left column
          output += '<h3><div class="col-lg-4"><span class="title">'+artistname+'</span></div><span class="gridicons"></span></h3>';
          output += '<div><div class="col-lg-3"><img class="img-thumbnail" src='+artistimage+'><span><p class="subs">'+artisttag+'</p></span></div>';
          output += '<div class="view-list"><ul class="view"><li>Start Date</li><li>End Date</li><li>Events</li><li>Sponsor</li></ul></div>';
         
          // right column
          output += '<div class="view-list"><ul class="view view-right"><li>'+artiststartdate+'</li><li>'+artistenddate+'</li><li>'+artistevents+'</li><li>'+artistsponsor+'</li></ul></div></div>';

      }

    $('#accordion').html(output);    
    accordion();
    gridiconset(); 
    accordionRemove();

           }
           
        });
   });
}


function loadHE(){ 
$('#eventloader').click(function(){
  $.ajax({
    type: "GET",
    url: "he.html",
    data: { },
    async: true,
    success: function(data){

        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
    }
        });
/* 
Loads Web Services
 */
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
          var artistname = res[i].artistName;
          var venuename = res[i].venuName;
          var venuecity = res[i].venuCity;
          var venuestate = res[i].venuState;
          var eventdate = res[i].date;

   
          
          // left column
          output += '<h3><span class="date subs"><p>'+eventdate+'</p></span><div class="col-lg-4"><span class="title">'+artistname+'</span><span><p class="subs">'+venuecity+', '+venuestate+' - '+venuename+'</p></span></div><span class="gridicons"></span></h3>';
          output += '<div><div class="col-lg-3"><img class="img-thumbnail"></div>';
          output += '<div class="view-list"><ul class="view"><li>Artist Name</li><li>Venue</li><li>Location</li></ul></div>';
         
          // right column
          output += '<div class="view-list"><ul class="view view-right"><li>'+artistname+'</li><li>'+venuename+'</li><li>'+venuecity+', '+venuestate+'</li></ul></div></div>';

      }

    $('#accordion').html(output);    
    accordion();
    gridiconset(); 
    accordionRemove();


           }
           
        });
   });
} 
function loadHV(){ 
$('#venueloader').click(function(){
  $.ajax({
    type: "GET",
    url: "hv.html",
    data: { },
    async: true,
    success: function(data){

        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
    }
        });
/* 
Loads Web Services
 */
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/HighlightedVenues";
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
          var venuename = res[i].venueName;
          var eventcount = res[i].eventCount;
          var venueimage = res[i].imageurl;
          var venuecity = res[i].city;
          var venuestate = res[i].state;

   
          
          // left column
          output += '<h3><div class="col-lg-5"><span class="title">'+venuename+'</span><span><p class="subs">'+venuecity+', '+venuestate+'</p></span></div><div class="col-lg-2"><span class="shows subs"><p>'+eventcount+' Shows</p></span></div><span class="gridicons"></span></h3>';
          output += '<div><div class="col-lg-3"><img class="img-thumbnail" src='+venueimage+'></div>';
          output += '<div class="view-list"><ul class="view"><li>Shows</li><li>Venue</li><li>Location</li></ul></div>';
         
          // right column
          output += '<div class="view-list"><ul class="view view-right"><li>'+eventcount+'</li><li>'+venuename+'</li><li>'+venuecity+'</li></ul></div></div>';

      }

    $('#accordion').html(output);    
    accordion();
    gridiconset(); 
    accordionRemove();

           }
           
        });
   });
}    
function loadContest(){
$('#contestloader').click(function(){
    $.ajax({
    type: "GET",
    url: "contestview.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
    }
        });   
   var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/Contests";
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
          var contestimage = res[i].contestimageurl;
          var conteststart = res[i].conteststartdate;
          var contestend = res[i].contestenddate;
          var contestdesc = res[i].contestdescription;
          var contestdeschead = res[i].contestdescriptionheader;
          var contestdescimage = res[i].contestdescriptionimage;
          var contesttitle = res[i].title;
          var contesttag = res[i].tag;
          var contestdescimageurl = res[i].contestdescriptionimageurl;

          // left column
          output += '<h3><div class="col-lg-6"><span class="title">'+contesttitle+'</span></div><span class="gridicons"></span></h3>';
          output += '<div><div class="col-lg-3"><img class="img-thumbnail" src='+contestimage+'></div>';
          output += '<div class="view-list"><ul class="view"><li>Tag</li><li>Start Date</li><li>End Date</li><br><p>Contest Description</p><br><li>'+contestdeschead+'</li><li>'+contestdesc+'</li></ul></div>';
         
          // right column
          output += '<div class="view-list"><ul class="view view-right"><li>'+contesttag+'</li><li>'+conteststart+'</li><li>'+contestend+'</li><br><p>Contest Description Image</p><br><li><img class="img-thumbnail" src='+contestdescimage+'></li></ul></div></div>';

      }

    $('#accordion').html(output);    
    accordion();
    gridiconset(); 
    accordionRemove();

           }
           
        });
  
});
}
loadHA();
loadHE();
loadHV();
loadContest();
