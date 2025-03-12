<script>
	let { form } = $props();

	console.log(form);

	let isRemote = $state(false);
	let city = $state('');
	let province = $state('');
	let country = $state('');
	let formSubmitted = $state(false);
	let multipleLocations = $state(false);
	let locations = $state([]);

	let duplicateLocation = $state(false);
	let duplicateSkill = $state(false);
	let deadlineRequired = $state('');

	let skills = $state([]);
	let skillName = $state('');

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

	function checkDuplicateSkill() {
		duplicateSkill = '';
		const dupSkill = skills.find((sk) => {
			if (skillName.trim() && sk.skillName === skillName) return true;
			return false;
		});
		if (dupSkill) {
			if (skillName.trim()) duplicateSkill = 'Skill already added.';
			return true;
		}
		return false;
	}

	function addSkills() {
		if (!checkDuplicateSkill() && skillName.trim()) {
			const newSkill = {
				id: crypto.randomUUID(),
				skillName: skillName
			};

			skills = [...skills, newSkill];

			skillName = '';
		}
	}
	function removeSkill(id) {
		skills = skills.filter((sk) => sk.id !== id);
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

	<!-- Basic Job Information Section -->
	<div class="mb-8 rounded-sm bg-indigo-100 p-6">
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
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
				/>
			</svg>
			Basic Information
		</h3>
		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label for="job-id" class="block text-sm font-medium text-gray-700">Job ID</label>
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
								d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
							/>
						</svg>
					</div>
					<input
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
						id="job-id"
						name="jobId"
						type="text"
						placeholder="Enter Job ID"
						value={form?.jobId ?? ''}
					/>
				</div>
			</div>

			<div>
				<label for="title" class="block text-sm font-medium text-gray-700">Job Title</label>
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
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</div>
					<input
						id="title"
						name="title"
						type="text"
						value={form?.title ?? ''}
						required
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
						placeholder="Enter Job Title"
					/>
				</div>
			</div>
		</div>
	</div>

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

	<!-- Job Details Section -->
	<div class="mb-8 rounded-sm bg-rose-100/60 p-6">
		<h3 class="mb-4 flex items-center text-xl font-semibold text-rose-800">
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
					d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
			Job Details
		</h3>

		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label for="employment" class="block text-sm font-medium text-gray-700"
					>Employment Type</label
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
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<select
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500"
						id="employment"
						name="employmentTypeId"
					>
						<option value="">Select an option</option>
						<option value="full-time">Full-Time</option>
						<option value="part-time">Part-Time</option>
						<option value="casual">Casual</option>
						<option value="contract">Contract</option>
						<option value="seasonal">Seasonal</option>
						<option value="apprenticeship">Apprenticeship</option>
						<option value="internship">Internship</option>
						<option value="freelance">Freelance</option>
					</select>
				</div>
			</div>

			<div>
				<fieldset class="mt-2">
					<legend class="block text-sm font-medium text-gray-700">Employment Status</legend>
					<div class="mt-2 flex space-x-6">
						<div class="flex items-center">
							<input
								type="radio"
								id="isPermanent"
								name="permanentStatus"
								value="permanent"
								class="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
							/>
							<label for="isPermanent" class="ml-3 block text-sm font-medium text-gray-700">
								<div class="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="mr-1 h-5 w-5 text-rose-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
									Permanent
								</div>
							</label>
						</div>
						<div class="flex items-center">
							<input
								type="radio"
								id="notPermanent"
								name="permanentStatus"
								value="temporary"
								class="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
							/>
							<label for="notPermanent" class="ml-3 block text-sm font-medium text-gray-700">
								<div class="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="mr-1 h-5 w-5 text-rose-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Temporary
								</div>
							</label>
						</div>
					</div>
				</fieldset>
			</div>

			<div>
				<label for="experience" class="block text-sm font-medium text-gray-700"
					>Experience Level</label
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
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<select
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500"
						id="experience"
						name="experienceLevelId"
					>
						<option value="">Select an option</option>
						<option value="entry">Entry Level</option>
						<option value="junior">Junior</option>
						<option value="mid">Mid Level</option>
						<option value="senior">Senior Level</option>
					</select>
				</div>
			</div>

			<div>
				<label for="education" class="block text-sm font-medium text-gray-700">Education</label>
				<div class="relative mt-1 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 14l9-5-9-5-9 5 9 5z" />
							<path
								d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
							/>
						</svg>
					</div>
					<select
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500"
						id="education"
						name="educationLevelId"
					>
						<option value="">Select an option</option>
						<option value="high-school">High School/GED</option>
						<option value="certificate">Certificate</option>
						<option value="diploma">Diploma</option>
						<option value="associate">Associate Degree</option>
						<option value="bachelors">Bachelor's Degree</option>
						<option value="masters">Master's</option>
						<option value="phd">PhD</option>
					</select>
				</div>
			</div>
		</div>
	</div>

	<!-- Description & Skills Section -->
	<div class="rounded- mb-8 bg-amber-100/60 p-6">
		<h3 class="mb-4 flex items-center text-xl font-semibold text-amber-800">
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
					d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
				/>
			</svg>
			Description & Skills
		</h3>

		<div class="space-y-6">
			<div>
				<label for="job-description" class="block text-sm font-medium text-gray-700"
					>Job Description</label
				>
				<div class="mt-1">
					<textarea
						class="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
						id="job-description"
						name="jobDescription"
						rows="6"
						required
						placeholder="Describe the job responsibilities, requirements, and expectations..."
					></textarea>
				</div>
			</div>

			<div>
				<label for="benefits" class="block text-sm font-medium text-gray-700">Benefits</label>
				<div class="mt-1">
					<textarea
						class="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
						id="benefits"
						name="benefits"
						rows="4"
						placeholder="List benefits such as health insurance, retirement plans, vacation days, etc."
					></textarea>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="skills" class="block text-sm font-medium text-gray-700">Required Skills</label
					>
					{#if duplicateSkill}
						<p class="text-sm text-red-600">{duplicateSkill}</p>
					{/if}
				</div>
				<div class="mt-1 flex rounded-md shadow-sm">
					<div class="relative flex flex-grow items-stretch focus-within:z-10">
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
									d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
								/>
							</svg>
						</div>
						<input
							class="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
							id="skills"
							name="skills"
							type="text"
							placeholder="Add Skills (e.g. JavaScript, Project Management)"
							bind:value={skillName}
						/>
						<input type="hidden" name="skillId" id="skillId" />
					</div>
					<button
						type="button"
						class="-ml-px inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
						onclick={addSkills}
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
						Add Skill
					</button>
				</div>
				{#if skills.length > 0}
					<div id="addedSkills" class="mt-4 rounded-lg bg-white p-4 shadow-sm">
						<h4 class="flex items-center font-medium text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-5 w-5 text-amber-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
								/>
							</svg>
							Added Skills:
						</h4>
						<div class="mt-2 flex flex-wrap gap-2">
							{#each skills as skill, index}
								<div class="flex items-center rounded-full bg-amber-100 px-3 py-1">
									<span class="text-sm text-amber-800">
										{skill.skillName}
									</span>
									<button
										type="button"
										class="ml-1.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-amber-600 hover:bg-amber-200 hover:text-amber-900 focus:bg-amber-500 focus:text-white focus:outline-none"
										onclick={() => removeSkill(skill.id)}
										aria-label={`Remove ${skill.skillName} skill`}
									>
										<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
											<path
												fill-rule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Compensation & Deadline Section -->
	<div class="mb-8 rounded-sm bg-blue-100 p-6">
		<h3 class="mb-4 flex items-center text-xl font-semibold text-blue-800">
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
					d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			Compensation & Deadline
		</h3>

		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label for="salary-range" class="block text-sm font-medium text-gray-700"
					>Salary Range</label
				>
				<div class="mt-2 grid grid-cols-2 gap-4">
					<div class="relative rounded-md shadow-sm">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<span class="text-gray-500 sm:text-sm">$</span>
						</div>
						<input
							class="block w-full rounded-md border-gray-300 pl-7 focus:border-blue-500 focus:ring-blue-500"
							id="salary-range-min"
							name="salaryRangeMin"
							type="number"
							placeholder="Minimum"
						/>
					</div>
					<div class="relative rounded-md shadow-sm">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<span class="text-gray-500 sm:text-sm">$</span>
						</div>
						<input
							class="block w-full rounded-md border-gray-300 pl-7 focus:border-blue-500 focus:ring-blue-500"
							id="salary-range-max"
							name="salaryRangeMax"
							type="number"
							placeholder="Maximum"
						/>
					</div>
				</div>
			</div>

			<div>
				<div class="flex items-start justify-between">
					<label for="application-deadline" class="block text-sm font-medium text-gray-700"
						>Application Deadline</label
					>
					{#if !deadlineRequired && formSubmitted}
						<p class="text-sm text-red-600">Deadline Required</p>
					{/if}
				</div>
				<div class="relative mt-2 rounded-md shadow-sm">
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
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<input
						class="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500"
						id="application-deadline"
						name="applicationDeadline"
						type="date"
						required
						bind:value={deadlineRequired}
					/>
				</div>
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
			Create Job Posting
		</button>
	</div>
</form>
