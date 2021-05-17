<script context="module">
	export async function load({
		page: {
			params: { slug }
		},
		fetch
	}) {
		const res = await fetch('data.json');

		if (res.ok) {
			return { props: { slug, api: await res.json() } };
		}

		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import data from '../../static/data.json';
	export let slug;
	export let api;
</script>

<h1>{slug}</h1>
<p>API fetch: {api.id} - {api.name}</p>
<p>JSON Import: {data.id} - {data.name}</p>
