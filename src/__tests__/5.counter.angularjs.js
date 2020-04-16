import angular from "angular";
import "angular-mocks";
import { render, fireEvent } from "angularjs-testing-library";
import "@testing-library/jest-dom/extend-expect";

import CounterModule from "../examples/3/counter.module";

beforeEach(() => angular.mock.module(CounterModule.name));

/*function render(html, config) {
  const container = document.createElement("div");
  container.innerHTML = html;
  angular.bootstrap(container, config.modules);
  return {
    container,
    ...getQueriesForElement(container)
  };
}*/

test("initial count should be 0", () => {
  const { getByText } = render("<my-counter></my-counter>");
  expect(getByText("Count is 0")).toBeInTheDocument();
});

test('clicking on "Inc" button should increment the count', () => {
  const { getByText } = render("<my-counter></my-counter>");
  const incrementButton = getByText(/inc/i);

  fireEvent.click(incrementButton);
  expect(getByText("Count is 1")).toBeInTheDocument();

  fireEvent.click(incrementButton);
  expect(getByText("Count is 2")).toBeInTheDocument();
});
