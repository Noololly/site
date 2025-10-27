async function linksPage() {
    const container = document.querySelector<HTMLDivElement>('#links');
    if (!container) return;

    try {
        const res = await fetch('/links_fragment.html');
        if (!res.ok) {
            console.error(`Failed to load fragment: ${res.status}`);
            container.innerHTML = `<p>Unable to load links at this time.</p>`;
            return;
        }
        container.innerHTML = await res.text();
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Error loading links fragment', msg);
        container.innerHTML = `<p>Unable to load links at this time.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    void linksPage();
})