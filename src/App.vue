<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col cols="auto">
        <nav class="nav">
          <RouterLink to="/">{{ $t("Home") }}</RouterLink>
          <RouterLink to="/updates">{{ $t("Updates") }}</RouterLink>
        </nav>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid>
    <v-row class="align-center justify-end">
      <RouterView />
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "./assets/variables.scss";

nav {
  background-color: $nav-bg-color;
  border-radius: $border-radius-small;
  padding: 10px 20px;
  display: flex;
  gap: 30px;
  border: 5px solid $nav-border-color;
  overflow: hidden;

  @include media('mobile') {
    flex-direction: column;
    align-items: center;
  }
}
nav a {
  @include nav-a($nav-bg-color);
  
}
nav a:hover {
  transform: scale(1.1);
}
</style>
