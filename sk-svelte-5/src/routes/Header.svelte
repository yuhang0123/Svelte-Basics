<script>
    import {createState, ScottState} from './state.svelte'
    const myState = createState();
    const myState2 = new ScottState();
</script>

<div>
    <button onclick={myState.up}>{myState.value}</button>
    <button onclick={() => myState2.up()}>{myState2.value}</button>
</div>