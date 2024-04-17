const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  for (let key of formData.keys()) {
    data[key] = formData.get(key);
  }
  console.log(data);
  form.reset();
};

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", handleSubmit);
submitBtn.addEventListener("click", handleSubmit);
