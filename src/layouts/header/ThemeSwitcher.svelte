<button class="items-center" aria-label="Toggle dark theme" onclick={trigger_dark}>
	{#if dark}
		{@render moon()}
	{:else}
		{@render sun()}
	{/if}
</button>

<script lang="ts">
	import { onMount } from "svelte";

	let { sun, moon, dark = $bindable(false) } = $props();

    type Theme = "light" | "dark";

    function updateMermaidMedia(theme: Theme): void {
      const mediaMap = {
        dark: 'all',
        light: 'none'
      };

      document.querySelectorAll('[id^="mermaid-dark"]').forEach(el =>
        el.setAttribute('media', mediaMap[theme] || 'none')
      );
    }

	/**
	 * Apply theme to DOM and persist to localStorage
	 * @param on whether to enable dark mode
	 */
	function turn_dark(on: boolean) {
		let theme = (dark = on) ? "dark" : "light";
		// Update CSS custom properties via data attribute
		document.documentElement.dataset.theme = theme;
		// Persist user preference across sessions
		localStorage.setItem("theme", theme);

        updateMermaidMedia(theme);
	}

	/**
	 * Handle theme toggle with animated transition effect
	 * @param event Mouse event for click coordinates
	 */
	function trigger_dark(event: MouseEvent) {
		const trigger = () => turn_dark(!dark);

		let transition;
		if (!(transition = document.startViewTransition?.(trigger))) return trigger(); // Compatibility check

		// Get click coordinates for radial animation origin
		const x = event.clientX;
		const y = event.clientY;
		transition.ready.then(() => {
			// Create expanding circle animation from click point
			const path = [`circle(0% at ${x}px ${y}px)`, `circle(130% at ${x}px ${y}px)`];
			document.documentElement.animate(
				{
					// Reverse animation direction based on theme transition
					clipPath: dark ? [...path].reverse() : path
				},
				{
					duration: 400,
					easing: "ease-in",
					// Keep end state after animation completes to avoid flicker
					fill: "forwards",
					// Target different pseudo-elements for incoming/outgoing content
					pseudoElement: dark ? "::view-transition-old(root)" : "::view-transition-new(root)"
				}
			);
		});
	}

	onMount(() => {
      const themeFromStorage = localStorage.getItem("theme");
      const appliedTheme: Theme = themeFromStorage === "dark" ? "dark" : "light";

      turn_dark(appliedTheme === "dark");
	});
</script>
