document.addEventListener('DOMContentLoaded', function() {
   
    const containerMaladie = document.getElementById('details-maladie');
    const containerExceptionnel = document.getElementById('details-exceptionnel');

    
    const checkboxCongeMaladie = document.querySelector('input[name="type_conge"][value="maladie"]');
    const checkboxCongeExceptionnel = document.querySelector('input[name="type_conge"][value="exceptionnel"]');

    
    checkboxCongeMaladie.addEventListener('change', function() {
        if (this.checked) {
            containerMaladie.style.display = 'block';
        } else {
            containerMaladie.style.display = 'none';
        }
    });

   
    checkboxCongeExceptionnel.addEventListener('change', function() {
        if (this.checked) {
            containerExceptionnel.style.display = 'block';
        } else {
            containerExceptionnel.style.display = 'none';
        }
    });
});
