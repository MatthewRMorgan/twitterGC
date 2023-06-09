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
		progressBar: '<%= pagesMeta.number %> out of 4',
		header: 'Contact Questionnaire',
		decline:true,
		numbered: false,
		v1style: 2
	});

    API.addSequence([
    {mixer:'random',
    data:[
    // 1. This is a page object
    {
        // It has a questions property
	inherit:'qPage',
        questions:[
            // 1a. This is the first question (a text input):
            {
                inherit : {set:'basicSelect'},
                name: 'contacttrans1',
		stem: 'Do you have a family member who is transgender?',
                answers: ['No', 'Yes']
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
                name: 'contacttrans2',
		stem: 'Do you have a friend who is transgender?',
                answers: ['No', 'Yes']
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
                name: 'contacttrans3',
		stem: 'Do you have friendly interactions with transgender people on a regular basis?',
                answers: ['No', 'Yes']
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
                name: 'contacttrans4',
		stem: 'Have you ever met a transgender person?',
                answers: ['No', 'Yes']
            }
        ]
    }
    ]}
]);
	return API.script;
});











