<script>
	//export let form;
</script>

<div class="mb-8 rounded-sm border-2 border-rose-200 p-6 shadow-sm">
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
			<label for="employment" class="block text-sm font-medium text-gray-700">Employment Type</label
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
