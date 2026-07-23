// Capítulos 1-3: Introducción, Mentalidad, Lista de Compras, Plan 21 días
const H = require("./generate_guia");
const { h1, h2, h3, p, pRich, bullet, bulletLead, tipBox, imgPlaceholder, buildTable, spacer, pageBreak, divider, quote, P, AlignmentType } = H;

// ============================================================
// PORTADA
// ============================================================
function buildCover() {
  // Cover R6-inspired: warm editorial, no full-bleed color block, centered elegant
  const coverElements = [];

  // Top spacing
  coverElements.push(new H.Paragraph({ spacing: { before: 1200 }, children: [new H.TextRun({ text: "" })] }));

  // Eyebrow / categoría
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { after: 240 },
    children: [
      new H.TextRun({
        text: "GUÍA COMPLETA DE NUTRICIÓN PERUANA",
        size: 22,
        bold: true,
        color: H.c(P.accent),
        characterSpacing: 60,
        font: { ascii: "Calibri" },
      }),
    ],
  }));

  // Decorative line
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { after: 480 },
    border: { bottom: { style: H.BorderStyle.SINGLE, size: 12, color: H.c(P.accent), space: 4 } },
    indent: { left: 3600, right: 3600 },
    children: [new H.TextRun({ text: "" })],
  }));

  // Title (big, two lines)
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { line: 920, lineRule: "atLeast", after: 200 },
    children: [
      new H.TextRun({
        text: "SABER PERUANO,",
        size: 80,
        bold: true,
        color: H.c(P.primary),
        font: { ascii: "Calibri" },
      }),
    ],
  }));
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { line: 920, lineRule: "atLeast", after: 600 },
    children: [
      new H.TextRun({
        text: "CUERPO SALUDABLE",
        size: 80,
        bold: true,
        color: H.c(P.primary),
        font: { ascii: "Calibri" },
      }),
    ],
  }));

  // Subtitle
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { line: 400, after: 200 },
    indent: { left: 1800, right: 1800 },
    children: [
      new H.TextRun({
        text: "Tu guía de 21 días para bajar de peso comiendo rico,",
        size: 28,
        italics: true,
        color: H.c(P.body),
        font: { ascii: "Calibri" },
      }),
    ],
  }));
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { line: 400, after: 800 },
    indent: { left: 1800, right: 1800 },
    children: [
      new H.TextRun({
        text: "barato y con sabor a casa",
        size: 28,
        italics: true,
        color: H.c(P.body),
        font: { ascii: "Calibri" },
      }),
    ],
  }));

  // Decorative image placeholder
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { after: 400 },
    children: [
      new H.TextRun({
        text: "🇵🇪  🍅  🥑  🌽  🐟  🥗",
        size: 44,
        color: H.c(P.accent),
        font: { ascii: "Calibri" },
      }),
    ],
  }));

  // Bottom — author / disclaimer
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { before: 600, after: 120 },
    children: [
      new H.TextRun({
        text: "Por el equipo de Nutrición Peruana Saludable",
        size: 22,
        color: H.c(P.secondary),
        font: { ascii: "Calibri" },
      }),
    ],
  }));
  coverElements.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [
      new H.TextRun({
        text: "Edición 2026 · Recetas, menús y hábitos para la vida real",
        size: 20,
        italics: true,
        color: H.c(P.secondary),
        font: { ascii: "Calibri" },
      }),
    ],
  }));

  return coverElements;
}

