function ledright(graph,parent,x,y,title,fillColor,fontColor,strokeColor)
{
	fillColor = typeof fillColor !== 'undefined' ? fillColor : '#FFFFFF';
  	fontColor = typeof fontColor !== 'undefined' ? fontColor : '#000000';
  	strokeColor = typeof strokeColor !== 'undefined' ? strokeColor : '#000000';
  	x = typeof x !== 'undefined' ? x : 20;
  	y = typeof y !== 'undefined' ? y : 40;


	var v1 = graph.insertVertex(parent, null, title, x, y, 40, 40);
	v1.setConnectable(false);				
	var v11 = graph.insertVertex(v1, null, '', 0, 0, 8, 10,
		'shape=line;align=left;verticalAlign=middle;fontSize=8;routingCenterX=-0.5;'+
		'spacingLeft=12;');
	v11.geometry.relative = true;
	v11.geometry.offset = new mxPoint(-v11.geometry.width, 15);
}
function ledleft(graph,parent,x,y,title,fillColor,fontColor,strokeColor)
{
	fillColor = typeof fillColor !== 'undefined' ? fillColor : '#FFFFFF';
  	fontColor = typeof fontColor !== 'undefined' ? fontColor : '#000000';
  	strokeColor = typeof strokeColor !== 'undefined' ? strokeColor : '#000000';
	x = typeof x !== 'undefined' ? x : 20;
  	y = typeof y !== 'undefined' ? y : 40;
	var v1 = graph.insertVertex(parent, null, title, x, y, 40, 40);
	v1.setConnectable(false);				
	var v11 = graph.insertVertex(v1, null, '', 0, 0, 8, 20,
		'shape=line;align=left;verticalAlign=middle;fontSize=8;routingCenterX=-0.5;'+
		'spacingLeft=12;');
	v11.geometry.relative = true;
	v11.geometry.x = 1;
	v11.geometry.offset = new mxPoint(0, 10);
}