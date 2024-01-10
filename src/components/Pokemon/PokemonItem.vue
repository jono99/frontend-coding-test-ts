<template>
    <div class="pokemon-details w-1/4 m-auto">
        <div class="banner" v-bind:class="props.pokemon?.types[0].type.name">
            <p class="id">#{{ formatNumber(props.pokemon?.id) }}</p>
            <img class="image m-auto" v-bind:src="props.pokemon.image" />
            <h2 class="name">
                {{ capitalizeFirstLetter(props.pokemon.name) }}
            </h2>
            <span
                class="type"
                v-bind:class="props.pokemon.types[0].type.name"
                >{{
                    capitalizeFirstLetter(props.pokemon.types[0].type.name)
                }}</span
            >
        </div>
        <div class="info">
            <h3>Info</h3>
            <div class="info-details flex">
                <span>Species</span>
                <span>{{ capitalizeFirstLetter(props.pokemon.species) }}</span>
                <span>Height</span>
                <span>{{ height(props.pokemon.height) }} m</span>
                <span>Weight</span>
                <span>{{ weight(props.pokemon.weight) }} kg</span>
                <span>Abilities</span
                ><span
                    ><span
                        v-for="(ability, index) in props.pokemon.abilities"
                        v-bind:key="index"
                        >{{ capitalizeFirstLetter(ability.ability.name)
                        }}<span
                            v-if="index < props.pokemon.abilities.length - 1"
                            >,
                        </span></span
                    ></span
                >
            </div>
        </div>
        <div class="stats" v-bind:class="props.pokemon.types[0].type.name">
            <h3>Stats</h3>
            <div class="stat-details flex">
                <span>HP</span>
                <span>{{ props.pokemon.stats[0].base_stat }}</span>
                <span>Attack</span>
                <span>{{ props.pokemon.stats[1].base_stat }}</span>
                <span>Defense</span>
                <span>{{ props.pokemon.stats[2].base_stat }}</span>
                <span>Special Attack</span>
                <span>{{ props.pokemon.stats[3].base_stat }}</span>
                <span>Special Defense</span>
                <span>{{ props.pokemon.stats[4].base_stat }}</span>
                <span>Speed</span>
                <span>{{ props.pokemon.stats[5].base_stat }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    pokemon: {
        type: Object,
        default: null,
    },
});

const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
const formatNumber = (number: number) => number.toString().padStart(3, '0');
const height = (height: number) => height / 10;
const weight = (weight: number) => weight / 10;
</script>
