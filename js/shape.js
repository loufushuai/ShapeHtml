$('document').ready(function() {
	$(".shape_circle").each(function(){
		if (this.height == this.width) {
			$(this).css("border-radius",this.height/2+"px");
		}
		else{
			console.log("这不是一个正方形,建议修改图片尺寸,或者椭圆形更加美观");
			$(this).css("border-radius",this.height/2+"px");
		}
	});
	$(".shape_side_six").each(function(){
		var six_width = $(this).width();
		var six_height = $(this).height();
		$(this).wrap("<div class=\"shape_rotate_45\" style=\"width:"+six_width+"px;height:"+six_height+"px;	overflow:hidden;\"><div class=\"shape_rotate_315\"  style=\"width:"+six_width+"px;height:"+six_height+"px;\"></div></div>");

	});
	$(".shape_side_four").each(function(){
		var four_width = $(this).width();
		var four_height = $(this).height();
		$(this).wrap("<div class=\"shape_rotate_45\" style=\"width:"+four_width+"px;height:"+four_height+"px;overflow:hidden;\"><div class=\"shape_rotate_315\" style=\"width:"+four_width+"px;height:"+four_height+"px;\"></div>");
		$(this).css("transform","scale(1.4)");
	});

	
});