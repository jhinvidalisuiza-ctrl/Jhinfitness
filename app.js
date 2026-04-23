/* ============================================================
   JHINFITNESS â€” APP.JS â€” Complete Application Logic
   Recipes, Admin, Historias, Comunidad
   ============================================================ */

// ===== PHASES DATA =====
const PHASES = {
  ignite: { name:'Ignite', badge:'Fase 1', color:'green', icon:'fas fa-fire-alt',
    desc:'Enciende tu metabolismo, desintoxica el organismo y rompe la adicción al azúcar.',
    duration:'3 Semanas Â· 21 días', weeks:3,
    secretsUrl:'pdfs/secretos-ignite.html', foodsUrl:'pdfs/alimentos-ignite.html',
    weekFoods:['pdfs/compras-ignite-s1.html','pdfs/compras-ignite-s2.html','pdfs/compras-ignite-s3.html']},
  burn: { name:'Burn', badge:'Fase 2', color:'orange', icon:'fas fa-tint',
    desc:'Maximiza la quema de grasa corporal y pierde medidas de forma acelerada.',
    duration:'3 Semanas Â· 21 días', weeks:3,
    secretsUrl:'pdfs/secretos-burn.html', foodsUrl:'pdfs/alimentos-burn.html',
    weekFoods:['pdfs/compras-burn-s1.html','pdfs/compras-burn-s2.html','pdfs/compras-burn-s3.html']},
  flow: { name:'Flow', badge:'Fase 3', color:'blue', icon:'fas fa-sync-alt',
    desc:'Alcanza el ritmo sostenido de tu nuevo estilo de vida saludable.',
    duration:'3 Semanas Â· 21 días', weeks:3,
    secretsUrl:'pdfs/secretos-flow.html', foodsUrl:'pdfs/alimentos-flow.html',
    weekFoods:['pdfs/compras-flow-s1.html','pdfs/compras-flow-s2.html','pdfs/compras-flow-s3.html']},
  peak: { name:'Peak', badge:'Fase 4', color:'green', icon:'fas fa-bolt',
    desc:'Llega al máximo nivel: resetea tu metabolismo y consolida tu transformación.',
    duration:'1 Semana Â· 7 días', weeks:1,
    secretsUrl:'pdfs/secretos-peak.html', foodsUrl:'pdfs/alimentos-ignite.html',
    weekFoods:['pdfs/compras-peak-s1.html']},
};

// ===== MEAL IMAGE HELPER =====
function mealImg(query) {
  return `https://source.unsplash.com/400x300/?${encodeURIComponent(query)},food,keto`;
}

// ===== COMPLETE RECIPES =====
const RECETAS = {};
function R(name, ing, steps, img) {
  RECETAS[name] = { ingredients: ing, steps: steps, img: img || mealImg(name) };
}

// --- IGNITE WEEK 1 ---
R('Omelette de espinaca y queso',
  ['3 huevos','50g espinacas frescas','30g queso parmesano rallado','1 cda aceite de oliva','Sal y pimienta al gusto'],
  ['Batir los huevos con sal y pimienta.','Calentar aceite en sartén a fuego medio.','Verter los huevos y agregar espinacas.','Añadir queso cuando los bordes cuajen.','Doblar y servir dorado por ambos lados.']);
R('Pollo asado con ensalada verde',
  ['300g pernil de pollo con piel','100g lechuga mixta','50g pepino en rodajas','30g aguacate','2 cdas aceite de oliva','Sal, pimienta, orégano'],
  ['Sazonar pollo con sal, pimienta y orégano.','Hornear a 200Â°C por 35-40 min hasta dorar.','Preparar ensalada con lechuga, pepino y aguacate.','Aderezar con aceite de oliva y limón.','Servir pollo sobre la ensalada.']);
R('Salmón al limón con espárragos',
  ['300g filete de salmón','8 espárragos frescos','2 cdas mantequilla','Zumo de 1 limón','2 dientes de ajo','Sal y pimienta'],
  ['Precalentar horno a 190Â°C.','Colocar salmón en bandeja, sazonar con sal y pimienta.','Rodear con espárragos, ajo y trozos de mantequilla.','Rociar con zumo de limón.','Hornear 18-20 min. Servir con limón fresco.']);
R('Nueces y almendras',
  ['15g nueces','15g almendras','Pizca de sal rosada'],
  ['Mezclar nueces y almendras.','Espolvorear con sal rosada.','Consumir como snack entre comidas.']);
R('Huevos revueltos con aguacate',
  ['3 huevos','60g aguacate en cubos','1 cda mantequilla','Sal y pimienta','Cilantro fresco picado'],
  ['Derretir mantequilla en sartén a fuego bajo.','Batir huevos ligeramente y verter en sartén.','Revolver suavemente hasta cuajar cremosos.','Servir con aguacate en cubos y cilantro.']);
R('Ensalada César con pollo grillado',
  ['300g pechuga de pollo','80g lechuga romana','20g queso parmesano en láminas','2 cdas aceite de oliva','1 cda mayonesa casera','1 diente de ajo'],
  ['Grillar pechuga sazonada 6 min por lado.','Cortar lechuga y colocar en plato.','Preparar aderezo: mayonesa + ajo + aceite.','Cortar pollo en tiras sobre la ensalada.','Agregar parmesano en láminas y aderezar.']);
R('Chuletas de cerdo con brócoli',
  ['300g chuletas de cerdo','100g brócoli','2 cdas mantequilla','2 dientes de ajo','Sal, pimienta, tomillo'],
  ['Sazonar chuletas con sal, pimienta y tomillo.','Sellar en sartén con mantequilla 5 min por lado.','En la misma sartén saltear brócoli con ajo.','Cocinar brócoli 4-5 min hasta tierno.','Servir chuletas con brócoli al lado.']);
R('Queso crema con pepino',
  ['50g pepino en rodajas','30g queso crema','Pizca de sal','Eneldo fresco opcional'],
  ['Cortar pepino en rodajas gruesas.','Untar queso crema sobre cada rodaja.','Sazonar con sal y eneldo.']);
R('Tazón de aguacate con huevo',
  ['1 aguacate mediano','2 huevos','20g queso parmesano','Sal y pimienta','Paprika al gusto'],
  ['Cortar aguacate por la mitad y retirar hueso.','Cascar un huevo en cada mitad.','Espolvorear con parmesano, sal y paprika.','Hornear a 200Â°C por 12-15 min.','Servir caliente.']);
R('Bowl de atún con vegetales',
  ['200g atún fresco','50g pepino','30g tomate cherry','30g aguacate','2 cdas aceite de oliva','Zumo de limón, sal'],
  ['Sellar atún en sartén caliente 2 min por lado.','Cortar en láminas gruesas.','Preparar base con pepino, tomate y aguacate.','Colocar atún encima.','Aderezar con aceite, limón y sal.']);
R('Pollo al ajillo con coliflor',
  ['300g muslo de pollo','150g coliflor','4 dientes de ajo laminados','3 cdas aceite de oliva','Perejil, sal, pimienta'],
  ['Dorar pollo sazonado en aceite 7 min por lado.','Retirar pollo, dorar ajo laminado en el aceite.','Agregar coliflor en arbolitos y saltear 5 min.','Regresar pollo a la sartén.','Espolvorear perejil y servir.']);
