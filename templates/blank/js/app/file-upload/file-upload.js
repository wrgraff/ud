// File upload
var $fileInput = $('.file-uploader-input');
var $droparea = $('.file-uploader');
var $textContainer = $('.file-uploader-text');
var $activeClass = 'active';
var $filesCountText = 'Файлов выбрано: ';

// highlight drag area
$fileInput.on('dragenter focus click', function() {
  $droparea.addClass($activeClass);
});

// back to normal state
$fileInput.on('dragleave blur drop', function() {
  $droparea.removeClass($activeClass);
});

// change inner text
$fileInput.on('change', function() {
  var filesCount = $(this)[0].files.length;

  if (filesCount === 1) {
    // if single file then show file name
    $textContainer.text($(this).val().split('\\').pop());
  } else {
    // otherwise show number of files
    $textContainer.text($filesCountText + filesCount);
  }
});
