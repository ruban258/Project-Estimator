<script>
    export let id = 33;
    export let name ="wood";
    export let price= 33.33;

    $:mode = id ? "edit" : "add";
    $:canSubmit = price >= 0 && price !== "" && name !== "";

    function onSubmit (){
        if(!canSubmit){
            return;
        }
        price = "";
        name = "";
        id = undefined;
    }
    function onCancel (){
        price = "";
        name = "";
        id = undefined;
    }
</script>


<style>
    button{
        margin-left: 20px;
    }
    button:disabled{
        cursor: not-allowed;
    }
</style>


<form on:submit|preventDefault="{onSubmit}">
    <fieldset>
        <label for="nameField">Maretial</label>
        <input bind:value= {name} placeholder="Wood, glue, etc.." type="text" id="nameField">
        <label for="priceField">Price</label>
        <input bind:value= {price} min="0" step="any" placeholder="Price" type="number" id="priceField">
    </fieldset>
    
    <button disabled ={!canSubmit} type="submit" class="float-right">{mode}</button>
    {#if mode !== 'edit'}
    <button on:click="{onCancel}" type="button" class="float-right">Cancel</button>
    {/if}
    
</form>