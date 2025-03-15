<script>
	import BasicInfo from './basicInfo/+page.svelte';
	import Location from './location/+page.svelte';
	import JobDetails from './jobDetails/+page.svelte';
	import DescriptionSkills from './descriptionSkills/+page.svelte';
	import CompDeadline from './compDeadline/+page.svelte';

	let { form } = $props();

	console.log(form);

	let isRemote = $state(false);
	let city = $state('');
	let province = $state('');
	let country = $state('');
	let formSubmitted = $state(false);
	let deadlineRequired = $state('');

	function handleSubmit(event) {
		formSubmitted = true;

		if (!isRemote && !city.trim() && !province.trim() && !country.trim() && !deadlineRequired()) {
			event.preventDefault();
		}
	}
</script>

<!-- Job Posting Form -->
<form
	method="POST"
	class="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg"
	onsubmit={handleSubmit}
>
	<!-- Form Header -->
	<div class="mb-8 border-b border-gray-200 pb-4">
		<h2 class="text-3xl font-bold text-indigo-600">Create Job Posting</h2>
		<p class="mt-2 text-gray-600">Fill out the form below to create a new job posting</p>
	</div>

	<BasicInfo bind:form />

	<Location />

	<JobDetails bind:form />

	<DescriptionSkills />

	<CompDeadline bind:form />

	<!-- Submit Button -->
	<div class="flex justify-end">
		<button
			type="submit"
			class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="-ml-1 mr-3 h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			Create Job Posting
		</button>
	</div>
</form>
