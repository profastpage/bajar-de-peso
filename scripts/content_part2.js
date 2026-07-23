// Capítulo 2 y 3: Lista de compras + Plan 21 días
const H = require("./generate_guia");
const { h1, h2, h3, p, pRich, bullet, bulletLead, tipBox, imgPlaceholder, buildTable, spacer, pageBreak, divider, quote, P, AlignmentType } = H;

// ============================================================
// CAPÍTULO 2: LISTA DE COMPRAS INTELIGENTE
// ============================================================
function buildCap2() {
  const out = [];
  out.push(h1("Capítulo 2: Lista de compras inteligente"));
  out.push(h2("Alimentos peruanos baratos y nutritivos"));
  out.push(divider());

  out.push(p("Vamos a hablar de plata. Porque la excusa número uno que escucho es 'es que comer sano es caro'. Falso. Comer sano es caro cuando no sabes qué comprar, cuando caes en la trampa de los productos 'fit' (galletas integrales de 12 soles, granola importada de 35, jarabe de ya no sé qué de 45). La comida saludable de verdad es la más barata del mercado: verduras, frutas de temporada, menestras, huevos, pescado, pollo entero. Lo caro es lo procesado, lo envasado, lo importado."));
  out.push(p("En este capítulo te voy a dar una lista de compras completa, organizada por categorías, con precios estimados en soles (basados en mercados mayoristas y de barrio de Lima, julio 2026). Vas a ver que con 80-120 soles a la semana puedes comer saludable, rico y abundante. Eso son menos de 17 soles al día por persona. Menos que un menú en cualquier restaurante. Menos que dos cafés en una cafetería fancy."));

  out.push(tipBox(
    "Reglas de oro para comprar barato",
    "1) Compra en mercado, no en supermercado. 2) Elige frutas y verduras de temporada (están más baratas y más ricas). 3) Compra pollo entero y pídelo en presas (más barato que las pechugas ya cortadas). 4) Las menestras son tus amigas: rinden muchísimo y cuestan poco. 5) Compra quinua y kiwicha a granel. 6) Lleva tu propia bolsa, pesa todo, compara precios."
  ));

  out.push(h2("2.1 Tabla de alimentos permitidos, moderados y prohibidos"));

  out.push(p("Antes de ir a comprar, tienes que saber qué elegir. Aquí está tu tabla maestra. No es para que te aprendas todo de memoria, es para que la tengas pegada en la refrigeradora o en el celular. Cuando tengas dudas, la miras."));

  // Tabla 1: PERMITIDOS
  out.push(h3("✅ Alimentos permitidos (puedes comerlos a diario)"));
  out.push(buildTable(
    ["Categoría", "Alimentos", "Por qué"],
    [
      ["Verduras", "Lechuga, tomate, cebolla, zanahoria, pepino, zapallo, brócoli, coliflor, espinaca, acelga, apio, ají, rábano, vainita, calabacín, berenjena", "Bajas en calorías, altas en fibra, vitaminas y agua. Te llenan sin inflarte."],
      ["Frutas", "Papaya, piña, sandía, melón, manzana, pera, plátano (1 al día), mandarina, naranja, tuna, aguaymanto, fresa, maracuyá", "Antioxidantes, fibra, vitaminas. Ideales como snack o postre."],
      ["Proteínas", "Pechuga de pollo, pescado fresco (caballa, jurel, bonito, corvina), atún en agua, huevo, pavo, menestras (lentejas, pallares, frijoles, garbanzos), quinua, kiwicha", "Construyen músculo, dan saciedad, estabilizan el azúcar."],
      ["Carbohidratos", "Papa (1-2 unidades), camote, arroz (½ taza), quinua, avena, maíz (1 mazorca o ½ taza), pan integral (1 rebanada)", "Energía necesaria. La clave es la porción y la combinación."],
      ["Grasas", "Palta (¼ unidad), aceitunas (5-6 unidades), aceite de oliva (1 cdta), sacha inchi, maní (1 puñado), semillas (chía, linaza)", "Grasas buenas para el cerebro, hormonas y piel."],
      ["Lácteos", "Yogur natural sin azúcar, queso fresco (1 rebanada), leche evaporada (en porciones pequeñas)", "Calcio y proteína. Cuidado con el azúcar del yogur."],
      ["Bebidas", "Agua, infusiones sin azúcar (manzanilla, anís, hierba luisa), café solo, emoliente sin azúcar", "Hidratación sin calorías."],
    ],
    [22, 48, 30]
  ));

  out.push(spacer(160));

  // Tabla 2: MODERADOS
  out.push(h3("⚠️ Alimentos moderados (come con cabeza, no todos los días)"));
  out.push(buildTable(
    ["Categoría", "Alimentos", "Cuánto / cuándo"],
    [
      ["Arroz blanco", "Solo en almuerzo, media taza, idealmente mezclado con quinua o verduras", "No en cena, no todos los días."],
      ["Pan francés / pan serrano", "1 unidad en el desayuno, con proteína (huevo, pollo, queso)", "No como snack, no con mermelada."],
      ["Pasta", "1 vez por semana, porción pequeña, con salsa de tomate natural", "Evita pastas con cremas o quesos."],
      ["Fideos integrales", "Mejor opción que los blancos, pero igual cuida la porción", "Máximo 1-2 veces por semana."],
      ["Queso", "Fresco o andino, 1-2 rebanadas finas", "No quesos cremosos ni amarillos."],
      ["Miel / chancaca", "1 cucharadita en avena o yogur, no todos los días", "Mejor que el azúcar, pero sigue siendo azúcar."],
      ["Frutas dulces", "Plátano, uva, mango, chirimoya — 1 porción al día", "Preferir en la primera mitad del día."],
      ["Tubérculos", "Papa, camote, yuca — 1-2 unidades medianas", "Mejor cocidos, no fritos."],
      ["Bebidas", "Café con leche (sin azúcar), emoliente (sin azúcar añadido)", "Máximo 1-2 al día."],
      ["Postres caseros", "1 vez por semana, hecho en casa con menos azúcar", "No postres de paquete ni diarios."],
    ],
    [22, 48, 30]
  ));

  out.push(spacer(160));

  // Tabla 3: PROHIBIDOS
  out.push(h3("❌ Alimentos que debes evitar (al menos estos 21 días)"));
  out.push(buildTable(
    ["Categoría", "Alimentos", "Por qué evitarlos"],
    [
      ["Bebidas azucaradas", "Gaseosa (incluso las 'diet' si puedes), chicha morada azucarada, jugos envasados, bebidas energéticas", "Calorías líquidas que no llenan, disparan insulina."],
      ["Comida rápida", "Pizza, hamburguesas, fried chicken, salchipapa, piqueos de pollería", "Alta en grasas trans, sodio y calorías vacías."],
      ["Frituras", "Papas fritas, chicharrones, picarones, empanadas fritas, anticuchos muy aceitosos", "El aceite frito duplica o triplica las calorías."],
      ["Panadería dulce", "Donas, panetela, keke, alfajores, bizcochos, submarinos", "Azúcar + harina refinada + grasa = bomba calórica."],
      ["Embutidos", "Salchicha, jamón del malo, hot dog, mortadela, chorizo", "Sodio alto, carne de baja calidad, conservantes."],
      ["Snacks de paquete", "Papas fritas en bolsa, cheetos, doritos, galletas dulces o saladas", "Calorías vacías, no llenan, crean adicción."],
      ["Mayonesa comercial / salsas", "Mayonesa, ketchup, mostaza dulce, salsas cremosas", "Azúcar y aceites refinados. Usa crema de ají, limón, mostaza sin azúcar."],
      ["Alcohol (en exceso)", "Cerveza diaria, vino en cantidades, tragos dulces", "Calorías vacías, frena la quema de grasa."],
      ["Aderezos", "Salsas de crema, rosada, tártara, parmesano", "Aceites y azúcar. Sustituye por aceite de oliva + limón."],
    ],
    [22, 48, 30]
  ));

  out.push(h2("2.2 Lista de compras semanal (con precios en soles)"));

  out.push(p("Esta es la lista que yo uso. Son 7 días de comida para 1 persona. Ajusta las cantidades según tu familia. Los precios son aproximados en mercados de Lima (julio 2026) y pueden variar un poco según la zona y la temporada. Lo importante: los precios son promedios realistas, no optimistas ni pesimistas."));

  // Tabla lista de compras - VERDURAS Y FRUTAS
  out.push(h3("🥬 Verduras y frutas (S/ 30 - 35)"));
  out.push(buildTable(
    ["Producto", "Cantidad", "Precio aprox. (S/)"],
    [
      ["Tomate", "1 kg", "4.00"],
      ["Cebolla roja", "1 kg", "3.50"],
      ["Lechuga", "2 unidades", "3.00"],
      ["Zanahoria", "1 kg", "3.00"],
      ["Pepino", "1 kg", "3.00"],
      ["Pimentón (pimiento)", "3 unidades", "5.00"],
      ["Brócoli", "2 atados", "5.00"],
      ["Zapallo macre", "1/2 kg", "2.50"],
      ["Ajo", "1 cabeza", "1.00"],
      ["Ají amarillo", "200 g", "3.00"],
      ["Limón", "1 kg", "4.00"],
      ["Papaya (1/4)", "1 unidad", "4.00"],
      ["Manzana", "1 kg", "5.00"],
      ["Plátano de seda", "1 docena", "4.00"],
      ["Sandía o melón (rodajas)", "1/4", "5.00"],
      ["Aguaymanto", "1 caja pequeña", "4.00"],
    ],
    [50, 25, 25]
  ));

  out.push(spacer(120));

  // Tabla PROTEÍNAS
  out.push(h3("🍗 Proteínas (S/ 35 - 40)"));
  out.push(buildTable(
    ["Producto", "Cantidad", "Precio aprox. (S/)"],
    [
      ["Pechuga de pollo entera", "1 kg", "16.00"],
      ["Huevos", "1 docena", "7.00"],
      ["Pescado fresco (caballa o jurel)", "1 kg", "12.00"],
      ["Atún en agua (lata)", "2 latas", "8.00"],
      ["Quinua", "500 g", "5.00"],
      ["Lentejas", "500 g", "3.50"],
      ["Pallares o frijoles", "500 g", "3.50"],
    ],
    [50, 25, 25]
  ));

  out.push(spacer(120));

  // Tabla CARBOHIDRATOS
  out.push(h3("🍚 Carbohidratos y granos (S/ 15 - 18)"));
  out.push(buildTable(
    ["Producto", "Cantidad", "Precio aprox. (S/)"],
    [
      ["Papa blanca", "1 kg", "3.50"],
      ["Camote", "500 g", "3.00"],
      ["Arroz", "1 kg", "4.50"],
      ["Avena", "500 g", "4.00"],
      ["Pan integral", "1 bolsa", "5.00"],
    ],
    [50, 25, 25]
  ));

  out.push(spacer(120));

  // Tabla GRASAS Y OTROS
  out.push(h3("🥑 Grasas, lácteos y otros (S/ 20 - 25)"));
  out.push(buildTable(
    ["Producto", "Cantidad", "Precio aprox. (S/)"],
    [
      ["Palta", "2 unidades", "6.00"],
      ["Maní tostado sin sal", "250 g", "4.00"],
      ["Yogur natural sin azúcar", "1 L", "8.00"],
      ["Queso fresco", "200 g", "5.00"],
      ["Semillas (chía o linaza)", "100 g", "3.00"],
      ["Hierbas (huacatay, cilantro, hierbabuena)", "1 atado", "2.00"],
    ],
    [50, 25, 25]
  ));

  out.push(spacer(160));

  out.push(tipBox(
    "TOTAL ESTIMADO: S/ 100 - 118 semanales",
    "Eso son aproximadamente S/ 14-17 por día para una persona. Si cocinas para dos o para una familia, los precios por persona bajan todavía más (compartir insumos es más barato). Comparado con los S/ 25-40 que cuesta un menú en un restaurante, cocinar en casa es la opción más económica y la más sana."
  ));

  out.push(h2("2.3 Tips para comprar en el mercado como experta(o)"));

  out.push(bulletLead("Ve temprano. ", "Entre 6 y 9 am el mercado está lleno de producto fresco y los precios están mejores. Además evitas el sol y la bulla."));
  out.push(bulletLead("Lleva lista y plata suelta. ", "No compres con tarjeta, no mires con hambre. Lleva tu lista en el celular, marca lo que vas comprando, y cumple."));
  out.push(bulletLead("Camina todo el mercado antes de comprar. ", "Compara precios. El mismo tomate puede estar a 3 soles en un puesto y a 5 en el de al lado. Los primeros puestos suelen ser más caros porque atrapan al distraído."));
  out.push(bulletLead("Compra frutas y verduras de temporada. ", "Están más baratas, más ricas y más nutritivas. Si no sabes cuáles son, pregunta a la vendedora: '¿qué está barato hoy?' Ellas saben."));
  out.push(bulletLead("Compra pollo entero y pídelo en presas. ", "La pechuga ya cortada cuesta S/ 18-20 el kilo. El pollo entero cuesta S/ 13-15 el kilo. La diferencia es enorme. Aprende a despresarlo o pídele al vendedor que lo haga."));
  out.push(bulletLead("Aprovecha el pescado fresco. ", "Caballa, jurel, bonito: pescados azules baratos y riquísimos. Tienen omega-3, vitamina D, hierro. S/ 12 el kilo. No compres solo corvina o lenguado, que son carísimos."));
  out.push(bulletLead("Compra granos a granel. ", "Quinua, kiwicha, avena, lentejas, pallares: en los puestos a granel son la mitad de baratos que en bolsa."));
  out.push(bulletLead("No te olvides de las hierbas. ", "Cilantro, huacatay, hierbabuena, paico, muña: le dan sabor a todo sin calorías. Cuestan S/ 1-2 el atado y transforman cualquier plato."));

  out.push(h2("2.4 La despensa básica que debes tener siempre"));

  out.push(p("Aparte de la lista semanal, hay cosas que compras una vez y te duran semanas o meses. Tener esta despensa básica te salva cuando no tienes tiempo de ir al mercado o cuando quieres cocinar algo rápido."));

  out.push(bullet("Arroz (1-2 kg)"));
  out.push(bullet("Quinua (500 g)"));
  out.push(bullet("Avena en hojuelas (500 g)"));
  out.push(bullet("Lentejas, frijoles, pallares (500 g de cada uno)"));
  out.push(bullet("Aceite (de preferencia aceite de oliva para ensaladas y aceite vegetal para cocinar)"));
  out.push(bullet("Sal, pimienta, comino, ajo molido, ají amarillo molido (congelado)"));
  out.push(bullet("Salsa de soya (sin azúcar añadido, para salteados)"));
  out.push(bullet("Café, té, hierbas para infusiones"));
  out.push(bullet("Atún en lata (al agua) — para emergencias"));
  out.push(bullet("Sardinas en lata — para emergencias"));

  out.push(h2("2.5 Lo que NO debes tener en casa (aunque te regalen)"));

  out.push(p("Si quieres comer sano, lo más fácil es no tener comida chatarra a la mano. Si tienes galletas en el gabinete, te las vas a comer. Si no tienes, no las vas a comer. Simple. Y no es 'para los niños' — los niños también merecen comer sano. Aquí va la lista negra de la despisa:"));

  out.push(bullet("Galletas dulces o saladas de paquete"));
  out.push(bullet("Papas fritas en bolsa"));
  out.push(bullet("Gaseosas (ni las 'diet')"));
  out.push(bullet("Mayonesa comercial"));
  out.push(bullet("Embutidos baratos (salchicha, jamón de mala calidad)"));
  out.push(bullet("Margarina"));
  out.push(bullet("Cubos de caldo (tienen muchísimo sodio y grasa mala)"));
  out.push(bullet("Mezclas para postres envasadas"));
  out.push(bullet("Cereales azucarados de caja"));
  out.push(bullet("Leche condensada, manjar blanco, dulce de leche"));

  out.push(p("Si los tienes en casa ahora, no los tires (sería un desperdicio), pero no los compres más. Cuando se acaben, que no vuelvan. Tu cuerpo y tu bolsillo te lo van a agradecer."));

  out.push(pageBreak());
  return out;
}

