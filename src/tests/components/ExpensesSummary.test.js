import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render Expenses Summary correctly with one expense',()=>{
    const wrapper  = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expenses Summary correctly with multiple expenses',()=>{
    const wrapper  = shallow(<ExpensesSummary expensesCount={4} expensesTotal={500} />);
    expect(wrapper).toMatchSnapshot();
});