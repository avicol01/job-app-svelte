import { createClient } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const companyName = formData.get('companyName');
        const companyDescription = formData.get('companyDescription');
        const websiteUrl = formData.get('websiteUrl');
        const linkedinUrl = formData.get('linkedinUrl');
        const selectedIndustry = formData.get('selectedIndustry');

        if (!companyName) {
            return fail(400, {
                error: 'Company name is required',
                values: Object.fromEntries(formData)
            })
        }

        let industryId;

        if (selectedIndustry) {
            const { data: existingIndustry, error: industryError } = await supabase
                .from('industry')
                .select('id')
                .eq('type', selectedIndustry)
                .single();

            if (industryError && industryError.code !== 'PGRST116') {
                // Error other than "no rows returned"
                return fail(500, {
                    error: 'Error checking industry',
                    values: Object.fromEntries(formData)
                });
            }

            if (existingIndustry) {
                industryId = existingIndustry.id;
            } else {
                const { data: newIndustry, error: createIndustryError } = await supabase
                    .from('industry')
                    .insert([{ type: selectedIndustry }])
                    .select('id')
                    .single();

                if (createIndustryError) {
                    return fail(500, {
                        error: 'Error creating industry',
                        values: Object.fromEntries(formData)
                    })
                }

                industryId = newIndustry.id;
            }
        }
        const now = new Date().toISOString();
        const { data, error: companyError } = await supabase
            .from('company').insert([
                {
                    name: companyName,
                    description: companyDescription,
                    website_url: websiteUrl || null,
                    linkedin_url: linkedinUrl || null,
                    industry_id: industryId || null,
                    created_at: now
                }
            ])
            .select('id')
            .single();
        if (companyError) {
            return fail(500, {
                error: 'Error creating company',
                values: Object.fromEntries(formData)
            });
        }

        // Redirect to a success page or company profile
        throw redirect(303, `/companies/${data.id}`);
    }
}