const dateInput = document.querySelector("#date-inpt");
const img = document.querySelector("#img");
let result = document.querySelector("#resultInput");

img.addEventListener("click", () => {
  const actYear = dayjs();
  const dateUntil = dayjs(dateInput.value);

  const day = dateUntil.format("DD/MM/YYYY");

  const yearsBetween = dateUntil.diff(actYear, "day") + 1;

  yearsBetween <= 0
    ? (result.innerText = "Esse dia ja passou")
    : (result.innerText =
        yearsBetween > 1
          ? `Falta um total de ${yearsBetween} dias até ${day}`
          : `Falta apenas ${yearsBetween} dia até ${day}`);
});
