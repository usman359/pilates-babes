export const handleScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop,
    });
  }
};
