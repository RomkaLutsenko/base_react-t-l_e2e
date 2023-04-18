import {render} from '@testing-library/react';
import React from "react";
import {renderWithRouter} from "../../test/helpers/renderWithRouter";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe('USER APP', () => {
    test('renders learn react link',() => {
        render(renderWithRouter(<Navbar />));
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        const usersLink = screen.getByTestId('users-link')

        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
})
