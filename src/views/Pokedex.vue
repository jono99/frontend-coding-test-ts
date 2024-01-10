<template>
    <div class="container pokedex pokemon-container mx-auto py-5">
        <h1>Pokédex</h1>

        <!-- PokemonList, PokemonItem, PokemonDetails -->
        <PokemonList v-bind:selected="selectedPokemon" v-on:update="onChange" />

        <PokemonItem v-if="selectedPokemon" v-bind:pokemon="pokemon" />
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import PokemonList from '../components/Pokemon/PokemonList.vue';
import PokemonItem from '../components/Pokemon/PokemonItem.vue';

interface PokemonData {
    id: number;
    name: string;
    species: string;
    image: string;
    height: number;
    weight: number;
    abilities: string[];
    stats: string[];
    types: string[];
}

const selectedPokemon = ref<string>('');
const pokemon = ref<PokemonData>({} as PokemonData);

const idNumber = (url: string) => url.split('/').filter(Boolean).pop();

const onChange = async (val: string) => {
    const id = idNumber(val);
    await axios
        .get(`https://pokeapi.co./api/v2/pokemon/${id}`)
        .then((result) => {
            pokemon.value = {
                id: result.data.id,
                name: result.data.name,
                species: result.data.species.name,
                image: result.data.sprites.front_default,
                height: result.data.height,
                weight: result.data.weight,
                abilities: result.data.abilities,
                types: result.data.types,
                stats: result.data.stats,
            };
        });
    selectedPokemon.value = val;
};
</script>

<style>
#pokemon .pokemon-item {
    text-transform: uppercase;
}

.info-details,
.stat-details {
    flex-wrap: wrap;
}

.info-details span,
.stat-details span {
    flex-basis: 50%;
    text-align: left;
    font-weight: 600;
    line-height: 35px;
}

.info-details > span:nth-child(even) {
    color: #333;
}

.stat-details > span:nth-child(even) {
    color: #000;
}

.info-details > span:nth-child(odd) {
    color: #999;
}

.stat-details > span:nth-child(odd) {
    color: #fff;
}
.pokemon-details {
    border-radius: 25px;
    /* background: yellowgreen; */
    box-shadow: 1px 5px 10px rgba(125, 125, 125, 0.75);
    /* padding: 20px; */
}

.banner {
    border-radius: 25px;
    padding: 20px 20px 55px;
    position: relative;
    z-index: 1;
}

.info {
    background: #fff;
    border-radius: 25px;
    margin-top: -40px;
    padding: 20px 20px 55px;
    position: relative;
    text-align: left;
    z-index: 2;
}

.stats {
    border-radius: 25px;
    margin-top: -40px;
    padding: 20px 20px 25px;
    position: relative;
    text-align: left;
    z-index: 3;
}

.info h3,
.stats h3 {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
}

.id,
.name {
    color: #fff;
    font-weight: 600;
    line-height: 38px;
    margin-bottom: 10px;
}

.id {
    font-size: 26px;
    text-align: right;
}

.name {
    font-size: 30px;
}

.type {
    border-radius: 20px;
    box-shadow: 1px 3px 3px rgba(125, 125, 125, 0.75);
    color: #fff;
    font-weight: 600;
    padding: 5px 30px;
}

/* banner and stats colors */
.banner.bug,
.stats.bug {
    background-color: #c9db30;
}
.banner.electric,
.stats.electric {
    background-color: #fadb61;
}
.banner.fairy,
.stats.fairy {
    background-color: #f5c5d0;
}
.banner.fire,
.stats.fire {
    background-color: #f39d60;
}
.banner.grass,
.stats.grass {
    background-color: #96d477;
}
.banner.ground,
.stats.ground {
    background-color: #e9d292;
}
.banner.normal,
.stats.normal {
    background-color: #bcbc97;
}
.banner.poison,
.stats.poison {
    background-color: #bc57bc;
}
.banner.psychic,
.stats.psychic {
    background-color: #fa89ab;
}
.banner.rock,
.stats.rock {
    background-color: #ccb657;
}
.banner.water,
.stats.water {
    /* background-color: #96b2f5; */
    background: rgb(150, 178, 245);
    background: linear-gradient(
        0deg,
        rgba(150, 178, 245, 1) 0%,
        rgba(104, 144, 240, 1) 100%
    );
}

/* type colors */
.type.bug {
    background-color: #a8b820;
}
.type.electric {
    background-color: #f8d030;
}
.type.fairy {
    background-color: #ee99ac;
}
.type.fire {
    background-color: #f08030;
}
.type.grass {
    background-color: #78c850;
}
.type.ground {
    background-color: #e0c068;
}
.type.normal {
    background-color: #a8a878;
}
.type.poison {
    background-color: #a040a0;
}
.type.psychic {
    background-color: #f85888;
}
.type.rock {
    background-color: #b8a038;
}
.type.water {
    background-color: #6890f0;
}
</style>
