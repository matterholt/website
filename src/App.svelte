<script>
    export let pageTitle;

    import DailyTimeLog from './components/DailyTimeLog.svelte'
    let activeDays = ['Monday','Tuesday','Wednesday','Thursday','Friday']

    let timeLogs =[
        {id:1, day:"Monday", punchIn:"08:00", punchOut:"16:30" },
        {id:2,day:"Tuesday", punchIn:"08:00", punchOut:"16:30" },
        {id:3,day:"Wednesday", punchIn:"08:00", punchOut:"16:30" },
        {id:4,day:"Thursday", punchIn:"08:00", punchOut:"16:30" },
        {id:5,day:"Friday", punchIn:"08:00", punchOut:"16:30" },
        ]

    let totalHours = 0

        function calculateDailyHours (timeIn,timeOut){
            

        }

</script>
<style>

</style>
<h1>{pageTitle}</h1>

<main>
<div class="timeLogHead">
    <h2>Total Hours: <span>{timeLogs}</span></h2>
    

</div>

{#each timeLogs as timeLog}
 <DailyTimeLog timeLog={timeLog}/>
{/each}

</main>