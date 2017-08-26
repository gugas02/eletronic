function configuration(graph)
{
	// Enables tooltips, new connections and panning
	graph.setPanning(true);
	graph.setConnectable(true);
	graph.setConnectableEdges(true);
	graph.setDisconnectOnMove(false);
	//delete the arrow of the edge
	var style = graph.getStylesheet().getDefaultEdgeStyle();
	delete style['endArrow'];
	//defining styles to edges
	style['sourceConstraint'] = 'vertical';
	style['portConstraint'] = 'vertical';
	style['edgeStyle'] = 'wireEdgeStyle';
	//defining styles to vertex
	var style2 = [];
	style2[mxConstants.STYLE_STROKECOLOR] = 'gray';
	style2[mxConstants.STYLE_FILLCOLOR] = '#EEEEEE';
	style2[mxConstants.STYLE_GRADIENTCOLOR] = 'white';
	style2[mxConstants.STYLE_FONTCOLOR] = '#774400';
	style2[mxConstants.STYLE_FONTSIZE] = '10';
	style2[mxConstants.STYLE_FONTSTYLE] = 1;
	graph.getStylesheet().putDefaultVertexStyle(style2);

	//hide the plus btn of folded vertex
	graph.foldingEnabled = false;
	// Disables built-in context menu
	mxEvent.disableContextMenu(document.body);
	// Enables HTML markup in all labels
	graph.setHtmlLabels(true);
}