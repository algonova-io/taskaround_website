<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()          // tm = “translate to object”
/**
 * Build an array of sections 1‒17 from i18n so we can v-for them.
 * tm() returns the raw object instead of a string.
 */
const sectionNumbers = Array.from({ length: 17 }, (_, i) => String(i + 1))

const sections:any = computed(() =>
    sectionNumbers.map(num => ({
      id: num,
      ...tm(`terms.sections.${num}`)
    }))
)
</script>

<template>
  <div class="privacy-container">
    <!-- ───────────── Header / Intro ───────────── -->
    <h1>{{ t('terms.title') }}</h1>
    <p><strong>{{ t('terms.effectiveDate') }}</strong></p>
    <p><strong>{{ t('terms.company') }}</strong></p>
    <p><strong>{{ t('terms.address') }}</strong></p>

    <section>
      <p>{{ t('terms.intro.paragraph1') }}</p>
      <p>{{ t('terms.intro.paragraph2') }}</p>
    </section>

    <hr />

    <!-- ───────────── Dynamic sections 1 → 17 ───────────── -->
    <section v-for="section in sections" :key="section.id">
      <h2 :id="`${section.id}-${section.title.replace(/\\s+/g,'-').toLowerCase()}`">
        {{ section.title }}
      </h2>

      <!-- Optional leading text -->
      <p v-if="section.text">{{ section.text }}</p>

      <!-- Optional intro before list -->
      <p v-if="section.intro">{{ section.intro }}</p>

      <!-- Render list items (works for array OR object) -->
      <ul v-if="section.items">
        <li
            v-for="(item, key) in section.items"
            :key="key"
        >
          <!-- object items may have label / url / context -->
          <template v-if="item.label">
            <template v-if="item.url">
              <a :href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
            </template>
            <template v-else>{{ item.label }}</template>
            <span v-if="item.context"> ({{ item.context }})</span>
          </template>
          <template v-else>{{ item }}</template>
        </li>
      </ul>


      <hr />
    </section>

    <!-- ───────────── Footnote ───────────── -->
    <p class="footnote"><em>{{ t('terms.footnote.1') }}</em></p>
    <p class="footnote"><em>{{ t('terms.footnote.2') }}</em></p>

  </div>
</template>

<style scoped>
.privacy-container {
  margin: 2rem auto;
  padding: 2rem;
  width: 100%;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  line-height: 1.7;
  color: #333;
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;

}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #333;

}

h3 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333;

}

p, li {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #333;

}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #333;
}

hr {
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 2rem 0;
}

.meta {
  font-size: 0.95rem;
  color: #555;
}

.footnote {
  font-size: 0.875rem;
  color: #777;
  margin-top: 2rem;
}
</style>