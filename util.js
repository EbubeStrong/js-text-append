function mk(type, {style = {}, ...props} = {}, children = []) {
  let element = document.createElement(type);

  if (props) {
      Object.assign(element, props);
      Object.assign(element.style, style);
  }

  if (children) {
    element.prepend(...children);
  }

  return element;
}

export { mk };