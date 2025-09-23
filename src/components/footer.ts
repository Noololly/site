export function createFooter(): string {
  // language=HTML
    return `
    <footer class="site-footer">
      <div class="footer-links">
        <div id="webring-wrapper" style="padding-left: 20px; padding-right: 20px; display: flex; align-items: center;">
          <a href="https://webring.hackclub.com/" id="previousBtn" class="webring-anchor" title="Previous">‹</a>
          <a href="https://webring.hackclub.com/" class="webring-logo" title="Hack Club Webring"></a>
          <a href="https://webring.hackclub.com/" id="nextBtn" class="webring-anchor" title="Next">›</a>
          <script src="https://webring.hackclub.com/embed.min.js"></script>
        </div>
        <a href="https://ctp-webr.ing/noololly/previous" class="footer-link" title="Catppuccin Previous">←</a>
        <a href="https://ctp-webr.ing/" class="footer-link" title="Catppuccin Webring">
          <img src="/catppuccin.png" alt="Catppuccin logo" class="footer-icon catppuccin-icon" />
        </a>
        <a href="https://ctp-webr.ing/noololly/next" class="footer-link" title="Catppuccin Next">→</a>
        <div class="footer-social">
          <a href="https://bsky.app/profile/noololly.studio" class="footer-link" title="Bluesky">
            <img src="/Bluesky_Logo.svg" alt="Bluesky logo" class="footer-icon social-icon" />
          </a>
          <a rel="me" href="https://mastodonapp.uk/@noololly" class="footer-link" title="Mastodon">
            <img src="/Mastodon.svg" alt="Mastodon logo" class="footer-icon social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/olly-de-georgio-158608288/" class="footer-link" title="LinkedIn">
            <img src="/LinkedIn_Logo.png" alt="LinkedIn logo" class="footer-icon social-icon" />
          </a>
        </div>
      </div>
    </footer>
  `;
}
