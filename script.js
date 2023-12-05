// Skill levels data for the chart
const skillData = {
  labels: ['Python', 'Flutter', 'Java', 'HTML', 'CSS', 'C Programming', 'MS Office'],
  datasets: [{
    label: 'Skill Levels',
    data: [90, 90, 70, 70, 70, 70, 90], // Example skill levels (out of 100)
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

// Language proficiency data for the chart
const languageData = {
  labels: ['English', 'Malayalam', 'Hindi', 'Arabic'],
  datasets: [{
    label: 'Language Proficiency',
    data: [100, 100, 30, 30], // Example proficiency levels (out of 100)
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// Get the skill canvas element
const skillCanvas = document.getElementById('skillChart').getContext('2d');
// Create the skill chart
new Chart(skillCanvas, {
  type: 'bar',
  data: skillData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

// Get the language canvas element
const languageCanvas = document.getElementById('languageChart').getContext('2d');
// Create the language proficiency chart
new Chart(languageCanvas, {
  type: 'bar',
  data: languageData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
