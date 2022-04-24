export const hello = (msg: string) => {
  console.log(msg);
};

export const addHelloInBody = () => {
  const div = document.createElement("div");
  div.innerHTML = "Hello ESM In Bower";
  document.body.appendChild(div);
};
