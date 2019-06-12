var order_list = [];

var orders="";
function getMultiList(tab, url){
	$.getJSON(
		url,
		function(data){
			var str = "";
			$.each(data, function(key, val){
				str+="<input name="+tab+"_sel type=checkbox value=\""+key+"\">"+key+val+"<br>";
			})
			$(tab).html(str);
		}
	);
}

function getList(tab, url){
	$.getJSON(
		url,
		function(data){
			var str = "";
			$.each(data, function(key, val){
				str+="<input type=radio name="+tab+"_sel value=\""+key+"\">"+key+val+"<br>";
			})
			$(tab).html(str);
		}
	);
}

function init(){
	getList("#menu", "getmenu");
	getList("#bread", "getbread");
	getMultiList("#vegetable", "getvege");
	getMultiList("#source", "getsrc");
}

$(document).ready(init());

$("#menu_tab").click(function(){
	document.getElementById("menu_tab").className = "nav-link active";
	document.getElementById("bread_tab").className = "nav-link";
	document.getElementById("vegetable_tab").className = "nav-link";
	document.getElementById("source_tab").className = "nav-link";

	document.getElementById("menu").className = "tab-pane fade show active";
	document.getElementById("bread").className = "tab-pane fade";
	document.getElementById("vegetable").className = "tab-pane fade";
	document.getElementById("source").className = "tab-pane fade";
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
});

function list(name){
	var len = document.getElementsByName(name).length;
	var result = [];
	for(i = 0; i<len; i++){
		if(document.getElementsByName(name)[i].checked == true)
			result.push(document.getElementsByName(name)[i].value);
	}
	return result;
}

function add(){
	order_list.push({
		menu : list("#menu_sel"),
		bread : list("#bread_sel"),
		vegetable : list("#vegetable_sel"),
		source : list("#source_sel")
	});
	orders+="<a href=# class=list-group-item>주문주문</a>"
	$(order).html(orders);
	init();
}

function sub(){
	$('#ordermodal').show();
	var str = "";
	for(i = 0; i<order_list.length; i++){
		str += order_list[i].menu + order_list[i].bread 
		+ order_list[i].vegetable + order_list[i].source;
	}
	$(listAll).html(str);
	init();
}

function hide(){
	$("#ordermodal").hide();
}