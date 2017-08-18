function eventbinding(graph)
{
	var keyHandler = new mxKeyHandler(graph);
	//event binding that binds the delete btn to the function that remove a cell
	keyHandler.bindKey(46, function(evt)
	{
		if (graph.isEnabled())
		{
	    	graph.removeCells();
		}
	});
				
	//function that informs the undoManager of an undoable edit
	var undoManager = new mxUndoManager();
	var listener = function(sender, evt)
		{
			undoManager.undoableEditHappened(evt.getProperty('edit'));
		};
		graph.getModel().addListener(mxEvent.UNDO, listener);
		graph.getView().addListener(mxEvent.UNDO, listener);
	//event binding that binds the ctrl+z btn to the function that undo a edit
	keyHandler.bindControlKey(90, function(evt)
	{
	  	if (graph.isEnabled())
		{
		    undoManager.undo();
		}
	});
}