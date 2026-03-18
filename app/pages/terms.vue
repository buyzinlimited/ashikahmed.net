<script setup>
const termsHighlights = [
  {
    title: "Service Scope",
    desc: "All web development services, design work, revisions, and deliverables are subject to agreed project scope and discussion.",
  },
  {
    title: "Client Responsibility",
    desc: "Clients are responsible for providing accurate project details, feedback, content, and required access on time.",
  },
  {
    title: "Project Terms",
    desc: "Timelines, payments, revisions, and deliverables may vary depending on the complexity and scope of the project.",
  },
];
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Terms & Conditions | Ashik Ahmed - Full Stack Developer"
      description="Review the Terms and Conditions governing the use of this website, including user responsibilities, service terms, and legal agreements."
      keywords="Terms and Conditions, Website Terms, User Agreement, Legal Terms, Service Conditions"
    />

    <section class="relative py-20 md:py-24">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Terms & Conditions
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Clear terms for using this website and working on projects.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              These Terms & Conditions explain the rules, responsibilities, and
              expectations related to using this website and engaging with my
              web development services.
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
                    TC
                  </div>

                  <div>
                    <h2 class="text-xl font-semibold text-slate-900">
                      Terms Overview
                    </h2>
                    <p class="text-sm text-emerald-600">
                      Professional and transparent
                    </p>
                  </div>
                </div>

                <div class="mt-8 space-y-4">
                  <div
                    v-for="item in termsHighlights"
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

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-5xl px-4 md:px-6">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
          <div class="space-y-10">
            <section>
              <h2 class="text-3xl font-bold tracking-tight text-slate-900">
                Terms & Conditions
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-600">
                By accessing this website or using my services, you agree to the
                terms outlined on this page.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                1. Website Use
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                This website is provided for informational and business
                purposes. You may browse, read, and contact me through the
                website, but you must not misuse the site, attempt unauthorized
                access, or interfere with its operation.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">2. Services</h3>
              <p class="mt-3 leading-7 text-slate-600">
                Web development services may include website design, frontend
                development, backend development, dashboard systems, API
                integration, maintenance, and related digital solutions. The
                exact scope of services depends on the project agreement.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                3. Project Scope
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                All pricing, timeline, features, and revisions are based on the
                agreed project scope. Any additional feature requests or major
                changes outside the original scope may require updated pricing,
                extended timeline, or a revised agreement.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                4. Client Responsibilities
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Clients are expected to provide accurate project requirements,
                content, branding materials, feedback, approvals, and any
                required access or credentials in a timely manner. Delays in
                client response may affect project timeline and delivery.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">5. Payments</h3>
              <p class="mt-3 leading-7 text-slate-600">
                Payments may be required in full or in milestones, depending on
                project scope and agreement. Work may begin only after
                confirmation of the agreed payment structure. Final files,
                deployment, or project transfer may depend on completion of the
                agreed payment.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                6. Revisions
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Revisions are limited to the amount included in the selected
                plan or custom agreement. Additional revisions beyond the agreed
                limit may require extra charges.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                7. Intellectual Property
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Unless otherwise agreed, ownership of final deliverables may be
                transferred to the client upon full payment. I may retain the
                right to display completed work in my portfolio unless
                restricted by a specific agreement.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                8. Third-Party Tools
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Projects may use third-party tools, frameworks, plugins, APIs,
                hosting platforms, or services. Their use is subject to their
                own terms, pricing, and availability, and I am not responsible
                for changes made by those third-party providers.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                9. Limitation of Liability
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                I aim to provide reliable and professional work, but I am not
                liable for indirect, incidental, or consequential damages
                arising from use of the website, delays caused by third parties,
                hosting issues, or misuse of delivered work after handoff.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                10. Termination
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                A project may be paused or terminated if there is non-payment,
                lack of communication, abusive conduct, repeated scope changes,
                or violation of agreed terms. Any completed work up to that
                point may be billed accordingly.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                11. Changes to These Terms
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                These terms may be updated from time to time. Any updated
                version will be published on this page with a revised date.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">12. Contact</h3>
              <p class="mt-3 leading-7 text-slate-600">
                If you have any questions about these Terms & Conditions, please
                contact me directly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