// ============================================================
// CAPÍTULO 3: PLAN DE 21 DÍAS
// ============================================================
function buildCap3() {
  const out = [];
  out.push(h1("Capítulo 3: Plan de alimentación de 21 días"));
  out.push(h2("Menús diarios completos para tu transformación"));
  out.push(divider());

  out.push(p("Aquí estamos. Esta es la parte que estabas esperando. 21 días de menús completos: desayuno, almuerzo, cena y dos snacks (uno a media mañana, otro a media tarde). No tienes que pensar qué comer. Solo tienes que comprar, preparar y disfrutar. Y si un día no te gusta algo, puedes intercambiarlo por otro día. Lo importante es mantener el equilibrio."));

  out.push(tipBox(
    "Cómo usar este plan",
    "Cada día tiene aproximadamente 1500-1700 calorías (ideal para una persona adulta promedio que quiere bajar de peso). Si eres hombre grande o muy activa(o), sube las porciones un 20%. Si eres mujer pequeña o sedentaria, bájalas un 10%. El plan está diseñado para ser flexible: si no te gusta un alimento, sustituye por otro de la misma categoría. Lo que importa es la estructura: proteína + carbohidrato + vegetal en cada comida principal."
  ));

  out.push(h2("Reglas para todas las comidas (léelo antes de empezar)"));
  out.push(bulletLead("Agua primero. ", "Toma un vaso de agua 15 minutos antes de cada comida. Te llena un poco y come menos."));
  out.push(bulletLead("Orden del plato. ", "Primero la ensalada o verdura, después la proteína, al final el carbohidrato. Ayuda a la digestión y a la saciedad."));
  out.push(bulletLead("Masticación. ", "Mastica cada bocado al menos 20 veces. No es exageración: mejora la digestión y te llena antes."));
  out.push(bulletLead("Sin pantallas. ", "Come sin celular, sin tele, sin laptop. Mira tu plato. Disfruta."));
  out.push(bulletLead("Sin repetir. ", "Sirve la porción correcta desde el inicio. Si terminaste con hambre, espera 15 minutos antes de repetir: muchas veces la saciedad llega después."));
  out.push(bulletLead("Cocina para varios días. ", "Los domingos prepara menestras, quinua, huevo cocido, pollo. Te ahorra tiempo entre semana."));

  out.push(h2("Equivalencias útiles"));
  out.push(buildTable(
    ["Medida", "Equivalencia"],
    [
      ["1 taza de arroz cocido", "≈ 200 g / 260 kcal"],
      ["1 taza de quinua cocida", "≈ 200 g / 220 kcal"],
      ["1 papa mediana", "≈ 150 g / 110 kcal"],
      ["1 huevo grande", "≈ 50 g / 70 kcal"],
      ["1 pechuga de pollo (100 g)", "≈ 165 kcal"],
      ["1 filete de pescado (150 g)", "≈ 150 kcal"],
      ["1 taza de verduras cocidas", "≈ 50 kcal"],
      ["1 taza de ensalada cruda", "≈ 25 kcal"],
      ["1 fruta mediana", "≈ 80-100 kcal"],
      ["1 cucharada de aceite", "≈ 120 kcal"],
      ["1 palta pequeña", "≈ 250 kcal"],
      ["1 rebanada de pan integral", "≈ 80 kcal"],
    ],
    [50, 50]
  ));

  out.push(pageBreak());

  // SEMANA 1
  out.push(h1("Semana 1: Adaptación (Días 1-7)"));
  out.push(p("La primera semana es la más difícil. Tu cuerpo se está adaptando a comer menos azúcar y menos porciones. Vas a tener hambre entre comidas (¡para eso son los snacks!), vas a tener antojos, vas a tener días flojos. No te rindas. Cada día que cumples, se hace más fácil. Para el día 7, ya vas a sentirte más liviana(o) y con más energía."));

  // DÍA 1
  out.push(h2("Día 1 — Lunes: El comienzo"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "2 huevos revueltos con tomate y cebolla (sin aceite o 1 cdta) + 1 rebanada de pan integral + café o té sin azúcar", "7:00-8:00 am"],
      ["Snack 1", "1 manzana + 1 puñado de maní (10 unidades)", "10:30 am"],
      ["Almuerzo", "Pechuga de pollo a la plancha (150 g) + ½ taza de arroz con quinua + ensalada mixta grande (lechuga, tomate, pepino, zanahoria) con limón y 1 cdta de aceite de oliva", "1:00 pm"],
      ["Snack 2", "1 yogur natural sin azúcar con 1 cdta de semillas de chía", "4:30 pm"],
      ["Cena", "Atún al agua (1 lata) mezclado con tomate, cebolla y palta (¼) + 1 huevo cocido", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 2
  out.push(h2("Día 2 — Martes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Avena cocida con leche (½ taza de avena + 1 taza de leche descremada) + 1/2 taza de papaya picada + canela", "7:00-8:00 am"],
      ["Snack 1", "1 palta pequeña rellena con queso fresco y tomate", "10:30 am"],
      ["Almuerzo", "Seco de res (versión ligera: ver receta capítulo 4) + ½ taza de arroz + ensalada de vainita", "1:00 pm"],
      ["Snack 2", "1 rodaja de sandía o melón + 5 aceitunas", "4:30 pm"],
      ["Cena", "Omelette de 2 huevos con espinaca y champiñones + 1 rebanada de pan integral tostado", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 3
  out.push(h2("Día 3 — Miércoles"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Quinua con leche (½ taza quinua cocida + 1 taza leche) + canela + 1 cucharadita de miel", "7:00-8:00 am"],
      ["Snack 1", "1 puñado de aguaymanto + 5 almendras", "10:30 am"],
      ["Almuerzo", "Lomo saltado ligero (ver receta capítulo 4) — 1 plato, sin papas fritas, con bastante tomate y cebolla + 1/3 taza de arroz", "1:00 pm"],
      ["Snack 2", "1 yogur natural + 1 cdta de semillas de linaza", "4:30 pm"],
      ["Cena", "Ceviche de pescado (ver receta capítulo 4) con camote (1 rebanada) y choclo (2 cucharadas)", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 4
  out.push(h2("Día 4 — Jueves"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "2 huevos revueltos con queso fresco + 1 rebanada de pan integral + tomate en rodajas + café", "7:00-8:00 am"],
      ["Snack 1", "1 plátano + 1 cdta de mantequilla de maní (sin azúcar)", "10:30 am"],
      ["Almuerzo", "Ají de gallina ligero (ver receta capítulo 4) — 1 plato mediano + ½ papa cocida + 4 aceitunas + huevo duro", "1:00 pm"],
      ["Snack 2", "1 taza de frutas picadas (papaya, piña, fresas)", "4:30 pm"],
      ["Cena", "Pollo a la plancha (150 g) + ensalada grande + 1 rodaja de camote", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 5
  out.push(h2("Día 5 — Viernes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Yogur natural con avena (3 cdas) + 1/2 taza de fresas + 1 cdta de chía", "7:00-8:00 am"],
      ["Snack 1", "1 huevo cocido + 1 rodaja de tomate", "10:30 am"],
      ["Almuerzo", "Pescado al horno (150 g) con hierbas + 1 papa cocida + ensalada de zapallo y zanahoria", "1:00 pm"],
      ["Snack 2", "1 manzana + 1 puñado de maní", "4:30 pm"],
      ["Cena", "Causa ligera (ver receta capítulo 4) — 1 porción pequeña con atún o pollo", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 6
  out.push(h2("Día 6 — Sábado"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Sánguche integral de pechuga de pollo, tomate, lechuga y palta (2 rebanadas de pan) + café", "8:00-9:00 am"],
      ["Snack 1", "1 taza de fruta picada + 5 almendras", "11:00 am"],
      ["Almuerzo", "Arroz con pollo ligero (½ taza de arroz + 100 g de pollo + verduras) + ensalada grande", "1:30 pm"],
      ["Snack 2", "1 yogur natural con canela", "5:00 pm"],
      ["Cena", "Sopa de verduras con huevo (sin fideos, sin arroz) + 1 rebanada de pan integral", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 7
  out.push(h2("Día 7 — Domingo"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Panqueques de avena (ver receta capítulo 4) con 1/2 taza de fruta + café", "8:00-9:00 am"],
      ["Snack 1", "1 puñado de maní + 1 mandarina", "11:00 am"],
      ["Almuerzo", "Ceviche mixto ligero (pescado + camarón si tienes) con camote y choclo + 1 choclo desgranado", "1:30 pm"],
      ["Snack 2", "1 palta pequeña con queso fresco", "5:00 pm"],
      ["Cena", "Tortilla de verduras (2 huevos + espinaca, cebolla, zapallo) + ensalada", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  out.push(pageBreak());

  // SEMANA 2
  out.push(h1("Semana 2: Profundización (Días 8-14)"));
  out.push(p("Ya pasaste la primera semana. Si llegaste hasta aquí, ¡felicidades! Esa es la parte más difícil. Tu cuerpo ya se está adaptando, ya no te da tanta hambre, ya tienes más energía. Esta semana vamos a mantener la estructura pero variar los menús para que no te aburras."));

  // DÍA 8
  out.push(h2("Día 8 — Lunes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Avena cocida con leche + 1/2 taza de plátano + canela + 1 cdta de chía", "7:00-8:00 am"],
      ["Snack 1", "1 huevo cocido", "10:30 am"],
      ["Almuerzo", "Estofado de pollo ligero (ver receta capítulo 4) + 1/3 taza de arroz + ensalada de repollo y zanahoria", "1:00 pm"],
      ["Snack 2", "1 taza de papaya + 1 cdta de linaza", "4:30 pm"],
      ["Cena", "Salpicón de pollo (con tomate, cebolla, palta) + 1 rebanada de pan integral", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 9
  out.push(h2("Día 9 — Martes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "2 huevos revueltos con tomate y cebolla + 1 rebanada de pan integral + café", "7:00-8:00 am"],
      ["Snack 1", "1 manzana + 5 almendras", "10:30 am"],
      ["Almuerzo", "Lentejas guisadas con verduras (1 plato) + 1 huevo cocido + ensalada verde", "1:00 pm"],
      ["Snack 2", "1 yogur natural con canela", "4:30 pm"],
      ["Cena", "Pescado a la plancha + ensalada grande + 1 rodaja de camote", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 10
  out.push(h2("Día 10 — Miércoles"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Quinua con leche + 1/2 taza de fresas + 1 cdta de miel", "7:00-8:00 am"],
      ["Snack 1", "1 palta pequeña con queso fresco", "10:30 am"],
      ["Almuerzo", "Pollo a la olla con verduras (zapallo, zanahoria, vainita) + ½ papa + 1/3 taza de arroz", "1:00 pm"],
      ["Snack 2", "1 rodaja de sandía + 1 puñado de maní", "4:30 pm"],
      ["Cena", "Omelette de 2 huevos con champiñones y queso fresco + ensalada", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 11
  out.push(h2("Día 11 — Jueves"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Yogur natural con 3 cdas de avena + 1 cdta de chía + 1/2 taza de papaya", "7:00-8:00 am"],
      ["Snack 1", "1 plátano pequeño", "10:30 am"],
      ["Almuerzo", "Ceviche de pescado + 1 rodaja de camote + 2 cdas de choclo + 1 choclo desgranado", "1:00 pm"],
      ["Snack 2", "1 puñado de aguaymanto", "4:30 pm"],
      ["Cena", "Pollo a la plancha + ensalada de tomate y pepino + 1 rebanada de pan integral", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 12
  out.push(h2("Día 12 — Viernes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "2 huevos fritos en sartén antiadherente (sin aceite) + tomate + 1 rebanada de pan integral", "7:00-8:00 am"],
      ["Snack 1", "1 taza de frutas variadas", "10:30 am"],
      ["Almuerzo", "Ají de gallina ligero + ½ papa cocida + ensalada de remolacha", "1:00 pm"],
      ["Snack 2", "1 yogur natural con 1 cdta de linaza", "4:30 pm"],
      ["Cena", "Atún al agua con palta, tomate, cebolla + 1 rebanada de pan integral", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 13
  out.push(h2("Día 13 — Sábado"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Panqueques de avena con 1/2 taza de frutas + café", "8:00-9:00 am"],
      ["Snack 1", "1 palta rellena con pollo (restos del almuerzo anterior)", "11:00 am"],
      ["Almuerzo", "Anticuchos de pollo o corazón (sin grasa) + papita cocida + ensalada + salsa de ají", "1:30 pm"],
      ["Snack 2", "1 manzana + 1 puñado de maní", "5:00 pm"],
      ["Cena", "Sopa de pollo con verduras (sin fideos) + 1 huevo cocido", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 14
  out.push(h2("Día 14 — Domingo"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Sánguche de huevo revuelto con tomate y palta + 1 rebanada de pan integral + café", "8:00-9:00 am"],
      ["Snack 1", "1 yogur natural con frutas", "11:00 am"],
      ["Almuerzo", "Causa ligera de atún o pollo + ensalada verde", "1:30 pm"],
      ["Snack 2", "1 plátano + 1 cdta de mantequilla de maní", "5:00 pm"],
      ["Cena", "Tortilla de verduras (2 huevos + zapallo + cebolla) + ensalada", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  out.push(pageBreak());

  // SEMANA 3
  out.push(h1("Semana 3: Consolidación (Días 15-21)"));
  out.push(p("Estás en la recta final. Esta semana ya deberías sentir cambios: ropa más floja, más energía, mejor digestión, menos antojos. La idea de esta semana es consolidar los hábitos, no inventar nada nuevo. Repite variaciones de los menús que más te hayan gustado. Aquí te doy un último menú de 7 días para no pensar."));

  // DÍA 15
  out.push(h2("Día 15 — Lunes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Avena cocida con leche + 1/2 taza de fresas + canela", "7:00-8:00 am"],
      ["Snack 1", "1 huevo cocido + 1 rodaja de tomate", "10:30 am"],
      ["Almuerzo", "Lomo saltado ligero (sin papas fritas) + 1/3 taza de arroz + ensalada", "1:00 pm"],
      ["Snack 2", "1 puñado de maní", "4:30 pm"],
      ["Cena", "Atún con palta y tomate + 1 rebanada de pan integral", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 16
  out.push(h2("Día 16 — Martes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "2 huevos revueltos con cebolla y tomate + 1 rebanada de pan integral + café", "7:00-8:00 am"],
      ["Snack 1", "1 manzana + 5 almendras", "10:30 am"],
      ["Almuerzo", "Pescado al horno + 1 papa cocida + ensalada de vainita", "1:00 pm"],
      ["Snack 2", "1 yogur natural con 1 cdta de chía", "4:30 pm"],
      ["Cena", "Omelette de verduras + ensalada verde", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 17
  out.push(h2("Día 17 — Miércoles"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Quinua con leche + 1/2 taza de plátano + 1 cdta de miel", "7:00-8:00 am"],
      ["Snack 1", "1 palta pequeña con queso fresco", "10:30 am"],
      ["Almuerzo", "Pallares guisados con pollo deshilachado + 1/3 taza de arroz + ensalada", "1:00 pm"],
      ["Snack 2", "1 rodaja de sandía + 1 puñado de maní", "4:30 pm"],
      ["Cena", "Pollo a la plancha + ensalada de tomate y pepino", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 18
  out.push(h2("Día 18 — Jueves"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Yogur natural con avena (3 cdas) + 1/2 taza de papaya + 1 cdta de linaza", "7:00-8:00 am"],
      ["Snack 1", "1 puñado de aguaymanto", "10:30 am"],
      ["Almuerzo", "Ají de gallina ligero + ½ papa + ensalada de remolacha", "1:00 pm"],
      ["Snack 2", "1 taza de frutas picadas", "4:30 pm"],
      ["Cena", "Ceviche de pescado + 1 rodaja de camote + 2 cdas de choclo", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 19
  out.push(h2("Día 19 — Viernes"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "2 huevos fritos (sartén antiadherente) + tomate + 1 rebanada de pan integral", "7:00-8:00 am"],
      ["Snack 1", "1 plátano + 1 cdta de mantequilla de maní", "10:30 am"],
      ["Almuerzo", "Seco de res ligero + 1/3 taza de arroz + ensalada de zanahoria", "1:00 pm"],
      ["Snack 2", "1 yogur natural con canela", "4:30 pm"],
      ["Cena", "Salpicón de pollo + 1 rebanada de pan integral", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 20
  out.push(h2("Día 20 — Sábado"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Sánguche integral de pechuga de pollo, palta y tomate + café", "8:00-9:00 am"],
      ["Snack 1", "1 taza de frutas + 1 puñado de maní", "11:00 am"],
      ["Almuerzo", "Arroz con pollo ligero (½ taza de arroz + 100 g de pollo + verduras) + ensalada", "1:30 pm"],
      ["Snack 2", "1 palta con queso fresco", "5:00 pm"],
      ["Cena", "Sopa de verduras con huevo + 1 rebanada de pan integral", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  // DÍA 21
  out.push(h2("Día 21 — Domingo: ¡Lo lograste!"));
  out.push(buildTable(
    ["Comida", "Menú", "Hora sugerida"],
    [
      ["Desayuno", "Panqueques de avena con frutas + café", "8:00-9:00 am"],
      ["Snack 1", "1 huevo cocido + 1 rodaja de tomate", "11:00 am"],
      ["Almuerzo", "Ceviche de pescado + camote + choclo + lechuga", "1:30 pm"],
      ["Snack 2", "1 yogur natural con semillas", "5:00 pm"],
      ["Cena", "Pollo a la plancha + ensalada grande + 1 rodaja de camote", "8:00 pm"],
    ],
    [18, 67, 15]
  ));

  out.push(spacer(120));
  out.push(quote("¡Llegaste al día 21! Si llegaste hasta aquí, ya cambiaste. Lo que sigue no es 'terminar', es seguir."));

  out.push(pageBreak());
  return out;
}

module.exports = { buildCap2, buildCap3 };
