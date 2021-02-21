import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import toJson from "enzyme-to-json";
// import configureStore from "redux-mock-store"; // Smart components
//

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
});

// Enzyme.configure({ adapter: new Adapter() });

// it("Render 2 CustomButtons", () => {
//   const wrapper = shallow(
//     <UserForm
//       clearList={() => {}}
//       toggleUsername={() => {}}
//       navigateToUserRoute={() => {}}
//     />
//   );
//
//   const textFieldsCount = wrapper.find(TextField).length;
//   const buttonsCount = wrapper.find(CustomButton).length;
//
//   expect(textFieldsCount).toBe(1);
//   expect(buttonsCount).toBe(2);
// });
