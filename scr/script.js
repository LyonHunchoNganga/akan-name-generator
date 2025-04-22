
document.getElementById('akanForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    if (!birthdate || !gender) {
      alert('Please fill in all fields.');
      return;
    }
  
    const date = new Date(birthdate);
    const dayOfWeek = date.getDay();
  
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  
    const akanName = gender.value === 'male' ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  
    document.getElementById('result').textContent = `Your Akan name is: ${akanName}`;
  });
