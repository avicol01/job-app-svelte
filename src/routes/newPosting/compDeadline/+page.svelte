<script>
	let deadlineRequired = $state(true);
</script>

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
			<label for="salary-range" class="block text-sm font-medium text-gray-700">Salary Range</label>
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
				{#if !deadlineRequired}
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
