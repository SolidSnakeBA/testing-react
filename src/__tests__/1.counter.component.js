import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Counter from "../examples/1/counter.component";

configure({ adapter: new Adapter() });

test("initial count should be 0", () => {
  const wrapper = shallow(<Counter />);
  expect(wrapper.state().count).toBe(0);
});

test("handleClick should increment the count by 1", () => {
  const wrapper = shallow(<Counter />);

  wrapper.instance().handleClick();
  //wrapper.update();
  expect(wrapper.state().count).toBe(1);

  wrapper.instance().handleClick();
  //wrapper.update();
  expect(wrapper.state().count).toBe(2);
});
