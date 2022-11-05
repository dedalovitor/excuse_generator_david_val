/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoum = ["A", "The"];
  let subject = ["jogger", "racoon", "driver", "dog", "comedian", "pinecone"];
  let actions = ["took", "threw", "yellew at", "stole", "bit"];
  let possession = ["my homework", "my toe", "my car", "my shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoum.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * actions.length);
  let possIndx = Math.floor(Math.random() * possession.length);
  let wherIndx = Math.floor(Math.random() * where.length);

  return (
    pronoum[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    actions[actIndx] +
    " " +
    possession[possIndx] +
    " " +
    where[wherIndx] +
    " "
  );
};
