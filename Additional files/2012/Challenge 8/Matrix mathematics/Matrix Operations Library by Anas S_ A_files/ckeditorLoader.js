//include CKEditor library files
document.write(
	'<script src="/RentACoder/DotNet/2010Redesign/javascripts/ckeditor/ckeditor.js" type="text/javascript"></script>');
//reloads CKEditor for tab switching issue on ShowBidRequest.asp
function loadEditor(id) {
    var instance = CKEDITOR.instances[id];
    if (instance) {
        instance.destroy(true);
    }
    CKEDITOR.replace(id);
}