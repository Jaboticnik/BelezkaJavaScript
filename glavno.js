window.addEventListener('load', () => {
    const form = document.querySelector('#nova-tabela');
    const input = document.querySelector('#nova-tabela-vpis');
    const list_el = document.querySelector('#belezke');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const beleznica = input.value;

        if (!beleznica) {
            alert("Izpolni vsa polja");
            return;
        }

        const beleznica_el = document.createElement("div");
        beleznica_el.classList.add("belezka");


        const beleznica_content_el = document.createElement("div");
        beleznica_content_el.classList.add("vsebina");


        beleznica_el.appendChild(beleznica_content_el);


        const beleznica_input_el = document.createElement("input");
        beleznica_input_el.classList.add("besedilo");
        beleznica_input_el.type = "besedilo";
        beleznica_input_el.value = beleznica;
        beleznica_input_el.setAttribute("readonly", "readonly");

        beleznica_content_el.appendChild(beleznica_input_el);

        const beleznica_actions_el = document.createElement("div");
        beleznica_actions_el.classList.add("dejanja");

        const beleznica_edit_el = document.createElement('button');
        beleznica_edit_el.classList.add('uredi');
        beleznica_edit_el.innerText = 'Uredi';

        const beleznica_delete_el = document.createElement('button');
        beleznica_delete_el.classList.add('izbrisi');
        beleznica_delete_el.innerText = 'Izbrisi';

        beleznica_actions_el.appendChild(beleznica_edit_el);
        beleznica_actions_el.appendChild(beleznica_delete_el);

        beleznica_el.appendChild(beleznica_actions_el);

        list_el.appendChild(beleznica_el);

        input.value = "";

        beleznica_edit_el.addEventListener('click', () => {
            if (beleznica_edit_el.innerText.toLowerCase() == "uredi") {
                beleznica_input_el.removeAttribute("readonly");
                beleznica_input_el.focus();
                beleznica_edit_el.innerText = "Shrani";
            } else {
                beleznica_input_el.setAttribute("readonly", "readonly");
                beleznica_edit_el.innerText = "Uredi";
            }
        });

        beleznica_delete_el.addEventListener('click', () => {
         list_el.removeChild(beleznica_el);
        });
    })
    }
)