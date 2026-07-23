// Capítulos 4, 5, 6: Recetas, Estilo de vida, Antojos
const H = require("./generate_guia");
const { h1, h2, h3, p, pRich, bullet, bulletLead, tipBox, imgPlaceholder, buildTable, spacer, pageBreak, divider, quote, P, AlignmentType } = H;

// ============================================================
// CAPÍTULO 4: RECETAS PERUANAS HACKEDADAS
// ============================================================
function buildCap4() {
  const out = [];
  out.push(h1("Capítulo 4: Recetas peruanas 'hackeadas'"));
  out.push(h2("Tus platos favoritos en versión liviana y nutritiva"));
  out.push(divider());

  out.push(p("Aquí viene una de mis partes favoritas: enseñarte que comer peruano y comer sano no son cosas opuestas. En este capítulo vas a encontrar las recetas más pedidas de la comida peruana, transformadas para que tengan menos calorías, más nutrientes, y te hagan sentir bien después de comerlas. Mismo sabor, menos culpa. Y lo mejor: hechas con ingredientes que encuentras en cualquier mercado del Perú, sin gastar fortunas."));

  out.push(tipBox(
    "Reglas generales para 'hackear' cualquier receta",
    "1) Reemplaza frituras por plancha, horno o air-fryer. 2) Usa la mitad del aceite o menos. 3) Agrega más verduras (volumen sin calorías). 4) Reduce el arroz y la papa a porciones reales. 5) Cambia crema de leche por yogur o queso fresco licuado. 6) Usa edulcorantes naturales (stevia) o reduce el azúcar a la mitad. 7) Mantén el sazón: ajo, cebolla, ají, cilantro, hierbas. El sabor no se negocia."
  ));

  // ---- LOMO SALTADO LIGERO ----
  out.push(h2("1. Lomo saltado ligero"));
  out.push(imgPlaceholder("Lomo saltado en plato hondo, con bastante tomate y cebolla, acompañado de arroz integral y sin papas fritas"));

  out.push(h3("Ingredientes (para 2 personas)"));
  out.push(bullet("400 g de lomo fino (o bistec) cortado en tiras finas"));
  out.push(bullet("1 cebolla roja grande cortada en pluma (a la pluma)"));
  out.push(bullet("2 tomates grandes cortados en gajos (sin pepas)"));
  out.push(bullet("1 ají amarillo cortado en tiras finas (sin pepas ni venas)"));
  out.push(bullet("2 dientes de ajo molidos"));
  out.push(bullet("1 cucharada de sillao (salsa de soya) — preferible baja en sodio"));
  out.push(bullet("1 cucharada de vinagre rojo"));
  out.push(bullet("1 cucharadita de aceite (mejor aceite de oliva)"));
  out.push(bullet("Sal, pimienta, comino al gusto"));
  out.push(bullet("Cilantro picado para decorar"));
  out.push(bullet("NO lleva papas fritas (las reemplazamos por 1 papa cocida al lado, opcional)"));
  out.push(bullet("½ taza de arroz cocido por persona (en lugar de 1 taza)"));

  out.push(h3("Preparación (20 minutos)"));
  out.push(p("1. Sazona la carne con sal, pimienta, comino y ajo molido. Déjala reposar 10 minutos mientras cortas las verduras. Mientras tanto, pon a calentar el arroz si no lo tienes listo."));
  out.push(p("2. Calienta una sartén grande (idealmente un wok) a fuego alto. Agrega 1 cucharadita de aceite y distribúyela. La sartén tiene que estar MUY caliente para que la carne se selle y no suelte agua."));
  out.push(p("3. Echa la carne en una sola capa (no la amontones). Deja que se selle 1-2 minutos sin mover. Luego dale vuelta y saltea 1 minuto más. Saca la carne y resérvala en un plato."));
  out.push(p("4. En la misma sartén (sin agregar más aceite), echa la cebolla. Saltea 1 minuto (que quede crocante, no blanda). Agrega el tomate y el ají amarillo, saltea 1 minuto más."));
  out.push(p("5. Devuelve la carne a la sartén. Agrega el sillao y el vinagre. Mezcla todo por 30 segundos. Apaga el fuego inmediatamente para que las verduras no se cocinen de más (esa es la clave del lomo saltado)."));
  out.push(p("6. Sirve inmediatamente: en un plato, el arroz a un lado y el lomo saltado al otro. Decora con cilantro picado."));

  out.push(tipBox(
    "El truco del chef",
    "El secreto de un buen lomo saltado es el fuego alto y el tiempo corto. Si cocinas la carne demasiado, queda dura. Si cocinas las verduras demasiado, se deshacen. Todo el salteado (desde que echas la carne) no debe tomar más de 5 minutos. Ten todos los ingredientes listos antes de prender el fuego."
  ));

  out.push(p("Calorías aproximadas por porción: 380 kcal (vs. 700+ kcal del lomo saltado tradicional con papas fritas y 1 taza de arroz)."));

  // ---- AJÍ DE GALLINA LIGERO ----
  out.push(h2("2. Ají de gallina ligero"));
  out.push(imgPlaceholder("Ají de gallina servido en plato hondo con papa cocida, huevo duro, aceitunas y queso fresco rallado"));

  out.push(h3("Ingredientes (para 4 personas)"));
  out.push(bullet("2 pechugas de pollo (aprox. 500 g)"));
  out.push(bullet("3 ajíes amarillos (limpios, sin pepas ni venas)"));
  out.push(bullet("1 cebolla grande picada en cuadritos"));
  out.push(bullet("2 dientes de ajo molidos"));
  out.push(bullet("100 g de queso fresco (en lugar del queso paria o crema de leche)"));
  out.push(bullet("2 rebanadas de pan integral remojadas en leche descremada (en lugar de pan francés)"));
  out.push(bullet("1 taza de leche descremada"));
  out.push(bullet("1 cucharadita de aceite de oliva"));
  out.push(bullet("Palos de apio, zanahoria, cebolla para el caldo del pollo"));
  out.push(bullet("Nueces pecanas picadas (4 unidades, opcional, en lugar de 10)"));
  out.push(bullet("Sal, pimienta, comino"));
  out.push(bullet("4 papas cocidas (1 por persona)"));
  out.push(bullet("2 huevos cocidos (½ por persona)"));
  out.push(bullet("Aceitunas negras (2 por persona)"));
  out.push(bullet("Perejil o cilantro picado"));

  out.push(h3("Preparación (45 minutos)"));
  out.push(p("1. Cuece el pollo en agua con apio, zanahoria, cebolla y sal. Cuando esté listo (20-25 minutos), sácalo, déjalo enfriar y deshiláchalo. Guarda 1 taza del caldo para la preparación."));
  out.push(p("2. Mientras se cuece el pollo, sancocha los ajíes amarillos en agua hirviendo por 5 minutos (esto les quita el picante excesivo). Licúalos con un poco del caldo hasta obtener una crema. Reserva."));
  out.push(p("3. En una olla, calienta 1 cucharadita de aceite de oliva. Agrega la cebolla picada y el ajo molido. Sofríe a fuego medio hasta que la cebolla esté transparente (5-7 minutos). Agrega un chorrito de caldo si se seca, no más aceite."));
  out.push(p("4. Agrega el ají amarillo licuado a la olla. Cocina por 5 minutos revolviendo de vez en cuando."));
  out.push(p("5. Licúa el queso fresco con la leche, el pan remojado y el caldo. Vierte esta mezcla en la olla con el ají. Mezcla bien. Cocina a fuego bajo por 10 minutos hasta que espese. Si queda muy espeso, agrega más caldo."));
  out.push(p("6. Agrega el pollo deshilachado, las nueces picadas y mezcla. Cocina 3 minutos más. Prueba y ajusta la sal."));
  out.push(p("7. Sirve: 1 papa cocida en el centro, encima el ají de gallina, medio huevo, aceitunas y perejil."));

  out.push(p("Calorías por porción: 320 kcal (vs. 580 kcal del ají tradicional con crema, mucho queso y pan)."));

  // ---- CEVICICHE LIGERO ----
  out.push(h2("3. Ceviche ligero (con menos camote y choclo)"));
  out.push(imgPlaceholder("Ceviche de pescado fresco en plato, con cebolla, ají limo, camote delgado y choclo"));

  out.push(h3("Ingredientes (para 2 personas)"));
  out.push(bullet("400 g de pescado fresco (corvina, lenguado, bonito, pejerrey)"));
  out.push(bullet("1 cebolla roja mediana cortada a la pluma"));
  out.push(bullet("1 ají limo picado finito (sin pepas)"));
  out.push(bullet("1 ají amarillo picado finito (sin pepas)"));
  out.push(bullet("Jugo de 8-10 limones (sultana o sutil)"));
  out.push(bullet("Cilantro picado finito"));
  out.push(bullet("Sal al gusto"));
  out.push(bullet("1 camote cocido cortado en rodajas finas (1 por persona)"));
  out.push(bullet("2 cucharadas de choclo desgranado cocido por persona"));
  out.push(bullet("Lechuga para decorar"));

  out.push(h3("Preparación (15 minutos)"));
  out.push(p("1. Lava bien el pescado con agua fría y sal. Sécalo con papel absorbente. Córtalo en cubos de 1.5 cm. El corte es importante: si es muy chico se deshace, si es muy grande no se cocina parejo."));
  out.push(p("2. En un bowl de vidrio o cerámica (nunca metal), pon el pescado con sal al gusto. Mezcla bien. Deja reposar 2 minutos."));
  out.push(p("3. Agrega el ají limo y el ají amarillo. Mezcla. Agrega la cebolla a la pluma."));
  out.push(p("4. Exprime los limones encima. IMPORTANTE: el limón no debe 'cocer' el pescado por más de 5-8 minutos. Si lo dejas más tiempo, el pescado se pone gomoso. Mezcla bien."));
  out.push(p("5. Prueba y ajusta la sal. Si quieres más picante, agrega más ají limo. Agrega el cilantro al final."));
  out.push(p("6. Sirve inmediatamente: en un plato hondo con lechuga en la base, el ceviche al centro, las rodajas de camote a un lado y el choclo al otro."));

  out.push(tipBox(
    "Trucos del ceviche perfecto",
    "1) El pescado debe estar muy fresco — ojos brillantes, agallas rojas, carne firme. 2) El limón se exprime al final, no antes. 3) La leche tigre (el jugo que queda) se toma al final, es deliciosa. 4) El camote y el choclo se sirven en porciones pequeñas: 1 rodaja delgada y 2 cucharadas son suficientes. El ceviche en sí ya es perfectamente saludable; lo que engorda son los acompañamientos."
  ));

  out.push(p("Calorías por porción: 280 kcal (el ceviche es uno de los platos más sanos de la gastronomía peruana, solo hay que cuidar el camote y el choclo)."));

  // ---- CAUSA LIGERA ----
  out.push(h2("4. Causa limeña ligera"));
  out.push(imgPlaceholder("Causa limeña en molde, con capa de papa amarilla, relleno de pollo o atún, palta y huevo"));

  out.push(h3("Ingredientes (para 4 personas)"));
  out.push(bullet("1 kg de papa amarilla (en lugar de 1.5 kg)"));
  out.push(bullet("2 ajíes amarillos licuados"));
  out.push(bullet("Jugo de 2 limones"));
  out.push(bullet("1 cucharada de aceite de oliva (en lugar de 4 cdas de aceite vegetal)"));
  out.push(bullet("Sal, pimienta"));
  out.push(bullet("Para el relleno: 1 pechuga de pollo cocida y deshilachada (o 2 latas de atún al agua)"));
  out.push(bullet("1 palta mediana cortada en rodajas"));
  out.push(bullet("2 huevos cocidos"));
  out.push(bullet("Mayonesa ligera: 2 cdas de yogur natural + 1 cdta de mostaza + jugo de limón (en lugar de mayonesa comercial)"));
  out.push(bullet("Aceitunas, tomate cherry para decorar"));

  out.push(h3("Preparación (40 minutos)"));
  out.push(p("1. Cuece las papas en agua con sal hasta que estén suaves (20-25 minutos). Pélalas calientes y pásalas por el prensador (pisa papas). Deja enfriar un poco."));
  out.push(p("2. Agrega a la papa el ají amarillo licuado, el jugo de limón, el aceite de oliva, sal y pimienta. Mezcla bien con las manos hasta obtener una masa suave. Si está muy seca, agrega un chorrito de leche."));
  out.push(p("3. Mezcla el pollo deshilachado (o atún) con la mayonesa ligera (yogur + mostaza + limón). Agrega un poco de cebolla picada finita si te gusta."));
  out.push(p("4. Arma la causa en molde o aros: una capa de papa (1.5 cm), una capa de palta, una capa de relleno, otra capa de papa. Decora con huevo cocido en rodajas, aceitunas, tomate cherry."));
  out.push(p("5. Sirve frío."));

  out.push(p("Calorías por porción: 290 kcal (vs. 480 kcal de la causa tradicional con mayonesa y mucho aceite)."));

  // ---- ARROZ CON POLLO LIGERO ----
  out.push(h2("5. Arroz con pollo ligero"));
  out.push(imgPlaceholder("Arroz con pollo verde servido en plato, con porción moderada de arroz y bastante pollo y verduras"));

  out.push(h3("Ingredientes (para 4 personas)"));
  out.push(bullet("4 presas de pollo (preferible pechuga) deshuesadas y sin piel"));
  out.push(bullet("1 taza de arroz (en lugar de 2 tazas)"));
  out.push(bullet("1 taza de cilantro fresco licuado con 1/2 taza de agua (esto le da el color verde natural, sin colorante)"));
  out.push(bullet("1 cebolla pequeña picada"));
  out.push(bullet("2 dientes de ajo molidos"));
  out.push(bullet("1 zanahoria rallada"));
  out.push(bullet("1/2 taza de arvejas"));
  out.push(bullet("1/2 taza de choclo desgranado"));
  out.push(bullet("1 pimentón rojo en tiras"));
  out.push(bullet("1 cucharadita de aceite"));
  out.push(bullet("Sal, pimienta, comino"));
  out.push(bullet("1 taza y media de caldo de pollo o agua"));

  out.push(h3("Preparación (35 minutos)"));
  out.push(p("1. Sazona el pollo con sal, pimienta, comino y ajo. En una olla, sella el pollo con 1 cucharadita de aceite a fuego alto. Saca y reserva."));
  out.push(p("2. En la misma olla, sofríe la cebolla picada con el ajo. Agrega la zanahoria rallada, las arvejas y el choclo. Cocina 3 minutos."));
  out.push(p("3. Agrega el arroz (lavado y escurrido). Mezcla todo por 1 minuto para que el arroz se impregne del sofrito."));
  out.push(p("4. Agrega el cilantro licuado y el caldo. Mezcla. Devuelve el pollo a la olla. Tapa y cocina a fuego bajo por 20 minutos sin destapar."));
  out.push(p("5. Apaga el fuego, deja reposar 5 minutos con la tapa puesta. Sirve con tiras de pimentón encima."));

  out.push(tipBox(
    "Porciones inteligentes",
    "El arroz con pollo es uno de los platos más engordadores de la comida peruana porque solemos servir 1-2 tazas de arroz. La clave es la proporción: 1/2 taza de arroz cocido + 100 g de pollo + muchas verduras. Aquí la receta ya está ajustada para que con 1 taza de arroz crudo te rinda para 4 personas (1/2 taza cocida por persona)."
  ));

  out.push(p("Calorías por porción: 350 kcal (vs. 600 kcal del arroz con pollo tradicional con 1 taza de arroz por persona)."));

  // ---- SECO DE RES LIGERO ----
  out.push(h2("6. Seco de res ligero"));
  out.push(h3("Ingredientes (para 4 personas)"));
  out.push(bullet("500 g de carne de res (pecho o bistec) cortada en cubos"));
  out.push(bullet("1 cebolla grande picada"));
  out.push(bullet("3 dientes de ajo molidos"));
  out.push(bullet("2 ajíes amarillos licuados"));
  out.push(bullet("1 taza de cilantro licuado con agua"));
  out.push(bullet("1 taza de chicha de jora (o cerveja negra)"));
  out.push(bullet("1 zanahoria en rodajas"));
  out.push(bullet("1 taza de arvejas"));
  out.push(bullet("1 cucharadita de aceite"));
  out.push(bullet("Sal, pimienta, comino"));
  out.push(bullet("Caldo de carne o agua necesaria"));

  out.push(h3("Preparación (1 hora y media)"));
  out.push(p("1. Sazona la carne con sal, pimienta, comino y ajo. Déjala reposar 15 minutos."));
  out.push(p("2. En una olla, calienta 1 cucharadita de aceite. Sella la carne por todos sus lados a fuego alto. Saca y reserva."));
  out.push(p("3. En la misma olla, sofríe la cebolla picada con el ajo por 5 minutos. Agrega el ají amarillo licuado y cocina 3 minutos más."));
  out.push(p("4. Devuelve la carne a la olla. Agrega la chicha de jora, el cilantro licuado, sal y pimienta. Cocina tapado a fuego bajo por 1 hora o hasta que la carne esté tierna. Si se seca, agrega caldo o agua."));
  out.push(p("5. Agrega la zanahoria y las arvejas 20 minutos antes de servir."));
  out.push(p("6. Sirve con 1/3 taza de arroz y ensalada verde."));

  out.push(p("Calorías por porción: 380 kcal (vs. 550 kcal del seco tradicional con más aceite y porción de arroz grande)."));

  // ---- PANQUEQUES DE AVENA ----
  out.push(h2("7. Panqueques de avena (desayuno fit)"));
  out.push(h3("Ingredientes (para 1 persona)"));
  out.push(bullet("1/2 taza de avena en hojuelas"));
  out.push(bullet("1 huevo"));
  out.push(bullet("1/2 plátano maduro (chancado)"));
  out.push(bullet("1/2 taza de leche descremada"));
  out.push(bullet("1 cucharadita de canela"));
  out.push(bullet("1 cucharadita de vainilla"));
  out.push(bullet("1 cucharadita de aceite de coco o de oliva (para la sartén)"));

  out.push(h3("Preparación (10 minutos)"));
  out.push(p("1. Licúa todos los ingredientes (menos el aceite) hasta obtener una mezcla homogénea."));
  out.push(p("2. Calienta una sartén antiadherente con un chorrito de aceite. Vierte la mezcla en porciones pequeñas (3-4 panqueques)."));
  out.push(p("3. Cocina 2 minutos por lado a fuego medio. Sirve con fruta fresca encima."));

  out.push(p("Calorías: 320 kcal (desayuno completo, sin azúcar añadida)."));

  // ---- SOPA DE VERDURAS CON HUEVO ----
  out.push(h2("8. Sopa de verduras con huevo (para cena)"));
  out.push(h3("Ingredientes (para 2 personas)"));
  out.push(bullet("1/2 zapallo macre en cubos"));
  out.push(bullet("1 zanahoria en rodajas"));
  out.push(bullet("1 rama de apio"));
  out.push(bullet("1/2 taza de vainita"));
  out.push(bullet("1/2 cebolla"));
  out.push(bullet("1 diente de ajo"));
  out.push(bullet("2 huevos"));
  out.push(bullet("Hierbas: cilantro, huacatay"));
  out.push(bullet("Sal, pimienta"));

  out.push(h3("Preparación (25 minutos)"));
  out.push(p("1. En una olla, pon a hervir 1.5 litros de agua con la cebolla, el ajo, el apio, sal y hierbas."));
  out.push(p("2. Agrega el zapallo, la zanahoria y la vainita. Cuece 15 minutos."));
  out.push(p("3. Cuando las verduras estén suaves, casca los huevos directamente en la sartén y revuelve para que se cocinen en tiras."));
  out.push(p("4. Sirve caliente, con cilantro picado encima."));

  out.push(p("Calorías por porción: 180 kcal (cena ligera y reconfortante, sin carbohidratos densos)."));

  // ---- OMELETTE DE VERDURAS ----
  out.push(h2("9. Omelette de verduras"));
  out.push(h3("Ingredientes (1 persona)"));
  out.push(bullet("2 huevos"));
  out.push(bullet("1/2 taza de espinaca picada"));
  out.push(bullet("1/4 taza de champiñones en rodajas"));
  out.push(bullet("1/4 de cebolla picada"));
  out.push(bullet("1 cucharadita de aceite de oliva"));
  out.push(bullet("Sal, pimienta, orégano"));
  out.push(bullet("1 rebanada de pan integral tostado (acompañamiento)"));

  out.push(h3("Preparación (8 minutos)"));
  out.push(p("1. En un bowl, bate los huevos con sal, pimienta y orégano."));
  out.push(p("2. En una sartén antiadherente con 1/2 cdta de aceite, sofríe la cebolla, los champiñones y la espinaca por 2 minutos."));
  out.push(p("3. Vierte los huevos encima. Cocina a fuego bajo tapado 3-4 minutos hasta que cuaje."));
  out.push(p("4. Sirve con pan integral tostado."));

  out.push(p("Calorías: 280 kcal (desayuno o cena completa)."));

  out.push(h2("Tabla resumen: calorías de las recetas 'hackeadas'"));
  out.push(buildTable(
    ["Plato", "Versión tradicional", "Versión ligera", "Ahorro"],
    [
      ["Lomo saltado", "700 kcal", "380 kcal", "320 kcal"],
      ["Ají de gallina", "580 kcal", "320 kcal", "260 kcal"],
      ["Ceviche", "320 kcal", "280 kcal", "40 kcal"],
      ["Causa limeña", "480 kcal", "290 kcal", "190 kcal"],
      ["Arroz con pollo", "600 kcal", "350 kcal", "250 kcal"],
      ["Seco de res", "550 kcal", "380 kcal", "170 kcal"],
    ],
    [30, 23, 23, 24]
  ));

  out.push(tipBox(
    "Calcula tu propio ahorro",
    "Si reemplazas 1 comida tradicional por una versión ligera al día, ahorras en promedio 200-250 calorías. Eso son 1400-1750 calorías a la semana, lo que equivale a perder entre 0.2 y 0.25 kg por semana SOLO por cambiar la forma de cocinar, sin pasar hambre. Imagínate si lo combinas con caminar 30 minutos y reducir snacks chatarra."
  ));

  out.push(pageBreak());
  return out;
}

