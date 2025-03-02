// import { supabase } from "$lib/supabaseClient"

import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()

        let jobId = formData.get('jobId')
        const title = formData.get('title')
        const isRemote = formData.get('isRemote')
        const city = formData.get('city')
        const province = formData.get('province')
        const country = formData.get('country')
        //do I need to add employment, education .. ? 
        const applicationDeadline = formData.get('applicationDeadline')
        const salaryRangeMin = formData.get('salaryRangeMin')
        const salaryRangeMax = formData.get('salaryRangeMax')
        const jobDescription = formData.get('jobDescription')
        const benefits = formData.get('benefits')

        if (jobId.trim() === '') {
            jobId = crypto.randomUUID();
        }

        if (applicationDeadline) {
            const newApplicationDl = new Date(applicationDeadline)
            const currentDate = new Date();

            currentDate.setHours(0, 0, 0, 0);
            newApplicationDl.setHours(0, 0, 0, 0);

            if (newApplicationDl <= currentDate) {
                return fail(400, {
                    error: true,
                    Message: 'Date cannot be today or the past.',
                })
            }
        }

        if (title.length < 2) {
            return fail(400, {
                error: true,
                Message: 'Title must be at least 2 character'
            })
        }

        const locationId = crypto.randomUUID();
        const employmentTypeId = crypto.randomUUID();
        const experienceLevelId = crypto.randomUUID();
        const educationLevelId = crypto.randomUUID();


        const jobData = {
            jobId,
            title,
            isRemote,
            locationId,
            city,
            province,
            country,
            jobDescription,
            applicationDeadline,
            employmentTypeId,
            salaryRangeMin,
            salaryRangeMax,
            experienceLevelId,
            educationLevelId,
            benefits
        }

        console.log('Form data received on server:', jobData);
        // Here save data to db
        return {
            success: true,

        };
    }
};

// const handlePostingSubmit = async (jobId, title) => {

//     const { data, error } = await supabase
//         .from('job_postings')
//         .insert([
//             { id: jobId, position_title: title },
//         ])
//         .select()

//     if (error) {
//         return error;
//     }
//     return data;
// }

// export default handlePostingSubmit;


// const handlePostingSubmit = async (jobId, title) => {
//     try {
//         const { data } = await supabase
//             .from('job_postings')
//             .insert([
//                 {
//                     id: jobId,
//                     position_title: title
//                 }
//             ])
//             .select()

//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export default handlePostingSubmit;


// async function load() {
//     const url =
//         'https://linkedin-data-api.p.rapidapi.com/search-jobs?keywords=golang&locationId=92000000&datePosted=anyTime&sort=mostRelevant';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '20be647355mshcb371e845f872c7p1e6b53jsn9184a9d95eb9',
//             'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// export default load(); 


