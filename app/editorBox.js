tinymce.init({
	selector: '#textarea-comment',
	height: 200,
	plugins: [
	"advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
	"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
	"table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
	],
	toolbar1: " bullist numlist | outdent indent blockquote | undo redo | forecolor | charmap emoticons | spellchecker ",

	menubar: false,
	toolbar_items_size: 'small',

	content_css: [
	'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
	'//www.tinymce.com/css/codepen.min.css'
	]
});

tinymce.init({
	  selector: '#textarea-post',
	  theme: 'modern',
	  width: 800,
	  height: 300,
	  plugins: [
	  'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
	  'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
	  'save table contextmenu directionality emoticons template paste textcolor'
	  ],
	  content_css: 'css/content.css',
	  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons'
  });
});

