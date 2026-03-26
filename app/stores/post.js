export const usePostStore = defineStore("post", {
  state: () => ({
    errors: null,
    loading: false,
    posts: [],
    post: {},
  }),

  getters: {},

  actions: {
    async all() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.posts = data;
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
          .from("posts")
          .insert([formData])
          .select()
          .single();

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message || "Post insert failed";
        throw error;
      }
    },

    async show(id) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("id", id)
          .single();

        this.post = data;

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
          .from("posts")
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

    async delete(id) {
      const supabase = useSupabaseClient();

      try {
        const { error } = await supabase
          .from("posts")
          .delete()
          .eq("id", id)
          .select();

        if (error) throw error;

        return true;
      } catch (error) {
        this.errors = error?.message || "Delete failed";
        console.error("Delete Error:", error);
        return false;
      }
    },

    async getPosts() {
      const supabase = useSupabaseClient();
      this.loading = true;

      try {
        const { data, error } = await supabase
          .from("posts")
          .select(`*,category:categories (id,name,slug)`)
          .eq("status", "published")
          .order("id", { ascending: false });

        if (error) {
          throw error;
        }

        this.posts = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      } finally {
        this.loading = false;
      }
    },

    async getPostBySlug(slug) {
      const supabase = useSupabaseClient();
      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("posts")
          .select(`*,category:categories (id,name,slug)`)
          .eq("slug", slug)
          .single();

        if (error) {
          throw error;
        }

        this.post = data;
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
