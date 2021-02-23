import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TextField from "@material-ui/core/TextField";

import UserForm from "../../../src/screens/user/UserForm";
import CustomButton from "../../../src/components/CustomButton";

Enzyme.configure({ adapter: new Adapter() });

describe("<UserForm />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(
        <UserForm
          clearList={() => {}}
          toggleUsername={() => {}}
          navigateToUserRoute={() => {}}
        />
      );

      const textFieldsCount = wrapper.find(TextField).length;
      const buttonsCount = wrapper.find(CustomButton).length;

      expect(textFieldsCount).toBe(1);
      expect(buttonsCount).toBe(2);
    });
  });

  describe("render()", () => {
    test("username state value", () => {
      const username = "username";
      const wrapper = shallow(
        <UserForm
          username={username}
          clearList={() => {}}
          toggleUsername={() => {}}
          navigateToUserRoute={() => {}}
        />
      );

      const stateUsername = wrapper.state("username");

      expect(stateUsername).toBe(username);
    });
  });
});
