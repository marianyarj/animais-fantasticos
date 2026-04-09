const initOperatingHours = () => {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
    // console.log(diasSemana);
    // console.log(horarioSemana);

    const dataAgora = new Date();
    const diaSemanaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();
    // console.log(diaSemanaAgora, horarioAgora);

    const semanaAberto = diasSemana.indexOf(diaSemanaAgora) !== -1;
    // console.log(semanaAberto);
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
    // if (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]) {
    //     console.log("aberto");
    // }

    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add("aberto");
    }
};

export default initOperatingHours;
