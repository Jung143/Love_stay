document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // �������� ������ ���
  let name = document.getElementById('name').value;
  let age = parseInt(document.getElementById('age').value);
  let gender = document.getElementById('gender').value;
  let iqAnswers = [
    document.getElementById('iq1').value.toLowerCase(),
    document.getElementById('iq2').value.toLowerCase(),
    document.getElementById('iq3').value.toLowerCase(),
    document.getElementById('iq4').value.toLowerCase(),
    document.getElementById('iq5').value.toLowerCase(),
  ];

  let hobbies = [
    document.getElementById('hobby1').value,
    document.getElementById('hobby2').value,
    document.getElementById('hobby3').value,
    document.getElementById('hobby4').value,
    document.getElementById('hobby5').value,
  ];

  // ���������� ��������
  let compatibility = calculateCompatibility(age, iqAnswers, hobbies);
  
  // �������� ���������
  document.getElementById('compatibility').textContent = `���� ��������: ${compatibility}%`;
  document.getElementById('result').style.display = 'block';
});

function calculateCompatibility(age, iqAnswers, hobbies) {
  let correctAnswers = ['8', '����', '9', '���', '�'];
  let iqScore = iqAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
  let ageCompatibility = (Math.abs(age - 25) <= 3) ? 100 : 50;
  let iqCompatibility = (iqScore >= 4) ? 100 : 50;

  let hobbyCompatibility = hobbies.filter(hobby => hobby === 'A').length * 20;

  let totalCompatibility = (ageCompatibility + iqCompatibility + hobbyCompatibility) / 3;
  return totalCompatibility.toFixed(2);
}
