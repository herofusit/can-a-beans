import { cans, selectedCan } from "../storess"
import { createEventDispatcher } from "svelte";
import { get } from "svelte/store";
export class CanProxy {
    constructor() {
        this.dispatcher = createEventDispatcher();
        this.data = get(cans);
    }
    getCansAsync = async () => this.data;
    addCanAsync = async (item) => {
        item.seeds = [{name: 's2'}];
        this.data.push(item);
        cans.set(this.data);
        this.dispatcher("can.added");
        return this.data;
    }
    updateCanAsync = async (item) => {
        selectedCan.set(item);
        this.dispatcher("can.updated");
        return item;
    };
    deleteCanAsync = async (item) => {
        this.data = this.data.filter(i => i != item);
        cans.set(this.data);
        this.dispatcher("can.deleted");
        return this.data;
    }
}