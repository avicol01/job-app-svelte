<script>
	let industries = [
		'Agriculture Farming',
		'Automotive',
		'Aerospace & Defense',
		'Banking & Finance',
		'Biotechnology',
		'Chemicals',
		'Construction',
		'Consumer Goods',
		'Education',
		'Energy & Utilities',
		'Entertainment & Media',
		'Fashion & Apparel',
		'Food & Beverage',
		'Government & Public Administration',
		'Healthcare & Pharmaceuticals',
		'Hospitality & Tourism',
		'Insurance',
		'Legal Services',
		'Logistics & Transportation',
		'Manufacturing',
		'Marketing & Advertising',
		'Mining & Metals',
		'Non-Profit & Social Services',
		'Oil & Gas',
		'Personal Care & Beauty',
		'Professional Services',
		'Real Estate',
		'Retail & Wholesale',
		'Safety & Security',
		'Sports & Recreation',
		'Technology',
		'Telecommunications',
		'Trades',
		'Waste Management'
	];

	let query = '';
	let showSuggest = false;
	let filteredIndustries = [];

	let selectedIndustry = '';

	let industryInput;
	let suggestElement;

	function filterIndustries() {
		if (!query.trim()) {
			filteredIndustries = [];

			showSuggest = false;
			return;
		}

		filteredIndustries = industries.filter((industry) =>
			industry.toLowerCase().includes(query.toLowerCase())
		);

		showSuggest = filteredIndustries.length > 0;
	}

	function selectIndustry(industry) {
		query = industry;
		selectedIndustry = industry;
		showSuggest = false;
	}

	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !industryInput.contains(event.target))
				showSuggest = false;
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<form method="POST" class="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
	<!-- Form Header -->
	<div class="mb-8 border-b border-gray-200 pb-4">
		<h2 class="text-3xl font-bold text-indigo-600">Company Registration</h2>
		<p class="mt-2 text-gray-600">
			Your company's information. This will apear on your job posting.
		</p>
	</div>

	<!-- Company Information Section -->
	<div class="mb-8 rounded-sm border-2 border-indigo-200 p-6 shadow-sm">
		<h3 class="mb-4 flex items-center text-xl font-semibold text-indigo-800">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
				/>
			</svg>
			Company Information
		</h3>

		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label for="companyName" class="block text-sm font-medium text-gray-700">Company Name</label
				>
				<div class="relative mt-1 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<input
						id="companyName"
						name="companyName"
						type="text"
						placeholder="Enter Your Company Name"
						required
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
					/>
				</div>
			</div>

			<div>
				<label for="logo" class="block text-sm font-medium text-gray-700">Company Logo</label>
				<div class="mt-1">
					<input
						id="logo"
						type="file"
						name="logo"
						accept="image/*"
						class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					/>
				</div>
			</div>
		</div>

		<div class="mt-6">
			<label for="companyDescription" class="block text-sm font-medium text-gray-700"
				>Company Description</label
			>
			<div class="mt-1">
				<textarea
					id="companyDescription"
					name="companyDescription"
					rows="8"
					placeholder="Describe your company, its mission, values, and work environment..."
					class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
				></textarea>
			</div>
		</div>
	</div>

	<!-- Online Presence Section -->
	<div class="mb-8 rounded-sm border-2 border-indigo-200 p-6 shadow-sm">
		<h3 class="mb-4 flex items-center text-xl font-semibold text-indigo-800">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			Online Presence
		</h3>

		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label for="websiteUrl" class="block text-sm font-medium text-gray-700">Website URL</label>
				<div class="relative mt-1 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							/>
						</svg>
					</div>
					<input
						id="websiteUrl"
						type="url"
						name="websiteUrl"
						placeholder="Website URL"
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
					/>
				</div>
			</div>

			<div>
				<label for="linkedinUrl" class="block text-sm font-medium text-gray-700">LinkedIn URL</label
				>
				<div class="relative mt-1 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
							/>
						</svg>
					</div>
					<input
						id="linkedinUrl"
						type="url"
						name="linkedinUrl"
						placeholder="LinkedIn URL"
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Industry Section -->
	<div class="mb-8 rounded-sm border-2 border-indigo-200 p-6 shadow-sm">
		<h3 class="mb-4 flex items-center text-xl font-semibold text-indigo-800">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
				/>
			</svg>
			Industry Classification
		</h3>

		<div>
			<label for="industry" class="block text-sm font-medium text-gray-700">Industry Type</label>
			<div class="relative mt-1">
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<input
						id="industry"
						name="industry"
						type="text"
						placeholder="Search for an industry"
						bind:value={query}
						on:input={filterIndustries}
						autocomplete="off"
						bind:this={industryInput}
						disabled={selectedIndustry !== ''}
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
					/>
					{#if selectedIndustry !== ''}
						<button
							type="button"
							class="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
							on:click={() => {
								selectedIndustry = '';
								query = '';
							}}
						>
							✕
						</button>
					{/if}
				</div>

				{#if showSuggest}
					<div
						id="industry-suggestions"
						class="absolute left-0 right-0 top-full z-10 mt-1 max-h-60 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg"
						bind:this={suggestElement}
						use:clickOutside
					>
						{#each filteredIndustries as industry}
							<button
								type="button"
								class="w-full px-4 py-2 text-left transition-colors duration-150 hover:bg-indigo-50"
								on:click={() => selectIndustry(industry)}
							>
								{industry}
							</button>
						{/each}
					</div>
				{/if}
				<input
					type="hidden"
					id="selected-industry"
					name="selectedIndustry"
					bind:value={selectedIndustry}
				/>
			</div>
		</div>
	</div>

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
			Register Company
		</button>
	</div>
</form>
