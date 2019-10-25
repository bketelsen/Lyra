import Component from './Component.svelte'

const app = new Component({
    target: document.querySelector('.svelteapp')
})
console.log("In the loader");
export default app;