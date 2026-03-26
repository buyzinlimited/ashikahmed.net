export const useProjectStore = defineStore("project", {
  state: () => ({
    errors: null,
    loading: false,
    projects: [],
    project: {},
  }),

  getters: {},

  actions: {
    async all() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.projects = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async store(formData) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("projects")
          .insert([formData])
          .select()
          .single();

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message || "Project insert failed";
        throw error;
      }
    },

    async show(id) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();

        this.project = data;

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message || "Project insert failed";
        throw error;
      }
    },

    async update(id, formData) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("projects")
          .update(formData)
          .eq("id", id)
          .select()
          .single();

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message || "Project update failed";
        throw error;
      }
    },

    async getProjects() {
      const supabase = useSupabaseClient();
      this.loading = true;

      try {
        const { data, error } = await supabase
          .from("projects")
          .select(`*,category:categories (id,name,slug)`)
          .eq("status", "published")
          .order("id", { ascending: false });

        if (error) {
          throw error;
        }

        this.projects = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      } finally {
        this.loading = false;
      }
    },

    async getProjectBySlug(slug) {
      const supabase = useSupabaseClient();
      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("projects")
          .select(`*,category:categories (id,name,slug)`)
          .eq("slug", slug)
          .single();

        if (error) {
          throw error;
        }

        this.project = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      } finally {
        this.loading = false;
      }
    },
  },
});
