import "../styles/style.css";
import { inject } from "@vercel/analytics";

function createMainPage(): void {
    const app = document.querySelector<HTMLElement>('#app');
    if (!app) return;

    app.innerHTML = `
    <div class="App">
      <header class="App-header">
        <p>Hello! 👋 </p>
      </header>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    inject();
    createMainPage();
})