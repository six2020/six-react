/**
 * @time 2021/06/25
 * 
 * markdown 解析
 * 
*/
import React, { useEffect, useState } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import './index.css';

/**
 * 为代码块显示添加行号
 * @param {String} code MD的代码内容
 */
function beforNumber(code) {
    if (!code.trim()) {
        return code;
    }
    const list = code.split('\n');
    const spanList = ['<span aria-hidden="true" line-row>'];
    list.forEach(() => {
        spanList.push('<span></span>');
    });
    spanList.push('</span>');
    list.push(spanList.join(''));
    return list.join('\n');
}

function Markdown({ content }) {
    const [html, setHtml] = useState();
    useEffect(() => {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight(code) {
                return beforNumber(hljs.highlightAuto(code).value);
            },
        });

        setHtml(content ? marked(content) : null);

    }, [content]);
    return (
        <div
            id="content"
            className="article-detail centent"
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        >
        </div>
    );
}



export default Markdown;