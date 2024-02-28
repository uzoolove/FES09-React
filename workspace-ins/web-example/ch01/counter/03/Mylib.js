const Mylib = (() => {
  const createElement = (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if(props){
      for(const attrName in props){
        const value = props[attrName];
        elem.setAttribute(attrName, value);
      }
    }

    // 자식 요소 추가
    for(let child of children){
      if(typeof child === 'string' || typeof child === 'number'){
        child = document.createTextNode(child);
      }
      elem.appendChild(child);
    }

    return elem;
  };
  return { createElement };
})();

// const Mylib = {
//   createElement: ()=> (tag, props, children) => {
    
//   }
// };


export default Mylib;