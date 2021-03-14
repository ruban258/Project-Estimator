import{writable} from 'svelte/store';
const key = 'materials';
const materialStore = writable([]);
if (localStorage.getItem(key)) {
    materialStore.set(JSON.parse(localStorage.getItem(key)));
  }
const add = (name, price) => {
    materialStore.update((items) =>
    {
        const item = {
            name,
            price,
            id: new Date().getTime(),
        };
        return [item, ...items];
    });
};

materialStore.subscribe((items)=>{
    console.log(items);

    const jasonString = JSON.stringify(items);
    localStorage.setItem(key, jasonString);
});

export default{
    subscribe: materialStore.subscribe,
    add, 
}