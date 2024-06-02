
// Função para gerar um número aleatório dentro de um intervalo
const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
  // Função para animar o movimento dos elementos flutuantes
  const animateFloatingElements = () => {
    const floatingElements = document.querySelectorAll('.floating-element');
  
    floatingElements.forEach((element) => {
      // Define uma animação CSS personalizada
      element.style.animationDuration = `${getRandomNumber(2, 5)}s`;
      element.style.animationDelay = `${getRandomNumber(0, 3)}s`;
      element.style.animationTimingFunction = 'ease-in-out';
      element.style.animationIterationCount = 'infinite';
  
      // Define as propriedades de transformação para mover o elemento
      element.style.transform = `translate(${getRandomNumber(-50, 50)}vw, ${getRandomNumber(-50, 50)}vh)`;
    });
  };
  
  // Chama a função para iniciar a animação dos elementos flutuantes quando a página carrega
  window.onload = animateFloatingElements