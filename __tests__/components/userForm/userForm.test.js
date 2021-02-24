import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TextField from "@material-ui/core/TextField";

import UserForm from "../../../src/screens/user/UserForm";
import CustomButton from "../../../src/components/CustomButton";

Enzyme.configure({ adapter: new Adapter() });

describe("<UserForm />", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    jest.spyOn(console, "warn");
  });

  afterEach(() => {
    /* eslint-disable no-console,jest/no-standalone-expect */
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });

  describe("props", () => {
    test("check props requirements", () => {
      const wrapper = mount(
        <UserForm
          clearList={() => {}}
          toggleUsername={() => {}}
          navigateToUserRoute={() => {}}
          setLoading={() => {}}
        />
      );

      expect(wrapper.instance().props.clearList).not.toBe(undefined);
      expect(wrapper.instance().props.toggleUsername).not.toBe(undefined);
      expect(wrapper.instance().props.navigateToUserRoute).not.toBe(undefined);
      expect(wrapper.instance().props.setLoading).not.toBe(undefined);
    });
  });

  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(
        <UserForm
          clearList={() => {}}
          toggleUsername={() => {}}
          navigateToUserRoute={() => {}}
          setLoading={() => {}}
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
          setLoading={() => {}}
        />
      );

      const stateUsername = wrapper.state("username");

      expect(stateUsername).toBe(username);
    });
  });
});
