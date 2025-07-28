function updateRoadmap() {
  const selects = document.querySelectorAll("select");
  selects.forEach((select, index) => {
    const step = document.getElementById(`step-${index + 1}`);
    if (select.value === "Completed") {
      step.classList.add("completed");
    } else {
      step.classList.remove("completed");
    }
  });
}
