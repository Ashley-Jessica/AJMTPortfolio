import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleTabular extends Component {

  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="navbar_table" id="navbar">
      <Menu tabular className="navbar_Menu">
        <Menu.Item className="navbar_name"
          name='Ashley Jessica M. Torrefiel'
          active={activeItem === 'name'}
          onClick={this.handleItemClick}
          position="left"
        />
        <Menu.Item
          name='About Me'
          href='#about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          position="right"
        />
        <Menu.Item
          name='Skills and Strengths'
          href='#skills'
          active={activeItem === 'skills'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Work/Projects'
          href='#works'
          active={activeItem === 'work'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </div>
    )
  }
}