R('Mix de semillas tostadas',
  ['10g semillas de girasol','10g semillas de calabaza','5g semillas de sésamo','Pizca de sal'],
  ['Tostar semillas en sartén seca a fuego medio.','Revolver constantemente 3-4 min.','Sazonar con sal.','Dejar enfriar y consumir como snack.']);
R('Frittata de vegetales al horno',
  ['4 huevos','50g champiñones laminados','30g espinaca','30g queso cheddar rallado','1 cda mantequilla','Sal y pimienta'],
  ['Batir huevos con sal y pimienta.','Saltear champiñones y espinaca en mantequilla.','Verter huevos batidos sobre los vegetales.','Espolvorear queso cheddar.','Hornear a 180Â°C por 15 min hasta dorar.']);
R('Wrap de lechuga con carne molida',
  ['250g carne molida de res','4 hojas grandes de lechuga','30g queso parmesano','1 tomate pequeño','Sal, pimienta, comino'],
  ['Cocinar carne molida con especias hasta dorar.','Lavar y secar hojas de lechuga.','Rellenar cada hoja con carne caliente.','Agregar tomate picado y parmesano.','Enrollar y servir como wraps.']);
R('Filete de tilapia con espinaca',
  ['300g tilapia','80g espinaca','2 cdas mantequilla','1 diente de ajo','Zumo de limón','Sal y pimienta'],
  ['Sazonar tilapia con sal, pimienta y limón.','Derretir mantequilla y cocinar tilapia 4 min por lado.','Retirar pescado, saltear espinaca con ajo.','Servir tilapia sobre cama de espinaca.']);
R('Aceitunas y queso mozzarella',
  ['10 aceitunas verdes','40g queso mozzarella en cubos','Orégano seco','Aceite de oliva'],
  ['Combinar aceitunas y cubos de mozzarella.','Rociar con aceite de oliva.','Espolvorear orégano.']);
R('Huevos pochados con tomate',
  ['2 huevos','1 tomate maduro','1 cda aceite de oliva','Sal y pimienta','Albahaca fresca'],
  ['Cortar tomate en rodajas y colocar en plato.','Hervir agua con vinagre, crear remolino.','Deslizar huevos uno a uno, cocinar 3 min.','Colocar huevos sobre tomate.','Aderezar con aceite, sal y albahaca.']);
R('Ensalada mediterránea con atún',
  ['150g atún fresco o natural','60g pepino','30g aceitunas','30g tomate','40g queso feta','Aceite de oliva, orégano'],
  ['Cortar pepino, tomate y aceitunas.','Desmenuzar queso feta.','Mezclar todo en un bowl.','Agregar atún en trozos.','Aderezar con aceite y orégano.']);
R('Brochetas de pollo con pimientos',
  ['300g pechuga de pollo en cubos','1 pimiento rojo','1 cda aceite de oliva','Sal, pimienta, paprika'],
  ['Cortar pollo y pimiento en cubos medianos.','Ensartar alternando en palitos.','Sazonar con aceite, sal y paprika.','Grillar 4-5 min por cada lado.','Servir calientes.']);
R('Apio con mantequilla de almendra',
  ['3 ramas de apio','2 cdas mantequilla de almendra','Pizca de sal'],
  ['Lavar y cortar apio en bastones.','Untar mantequilla de almendra.','Sazonar con sal.']);
R('Pancakes de almendra y coco',
  ['2 huevos','30g harina de almendra','1 cda aceite de coco','1 cda queso crema','Pizca de canela'],
  ['Mezclar huevos, harina, queso crema y canela.','Calentar aceite de coco en sartén.','Verter porciones pequeñas.','Cocinar 2 min por lado.','Servir apilados.']);
R('Sopa de coliflor cremosa',
  ['200g coliflor','30g queso crema','1 cda mantequilla','1 taza caldo de pollo','Sal, pimienta, nuez moscada'],
  ['Cocinar coliflor en caldo hasta suave (15 min).','Licuar con queso crema y mantequilla.','Sazonar con sal, pimienta y nuez moscada.','Servir caliente.']);
R('Bistec con champiñones salteados',
  ['300g bistec de res','100g champiñones laminados','2 cdas mantequilla','2 dientes de ajo','Sal y pimienta'],
  ['Sazonar bistec con sal y pimienta.','Sellar en sartén caliente 4 min por lado.','Retirar y dejar reposar.','En la misma sartén, saltear champiñones con ajo y mantequilla.','Servir bistec con champiñones encima.']);
R('Yogur griego con stevia',
  ['80g yogur griego sin azúcar','5 gotas de stevia líquida','Canela en polvo'],
  ['Servir yogur en un bowl.','Agregar stevia y mezclar.','Espolvorear canela.']);
R('Tortilla de queso y jamón serrano',
  ['3 huevos','30g jamón serrano','30g queso gruyere rallado','1 cda mantequilla','Sal y pimienta'],
  ['Batir huevos con sal y pimienta.','Derretir mantequilla en sartén.','Verter huevos, distribuir jamón y queso.','Cocinar a fuego bajo hasta cuajar.','Doblar y servir dorada.']);
R('Ensalada de camarones y aguacate',
  ['150g camarones','1 aguacate mediano','50g tomate cherry','2 cdas aceite de oliva','Zumo de limón','Cilantro, sal'],
  ['Cocinar camarones en aceite 3 min por lado.','Cortar aguacate en cubos.','Partir tomates cherry por la mitad.','Mezclar todo en un bowl.','Aderezar con limón, cilantro y sal.']);
R('Pollo al curry con arroz de coliflor',
  ['300g muslo de pollo','150g coliflor rallada','2 cdas curry en polvo','3 cdas crema agria','1 cda mantequilla','Sal y pimienta'],
  ['Cortar pollo y sazonar con curry, sal y pimienta.','Dorar en mantequilla 6 min por lado.','Agregar crema agria y cocinar 5 min más.','En otra sartén, saltear coliflor rallada 4 min.','Servir pollo con curry sobre arroz de coliflor.']);
R('Tiras de pepino con guacamole',
  ['1 pepino','1 aguacate maduro','1 tomate pequeño','Zumo de limón','Cilantro, sal, pimienta'],
  ['Cortar pepino en bastones.','Triturar aguacate con tenedor.','Mezclar con tomate picado, limón, cilantro, sal.','Servir pepino con guacamole para dippear.']);

