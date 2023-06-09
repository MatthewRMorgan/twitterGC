define(['questAPI'], function(Quest){
    var API = new Quest();

	API.addQuestionsSet('basicSelect', 
	{
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true,
		answers: ['Strongly Disagree', 'Moderately Disagree' ,'Slightly Disagree', 'Neither Agree nor Disagree', 'Slightly Agree', 'Moderately Agree', 'Strongly Agree'],
		helpText: 'Selecting an answer once colors it blue.<br/>You can change your answer by selecting another option.<br/>To confirm, click the selected (blue) button a second time.'
	});
    
API.addPagesSet('qPage1', 
	{
		progressBar: '<%= pagesMeta.number %> out of 12',
		decline:true,
		numbered: false,
		v1style: 2,
        header: 'Policy Questionnaire'
	});

API.addPagesSet('qPage2', 
	{
		progressBar: '<%= pagesMeta.number %> out of 12',
		decline:true,
		numbered: false,
		v1style: 2,
        header: 'Policy Questionnaire'
	});
	
	API.addPagesSet('qPage3', 
	{
		progressBar: '<%= pagesMeta.number %> out of 12',
		decline:true,
		numbered: false,
		v1style: 2,
        header: 'Policy Questionnaire'
	});
	
	API.addPagesSet('qPage4', 
	{
		progressBar: '<%= pagesMeta.number %> out of 12',
		decline:true,
		numbered: false,
		v1style: 2,
        header: 'Policy Questionnaire'
	});
    API.addSequence([
    {mixer:'random',
    data:[
    // 1. This is a page object
    {mixer:'wrapper', data:[
    {
        // It has a questions property
	inherit:'qPage1',
        questions:[
            // 1a. This is the first question (a text input):
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport1',
		        stem: 'North Carolina&#x27;s General Assembly once passed a law that directed all public schools, college campuses, and government agencies to require that every multiple-occupancy bathroom or changing facility (e.g., school restroom, locker room, changing room, or shower room) be used only by people based on their biological sex (i.e., the physical condition of being male or female, which is stated on a person&#x27;s birth certificate). This law required that transgender people use the bathroom that corresponds to the gender on their birth certificate. </br></br><b>I support this law.</b>'
            }
        ]
    },
    // 2. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage1',
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport2',
		stem: 'North Carolina&#x27;s General Assembly once passed a law that directed all public schools, college campuses, and government agencies to require that every multiple-occupancy bathroom or changing facility (e.g., school restroom, locker room, changing room, or shower room) be used only by people based on their biological sex (i.e., the physical condition of being male or female, which is stated on a person&#x27;s birth certificate). This law required that transgender people use the bathroom that corresponds to the gender on their birth certificate. </br></br><b>Every state should adopt a law like this.</b>'
                
            }
        ]
    },
    // 3. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage1',
        questions:[
            // 3a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport3',
		        stem: 'North Carolina&#x27;s General Assembly once passed a law that directed all public schools, college campuses, and government agencies to require that every multiple-occupancy bathroom or changing facility (e.g., school restroom, locker room, changing room, or shower room) be used only by people based on their biological sex (i.e., the physical condition of being male or female, which is stated on a person&#x27;s birth certificate). This law required that transgender people use the bathroom that corresponds to the gender on their birth certificate. </br></br><b>It is wrong for people to use a bathroom that doesn&apos;t correspond with their biological sex.</b>'
            }
        ]
    },
    // 7. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage1',
        questions:[
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport4',
	        	stem: 'North Carolina&#x27;s General Assembly once passed a law that directed all public schools, college campuses, and government agencies to require that every multiple-occupancy bathroom or changing facility (e.g., school restroom, locker room, changing room, or shower room) be used only by people based on their biological sex (i.e., the physical condition of being male or female, which is stated on a person&#x27;s birth certificate). This law required that transgender people use the bathroom that corresponds to the gender on their birth certificate. </br></br><b>Transgender people should be allowed to use any bathroom they feel comfortable with.</b>'
            }
        ]
    }
    ]},
    
    {mixer:'wrapper', data:[
    {
        // It has a questions property
	inherit:'qPage2',
        questions:[
            // 1a. This is the first question (a text input):
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport5',
                stem: 'The University of North Carolina&#x27;s LGBTQ Task Force supports, provides, and fully funds counseling services that help transgender people understand their gender-related experiences and feel secure in their gender identity. </br></br><b>I support the mission of this Task Force.</b>'
            }
        ]
    },
    // 2. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage2',
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport6',
                stem: 'The University of North Carolina&#x27;s LGBTQ Task Force supports, provides, and fully funds counseling services that help transgender people understand their gender-related experiences and feel secure in their gender identity. </br></br><b>Every university should have a Task Force like this.</b>'
            }
        ]
    },
    {
        // It has the same structure as the previous one
	inherit:'qPage2',
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport7',
                stem: 'The University of North Carolina&#x27;s LGBTQ Task Force supports, provides, and fully funds counseling services that help transgender people understand their gender-related experiences and feel secure in their gender identity. </br></br><b>It is wrong for university counselors to provide services that help transgender people.</b>'
            }
        ]
    },
    {
        // It has the same structure as the previous one
	inherit:'qPage2',
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport8',
                stem: 'The University of North Carolina&#x27;s LGBTQ Task Force supports, provides, and fully funds counseling services that help transgender people understand their gender-related experiences and feel secure in their gender identity. </br></br><b>Government agencies should fund counseling services that promote the transgender community.</b>'
            }
        ]
    }
    ]}, 
    
    {mixer:'wrapper', data:[
    {
        // It has a questions property
	inherit:'qPage3',
        questions:[
            // 1a. This is the first question (a text input):
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport9',
                stem: 'The United States Department of Defense (DoD) once announced a policy stating that transgender people are allowed to serve openly in the United States military, and cannot be discharged solely for identifying as transgender. According to this policy, current military personnel may transition to their preferred gender with the support of a military medical provider. After transitioning, military personnel must use berthing, bathroom, and shower facilities that correspond with their preferred gender, and meet their preferred gender&#x27;s physical fitness standards for the military. </br></br><b>It is wrong for transgender people to serve in the military.<b>'
            }
        ]
    },
    // 2. This is the second page object
    {
        // It has the same structure as the previous one
	inherit:'qPage3',
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport10',
                stem: 'The United States Department of Defense (DoD) once announced a new policy stating that transgender people are allowed to serve openly in the United States military, and cannot be discharged solely for identifying as transgender. According to this policy, current military personnel may transition to their preferred gender with the support of a military medical provider. After transitioning, military personnel must use berthing, bathroom, and shower facilities that correspond with their preferred gender, and meet their preferred gender&#x27;s physical fitness standards for the military. </br></br><b>I support this policy.</b>'
            }
        ]
    },
    {
        // It has the same structure as the previous one
	inherit:'qPage3',
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport11',
                stem: 'The United States Department of Defense (DoD) once announced a new policy stating that transgender people are allowed to serve openly in the United States military, and cannot be discharged solely for identifying as transgender. According to this policy, current military personnel may transition to their preferred gender with the support of a military medical provider. After transitioning, military personnel must use berthing, bathroom, and shower facilities that correspond with their preferred gender, and meet their preferred gender&#x27;s physical fitness standards for the military. </br></br><b>Every country&apos;s military should have a policy like this.<b>'
            }
        ]
    },
    {
        // It has the same structure as the previous one
	inherit:'qPage3',
        questions:[
            // 2a. But only one question
            {
                inherit : {set:'basicSelect'},
                name: 'policysupport12',
                stem: 'The United States Department of Defense (DoD) once announced a new policy stating that transgender people are allowed to serve openly in the United States military, and cannot be discharged solely for identifying as transgender. According to this policy, current military personnel may transition to their preferred gender with the support of a military medical provider. After transitioning, military personnel must use berthing, bathroom, and shower facilities that correspond with their preferred gender, and meet their preferred gender&#x27;s physical fitness standards for the military. </br></br><b>Transgender people should be allowed to serve in the military as their preferred gender.</b>'
            }
        ]
    }
    ]}
    

    ]}
]);
	return API.script;
});



















