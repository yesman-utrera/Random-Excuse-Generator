const button = document.getElementById("button");

let excuseGenerator = () => {

  let who = ["My dog", "A bird", "My dad", "Grandma", "The postman", "Billie Eilish", "A furious cat"];
  let what =  ["ate my food", "stole my pants", "robbed my computer", "died", "got sick", "kidnapped me", "needed my help"];
  let when = ["a minute ago", "yesterday", "last night", "right before coming here", "just a moment ago", "a few hours ago", "the day before yesterday"];

  let whoIndex = Math.floor(Math.random() * 7);
  let whatIndex = Math.floor(Math.random() * 7)
  let whenIndex = Math.floor(Math.random() * 7);

  return who[whoIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];

};

button.addEventListener('click', () => {
  document.querySelector(".excuse").innerHTML = excuseGenerator();
});