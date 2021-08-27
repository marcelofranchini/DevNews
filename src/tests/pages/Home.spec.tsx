import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('Home page', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText, debug } = render(<Home />);

    debug();

    expect(getByText("Olá Dev!")).toBeInTheDocument();
    expect(getByAltText("Home image")).toBeInTheDocument();
  });
});