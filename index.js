async function fetchAdvice() {
  try {
    const URL = "https://api.adviceslip.com/advice";
    const fetchAd = await fetch(URL);
    const advice = await fetchAd.json();
    return advice;
  } catch (error) {
    throw new Error(error);
  }
}

const mostrarAdvice = async () => {
  try {
    const advice = await fetchAdvice();
    const mostrarID = document.getElementById("advice-id");
    const mostrarContent = document.getElementById("advice-content");
    mostrarID.innerText = advice.slip.id;
    mostrarContent.innerText = '"' + advice.slip.advice + '"';
  } catch (error) {
    console.log(error);
  }
};

mostrarAdvice();

document.getElementById("btn-random").addEventListener("click", () => {
  mostrarAdvice();
});
