import { get } from "svelte/store";
import { seeds, selectedSeed } from "../stores"
import { createUniqueId } from "../utils";
import { createEventDispatcher } from "svelte";
export class SeedProxy {
    constructor() {
        this.dispatcher = createEventDispatcher();
    }

    getSeedsAsync = async () => {
        let result = get(seeds);

        if (result == null || result.length == 0) {
            const data = JSON.parse(localStorage.getItem('seeds'));
            seeds.set(data || []);
            result = data;
        }
        return result;
    };

    addSeedAsync = async (seed) => {
        if (seed.id != null)
            return this.updateSeedAsync(seed);

        seed.id = createUniqueId();
        seeds.update(v => {
            v.push(seed);
            return v;
        });
        localStorage.setItem('seeds', JSON.stringify(get(seeds)));
        this.dispatcher("seed.added", seed);
    };

    updateSeedAsync = async (seed) => {
        if (seed.id == null)
            this.addSeedAsync(seed);
        else {
            selectedSeed.set(seed);
            seeds.update(v => v);
            localStorage.setItem('seeds', JSON.stringify(get(seeds)));
            this.dispatcher("seed.updated", seed);
        }
    };

    deleteSeedAsync = async (seed) => {
        if (seed == null)
            return;
        
        const currentList = get(seeds)  
        const newList = currentList.filter(i => i.id != seed.id);
        seeds.set(newList);
        localStorage.setItem('seeds', JSON.stringify(newList));
        this.dispatcher("seed.deleted", seed);
    };


}