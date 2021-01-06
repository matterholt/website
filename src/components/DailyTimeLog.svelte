<script>
    export let timeLog;
</script>
<style>

</style>




<div class="timeLog">
        <h3>{timeLog.day}</h3>
        <label for="clockIn">Clock In Time</label>
       <input type="time" name="clockIn" id="clockIn" value={timeLog.punchIn} />
        
       <label for="clockOut">Clock Out Time</label>
       <input type="time" name="clockOut" id="clockOut" value={timeLog.punchOut} />
    </div>