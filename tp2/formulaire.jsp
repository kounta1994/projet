<script>
var email = document.querySelector('input.exemple');
email.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
		}
	}
};
</script>