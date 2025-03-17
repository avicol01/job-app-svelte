<script>
	let duplicateSkill = $state(false);
	let skills = $state([]);
	let skillName = $state('');

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

<div class="rounded- mb-8 border-2 border-purple-300 p-6 shadow-sm">
	<h3 class="mb-4 flex items-center text-xl font-semibold text-purple-800">
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
					class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
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
					class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
					id="benefits"
					name="benefits"
					rows="4"
					placeholder="List benefits such as health insurance, retirement plans, vacation days, etc."
				></textarea>
			</div>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<label for="skills" class="block text-sm font-medium text-gray-700">Required Skills</label>
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
						class="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
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
					class="focus:purple-amber-700 -ml-px inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
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
							class="mr-2 h-5 w-5 text-purple-500"
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
							<div class="flex items-center rounded-full bg-purple-100 px-3 py-1">
								<span class="text-sm text-purple-800">
									{skill.skillName}
								</span>
								<button
									type="button"
									class="ml-1.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-purple-600 hover:bg-purple-200 hover:text-purple-900 focus:bg-purple-500 focus:text-white focus:outline-none"
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
