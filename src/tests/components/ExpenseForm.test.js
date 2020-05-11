import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'; 
import moment from 'moment';

test('should render Expense Form correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense Form with data correctly',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form subbmission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', ()=>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value)
});

test('should set note on text area change', ()=>{
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change',{
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value)
});

test('should set amount if valid input', ()=>{
    const value = '22.00';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value)
});

test('should not set amount if invalid input', ()=>{
    const value = '15.000';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('')
});

test('should can spy example with correct arguments',()=>{
    const onSubmitSpy = jest.fn();
    onSubmitSpy('Pallav','Tripathi');
    expect(onSubmitSpy).toHaveBeenCalledWith('Pallav','Tripathi');
});

test('should call onSubmit props for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calenderFocused')).toBe(true);
});