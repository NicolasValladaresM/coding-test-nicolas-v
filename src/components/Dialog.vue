<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="500"
    style="width: 100%"
    transition="dialog-bottom-transition"
  >
    <v-row class="dialog-container justify-center align-center">
      <v-card>
        <v-card-title class="mt-4 font-weight-bold">
          {{ $t("ArticleDetails") }}
        </v-card-title>
        <v-card-text
          v-if="
            article &&
            article.story_title &&
            article.author &&
            article.comment_text
          "
          class="overflow-auto"
          style="max-height: 50vh"
        >
          <p class="mt-4 mb-2">
            <strong>{{ $t("Title") }}:</strong> {{ article.story_title }}
          </p>
          <p class="mb-2">
            <strong>{{ $t("Author") }}:</strong> {{ article.author }}
          </p>
          <p class="mb-2">
            <strong>{{ $t("ArticleComments") }}:</strong>
            {{ cleanCommentText(article.comment_text) }}
          </p>
          <v-chip
            variant="elevated"
            color="white"
            v-for="(tag, index) in article._tags"
            :key="index"
            class="ma-2 mt-4"
          >
            {{ cleanTag(tag) }}
          </v-chip>
        </v-card-text>
        <v-card-text v-else class="overflow-auto" style="max-height: 50vh">
          <p class="mx-4">{{ $t("NoArticlesInfo") }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="tonal" class="mb-4" @click="dialogVisible = false">{{
            $t("Close")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  article: Object,
  dialog: Boolean,
});
const emit = defineEmits(["update:dialog"]);

const dialogVisible = ref(props.dialog);

watch(
  () => props.dialog,
  (a) => {
    dialogVisible.value = a;
  },
);
watch(dialogVisible, (b) => {
  emit("update:dialog", b);
});
const cleanCommentText = (comment) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = comment;
  const decodedText = textarea.value;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = decodedText;
  return tempDiv.textContent || tempDiv.innerText || "";
};
const cleanTag = (tag) => {
  return tag.replace(/^(author_|story_)/, "");
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.dialog-container {
  border-radius: $border-radius-dialog;
  overflow: hidden;
}

.v-overlay--active {
  backdrop-filter: blur(2px);
  background: $dialog-bg-color;
}
</style>
