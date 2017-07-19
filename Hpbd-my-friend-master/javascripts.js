function hideSlide(){
	$('.ImageSlide').hide();
}
$(document).ready(hideSlide);

function main()
{
	$('.btn').on('click', function(){
		$('.ImageSlide').toggle();
	});
}

$(document).ready(main);


//
var isShow = false;
function Click()
{
	if (isShow)  picBox.style.display = "none";
	else picBox.style.style.display = "";
	isShow=!isShow;
}
//
var pic = getElementsByClassName("mySlides");
var current=0,last = null
function Click()
{
    
 pic[current].style.display = "";
 if (last!=null) pic[last].style.display = "none";
 last = current;	
 current ++;
 if (current >= pic.length) current =0;
}