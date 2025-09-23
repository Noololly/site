import { ThemeSwitcher} from "../utils/theme-switcher.ts";

export function createHeader(): string {
    const themeSwitcher = new ThemeSwitcher();
    return `
    <div class="header-bar">
      <img class="pfp_image" src="/pfp.jpg" alt="Noololly's profile picture"/>
      <div class="theme-switcher-container">${themeSwitcher.createThemeButton()}</div>
    </div>
    `;
}