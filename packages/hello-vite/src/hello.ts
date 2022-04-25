import { isUndefined } from 'lodash';

export const hello = (msg: string) => {
  console.log(msg,isUndefined(undefined));
};

export const addHelloInBody = () => {
  const div = document.createElement("div");
  div.innerHTML = "Hello ESM In Bower";
  document.body.appendChild(div);
};
