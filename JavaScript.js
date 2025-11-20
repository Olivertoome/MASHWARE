document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    let colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"];
    let i = 0;

    const interval = setInterval(() => {
      link.style.color = colors[i % colors.length];
      i++;
    }, 120);

    link.addEventListener("mouseleave", () => {
      clearInterval(interval);
      link.style.color = "";
    }, { once: true });
  });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mousemove", e => {
    const rect = link.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    link.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "";
  });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    const original = getComputedStyle(link).boxShadow;

    let i = 0;
    const interval = setInterval(() => {
      link.style.boxShadow = i % 2 === 0
        ? "0 0 15px #FFD800"
        : original;
      i++;
    }, 200);

    link.addEventListener("mouseleave", () => {
      clearInterval(interval);
      link.style.boxShadow = original;
    }, { once: true });
  });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transition = "transform 0.15s ease";
    link.style.transform = "translateY(-8px) rotate(3deg)";
    setTimeout(() => {
      link.style.transform = "translateY(0) rotate(-3deg)";
    }, 150);
    setTimeout(() => {
      link.style.transform = "translateY(0) rotate(0)";
    }, 300);
  });
});
