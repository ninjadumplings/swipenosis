const symptoms = [
    "Headache",
    "Fever",
    "Cough",
    "Fatigue",
    "Sore throat",
    "Chest pain",
    "Shortness of breath",
    "Nausea",
    "Dizziness",
    "Joint pain",
    "Blurred vision",
    "Abdominal pain",
    "Palpitations",
    "Sweating",
    "Swollen legs"
];
  
  const diagnoses = [
    {
      name: "Common Cold",
      symptoms: ["Cough", "Sore throat", "Fatigue", "Headache"],
      description: "A viral infection causing sneezing, sore throat, and mild fever."
    },
    {
      name: "Heart Disease",
      symptoms: ["Chest pain", "Shortness of breath", "Palpitations", "Sweating", "Swollen legs"],
      description: "A range of conditions affecting the heart, often leading to serious complications if untreated."
    },
    {
      name: "Stroke",
      symptoms: ["Headache", "Dizziness", "Blurred vision", "Fatigue"],
      description: "A medical emergency where blood flow to the brain is interrupted."
    },
    {
      name: "Dry Eye Syndrome",
      symptoms: ["Blurred vision", "Headache"],
      description: "A condition where the eyes do not produce enough tears or the tears evaporate too quickly."
    },
    {
      name: "Irritable Bowel Syndrome (IBS)",
      symptoms: ["Abdominal pain", "Nausea", "Fatigue"],
      description: "A common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and diarrhea or constipation."
    },
    {
      name: "Arthritis",
      symptoms: ["Joint pain", "Fatigue"],
      description: "Inflammation of one or more joints, causing pain and stiffness that can worsen with age."
    }
];
  
  const userChoices = [];
  let currentIndex = 0;
  
  const cardContainer = document.getElementById('card-container');
  
  function renderCard() {
    cardContainer.innerHTML = '';
    if (currentIndex < symptoms.length) {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = symptoms[currentIndex];
      cardContainer.appendChild(card);
    }
  }
  
  
  function swipe(direction) {
    userChoices.push({ symptom: symptoms[currentIndex], hasSymptom: direction === 'right' });
    currentIndex++;
    renderCard();
}
  
  function submitSymptoms() {
    const positiveSymptoms = userChoices.filter(c => c.hasSymptom).map(c => c.symptom);
  
    const matchedDiagnoses = diagnoses.filter(diagnosis =>
      diagnosis.symptoms.every(symptom => positiveSymptoms.includes(symptom))
    );
  
    cardContainer.innerHTML = '';
  
    if (matchedDiagnoses.length > 0) {
      matchedDiagnoses.forEach(diagnosis => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<strong>${diagnosis.name}</strong><p>${diagnosis.description}</p>`;
        cardContainer.appendChild(card);
      });
    } else {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<strong>No matching diagnosis found.</strong><p>Please consult a healthcare professional for a comprehensive evaluation.</p>`;
      cardContainer.appendChild(card);
    }
}

renderCard();
  