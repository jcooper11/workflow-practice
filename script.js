function updateRoadmap() {
  const selects = document.querySelectorAll("select");
  const circles = document.querySelectorAll(".step-circle");
  const highlightLine = document.getElementById("highlight-line");

  // Reset all circles
  circles.forEach(circle => circle.classList.remove("completed"));

  // Count completed tasks
  let completedCount = 0;
  selects.forEach(select => {
    if (select.value === "Completed") completedCount++;
  });

  // Mark completed circles
  for (let i = 0; i < completedCount && i < circles.length; i++) {
    circles[i].classList.add("completed");
  }

  // Update the highlighted part of the zigzag line
  // Points for the zigzag polyline in the SVG:
  const points = [
    [30, 20],
    [110, 60],
    [190, 20],
    [270, 60],
    [350, 20],
    [430, 60]
  ];

  // Calculate points for highlight line based on completed tasks
  if (completedCount === 0) {
    highlightLine.setAttribute("points", "");
  } else {
    // The highlight line will connect all completed points in sequence
    let highlightPoints = points.slice(0, completedCount).map(p => p.join(",")).join(" ");
    highlightLine.setAttribute("points", highlightPoints);
  }
}
