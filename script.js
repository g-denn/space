const compliments = [
    "You're doing a great job!",
    "You look fantastic today!",
    "You have a wonderful sense of humor.",
    "You make the world a better place!",
    "Your creativity knows no bounds!"
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const complimentElement = document.getElementById('compliment');
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentElement.innerText = compliments[randomIndex];
  });
  