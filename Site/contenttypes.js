/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// Set icons on each menu

function loadHE(){   
$('#eventloader').click(function(){
  $.ajax({
    //dataType: "json",
    type: "GET",
    url: "he.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
        dropdowns();
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
    //dataType: "json",
    type: "GET",
    url: "hv.html",
    data: { },
    async: true,
    success: function(data){
        $('#main').html(data).css({ opacity: 0 }).fadeTo('normal', 1);
        dropdowns();
        accordion();
        gridiconset();
        accordionRemove();
    }
        });
   });
}

function contentEvents() {

var urlcall = "http://54.227.240.28:8080/BigNoizAdminGen/ShowcaseMappingService";

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
      var content = res[i].contenttype;
      var position = res[i].position;
      var description = res[i].description;
      output += '<li><span class="cont-title pull-left">'+description+'</span><span class="delete glyphicon glyphicon-remove showcase-icons"></span><span class="glyphicon glyphicon-pencil showcase-icons2 pull-right"></span></li>';
      output += '<li><div class="col-lg-2"><span class="date subs"><p>12/3/13</p></span></div>'
      output += '<div class="col-lg-4"><span class="title">Kesha</span><span><p class="subs">Detroit, MI - Fox Theater</p></span></div>'
      output += '<div class="pull-right"><input type="checkbox" name="kesha1" value="idnumber"></div></li>'
  }
$('').html(output);
sortContent();
       }
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
        dropdowns();
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
function fileupload(){
    'use strict';
    // Change this to the location of your server-side upload handler:
    var url = window.location.hostname === 'blueimp.github.io' ?
                '//jquery-file-upload.appspot.com/' : 'server/php/',
        uploadButton = $('<button/>')
            .addClass('btn btn-primary')
            .prop('disabled', true)
            .text('Processing...')
            .on('click', function () {
                var $this = $(this),
                    data = $this.data();
                $this
                    .off('click')
                    .text('Abort')
                    .on('click', function () {
                        $this.remove();
                        data.abort();
                    });
                data.submit().always(function () {
                    $this.remove();
                });
            });
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        autoUpload: false,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 5000000, // 5 MB
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        previewMaxWidth: 350,
        previewMaxHeight: 440,
        previewCrop: true
    }).on('fileuploadadd', function (e, data) {
        data.context = $('<div/>').appendTo('#files');
        $.each(data.files, function (index, file) {
            var node = $('<div>');   
            if (!index) {
                node.append('<br>').append(uploadButton.clone(true).data(data));
            }
            node.appendTo(data.context);
        });
    }).on('fileuploadprocessalways', function (e, data) {
        var index = data.index,
            file = data.files[index],
            node = $(data.context.children()[index]);
        if (file.preview) {
            node.prepend('<br>').prepend(file.preview);
        }
        if (file.error) {
            node.append('<br>').append($('<span class="text-danger"/>').text(file.error));
        }
        if (index + 1 === data.files.length) {
            data.context.find('button').text('Upload').prop('disabled', !!data.files.error);
        }
    }).on('fileuploadprogressall', function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .progress-bar').css(
            'width',
            progress + '%'
        );
    }).on('fileuploaddone', function (e, data) {
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                var link = $('<a>').attr('target', '_blank').prop('href', file.url);
                $(data.context.children()[index]).wrap(link);
            } else if (file.error) {
                var error = $('<span class="text-danger"/>').text(file.error);
                $(data.context.children()[index]).append('<br>').append(error);
            }
        });
    }).on('fileuploadfail', function (e, data) {
        $.each(data.files, function (index, file) {
            var error = $('<span class="text-danger"/>').text('File upload failed.');
            $(data.context.children()[index]).append('<br>').append(error);
        });
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
};

fileupload();
loadHE();
loadHV();
loadContest();