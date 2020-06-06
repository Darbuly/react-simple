import React from './react'
import ReactDom from './reactDom'



const ele = (
    <div className='active' title='123'>
        hello
    </div>
);
ReactDom.render('ele', document.querySelector("#app"));

console.log(ele);



