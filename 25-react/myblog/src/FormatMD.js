import Markdown from './MD'
import {useState, useEffect} from 'react'

// const input = '# This is a header\n\nAnd this is a paragraph';
// const input = '\
// ```javascript\
//   var a = 10;             \
//   console.log(a);             \
// ```\
//   # 哈哈哈哈![title](a/b.png)\n|a|b|\n|---|---|\n|666|888|\
// ';


// const input = '# 哈哈哈哈\n' +
//       '![title](http://localhost:8081/images/1003.5a9fd.jpg)\n' +
//       '[百度](http://www.baidu.com)\n' +
//       '```javascript\n' +
//       'var a = 666;\n' +
//       'console.log(a)\n' +
//       '```\n' +
//       '|a|b|\n' +
//       '|:---:|:---:|\n' +
//       '|666|888|\n' +
//       '|666|888|\n' +
//       '|666|888|\n' +
//       '|666|888|\n' +
//       '|666|888|\n' +
//       '|666|888|\n' +
//       '|666|888|\n' ;

export default (props)=>{
    const {id} = props.match.params;
    // console.log(`id ====>>>>`, id);

    let [markdown, setMarkdown] = useState('');

    useEffect(()=>{
        fetch(`http://localhost:8080/blog/${id}`).then(res=>res.json()).then(res=>{
            setMarkdown(res.data)
        })
    },[])
    
    return <Markdown  content={markdown} />
}