<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const supabase = useSupabaseClient();
const router = useRouter();

const form = reactive({
  email: "info@ashikahmed.net",
  password: "password",
});

const errorMessage = ref("");
const loading = ref(false);

const login = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const { data, error } = await supabase.auth.signInWithPassword(form);
    if (error) {
      errorMessage.value = error.message;
    } else if (data.user) {
      router.push("/dashboard");
    }
  } catch (err) {
    errorMessage.value = "An unexpected error occurred.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50">
    <!-- Login Card -->
    <div
      class="w-full max-w-md bg-white rounded-3xl border border-emerald-200 p-8"
    >
      <!-- Header -->
      <h2 class="text-3xl font-bold text-slate-900 text-center mb-2">
        Welcome Back
      </h2>
      <p class="text-center text-slate-500 mb-6">
        Login to your portfolio account
      </p>

      <!-- Error Message -->
      <p v-if="errorMessage" class="text-red-500 text-center mb-4">
        {{ errorMessage }}
      </p>

      <!-- Form -->
      <form @submit.prevent="login" class="space-y-4">
        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-slate-700 mb-1"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            class="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
          />
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-slate-700 mb-1"
            >Password</label
          >
          <input
            v-model="form.password"
            type="password"
            id="password"
            placeholder="********"
            required
            class="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
          />
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full mt-4 bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-slate-500">
        Don’t have an account?
        <NuxtLink to="/" class="text-emerald-500 hover:underline"
          >Sign up</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
