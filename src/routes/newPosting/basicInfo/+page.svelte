<script>
	export let form;
</script>

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
			<label for="job-id" class="block text-sm font-medium text-gray-700"
				>Job Reference Number</label
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
							d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
						/>
					</svg>
				</div>
				<input
					class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
					id="job-id"
					name="jobId"
					type="text"
					placeholder="Enter Job Reference Number"
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
