<script>
	let { form } = $props();

	//export let form;
	console.log(form);

	let isRemote = $state(false);
	let city = $state('');
	let province = $state('');
	let country = $state('');
	let formSubmitted = $state(false);

	function handleSubmit(event) {
		formSubmitted = true;

		if (!isRemote && !city.trim() && !province.trim() && !country.trim()) {
			event.preventDefault();
		}
	}
</script>

<form method="POST" class="mx-auto flex max-w-lg flex-col justify-center" onsubmit={handleSubmit}>
	<label for="job-id" class="flex flex-col py-3">
		Job ID
		<input
			class="rounded-md border border-slate-300"
			id="job-id"
			name="jobId"
			type="text"
			placeholder="Job ID"
			value={form?.jobId ?? ''}
		/>
	</label>
	<label for="title" class="flex flex-col py-3">
		Job Title
		<input
			id="title"
			name="title"
			type="text"
			value={form?.title ?? ''}
			required
			class="rounded-md border border-slate-300"
		/>
	</label>
	<!-- LOCATION OR REMOTE -->
	<fieldset class="flex flex-col py-3">
		<legend>Location</legend>

		<label for="is_remote">
			<input
				id="is_remote"
				name="isRemote"
				type="checkbox"
				class="rounded-sm border border-slate-300"
				bind:checked={isRemote}
			/>
			Remote Position
		</label>

		<div class="flex flex-col py-3">
			<label for="City">
				City
				<input
					class="rounded-md border border-slate-300"
					id="city"
					name="city"
					type="text"
					placeholder="City"
					bind:value={city}
				/>
			</label>
			<label for="province" class="mx-2">
				Province
				<input
					class="rounded-md border border-slate-300"
					id="provicne"
					name="province"
					type="text"
					placeholder="Province"
					bind:value={province}
				/>
			</label>
			<label for="country" class="mx-2">
				Country
				<input
					class="rounded-md border border-slate-300"
					id="country"
					name="country"
					type="text"
					placeholder="Country"
					bind:value={country}
				/>
			</label>
			<input type="hidden" name="locationID" id="locationID" />

			<button
				type="button"
				class="mx-3 rounded-md border border-orange-600 bg-red-300 bg-opacity-20 p-2"
				>Add Location</button
			>
			{#if !isRemote && !city && !province && !country && formSubmitted}
				<p class="mt-1 text-sm text-red-500">
					Please select either Remote Position or enter at least one location detail.
				</p>
			{/if}
		</div>
	</fieldset>

	<label for="employment" class="flex flex-col py-3">
		Employment Type
		<select class="rounded-md border border-slate-300" id="employment" name="employmentTypeId">
			<option value="">Select an option</option>
			<option value="full-time">Full-Time</option>
			<option value="part-time">Part-Time</option>
			<option value="casual">Casual</option>
			<option value="contract">Contract</option>
		</select>
	</label>
	<label for="experience" class="flex flex-col py-3">
		Experience Level
		<select class="rounded-md border border-slate-300" id="experience" name="experienceLevelId">
			<option value="">Select an option</option>
			<option value="entry">Entry Level</option>
			<option value="mid">Mid Level</option>
			<option value="senior">Senior Level</option>
		</select>
	</label>
	<label for="education" class=" flex flex-col py-3">
		Education
		<select class="rounded-md border border-slate-300" id="education" name="educationLevelId">
			<option value="">Select an option</option>
			<option value="high-school">High School</option>
			<option value="bachelors">Bachelor's</option>
			<option value="masters">Master's</option>
			<option value="phd">PhD</option>
		</select>
	</label>

	<label for="job-description" class="flex flex-col py-3">
		Job Description
		<textarea
			class="rounded-md border border-slate-300"
			id="job-description"
			name="jobDescription"
			rows="8"
		></textarea>
	</label>
	<fieldset class="flex flex-row py-3">
		<div>
			<label for="skills">
				Skills
				<input
					class="rounded-md border border-slate-300"
					id="skills"
					name="skills"
					type="text"
					placeholder="Add Skills"
				/>
				<input type="hidden" name="skillId" id="skillId" />
			</label>
		</div>
		<button type="button" class="ml-2 rounded bg-slate-300 px-3 py-1">Add Skill</button>
		<div id="addedSkills" class="mt-3 flex flex-wrap gap-2">
			<!-- empty for now -->
		</div>
	</fieldset>
	<label for="benefits" class="flex flex-col">
		Benefits
		<textarea class="rounded-md border border-slate-300" id="benefits" name="benefits" rows="4">
		</textarea>
	</label>
	<h4>Salary Range</h4>
	<div class="flex flex-row justify-between">
		<div class="flex flex-col">
			<label for="salary-range-min"> </label>
			<input
				class="mt-1 rounded-md border border-slate-300"
				id="salary-range-min"
				name="salaryRangeMin"
				type="number"
				placeholder="Minimum"
			/>
		</div>
		<div class="flex flex-col">
			<label for="salary-range-max"></label>
			<input
				class="mt-1 rounded-md border border-slate-300"
				id="salary-range-max"
				name="salaryRangeMax"
				type="number"
				placeholder="Maximum"
			/>
		</div>
	</div>
	<label for="application-deadline" class="py-3">
		Application Deadline
		<input
			class="rounded-md border border-slate-300"
			id="application-deadline"
			name="applicationDeadline"
			type="date"
		/>
	</label>
	<button class="my-5 rounded bg-slate-300 p-3">Submit</button>
</form>
