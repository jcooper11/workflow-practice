function updateRoadmap() {
  const selects = [
    document.getElementById('select-1'),
    document.getElementById('select-2'),
    document.getElementById('select-3')
  ];

  const circles = [
    document.getElementById('circle-1'),
    document.getElementById('circle-2'),
    document.getElementById('circle-3')
  ];

  // Enforce task order: disable selects beyond incomplete
  for(let i = 0; i < selects.length; i++) {
    if(i === 0) {
      selects[i].disabled = false;
    } else {
      selects[i].disabled = selects[i-1].value !== "Completed";
    }
  }

  // Update circles based on completion
  for(let i = 0; i < circles.length; i++) {
    if(selects[i].value === "Completed") {
      circles[i].classList.add('completed');
    } else {
      circles[i].classList.remove('completed');
    }
  }
}

// Initialize on load
window.onload = updateRoadmap;