// ============================================================
// CAPÍTULO 5: ESTILO DE VIDA
// ============================================================
function buildCap5() {
  const out = [];
  out.push(h1("Capítulo 5: Estilo de vida"));
  out.push(h2("Ejercicio en casa, sueño e hidratación"));
  out.push(divider());

  out.push(p("La comida es el 70% del éxito. El otro 30% es lo que haces con tu cuerpo durante el día: cómo te mueves, cómo descansas y cómo te hidratas. En este capítulo te voy a enseñar a optimizar estos tres pilares sin gastar un solo sol en gimnasio, sin pastillas para dormir y sin isotónicos caros. Vamos a usar lo que ya tienes: tu cuerpo, tu casa, agua del tubo y mucha disciplina."));

  out.push(h2("5.1 Ejercicio en casa: 30 minutos, sin gimnasio, sin equipo"));

  out.push(p("Te voy a ser honesta: no necesitas gimnasio para bajar de peso. El gimnasio ayuda, sí, pero la mayoría de gente que se inscribe no va. Lo que sí necesitas es moverte, todos los días, aunque sea poco. Aquí te presento una rutina de 30 minutos que puedes hacer en tu sala, tu cuarto o el patio, sin ningún equipo, en pijama si quieres. Tres niveles: principiante, intermedio y avanzado. Empieza en principiante y sube cuando sientas que ya no te cuesta."));

  out.push(h3("Calentamiento (5 minutos) — Siempre, sin excepción"));
  out.push(bullet("Marcha en el lugar: 1 minuto (levanta las rodillas)"));
  out.push(bullet("Círculos con los brazos: 30 segundos hacia adelante, 30 hacia atrás"));
  out.push(bullet("Círculos con las caderas: 30 segundos cada dirección"));
  out.push(bullet("Tocar los pies sin doblar las rodillas: 1 minuto"));
  out.push(bullet("Sentadillas sin peso (solo bajando un poco): 1 minuto"));
  out.push(bullet("Caminata ligera en el lugar: 1 minuto"));

  out.push(h3("Rutina nivel principiante (3 veces por semana)"));
  out.push(p("Duración: 20 minutos (más 5 de calentamiento + 5 de estiramiento). Si nunca has hecho ejercicio, empieza aquí. No te apresures, lo importante es crear el hábito."));

  out.push(buildTable(
    ["Ejercicio", "Duración", "Descanso"],
    [
      ["Sentadillas (profundidad media)", "30 segundos", "15 segundos"],
      ["Flexiones de pecho contra la pared", "30 segundos", "15 segundos"],
      ["Zancadas (lunges) estáticas", "30 segundos", "15 segundos"],
      ["Puente de glúteos (acostado, subir cadera)", "30 segundos", "15 segundos"],
      ["Plancha (rodillas apoyadas)", "30 segundos", "15 segundos"],
      ["Saltos de tijera (sin saltar, solo abrir y cerrar piernas)", "30 segundos", "15 segundos"],
    ],
    [50, 25, 25]
  ));
  out.push(p("Repite esta serie 3 veces. Total: 18 minutos. Termina con 2 minutos de caminata suave para recuperar."));

  out.push(h3("Rutina nivel intermedio (3-4 veces por semana)"));
  out.push(p("Duración: 25 minutos. Cuando la rutina principiante te resulte fácil (en 2-3 semanas), sube a este nivel."));

  out.push(buildTable(
    ["Ejercicio", "Duración", "Descanso"],
    [
      ["Sentadillas completas (bajar hasta 90°)", "40 segundos", "20 segundos"],
      ["Flexiones de pecho en el piso (rodillas apoyadas)", "40 segundos", "20 segundos"],
      ["Zancadas alternadas (caminando)", "40 segundos", "20 segundos"],
      ["Puente de glúteos a 1 pierna", "40 segundos", "20 segundos"],
      ["Plancha frontal (piernas estiradas)", "40 segundos", "20 segundos"],
      ["Mountain climbers (rodillas al pecho)", "40 segundos", "20 segundos"],
      ["Saltos de tijera", "40 segundos", "20 segundos"],
    ],
    [50, 25, 25]
  ));
  out.push(p("Repite esta serie 3 veces. Total: 21 minutos. Termina con 4 minutos de estiramiento."));

  out.push(h3("Estiramiento (5 minutos) — Siempre, sin excepción"));
  out.push(p("Estirar es lo que evita lesiones, mejora tu postura y te ayuda a recuperarte. Nunca te saltes esta parte."));
  out.push(bullet("Estiramiento de cuádriceps: 30 segundos por pierna (de pie, lleva el talón al glúteo)"));
  out.push(bullet("Estiramiento de isquiotibiales: 30 segundos por pierna (sentado, estira una pierna, toca la punta del pie)"));
  out.push(bullet("Estiramiento de espalda: 1 minuto (acostado, abraza las rodillas)"));
  out.push(bullet("Estiramiento de pecho y hombros: 30 segundos (en la puerta, apoya los antebrazos)"));
  out.push(bullet("Estiramiento de cuello: 30 segundos por lado (lleva la oreja al hombro)"));

  out.push(tipBox(
    "Caminata diaria — el ejercicio más subestimado",
    "Además de la rutina, camina 30 minutos al día. No necesitas ropa deportiva: puedes caminar al trabajo, al mercado, después del almuerzo. Póngase audífonos con música o podcast, y conviértelo en tu momento del día. La caminata baja el azúcar, quema calorías, aclara la mente y reduce el estrés. Si solo haces UNA cosa de todo este capítulo, que sea caminar."
  ));

  out.push(h2("5.2 La importancia del sueño (mucho más de lo que crees)"));

  out.push(p("Si hay un pilar del estilo de vida que la gente subestima, es el sueño. Pensamos que dormir es 'perder el tiempo' y nos quedamos hasta la 1 am viendo series. Error garrafal. Si no duermes bien, no vas a bajar de peso. Punto. Y te explico por qué."));

  out.push(h3("Qué pasa en tu cuerpo cuando duermes poco"));

  out.push(p("Cuando duermes menos de 6 horas, tu cuerpo entra en modo de estrés. Aumenta la grelina (hormona que da hambre) y disminuye la leptina (hormona que da saciedad). El resultado: al día siguiente tienes más hambre, sobre todo por alimentos dulces y grasos. Tu cerebro busca energía rápida para compensar el cansancio."));
  out.push(p("Además, la falta de sueño aumenta el cortisol (la hormona del estrés), y el cortisol alto promueve el almacenamiento de grasa, especialmente en la zona abdominal. Es decir, aunque comas bien, si duermes mal, tu cuerpo prefiere guardar la grasa en la panza. No es broma."));
  out.push(p("Y por último, cuando estás cansada(o), tu fuerza de voluntad baja. Es más difícil resistir antojos, es más difícil hacer ejercicio, es más difícil cocinar. La falta de sueño es una cadena que te lleva a comer mal y moverte poco."));

  out.push(h3("Cuánto debes dormir"));
  out.push(p("Adultos: entre 7 y 9 horas por noche. Si duermes 6 o menos, estás en déficit. Si duermes más de 10, también puede ser señal de algo (revisa tu salud). Encuentra tu número ideal: aquel donde despiertas sin alarma, sintiéndote descansada(o)."));

  out.push(h3("Higiene del sueño: 10 reglas de oro"));

  out.push(bulletLead("Acuéstate y levántate a la misma hora. ", "Incluso los fines de semana. Tu cuerpo tiene un reloj interno, no lo desincronices."));
  out.push(bulletLead("Apaga pantallas 30-60 minutos antes de dormir. ", "La luz azul del celular, tablet y TV inhibe la melatonina y te cuesta dormir. Lee un libro, escucha un podcast, conversa con tu pareja."));
  out.push(bulletLead("No comas pesado en la noche. ", "La última comida debe ser al menos 2-3 horas antes de dormir. Si llegas tarde del trabajo, come algo ligero: sopa, ensalada, huevos."));
  out.push(bulletLead("No tomes cafeína después de las 2 pm. ", "La cafeína tiene una vida media de 5-6 horas. Un café a las 5 pm te va a dificultar dormir a las 10."));
  out.push(bulletLead("Tu cuarto es para dormir. ", "No trabajes ahí, no veas tele ahí, no comas ahí. El cerebro debe asociar 'cama' con 'dormir'."));
  out.push(bulletLead("Mantén el cuarto oscuro y fresco. ", "Luz cero, temperatura entre 18-21 grados. Usa cortinas blackout si hay luz de la calle."));
  out.push(bulletLead("Haz ejercicio durante el día. ", "Pero no en las 2 horas previas a dormir (te activa demasiado)."));
  out.push(bulletLead("Evita alcohol en la noche. ", "Aunque parezca que ayuda a dormir, en realidad fragmenta el sueño y te despiertas cansada(o)."));
  out.push(bulletLead("Si no puedes dormir en 20 minutos, levántate. ", "Haz algo relajante (leer, estirar) hasta que tengas sueño. Quedarte en la cama dando vueltas genera ansiedad."));
  out.push(bulletLead("Toma un baño tibio antes de dormir. ", "Baja la temperatura corporal, lo que le indica al cuerpo que es hora de dormir."));

  out.push(tipBox(
    "Si roncas o te despiertas cansada(o)",
    "Podrías tener apnea del sueño, un trastorno muy común en personas con sobrepeso. Consiste en pausas en la respiración durante el sueño que fragmentan el descanso. Si roncas fuerte, te despiertas con dolor de cabeza o tu pareja nota que dejas de respirar, consulta a un médico. La apnea se trata y mejora muchísimo la calidad de vida y el metabolismo."
  ));

  out.push(h2("5.3 Hidratación: el pilar olvidado"));

  out.push(p("El cuerpo humano es 60% agua. Tu cerebro es 75% agua. Tu sangre es 90% agua. Y sin embargo, la mayoría de gente camina deshidratada todo el día. La deshidratación causa cansancio, dolor de cabeza, mala digestión, piel seca, y se confunde con hambre. Muchas veces que crees tener hambre, en realidad tienes sed."));

  out.push(h3("Cuánta agua debes tomar"));
  out.push(p("La regla general: 35-40 ml por kilo de peso al día. Para una persona de 70 kg, son entre 2.5 y 2.8 litros. Pero no todo tiene que ser agua pura: las frutas, verduras, sopas, infusiones también cuentan. Ajusta según tu actividad física y el clima: si hace calor o haces ejercicio, bebe más."));

  out.push(h3("Señales de que no estás tomando suficiente agua"));
  out.push(bullet("Orina amarilla oscura (debería ser amarillo muy claro o casi transparente)"));
  out.push(bullet("Boca y labios secos"));
  out.push(bullet("Cansancio o somnolencia a media tarde"));
  out.push(bullet("Dolor de cabeza, especialmente en la frente"));
  out.push(bullet("Piel seca o descamada"));
  out.push(bullet("Estreñimiento"));
  out.push(bullet("Dificultad para concentrarte"));

  out.push(h3("Cómo tomar más agua (sin tener que pensar)"));
  out.push(bulletLead("Empieza el día con un vaso. ", "Antes del café, antes de desayunar. Agua tibia con limón es ideal."));
  out.push(bulletLead("Lleva una botella siempre contigo. ", "En la cartera, en el escritorio, en el carro. Si la ves, te acuerdas."));
  out.push(bulletLead("Toma un vaso antes de cada comida. ", "Tres comidas, tres vasos. Ya son 750 ml sin esfuerzo."));
  out.push(bulletLead("Pon alarmas si necesitas. ", "Cada 2 horas, suena y te tomas un vaso."));
  out.push(bulletLead("Variación: aguas saborizadas naturales. ", "Agua con pepino y menta, agua con rodajas de naranja, agua con hierbabuena. Sin azúcar, sin endulzar."));
  out.push(bulletLead("Emoliente sin azúcar. ", "Es peruano, es rico y te hidrata. Cebada, linaza, hierbas. Pídelo sin azúcar o hazlo en casa."));

  out.push(h3("Bebidas que SÍ puedes tomar"));
  out.push(buildTable(
    ["Bebida", "Frecuencia recomendada"],
    [
      ["Agua natural", "Libre — todo el día"],
      ["Café solo o con leche (sin azúcar)", "1-2 tazas al día, antes de las 2 pm"],
      ["Té verde, té negro, infusiones", "Libre — sin azúcar"],
      ["Emoliente sin azúcar", "1 vaso al día"],
      ["Agua de frutas (sin azúcar añadido)", "1 vaso al día"],
      ["Agua saborizada con hierbas", "Libre"],
    ],
    [50, 50]
  ));

  out.push(h3("Bebidas que debes EVITAR"));
  out.push(bullet("Gaseosas (incluso las versiones 'diet' o 'zero' — los edulcorantes artificiales engañan al cerebro y mantienen el antojo por dulces)"));
  out.push(bullet("Jugos envasados (incluso los que dicen '100% fruta' — tienen muchísimo azúcar concentrado sin la fibra de la fruta)"));
  out.push(bullet("Bebidas energéticas (Red Bull, Monster, etc.)"));
  out.push(bullet("Bebidas deportivas (Gatorade, Powerade — solo si haces más de 1 hora de ejercicio intenso)"));
  out.push(bullet("Chicha morada azucarada (la casera tiene muchísimo azúcar — hazla en casa con stevia o con muy poco azúcar)"));
  out.push(bullet("Café frapuchino, moca, caramel macchiato (son postres líquidos, no café)"));

  out.push(pageBreak());
  return out;
}

