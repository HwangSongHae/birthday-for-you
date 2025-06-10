
  
  // 쿠폰 열기 기능
  function showCoupon(index) {
    const coupon = document.getElementById(`coupon${index}`);
    if (coupon) {
      coupon.classList.remove("hidden");
    }
  }