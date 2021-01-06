<script>
    export let pageTitle;

    import DailyTimeLog from './components/DailyTimeLog.svelte'

    let timeLogs =[
        {day:"Monday", punchIn:"08:00", punchOut:"16:30" },
        {day:"Tuesday", punchIn:"08:00", punchOut:"16:30" },
        {day:"Wednesday", punchIn:"08:00", punchOut:"16:30" },
        {day:"Thursday", punchIn:"08:00", punchOut:"16:30" },
        {day:"Friday", punchIn:"08:00", punchOut:"16:30" },
]

</script>
<style>

</style>
<h1>{pageTitle}</h1>
<main>
    <h2>Building web with svelte</h2>

{#each timeLogs as timeLog}
 <DailyTimeLog timeLog={timeLog}/>
{/each}

</main>