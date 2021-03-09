<template>
  <div class="region">
    <h1>{{$store.state.regionTitulo}}  </h1>
    <h2>
        Número Total {{$store.state.regionTotal}}
    </h2>
    <button @click="$router.push('/')"> Volver</button>
  </div>
</template>

<script>
export default ({
  name: 'Region'

})

</script>