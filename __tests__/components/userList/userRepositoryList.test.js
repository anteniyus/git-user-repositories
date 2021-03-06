import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TableCell } from "@material-ui/core";

import UserRepositoryList from "../../../src/screens/user/UserRepositoryList";
import TableComponent from "../../../src/components/CustomTable";
import CircularIndeterminate from "../../../src/components/CircularIndeterminate";

Enzyme.configure({ adapter: new Adapter() });

describe("<UserRepositoryList />", () => {
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
      const data = [
        {
          id: 1,
          name: "1",
          starsCount: 1,
          forksCount: 1,
          htmlUrl: "sample.com/1",
        },
      ];

      const wrapper = mount(
        <UserRepositoryList data={data} isLoading={false} />
      );

      expect(wrapper.instance().props.data[0].id).toEqual(1);
      expect(wrapper.instance().props.data[0].name).toEqual("1");
      expect(wrapper.instance().props.data[0].starsCount).toEqual(1);
      expect(wrapper.instance().props.data[0].forksCount).toEqual(1);
      expect(wrapper.instance().props.data[0].htmlUrl).toEqual("sample.com/1");

      expect(wrapper.instance().props.data[0].id).not.toBe(undefined);
      expect(wrapper.instance().props.data[0].name).not.toBe(undefined);
      expect(wrapper.instance().props.data[0].starsCount).not.toBe(undefined);
      expect(wrapper.instance().props.data[0].forksCount).not.toBe(undefined);
      expect(wrapper.instance().props.data[0].htmlUrl).not.toBe(undefined);
    });
  });

  describe("render()", () => {
    test("renders the basic component", () => {
      const wrapper = mount(<UserRepositoryList data={[]} isLoading={false} />);

      const table = wrapper.find(TableComponent);
      expect(table).toHaveLength(1);

      const row = table.find("tr");
      expect(row).toHaveLength(1);

      expect(wrapper.contains(<TableCell>Name</TableCell>)).toBe(true);
      expect(wrapper.contains(<TableCell>Stars Count</TableCell>)).toBe(true);
      expect(wrapper.contains(<TableCell>Forks Count</TableCell>)).toBe(true);
    });
  });

  describe("render()", () => {
    test("renders the component with data", () => {
      const data = [
        {
          id: 1,
          name: "1",
          starsCount: 1,
          forksCount: 1,
          htmlUrl: "sample.com/1",
        },
        {
          id: 2,
          name: "2",
          starsCount: 2,
          forksCount: 2,
          htmlUrl: "sample.com/2",
        },
      ];

      const wrapper = mount(
        <UserRepositoryList data={data} isLoading={false} />
      );

      const table = wrapper.find(TableComponent);
      const row = table.find("tr");
      expect(row).toHaveLength(3);
    });
  });

  describe("Loading", () => {
    test("check circular component", () => {
      const data = [
        {
          id: 1,
          name: "1",
          starsCount: 1,
          forksCount: 1,
          htmlUrl: "sample.com/1",
        },
        {
          id: 2,
          name: "2",
          starsCount: 2,
          forksCount: 2,
          htmlUrl: "sample.com/2",
        },
      ];

      const wrapper = mount(<UserRepositoryList data={data} isLoading />);

      const circular = wrapper.find(CircularIndeterminate);
      expect(circular).toHaveLength(1);
    });
  });

  describe("Loading", () => {
    test("check no other component", () => {
      const data = [
        {
          id: 1,
          name: "1",
          starsCount: 1,
          forksCount: 1,
          htmlUrl: "sample.com/1",
        },
        {
          id: 2,
          name: "2",
          starsCount: 2,
          forksCount: 2,
          htmlUrl: "sample.com/2",
        },
      ];

      const wrapper = mount(<UserRepositoryList data={data} isLoading />);

      const table = wrapper.find(TableComponent);
      const row = table.find("tr");
      expect(row).toHaveLength(0);
    });
  });
});
