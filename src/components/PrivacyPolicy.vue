<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>

<template>
  <div class="privacy-container" >
  <h1 id="privacy-policy">{{t('privacyPolicy.title')}}</h1>
  <p><strong>{{t('privacyPolicy.effectiveDate')}}</strong> May 19, 2025<br><strong>{{t('privacyPolicy.company')}}:</strong> Taskaround Inc.<br><strong>{{t('privacyPolicy.contactEmail')}}:</strong> info@taskaround.io</p>
  <p>{{t('privacyPolicy.intro')}}</p>
  <hr>
  <h2 id="1-information-we-collect">{{t('privacyPolicy.sections.1.title')}}</h2>
  <h3 id="a-information-you-provide">{{t('privacyPolicy.sections.1.a.title')}}</h3>
  <p>{{t('privacyPolicy.sections.1.a.text')}}</p>
  <ul>
    <li>{{t('privacyPolicy.sections.1.a.items.1')}}</li>
    <li>{{t('privacyPolicy.sections.1.a.items.2')}}</li>
    <li>{{t('privacyPolicy.sections.1.a.items.3')}}</li>
    <li>{{t('privacyPolicy.sections.1.a.items.4')}}</li>
  </ul>
  <p>{{t('privacyPolicy.sections.1.a.notes.1')}}</p>
  <p>{{t('privacyPolicy.sections.1.a.notes.2')}}</p>
  <h3 id="b-information-we-collect-automatically">{{t('privacyPolicy.sections.1.b.title')}}</h3>
  <p>{{t('privacyPolicy.sections.1.b.text')}}</p>
  <ul>
    <li>{{t('privacyPolicy.sections.1.b.items.1')}}</li>
    <li>{{t('privacyPolicy.sections.1.b.items.2')}}</li>
    <li>{{t('privacyPolicy.sections.1.b.items.3')}}</li>
    <li>{{t('privacyPolicy.sections.1.b.items.4')}}</li>
    <li>{{t('privacyPolicy.sections.1.b.items.5')}}</li>
    <li>{{t('privacyPolicy.sections.1.b.items.6')}}</li>
    <li>{{t('privacyPolicy.sections.1.b.items.7')}}</li>
  </ul>
  <hr>
  <h2 id="2-location-data">{{t('privacyPolicy.sections.2.title')}}</h2>
  <p>{{t('privacyPolicy.sections.2.text')}}</p>
  <ul>
    <li>{{t('privacyPolicy.sections.2.items.1')}}</li>
    <li>{{t('privacyPolicy.sections.2.items.2')}}</li>
    <li>{{t('privacyPolicy.sections.2.items.3')}}</li>
  </ul>
  <p>{{t('privacyPolicy.sections.2.note')}}</p>
  <hr>
  <h2 id="3-how-we-use-your-information">{{t('privacyPolicy.sections.3.title')}}</h2>
  <p>{{t('privacyPolicy.sections.3.text')}}</p>
  <ul>
    <li>{{t('privacyPolicy.sections.3.items.1')}}</li>
    <li>{{t('privacyPolicy.sections.3.items.2')}}</li>
    <li>{{t('privacyPolicy.sections.3.items.3')}}</li>
    <li>{{t('privacyPolicy.sections.3.items.4')}}</li>
    <li>{{t('privacyPolicy.sections.3.items.5')}}</li>
  </ul>
  <hr>
  <h2 id="4-legal-basis-for-processing-for-eea-users-">{{t('privacyPolicy.sections.4.title')}}</h2>
  <p>{{t('privacyPolicy.sections.4.text')}}</p>
  <ul>
    <li><strong>{{t('privacyPolicy.sections.4.items.1.label')}}:</strong> {{t('privacyPolicy.sections.4.items.1.description')}}</li>
    <li><strong>{{t('privacyPolicy.sections.4.items.2.label')}}:</strong> {{t('privacyPolicy.sections.4.items.2.description')}}</li>
    <li><strong>{{t('privacyPolicy.sections.4.items.3.label')}}:</strong> {{t('privacyPolicy.sections.4.items.3.description')}}</li>
    <li><strong>{{t('privacyPolicy.sections.4.items.4.label')}}:</strong> {{t('privacyPolicy.sections.4.items.4.description')}}</li>
  </ul>
  <hr>
  <h2 id="5-sharing-and-disclosure">  {{ t('privacyPolicy.sections.5.title') }}
  </h2>
    <p>{{ t('privacyPolicy.sections.5.text') }}</p>
    <ul>
      <li>
        <strong>{{ t('privacyPolicy.sections.5.items.1.label') }}:</strong>
        {{ t('privacyPolicy.sections.5.items.1.description') }}
      </li>

      <li>
        <strong>{{ t('privacyPolicy.sections.5.items.2.label') }}:</strong>
        {{ t('privacyPolicy.sections.5.items.2.description') }}
      </li>

      <li>
        <strong>{{ t('privacyPolicy.sections.5.items.3.label') }}:</strong>
        {{ t('privacyPolicy.sections.5.items.3.description') }}
      </li>
    </ul>
    <p>{{ t('privacyPolicy.sections.5.note') }}</p>
  <hr>
    <h2 id="6-third-party-services">
      {{ t('privacyPolicy.sections.6.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.6.text') }}</p>
    <ul>
      <li>
        <a
            :href="t('privacyPolicy.sections.6.items.1.url')"
            target="_blank"
            rel="noopener noreferrer"
        >
          {{ t('privacyPolicy.sections.6.items.1.label') }}
        </a>
      </li>

      <li>
        <a
            :href="t('privacyPolicy.sections.6.items.2.url')"
            target="_blank"
            rel="noopener noreferrer"
        >
          {{ t('privacyPolicy.sections.6.items.2.label') }}
        </a>
      </li>

      <li>
        <a
            :href="t('privacyPolicy.sections.6.items.3.url')"
            target="_blank"
            rel="noopener noreferrer"
        >
          {{ t('privacyPolicy.sections.6.items.3.label') }}
        </a>
      </li>

      <li>
        <a
            :href="t('privacyPolicy.sections.6.items.4.url')"
            target="_blank"
            rel="noopener noreferrer"
        >
          {{ t('privacyPolicy.sections.6.items.4.label') }}
        </a>
      </li>
    </ul>
    <p>{{ t('privacyPolicy.sections.6.note') }}</p>
  <hr>
    <h2 id="7-data-retention">
      {{ t('privacyPolicy.sections.7.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.7.text') }}</p>

    <ul>
      <li>{{ t('privacyPolicy.sections.7.items.1') }}</li>
      <li>{{ t('privacyPolicy.sections.7.items.2') }}</li>
    </ul>

    <p>{{ t('privacyPolicy.sections.7.note') }}</p>
    <hr>
    <h2 id="8-your-rights-gdpr">
      {{ t('privacyPolicy.sections.8.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.8.text') }}</p>

    <ul>
      <li>{{ t('privacyPolicy.sections.8.items.1') }}</li>
      <li>{{ t('privacyPolicy.sections.8.items.2') }}</li>
      <li>{{ t('privacyPolicy.sections.8.items.3') }}</li>
      <li>{{ t('privacyPolicy.sections.8.items.4') }}</li>
      <li>{{ t('privacyPolicy.sections.8.items.5') }}</li>
    </ul>

    <p>{{ t('privacyPolicy.sections.8.note') }}</p>
    <hr>
    <h2 id="9-opt-out-rights">
      {{ t('privacyPolicy.sections.9.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.9.items.1') }}</p>
    <p>{{ t('privacyPolicy.sections.9.items.2') }}</p>
  <hr>
    <h2 id="10-children-and-age-restrictions">
      {{ t('privacyPolicy.sections.10.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.10.text') }}</p>
    <p>{{ t('privacyPolicy.sections.10.note') }}</p>
  <hr>
    <h2 id="11-security">
      {{ t('privacyPolicy.sections.11.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.11.text') }}</p>

    <ul>
      <li>{{ t('privacyPolicy.sections.11.items.1') }}</li>
      <li>{{ t('privacyPolicy.sections.11.items.2') }}</li>
      <li>{{ t('privacyPolicy.sections.11.items.3') }}</li>
    </ul>

    <p>{{ t('privacyPolicy.sections.11.note') }}</p>
    <hr />

    <!-- ───────────── 12. Changes to This Privacy Policy ───────────── -->
    <h2 id="12-changes-to-this-privacy-policy">
      {{ t('privacyPolicy.sections.12.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.12.items.1') }}</p>
    <p>{{ t('privacyPolicy.sections.12.items.2') }}</p>
    <hr />

    <!-- ───────────── 13. Contact Us ───────────── -->
    <h2 id="13-contact-us">
      {{ t('privacyPolicy.sections.13.title') }}
    </h2>

    <p>{{ t('privacyPolicy.sections.13.text') }}</p>
    <p>
      <strong>{{ t('privacyPolicy.sections.13.items.1') }}</strong><br />
      <strong>{{ t('privacyPolicy.sections.13.items.2') }}</strong>
    </p>
    <hr />

    <!-- ───────────── Footnote ───────────── -->
    <p class="footnote">
      <em>{{ t('privacyPolicy.footnote.1') }}</em><br />
      <em>{{ t('privacyPolicy.footnote.2') }}</em>
    </p>
  </div>
</template>

<style scoped>
.privacy-container {
  margin: 2rem auto;
  width: 100%;
  padding: 2rem;
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