<template>
  <v-row class="mt-4 mb-8 mr-8 justify-end filter">
    <v-col class="d-flex elign-end flex-column mt-6" cols="auto">
      <h1 class="mr-8">{{ $t("FilterTitle") }}</h1>
      <p style="color: red">{{ $t("Filter") }}</p>
    </v-col>
    <v-col class="d-flex flex-column align-center mt-8" cols="auto">
      <v-switch
        inset
        v-model="filter"
        class="mt-4 mr-8"
        color="green"
        :label="$t('FilterSwitch')"
      ></v-switch>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch } from "vue";

const filter = ref(true);
const emit = defineEmits(["update:filter"]);

watch(filter, (newFilterValue) => {
  emit("update:filter", newFilterValue);
});
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.filter {
  background-color: $filter-bg-color;
  max-width: 50%;
  border-radius: $border-radius-small;
}
</style>
