import { tweetsData } from './data.js'

const main = document.getElementById('main-container');

// render function that renders all the js data

function render(data) {
  return main.data += `
    <div>
      <div>
        <img class='profilePic' src='${data.profilePic}'/>
        <p class='handler'>${data.handle}</p>
      </div>
    </div>
  `
}