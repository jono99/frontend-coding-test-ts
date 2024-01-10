import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import axios from 'axios';
import PokemonList from '../Pokemon/PokemonList.vue';

vi.mock('axios');

describe('Pokemon Service', () => {
    beforeEach(() => {
        axios.get.mockReset();
    });

    describe('fetchPokemon', () => {
        test('make a GET request to fetch Pokemon', async () => {
            const pokemonMock = [
                {
                    id: 1,
                    name: 'bulbasaur',
                    url: 'https://pokeapi.co/api/v2/pokemon/1',
                },
                {
                    id: 4,
                    name: 'charmander',
                    url: 'https://pokeapi.co/api/v2/pokemon/4',
                },
                {
                    id: 7,
                    name: 'squirtle',
                    url: 'https://pokeapi.co/api/v2/pokemon/7',
                },
            ];
            axios.get.mockResolvedValue({
                data: pokemonMock,
            });

            const pokemon = await axios.get(
                'https://pokeapi.co/api/v2/pokemon',
            );

            expect(axios.get).toHaveBeenCalledWith(
                'https://pokeapi.co/api/v2/pokemon',
            );
            expect(pokemon).toStrictEqual(pokemonMock);

            // const wrapper = mount(PokemonList);
            // await wrapper.vm.$nextTick();

            // expect(wrapper.html()).toMatchSnapshot();
        });
    });
});
