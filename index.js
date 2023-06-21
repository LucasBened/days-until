const dateInput = document.querySelector("#date-inpt");
const img = document.querySelector("#img");
const result = document.querySelector("#resultInput");

img.addEventListener("click", () => {
  const actYear = dayjs();
  const dateUntil = dayjs(dateInput.value);

  const today = dayjs().startOf("day");
  const selectedDate = dateUntil.startOf("day");

  const day = dateUntil.format("DD/MM/YYYY");

  if (selectedDate.isSame(today, "day")) {
    result.innerText = "É hoje!";
  } else {
    const yearsBetween = dateUntil.diff(actYear, "day") + 1;

    yearsBetween <= 0
      ? (result.innerText = "Esse dia já passou")
      : (result.innerText =
          yearsBetween > 1
            ? `Faltam ${yearsBetween} dias até ${day}`
            : `Falta apenas ${yearsBetween} dia até ${day}`);
  }
});
