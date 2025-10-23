
import { getByText, queryByRole, screen } from '@testing-library/dom';

// silencia warnings innecesarios de React durante las pruebas
const originalError = console.error;
console.error = (...args) => {
  const msg = args[0];
  if (typeof msg === 'string') {
    if (
      msg.includes('Maximum update depth exceeded') ||
      msg.includes('ReactDOMTestUtils.act') ||
      msg.includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return; 
    }
  }
  originalError(...args);
};

// 🔧 Agrega algunas utilidades básicas de jest-dom manualmente
beforeAll(() => {
  jasmine.addMatchers({
    toBeInTheDocument: () => ({
      compare: (received) => ({
        pass: document.body.contains(received),
        message: `Expected element ${received} to be in the document`
      })
    }),
    toHaveTextContent: () => ({
      compare: (received, expectedText) => {
        const text = received?.textContent || '';
        const pass = text.includes(expectedText);
        return {
          pass,
          message: `Expected element to have text content: ${expectedText}`
        };
      }
    })
  });
});
