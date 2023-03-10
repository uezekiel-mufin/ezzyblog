import { defineCliConfig } from 'sanity/cli';

export const projectId = process.env.NEXT_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_SANITY_DATASET;
export default defineCliConfig({
	api: {
		projectId: 'a891wky7',
		dataset: 'production',
	},
});
