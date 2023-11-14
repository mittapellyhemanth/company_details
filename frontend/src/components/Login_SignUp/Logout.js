import axios from "axios";
const Logout = async () => {
  const currentDate = new Date();

  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  let LogoutTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

  const breakTaken = localStorage.getItem("breakTaken"); // Replace this with your actual timestamp

  const employID = localStorage.getItem("unique_id");
  const login = localStorage.getItem("LogTime");
  const date = localStorage.getItem("date");
  // convert second to time format

  function parseTimeToSeconds(timeString) {
    const [time, period] = timeString.split(" ");
    const [hours, minutes, seconds] = time.split(":").map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (period === "PM") {
      totalSeconds += 12 * 3600; // Add 12 hours in seconds for PM times
    }

    return totalSeconds;
  }
  function secondsToTimeFormat(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  const loginSeconds = parseTimeToSeconds(login);
  const logoutSeconds = parseTimeToSeconds(LogoutTime);
  let breakTime ;
  let totalWorkSeconds;
  let totalWork;
  if (breakTaken !== null) {
    breakTime = parseTimeToSeconds(breakTaken);
    totalWorkSeconds = (await logoutSeconds) - loginSeconds - breakTime;
    totalWork = await secondsToTimeFormat(totalWorkSeconds);
  } else {
    totalWorkSeconds = (await logoutSeconds) - loginSeconds;
    totalWork = await secondsToTimeFormat(totalWorkSeconds);
  }

  console.log("Total Time Worked:", totalWork);

  // const totalSeconds = 33333; // Example: 33333 seconds

  // creating attendance record of the employee
  const data = {
    Date: date,
    LoginTime: login,
    LogoutTime: LogoutTime,
    TotalBreak: breakTaken,
    TotalWorkTime: totalWork,
  };
  const DeleteBreakTime = `http://localhost:8080/employee/previousbreakTime/taken/${employID}/${date}`; // delete
  await axios.delete(DeleteBreakTime);
  await axios.post(
    `http://localhost:8080/admin/trackAttendance/${employID}`,
    data
  );
   
};
export default Logout;
