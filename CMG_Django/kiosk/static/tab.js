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

var order_list = [];

var orders="";
function getMultiList(tab, url){
	$.getJSON(
		url,
		function(data){
			var str = "";
			$.each(data, function(key, val){
				if(tab == "#vegetable"){
					str+="<input name="+tab+"_sel type=checkbox value=\""+key+"\"checked>"+key+val+"<br>";
				}else{
					str+="<input name="+tab+"_sel type=checkbox value=\""+key+"\">"+key+val+"<br>";
				}
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
	var num = order_list.length;
	order_list.push({
		menu : list("#menu_sel"),
		bread : list("#bread_sel"),
		vegetable : list("#vegetable_sel"),
		source : list("#source_sel")
	});
	orders+="<a href=# onclick=showList("+num+") class=list-group-item>"+(num+1)+"번 주문서</a>"
	$(order).html(orders);
	init();
}

function showList(num){
	$('#ordermodal').show();
	var str = "메뉴: "+order_list[num].menu+"<br>" 
		+"빵: "+order_list[num].bread+"<br>" 
		+"야채: "+order_list[num].vegetable+"<br>"
		+"소스: "+order_list[num].source;
	$(listPart).html(str);
}

function sub(){
	var str = "";
	for(i = 0; i<order_list.length; i++){
		str += "메뉴: "+order_list[i].menu+"<br>" 
		+"빵: "+order_list[i].bread+"<br>" 
		+"야채: "+order_list[i].vegetable+"<br>"
		+"소스: "+order_list[i].source+"<br>"
		+"=================================================<br>";
	}
	$(listAll).html(str);
	$('#submitmodal').show();
}

function doOrder(){
	
}

function hide(mod){
	$(mod).hide();
}