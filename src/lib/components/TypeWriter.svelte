<script>
	import { onMount } from 'svelte';
	let i = 0;
	let transitioning = false;

	const strings = [
		{ text: 'Hello World', timetoshow: 3000, timetohide: 300 },
		{ text: "This is xngzak's portfolio", timetoshow: 2500, timetohide: 400 },
		{ text: "I'm just an enthusiast", timetoshow: 2000, timetohide: 300 },
		{ text: '"so far"', timetoshow: 3000, timetohide: 400 }
	];
	onMount(() => {
		transitioning = true;
	});

	function restart(duration) {
		setTimeout(function () {
			transitioning = false;
			setTimeout(function () {
				i++;
				transitioning = true;
			}, duration + strings[i % strings.length]['timetohide']);
		}, duration + strings[i % strings.length]['timetoshow']);
	}
	function typewriter(node, { speed = 5 }) {
		const text = node.textContent;
		const duration = text.length / (speed * 0.01);
		restart(duration);
		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<div id="typewriter_container">
	{#if transitioning}
		<p id="typewriter" transition:typewriter>
			{strings[i % strings.length]['text']}
		</p>
	{/if}
</div>

<style>
	#typewriter::after {
		content: '|';
		text-align: center;
		animation-name: blink;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
	#typewriter {
		font-family: 'RobotoMono';
		text-align: center;
		font-size: 20px;
	}

	#typewriter_container {
		width: 14rem;
		height: 8rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@keyframes blink {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
