const titles = [
  // main titles for each unit
  [
    "",
    "",
    "Economia i Emprenedoria. Programació i UD2",
    "Economia i Emprenedoria. Programació i UD3",
    "Economia i Emprenedoria. Programació i UD4",
    "Economia i Emprenedoria. Programació i UD5",
    "Economia i Emprenedoria. Programació i UD6",
    "Economia i Emprenedoria. Programació i UDC1",
    "Economia i Emprenedoria. Programació i UDC2"
  ],
  [],
  // ud2
  [
    "Presentació de la programació i UD2",
    "General fitxa avaluació",
    "S01 Objectius CA IA",
    "S01 Coneixements previs",
    "S01 Motivació",
    "S02 Preguntes abans procés",
    "S02 Pla treball",
    "S02 Kanban",
    "S03 Pressupost. Activitats",
    "S03 Sac dubtes",
    "S04 Renda disponible. Activitats",
    "S05 Destí RD. Activitats",
    "S06 Full càlcul. Activitats",
    "S07 Fem el pressupost. Full càlcul",
    "S08 Productes consum. Alternatives",
    "S08 Bastida suport. Consum responsable",
    "S09 Consum responsable. Alternatives",
    "S09 Font 1. Consum conscient",
    "S09 Font 2. Presa decisions",
    "S09 Font 3. Principis consum responsable",
    "S10 Comerç just. Experts",
    "S10 Píndola formativa. Comerç just",
    "S10 Comerç just. Còmic",
    "S12 Bretxa salarial",
    "S12 Font extra. Dossier 8M 2019",
    "S12 Font extra. Llei 17/2015",
    "S13 Estalvi i entitats bancàries",
    "S14 Finançament. Activitats",
    "S14 Píndola formativa. Finançament",
    "S14 Alternatives de finançament",
    "S14 Bastida suport. Presa notes",
    "S15 Bastida suport. Mapa mut",
    "S16 Rúbrica presentació",
    "S17 Rúbrica producte",
    "S17 Metacognició"
  ],
  // ud3
  [
    "Presentació de la programació i UD3",
    "General fitxa avaluació",
    "S01 Objectius CA IA",
    "S01 Coneixements previs",
    "S02 Motivació",
    "S02 Preguntes abans procés",
    "S02 Pla treball",
    "S03 Píndola formativa empresa",
    "S03 Font consulta còmic empresa",
    "S03 Font consulta còmic enterprise",
    "S03 Sac dubtes",
    "S04 Píndola formativa ADN",
    "S04 RSC activitats. Taula i qüestions",
    "S04 Font Nespresso i greenwashing",
    "S04 Font socialwashing i greenwashing",
    "S04 Font RSC. Treballar fins a defallir",
    "S05 Píndola formativa empresa i entorn",
    "S05 Font consulta manifest Cluetrain",
    "S05 Bastida suport. Mapa mut",
    "S06 Píndola formativa tipus empresa",
    "S06 Origen moviment cooperatiu",
    "S06 Font consulta extra cooperatives",
    "S06 Bastida suport. Presa notes",
    "S07 Competir cooperant CCMA",
    "S08 Funcions i treball en equip",
    "S09 Empresa i dona. Lideratge femení",
    "S09 Font. Lideratge femení i valors",
    "S09 Font. Dones i Consells Administració",
    "S09 Font extra. Dossier 8M 2019",
    "S09 Font extra. Llei 17/2015",
    "S10 Píndola formativa. I C PM",
    "S11 Fiscalitat i empresa",
    "S11 Font lectura. Impostos",
    "S11 Font extra. Fiscalitat ambiental",
    "S12 1 ABJ. Nous models cooperatius",
    "S12 2 ABJ. Joguines responsables",
    "S12 3 ABJ. Fiscalitat justa",
    "S12 4 ABJ. Entorn dinàmic",
    "S15 Rúbrica ABJ",
    "S15 Rúbrica actitud",
    "S15 Rúbrica mapa XL",
    "S15 Metacognició"
  ],
  // ud4
  [
    "Presentació de la programació i UD4",
    "General fitxa avaluació",
    "S01 Objectius CA IA",
    "S01 Coneixements previs",
    "S02 Motivació",
    "S02 Preguntes abans procés",
    "S02 Pla treball",
    "S03 Activitat i síntesi SP",
    "S04 Activitat ingressos",
    "S05 Impostos. Exercitació I D",
    "S06 Anàlisi dades despesa. Activitat",
    "S06 Rúbrica equip",
    "S07 Anàlisi despesa",
    "S08 Bastida suport. Presa notes",
    "S08 Resultat econòmic SP. Activitat",
    "S09 Font Vicenç Navarro",
    "S09 Economies extractives i inclusives ",
    "S09 Control dèficit ingressos",
    "S10 Estat Benestar. Experts",
    "S10 Síntesi EB. VThinking",
    "S10 Plans equip",
    "S11 Valors EB",
    "S12 Gènere i SP. Activitats",
    "S12 Font. Lideratge femení i valors",
    "S12 Font. Mapa women in politics",
    "S12 Font extra. Dossier 8M 2019",
    "S12 Font extra. Llei 17/2015",
    "S14 Revisió plans equip",
    "S14 Bastida suport. Mapa mut",
    "S15 Rúbrica presentació",
    "S17 Rúbrica actitud",
    "S17 Rúbrica equip",
    "S17 Metacognició"
  ],
  // ud5
  [
    "Presentació de la programació i UD5",
    "General fitxa avaluació",
    "S01 Objectius CA IA",
    "S01 Coneixements previs",
    "S01 Motivació",
    "S01 Preguntes abans procés",
    "S02 Pla treball",
    "S03 Cicles economia i PIB",
    "S04 Activitat comentari PIB",
    "S04 Font. Informe treball domèstic",
    "S04 Font. Informe ODEE",
    "S04 Font extra. Llei 17/2015",
    "S04 Font consulta Oxfam",
    "S05 Píndola formativa atur. Experts",
    "S05 Font. Informe dones a Catalunya",
    "S05 Bastida suport. Mapa atur",
    "S05 Font. Efectes precarietat laboral",
    "S05 Font. Atur i dona",
    "S06 Anàlisi dades atur",
    "S08 Font. Còmic inflació",
    "S08 Anàlisi dades inflació",
    "S09 Bastida suport. Presa notes",
    "S10 Activitat reflexió",
    "S10 Font. Pobresa. V.Navarro",
    "S11 Infografies",
    "S12 Rúbrica producte",
    "S12 Rúbrica actualització EPA",
    "S12 Rúbrica actitud",
    "S12 Rúbrica equip",
    "S12 Metacognició"
  ],
  // ud6
  [
    "Presentació de la programació i UD6",
    "General fitxa avaluació",
    "S01 Objectius CA IA",
    "S01 Coneixements previs",
    "S01 Motivació",
    "S02 Preguntes abans procés",
    "S02 Pla treball",
    "S02 Plans equip",
    "S03 Aproximació CI",
    "S03 Estructura 1-2-4 CI",
    "S03 Mapa mut CI",
    "S03 Bastida suport. Mapa mut CI",
    "S04 Beneficis CI",
    "S05 Globalització",
    "S05 Globablització. VThinking",
    "S05 Bastida suport. Presa notes",
    "S06 Ens qüestionem DH",
    "S06 Revisió plans equip",
    "S06 Mapa mut DH",
    "S07 Indicadors alternatius. Experts",
    "S07 Per saber-ne més",
    "S08 Indicadors PIB IDH",
    "S08 Font consulta 2018 IDH",
    "S09 Dinàmica cubs CI",
    "S10 Eixos opressió activitat",
    "S10 Font consulta grup C i D",
    "S10 Avaluació plans equip",
    "S10 Rúbrica plans equip",
    "S14 Globalització i àmbit",
    "S16 Acció comunicació",
    "S16 Lectura voluntària",
    "S18 Rúbrica mapa i diagrama Ishikawa",
    "S18 Rúbrica actitud",
    "S18 Metacognició"
  ],
  // udc1
  [
    "Presentació de la programació i UDC1",
    "General fitxa avaluació",
    "S01 Objectius CA IA",
    "S01 Coneixements previs",
    "S02 Motivació",
    "S02 Preguntes abans procés",
    "S02 Pla treball",
    "S03 Píndola formativa EPA",
    "S03 Exemple CCommon",
    "S04 Autoconeixement VThinking",
    "S04 Proposta activitats",
    "S05 I Digital EduCAC",
    "S05 EPA organitzador de continguts",
    "S06 Mapa educatiu",
    "S07 Biaix gènere i estudis. Experts",
    "S07 Font dones FP",
    "S07 Font biaix HD universitat",
    "S07 Font addicional dona i mercat laboral",
    "S08 4a revolució industrial. Experts",
    "S08 Bastida suport. Presa notes",
    "S08 Font 4a revolució. Grup B",
    "S08 Font empleat AAA. Grup D",
    "S10 S11 Producció portafolis",
    "S12 Rúbrica presentació",
    "S13 Rúbrica EPA",
    "S13 Rúbrica actitud",
    "S13 Metacognició"
  ],
  // udc2
  [
    "Presentació de la programació i UDC2",
    "General fitxa avaluació",
    "General font lectura còmic",
    "S01 Objectius CA IA",
    "S01 Coneixements previs",
    "S01 Motivació",
    "S01 FClassroom valors emprenedors",
    "S02 Creativitat i emprenedoria. Experts",
    "S02 Font addicional dona i publicitat",
    "S05 Barreres creativitat. Activitat",
    "S06 Observació",
    "S07 Brain storming invers. Ideació",
    "S08 Combinació",
    "S09 Resiliència",
    "S10 Comuniquem cor i ment",
    "S11 Break out reflexió",
    "S12 Think outside the box",
    "S12 Rúbrica actitud",
    "S12 Rúbrica actualització EPA",
    "S12 Conte",
    "S12 Metacognició",
  ],
];

