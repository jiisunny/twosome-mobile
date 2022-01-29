/* tabbar.js */

$(function(){
	$("#tabbar > .label > ul > li").click(function(){
		var index=$(this).index();

		$("#tabbar > .label > ul > li").removeClass("active");
		$("#tabbar > .description > div").removeClass("active");

		$("#tabbar > .label > ul > li").eq(index).addClass("active");
		$("#tabbar > .description > div").eq(index).addClass("active");
	});
});