style = 'shape=line;align=left;verticalAlign=middle;routingCenterX=-0.5;'+'spacingLeft=12;'
style2 ='shape=line;align=left;verticalAlign=middle;fontSize=8;routingCenterX=0.5;'+'spacingLeft=-44;'
function buildmenu(graph){
	
	var addVertex = function(icon)
	{
		var vertex = new mxCell(icon, new mxGeometry(0, 0, 40, 40), "");
		vertex.setVertex(true);
		vertex.setConnectable(false);
		
		var img = addToolbarItem(graph, vertex, icon);
		
	};
				
	addVertex('Led');
	addVertex('Pwm');
	addVertex('Adc');
	addVertex('IExt');
	addVertex('ITmr');
	addVertex('ICap');
	addVertex('IComp');
	addVertex('Btn');

}
function addToolbarItem(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}



function buildmenuvariavel(graph){
	var addVertex = function(icon)
	{
		var vertex = new mxCell(icon, new mxGeometry(0, 0, 40, 40), "");
		vertex.setVertex(true);
		vertex.setConnectable(false);
		
		var img = addToolbarItemVariavel(graph, vertex, icon);
		
	};
	addVertex('char');
	addVertex('uchar');
	addVertex('int');
	addVertex('uint');
	addVertex('short');
	addVertex('ushort');
	addVertex('shortl');
	addVertex('ushortl');
	addVertex('long');
	addVertex('ulong');
	addVertex('flt');
	addVertex('ptr');
}
function addToolbarItemVariavel(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(-40, 0);
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}


