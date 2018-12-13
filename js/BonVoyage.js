
$(document).ready(()=>{
$('#image').on('mouseenter', event=>{
	$(event.currentTarget).addClass('image-zoom');
}).on('mouseleave', event=>{
	$(event.currentTarget).removeClass('image-zoom');
})}
)