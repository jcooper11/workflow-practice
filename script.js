function updateTimeline() {
  const selects = document.querySelectorAll("select");
  let completed = 0;

  selects.forEach(select => {
    if (select.value === "Completed") {
      completed++;
    }
  });

  const timeline = document.getElementById("timeline");
  const percent = Math.round((completed / selects.length) * 100);

  timeline.innerHTML = `
    <div style="background: #ccc; height: 20px; border-radius: 10px;">
      <div style="width: ${percent}%; background: limegreen; height: 20px; border-radius: 10px;"></div>
    </div>
    <p>${percent}% of tasks completed</p>
  `;
}
