<script setup>
const privacyHighlights = [
  {
    title: "Information I Collect",
    desc: "Basic contact details, project inquiry information, and communication data you share through forms or email.",
  },
  {
    title: "How Data Is Used",
    desc: "To respond to inquiries, manage projects, improve services, and communicate important updates when necessary.",
  },
  {
    title: "Your Rights",
    desc: "You can request access, correction, or deletion of your personal information at any time.",
  },
];
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Privacy Policy | Ashik Ahmed - Full Stack Developer"
      description="Read the Privacy Policy of Ashik Ahmed to understand how we collect, use, and protect your personal information while using our website and services."
      keywords="Privacy Policy, Data Protection, User Privacy, Personal Data Security, Website Privacy, GDPR Policy"
    />

    <!-- Hero -->
    <section class="relative py-20 md:py-24">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Privacy Policy
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Your privacy matters and your information is handled responsibly.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              This Privacy Policy explains what information may be collected
              through this website, how it is used, and what choices you have
              regarding your personal data when contacting me for web
              development services.
            </p>
          </div>

          <div class="relative">
            <div
              class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div
                class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl"
              ></div>

              <div class="relative">
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-lg font-bold text-emerald-700"
                  >
                    PP
                  </div>

                  <div>
                    <h2 class="text-xl font-semibold text-slate-900">
                      Privacy Overview
                    </h2>
                    <p class="text-sm text-emerald-600">
                      Simple, transparent, and professional
                    </p>
                  </div>
                </div>

                <div class="mt-8 space-y-4">
                  <div
                    v-for="item in privacyHighlights"
                    :key="item.title"
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p class="text-sm font-semibold text-slate-900">
                      {{ item.title }}
                    </p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>

                <div
                  class="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
                >
                  <p class="text-sm leading-6 text-slate-700">
                    Last updated:
                    <span class="font-semibold">March 17, 2026</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Policy Content -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-5xl px-4 md:px-6">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
          <div class="prose prose-slate max-w-none prose-headings:scroll-mt-24">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900">
              Privacy Policy
            </h2>

            <p class="mt-4 text-base leading-7 text-slate-600">
              This Privacy Policy describes how information may be collected,
              used, stored, and protected when you visit this website, submit a
              contact form, request a quote, or communicate regarding web
              development services.
            </p>

            <div class="mt-10 space-y-10">
              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  1. Information Collected
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  When you use this website, certain information may be
                  collected, including your name, email address, phone number,
                  company or project details, budget information, and any other
                  information you choose to provide through contact forms,
                  emails, or project discussions.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  2. How Your Information Is Used
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  Your information may be used to respond to inquiries, provide
                  quotations, discuss project requirements, deliver services,
                  improve communication, and maintain a professional working
                  relationship. Information may also be used for administrative,
                  legal, or security purposes when necessary.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  3. Contact Forms and Communication
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  When you submit a message through the website contact form or
                  email directly, the information you provide is used only for
                  communication related to your request, project, or inquiry. I
                  do not knowingly collect unnecessary personal information
                  beyond what is relevant for business communication.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  4. Cookies and Analytics
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  This website may use cookies, analytics tools, or similar
                  technologies to understand website performance, visitor
                  behavior, and user experience. These tools may collect
                  non-personal information such as browser type, device
                  information, pages viewed, and time spent on the website.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  5. Data Sharing
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  Personal information is not sold or rented to third parties.
                  Information may be shared only when required to operate the
                  website, communicate about your project, comply with legal
                  obligations, protect rights and security, or use trusted
                  service providers such as hosting, email, analytics, or form
                  processing tools.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  6. Data Retention
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  Information is retained only for as long as reasonably needed
                  to respond to inquiries, manage business communication, comply
                  with legal obligations, or maintain project records. When data
                  is no longer needed, reasonable steps may be taken to delete
                  or securely remove it.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  7. Data Security
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  Reasonable technical and organizational measures are taken to
                  protect personal information from unauthorized access, misuse,
                  disclosure, or loss. However, no website or online
                  transmission method can be guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  8. Third-Party Services
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  This website may include links to third-party websites,
                  services, or platforms such as social media, analytics tools,
                  hosting providers, or email services. Their privacy practices
                  are governed by their own policies, and I am not responsible
                  for the content or privacy practices of third-party services.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  9. Your Rights
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  Depending on your location, you may have the right to request
                  access to your personal data, request correction of inaccurate
                  data, request deletion of your data, or object to certain uses
                  of your information. You may contact me directly regarding any
                  privacy-related request.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  10. Children’s Privacy
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  This website and services are not intended for children, and I
                  do not knowingly collect personal information from children.
                  If you believe information has been submitted by a child,
                  please contact me so that it can be reviewed and removed if
                  necessary.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  11. Changes to This Policy
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  This Privacy Policy may be updated from time to time to
                  reflect service changes, legal requirements, or improvements
                  to website operations. Any updated version will be posted on
                  this page with a revised effective or updated date.
                </p>
              </section>

              <section>
                <h3 class="text-2xl font-semibold text-slate-900">
                  12. Contact
                </h3>
                <p class="mt-3 leading-7 text-slate-600">
                  If you have questions about this Privacy Policy or how your
                  information is handled, you can contact me through the contact
                  page or by email.
                </p>

                <div
                  class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-sm leading-6 text-slate-700">
                    Email:
                    <a
                      href="mailto:hello@ashikahmed.dev"
                      class="font-medium text-emerald-600 hover:text-emerald-700"
                    >
                      hello@ashikahmed.dev
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support CTA -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 md:px-10 md:py-14"
        >
          <div
            class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl"
          ></div>

          <div
            class="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div class="max-w-2xl">
              <span class="text-sm font-semibold text-emerald-600">
                Need Help?
              </span>
              <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Questions about privacy or project communication?
              </h2>
              <p class="mt-4 leading-7 text-slate-600">
                If you want clarification about how your information is handled,
                feel free to reach out directly.
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
              >
                Contact Me
              </NuxtLink>

              <NuxtLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Portfolio
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
