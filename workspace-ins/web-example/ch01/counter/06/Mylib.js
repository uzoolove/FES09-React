const Mylib = (() => {
  // 지정한 속성과 자식 요소를 가지는 요소 노드를 생성해서 반환
  const createElement = (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if(props){
      for(const attrName in props){
        const value = props[attrName];
        if(attrName.startsWith('on')){
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        }else{
          elem.setAttribute(attrName, value);
        }
      }
    }

    // 자식 요소 추가
    for(let child of children){
      if(typeof child === 'string' || typeof child === 'number'){
        child = document.createTextNode(child);
      }else if(typeof child === 'function'){
        child = child();
      }
      elem.appendChild(child);
    }

    return elem;
  };

  // 루트노드를 관리하는 객체를 생성
  const createRoot = (rootNode) => {
    return {
      // 루트노드 하위에 지정한 컴포넌트를 렌더링 한다.
      render(appFn){
        rootNode.appendChild(appFn());
      }
    };
  };

  return { createElement, createRoot };
})();


export default Mylib;