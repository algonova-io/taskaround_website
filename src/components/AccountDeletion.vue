<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {db} from "../main.ts";
import { collection, addDoc } from 'firebase/firestore'

/*
  ------------------------------------------------------------
  HOW IT WORKS (brief)
  ------------------------------------------------------------
  1. User fills out their email and an optional message.
  2. The form sends a DELETE‑REQUEST payload to your backend (e.g. /api/account/delete).
  3. Backend replies with a ticket‑id or OK.
  4. Your support team verifies the request by asking the user to authenticate in‑app and
     send a confirmation message.
  5. Once confirmed, you delete the account + data.
*/

const { t } = useI18n()
const email = ref('')
const msg   = ref('')
const loading = ref(false)

const emailRules = [
  (v: string) => !!v || t('errors.required'),
  (v: string) => /\S+@\S+\.\S+/.test(v) || t('errors.invalidEmail')
]

const canSubmit = computed(() => emailRules.every(rule => rule(email.value) === true))

const submit = async () => {
  if (!canSubmit.value) return
  loading.value = true
  try {
    await addDoc(collection(db,"deletionRequests"),{
      email: email.value,
      message: msg.value,
      createdAt: new Date()

    })
    // handle success (e.g., snackbar)
  } catch (e) {
    console.log("Error", e)
    // handle error
  } finally {
    loading.value = false
  }
}

</script>

<template>

  <div class="base-container justify-center d-flex">
    <v-card elevation="4" max-width="500" class="pa-6">
      <v-card-title class="headline mb-4 text-center">
        {{ t('delete.title') }}
      </v-card-title>

      <v-card-text>
        <p class="mb-6" style="color: black">
          {{ t('delete.instructions') }}
        </p>
        <v-form @submit.prevent="submit">
          <v-text-field
              v-model="email"
              :label="t('delete.emailLabel')"
              :rules="emailRules"
              prepend-inner-icon="mdi-email"
              required
          />

          <v-textarea
              v-model="msg"
              :label="t('delete.msgLabel')"
              rows="3"
              auto-grow
              prepend-inner-icon="mdi-message-text"
          />

          <v-btn
              :loading="loading"
              :disabled="!canSubmit"
              color="#F2545B"
              class="mt-4"
              block
              type="submit"
          >{{ t('delete.submit') }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>

</template>

<style scoped>

</style>