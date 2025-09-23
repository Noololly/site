import "../styles/style.css";
import { inject } from "@vercel/analytics";
import { createHeader} from "../components/header.ts";
import { createFooter } from "../components/footer.ts";

function createMainPage(): void {
    const app = document.querySelector<HTMLElement>('#app');
    if (!app) return;

    app.innerHTML = `
    <div class="App">
      <header class="App-header">
        ${createHeader()}
        <main class="main-content-card animate-fade-in">
          <h1 class="rainbow-text-animated" id="greeting">Hello!</h1> <p>👋</p>
          <p class="intro-text">My name is olly :) make yourself at home in my webpage!</p>
        </main>
        <div class="background-animated"></div>
      </header>
      ${createFooter()}
    </div>
    `;

    // Optional: Typewriter or fade-in effect for greeting
    const greeting = document.getElementById('greeting');
    if (greeting) {
      greeting.style.opacity = '0';
      setTimeout(() => {
        greeting.style.transition = 'opacity 1.2s';
        greeting.style.opacity = '1';
      }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inject(); // Vercel analytics
    createMainPage();
})