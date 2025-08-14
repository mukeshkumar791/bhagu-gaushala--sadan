import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  <><script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script><script
    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
    crossorigin></script><script
      src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script><script>var Alert = ReactBootstrap.Alert;</script></>
});
