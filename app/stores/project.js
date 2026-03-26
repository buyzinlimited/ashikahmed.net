export const useProjectStore = defineStore("project", {
  state: () => ({
    errors: null,
    loading: false,
    projects: null,
    project: null,
  }),

  getters: {},

  actions: {
    async getProjectBySlug(slug) {
      const supabase = useSupabaseClient();
      try {
        const { data, error } = await supabase
          .from("projects")
          .select(
            `
            *,
            category:categories (
              id,
              name,
              slug
            )
          `,
          )
          .eq("slug", slug)
          .single();

        console.log(data);
        this.project = data;
      } catch (error) {
        if (error.response) {
          return Promise.reject(error.response);
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
