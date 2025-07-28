function updateRoadmap() {
  const selects = document.querySelectorAll("select");
  const circles = document.querySelectorAll(".step-circle");
  const highlightLine = document.getElementById("highlight-line");

  // Reset all circles
  circles.forEach(circle => circle.classList.remove("completed"));

  let completedCount = 0;

  // Disable/enable selects based on previous completion
  selects.forEach((select, index) => {
    if (index === 0) {
      // Always enable first task
      select.disabled = false;
    } else {
      // Enable current select only if previous task is completed
      select.disabled = selects[index - 1].value !== "Completed";
    }

    // Count completed tasks and mark circles
    if (select.value === "Completed") {
      completedCount++;
      circles[index].classList.add("completed");
    }
  });

  // Update the highlighted part of the zigzag line
  const points = [
    [100, 20],
    [300, 80],
    [500, 20]
  ];

  if (completedCount === 0) {
    highlightLine.setAttribute("points", "");
  } else {
    let highlightPoints = points.slice(0, completedCount).map(p => p.join(",")).join(" ");
    highlightLine.setAttribute("points", highlightPoints);
  }
}

// Initialize on page load
window.onload = updateRoadmap;
