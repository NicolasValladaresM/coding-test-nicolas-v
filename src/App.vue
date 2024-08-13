<template>
  <v-container fluid class=" mt-4">
    <v-row class="justify-center">
      <v-col cols="auto">
        <nav class="nav">
          <RouterLink to="/">{{ $t('Home') }}</RouterLink>
          <RouterLink to="/updates">{{ $t('Updates') }}</RouterLink>
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

<script setup>
</script>

<style scoped>


  nav{
    box-sizing: border-box;
    background-color: #0e1638;
    border-radius: 30px;
    padding: 10px 20px;
    display: flex;
    gap: 30px;
    border: 5px solid rgb(255, 255, 255);
    }

  nav a{
    display: flex;
    margin: 1px;
    justify-content: center;
    align-items: center;
    background-color: 0e1638;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  
  }
  nav a:hover{

    color: rgb(255, 255, 255);
    background-color: rgb(1, 4, 16);
    transition: scale(1.1);
    border-radius: 10px;
  }


</style>

