// Adds a special tooltip for edges
function edgeTooltip(graph)
{
	var getTooltipForCell = graph.getTooltipForCell;
	graph.getTooltipForCell = function(cell)
	{
		var tip = '';
			
		if (cell != null)
		{
			var src = this.getModel().getTerminal(cell, true);
					
			if (src != null)
			{
				tip += this.getTooltipForCell(src) + ' ';
			}
					
			var parent = this.getModel().getParent(cell);
				
			if (this.getModel().isVertex(parent))
			{
				tip += this.getTooltipForCell(parent) + '.';
			}
		
			tip += getTooltipForCell.apply(this, arguments);
						
			var trg = this.getModel().getTerminal(cell, false);
						
			if (trg != null)
			{
				tip += ' ' + this.getTooltipForCell(trg);
			}
		}

		return tip;
	};
}
