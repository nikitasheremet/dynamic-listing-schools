const createForm = (name, about, location, admission, image_url) => {
  let formData = new FormData();
  formData.append("name", name);
  formData.append("about", about);
  formData.append("location", location);
  formData.append("admission", admission);
  formData.append("image", image_url);
  return formData;
};

module.exports = createForm;
