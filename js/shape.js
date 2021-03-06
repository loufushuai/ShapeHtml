$('document').ready(function() {
	//遍历一遍dom
	$("*").each(function(){
		// 圆形
		if ($(this).is(".shape_circle")) {
			if ($(this).height() == $(this).width()) {
				$(this).css("border-radius",this.height/2+"px");
			}
			else{
				console.log("这不是一个正方形,建议修改图片尺寸,或者椭圆形更加美观");
				$(this).css("border-radius",this.height/2+"px");
			}
		}
		// 椭圆
		if ($(this).is(".shape_oval")) {
			var oval_radius = Math.max($(this).width(),$(this).height());
			console.log(oval_radius);
			if($(this).height() < $(this).width()){
				$(this).css("border-radius",oval_radius+"px/"+oval_radius/($(this).width()/$(this).height())+"px");
			}
			else{
				$(this).css("border-radius",oval_radius/($(this).height()/$(this).width())+"px/"+oval_radius+"px");
			}
		}
		// 六边形
		if ($(this).is(".shape_oval")) {
			var six_width = $(this).width();
			var six_height = $(this).height();
			$(this).wrap("<div class=\"shape_rotate_45 fl\" style=\"width:"+six_width+"px;height:"+six_height+"px;	overflow:hidden;\"><div class=\"shape_rotate_315\"  style=\"width:"+six_width+"px;height:"+six_height+"px;\"></div></div>");
		}
		// 菱形
		if ($(this).is(".shape_side_four")) {
			var four_width = $(this).width();
			var four_height = $(this).height();
			var four_diagonal = Math.sqrt(2);
			$(this).wrap("<div class=\"shape_rotate_45\" style=\"width:"+four_width+"px;height:"+four_height+"px;overflow:hidden;\"><div class=\"shape_rotate_315\" style=\"width:"+four_width+"px;height:"+four_height+"px;\"></div>");
			$(this).css("transform","scale("+four_diagonal+")");
			if(four_height !== four_width){
				console.log("不是一个正规菱形~~")
			}
		}
	});
	
});