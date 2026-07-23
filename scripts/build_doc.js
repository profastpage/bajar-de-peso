// Bonus + Conclusión + Document assembly
const H = require("./generate_guia");
const { h1, h2, h3, p, pRich, bullet, bulletLead, tipBox, imgPlaceholder, buildTable, spacer, pageBreak, divider, quote, P, AlignmentType } = H;
const part1 = require("./content_part1");
const part2 = require("./content_part2");
const part3 = require("./content_part3");

// ============================================================
// BONUS: TRACKING DE PROGRESO Y MEDIDOR DE IMC
// ============================================================
function buildBonus() {
  const out = [];
  out.push(h1("Bonus: Tracking de progreso y medidor de IMC"));
  out.push(divider());

  out.push(p("Lo que no se mide, no se mejora. Si quieres saber si estás avanzando, necesitas medir. Pero medir bien, sin obsesionarte. Aquí te voy a enseñar a registrar tu progreso de forma realista, y te doy las herramientas para calcular tu IMC y tus calorías objetivo. Esta es la parte técnica, pero te la explico simple."));

  out.push(h2("B.1 Calculadora de IMC (Índice de Masa Corporal)"));

  out.push(p("El IMC es una fórmula que relaciona tu peso con tu estatura. No es perfecta (no distingue entre músculo y grasa), pero es útil como punto de partida. Te dice en qué rango estás."));

  out.push(h3("Cómo calcularlo"));
  out.push(p("Fórmula: IMC = peso (kg) ÷ [estatura (m)]²"));
  out.push(p("Ejemplo: si pesas 75 kg y mides 1.65 m:"));
  out.push(p("1.65 × 1.65 = 2.7225"));
  out.push(p("75 ÷ 2.7225 = 27.5"));
  out.push(p("Tu IMC es 27.5 — está en sobrepeso."));

  out.push(h3("Tabla de clasificación (adultos)"));
  out.push(buildTable(
    ["IMC", "Clasificación", "Qué significa"],
    [
      ["Menos de 18.5", "Bajo peso", "Necesitas ganar peso. Consulta un nutricionista."],
      ["18.5 - 24.9", "Peso normal", "Estás en el rango saludable. Mantente."],
      ["25.0 - 29.9", "Sobrepeso", "Riesgo moderado. Buen momento para bajar."],
      ["30.0 - 34.9", "Obesidad grado I", "Riesgo alto. IMPORTANTE bajar con plan estructurado."],
      ["35.0 - 39.9", "Obesidad grado II", "Riesgo muy alto. Necesitas acompañamiento médico."],
      ["40 o más", "Obesidad grado III", "Riesgo extremo. Manejo multidisciplinario."],
    ],
    [20, 25, 55]
  ));

  out.push(spacer(160));

  out.push(tipBox(
    "Tabla para calcular tu IMC sin fórmula",
    "Busca tu estatura en la primera columna y tu peso en la primera fila. Donde se cruzan, está tu IMC. Si estás entre dos números, interpola."
  ));

  // Tabla IMC simplificada
  out.push(buildTable(
    ["Estatura \\ Peso", "55 kg", "60 kg", "65 kg", "70 kg", "75 kg", "80 kg", "85 kg", "90 kg"],
    [
      ["1.50 m", "24.4", "26.7", "28.9", "31.1", "33.3", "35.6", "37.8", "40.0"],
      ["1.55 m", "22.9", "25.0", "27.0", "29.1", "31.2", "33.3", "35.4", "37.5"],
      ["1.60 m", "21.5", "23.4", "25.4", "27.3", "29.3", "31.3", "33.2", "35.2"],
      ["1.65 m", "20.2", "22.0", "23.9", "25.7", "27.5", "29.4", "31.2", "33.1"],
      ["1.70 m", "19.0", "20.8", "22.5", "24.2", "26.0", "27.7", "29.4", "31.1"],
      ["1.75 m", "18.0", "19.6", "21.2", "22.9", "24.5", "26.1", "27.8", "29.4"],
      ["1.80 m", "17.0", "18.5", "20.1", "21.6", "23.1", "24.7", "26.2", "27.8"],
    ],
    [22, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75]
  ));

  out.push(h2("B.2 Cómo medirte correctamente"));

  out.push(p("El peso en la balanza es solo una medida. Hay otras formas más útiles de medir tu progreso, sobre todo cuando haces ejercicio (porque el músculo pesa más que la grasa y a veces no bajas de peso pero sí de medidas). Aquí te enseño a medirte como un profesional:"));

  out.push(h3("Mide estas 5 zonas cada 2 semanas"));
  out.push(bulletLead("Cintura (a la altura del ombligo). ", "Mide sin ropa, después de exhalar. La cinta debe estar paralela al piso, sin apretar."));
  out.push(bulletLead("Cadera (la parte más ancha). ", "Párate derecha, mide la parte más ancha de los glúteos."));
  out.push(bulletLead("Brazo (parte media). ", "Brazo relajado, mide la parte media del bíceps."));
  out.push(bulletLead("Muslo (parte media). ", "Sentada o de pie, mide la parte media del muslo."));
  out.push(bulletLead("Pecho (a la altura de los pezones). ", "Para hombres: miden directo. Para mujeres: encima del pecho."));

  out.push(tipBox(
    "Por qué las medidas importan más que el peso",
    "Si empiezas a hacer ejercicio y comes bien, puedes no bajar ni 1 kilo en la balanza pero perder 2-3 cm de cintura. Eso significa que estás perdiendo grasa y ganando músculo. El músculo es más denso que la grasa: pesa más pero ocupa menos espacio. Por eso, una persona de 70 kg con músculo se ve más delgada que una de 70 kg sin músculo."
  ));

  out.push(h2("B.3 Calcula tus calorías objetivo"));

  out.push(p("Para bajar de peso necesitas un déficit calórico: comer menos calorías de las que tu cuerpo gasta. Aquí te enseño a calcularlo en 3 pasos."));

  out.push(h3("Paso 1: Calcula tu TMB (Tasa Metabólica Basal)"));
  out.push(p("Es la energía que tu cuerpo gasta solo por existir (respirar, bombear sangre, mantener temperatura)."));
  out.push(p("Fórmula para mujeres: TMB = 447.6 + (9.25 × peso en kg) + (3.10 × estatura en cm) − (4.33 × edad)"));
  out.push(p("Fórmula para hombres: TMB = 88.36 + (13.40 × peso en kg) + (4.80 × estatura en cm) − (5.68 × edad)"));
  out.push(p("Ejemplo mujer, 30 años, 75 kg, 1.65 m: TMB = 447.6 + (9.25 × 75) + (3.10 × 165) − (4.33 × 30) = 447.6 + 693.75 + 511.5 − 129.9 = 1523 kcal"));

  out.push(h3("Paso 2: Multiplica por tu nivel de actividad"));
  out.push(buildTable(
    ["Nivel de actividad", "Factor", "Descripción"],
    [
      ["Sedentario", "1.2", "Trabajo de oficina, sin ejercicio, casi no caminas"],
      ["Ligero", "1.375", "Caminas 30 min/día o ejercicio ligero 1-3 veces/semana"],
      ["Moderado", "1.55", "Ejercicio moderado 3-5 veces/semana o trabajo activo"],
      ["Activo", "1.725", "Ejercicio intenso 6-7 veces/semana o trabajo físico"],
      ["Muy activo", "1.9", "Atleta, entrenamiento dos veces al día"],
    ],
    [30, 15, 55]
  ));

  out.push(p("Ejemplo: nuestra mujer de 1523 kcal de TMB, con actividad ligera (1.375): 1523 × 1.375 = 2094 kcal/día. Esto es lo que gasta su cuerpo en un día normal."));

  out.push(h3("Paso 3: Aplica el déficit"));
  out.push(p("Para perder 0.5 kg por semana (ritmo saludable), necesitas un déficit de 500 kcal al día."));
  out.push(p("Calorías objetivo = gasto diario − 500"));
  out.push(p("Ejemplo: 2094 − 500 = 1594 kcal/día. Esta es la cantidad de calorías que debe comer al día para bajar de peso."));

  out.push(tipBox(
    "Advertencia importante",
    "NUNCA comas menos de 1200 kcal al día (mujeres) o 1500 kcal al día (hombres) sin supervisión médica. Dietas muy bajas en calorías hacen perder músculo, no solo grasa, y disparan el efecto rebote. Mejor bajar más lento y sostenible, que rápido y recuperar todo."
  ));

  out.push(h2("B.4 Tabla de tracking — 21 días"));

  out.push(p("Esta es tu tabla de seguimiento. Imprímela o cópiala en un cuaderno. Cada semana, anota tus datos. Ver el progreso en papel es motivador."));

  out.push(buildTable(
    ["Semana", "Peso (kg)", "Cintura (cm)", "Cadera (cm)", "Brazo (cm)", "Muslo (cm)", "Cómo te sientes"],
    [
      ["Inicio (Día 0)", "_____", "_____", "_____", "_____", "_____", "____________"],
      ["Día 7", "_____", "_____", "_____", "_____", "_____", "____________"],
      ["Día 14", "_____", "_____", "_____", "_____", "_____", "____________"],
      ["Día 21", "_____", "_____", "_____", "_____", "_____", "____________"],
      ["Día 30", "_____", "_____", "_____", "_____", "_____", "____________"],
      ["Día 60", "_____", "_____", "_____", "_____", "_____", "____________"],
      ["Día 90", "_____", "_____", "_____", "_____", "_____", "____________"],
    ],
    [16, 13, 14, 14, 13, 13, 17]
  ));

  out.push(h2("B.5 Hábitos diarios — Tracker"));

  out.push(p("Marca cada día que cumplas cada hábito. Ver tu progreso te motiva a no romper la cadena. Copia esta tabla en un cuaderno."));

  out.push(buildTable(
    ["Hábito", "L", "M", "X", "J", "V", "S", "D"],
    [
      ["Tomé agua al despertar", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Desayuné proteína", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Llené ½ plato con verduras", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Comí sin celular", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Caminé 30 minutos", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Dormí 7+ horas", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Sin gaseosa", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Sin comida chatarra", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Tomé 2L de agua", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Sé amable conmigo mismo", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
    ],
    [40, 8.57, 8.57, 8.57, 8.57, 8.57, 8.57, 8.58]
  ));

  out.push(h2("B.6 Diario de emociones y comida (opcional pero poderoso)"));

  out.push(p("Si comes por emoción, un diario es tu mejor herramienta. Anota lo que comiste, a qué hora, y cómo te sentías antes y después. En 2 semanas vas a ver patrones: 'ah, siempre picaba galletas a las 4 pm cuando el jefe me retaba'. Identificado el patrón, puedes cambiarlo."));

  out.push(buildTable(
    ["Hora", "Qué comí", "Tenía hambre real?", "Emoción antes", "Emoción después"],
    [
      ["_____", "_____", "Sí / No", "_____", "_____"],
      ["_____", "_____", "Sí / No", "_____", "_____"],
      ["_____", "_____", "Sí / No", "_____", "_____"],
      ["_____", "_____", "Sí / No", "_____", "_____"],
      ["_____", "_____", "Sí / No", "_____", "_____"],
    ],
    [12, 28, 18, 21, 21]
  ));

  out.push(h2("B.7 Fotos de progreso"));

  out.push(p("La mejor forma de ver tu progreso es con fotos. La balanza miente. Las medidas mienten. Las fotos no. Tómate 3 fotos: de frente, de perfil (giro a la izquierda), y de espalda. Con poca ropa (ropa interior, traje de baño). Hazlo cada 2 semanas, misma hora, misma luz, misma pose. Cuando veas las fotos del día 0 vs el día 90, vas a entender por qué vale la pena."));

  out.push(imgPlaceholder("Espacio para pegar o imprimir tus fotos de progreso: Día 0, Día 30, Día 60, Día 90"));

  out.push(pageBreak());
  return out;
}

// ============================================================
// CONCLUSIÓN
// ============================================================
function buildConclusion() {
  const out = [];
  out.push(h1("Conclusión: Este es solo el comienzo"));
  out.push(divider());

  out.push(quote("No estás empezando una dieta. Estás cambiando tu vida. Y eso no termina en 21 días."));

  out.push(p("Si llegaste hasta aquí, te felicito de verdad. No por leer esta guía, sino por decidir que mereces algo mejor. Mereces sentirte bien. Mereces tener energía. Mereces no terminar cansada(o) después de subir una escalera. Mereces no tener miedo a la balanza. Mereces no sentir culpa cada vez que comes. Y eso, mi amiga(o), empieza aquí."));

  out.push(p("Quiero que recuerdes algo importante: estos 21 días no son 'la dieta'. Son el comienzo. El comienzo de una nueva forma de relacionarte con la comida, con tu cuerpo, contigo misma(o). Lo que sigue no es volver a cómo comías antes, porque si vuelves a como comías antes, volverás a pesar lo que pesabas antes. Lo que sigue es seguir. Seguir cocinando rico. Seguir moviéndote. Seguir durmiendo bien. Seguir siendo amable contigo cuando te equivoques."));

  out.push(p("Y te equivocarás. Vas a comerte la pizza un sábado. Vas a saltarte la caminata un miércoles lluvioso. Vas a tomar 3 cervezas un viernes con los amigos. Y no pasa nada. Lo único que te pido es que al día siguiente, te levantes, tomes tu vaso de agua, desayunes bien, y sigas. Sin culpa. Sin 'ya da lo mismo'. Sin abandonar todo. Una comida no te hace engordar, así como una ensalada no te hace adelgazar. Lo que cuenta es el promedio."));

  out.push(h2("Lo que ya lograste"));

  out.push(bullet("Aprendiste a elegir mejor en el mercado, gastando poco."));
  out.push(bullet("Aprendiste a preparar tus platos peruanos favoritos en versiones más livianas."));
  out.push(bullet("Aprendiste a planificar tus comidas, sin tener que pensar todos los días qué cocinar."));
  out.push(bullet("Aprendiste a moverte en casa, sin gastar en gimnasio."));
  out.push(bullet("Aprendiste a dormir mejor, a hidratarte, a manejar tus antojos."));
  out.push(bullet("Aprendiste a sobrevivir fiestas y reuniones sin sentirte culpable."));
  out.push(bullet("Aprendiste a medir tu progreso, no solo con la balanza, sino con medidas, fotos y cómo te sientes."));

  out.push(p("Eso no es poco. Eso es muchísimo. Eso es más de lo que la mayoría de la gente logra en años de intentarlo. Siéntete orgullosa(o)."));

  out.push(h2("Lo que viene"));

  out.push(p("Ahora vienen los siguientes 21 días. Y los siguientes. Y los siguientes. No necesitas un plan nuevo cada mes. Lo que aprendiste aquí te sirve para toda la vida. Lo que necesitas es seguir aplicándolo, ajustando, mejorando. Aquí te dejo algunas ideas para cuando termines los 21 días:"));

  out.push(bulletLead("Repite el plan. ", "Si te funcionó, repítelo. No necesitas inventar nada nuevo. La constancia es la clave."));
  out.push(bulletLead("Personalízalo. ", "Ya sabes qué comidas te gustan más y cuáles no. Adapta el plan a tu gusto."));
  out.push(bulletLead("Sube el nivel de ejercicio. ", "Si ya caminas 30 minutos, sube a 45. Si haces la rutina principiante, sube a intermedio. Desafía a tu cuerpo."));
  out.push(bulletLead("Comprométete con un amigo. ", "Hacerlo en pareja o con un grupo es más fácil que solo. Busca a alguien que quiera hacer el viaje contigo."));
  out.push(bulletLead("Revisa tus metas. ", "¿Llegaste a tu peso objetivo? ¿Necesitas ajustar? ¿Quieres ganar músculo? Revisa cada mes."));
  out.push(bulletLead("Celebra los pequeños logros. ", "Cada kilo, cada centímetro, cada día que cumples. Esos pequeños logros suman."));

  out.push(h2("Una última palabra"));

  out.push(p("Tu cuerpo es el único lugar donde tienes que vivir toda la vida. Trátalo bien. No lo castigues con dietas extremas. No lo odies porque no se ve como el de Instagram. Ámalo, cuídalo, aliméntalo bien, muévelo, déjalo descansar. Tu cuerpo hace cosas increíbles por ti todos los días. Lo mínimo que puedes hacer es cuidarlo de vuelta."));

  out.push(p("Y recuerda: bajar de peso no es lo más importante. Lo más importante es estar saludable. Sentirte bien. Tener energía. Poder jugar con tus hijos. No enfermarte. Vivir mucho tiempo y vivir bien. El peso es solo un número. La salud es lo que cuenta."));

  out.push(p("Si tienes dudas, si te cuesta, si sientes que no puedes solo, busca ayuda. Un nutricionista, un médico, un grupo de apoyo, tu familia. No tienes que hacerlo sola(o). Y no tienes que hacerlo perfecto. Solo tienes que hacerlo."));

  out.push(quote("El mejor momento para empezar fue ayer. El segundo mejor momento es ahora. — Proverbio"));

  out.push(p("Gracias por confiar en esta guía. Gracias por apostar por ti. Nos vemos del otro lado, en tu mejor versión."));

  out.push(spacer(240));

  out.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { before: 400, after: 200 },
    children: [
      new H.TextRun({ text: "🇵🇪  ¡Tú puedes!  🇵🇪", size: 32, bold: true, color: H.c(P.primary), font: { ascii: "Calibri" } }),
    ],
  }));

  out.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [
      new H.TextRun({ text: "Con cariño,", size: 24, italics: true, color: H.c(P.secondary), font: { ascii: "Calibri" } }),
    ],
  }));

  out.push(new H.Paragraph({
    alignment: H.AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [
      new H.TextRun({ text: "El equipo de Nutrición Peruana Saludable", size: 24, bold: true, color: H.c(P.primary), font: { ascii: "Calibri" } }),
    ],
  }));

  return out;
}

