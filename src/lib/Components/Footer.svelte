<script>
	import { Info, MapTrifold } from 'phosphor-svelte';
	import logo from '../assets/logo-jesi-2022.svg';
</script>

<div
	class="text-teal-800 space-y-2 text-xl transition-opacity mt-20 border-t border-teal-800 flex flex-col"
>
	<div
		class="opacity-60  font-pally font-bold tracking-wider text-2xl hover:opacity-100 transition-opacity"
	>
		<a href="/">elmetro</a>
	</div>

	<div
		class="flex space-x-2 items-center text-teal-800 opacity-60 hover:opacity-100 transition-opacity"
	>
		<MapTrifold weight="duotone" />
		<a class="" href="/map">Mapa</a>
	</div>

	<div
		class="flex space-x-2 items-center text-teal-800 opacity-60 hover:opacity-100 transition-opacity"
	>
		<Info />
		<a class="" href="/about">Más información</a>
	</div>

	<div
		class="flex space-x-2 items-baseline text-teal-800 opacity-60 hover:opacity-100 transition-opacity"
	>
		<img src={logo} class="" width="17px" alt="Logo de Jesús Enrique" />
		<a href="https://jesirgb.com" class=""> Desarrollado por Jesús Rascón </a>
	</div>
</div>
