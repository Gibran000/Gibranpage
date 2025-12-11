document.getElementById("btnGuardar").addEventListener("click", () => {
    const age = document.getElementById("age").value;
    const job = document.getElementById("job").value;
    const marital = document.getElementById("marital").value;
    const education = document.getElementById("education").value;
    const defaultt = document.getElementById("defaultt").value;
    const housing = document.getElementById("housing").value;
    const loan = document.getElementById("loan").value;
    const contact = document.getElementById("contact").value;
    const month = document.getElementById("month").value;
    const duration = document.getElementById("duration").value;
    const campaign = document.getElementById("campaign").value;
    const pdays = document.getElementById("pdays").value;
    const previous = document.getElementById("previous").value;
    const poutcome = document.getElementById("poutcome").value;
    const emp_var_rate = document.getElementById("emp_var_rate").value;
    const cons_price_idx = document.getElementById("cons_price_idx").value;
    const cons_conf_idx = document.getElementById("cons_conf_idx").value;
    const euribor3m = document.getElementById("euribor3m").value;
    const nr_employed = document.getElementById("nr_employed").value;


const API_KEY = "";
fetch("https://conexion-areamlgib01.eastus2.inference.ml.azure.com/score", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${API_KEY}`,
        "azureml-model-deployment": "mlauto001"
    },
    body: JSON.stringify({
		"age": age,
		"job": job,
		"marital": marital,
		"education": education,
		"default": defaultt,
		"housing": housing,
		"loan": loan,
		"contact": contact,
		"month": month,
		"duration": duration,
		"campaign": campaign,
		"pdays": pdays,
		"previous": previous,
		"poutcome": poutcome,
		"emp.var.rate": emp_var_rate,
		"cons.price.idx": cons_price_idx,
		"cons.conf.idx": cons_conf_idx,
		"euribor3m": euribor3m,
		"nr.employed": nr_employed

    })
})
.then(response => response.json())
.then(data => {
    console.log("Respuesta:", data);
})
.catch(err => {
    console.log("Error:", err);
});


    document.getElementById("resultado").textContent =
        `Hola ${age}, ${job}, ${marital}, ${education}, ${defaultt}, ${housing}, ${loan}, ${contact}, ${month}, ${duration}, ${campaign}, ${pdays}, ${previous}, ${poutcome}, ${emp_var_rate}, ${cons_price_idx}, ${cons_conf_idx}, ${euribor3m}, ${nr_employed}`;
});
