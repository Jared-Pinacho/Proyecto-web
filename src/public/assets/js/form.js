const form = (() => {
  const $formStatus = document.getElementById("formStatus");
  const $inputStatus = document.getElementById("status");
  const $inputDescription = document.getElementById("description");

  const _sendActionForm = (event = {}) => {
    if($inputStatus.value === '' && $inputDescription.value === ''){
        event.preventDefault();
        alert("Todos los campos son requeridos");
    }
  };

  const _addActionForm = () => {
    $formStatus.addEventListener("submit", _sendActionForm);
  };

  return {
    init: () => {
      _addActionForm();
    },
  };
})();

form.init();
