style = 'shape=line;align=left;verticalAlign=middle;routingCenterX=-0.5;'+'spacingLeft=12;'

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
		graph.addCell(v11,vertex)
		graph.setSelectionCell(vertex);
	}
	var img = document.getElementById(image)
	mxUtils.makeDraggable(img, graph, funct);
	return img;
}