
const languageButtons = document.querySelectorAll('.language-btn');
const languageList = [];

languageButtons.forEach(button => {
  languageList.push(button.getAttribute('data-language'));
});

console.log(languageList);