<template>
    <div class="mb-5">
        <select
            id="pokemon"
            v-model="selectedValue"
            name="pokemon"
            class="mt-1.5 w-1/4 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            v-on:change="onChange"
        >
            <option disabled value="" class="pokemon-item">
                Select a pokemon
            </option>
            <option
                v-for="pokemon in listPokemon"
                v-bind:key="pokemon.url"
                v-bind:value="pokemon.url"
                class="pokemon-item"
            >
                {{ capitalizeFirstLetter(pokemon.name) }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { defineEmits, PropType, ref, onBeforeMount } from 'vue';
import { useToast } from 'vue-toastification';

interface Pokemon {
    name: string;
    url: string;
}

const emits = defineEmits(['update']);
const toast = useToast();

const props = defineProps({
    selected: {
        type: String,
        default: '',
        required: true,
    },
});

const listPokemon = ref<Pokemon[]>([]);
const selectedValue = ref(props.selected);

const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

const onChange = () => {
    emits('update', selectedValue.value);
};

onBeforeMount(async () => {
    await axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((result) => {
            listPokemon.value = result.data.results;
            toast.success('Pokemon list loaded');
        })
        .catch((error) => {
            toast.error('Error loading list of Pokemon', error);
        });
});
</script>
