<script context="module">
	import { collection, getDocs } from 'firebase/firestore';
	import { db } from '../../static/firebase.js';
	export async function load() {
		var values = [];

		const querySnapshot = await getDocs(collection(db, 'app'));
		querySnapshot.forEach((doc) => {
			values.push(doc.data());
		});

		return { props: { values } };
	}
</script>

<script>
	import data from '../../static/data.json';
	import { counter } from '../../static/utils.js';

	counter('testing 12345');
	export let values;
</script>

<h1>This is subroute test</h1>
<p>Testing 123</p>
<p>JSON data: {JSON.stringify(data)}</p>

Firebase values:
{JSON.stringify(values[0])}
