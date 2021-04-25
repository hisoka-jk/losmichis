<template>
  <b-form @submit.prevent>
    <b-card no-body header="Formulario de contacto"></b-card>
    <br>
    <b-form-text>Escríbenos, te escuchamos!!</b-form-text>
    <label>Tu nombre</label>
    <b-form-input type="text" id="nombre"></b-form-input>
    <br>
    <label>Tu email</label>
    <b-form-input type="email" id="email"></b-form-input>
    <br>   
    <label>¿Reclamo, sugerencia o felicitación?</label>
    <b-form-input type="text" id="tema" class="form-control"></b-form-input>
    <br>   
    <label>Mensaje</label>
    <textarea type="text" id="mensaje" class="form-control" rows="3"></textarea>
    <div class="text-center mt-4">
        <b-button variant="primary" type="submit">Enviar<i class="far fa-paper-plane ml-2"></i></b-button>
    </div>
  </b-form>  
</template>