<template>
    <section id="catalogo" class="seccion">
        <h2 class="titulo">Catalogo de colchones</h2>

        <article class="contenedor">
            <div class="card" v-for="colchon in colchones" :key="colchon.id">
                <img class="card-imagen" :src="colchon.imagen" alt="">
                <div class="card-nombre">{{ colchon.nombre }}</div>
                <div class="card-detalle">Medidas: {{ colchon.medidas }}</div>
                <div class="card-precio">$ {{ colchon.precio }}</div>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    name: 'ColchonesComponent',
    data() {
        return {
            colchones: []
        }
    },
    methods: {
        getAllColchones: function () {
            this.axios
                .get('http://192.168.1.254:3000/getallcolchones')
                .then(response => {
                    this.colchones = response.data;
                    console.log(this.colchones);
                });
        }
    },
    created() {
        this.getAllColchones();
    }
}
</script>

<style scoped>
.seccion {
    width: 90%;
    margin: 2rem auto;
}
.titulo {
    color: #FFF;
    margin-bottom: 1.5rem;
}
.contenedor {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
.card {
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
}
.card-imagen {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
}
.card-nombre {
    background-color: #000;
    color: #FFF;
    padding: 0.8rem;
    text-align: center;
}
.card-detalle {
    padding: 0.5rem 1rem 0;
}
.card-precio {
    padding: 0.5rem 1rem;
    font-weight: bold;
}
.card button {
    margin: 0 1rem 1rem;
    padding: 0.6rem;
    border: none;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
}
.vacio {
    color: #FFF;
}
</style>