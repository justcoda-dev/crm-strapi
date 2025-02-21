import type { Schema, Attribute } from '@strapi/strapi';

export interface InputCheckboxOption extends Schema.Component {
  collectionName: 'components_input_checkbox_options';
  info: {
    displayName: 'CheckboxOption';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.Boolean;
    status: Attribute.Boolean;
    type: Attribute.String;
    key: Attribute.String;
  };
}

export interface InputSelectOption extends Schema.Component {
  collectionName: 'components_input_select_options';
  info: {
    displayName: 'selectOption';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.String;
    value: Attribute.String;
    status: Attribute.Boolean;
    key: Attribute.String;
  };
}

export interface InputTextInput extends Schema.Component {
  collectionName: 'components_input_text_inputs';
  info: {
    displayName: 'TextOption';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
    status: Attribute.Boolean;
    type: Attribute.String;
    key: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'input.checkbox-option': InputCheckboxOption;
      'input.select-option': InputSelectOption;
      'input.text-input': InputTextInput;
    }
  }
}