// ============================================================
// CAPÍTULO 6: ANTOJOS Y FIESTAS
// ============================================================
function buildCap6() {
  const out = [];
  out.push(h1("Capítulo 6: Cómo manejar antojos y sobrevivir fiestas"));
  out.push(divider());

  out.push(p("Aquí viene la parte donde la mayoría cae. La parte donde la dieta se rompe. No porque no sepas qué comer, sino porque la vida real es así: hay cumpleaños, hay reuniones de familia, hay casamientos, hay semanas malas, hay noches donde lo único que quieres es comerte el refrigerador entero. Y está bien. Lo importante no es no fallar, lo importante es saber qué hacer cuando fallas."));

  out.push(h2("6.1 Entendiendo los antojos"));

  out.push(p("Los antojos no son debilidad. Son señales. Tu cuerpo te pide algo por una razón, y si entiendes esa razón, puedes manejarlos mejor. Los antojos suelen caer en 3 categorías:"));

  out.push(h3("1. Antojos emocionales"));
  out.push(p("Comes porque estás estresada(o), triste, aburrida(o), feliz, enojada(o). La comida se convierte en un mecanismo de regulación emocional. Es muy común y muy humano. El problema es que el alivio dura 5 minutos y la culpa dura horas."));
  out.push(p("Cómo manejarlo: antes de comer, pregúntate '¿tengo hambre real o estoy sintiendo algo?'. Si es hambre, come. Si es emoción, busca otra forma de regular: sal a caminar 10 minutos, llama a una amiga, date una ducha, escribe en un cuaderno, escucha música. Tu cuerpo no necesita comida, necesita otra cosa."));

  out.push(h3("2. Antojos físicos"));
  out.push(p("Tu cuerpo te pide algo específico porque le falta algo. Antojo de chocolate puede significar falta de magnesio. Antojo de sal puede significar deshidratación o falta de electrolitos. Antojo de dulce suele ser una bajada de azúcar en sangre por comer carbohidratos simples sin proteína."));
  out.push(p("Cómo manejarlo: come una comida balanceada (proteína + vegetal + carbohidrato complejo) en lugar de picar algo dulce. Si tienes antojo de chocolate, come chocolate amargo (70%+ cacao) en porción pequeña. Si tienes antojo de sal, come aceitunas o un puñado de frutos secos."));

  out.push(h3("3. Antojos habituales"));
  out.push(p("Comes porque siempre comes a esa hora, en ese lugar, en esa situación. No es hambre real, es costumbre. El clásico: 'mirar tele = comer galletas'. El cerebro asocia contextos con comida."));
  out.push(p("Cómo manejarlo: rompe la asociación. Si siempre comes en el sofá, no comas ahí nunca más. Si siempre picas a las 4 pm, sal a caminar a las 4 pm. Cambia el hábito por uno nuevo. En 2-3 semanas, el antojo desaparece."));

  out.push(h2("6.2 Estrategias para antojos específicos"));

  out.push(h3("Antojo de dulce"));
  out.push(bulletLead("Toma agua primero. ", "Muchas veces la sed se disfraza de antojo de dulce."));
  out.push(bulletLead("Come fruta. ", "1 manzana, 1 banana, 1 porción de papaya. La fruta tiene azúcar natural + fibra que estabiliza el azúcar en sangre."));
  out.push(bulletLead("Chocolate amargo. ", "1-2 cuadritos de chocolate 70%+ cacao. Tiene antioxidantes y sacia."));
  out.push(bulletLead("Dátiles con maní. ", "2-3 dátiles rellenos con maní. Dulces, nutritivos y llenan."));
  out.push(bulletLead("Espera 15 minutos. ", "Si después de 15 minutos todavía quieres dulce, come una porción pequeña y consciente. Sin culpa."));

  out.push(h3("Antojo de salado"));
  out.push(bulletLead("Aceitunas. ", "5-6 aceitunas negras. Grasas buenas y sal."));
  out.push(bulletLead("Frutos secos. ", "1 puñado de maní, almendras o pecanas."));
  out.push(bulletLead("Huevo cocido con sal. ", "70 calorías, muchísima proteína."));
  out.push(bulletLead("Queso fresco con tomate. ", "Sal natural de queso + agua del tomate."));
  out.push(bulletLead("Palomitas hechas en casa. ", "Sin mantequilla, con un chorrito de aceite y sal. Volumen grande, pocas calorías."));

  out.push(h3("Antojo nocturno (el más peligroso)"));
  out.push(p("El antojo nocturno es el más difícil de manejar porque tu fuerza de voluntad ya está agotada del día. La mejor estrategia es la prevención: cena bien (proteína + vegetal + grasa buena) y cepíllate los dientes inmediatamente después de cenar. La sensación de limpieza en la boca reduce el antojo de comer."));
  out.push(p("Si después de eso sigues con hambre, toma una infusión caliente (manzanilla, anís, hierba luisa) sin azúcar. El calor del líquido da sensación de saciedad. Y si nada de eso funciona, come algo ligero y proteico: un huevo cocido, una lonja de queso fresco, un puñado de almendras. NO carbohidratos en la noche."));

  out.push(h2("6.3 Cómo sobrevivir a fiestas y reuniones"));

  out.push(p("En el Perú, todo es pretexto para comer: cumpleaños, bautizos, matrimonios, baby shower, despedidas, quinceañeros, fiestas patrias, día del padre, día de la madre, día del amigo, día del cuy, día de lo que sea. Y no vas a dejar de ir. Y no debes dejar de ir. La vida social es importante para la salud mental. Lo importante es ir preparada(o)."));

  out.push(h3("Antes de la fiesta"));
  out.push(bulletLead("No llegues con hambre. ", "Come algo ligero antes de salir: una fruta, un huevo cocido, un puñado de frutos secos. Si llegas con hambre, te comes todo lo que veas."));
  out.push(bulletLead("Lleva algo saludable. ", "Si es un potluck (cada quien lleva algo), lleva una ensalada grande, una causa ligera, un ceviche. Así te aseguras de tener al menos una opción sana."));
  out.push(bulletLead("Planifica cuánto vas a tomar. ", "El alcohol tiene muchísimas calorías y baja las inhibiciones. Decide antes de salir: 'voy a tomar 2 copas' o 'no voy a tomar nada'. Cumple."));
  out.push(bulletLead("Visualiza tu noche. ", "Imagina la fiesta, imagínate eligiendo bien, conversando, bailando. Tu cerebro se prepara para eso."));

  out.push(h3("Durante la fiesta"));
  out.push(bulletLead("Servir una sola vez. ", "No vuelvas a la mesa del buffet. Una sola vuelta, con un plato. Elige con criterio: proteína, ensalada, un poco de carbohidrato."));
  out.push(bulletLead("Alejate de la mesa de comida. ", "Si estás conversando al lado del buffet, vas a picar todo el rato sin darte cuenta. Llévate el plato a otra sala."));
  out.push(bulletLead("Bebe agua entre copas. ", "1 vaso de agua por cada copa de alcohol. Te mantiene hidratada(o), bebes menos y al día siguiente no tienes resaca."));
  out.push(bulletLead("Elige bien tus tragos. ", "Vino tinto o cerveza ligera son mejores que tragos dulces (pisco sour, daiquiri, chilcano con muchísimo jarabe). 1 copa de vino = 120 kcal, 1 pisco sour = 250 kcal."));
  out.push(bulletLead("Baila. ", "Bailar quema calorías, te mantiene alejada(o) de la mesa y es divertido."));
  out.push(bulletLead("Come despacio. ", "Saborea. Disfruta. Si te vas a comer el pedazo de keke, hazlo con consciencia, no con culpa."));
  out.push(bulletLead("No pruebes de todo. ", "Elige 2-3 cosas que realmente te gusten y disfrútalas. No pruebes 'un poquito de todo' porque terminas comiendo más."));

  out.push(h3("Después de la fiesta"));
  out.push(p("Si te pasaste, no te castigues. Una noche no arruina 21 días de esfuerzo. Lo importante es lo que haces al día siguiente. NO ayunes (eso te va a hacer comer más al final del día). Desayuna liviano pero completo: huevos con tomate y pan integral. Toma mucha agua. Come fruta. Camina 30-45 minutos. Cena temprano y ligero. Para el segundo día, ya estás de vuelta en el plan. Sin culpa, sin drama."));

  out.push(h2("6.4 Comiendo fuera: en restaurantes, pollerías y menús"));

  out.push(p("En Lima tenemos el privilegio de tener comida rica en todas partes: menús de S/ 10, pollerías, chifas, cevicherías, huariques. La cuestión no es no ir, es saber elegir."));

  out.push(h3("En una pollería"));
  out.push(bulletLead("Pide 1/4 de pollo sin piel. ", "La piel es pura grasa. Mejor la pechuga."));
  out.push(bulletLead("Reemplaza las papas fritas. ", "Pide ensalada en lugar de papas. O pide 1 porción de papas y compártela entre 3-4 personas."));
  out.push(bulletLead("Salsas con cuidado. ", "La crema de ají es deliciosa pero es mayonesa. Poca cantidad. La mostaza y el ketchup también tienen azúcar. Mejor ají molido o mostaza sin azúcar."));
  out.push(bulletLead("Toma agua o chicha sin azúcar. ", "No gaseosa."));

  out.push(h3("En un chifa"));
  out.push(bulletLead("Pide arroz chaufa sin jamón. ", "El jamón de chifa es malo. Pide con pollo o mariscos."));
  out.push(bulletLead("Pide porción pequeña de arroz. ", "El arroz chaufa tiene muchísimo arroz. Comparte una porción entre 2."));
  out.push(bulletLead("Acompaña con wantán o sopa. ", "La sopa wantán es buena entrada (llena un poco) y el wantán frito es mejor que un plato de arroz gigante."));
  out.push(bulletLead("Evita el chi jau kay. ", "Es pollo frito con salsa de tamarindo (azúcar)."));
  out.push(bulletLead("No tomes la bebida de cortesía. ", "Suele ser chicha morada azucarada. Pide agua."));

  out.push(h3("En un menú de S/ 10"));
  out.push(bulletLead("Entrada: sopa. ", "Mejor sopa que ensalada con mayonesa. La sopa es casera, llena y tiene pocas calorías."));
  out.push(bulletLead("Segundo: elige pollo o pescado a la plancha. ", "Evita los fritos, los apanados, los estofados con mucha salsa."));
  out.push(bulletLead("Acompañamiento: 1/2 porción de arroz, ensalada extra. ", "Pide que te pongan menos arroz y más ensalada. La mayoria de menús aceptan."));
  out.push(bulletLead("Postre: NO. ", "El postre del menú es gelatina o mazamorra con muchísimo azúcar. Si quieres dulce, lleva una fruta."));
  out.push(bulletLead("Bebida: agua o infusión. ", "La refresco del menú es agua con azúcar."));

  out.push(h3("En una cevichería"));
  out.push(p("Esta es la mejor opción para comer fuera. El ceviche es uno de los platos más sanos del mundo. Solo cuida los acompañamientos."));
  out.push(bullet("Pide ceviche simple (no mixto, que tiene más calorías)"));
  out.push(bullet("Acompañamientos: 1 rodaja delgada de camote, 2 cucharadas de choclo, lechuga"));
  out.push(bullet("No pidas chicharrón de calamar ni jalea (son fritos)"));
  out.push(bullet("Si quieres entrada: pulpo al olivo (moderación) o conchas falsas (sin salsa rosada)"));
  out.push(bullet("Bebida: chicha morada sin azúcar o agua"));

  out.push(h2("6.5 Estrategias para las semanas malas"));

  out.push(p("Va a haber semanas malas. Una semana donde todo sale al revés: problemas en el trabajo, una pelea con tu pareja, te enfermas, tienes tu período, te visita familia. Y no te sale cumplir el plan. Y eso está bien. La vida real no es un Instagram de fitness. Aquí te dejo cómo manejar una semana mala:"));

  out.push(bulletLead("No abandones todo. ", "Si no puedes cumplir el 100% del plan, cumple el 50%. Es mejor que el 0%."));
  out.push(bulletLead("Mantén al menos un hábito. ", "Elige uno — el que más fácil te resulte — y cúmplelo. Aunque solo sea tomar agua o caminar 10 minutos."));
  out.push(bulletLead("No te peses en mala racha. ", "Si te subes a la balanza en una semana mala, te vas a desanimar más. Espera a estar mejor."));
  out.push(bulletLead("Busca la causa, no el síntoma. ", "¿Por qué fue mala la semana? ¿Trabajo? ¿Estrés? ¿Mala planificación? Si identificas la causa, puedes prevenir la próxima."));
  out.push(bulletLead("Reinicia sin culpa. ", "El lunes siguiente (o cuando te sientas mejor), empieza de nuevo. Sin castigarte por lo que pasó. El pasado ya no se puede cambiar."));
  out.push(bulletLead("Habla con alguien. ", "Si te está costando mucho, busca apoyo: una amiga, tu pareja, un grupo de WhatsApp, un nutricionista. No tienes que hacerlo sola(o)."));

  out.push(quote("La constancia es más importante que la perfección. Una semana mala no define tu proceso. Lo que define tu proceso es que sigues adelante."));

  out.push(pageBreak());
  return out;
}

module.exports = { buildCap4, buildCap5, buildCap6 };