// --- Generic recipes for remaining meals (Ignite W2-W3, Burn, Flow, Peak) ---
// Using a helper to batch-create simpler entries
const genericMeals = [
  // IGNITE W2
  'Revuelto de huevo con chorizo','Pechuga de pollo rellena de queso','Merluza al horno con limón','Palitos de queso manchego',
  'Huevos a la florentina','Ensalada de pollo con nueces','Carne molida con pimientos rellenos','Edamame con sal marina',
  'Tazón verde de aguacate y huevo','Lenguado a la plancha con vegetales','Pollo desmenuzado con guacamole','Rodajas de jícama con limón',
  'Crepes de coco con crema','Sopa de tomate con queso brie','Costillas de cerdo al horno','Mix de frutos secos premium',
  'Omelette de champiñones y queso brie','Poke bowl keto de salmón','Pollo en salsa de mostaza','Chips de queso al horno',
  'Huevos duros con mayonesa de aguacate','Ensalada nicoise sin papas','Lomo de res con coliflor gratinada','Rollitos de pepino y queso crema',
  'Batido proteico de coco y almendra','Alitas de pollo con salsa búfalo keto','Trucha a las finas hierbas','Aceitunas marinadas con ajo',
  // IGNITE W3
  'Tortilla española sin papa','Pollo thai con salsa de maní keto','Camarones al ajillo con zucchini','Deditos de queso con orégano',
  'Huevos en canasta de aguacate','Ensalada de salmón ahumado','Filete de res con mantequilla de hierbas','Pepino con tzatziki keto',
  'Muffins de huevo y espinaca','Wrap de sushi keto con salmón','Pechuga a la parilla con chimichurri','Nueces pecanas tostadas',
  'Revuelto de huevo con salmón ahumado','Burger de res sin pan con aguacate','Atún con ensalada de rúcula','Rollitos de jamón y queso',
  'Smoothie verde proteico','Pollo horneado con brócoli gratinado','Chuleta de cerdo con col morada','Macadamias saladas',
  'Huevos benedictinos con jamón','Ensalada de pollo con aguacate y bacon','Corvina al vapor con vegetales','Apio con queso crema y nueces',
  'Omelette Denver keto','Tacos keto en hojas de lechuga','Pollo al vino tinto con champiñones','Queso gouda con aceitunas',
  // BURN W1-W3 (21 days Ã— 3 meals = 63 names, but many overlap)
  'Huevos revueltos con tocino crujiente','Ensalada de pollo con nueces y gorgonzola','Salmón teriyaki keto con bok choy',
  'Bowl de semillas con leche de coco','Lomo de cerdo con puré de coliflor','Espagueti de zucchini con albóndigas',
  'Omelette de queso feta y espinaca','Ensalada cobb keto clásica','Pollo al horno con costra de almendras',
  'Tazón de aguacate con huevo pochado','Camarones al curry con coliflor','Filete de res con chimichurri verde',
  'Waffles de harina de almendra','Ensalada de atún con alcaparras','Chuletas de cordero con menta',
  'Frittata de tocino y cebollín','Sopa de aguacate fría','Pechuga al limón con espárragos',
  'Huevos a la turca keto','Bowl de pollo con arroz de coliflor','Medallones de res con champiñones portobello',
  'Muffins proteicos de chorizo','Ensalada griega con pollo','Trucha a la plancha con brócoli',
  'Omelette de salmón y alcaparras','Burger de pavo con aguacate','Costillas BBQ keto al horno',
  'Tostadas de aguacate con huevo','Ensalada de langostinos con mango keto','Pollo marroquí con vegetales asados',
  'Batido de proteína verde','Sopa de cheddar con coliflor','Filete de merluza con salsa de eneldo',
  'Pancakes de crema de queso','Tacos de pescado en hoja de lechuga','Lomo de res con espárragos trigueros',
  'Huevos con espinaca a la crema','Ensalada asiática de pollo con sésamo','Camarones al coco con zucchini',
  'Revuelto de huevo con pimientos','Pizza keto de coliflor con mozzarella','Pollo tikka masala keto',
  'Croissant keto de almendra','Ensalada de salmón y rúcula','Cerdo agridulce keto',
  'Huevos con salsa roja keto','Wrap de pavo con queso suizo','Bacalao al pil-pil keto',
  'Granola keto de nueces y coco','Ensalada de pollo con frambuesas','Bistec con salsa de champiñones',
  'Crepes de ricotta con fresas','Bowl de atún y aguacate','Pollo relleno de queso y espinaca',
  'Omelette de queso camembert','Ensalada de langosta keto','Lomo de cerdo con mostaza y hierbas',
  'Huevos turcos con yogur keto','Ensalada de res fría con pepino','Salmón con costra de semillas',
  'Batido proteico de mantequilla de maní','Pollo coreano keto con kimchi','Filete de pez espada con salsa verde',
  // FLOW
  'Ayuno hasta el almuerzo (café bulletproof)','Café bulletproof o té verde','Agua con limón + ayuno activo',
  'Café solo o té negro (sin leche)','Batido verde con proteína vegetal',
  'Omelette de queso y tocino','Ensalada de pollo con aguacate y bacon','Salmón al horno con coliflor',
  'Bowl proteico de atún y huevo','Pollo al limón con vegetales asados','Camarones a la mantequilla de ajo',
  'Ensalada de salmón con espinaca','Pechuga rellena de queso y champiñones',
  'Lomo de cerdo con brócoli','Ensalada de langostinos keto','Pollo thai con fideos de zucchini',
  'Trucha con mantequilla de alcaparras','Burger keto de res doble','Corvina al vapor con jengibre',
  'Ayuno extendido + café bulletproof','Ensalada de pollo con mozzarella','Filete de res con mantequilla de hierbas',
  'Té de jengibre + agua mineral','Sopa cremosa de brócoli y queso','Pollo asiático con brotes de bambú',
  'Smoothie verde con espinaca','Atún con ensalada de aguacate','Costillas de cerdo glaseadas keto',
  'Café con crema de coco','Ensalada de camarones con mango','Chuleta al ajillo con col salteada',
  'Huevos pochados con espárragos','Bowl de salmón con arroz de coliflor','Pollo en salsa de coco y lima',
  'Frittata de vegetales mediterránea','Ensalada de pasta keto con pollo','Tilapia en costra de nueces pecanas',
  'Tazón de aguacate con huevo y salsa','Pollo al pesto con vegetales','Bistec con salsa bordalesa keto',
  'Ayuno 18h â€” café solo','Ensalada completa con huevo y atún',
  'Agua de limón con electrolitos','Wrap keto de pollo con aguacate','Pechuga con salsa de mostaza dijon',
  'Té verde matcha con leche de coco','Bowl de res con ensalada de pepino','Lubina al horno con tomate cherry',
  'Batido de proteína con espinaca','Ensalada de langostinos y rúcula','Pollo al vino con champiñones',
  'Omelette rellena de salmón','Ensalada de aguacate y bacon crujiente','Filete de res con espárragos',
  'Huevos revueltos con queso gruyere','Sopa fría de pepino y menta','Pollo a la naranja keto',
  'Bowl proteico de frutos secos','Pizza keto de pollo con pesto','Camarones al curry rojo con coco',
  // PEAK
  'Ayuno + café bulletproof con MCT','Ensalada de pollo completa con aguacate','Salmón al horno con brócoli',
  'Huevos revueltos + tocino + aguacate','Bowl de atún con huevo y vegetales','Pollo al horno con espárragos',
  'Batido proteico verde con espinaca','Ensalada de res con pepino y limón','Camarones al ajillo con coliflor',
  'Omelette de queso y champiñones','Wrap keto de salmón ahumado','Filete al grill con mantequilla de ajo',
  'Café bulletproof + electrolitos','Pechuga de pollo con pesto y queso','Bistec con ensalada verde',
  'Huevos pochados con espinaca','Ensalada mediterránea con sardinas','Pollo al curry verde con coco',
  'Smoothie proteico de mantequilla de nuez','Bowl de pollo teriyaki keto','Salmón con costra de semillas de sésamo',
];

