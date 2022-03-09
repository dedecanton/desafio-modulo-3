import {  render } from "@testing-library/react";
import * as React from 'react';
import AuthContainer from "../../container/AuthContainer";

describe('Auth tests', () => {

    
    test('text "Que bom que você voltou" should be visible!', () => {
        render(<AuthContainer />)
    })


})