import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import UserForm from "./UserForm";
import CustomButton from "./CustomButton";

Enzyme.configure({ adapter: new Adapter() });

it("Render 2 CustomButtons", () => {
  const wrapper = shallow(<UserForm />);
  const valueCount = wrapper.find(CustomButton).length;
  expect(valueCount).toBe(2);
});