// Create generic recipe entries for all meals not yet defined
genericMeals.forEach(name => {
  if (!RECETAS[name]) {
    const isAyuno = name.toLowerCase().includes('ayuno') || name.toLowerCase().includes('café bulletproof') || name.toLowerCase().includes('té ');
    if (isAyuno) {
      R(name,
        ['Café negro o té sin azúcar','1 cda aceite MCT (opcional)','1 cda mantequilla de pasto (opcional)','Agua con sal rosada del Himalaya'],
        ['Preparar café o té sin endulzantes.','Opcionalmente agregar MCT y mantequilla (bulletproof).','Beber agua con sal rosada durante la mañana.','Mantener ayuno hasta la siguiente comida.'],
        mealImg('black coffee'));
    } else {
      // Generate contextual ingredients from the meal name
      const base = name.toLowerCase();
      let protein = '300g proteína principal';
      let veg = '100g vegetales verdes';
      if (base.includes('pollo')) protein = '300g muslo de pollo con piel';
      else if (base.includes('salmón')) protein = '300g filete de salmón';
      else if (base.includes('res') || base.includes('bistec') || base.includes('lomo') || base.includes('filete')) protein = '300g corte de res';
      else if (base.includes('cerdo') || base.includes('chuleta') || base.includes('costilla')) protein = '300g corte de cerdo';
      else if (base.includes('atún')) protein = '250g atún fresco';
      else if (base.includes('camarón') || base.includes('langostino')) protein = '250g camarones o langostinos';
      else if (base.includes('trucha') || base.includes('merluza') || base.includes('tilapia') || base.includes('corvina') || base.includes('bacalao') || base.includes('lubina') || base.includes('pez')) protein = '300g filete de pescado';
      else if (base.includes('huevo')) protein = '3-4 huevos';

      if (base.includes('ensalada')) veg = '120g mezcla de lechugas y vegetales';
      else if (base.includes('brócoli')) veg = '100g brócoli';
      else if (base.includes('espárrago')) veg = '80g espárragos';
      else if (base.includes('espinaca')) veg = '80g espinaca fresca';
      else if (base.includes('coliflor')) veg = '150g coliflor';
      else if (base.includes('zucchini')) veg = '120g zucchini';

      R(name,
        [protein, veg, '2 cdas aceite de oliva o mantequilla', '30g queso parmesano', 'Sal, pimienta y especias al gusto', 'Ajo y hierbas frescas'],
        ['Sazonar la proteína con sal, pimienta y especias.', 'Cocinar en aceite o mantequilla hasta dorar bien.', 'Preparar los vegetales al vapor, salteados o frescos.', 'Agregar queso y hierbas para completar.', 'Servir y disfrutar tu comida JhinFitness.'],
        mealImg(name));
    }
  }
});
// ===== MENUS (keep existing structure) =====
const MENUS = {
  ignite: [
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette de espinaca y queso'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pollo asado con ensalada verde'},{tag:'Cena',tc:'tag-cena',n:'Salmón al limón con espárragos'},{tag:'Colación',tc:'tag-colacion',n:'Nueces y almendras'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos revueltos con aguacate'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada César con pollo grillado'},{tag:'Cena',tc:'tag-cena',n:'Chuletas de cerdo con brócoli'},{tag:'Colación',tc:'tag-colacion',n:'Queso crema con pepino'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Tazón de aguacate con huevo'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl de atún con vegetales'},{tag:'Cena',tc:'tag-cena',n:'Pollo al ajillo con coliflor'},{tag:'Colación',tc:'tag-colacion',n:'Mix de semillas tostadas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Frittata de vegetales al horno'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Wrap de lechuga con carne molida'},{tag:'Cena',tc:'tag-cena',n:'Filete de tilapia con espinaca'},{tag:'Colación',tc:'tag-colacion',n:'Aceitunas y queso mozzarella'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos pochados con tomate'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada mediterránea con atún'},{tag:'Cena',tc:'tag-cena',n:'Brochetas de pollo con pimientos'},{tag:'Colación',tc:'tag-colacion',n:'Apio con mantequilla de almendra'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Pancakes de almendra y coco'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Sopa de coliflor cremosa'},{tag:'Cena',tc:'tag-cena',n:'Bistec con champiñones salteados'},{tag:'Colación',tc:'tag-colacion',n:'Yogur griego con stevia'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Tortilla de queso y jamón serrano'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de camarones y aguacate'},{tag:'Cena',tc:'tag-cena',n:'Pollo al curry con arroz de coliflor'},{tag:'Colación',tc:'tag-colacion',n:'Tiras de pepino con guacamole'}]],
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Revuelto de huevo con chorizo'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pechuga de pollo rellena de queso'},{tag:'Cena',tc:'tag-cena',n:'Merluza al horno con limón'},{tag:'Colación',tc:'tag-colacion',n:'Palitos de queso manchego'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos a la florentina'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pollo con nueces'},{tag:'Cena',tc:'tag-cena',n:'Carne molida con pimientos rellenos'},{tag:'Colación',tc:'tag-colacion',n:'Edamame con sal marina'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Tazón verde de aguacate y huevo'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Lenguado a la plancha con vegetales'},{tag:'Cena',tc:'tag-cena',n:'Pollo desmenuzado con guacamole'},{tag:'Colación',tc:'tag-colacion',n:'Rodajas de jícama con limón'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Crepes de coco con crema'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Sopa de tomate con queso brie'},{tag:'Cena',tc:'tag-cena',n:'Costillas de cerdo al horno'},{tag:'Colación',tc:'tag-colacion',n:'Mix de frutos secos premium'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette de champiñones y queso brie'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Poke bowl keto de salmón'},{tag:'Cena',tc:'tag-cena',n:'Pollo en salsa de mostaza'},{tag:'Colación',tc:'tag-colacion',n:'Chips de queso al horno'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos duros con mayonesa de aguacate'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada nicoise sin papas'},{tag:'Cena',tc:'tag-cena',n:'Lomo de res con coliflor gratinada'},{tag:'Colación',tc:'tag-colacion',n:'Rollitos de pepino y queso crema'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Batido proteico de coco y almendra'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Alitas de pollo con salsa búfalo keto'},{tag:'Cena',tc:'tag-cena',n:'Trucha a las finas hierbas'},{tag:'Colación',tc:'tag-colacion',n:'Aceitunas marinadas con ajo'}]],
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Tortilla española sin papa'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pollo thai con salsa de maní keto'},{tag:'Cena',tc:'tag-cena',n:'Camarones al ajillo con zucchini'},{tag:'Colación',tc:'tag-colacion',n:'Deditos de queso con orégano'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos en canasta de aguacate'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de salmón ahumado'},{tag:'Cena',tc:'tag-cena',n:'Filete de res con mantequilla de hierbas'},{tag:'Colación',tc:'tag-colacion',n:'Pepino con tzatziki keto'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Muffins de huevo y espinaca'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Wrap de sushi keto con salmón'},{tag:'Cena',tc:'tag-cena',n:'Pechuga a la parilla con chimichurri'},{tag:'Colación',tc:'tag-colacion',n:'Nueces pecanas tostadas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Revuelto de huevo con salmón ahumado'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Burger de res sin pan con aguacate'},{tag:'Cena',tc:'tag-cena',n:'Atún con ensalada de rúcula'},{tag:'Colación',tc:'tag-colacion',n:'Rollitos de jamón y queso'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Smoothie verde proteico'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pollo horneado con brócoli gratinado'},{tag:'Cena',tc:'tag-cena',n:'Chuleta de cerdo con col morada'},{tag:'Colación',tc:'tag-colacion',n:'Macadamias saladas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos benedictinos con jamón'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pollo con aguacate y bacon'},{tag:'Cena',tc:'tag-cena',n:'Corvina al vapor con vegetales'},{tag:'Colación',tc:'tag-colacion',n:'Apio con queso crema y nueces'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette Denver keto'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Tacos keto en hojas de lechuga'},{tag:'Cena',tc:'tag-cena',n:'Pollo al vino tinto con champiñones'},{tag:'Colación',tc:'tag-colacion',n:'Queso gouda con aceitunas'}]]
  ],
  burn: [
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos revueltos con tocino crujiente'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pollo con nueces y gorgonzola'},{tag:'Cena',tc:'tag-cena',n:'Salmón teriyaki keto con bok choy'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Bowl de semillas con leche de coco'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Lomo de cerdo con puré de coliflor'},{tag:'Cena',tc:'tag-cena',n:'Espagueti de zucchini con albóndigas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette de queso feta y espinaca'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada cobb keto clásica'},{tag:'Cena',tc:'tag-cena',n:'Pollo al horno con costra de almendras'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Tazón de aguacate con huevo pochado'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Camarones al curry con coliflor'},{tag:'Cena',tc:'tag-cena',n:'Filete de res con chimichurri verde'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Waffles de harina de almendra'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de atún con alcaparras'},{tag:'Cena',tc:'tag-cena',n:'Chuletas de cordero con menta'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Frittata de tocino y cebollín'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Sopa de aguacate fría'},{tag:'Cena',tc:'tag-cena',n:'Pechuga al limón con espárragos'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos a la turca keto'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl de pollo con arroz de coliflor'},{tag:'Cena',tc:'tag-cena',n:'Medallones de res con champiñones portobello'}]],
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Muffins proteicos de chorizo'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada griega con pollo'},{tag:'Cena',tc:'tag-cena',n:'Trucha a la plancha con brócoli'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette de salmón y alcaparras'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Burger de pavo con aguacate'},{tag:'Cena',tc:'tag-cena',n:'Costillas BBQ keto al horno'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Tostadas de aguacate con huevo'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de langostinos con mango keto'},{tag:'Cena',tc:'tag-cena',n:'Pollo marroquí con vegetales asados'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Batido de proteína verde'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Sopa de cheddar con coliflor'},{tag:'Cena',tc:'tag-cena',n:'Filete de merluza con salsa de eneldo'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Pancakes de crema de queso'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Tacos de pescado en hoja de lechuga'},{tag:'Cena',tc:'tag-cena',n:'Lomo de res con espárragos trigueros'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos con espinaca a la crema'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada asiática de pollo con sésamo'},{tag:'Cena',tc:'tag-cena',n:'Camarones al coco con zucchini'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Revuelto de huevo con pimientos'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pizza keto de coliflor con mozzarella'},{tag:'Cena',tc:'tag-cena',n:'Pollo tikka masala keto'}]],
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Croissant keto de almendra'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de salmón y rúcula'},{tag:'Cena',tc:'tag-cena',n:'Cerdo agridulce keto'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos con salsa roja keto'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Wrap de pavo con queso suizo'},{tag:'Cena',tc:'tag-cena',n:'Bacalao al pil-pil keto'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Granola keto de nueces y coco'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pollo con frambuesas'},{tag:'Cena',tc:'tag-cena',n:'Bistec con salsa de champiñones'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Crepes de ricotta con fresas'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl de atún y aguacate'},{tag:'Cena',tc:'tag-cena',n:'Pollo relleno de queso y espinaca'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette de queso camembert'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de langosta keto'},{tag:'Cena',tc:'tag-cena',n:'Lomo de cerdo con mostaza y hierbas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos turcos con yogur keto'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de res fría con pepino'},{tag:'Cena',tc:'tag-cena',n:'Salmón con costra de semillas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Batido proteico de mantequilla de maní'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pollo coreano keto con kimchi'},{tag:'Cena',tc:'tag-cena',n:'Filete de pez espada con salsa verde'}]]
  ],
  flow: [
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Ayuno hasta el almuerzo (café bulletproof)'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pollo con aguacate y bacon'},{tag:'Cena',tc:'tag-cena',n:'Salmón al horno con coliflor'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Café bulletproof o té verde'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl proteico de atún y huevo'},{tag:'Cena',tc:'tag-cena',n:'Pollo al limón con vegetales asados'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Agua con limón + ayuno activo'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Medallones de res con ensalada verde'},{tag:'Cena',tc:'tag-cena',n:'Camarones a la mantequilla de ajo'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Café solo o té negro (sin leche)'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de salmón con espinaca'},{tag:'Cena',tc:'tag-cena',n:'Pechuga rellena de queso y champiñones'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Batido verde con proteína vegetal'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Lomo de cerdo con brócoli'},{tag:'Cena',tc:'tag-cena',n:'Ensalada de langostinos keto'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos revueltos con aguacate'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pollo thai con fideos de zucchini'},{tag:'Cena',tc:'tag-cena',n:'Trucha con mantequilla de alcaparras'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette de queso y tocino'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Burger keto de res doble'},{tag:'Cena',tc:'tag-cena',n:'Corvina al vapor con jengibre'}]],
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Ayuno extendido + café bulletproof'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pollo con mozzarella'},{tag:'Cena',tc:'tag-cena',n:'Filete de res con mantequilla de hierbas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Té de jengibre + agua mineral'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Sopa cremosa de brócoli y queso'},{tag:'Cena',tc:'tag-cena',n:'Pollo asiático con brotes de bambú'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Smoothie verde con espinaca'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Atún con ensalada de aguacate'},{tag:'Cena',tc:'tag-cena',n:'Costillas de cerdo glaseadas keto'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Café con crema de coco'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de camarones con mango'},{tag:'Cena',tc:'tag-cena',n:'Chuleta al ajillo con col salteada'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos pochados con espárragos'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl de salmón con arroz de coliflor'},{tag:'Cena',tc:'tag-cena',n:'Pollo en salsa de coco y lima'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Frittata de vegetales mediterránea'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pasta keto con pollo'},{tag:'Cena',tc:'tag-cena',n:'Tilapia en costra de nueces pecanas'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Tazón de aguacate con huevo y salsa'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pollo al pesto con vegetales'},{tag:'Cena',tc:'tag-cena',n:'Bistec con salsa bordalesa keto'}]],
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Ayuno 18h â€” café solo'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada completa con huevo y atún'},{tag:'Cena',tc:'tag-cena',n:'Salmón teriyaki keto con bok choy'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Agua de limón con electrolitos'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Wrap keto de pollo con aguacate'},{tag:'Cena',tc:'tag-cena',n:'Pechuga con salsa de mostaza dijon'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Té verde matcha con leche de coco'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl de res con ensalada de pepino'},{tag:'Cena',tc:'tag-cena',n:'Lubina al horno con tomate cherry'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Batido de proteína con espinaca'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de langostinos y rúcula'},{tag:'Cena',tc:'tag-cena',n:'Pollo al vino con champiñones'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette rellena de salmón'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de aguacate y bacon crujiente'},{tag:'Cena',tc:'tag-cena',n:'Filete de res con espárragos'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos revueltos con queso gruyere'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Sopa fría de pepino y menta'},{tag:'Cena',tc:'tag-cena',n:'Pollo a la naranja keto'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Bowl proteico de frutos secos'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pizza keto de pollo con pesto'},{tag:'Cena',tc:'tag-cena',n:'Camarones al curry rojo con coco'}]]
  ],
  peak: [
    [[{tag:'Desayuno',tc:'tag-desayuno',n:'Ayuno + café bulletproof con MCT'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de pollo completa con aguacate'},{tag:'Cena',tc:'tag-cena',n:'Salmón al horno con brócoli'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos revueltos + tocino + aguacate'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl de atún con huevo y vegetales'},{tag:'Cena',tc:'tag-cena',n:'Pollo al horno con espárragos'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Batido proteico verde con espinaca'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada de res con pepino y limón'},{tag:'Cena',tc:'tag-cena',n:'Camarones al ajillo con coliflor'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Omelette de queso y champiñones'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Wrap keto de salmón ahumado'},{tag:'Cena',tc:'tag-cena',n:'Filete al grill con mantequilla de ajo'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Café bulletproof + electrolitos'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Pechuga de pollo con pesto y queso'},{tag:'Cena',tc:'tag-cena',n:'Bistec con ensalada verde'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Huevos pochados con espinaca'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Ensalada mediterránea con sardinas'},{tag:'Cena',tc:'tag-cena',n:'Pollo al curry verde con coco'}],
     [{tag:'Desayuno',tc:'tag-desayuno',n:'Smoothie proteico de mantequilla de nuez'},{tag:'Almuerzo',tc:'tag-almuerzo',n:'Bowl de pollo teriyaki keto'},{tag:'Cena',tc:'tag-cena',n:'Salmón con costra de semillas de sésamo'}]]
  ]
};
// Convert old format: MENUS uses nested arrays [[day1meals, day2meals...], [week2...]]
// Each day is an array of meal objects. Wrap in {d:[...]} for compat
Object.keys(MENUS).forEach(phase => {
  MENUS[phase] = MENUS[phase].map(week => week.map(day => ({d: day})));
});
// ===== EXTRAS & INFO =====
const EXTRAS = {
  salsitas:{title:'Salsitas Keto',items:[
    {name:'Alioli de Ajo',desc:'Salsa cremosa de ajo ideal para acompañar carnes y verduras.'},
    {name:'Guacamole Clásico',desc:'Aguacate, limón, cilantro y sal. Perfecta para cualquier comida.'},
    {name:'Mayonesa Casera',desc:'Sin azúcar añadida, hecha en casa en 5 minutos.'},
    {name:'Salsa Chimichurri',desc:'Perejil, ajo, aceite de oliva. Para carnes a la parrilla.'},
    {name:'Crema de Aguacate con Jalapeño',desc:'Con un toque picante para darle vida a tus platos.'},
    {name:'Tzatziki Keto',desc:'Yogur griego, pepino, ajo. Refrescante y baja en carbohidratos.'}]},
  bebidas:{title:'Bebidas Keto',items:[
    {name:'Café Bulletproof',desc:'Café + mantequilla de pasto + MCT oil. Energía sostenida por horas.'},
    {name:'Agua de Coco sin Azúcar',desc:'Electrolitos naturales para mantenerte hidratado.'},
    {name:'Limonada con Stevia',desc:'Refrescante y sin azúcar. Ideal para cualquier momento del día.'},
    {name:'Té Verde con Jengibre',desc:'Potencia la quema de grasa y tiene propiedades antiinflamatorias.'},
    {name:'Smoothie Verde Keto',desc:'Espinaca, aguacate, pepino, limón y agua. Bajo en carbos.'},
    {name:'Leche Dorada (Golden Milk)',desc:'Leche de coco con cúrcuma, canela y pimienta negra.'}]},
  snacks:{title:'Snacks Keto',items:[
    {name:'Mix de Nueces',desc:'Almendras, nueces pecanas y macadamias. Grasa saludable y proteína.'},
    {name:'Queso Crujiente al Horno',desc:'Chips de queso horneados. Cero carbohidratos.'},
    {name:'Palitos de Apio con Mantequilla de Almendra',desc:'Crujiente, saciante y rico en fibra.'},
    {name:'Aceitunas Marinadas',desc:'Aceitunas con hierbas y aceite de oliva. Snack perfecto.'},
    {name:'Huevo Duro con Sal y Pimienta',desc:'La proteína perfecta siempre a la mano.'},
    {name:'Pepino con Crema de Aguacate',desc:'Refrescante y bajo en carbohidratos.'}]}
};
const INFO = {
  tutoriales:{title:'Tutoriales',items:[
    {name:'Cómo empezar el Método JhinFitness',desc:'Guía paso a paso para comenzar correctamente tu primera fase.'},
    {name:'Entendiendo la cetosis',desc:'Qué es, cómo alcanzarla y cómo saber si estás en ella.'},
    {name:'Midiendo correctamente tus resultados',desc:'Aprende a tomar medidas y registrar tu progreso.'},
    {name:'Ayuno intermitente básico',desc:'Introducción al ayuno y cómo combinarlo con la fase Flow.'}]},
  biblioteca:{title:'Biblioteca',items:[
    {name:'Guía de Alimentos Keto',desc:'Lista completa de alimentos permitidos y prohibidos.'},
    {name:'Recetario JhinFitness Completo',desc:'Más de 70 recetas keto para todas las fases.'},
    {name:'Manual del Método JhinFitness',desc:'El libro oficial sobre el método de nutrición saludable.'},
    {name:'Plan de ejercicio complementario',desc:'Rutinas diseñadas para potenciar la pérdida de grasa.'}]}
};

// ===== HISTORIAS (Testimonials) =====
const HISTORIAS = [
  {name:'María López',result:'Perdió 18 kg en 4 meses',quote:'JhinFitness cambió mi vida. Aprendí a comer para sanar y los resultados llegaron solos.',img:'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop'},
  {name:'Carlos Ramírez',result:'Perdió 25 kg en 6 meses',quote:'Nunca pensé que comer bien pudiera ser tan delicioso. Las recetas son increíbles.',img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop'},
  {name:'Ana García',result:'Perdió 12 kg en 3 meses',quote:'Lo mejor fue dejar la adicción al azúcar. Me siento con más energía que nunca.',img:'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop'},
  {name:'Roberto Mendoza',result:'Perdió 30 kg en 8 meses',quote:'Empecé por salud y ahora es mi estilo de vida. No hay vuelta atrás.',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop'},
  {name:'Laura Torres',result:'Perdió 15 kg en 4 meses',quote:'Las fases están perfectamente diseñadas. Cada semana veía cambios.',img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'},
  {name:'Diego Hernández',result:'Perdió 20 kg en 5 meses',quote:'La comunidad me motivó en los momentos difíciles. Juntos es más fácil.',img:'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop'},
];

// ===== COMUNIDAD =====
const COMUNIDAD = [
  {icon:'<i class="fab fa-facebook-f" style="color:#1877f2"></i>',title:'Grupo de Facebook',desc:'Ãšnete a nuestro grupo privado con miles de miembros compartiendo recetas y resultados.',url:'https://www.facebook.com/groups/jhinfitness'},
  {icon:'<i class="fab fa-whatsapp" style="color:#25d366"></i>',title:'Grupo de WhatsApp',desc:'Recibe tips diarios, motivación y resuelve tus dudas en tiempo real.',url:'https://wa.me/573159185650'},
  {icon:'<i class="fab fa-instagram" style="color:#e4405f"></i>',title:'Instagram',desc:'Síguenos para recetas en video, tips rápidos y transformaciones inspiradoras.',url:'https://www.instagram.com/jhinfitness'},
  {icon:'<i class="fab fa-youtube" style="color:#ff0000"></i>',title:'Canal de YouTube',desc:'Tutoriales completos, explicaciones de las fases y mucho más.',url:'https://www.youtube.com/@jhinfitness'},
];

// ===== STATE =====
let currentPhase = null, currentWeek = 1, currentDay = 1, currentSection = 'dashboard';

// ===== NAVIGATION =====
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('section-' + id);
  if (el) { el.classList.remove('active'); void el.offsetWidth; el.classList.add('active'); }
  currentSection = id;
}
function switchToDKP() { showSection('metodo-dkp'); setActiveNavLink('metodo-dkp'); }
function backToPhases() { showSection('metodo-dkp'); }
function backToMenu() { showSection('phase-detail'); }

// ===== PHASE DETAIL =====
function openPhaseDetail(phaseKey) {
  currentPhase = phaseKey; currentWeek = 1; currentDay = 1;
  const phase = PHASES[phaseKey];
  document.getElementById('phase-detail-badge').textContent = phase.badge;
  document.getElementById('phase-detail-title').textContent = phase.name;
  document.getElementById('btn-download-secrets').href = phase.secretsUrl;
  document.getElementById('btn-download-secrets').onclick = e => { e.preventDefault(); window.open(phase.secretsUrl); };
  document.getElementById('btn-download-foods').href = phase.foodsUrl;
  document.getElementById('btn-download-foods').onclick = e => { e.preventDefault(); window.open(phase.foodsUrl); };
  renderWeekTabs(phase.weeks);
  renderDaySelector(7);
  renderDailyMenu();
  showSection('phase-detail');
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  const sl = document.getElementById('link-' + phaseKey);
  if (sl) sl.classList.add('active');
}

function renderWeekTabs(total) {
  const c = document.getElementById('week-tabs'); c.innerHTML = '';
  for (let i = 1; i <= total; i++) {
    const btn = document.createElement('button');
    btn.className = 'week-tab' + (i === 1 ? ' active' : '');
    btn.textContent = 'Semana ' + i;
    btn.onclick = () => selectWeek(i, btn);
    c.appendChild(btn);
  }
  const dl = document.createElement('a');
  dl.className = 'btn btn-outline-sm'; dl.style.marginLeft = 'auto';
  dl.innerHTML = '<i class="fas fa-list"></i> Lista de alimentos';
  const phase = PHASES[currentPhase];
  dl.onclick = e => { e.preventDefault(); window.open(phase.weekFoods[currentWeek-1]); };
  c.appendChild(dl);
}

function selectWeek(n, btn) {
  currentWeek = n; currentDay = 1;
  document.querySelectorAll('.week-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderDaySelector(7); renderDailyMenu();
}

function renderDaySelector(days) {
  const c = document.getElementById('day-selector'); c.innerHTML = '';
  for (let i = 1; i <= days; i++) {
    const btn = document.createElement('button');
    btn.className = 'day-btn' + (i === currentDay ? ' active' : '');
    btn.textContent = 'Día ' + i;
    btn.onclick = () => { currentDay = i; document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderDailyMenu(); };
    c.appendChild(btn);
  }
}

function renderDailyMenu() {
  const c = document.getElementById('daily-menu'); c.innerHTML = '';
  const weekData = MENUS[currentPhase]?.[currentWeek - 1];
  const dayData = weekData?.[currentDay - 1]?.d || [];
  const h = document.createElement('div');
  h.style.cssText = 'grid-column:1/-1;font-family:Barlow Condensed,sans-serif;font-size:20px;font-weight:800;color:var(--text);margin-bottom:4px;';
  h.innerHTML = `Menú <span style="color:var(--green);">Día ${currentDay}</span>`;
  c.appendChild(h);
  if (!dayData.length) { const e = document.createElement('div'); e.style.cssText = 'grid-column:1/-1;color:var(--text-soft);font-size:14px;padding:20px 0;'; e.textContent = 'Contenido en preparación...'; c.appendChild(e); return; }
  dayData.forEach(meal => {
    const card = document.createElement('div'); card.className = 'meal-card';
    const recipe = RECETAS[meal.n];
    const imgHtml = recipe?.img ? `<img class="meal-img" src="${recipe.img}" alt="${meal.n}" loading="lazy" onerror="this.style.display='none'">` : '';
    card.innerHTML = `<span class="meal-tag ${meal.tc}">${meal.tag}</span>${imgHtml}<div class="meal-body"><div class="meal-name">${meal.n}</div></div>`;
    card.onclick = () => openRecipe(meal.n);
    c.appendChild(card);
  });
}

// ===== RECIPE =====
function openRecipe(name) {
  const r = RECETAS[name] || {ingredients:['Ingredientes en preparación'],steps:['Preparación en preparación'],img:''};
  document.getElementById('recipe-title').textContent = name;
  const ingList = document.getElementById('ingredients-list');
  ingList.innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
  const stepsList = document.getElementById('steps-list');
  stepsList.innerHTML = r.steps.map(s => `<li>${s}</li>`).join('');
  showSection('recipe-detail');
}

// ===== EXTRAS =====
function showExtras(key) {
  const data = EXTRAS[key];
  document.getElementById('extras-title').textContent = data.title;
  document.getElementById('extras-grid').innerHTML = data.items.map(item => `<div class="extra-card"><div class="extra-card-title">${item.name}</div><div class="extra-card-desc">${item.desc}</div></div>`).join('');
  showSection('extras'); setSidebarActive(null);
}

// ===== INFO =====
function showInfo(key) {
  const data = INFO[key];
  document.getElementById('info-title').textContent = data.title;
  document.getElementById('info-grid').innerHTML = data.items.map(item => `<div class="info-card"><div class="info-card-title">${item.name}</div><div class="info-card-desc">${item.desc}</div></div>`).join('');
  showSection('info'); setSidebarActive(null);
}

// ===== HISTORIAS =====
function renderHistorias() {
  const grid = document.getElementById('historias-grid');
  if (!grid) return;
  grid.innerHTML = HISTORIAS.map(h => `<div class="historia-card">
    <img class="historia-img" src="${h.img}" alt="${h.name}" loading="lazy" onerror="this.style.display='none'">
    <div class="historia-body">
      <div class="historia-name">${h.name}</div>
      <div class="historia-result"><i class="fas fa-chart-line"></i> ${h.result}</div>
      <div class="historia-quote">"${h.quote}"</div>
    </div></div>`).join('');
}

// ===== COMUNIDAD =====
function renderComunidad() {
  const grid = document.getElementById('comunidad-grid');
  if (!grid) return;
  grid.innerHTML = COMUNIDAD.map(c => `<a class="comunidad-card" href="${c.url}" target="_blank">
    <div class="comunidad-icon">${c.icon}</div>
    <div class="comunidad-title">${c.title}</div>
    <div class="comunidad-desc">${c.desc}</div></a>`).join('');
}

// ===== ADMIN PANEL (Firebase Integration) =====
async function getUsers() {
  try {
    const snapshot = await db.collection('users').orderBy('createdAt', 'desc').get();
    const users = [];
    snapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
// saveUsers is no longer needed with Firestore

async function renderAdminTable() {
  const table = document.getElementById('admin-table');
  if (!table) return;
  table.innerHTML = '<div style="padding:20px;text-align:center;color:#fff;"><i class="fas fa-spinner fa-spin"></i> Cargando usuarios...</div>';
  
  const users = await getUsers();
  
  table.innerHTML = `<thead><tr><th>Usuario / Email</th><th>Nombre Completo</th><th>Celular</th><th>Acciones</th></tr></thead>
  <tbody>${users.map((u,i) => {
    // Generar mensaje de WhatsApp
    const waMsg = encodeURIComponent(`¡Hola ${u.name}! 👋 Bienvenido a JhinFitness. Tu cuenta ha sido creada con éxito.\n\n🔗 Accede aquí: https://jhinfitness.vercel.app/\n✉️ Email: ${u.username}\n🔑 Contraseña: ${u.tempPassword || '******'}\n\n¡Comencemos tu transformación!`);
    const waLink = u.phone ? `https://wa.me/${u.phone.replace(/\D/g, '')}?text=${waMsg}` : '#';
    
    return `<tr>
    <td>${u.username}</td><td>${u.name} ${u.lastName || ''}</td><td>${u.phone || 'N/A'}</td>
    <td style="display:flex;gap:8px;">
      ${u.phone ? `<a href="${waLink}" target="_blank" class="btn-sm" style="background:#25d366;color:#fff;text-decoration:none;" title="Enviar credenciales por WhatsApp"><i class="fab fa-whatsapp"></i></a>` : ''}
      <button class="btn-sm btn-danger" onclick="deleteUser('${u.id}', '${u.username}')" title="Eliminar"><i class="fas fa-trash"></i></button>
    </td>
  </tr>`}).join('')}</tbody>`;
}

function showAddUserForm() {
  const form = document.getElementById('admin-form');
  form.style.display = 'block';
  form.innerHTML = `<h3 style="margin-bottom:16px;font-family:Barlow Condensed,sans-serif">Nuevo Usuario</h3>
  <div class="form-row">
    <div><label>Nombre</label><input id="new-name" placeholder="Ej: Carlos"></div>
    <div><label>Apellidos</label><input id="new-lastname" placeholder="Ej: Ramírez"></div>
  </div>
  <div class="form-row">
    <div><label>Email (Usuario)</label><input id="new-username" type="email" placeholder="carlos@email.com"></div>
    <div><label>Número de Celular</label><input id="new-phone" type="tel" placeholder="+57 300 000 0000"></div>
  </div>
  <div class="form-row">
    <div><label>Contraseña</label><input id="new-password" type="text" placeholder="Contraseña temporal"></div>
    <div><label>Rol</label><select id="new-role"><option value="user">Cliente</option><option value="admin">Administrador</option></select></div>
  </div>
  <div style="display:flex;gap:8px;margin-top:8px">
    <button class="btn btn-green" onclick="addUser()"><i class="fas fa-plus"></i> Crear Usuario</button>
    <button class="btn btn-outline-sm" onclick="document.getElementById('admin-form').style.display='none'">Cancelar</button>
  </div>`;
}

async function addUser() {
  const u = document.getElementById('new-username').value.trim().toLowerCase();
  const n = document.getElementById('new-name').value.trim();
  const ln = document.getElementById('new-lastname').value.trim();
  const ph = document.getElementById('new-phone').value.trim();
  const p = document.getElementById('new-password').value;
  const r = document.getElementById('new-role').value;
  
  if (!u || !n || !p) return showToast('El email, nombre y contraseña son obligatorios', 'error');
  
  showToast('Creando usuario...', 'info');
  
  try {
    // Para crear un usuario sin desloguear al admin, usamos una app secundaria
    const secondaryApp = firebase.initializeApp(firebaseConfig, "Secondary");
    const cred = await secondaryApp.auth().createUserWithEmailAndPassword(u, p);
    await secondaryApp.auth().signOut();
    secondaryApp.delete(); // Limpiar app secundaria
    
    // Guardar los datos en Firestore
    await db.collection('users').doc(cred.user.uid).set({
      username: u,
      name: n,
      lastName: ln,
      phone: ph,
      role: r,
      tempPassword: p, // Guardado temporalmente para el botón de WhatsApp
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    document.getElementById('admin-form').style.display = 'none';
    showToast('Usuario creado exitosamente', 'success');
    renderAdminTable();
  } catch (error) {
    console.error(error);
    if (error.code === 'auth/email-already-in-use') {
      showToast('Este email ya está registrado', 'error');
    } else {
      showToast('Error al crear usuario', 'error');
    }
  }
}

async function deleteUser(uid, username) {
  if (!confirm(`¿Estás seguro de eliminar a ${username}?`)) return;
  try {
    // Nota: Eliminar de Firestore impide que vean sus datos y UI, pero no borra la cuenta Auth.
    // Para borrar la cuenta Auth se requiere el Admin SDK (Node.js backend).
    await db.collection('users').doc(uid).delete();
    showToast(`Usuario ${username} eliminado`, 'success');
    renderAdminTable();
  } catch(e) {
    showToast('Error al eliminar', 'error');
  }
}

// ===== TOAST NOTIFICATIONS =====
function showToast(msg, type='info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:12px;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const bg = type === 'error' ? 'oklch(55% 0.2 25)' : type === 'success' ? 'var(--green)' : 'var(--navy)';
  toast.style.cssText = `background:${bg};color:#fff;padding:12px 20px;border-radius:var(--radius-sm);box-shadow:var(--shadow-md);font-size:13px;font-weight:600;font-family:'Figtree',sans-serif;transform:translateY(20px);opacity:0;transition:all 0.3s cubic-bezier(0.22,1,0.36,1);display:flex;align-items:center;gap:8px;`;
  const icon = type === 'error' ? 'fa-exclamation-circle' : type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
  container.appendChild(toast);
  
  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });
  
  setTimeout(() => {
    toast.style.transform = 'translateY(10px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== SIDEBAR / NAV HELPERS =====
function showPhase(key) { openPhaseDetail(key); }
function setSidebarActive(key) {
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  if (key) { const el = document.getElementById('link-' + key); if (el) el.classList.add('active'); }
}
function setActiveNavLink(section) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const el = document.querySelector(`[data-section="${section}"]`);
  if (el) el.classList.add('active');
}

function initNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('topnav-links');
  const sidebar = document.getElementById('sidebar');
  hamburger.addEventListener('click', () => { navLinks.classList.toggle('open'); sidebar.classList.toggle('open'); });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.dataset.section;
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navLinks.classList.remove('open');
      if (section === 'dashboard') showSection('dashboard');
      else if (section === 'metodo-jhin') showSection('metodo-dkp');
      else if (section === 'historias') showSection('historias');
      else if (section === 'comunidad') showSection('comunidad');
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const session = AUTH.requireAuth();
  if (!session) return;
  // Sync localStorage users with AUTH
  const stored = JSON.parse(localStorage.getItem(USERS_KEY) || 'null');
  if (stored) AUTH.users = stored;
  const greetEl = document.getElementById('user-greeting');
  if (greetEl) greetEl.textContent = `Hola, ${session.name} ðŸ‘‹`;
  initNav();
  renderHistorias();
  renderComunidad();
  // Show admin link if admin
  if (session.role === 'admin') {
    const sidebar = document.querySelector('.sidebar-inner');
    if (sidebar) {
      const sec = document.createElement('div'); sec.className = 'sidebar-section';
      sec.innerHTML = `<div class="sidebar-heading">Admin</div><ul class="sidebar-menu"><li><a href="#" class="sidebar-link" onclick="showSection('admin');renderAdminTable();return false;"><i class="fas fa-cog"></i><span>Panel Admin</span></a></li></ul>`;
      sidebar.appendChild(sec);
    }
  }
  showSection('dashboard');
  document.querySelectorAll('.sidebar-link[onclick]').forEach(l => {
    l.addEventListener('click', () => { document.querySelectorAll('.sidebar-link').forEach(x => x.classList.remove('active')); l.classList.add('active'); });
  });
});
