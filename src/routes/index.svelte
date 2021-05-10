<script>
	import { base } from '$app/paths';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import '@smui/button/bare.css';
	import '@smui/tooltip/bare.css';
</script>

<h1>SvelteKit App Trial</h1>
<p>Is this working??</p>
<p><a href="{base}/test">Testing page</a></p>

<div class="container" style="display: flex; flex-wrap: wrap; align-items: center;">
	<Wrapper>
		<span tabindex="0">Material UI tooltip example</span>
		<!--
      For tooltips on things that don't have a
      visually declared boundary, like plain text,
      use the `unbounded` prop to remove the gap
      between the element and the tooltip.
    -->
		<Tooltip unbounded>Tooltip on a span.</Tooltip>
	</Wrapper>
</div>

<style>
	.container > :global(*) {
		margin: 15px;
	}
</style>
