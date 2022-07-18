import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-canvas-mock'

Enzyme.configure({ adapter: new Adapter() })

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
