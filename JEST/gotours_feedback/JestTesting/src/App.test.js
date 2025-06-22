// Do not include any other packages other than the following packages
import React from 'react';
import { mount } from 'enzyme';
import App from './App.js';



// Uncomment the following test suite and write your code as described


// describe('In the App Component,', () => {
//     const component = mount(<App />);
   

//     it('test the presence of the name field', () => {
//       // Write your test case here
//       });

//       it('test the presence of the emailId field', () => {
//          // Write your test case here
//       });

//       it('test the presence of the rating field', () => {
//         // Write your test case here
//       });

//     it('test the presence of the comments field', () => {
// 		 // Write your test case here
// 	});
	
// 	it('test the presence of the message that should be displayed after clicking the submit button', () => {
// 		 // Write your test case here
// 	});

// });	 


describe('In the App Component,', () => {
    const component = mount(<App />);

    it('test the presence of the name field', () => {
        expect(component.find('#name')).toHaveLength(1);
    });

    it('test the presence of the emailId field', () => {
        expect(component.find('#emailId')).toHaveLength(1);
    });

    it('test the presence of the rating field', () => {
        expect(component.find('#rating')).toHaveLength(1);
    });

    it('test the presence of the comments field', () => {
        expect(component.find('#comments')).toHaveLength(1);
    });

    it('test the presence of the message that should be displayed after clicking the submit button', () => {
        component.find('#name').simulate('change', { target: { value: 'Donald' } });
        component.find('#emailId').simulate('change', { target: { value: 'donald@outlook.com' } });
        component.find('#rating').simulate('change', { target: { value: '5' } });
        component.find('#comments').simulate('change', { target: { value: 'Good' } });
        component.find('button').simulate('click');

        expect(component.text()).toContain('Thanks for your feedback!!!');
    });
});