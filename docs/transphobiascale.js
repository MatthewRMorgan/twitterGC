define(['questAPI'], function(Quest){
    var API = new Quest();

	API.addQuestionsSet('basicSelect', 
	{
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true, 
		helpText: 'Selecting an answer once colors it blue.<br/>You can change your answer by selecting another option.<br/>To confirm, click the selected (blue) button a second time.'
	});
    
API.addPagesSet('qPage', 
	{
		progressBar: '<%= pagesMeta.number %> out of 9',
		decline:true,
		numbered: false,
		v1style: 2,
		header: 'Questionnaire'
	});
    
    API.addSequence([
    {mixer: 'random',
    data:[
    // 1. This is a page object
    {
        // It has a questions property
	inherit:'qPage',
        questions:[
            // 1a. This is the first question (a text input):
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia1',
		stem: 'I don&#146;t like it when someone is flirting with me, and I can&#146;t tell if they are a man or a woman.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    // 2. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage', 
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia2',
		stem: 'I think there is something wrong with a person who says that they are neither a man nor a woman.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    // 3. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage', 
        questions:[
            // 3a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia3',
		stem: 'I would be upset, if someone I&#146;d known a long time revealed to me that they used to be another gender.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    // 5. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage', 
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia4',
		stem: 'I avoid people on the street whose gender is unclear to me.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    // 6. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage', 
        questions:[
            // 6a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia5',
		stem: 'When I meet someone, it is important for me to be able to identify them as a man or a woman.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    // 7. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage', 
        questions:[
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia6',
		stem: 'I believe that the male/female dichotomy is natural.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    // 8. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage', 
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia7',
		stem: 'I am uncomfortable around people who don&#146;t conform to traditional gender roles, e.g., aggressive women or emotional men.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    {
        // It has a questions property
	inherit:'qPage', 
        questions:[
            // 1a. This is the first question (a text input):
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia8',
		stem: 'I believe that a person can never change their gender.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    },
    {
        // It has a questions property
	inherit:'qPage', 
        questions:[
            // 1a. This is the first question (a text input):
            {
                inherit : {set:'basicSelect'},
                name: 'transphobia9',
		stem: 'A person&#146;s genitalia define what gender they are, e.g., a penis defines a person as being a man, a vagina defines a person as being a woman.',
                answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree']
            }
        ]
    }]}
]);
	return API.script;
});











