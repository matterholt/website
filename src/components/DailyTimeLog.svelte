<script>
    export let timeLog;


   $:todayHours = calculateDailyHours(timeLog.punchIn,timeLog.punchOut)




    function timeConvertToMinutes(time) {
    const [hr, min] = time.split(":");
    const hrToMin = Number(hr) * 60;
    const totalMin = hrToMin + Number(min);
    return totalMin;
    }

    function calHourPass(inTime, outTime, lunchTime = 0.5) {
    let totalTime = outTime - inTime;
    let todayHour = totalTime / 60 - lunchTime;
    return todayHour.toFixed(1);
    }

    function calculateDailyHours(dailyClockIn, dailyClockOut) {
    const arriveTimeMins = timeConvertToMinutes(dailyClockIn);
    const leaveTimeMins = timeConvertToMinutes(dailyClockOut);

    return calHourPass(arriveTimeMins, leaveTimeMins);
    }

        function updateValue (event){
        let currentElemId = event.target.id
        let currentElemName = event.target.name

        let currentElemValue = event.target.value

        console.log(`update value on ${currentElemName} with value of ${currentElemValue}`)
        timeLog = {...timeLog, [currentElemName]:currentElemValue}
        console.log(timeLog)
    }



</script>
<style>

</style>




<div class="timeLog">
        <h3>{timeLog.day}</h3>

        <label for="clockIn">Clock In Time</label>
       <input type="time" name="clockIn" id={`clockIn_${timeLog.day}`} value={timeLog.punchIn}  on:change={updateValue}/>


       <label for="clockOut">Clock Out Time</label>
       <input type="time" name="clockOut" id={`clockOut_${timeLog.day}`} value={timeLog.punchOut} on:change={updateValue}/>

       <h3>Today's hours {todayHours}</h3>

    </div>