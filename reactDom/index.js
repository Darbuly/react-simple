const ReactDom = {
    render
}

function render(vnode, container) {

    
    if(vnode === undefined) return;

    if(typeof vnode === 'string'){
        const textNode = document.createTextNode(vnode);
        console.log(container);
        return container.appendChild(textNode);
    }
}

export default ReactDom;