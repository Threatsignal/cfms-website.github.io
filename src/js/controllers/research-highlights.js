
export default class ResearchHighlightsController {
	constructor(){
		this.init();
	}
	
	init() {
        $(document).ready(function(){
            $('.collapsible').collapsible();
            $('.collapsible-header').click(function() {
            	console.log($(this).children().first().toggleClass("active"));
			});
        });
	}
}