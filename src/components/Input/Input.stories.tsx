import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "./Input";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  placeholder: "Text",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  disabled: true,
};