// ============================================================
// ENSAMBLAJE FINAL DEL DOCUMENTO
// ============================================================
function buildDocument() {
  const coverChildren = part1.buildCover();
  const bodyChildren = [
    ...part1.buildDisclaimer(),
    ...part1.buildIntro(),
    ...part1.buildCap1(),
    ...part2.buildCap2(),
    ...part2.buildCap3(),
    ...part3.buildCap4(),
    ...part3.buildCap5(),
    ...part3.buildCap6(),
    ...buildBonus(),
    ...buildConclusion(),
  ];

  const doc = new H.Document({
    creator: "Nutrición Peruana Saludable",
    title: "Saber Peruano, Cuerpo Saludable",
    description: "Guía de 21 días para bajar de peso con comida peruana",
    styles: {
      default: {
        document: {
          run: {
            font: { ascii: "Calibri", eastAsia: "Microsoft YaHei" },
            size: 19,
            color: H.c(P.body),
          },
          paragraph: { spacing: { line: 260 } },
        },
        heading1: {
          run: { font: { ascii: "Calibri" }, size: 30, bold: true, color: H.c(P.primary) },
          paragraph: { spacing: { before: 320, after: 140, line: 300 } },
        },
        heading2: {
          run: { font: { ascii: "Calibri" }, size: 24, bold: true, color: H.c(P.accent) },
          paragraph: { spacing: { before: 200, after: 100, line: 280 } },
        },
        heading3: {
          run: { font: { ascii: "Calibri" }, size: 21, bold: true, color: H.c(P.body) },
          paragraph: { spacing: { before: 160, after: 80, line: 260 } },
        },
      },
    },
    sections: [
      // Sección 1: Portada (sin numeración de página)
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838, orientation: H.PageOrientation.PORTRAIT },
            margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
          },
        },
        children: coverChildren,
      },
      // Sección 2: Cuerpo (con numeración de páginas)
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838, orientation: H.PageOrientation.PORTRAIT },
            margin: { top: 1440, bottom: 1440, left: 1701, right: 1417 },
            pageNumbers: { start: 1, formatType: H.NumberFormat.DECIMAL },
          },
        },
        footers: {
          default: new H.Footer({
            children: [
              new H.Paragraph({
                alignment: H.AlignmentType.CENTER,
                spacing: { before: 0 },
                children: [
                  new H.TextRun({
                    text: "Saber Peruano, Cuerpo Saludable  ·  ",
                    size: 18,
                    color: H.c(P.secondary),
                    italics: true,
                    font: { ascii: "Calibri" },
                  }),
                  new H.TextRun({
                    children: [H.PageNumber.CURRENT],
                    size: 18,
                    color: H.c(P.secondary),
                    font: { ascii: "Calibri" },
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
        },
        children: bodyChildren,
      },
    ],
  });

  return doc;
}

// Generar
const doc = buildDocument();
H.Packer.toBuffer(doc).then((buf) => {
  const outPath = "/home/z/my-project/download/Guia_Bajar_Peso_Comida_Peruana.docx";
  require("fs").writeFileSync(outPath, buf);
  console.log("✅ Documento generado:", outPath);
  console.log("   Tamaño:", (buf.length / 1024).toFixed(2), "KB");
}).catch(err => {
  console.error("❌ Error generando documento:", err);
  process.exit(1);
});
