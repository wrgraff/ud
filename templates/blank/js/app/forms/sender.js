var allowed_file_size = "20971520";

$("#order").on("submit", function(ev) {
  ev.preventDefault();

  proceed = true;

  //check file size and type before upload, works in modern browsers
  if(window.File && window.FileReader && window.FileList && window.Blob){
    var total_files_size = 0;
    var id_form = document.getElementById('order-form');
    $(id_form.elements['file_attach[]'].files).each(function(i, ifile){
      if(ifile.value !== ""){ //continue only if file(s) are selected
        /*if(allowed_files.indexOf(ifile.type) === -1){ //check unsupported file
          alert( ifile.name + " имеет неподдерживаемый формат файла");
          proceed = false;
        }*/
        total_files_size = total_files_size + ifile.size; //add file size to total size
      }
    }); 
    if(total_files_size > allowed_file_size){
      alert( "Общий размер файлов превышает 20 мегабайт");
      proceed = false;
    }
  }
  
  //if everything's ok, continue with Ajax form submit
  if(proceed){ 
    var post_url = $(id_form).attr("action"); //get form action url
    var request_method = $(id_form).attr("method"); //get form GET/POST method
    var form_data = new FormData(id_form); //Creates new FormData object
    
    $.ajax({ //ajax form submit
      url : post_url,
      type: request_method,
      data : form_data,
      dataType : "json",
      contentType: false,
      cache: false,
      processData:false
    }).done(function(res){ //fetch server "json" messages when done
      if(res.type == "error"){
        $("#contact_results").html('<div class="callout alert" data-closable><p>'+ res.text +'</p><button class="button secondary small" aria-label="Dismiss alert" type="button" data-close>Сейчас поправлю</button><button class="close-button" aria-label="Dismiss alert" type="button" data-close><i class="material-icons">clear</i></button></div>');
      }
      
      if(res.type == "done"){
        $("#contact_results").html('<div class="callout success" data-closable><p>'+ res.text +'</p><button class="button secondary small" aria-label="Dismiss alert" type="button" data-close>Окей, все ясно</button><button class="close-button" aria-label="Dismiss alert" type="button" data-close><i class="material-icons">clear</i></button></div>');
        parent.jQuery.fancybox.getInstance().close();
        yaCounter1123980.reachGoal('send_order');
      }
    });
  }
});

$("#contact").on("submit", function(ev) {
  ev.preventDefault();

  var id_form = document.getElementById('contact-form');
 
  //if everything's ok, continue with Ajax form submit
  var post_url = $(id_form).attr("action"); //get form action url
  var request_method = $(id_form).attr("method"); //get form GET/POST method
  var form_data = new FormData(id_form); //Creates new FormData object
  
  $.ajax({ //ajax form submit
    url : post_url,
    type: request_method,
    data : form_data,
    dataType : "json",
    contentType: false,
    cache: false,
    processData:false
  }).done(function(res){ //fetch server "json" messages when done
    if(res.type == "error"){
      $("#contact_results").html('<div class="callout alert" data-closable><p>'+ res.text +'</p><button class="button secondary small" aria-label="Dismiss alert" type="button" data-close>Окей, все ясно</button><button class="close-button" aria-label="Dismiss alert" type="button" data-close><i class="material-icons">clear</i></button></div>');
    }
    
    if(res.type == "done"){
      $("#contact_results").html('<div class="callout success" data-closable><p>'+ res.text +'</p><button class="button secondary small" aria-label="Dismiss alert" type="button" data-close>Окей, все ясно</button><button class="close-button" aria-label="Dismiss alert" type="button" data-close><i class="material-icons">clear</i></button></div>');
      parent.jQuery.fancybox.getInstance().close();
        yaCounter1123980.reachGoal('send_contact');
    }
  });
});