function buildmenucomp(graph){
	var addVertex = function(icon)
	{
		var vertex = new mxCell(icon, new mxGeometry(0, 0, 40, 40), 'shape=triangle');
		vertex.setVertex(true);
		vertex.setConnectable(false);
		
		var img = addToolbarItemComp(graph, vertex, icon);
		
	};
	addVertex('menor');
	addVertex('menor=');
	addVertex('maior');
	addVertex('maior=');
	addVertex('igual');
	addVertex('Diferente');
}
function addToolbarItemComp(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(-40, 0);
		graph.stopEditing(false);
		var v12 = new mxCell(null, new mxGeometry(0, 8, 8, 10),style);
		v12.setVertex(true);
		v12.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var v13 = new mxCell(null, new mxGeometry(0, 22, 8, 10),style);
		v13.setVertex(true);
		v13.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.addCell(v12,vertex);
		graph.addCell(v13,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}


function buildmenunum(graph){
	var addVertex = function(icon)
	{
		var vertex = new mxCell(icon, new mxGeometry(0, 0, 40, 40), 'shape=triangle');
		vertex.setVertex(true);
		vertex.setConnectable(false);
		
		var img = addToolbarItemNum(graph, vertex, icon);
		
	};
	addVertex('mais');
	addVertex('menos');
	addVertex('vezes');
	addVertex('dividido');
	addVertex('modulo');
}
function addToolbarItemNum(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(-40, 0);
		graph.stopEditing(false);
		var v12 = new mxCell(null, new mxGeometry(0, 8, 8, 10),style);
		v12.setVertex(true);
		v12.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var v13 = new mxCell(null, new mxGeometry(0, 22, 8, 10),style);
		v13.setVertex(true);
		v13.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.addCell(v12,vertex);
		graph.addCell(v13,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}


function buildmenubool(graph){
	var addVertex = function(icon)
	{
		var vertex = new mxCell(icon, new mxGeometry(0, 0, 40, 40), 'shape=triangle');
		vertex.setVertex(true);
		vertex.setConnectable(false);
		
		if(icon == 'not' || icon == 'rotr' ||icon == 'rotl'){
			var img = addToolbarItemBool1(graph, vertex, icon);
		}else{
			var img = addToolbarItemBool2(graph, vertex, icon)
		}
	};
	addVertex('and');
	addVertex('or');
	addVertex('not');
	addVertex('andb');
	addVertex('orb');
	addVertex('xorb');
	addVertex('notb');
	addVertex('rotr');
	addVertex('rotl');
}
//function dedicated to booleans operations with 2 inputs
function addToolbarItemBool2(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(-40, 0);
		graph.stopEditing(false);
		var v12 = new mxCell(null, new mxGeometry(0, 8, 8, 10),style);
		v12.setVertex(true);
		v12.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var v13 = new mxCell(null, new mxGeometry(0, 22, 8, 10),style);
		v13.setVertex(true);
		v13.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.addCell(v12,vertex);
		graph.addCell(v13,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}
//function dedicated to booleans operations with only 1 input
function addToolbarItemBool1(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(-40, 0);
		graph.stopEditing(false);
		var v12 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v12.setVertex(true);
		v12.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.addCell(v12,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}



function buildmenustru(graph){
	var addVertex = function(icon)
	{
		var vertex = new mxCell(icon, new mxGeometry(0, 0, 200, 200), 'shape=swimlane;startSize=20;');
		vertex.setVertex(true);
		vertex.setConnectable(false);
		
		var img = addToolbarItemStru(graph, vertex, icon);
		
	};
	addVertex('if');
	addVertex('ifelse');
	addVertex('switch');
	addVertex('for');
}
function addToolbarItemStru(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}



function buildmenufunc(graph){
	var addVertex = function(icon)
	{
		if(icon == 'criar' ){
			var vertex = new mxCell(icon, new mxGeometry(0, 0, 200, 200), 'shape=swimlane;startSize=20;');
			vertex.setVertex(true);
			vertex.setConnectable(false);
			var img = addToolbarItemFunc1(graph, vertex, icon);
		}else{
			var vertex = new mxCell(icon, new mxGeometry(0, 0, 40, 40), '');
			vertex.setVertex(true);
			vertex.setConnectable(false);
			var img = addToolbarItemFunc2(graph, vertex, icon)
		}
	};
	addVertex('sizeof');
	addVertex('typeof');
	addVertex('criar');
}
//function dedicated to function with 1 inputs and 2 outputs
function addToolbarItemFunc2(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(40, 0);
		graph.stopEditing(false);
		var v12 = new mxCell(null, new mxGeometry(0, 8, 8, 10),style);
		v12.setVertex(true);
		v12.geometry.offset = new mxPoint(-40, 0);
		graph.stopEditing(false);
		var v13 = new mxCell(null, new mxGeometry(0, 22, 8, 10),style);
		v13.setVertex(true);
		v13.geometry.offset = new mxPoint(-40, 0);
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.addCell(v12,vertex);
		graph.addCell(v13,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}
//function dedicated to the function that create functions  
function addToolbarItemFunc1(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}
function buildmenustrud(graph){
	var addVertex = function(icon)
	{
		if(icon == 'struct'){
			var vertex = new mxCell(icon, new mxGeometry(0, 0, 50, 40), '');
			vertex.setVertex(true);
			vertex.setConnectable(false);
			var img = addToolbarItemStruD(graph, vertex, icon);
		}else if(icon == 'cb'){
			var vertex = new mxCell(icon, new mxGeometry(0, 0, 50, 60), '');
			vertex.setVertex(true);
			vertex.setConnectable(false);
			var img = addToolbarItemStruD1(graph, vertex, icon);
		}else if(icon == 'arri' || icon == 'arrl' || icon == 'arrs' || icon == 'arrp'){
			function getlabel()
			{
				return '<table style="overflow:hidden;" width="100%" border="1" cellpadding="4" class="title">' +
					'<tr><th colspan="2">'+icon+'</th></tr>' +
					'</table>'+
					'<div style="overflow:auto;cursor:default;">'+
					'<table width="100%" height="100%" border="1" cellpadding="4" class="erd">' +
					'<tr><td>' +
					'<u><input class="input-vtr" type="text" name=""></u></td></tr><tr><td><input class="input-vtr" type="text" name=""></td></tr>' +
					'<tr><td><input class="input-vtr" type="text" name=""></td></tr><tr><td><input class="input-vtr" type="text" name=""></td></tr>' +
					'<tr><td><input class="input-vtr" type="text" name=""></td></tr><tr><td><input class="input-vtr" type="text" name=""></td></tr>' +
					'</table></div>';	
			};
			var vertex = new mxCell(getlabel(), new mxGeometry(200, 200, 90, 205), 'overflow=fill');
			vertex.setVertex(true);
			vertex.setConnectable(true);
			var img = addToolbarItemStruD2(graph, vertex, icon);
		}else if(icon == 'str'){
			function getlabel()
			{
				return '<table style="overflow:hidden;" width="100%" border="1" cellpadding="4" class="title">' +
					'<tr><th colspan="2">'+icon+'</th></tr>' +
					'</table>'+
					'<div style="overflow:auto;cursor:default;">'+
					'<table width="100%" height="100%" border="1" cellpadding="4" class="erd">' +
					'<tr><td>' +
					'<u><input class="input-vtr" type="text" name=""></u></td></tr>' +
					'</table></div>';	
			};
			var vertex = new mxCell(getlabel(), new mxGeometry(200, 200, 90, 55), 'overflow=fill');
			vertex.setVertex(true);
			vertex.setConnectable(true);
			var img = addToolbarItemStruD2(graph, vertex, icon);
		}

	};
	addVertex('struct');
	addVertex('cb');
	addVertex('arri');
	addVertex('arrl');
	addVertex('arrs');
	addVertex('arrp');
	addVertex('str');
}
function addToolbarItemStruD(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 15, 8, 10),style2);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(-50, 0);
		graph.stopEditing(false);
		var v12 = new mxCell(null, new mxGeometry(0, 1, 8, 10),style2);
		v12.setVertex(true);
		v12.geometry.offset = new mxPoint(50, 0);
		v12.value = 'T0';
		graph.stopEditing(false);
		var v13 = new mxCell(null, new mxGeometry(0, 10, 8, 10),style2);
		v13.setVertex(true);
		v13.geometry.offset = new mxPoint(50, 0);
		v13.value = 'N0';
		graph.stopEditing(false);
		var v14 = new mxCell(null, new mxGeometry(0, 20, 8, 10),style2);
		v14.setVertex(true);
		v14.geometry.offset = new mxPoint(50, 0);
		v14.value = 'T1';
		graph.stopEditing(false);
		var v15 = new mxCell(null, new mxGeometry(0, 30, 8, 10),style2);
		v15.setVertex(true);
		v15.geometry.offset = new mxPoint(50, 0);
		v15.value = 'N1';
		graph.stopEditing(false);
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.addCell(v12,vertex);
		graph.addCell(v13,vertex);
		graph.addCell(v14,vertex);
		graph.addCell(v15,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}
function addToolbarItemStruD1(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var v11 = new mxCell(null, new mxGeometry(0, 25, 8, 10),style2);
		v11.setVertex(true);
		v11.geometry.offset = new mxPoint(-50, 0);
		graph.stopEditing(false);
		var v12 = new mxCell(null, new mxGeometry(0, 1, 8, 10),style2);
		v12.setVertex(true);
		v12.geometry.offset = new mxPoint(50, 0);
		v12.value = 'T0';
		graph.stopEditing(false);
		var v13 = new mxCell(null, new mxGeometry(0, 10, 8, 10),style2);
		v13.setVertex(true);
		v13.geometry.offset = new mxPoint(50, 0);
		v13.value = 'N0';
		graph.stopEditing(false);
		var v14 = new mxCell(null, new mxGeometry(0, 20, 8, 10),style2);
		v14.setVertex(true);
		v14.geometry.offset = new mxPoint(50, 0);
		v14.value = 'S0';
		graph.stopEditing(false);
		var v15 = new mxCell(null, new mxGeometry(0, 30, 8, 10),style2);
		v15.setVertex(true);
		v15.geometry.offset = new mxPoint(50, 0);
		v15.value = 'T1';
		graph.stopEditing(false);
		var v16 = new mxCell(null, new mxGeometry(0, 40, 8, 10),style2);
		v16.setVertex(true);
		v16.geometry.offset = new mxPoint(50, 0);
		v16.value = 'N1';
		var v17 = new mxCell(null, new mxGeometry(0, 50, 8, 10),style2);
		v17.setVertex(true);
		v17.geometry.offset = new mxPoint(50, 0);
		v17.value = 'S1';
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.addCell(v11,vertex);
		graph.addCell(v12,vertex);
		graph.addCell(v13,vertex);
		graph.addCell(v14,vertex);
		graph.addCell(v15,vertex);
		graph.addCell(v16,vertex);
		graph.addCell(v17,vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}
function addToolbarItemStruD2(graph, prototype, image)
{
	var funct = function(graph, evt, cell, x, y)
	{
		var vertex = graph.getModel().cloneCell(prototype);
		vertex.geometry.x = x;
		vertex.geometry.y = y;
		graph.addCell(vertex);
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}