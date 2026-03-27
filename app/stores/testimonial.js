export const useTestimonialStore = defineStore("testimonial", {
  state: () => ({
    errors: null,
    loading: false,
    testimonials: [],
    testimonial: {},
  }),

  getters: {},

  actions: {
    async all() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.testimonials = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async store(formData) {
      const supabase = useSupabaseClient();

      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("testimonials")
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
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .eq("id", id)
          .single();

        this.testimonial = data;

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message;
        throw error;
      }
    },

    async update(id, formData) {
      const supabase = useSupabaseClient();
      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("testimonials")
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
      } finally {
        this.loading = false;
      }
    },

    async delete(id) {
      const supabase = useSupabaseClient();

      try {
        const { error } = await supabase
          .from("testimonials")
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

    async getTestimonials() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .eq("status", "approved")
          .eq("is_featured", true)
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.testimonials = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },
  },
});
