/**
 * @time 2021/06/25
 * 
 * markdown 编辑器 
 * 
*/

import React from "react";
import Editor from 'for-editor';

export default class ForEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  handleChange = (value) => {
    this.setState({
      value
    })
  }

  handleSave = () => {
    return this.state.value;
  }

  render() {
    const { value } = this.state
    return (
      <Editor
        height={this.props.height}
        preview={this.props.preview}
        value={value}
        onSave={this.handleSave}
        onChange={this.handleChange} />
    )
  }

}