function getList(tab, url){
	$.getJSON(
		url,
		function(data){
			var str = "";
			$.each(data, function(key, val){
				str+=key+" "+val+"<br>";
			})
			$(tab).html(str);
		}
	);
}

$(document).ready(function(){
	getList("#menu", "getmenu");
});
$("#menu_tab").click(function(){
	document.getElementById("menu_tab").className = "nav-link active";
	document.getElementById("bread_tab").className = "nav-link";
	document.getElementById("vegetable_tab").className = "nav-link";
	document.getElementById("source_tab").className = "nav-link";

	document.getElementById("menu").className = "tab-pane fade show active";
	document.getElementById("bread").className = "tab-pane fade";
	document.getElementById("vegetable").className = "tab-pane fade";
	document.getElementById("source").className = "tab-pane fade";
	getList("#menu", "getmenu");
});

$("#bread_tab").click(function(){
	document.getElementById("menu_tab").className = "nav-link";
	document.getElementById("bread_tab").className = "nav-link active";
	document.getElementById("vegetable_tab").className = "nav-link";
	document.getElementById("source_tab").className = "nav-link";

	document.getElementById("menu").className = "tab-pane fade";
	document.getElementById("bread").className = "tab-pane fade show active";
	document.getElementById("vegetable").className = "tab-pane fade";
	document.getElementById("source").className = "tab-pane fade";
	getList("#bread", "getbread");
});

$("#vegetable_tab").click(function(){
	document.getElementById("menu_tab").className = "nav-link";
	document.getElementById("bread_tab").className = "nav-link";
	document.getElementById("vegetable_tab").className = "nav-link active";
	document.getElementById("source_tab").className = "nav-link";

	document.getElementById("menu").className = "tab-pane fade";
	document.getElementById("bread").className = "tab-pane fade";
	document.getElementById("vegetable").className = "tab-pane fade show active";
	document.getElementById("source").className = "tab-pane fade";
	getList("#vegetable", "getvege");
});

$("#source_tab").click(function(){
	document.getElementById("menu_tab").className = "nav-link";
	document.getElementById("bread_tab").className = "nav-link";
	document.getElementById("vegetable_tab").className = "nav-link";
	document.getElementById("source_tab").className = "nav-link active";

	document.getElementById("menu").className = "tab-pane fade";
	document.getElementById("bread").className = "tab-pane fade";
	document.getElementById("vegetable").className = "tab-pane fade";
	document.getElementById("source").className = "tab-pane fade show active";
	getList("#source", "getsrc");
});