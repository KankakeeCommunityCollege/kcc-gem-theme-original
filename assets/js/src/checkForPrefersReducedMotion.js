function checkForPrefersReduceMotion() {
  const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reducedMotion = reducedMotionMediaQuery.matches ? true : false;

  localStorage.setItem('userPrefersReducedMotion', reducedMotion);

  reducedMotionMediaQuery.addEventListener('change', _e => {
    if (reducedMotionMediaQuery.matches) {
      reducedMotion = true;
    } else {
      reducedMotion = false;
    }
    localStorage.setItem('userPrefersReducedMotion', reducedMotion);
  });
}

export default checkForPrefersReduceMotion;
