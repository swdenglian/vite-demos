export const hello = () => {
  console.log("hello esm in bower");
};

export const addHelloInBody = () => {
    const div = document.createElement('div');
    div.innerHTML = 'Hello ESM In Bower';
    document.body.appendChild(div);
};
