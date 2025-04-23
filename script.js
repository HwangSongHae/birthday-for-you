// 슬라이드 랜덤 표시
window.addEventListener("load", () => {
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
      let current = 0;
      slides[current].classList.add("active");
      setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }, 3000);
    }
  
    // 타이핑 애니메이션
    const letterEl = document.getElementById("letter");
    if (letterEl) {
      const message = "OO야, 항상 내 옆에 있어줘서 고마워. "+
      "오늘만큼은 세상에서 네가 제일 빛났으면 좋겠어. "+
      "생일 진심으로 축하해! ❤️";
      let i = 0;
      const typing = () => {
        if (i < message.length) {
          letterEl.textContent += message.charAt(i);
          i++;
          setTimeout(typing, 70);
        }
      };
      typing();
    }
  });
  
  // 쿠폰 열기 기능
  function showCoupon(index) {
    const coupon = document.getElementById(`coupon${index}`);
    if (coupon) {
      coupon.classList.remove("hidden");
    }
  }