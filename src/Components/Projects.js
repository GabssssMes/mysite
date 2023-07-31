import Memory from "../Images/Memory.png";
import CvProject from "../Images/CV-Project.png";
import ShoppinCart from "../Images/Shoppingcart.png";
import TikTakToe from "../Images/Tik Tak Toe.png";
import WheaterApp from "../Images/Wheater App.png";

let ProjectArray = [];

let techstack = "Game build with React.js.";

let description =
  "As the name suggests, it is a game to test players memory. The goal is to maximize your score by not selecting the same card twice. The memorycards shuffle after every click. ";

ProjectArray.push({
  title: "Memory",
  tech: techstack,
  description: description,
  src: Memory,
  visitSite: "https://gabssssmes.github.io/memory_game/",
  viewCode: "https://github.com/GabssssMes/memory_game",
});
techstack = "App built with JavaScript, HTML and CSS.";

description = "It uses weatherapi to fetch the wheater-data of a city.";
ProjectArray.push({
  title: "Wheater App",
  tech: techstack,
  description: description,
  src: WheaterApp,
  visitSite: "https://gabssssmes.github.io/wheaterApp/",
  viewCode: "https://github.com/GabssssMes/wheaterApp",
});

techstack = "App built with React.js.";

description =
  "The user can type in some personal information, education and work experience and the app prints it out in an A4 PDF format. ";

ProjectArray.push({
  title: "CV Project",
  tech: techstack,
  description: description,
  src: CvProject,
  visitSite: "https://gabssssmes.github.io/create_document/",
  viewCode: "https://github.com/GabssssMes/create_document",
});

techstack = "Simple Shoppingcart built with React.js.";

description = "";

ProjectArray.push({
  title: "Shoppingcart",
  tech: techstack,
  description: description,
  src: ShoppinCart,
  visitSite: "https://gabssssmes.github.io/shoppingcard/",
  viewCode: "https://github.com/GabssssMes/shoppingcard",
});
techstack = "Game built with JavaScript, HTML and CSS.";

description = "";

ProjectArray.push({
  title: "Tic Tac Toe",
  tech: techstack,
  description: description,
  src: TikTakToe,
  visitSite: "https://gabssssmes.github.io/tiktaktoe/",
  viewCode: "https://github.com/GabssssMes/tiktaktoe",
});

export { ProjectArray };
