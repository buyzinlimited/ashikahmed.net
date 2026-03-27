<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const supabase = useSupabaseClient();

const user = ref(null);

onMounted(async () => {
  const { data } = await supabase.auth.getUser();
  user.value = data.user;
});

const route = useRoute();
const mobileMenuOpen = ref(false);

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMenu = () => {
  mobileMenuOpen.value = false;
};

const isActive = (path) => {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
};

const headerClasses = computed(
  () =>
    "sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl",
);

const updateProfile = async () => {
  try {
    const { error } = await supabase.auth.updateUser({
      email: "info@ashikahmed.net",
      name: "Ashik Ahmed",
    });

    if (error) throw error;

    alert("Profile updated successfully");
  } catch (error) {
    alert(error.message || "Profile update failed");
  }
};

const logout = async () => {
  await supabase.auth.signOut();
};
</script>

<template>
  <header :class="headerClasses">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <div class="flex h-20 items-center justify-between gap-4">
        <!-- Brand -->
        <NuxtLink
          to="/"
          class="flex min-w-0 items-center gap-3 no-underline"
          @click="closeMenu"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-emerald-200"
          >
            <img
              src="/logo.jpg"
              alt="Ashik Ahmed Logo"
              class="w-full object-contain"
            />
          </div>

          <div class="min-w-0">
            <h1
              class="truncate text-lg font-bold tracking-tight text-slate-900 md:text-xl"
            >
              Ashik Ahmed
            </h1>
            <p
              class="truncate text-xs font-medium text-emerald-600 md:text-sm mb-0"
            >
              Full Stack Developer
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-2 md:flex">
          <NuxtLink
            v-for="item in nav"
            :key="item.label"
            :to="item.to"
            class="rounded-xl px-4 py-2 text-base font-medium transition no-underline"
            :class="
              isActive(item.to)
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
            "
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden md:flex md:items-center md:gap-3">
          <template v-if="user">
            <NuxtLink
              to="/dashboard"
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-primary"
              >
                A
              </div>
            </NuxtLink>
            <div class="flex-1">
              <h4 class="text-sm font-semibold text-slate-900">
                {{ user?.email }}
              </h4>
              <p class="text-xs text-slate-500">Administrator</p>
            </div>
          </template>
          <template v-else>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
            >
              Work With Me
            </NuxtLink>
          </template>
        </div>

        <!-- Mobile Toggle -->
        <button
          type="button"
          @click="toggleMenu"
          class="inline-flex h-11 w-11 items-center justify-center rounded border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="border-t border-slate-200 py-4 md:hidden"
        >
          <nav class="flex flex-col gap-2">
            <NuxtLink
              v-for="item in nav"
              :key="item.label"
              :to="item.to"
              @click="closeMenu"
              class="rounded-xl px-4 py-3 text-sm font-medium transition"
              :class="
                isActive(item.to)
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-emerald-600'
              "
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <div class="mt-4 border-t border-slate-200 pt-4">
            <NuxtLink
              to="/contact"
              @click="closeMenu"
              class="no-underline inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Work With Me
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped></style>
