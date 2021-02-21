import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import UserForm from "../../../src/components/userForm/UserForm";

Enzyme.configure({ adapter: new Adapter() });

describe("<UserForm />", () => {
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
