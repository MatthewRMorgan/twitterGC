define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat8.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
    var global = API.getGlobal();

	return iatExtension({
		category1 : {
			name : 'Transgender People', 
			title : {
				media : {word : 'Transgender People'}, 
				css : {color:'#31b404','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'tcelb1.jpg'},
				{image: 'tcelb2.jpg'},
				{image: 'tcelb5.jpg'},
				{image: 'tcelb6.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31b404','font-size':'2.3em'} 
		},	
		category2 :	{
			name : 'Cisgender People', 
			title : {
				media : {word : 'Cisgender People'}, 
				css : {color:'#31b404','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'ciscelb3.jpg'},
				{image: 'ciscelb4.jpg'},
				{image: 'ciscelb5.jpg'},
				{image: 'ciscelb6.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31b404','font-size':'2.3em'}
		},
		attribute2 : 
		{
			name : 'Good words', //Will appear in the data.
			title : {
				media : {word : 'Good words'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
		        {word : 'Friend'}, 
		        {word : 'Smiling'},
		        {word : 'Adore'}, 
		        {word : 'Joyful'},
		        {word : 'Pleasure'}, 
		        {word : 'Friendship'},
		        {word : 'Happy'}, 
		        {word : 'Attractive'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute1 : 
		{
			name : 'Bad words', //Will appear in the data.
			title : {
				media : {word : 'Bad words'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
                {word : 'Bothersome'}, 
		        {word : 'Poison'},
		        {word : 'Pain'}, 
		        {word : 'Nasty'},
		        {word : 'Dirty'}, 
		        {word : 'Hatred'},
		        {word : 'Rotten'}, 
		        {word : 'Horrific'}	
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image: 'https://github.com/MatthewRMorgan/twitterGC/tree/main/docs/resources/pictures/IAT'
		},
		isTouch : global.isTouch,		
		//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
		//categoryA is the name of the category that is found to be associated with attribute1,
		//and categoryB is the name of the category that is found to be associated with attribute2.
		fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest strong automatic preference for categoryB over categoryA.',
		fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest moderate automatic preference for categoryB over categoryA.',
		fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest weak automatic preference for categoryB over categoryA.',
		fb_equal_CatAvsCatB : 'Your data suggest no automatic preference between categoryA and categoryB.'
	});
});



























