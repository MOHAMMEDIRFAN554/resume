
const skillData = {
  labels: ['Python', 'Flutter', 'Java', 'HTML', 'CSS', 'C Programming', 'MS Office'],
  datasets: [{
    label: 'Skill Levels',
    data: [90, 90, 70, 70, 70, 70, 90], 
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const languageData = {
  labels: ['English', 'Malayalam', 'Hindi', 'Arabic'],
  datasets: [{
    label: 'Language Proficiency',
    data: [100, 100, 30, 30], 
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const skillCanvas = document.getElementById('skillChart').getContext('2d');

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

const languageCanvas = document.getElementById('languageChart').getContext('2d');

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
