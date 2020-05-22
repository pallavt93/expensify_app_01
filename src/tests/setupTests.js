import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dotEnv from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
});

//require('dotenv').config({path: '.env.test'});
dotEnv.config({path: '.env.test'});