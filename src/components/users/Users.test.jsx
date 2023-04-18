import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from "react-router-dom";
import React from "react";
import axios from "axios";
import AppRouter from "../../router/AppRouter";
import Users from "./Users";
import {renderWithRouter} from "../../test/helpers/renderWithRouter";

jest.mock('axios')

describe('USERS APP', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    })
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('test redirect to details page',  async () => {
        axios.get.mockReturnValue(response)
        render(renderWithRouter(<Users />));
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        userEvent.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    });
})

