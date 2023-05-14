import Login from "./login.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

class App {
    activeScreen
    container
    
    constructor(container) {
        this.container = container;
    }

    changeActiveScreen (screen) {
        if (this.activeScreen !== undefined) {
            this.container.innerHTML = "";

        }

        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }
}

const container = document.getElementById("app")
const login = new Login();

const app = new App ();
app.changeActiveScreen(login);


export default App