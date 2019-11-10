const mainScreen = document.querySelector(`#app`);

const showScreen = (template) => {
  mainScreen.innerHTML = ``;
  mainScreen.prepend(template);
};

export default showScreen;
