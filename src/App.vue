<template>

  <div id="app">
    <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Cafetería Los Michis | Menú</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Inicio</b-nav-item>
        <b-nav-item href="/nosotros">Nosotros</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view/>
<br>
  <b-card img-src="https://i.imgur.com/IEzdpSW.jpg" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Encuéntranos en Providencia, nuestro local cuenta con retiro a domicilio!<br>
        Estamos en Av Providencia 1111 local 1.<br>
        ¡Nuestros michis te esperan!<br>
        Estamos en Instagram y Facebook también, ¡etiquétanos!
      </b-card-text>
    </b-card>
  
  </div>
  
</template>

