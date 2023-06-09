define(['questAPI'], function(Quest){

	var API = new Quest();

	var info = '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>You have completed the study.</b></h1></p><br/>' +
		'<div class="jumbotron jumbotron-dark">' +
		'<h2>During the Implicit Association Test (IAT) you just completed:</h2>' +
		'<p><%= global.iat.feedback %></p></div>' + 
		'<p><b>Disclaimer:</b> These IAT results are provided for educational purposes only. ' + 
		'The results may fluctuate and should not be used to make important decisions. ' + 
		'The results are influenced by variables related to the test ' + 
		'(e.g., the words or images used to represent categories) ' + 
		'and the person (e.g., being tired, what you were thinking about before the IAT).</p>' +
		'<p><b>How does the IAT work?</b></p>' +
		'<p>The IAT measures associations between concepts ' + 
		'(e.g., <%= global.groupA %> and <%= global.groupB %>) ' + 
		'and evaluations (e.g., <%= global.attributeA %>, <%= global.attributeB %>). ' + 
		'People are quicker to respond when items that are more closely related in their mind share the same button. ' + 
		'For example, an implicit preference for <%= global.groupA %> relative to <%= global.groupB %> ' + 
		'means that you are faster to sort words when \'<%= global.groupA %>\' ' + 
		'and \'<%= global.attributeA %>\' share a button ' + 
		'relative to when \'<%= global.groupB %>\' and \'<%= global.attributeA %>\' share a button.</p>' + 
		'<p>Studies that summarize data across many people find that the IAT predicts discrimination ' + 
		'in hiring, education, healthcare, and law enforcement. ' + 
		'However, taking an IAT once (like you just did) is not likely to predict your future behavior well.</p>' + 
		'<br/><div ><img  src="<%= global.dataviz %>" class="img-responsive"></div>'+ 
		'<br/><p><b>Does the order in which I took the IAT matter?</b></p>'+
		'<p>The order in which you take the test can influence your results, but the effect is small. ' + 
		'We minimize this effect by giving practice trials after the categories switch sides. ' + 
		'We also randomly assign the order of the IAT so that some people get one order and other people get the reverse order.</p>'+ 
		'<p><b>I still have questions about the IAT.</b></p>'+
		'<p>If you have questions about the IAT, please consult the links at the top of the page, ' + 
		'where you will find answers to frequently asked questions, links to related research, ' + 
		'and additional information about implicit associations. ' + 
		'You may also <a href="mailto:demofeedback@projectimplicit.net">email us</a>  with questions or comments.</p>';

	API.addSequence([
	{
		mixer:'branch',
		conditions:[
			{compare:'global.isTouch', to:true}
		],
		data: //Touch
		[{
			header: 'Debriefing',
			questions:[
				{
					type:'info',
					name: 'iatresults',
					description: info
				}
			]
		}],
		elseData: // Not touch
		[{
			header: 'Debriefing',
			questions:[
				{
					type:'info',
					name: 'iatresults',
					description: info + '<hr>' + 
					'<h4>Please answer the following questions about your results:</h4>'
				},
				{
					type:'dropdown',
					name: 'broughtwebsite',
					description:'<p>1. What brought you to this website?</p>',
					answers: [
						'Assignment for school',
						'Assignment for work',
						'Mention in a news story (any medium)',
						'Mention or link at a non-news Internet site',
						'My Internet search for this topic or a related topic',
						'Recommendation of a friend or co-worker',
						'Other'
					]
				},
				{
					type:'grid',
					name: 'iatevaluations',
					description: '<p>2. What do you think of the IAT?</p>',
					columns: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
					rows:[
						'To what extent did you enjoy trying the IAT?',
						'To what extent did the IAT score you received change your view of yourself?',
						'To what extent are you skeptical of the IAT score that you received?'
					],
					rowStemCss: {width:'280px'}
				},
				{
					type:'info',
					description:'<h4>Click "Submit" to submit your answers.</h4></p>'
				}
			]
		}]
    }
    ]);

	return API.script;
});




