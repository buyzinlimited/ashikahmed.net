export const useCategoryStore = defineStore("category", {
  state: () => ({
    errors: null,
    loading: false,
    categories: [],
    category: {},
  }),

  getters: {},

  actions: {
    async all() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("categories")
          .select("id, name")
          .order("name", { ascending: true });

        if (error) {
          throw error;
        }

        this.categories = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async getCategories() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("categories")
          .select("id, name")
          .order("name", { ascending: true });

        if (error) {
          throw error;
        }

        this.categories = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },
  },
});