const footers = [
  "",
  "",
  // ud2
  "<p class='footer'>Nota: Per elaborar aquesta unitat s’han utilitzat propostes de treball i materials del:<br>- Llibret d’educació financera a l’ESO editat pel Ministerio de Educación.<br>- Mòduls formatius 2, 4 i 5 d’economia social i finances ètiques d’Economia Social Catalunya.<br>- Llibre de text: Economia i emprenedoria 4t ESO de l’editorial Barcanova.</p>",
  // ud3
  "<p class='footer'>Nota: Aquesta unitat està inspirada en el Word Peace Game i s’han utilitzat propostes de treball del:<br>- Mòdul formatiu d’economia social i finances ètiques d’Economia Social Catalunya.<br>- Llibre de text: Economia i emprenedoria 4t ESO de l’editorial Barcanova.</p>",
  // ud4
  "<p class='footer'>Nota: Per elaborar aquesta unitat s’han utilitzat propostes de treball i materials de:<br>- Materials educatius EduCaixa.<br>- Llibre de text: Economia i emprenedoria 4t ESO de l’editorial Barcanova.</p>",
  // ud5
  "",
  // ud6
  "",
  // udc1
  "",
  // udc2
  "<p class='footer'>Nota: Per elaborar aquesta unitat s’han utilitzat algunes tècniques per entrenar i avaluar la creativitat proposades en el llibre Crear i fer ampolles. Eines per educar la creativitat. Maria Batet, Franc Ponti i Enric Segarra.</p>"
];