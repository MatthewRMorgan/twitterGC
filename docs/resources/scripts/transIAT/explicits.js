define(['questAPI'], function(Quest){
	
	var API = new Quest();
	var isTouch = API.getGlobal().isTouch;
	
	/**
	* Page prototype
	*/
	API.addPagesSet('basicPage',{
		noSubmit:false, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Questionnaire',
		decline: true,
		declineText: isTouch ? 'Decline' : 'Decline to Answer', 
		autoFocus:true, 
		progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 5' : 'Page <%= pagesMeta.number %> out of 5'
	});
	
    /**
	* Question prototypes
	*/
	API.addQuestionsSet('basicQ',{
		decline: 'true',
		required : true, 		
		errorMsg: {
			required: isTouch ? "Please select an answer, or click 'Decline'" : 
			"Please select an answer, or click 'Decline to Answer'"
		},
		autoSubmit:'true',
		numericValues:'true',
		help: '<%= pagesMeta.number < 5 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});

	API.addQuestionsSet('basicSelect',{
		inherit :'basicQ',
		type: 'selectOne'
	});
	
    API.addQuestionsSet('basicDropdown',{
		inherit :'basicQ',
		type : 'dropdown',
		autoSubmit:false
	});
	
    API.addQuestionsSet('slider',{
		inherit :'basicQ',
        type: 'slider',
        min:1,
        max:100,
        steps:100,
		autoSubmit:false
	});	
	
    API.addQuestionsSet('therm',{
		inherit: 'basicSelect',
		answers: [
			{text:'10 - Extremely warm', value:10},
			{text:'9 - Very warm', value:9},
			{text:'8 - Moderately warm', value:8},
			{text:'7 - Somewhat warm', value:7},
			{text:'6 - Slightly warm', value:6},
			{text:'5 - Neither warm nor cold', value:5},
			{text:'4 - Slightly cold', value:4},
			{text:'3 - Somewhat cold', value:3},
			{text:'2 - Moderately cold', value:2},
			{text:'1 - Very cold', value:1},
			{text:'0 - Extremely cold', value:0}
		]
	});

	
	/**
	*Specific questions
	*/	
    API.addQuestionsSet('att7',{
		inherit : 'basicSelect',
		name: 'att7',
		stem: 'Which statement best describes you?',
		answers: [
			{text:'I strongly prefer cisgender people to transgender people.',value:7},
			{text:'I moderately prefer cisgender people to transgender people.',value:6},
			{text:'I slightly prefer cisgender people to transgender people.',value:5},
			{text:'I like cisgender people and transgender people equally.',value:4},
			{text:'I slightly prefer transgender people to cisgender people.',value:3},
			{text:'I moderately prefer transgender people to cisgender people.',value:2},
			{text:'I strongly prefer transgender people to cisgender people.',value:1}
		]
	});
	
    API.addQuestionsSet('thermTrans',{
		inherit : 'therm',
		name: 'Ttrans_0to10',
		stem: 'How warm or cold do you feel towards <b>transgender people</b>?'
	});
    API.addQuestionsSet('thermCis',{
		inherit : 'therm',
		name: 'Tcis_0to10',
		stem: 'How warm or cold do you feel towards <b>cisgender people</b>?'
	});
    API.addQuestionsSet('sliderTrans',{
		inherit : 'slider',
		name: 'Strans_0to100',
        stem: 'How negative or positive are your feelings toward <b>transgender people</b>?',
        labels: ['Strongly Negative', 'Neutral', 'Strongly Positive']            		
	});
    API.addQuestionsSet('sliderCis',{
		inherit : 'slider',
		name: 'Scis_0to100',
        stem: 'How negative or positive are your feelings toward <b>cisgender people</b>?',
        labels: ['Strongly Negative', 'Neutral', 'Strongly Positive']            		
	});

	if (isTouch)
	{//Only three questions for touch
		API.addSequence([
			{
				mixer : 'random', 
				data : [
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
								questions: {inherit:'thermTrans'}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'thermCis'}							
							}
						]
					},
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
								questions: {inherit:'sliderTrans'}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'sliderCis'}							
							}
						]
					},					
					{
						inherit:'basicPage', 
						questions: {inherit:'att7'}
					}
				]
			}		
		]);
	}
	else
	{
		API.addSequence([
			//First, we present the three direct liking questions.
			{
				mixer : 'random', 
				data : [
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
								questions: {inherit:'thermTrans'}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'thermCis'}							
							}
						]
					},
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
								questions: {inherit:'sliderTrans'}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'sliderCis'}							
							}
						]
					},					
					{
						inherit:'basicPage', 
						questions: {inherit:'att7'}
					}
				]
			}
			
		]);
	}
	return API.script;
});


















