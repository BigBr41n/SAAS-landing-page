<script>
	import '../app.css';
	import Banner from '../components/Banner.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<Banner />
<Header />
<slot></slot>
<Footer />
