///<reference path="pessoa.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="paciente.ts"/>
///<reference path="medico.ts"/>
///<reference path="hospital.ts"/>

    // ------------------------- Hospital ------------------------------

namespace Hospital{
    let hospital = new Hospital();
    hospital.setNome("Santa Marcelina Itaquera");

    // ------------------------- Pacientes ------------------------------

    let paciente = new Paciente();
    paciente. setcodPaciente(1);

    let paciente2 = new Paciente();
    paciente.setcodPaciente(2);

    let paciente3 = new Paciente();
    paciente.setcodPaciente(3);

    document.getElementById("Codigo").textContent=paciente.getcodPaciente().toString();

    hospital.addPaciente(paciente);
    hospital.addPaciente(paciente2);
    hospital.addPaciente(paciente3);

    // ------------------------- Medicos ------------------------------

    let medico = new Medico();
    medico. setCrm("4");
    medico. setEspecialidade("Cardiologista")

    let medico2 = new Medico();
    medico. setCrm("6");
    medico. setEspecialidade("Ginecologista")

    let medico3 = new Medico();
    medico. setCrm("4");
    medico. setEspecialidade("Pediatra")

    document.getElementById("CRM").textContent=medico.getCrm().toString();
    document.getElementById("Especialidade").textContent=medico.getEspecialidade().toString();

    hospital.addMedico(medico);
    hospital.addMedico(medico2);
    hospital.addMedico(medico3);

    // ------------------------- Enfermeiros ------------------------------

    let enfermeiro = new Enfermeiro();
    enfermeiro. setCoren("4");

    let enfermeiro2 = new Enfermeiro();
    enfermeiro. setCoren("6");

    let enfermeiro3 = new Enfermeiro();
    enfermeiro. setCoren("4");

    document.getElementById("Coren").textContent=enfermeiro.getCoren().toString();

    hospital.addEnfermeiro(enfermeiro3);
    hospital.addEnfermeiro(enfermeiro3);
    hospital.addEnfermeiro(enfermeiro3);



    let tabela = document.getElementById("tabela");

    let conteudo = "<tr> <th>Enfermeiro</th> <th>Hospital</th> </tr>";
    hospital.getEnfermeiro().forEach(element =>{
        conteudo += "<tr> <td>"+element.getEnfermeiro()+"</td<td>"+element.getCoren();
    })

    tabela.innerHTML = conteudo;
}