<script>
	//let from = { $props };

	let isRemote = $state(false);
	let city = $state('');
	let province = $state('');
	let country = $state('');
	let multipleLocations = $state(false);
	let locations = $state([]);
	let duplicateLocation = $state(false);
	let formSubmitted = $state(false);

	function handleSubmit(event) {
		formSubmitted = true;

		if (!isRemote && !city.trim() && !province.trim() && !country.trim()) {
			event.preventDefault();
		}
	}
	function checkDuplicateLocation() {
		duplicateLocation = '';

		const duplicate = locations.find((loc) => {
			if (city.trim() && loc.city === city) return true;
			if (province.trim() && loc.province === province && !city.trim()) return true;
			if (country.trim() && loc.country === country && !city.trim() && !province.trim())
				return true;

			return false;
		});

		if (duplicate) {
			if (city.trim()) duplicateLocation = 'City already exists.';
			else if (province.trim()) duplicateLocation = 'Province already exists.';
			else duplicateLocation = 'Country already exists.';

			return true;
		}
		return false;
	}

	function addLocation() {
		if (city.trim() || province.trim() || country.trim()) {
			if (!checkDuplicateLocation()) {
				const newLocation = {
					id: crypto.randomUUID(),
					city: city,
					province: province,
					country: country
				};

				locations = [...locations, newLocation];

				city = '';
				province = '';
				country = '';
			}
		}
	}
	function removeLocation(id) {
		locations = locations.filter((loc) => loc.id !== id);
	}
</script>

<!-- Location Section -->
<div class="mb-8 rounded-sm bg-violet-100 p-6">
	<h3 class="mb-4 flex items-center text-xl font-semibold text-violet-800">
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
				d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
		Location
	</h3>

	<div class="mb-4 flex flex-wrap gap-4">
		<label class="flex items-center rounded-lg bg-white p-3 shadow-sm transition hover:shadow">
			<input
				id="is_remote"
				name="isRemote"
				type="checkbox"
				class="h-5 w-5 rounded-md border-gray-300 text-violet-600 focus:ring-violet-500"
				bind:checked={isRemote}
			/>
			<span class="ml-2 text-gray-700">Remote Position</span>
		</label>

		<label class="flex items-center rounded-lg bg-white p-3 shadow-sm transition hover:shadow">
			<input
				id="multiple_locations"
				name="multipleLocations"
				type="checkbox"
				class="h-5 w-5 rounded-md border-gray-300 text-violet-600 focus:ring-violet-500"
				bind:checked={multipleLocations}
			/>
			<span class="ml-2 text-gray-700">Multiple Locations</span>
		</label>
	</div>

	{#if duplicateLocation}
		<p class="mb-4 rounded-md bg-red-100 p-2 text-sm text-red-700">{duplicateLocation}</p>
	{/if}

	<div class="grid gap-6 md:grid-cols-3">
		<div>
			<label for="city" class="block text-sm font-medium text-gray-700">City</label>
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
					class="block w-full rounded-md border-gray-300 pl-10 focus:border-emerald-500 focus:ring-violet-500"
					id="city"
					name="city"
					type="text"
					placeholder="Enter City"
					bind:value={city}
				/>
			</div>
		</div>

		<div>
			<label for="province" class="block text-sm font-medium text-gray-700">Province/State</label>
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
							d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
						/>
					</svg>
				</div>
				<input
					class="block w-full rounded-md border-gray-300 pl-10 focus:border-violet-500 focus:ring-violet-500"
					id="province"
					name="province"
					type="text"
					placeholder="Enter Province/State"
					bind:value={province}
				/>
			</div>
		</div>

		<div>
			<label for="country" class="block text-sm font-medium text-gray-700">Country</label>
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
							d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<input
					class="block w-full rounded-md border-gray-300 pl-10 focus:border-violet-500 focus:ring-violet-500"
					id="country"
					name="country"
					type="text"
					placeholder="Enter Country"
					bind:value={country}
				/>
			</div>
		</div>
	</div>

	<input type="hidden" name="locationID" id="locationID" />
	<input type="hidden" name="allLocations" value={JSON.stringify(locations)} />

	{#if multipleLocations}
		<button
			type="button"
			class="mt-4 inline-flex items-center rounded-md border border-transparent bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
			onclick={addLocation}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="-ml-1 mr-2 h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
				/>
			</svg>
			Add Location
		</button>
	{/if}

	{#if locations.length > 0}
		<div id="locations" class="mt-4 rounded-lg bg-white p-4 shadow-sm">
			<h4 class="flex items-center font-medium text-gray-700">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-5 w-5 text-violet-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
					/>
				</svg>
				Added Locations:
			</h4>
			<ul class="mt-2 divide-y divide-gray-200">
				{#each locations as location, index}
					<li class="flex items-center justify-between py-3">
						<span class="text-gray-700">
							{location.city ? location.city + ', ' : ''}
							{location.province ? location.province + ', ' : ''}
							{location.country}
						</span>
						<button
							type="button"
							class="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
							onclick={() => removeLocation(location.id)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-1 h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
							Remove
						</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if !isRemote && !city && !province && !country && formSubmitted}
		<p class="mt-4 rounded-md bg-red-100 p-2 text-sm text-red-700">
			Please select either Remote Position or enter at least one location detail.
		</p>
	{/if}
</div>