// ============================================================
// DESCARGO DE RESPONSABILIDAD MÉDICA
// ============================================================
function buildDisclaimer() {
  const out = [];
  out.push(h1("Descargo de responsabilidad médica"));
  out.push(divider());

  out.push(new H.Table({
    width: { size: 100, type: H.WidthType.PERCENTAGE },
    borders: {
      top:    { style: H.BorderStyle.SINGLE, size: 16, color: H.c(P.redsoft) },
      bottom: { style: H.BorderStyle.SINGLE, size: 16, color: H.c(P.redsoft) },
      left:   { style: H.BorderStyle.SINGLE, size: 24, color: H.c(P.redsoft) },
      right:  { style: H.BorderStyle.SINGLE, size: 4, color: H.c(P.redsoft) },
      insideHorizontal: { style: H.BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideVertical:   { style: H.BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
    rows: [
      new H.TableRow({
        cantSplit: true,
        children: [
          new H.TableCell({
            width: { size: 100, type: H.WidthType.PERCENTAGE },
            shading: { type: H.ShadingType.CLEAR, fill: "FDECEA" },
            margins: { top: 240, bottom: 240, left: 280, right: 280 },
            children: [
              new H.Paragraph({
                spacing: { line: 300, after: 120 },
                children: [
                  new H.TextRun({ text: "⚠️  LEE ESTO ANTES DE EMPEZAR", bold: true, size: 26, color: H.c(P.redsoft), font: { ascii: "Calibri" } }),
                ],
              }),
              new H.Paragraph({
                spacing: { line: 300, after: 120 },
                children: [
                  new H.TextRun({ text: "Esta guía es un material educativo y motivacional. No reemplaza la consulta con un profesional de la salud.", size: 22, color: H.c(P.body), font: { ascii: "Calibri" } }),
                ],
              }),
              new H.Paragraph({
                spacing: { line: 300, after: 80 },
                children: [
                  new H.TextRun({ text: "Antes de iniciar cualquier plan de alimentación o actividad física, asegúrate de consultar con tu médico, nutricionista o endocrinólogo — especialmente si:", size: 22, color: H.c(P.body), font: { ascii: "Calibri" } }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  }));

  out.push(spacer(160));
  out.push(bulletLead("Tienes diabetes, hipertensión, colesterol alto, ", "o alguna enfermedad crónica diagnosticada."));
  out.push(bulletLead("Estás embarazada o en etapa de lactancia."));
  out.push(bulletLead("Tomas medicación regular ", "(sobre todo para la presión, azúcar o tiroides)."));
  out.push(bulletLead("Tienes algún trastorno de la conducta alimentaria ", "(anorexia, bulimia, atracones) o antecedentes de ello."));
  out.push(bulletLead("Eres menor de 18 años o mayor de 65, ", "el plan debe personalizarse."));
  out.push(bulletLead("Tienes lesiones articulares, hernias ", "o problemas cardíacos no tratados."));

  out.push(spacer(160));
  out.push(p("Los menús, porciones y recomendaciones de esta guía son generales y están pensados para adultos sanos. Cada cuerpo responde distinto: lo que le cae bien a tu amiga puede no caerte bien a ti. Si sientes mareos, debilidad extrema, dolor de cabeza persistente, palpitaciones o cualquier síntoma que te preocupe, DETENTE y consulta a un profesional."));
  out.push(p("Esta guía NO promete resultados mágicos ni cantidades exactas de kilos perdidos. La pérdida de peso saludable es gradual (entre 0.5 y 1 kg por semana es un ritmo excelente) y depende de tu peso inicial, tu metabolismo, tu actividad física, tu descanso y tu constancia. La sola compra de este documento no te hará bajar de peso; lo que te hará bajar de peso es aplicarlo con paciencia, día tras día."));
  out.push(p("Si tienes dudas específicas sobre tu caso, no te quedes con la duda: busca un nutricionista colegiado (cnpe@colegionutricionistas.pe) o acude al centro de salud más cercano. Mereces un plan hecho a tu medida cuando tu cuerpo lo necesita."));

  out.push(spacer(160));
  out.push(pRich([
    { text: "Al continuar leyendo y aplicar esta guía, reconoces que lo haces bajo tu propia responsabilidad y eximes a los autores de cualquier daño directo o indirecto derivado del uso de esta información.", italics: true, color: P.secondary, size: 20 },
  ]));

  out.push(pageBreak());
  return out;
}

// ============================================================
// INTRODUCCIÓN
// ============================================================
function buildIntro() {
  const out = [];
  out.push(h1("Introducción: Por qué las dietas tradicionales fallan"));
  out.push(divider());

  out.push(quote("Hazle caso a tu cuerpo, no a la moda. La mejor dieta es la que puedes sostener toda la vida."));

  out.push(p("Empecemos siendo honestos: ¿cuántas veces has empezado una dieta el lunes y para el miércoles ya estabas comiendo el pan entero con huevo? No te sientas mal, nos ha pasado a casi todos. La industria del fitness y la belleza nos vendió la idea de que bajar de peso es sinónimo de sufrimiento, de dejar de comer arroz, de vivir a base de lechuga y pechuga de pollo hervida. Y eso, simplemente, no funciona."));
  out.push(p("Las dietas tradicionales fallan por varias razones, y conviene entenderlas antes de empezar, para no repetir los mismos errores. Primero, porque son dietas pensadas para otros países: te dicen que comas quinoa con kale y aguacate, cuando en tu mercado de barrio el aguacate está carísimo y el kale ni siquiera existe. Segundo, porque eliminan alimentos que amamos: el arroz, la papa, el pan, el ají. Y cuando te prohiben lo que más te gusta, tu cerebro se obsesiona con eso hasta que terminas rindiéndote y comiendo el doble. Tercero, porque no toman en cuenta cómo comemos en casa: la olla de la abuela, la hora del almuerzo en familia, el picadito del sábado, el pollo a la brasa del domingo."));
  out.push(p("Y lo más importante: las dietas tradicionales no educan. Te dicen qué comer, pero no te enseñan a elegir. Te dicen cuánto, pero no te explican por qué. Y cuando terminas la dieta (si es que la terminas), vuelves a tus hábitos de siempre y recuperas todo el peso perdido, a veces con intereses. Eso se llama efecto rebote y es la consecuencia directa de hacer dietas extremas y no sostenibles."));

  out.push(h2("Esta guía es distinta. Y aquí te explico por qué"));

  out.push(p("Esta guía nació de una idea simple: no necesitas comer cosas raras ni caras para bajar de peso. Necesitas comer mejor las cosas que ya tienes a la mano. El Perú tiene una de las cocinas más ricas, variadas y nutritivas del mundo: tenemos quinua, kiwicha, tarwi, maca, papa nativa, aguaymanto, lucuma, sachatomate, chirimoya, palta, pescado fresco del mar frío, aves, menestras. Tenemos mercados baratísimos donde por 20 soles te llevas una semana de verduras. Tenemos todo a favor."));
  out.push(p("El problema no es la comida peruana. El problema es cómo la hemos estado preparando y combinando: demasiado aceite, pan con todo, gaseosa en cada comida, postres diarios, porciones gigantes. Esta guía no te va a prohibir el lomo saltado ni el ceviche. Te va a enseñar a prepararlos más livianos, con porciones reales, acompañados de forma inteligente. Vas a seguir comiendo peruano, pero más inteligente."));

  out.push(h2("Qué vas a encontrar en estas páginas"));

  out.push(bullet("Una lista de compras inteligente con precios reales en soles, calculada para que gastes menos de lo que crees."));
  out.push(bullet("Un plan de 21 días con menús diarios completos: desayuno, almuerzo, cena y snacks. Sin inventar nada raro."));
  out.push(bullet("Recetas peruanas 'hackeadas': lomo saltado, ají de gallina, ceviche, causa, estofado, seco, arroz con pollo... todos en versión más liviana y nutritiva."));
  out.push(bullet("Ejercicios en casa, sin gimnasio y sin excusas. 20 minutos al día son suficientes para empezar."));
  out.push(bullet("Estrategias para sobrevivir a fiestas, reuniones, casamientos, cumpleaños y antojos nocturnos sin sentirte culpable."));
  out.push(bullet("Tablas claras de alimentos permitidos, moderados y prohibidos, para que sepas exactamente qué elegir."));
  out.push(bullet("Un sistema de tracking de progreso y un calculador de IMC para que midas tu avance."));

  out.push(h2("Quién soy yo para decirte esto"));

  out.push(p("Soy nutricionista, sí. Pero sobre todo soy peruano, crecí comiendo en mercado, almorzando en casa de la abuela, y sé lo que cuesta mantener hábitos cuando trabajas 8, 10, 12 horas al día, cuando llegas cansado y la opción más fácil es pedir pizza. No te voy a hablar desde la torre de marfil de alguien que nunca ha batallado con su peso. Te voy a hablar de igual a igual, con cosas que funcionan en la vida real, no en un laboratorio."));
  out.push(p("No te voy a prometer que vas a bajar 10 kilos en un mes. Eso sería mentirte, y además sería irresponsable. Lo que sí te prometo es que si aplicas con constancia lo que está en esta guía, en 21 días vas a sentirte con más energía, tu ropa te va a quedar distinto, tu digestión va a mejorar, y vas a aprender a comer de una forma que puedes sostener toda la vida. Sin sufrimiento. Sin culpa. Sin dietas extremas."));

  out.push(quote("El cambio no viene de un día para otro. Viene de hacer un poquito mejor cada día, sin rendirte cuando te equivocas."));

  out.push(p("Así que respira, agarra tu cuaderno, tu lapicero y mucha voluntad. Vamos a empezar este viaje juntos. Y recuerda: no estás sola(o) en esto."));

  out.push(pageBreak());
  return out;
}

// ============================================================
// CAPÍTULO 1: MENTALIDAD Y HÁBITOS
// ============================================================
function buildCap1() {
  const out = [];
  out.push(h1("Capítulo 1: Mentalidad y hábitos — la base de todo"));
  out.push(divider());

  out.push(quote("No puedes cambiar tu cuerpo sin cambiar tu cabeza. Y no puedes cambiar tu cabeza sin ser amable contigo mismo."));

  out.push(p("Antes de hablar de comida, vamos a hablar de ti. De tu cabeza. De tus hábitos. De por qué hasta ahora no has logrado sostener un cambio. Porque te lo digo de una vez: si tu mentalidad no cambia, ninguna dieta del mundo te va a funcionar. Puedes tener el mejor plan de alimentación en la mano, pero si tu cabeza sigue atrapada en el 'todo o nada', en el 'ya fallé, total...', en el 'mañana empiezo', vas a seguir dando vueltas en el mismo círculo."));

  out.push(h2("1.1 El mito de la fuerza de voluntad"));

  out.push(p("Aquí va una verdad incómoda: la fuerza de voluntad no existe como la imaginamos. No es un músculo que se entrena. No es un depósito que se llena o se vacía. La gente que parece tener 'mucha fuerza de voluntad' en realidad no la usa casi nunca: simplemente ha creado hábitos tan sólidos que no necesita decidir. No deciden si van a ir al gimnasio, van. No deciden si van a desayunar avena o dona, tienen avena. La decisión ya está tomada, y eso les ahorra energía mental."));
  out.push(p("Por eso, cuando intentas bajar de peso 'a pura fuerza de voluntad', fallas. Porque estás gastando energía mental en cada decisión del día: ¿como esto o aquello?, ¿voy a caminar o no?, ¿me como este pancito o no? Y en algún momento del día, cuando estás cansada(o), estresada(o) o aburrida(o), tu cerebro ya no tiene combustible para decidir bien, y eliges lo fácil. Y ahí viene la culpa, el 'ya todo se fue al tacho', y el ciclo se repite."));
  out.push(p("La salida no es tener más fuerza de voluntad. La salida es tener menos decisiones que tomar. Automatizar. Crear hábitos. Hacer que la opción saludable sea la más fácil, la más visible, la más a mano. Eso es lo que vamos a construir en estos 21 días."));

  out.push(h2("1.2 Los 7 hábitos que van a cambiar tu vida"));

  out.push(p("No intentes cambiar todo de golpe. Eso no funciona. Estos son los 7 hábitos que, si los adoptas uno por uno durante las próximas semanas, van a transformar tu relación con la comida y con tu cuerpo. No son dietas, son hábitos. Y los hábitos, una vez instalados, son para siempre."));

  out.push(h3("Hábito 1: Toma un vaso de agua al despertar"));
  out.push(p("Suena tonto, pero no lo es. Después de 7-8 horas de sueño, tu cuerpo está deshidratado. Tomar un vaso de agua (mejor si está tibia, con unas gotitas de limón) nada más levantarte activa tu metabolismo, ayuda a tu digestión, y te despierta mejor que el café. Además, muchas veces confundimos sed con hambre: si empiezas el día hidratada(o), es menos probable que piquees todo el día."));
  out.push(p("Pon un vaso o termo en tu mesa de noche. Que sea lo primero que veas al despertar. En una semana, va a ser automático."));

  out.push(h3("Hábito 2: Desayuna proteína, no solo carbohidratos"));
  out.push(p("El desayuno típico peruano es pan con mantequilla, pan con mermelada, pan con algo. Y eso te dispara el azúcar, te da hambre a media mañana, y te hace picar dulces. Cambia el desayuno: huevo (1-2) preparado sin aceite o con muy poco, avena con leche o quinua con leche, yogur con fruta y semillas, o un buen sánguche integral con pechuga de pollo y tomate. La proteína te mantiene llena(o) por más tiempo y estabiliza tu energía."));
  out.push(p("Si te da flojera cocinar en la mañana, prepáralo la noche anterior. La avena se puede dejar remojando en la leche. Los huevos se hacen en 5 minutos. No hay excusa."));

  out.push(h3("Hábito 3: Llena la mitad del plato con verduras"));
  out.push(p("Esta es la regla de oro. En cada almuerzo y cena, la mitad de tu plato debe ser verdura o ensalada. No para 'llenar', sino porque la verdura tiene volumen, fibra, agua, vitaminas, y casi nada de calorías. Te llena sin inflarte. La otra mitad del plato se reparte así: un cuarto de proteína (pollo, pescado, huevo, menestra) y un cuarto de carbohidrato (arroz, papa, quinua, camote)."));
  out.push(p("¿No te gusta la ensalada? Empieza con lo que sí te gusta: tomate, pepino, zanahoria rallada. Agrega un chorrito de limón y poca sal. En dos semanas, tu paladar se acostumbra y empiezas a disfrutarla."));

  out.push(h3("Hábito 4: Come sentada(o), sin celular, sin tele"));
  out.push(p("Comer distraída(o) es la mejor forma de comer de más. Tu cerebro tarda unos 20 minutos en registrar que estás llena(o), y si estás mirando TikTok o el noticiero, no te das cuenta. Cuando por fin miras el plato, ya te comiste dos porciones."));
  out.push(p("Come sentada(o). Mira tu plato. Mastica despacio (sí, esto importa muchísimo). Si puedes, comparte la comida con alguien y conversa. No solo vas a comer menos, vas a disfrutar más. La comida no es solo nutrientes: es momento, es ritual, es conexión."));

  out.push(h3("Hábito 5: Camina 30 minutos al día"));
  out.push(p("No necesitas gimnasio. No necesitas ropa deportiva cara. No necesitas inscribirte en nada. Necesitas caminar 30 minutos al día, todos los días. Puedes partirlo en dos: 15 minutos en la mañana y 15 en la tarde. Puedes hacerlo yendo al trabajo, volviendo, en el almuerzo, después de comer. Lo que sea, pero muévete."));
  out.push(p("Caminar baja el azúcar, quema calorías, mejora tu ánimo, ayuda a tu digestión, reduce el estrés. Es el ejercicio más subestimado del mundo. Si no puedes caminar 30 minutos seguidos, empieza con 10. Pero empieza hoy, no mañana."));

  out.push(h3("Hábito 6: Duerme 7-8 horas"));
  out.push(p("Si no duermes bien, no vas a bajar de peso. Punto. Cuando duermes poco, tu cuerpo produce más grelina (la hormona del hambre) y menos leptina (la hormona de la saciedad). Es decir, al día siguiente vas a tener más hambre, sobre todo por cosas dulces y grasosas. Además, tu cuerpo va a almacenar más grasa porque está estresado."));
  out.push(p("Acuéstate a la misma hora. Apaga el celular 30 minutos antes. No comas pesado en la noche. La calidad del sueño es tan importante como la cantidad."));

  out.push(h3("Hábito 7: Sé amable contigo misma(o) cuando te equivoques"));
  out.push(p("Vas a fallar. Vas a comerte el pancito. Vas a saltarte la caminata. Vas a pedir pizza un sábado. No pasa nada. La diferencia entre la gente que logra cambiar y la que no, no es que los primeros no fallan. Es que cuando fallan, no se tiran al piso a llorar y abandonar todo. Se levantan al día siguiente y siguen. Sin culpa, sin castigo, sin 'ya da lo mismo'."));
  out.push(p("Una comida no te hace engordar, así como una ensalada no te hace adelgazar. Lo que cuenta es el promedio. Si en una semana comiste bien 6 días y el domingo te diste un gusto, vas a bajar de peso. La perfección no existe. La constancia sí."));

  out.push(tipBox(
    "Tu tarea para esta semana",
    "Antes de seguir leyendo, toma un cuaderno y escribe los 7 hábitos. Marca cuáles ya cumples y cuáles no. No intentes cambiar todos esta semana: elige UNO, solo uno, y comprométete con él durante 7 días. La próxima semana, agrega otro. Así, en 7 semanas, vas a tener hábitos nuevos sin haber sufrido."
  ));

  out.push(h2("1.3 Cómo instalar un hábito (y cómo no abandonarlo)"));

  out.push(p("Instalar un hábito lleva entre 21 y 66 días, según la investigación. No es magia, es repetición. Pero hay formas de hacerlo más fácil y formas de sabotearlo. Aquí te dejo las claves que sí funcionan:"));

  out.push(bulletLead("Empieza chico. ", "Si quieres 'caminar 1 hora todos los días', empieza con 10 minutos. El cerebro rechaza los cambios grandes, pero acepta los pequeños. Una vez que 10 minutos sea automático, suma 5 más."));
  out.push(bulletLead("Anclalo a algo que ya haces. ", "Quiero tomar agua al despertar = dejo el vaso al lado del celular que suena el despertador. Quiero caminar después del almuerzo = dejo los tenis listos al lado de la mesa. Anclaje = tu cerebro no tiene que 'acordarse', lo hace en automático."));
  out.push(bulletLead("Házlo visible. ", "Lo que no se ve, no se hace. Si quieres comer más fruta, ponla en un bowl sobre la mesa. Si quieres comer menos galletas, no las tengas en casa. El ambiente manda más que la voluntad."));
  out.push(bulletLead("Regístralo. ", "Marca en un calendario cada día que cumples tu hábito. Ver la cadena creando es adictivo. No quieres romper la cadena."));
  out.push(bulletLead("No esperes motivación. ", "La motivación viene después de empezar, no antes. Empieza aunque no tengas ganas. En 5 minutos, las ganas aparecen."));
  out.push(bulletLead("Perdónate rápido. ", "Si fallas un día, no te castigues. Mañana es otro día. Lo único que no debes hacer es abandonar."));

  out.push(h2("1.4 Las trampas mentales más comunes (y cómo salir de ellas)"));

  out.push(h3("Trampa 1: 'Ya me comí una galleta, total, el día está perdido'"));
  out.push(p("Esto se llama pensamiento todo-o-nada y es la trampa número uno. Una galleta son 60 calorías. Si te comiste una galleta a las 10 de la mañana, el día no está perdido: solo sigues comiendo bien el resto del día. Pero si dices 'ya está, todo se fue al tacho', te comes el paquete entero, y ahí sí perdiste el día. La gente que mantiene su peso no es la que nunca se come una galleta: es la que se come una y sigue."));

  out.push(h3("Trampa 2: 'Mañana empiezo'"));
  out.push(p("El 'mañana' es una trampa mortal. Porque mañana también habrá un 'mañana'. Y otro. Y otro. Si quieres empezar, empieza hoy, aunque sea con una pequeña cosa: toma el vaso de agua, camina 10 minutos, agrega ensalada al almuerzo. No esperes al lunes, al primero de mes, al año nuevo. Hoy. Ahora."));

  out.push(h3("Trampa 3: 'No tengo tiempo'"));
  out.push(p("No tienes tiempo para cocinar, pero tienes tiempo para mirar TikTok 2 horas al día. No tienes tiempo para caminar, pero tienes tiempo para ver 3 capítulos de una serie. El 'no tengo tiempo' casi siempre significa 'no es prioridad'. Y está bien que no sea prioridad a veces, pero sé honesta(o) contigo misma(o). Si tu salud no es prioridad ahora, ¿cuándo lo va a ser?"));

  out.push(h3("Trampa 4: 'Es que mi metabolismo es lento'"));
  out.push(p("Tu metabolismo probablemente no es lento. Lo que pasa es que subestimas cuánto comes y sobreestimas cuánto te mueves. Estudios serios muestran que la gente con sobrepeso tiende a subestimar su consumo en un 30-50%. Es decir, crees que comiste 1500 calorías y en realidad comiste 2200. Antes de culpar al metabolismo, lleva un registro honesto de todo lo que comes durante 3 días. Te va a sorprender."));

  out.push(h3("Trampa 5: 'Es genético, en mi familia todos somos así'"));
  out.push(p("Sí, la genética influye. Pero influye mucho menos de lo que crees. Lo que se hereda no es solo el metabolismo, son los hábitos: la forma de cocinar, las porciones, la relación con la comida. Si en tu familia todos comen arroz con todo, pan con todo, gaseosa con todo, claro que vas a heredar esos hábitos. Pero los hábitos se pueden cambiar. Tú puedes ser la generación que rompe el ciclo."));

  out.push(h2("1.5 Tu por qué: la pregunta más importante"));

  out.push(p("Antes de cerrar este capítulo, hazte esta pregunta y respóndela con honestidad: ¿por qué quieres bajar de peso? No la respuesta rápida ('para verse bien'). La respuesta profunda. ¿Para qué? ¿Para qué quieres verte bien? ¿Para qué quieres sentirte bien?"));
  out.push(p("Quizás es para poder jugar con tus hijos sin cansarte. Para no sentirte avergonzada(o) en la playa. Para tener energía en el trabajo. Para prevenir la diabetes que tiene tu mamá. Para demostrarte que sí puedes. Tu 'por qué' tiene que ser tuyo, no el de la publicidad ni el de tu pareja. Cuando las ganas de rendirte aparezcan (y van a aparecer), tu 'por qué' es lo que te va a sostener."));
  out.push(p("Escríbelo. Pégalo en la refrigeradora. En el espejo del baño. En la pantalla del celular. Léelo cada mañana. Que sea lo primero que recuerdes cuando te tiente rendirte."));

  out.push(quote("Tu cuerpo puede hacerlo todo. Es tu mente la que tienes que convencer."));

  out.push(pageBreak());
  return out;
}

// Export
module.exports = { buildCover, buildDisclaimer, buildIntro, buildCap1 };
