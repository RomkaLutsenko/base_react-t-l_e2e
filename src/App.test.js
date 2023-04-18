import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/Hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders learn react link', async () => {
    render(<App />);
    screen.debug()
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({color: 'red'});
  });

  test('CLICK EVENT', async () => {
    render(<App />);
    screen.debug()
    const btn = await screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  });

  test('INPUT EVENT', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);

    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // Искусственное событие, есть userEvent - он более приближенный к реальности
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // })
    // Обрабатываются буквально все возможные события
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
  });
})

