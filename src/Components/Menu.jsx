// menu.js
import React, { Component } from 'react';

export const MenuItem = ({ children }) => <li>{children}</li>;

export default class Menu extends Component {
  static Item = MenuItem;

  render() {
    return (
      <ul>{this.props.children}</ul>
    );
  }
}