/**
 * @time 2021/06/25
 * 
 * markdown 编辑器 渲染 ForEditor
 * 
*/

import React, { Component } from 'react';
import ForEditor from './ForEditor'
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';

export default class MarkDownEdit extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: '',
        explain: ''
      }
    }
  
    markdownRef = (ref) => {
      this.markdown = ref;
    }
  
    //绑定快捷键
    componentDidMount() {
      document.addEventListener("keydown", this.onKeyDown)
    }
  
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyDown)
    }
  
    onKeyDown = (e) => {
      switch (e.keyCode) {
        case 13://回车事件
          break
        case 83:
          if (e.ctrlKey) {
            this.handleSave();
          }
      }
    }
  
  
    /**
     * 保存
     */
    handleSave = () => {
      let artile = this.markdown.handleSave();
      alert(artile);
      fetch('http://localhost:8080/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `content=${artile}&title=${this.state.title}&explain=${this.state.explain}`
      }).then(function (response) {
        return response.json()
      }).then(res=>{
        console.log(`res ====>>>>`, res);
      });
  
    }
  
    render() {
      return (
  
        <div className="editor-container">
  
          <div>
            文章名：<Input
              placeholder="请输入文章名称"
              style={{ width: '20%', margin: '20px 0' }}
              value={this.state.title}
              onChange={e=>{this.setState({title: e.target.value})}} />
          </div>
  
          <div>
            文章简介：<Input
                        placeholder="请输入文简介"
                        style={{ width: '50%', margin: '20px 0' }}
                        value={this.state.explain}
                        onChange={e=>{this.setState({explain: e.target.value})}} />
          </div>
  
          <ForEditor
            onRef={this.markdownRef}
            preview={false}
            height="500px"
          />
  
          <Button type="primary" style={{ width: '50%', margin: '20px 0' }} onClick={this.handleSave}>保存</Button>
        </div>
      )
    }
  }