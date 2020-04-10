window.dom = {
  //增
  create(string) {
    //创建节点
    const container = document.createElement("template"); //template可放任意标签
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  after(node, node2) {
    //新增一个弟弟
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node3) {
    //新增一个哥哥
    node.parentNode.insertBefore(node3, node);
  },
  append(parent, node) {
    //新增一个儿子
    parent.appendChild(node);
  },
  wrap(node, parent) {
    //新增一个爸爸
    dom.before(node, parent);
    dom.append(parent, node);
  },
  //删
  remove(node) {
    //删除节点
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    //清空节点
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push.call(null, dom.remove(node));
      x = node.firstChild;
    }
    return array;
  },
  //改
  attr(node, name, value) {
    //用于读写属性
    if (arguments.length === 3) {
      // 重载
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    //读文本属性
    node.innerHTML = string;
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    //用于修改style
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  class: {
    add(node, className) {
      //查看class
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    on(node, eventName, fn) {
      //添加/删除事件监听
      node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn) {
      node.removeEventListener(eventName, fn);
    },
  },
  //查
  find(selector, scope) {
    //用于获取标签
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    //查找父元素
    return node.parentNode;
  },
  children(node) {
    //查找子元素
    return node.children;
  },
  sibling(node) {
    //查找兄弟姊妹元素（不包括自己）
    return Array.from(node, parentNode.children).filter((n) => n !== node);
  },
  next(node) {
    //查找弟弟
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    //查找哥哥
    let x = previous.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodeList, fn) {
    //遍历所有节点
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    //获取排行老几
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
