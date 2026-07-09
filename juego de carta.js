// ==========================================================================
// BASE DE DATOS MÁXIMA DE RETOS ÚNICOS (MÁS DE 50 POR CATEGORÍA)
// ==========================================================================
const baseDeCartas = {
    "Fácil": [
        { texto: "¿Si tuvieras que besarte con alguien del grupo con quién lo harías?", efecto: "Pregunta 🔮" },
        { texto: "Colócate en una posición que harías con la persona que está de frente.", efecto: "Reto 👁️" },
        { texto: "¿Alguna vez has tenido que decir una mentira para salir de un lugar? Di cuándo y por qué.", efecto: "Pregunta 🔄" },
        { texto: "Dale un masaje en los pies a la persona que tenga alado o frente de ti.", efecto: "Reto 🪞" },
        { texto: "Quién es la persona que ahora mismo te llama la atención? Di su nombre o harás un Reto Extremo.", efecto: "Pregunta 🗿" },
        { texto: "Colócale la mano en la pierna a la persona más cercana hasta que salga un nuevo reto.", efecto: "Reto 🎈" },
        { texto: "Elige: ¿A quién de este grupo matarías y con quién te casarías?", efecto: "Pregunta 🗺️" },
        { texto: "Muestra algo al grupo o dile algo, que no sepamos de ti.", efecto: "Reto 📜" },
        { texto: "¿Quién consideras que es la persona menos bonit@ en esta sala hoy?", efecto: "Pregunta 👍" },
        { texto: "Debes arrodillarte hasta que una persona del grupo te dé una cachetada o palmada.", efecto: "Reto ✍️" },
        { texto: "¿A quién le has dedicado una indirecta para que esa persona la vea? Di el nombre o haz un reto extremo.", efecto: "Pregunta 🎵" },
        { texto: "Tómate una foto con la persona que el grupo desee y publícala en tu history con un emoji.", efecto: "Reto 💞" },
        { texto: "¿Has robado alguna vez? Di el cuándo y el por qué.", efecto: "Pregunta 💰" },
        { texto: "Quitale el numero de telefono a la persona que quiera en el grupo y llama a ese contacto almenos por 1 minuto.", efecto: "Reto 😐" },
        { texto: "¿Le has hecho daño a una persona que gustaba de ti? Di su nombre y cómo fue.", efecto: "Pregunta 😬" },
        { texto: "Tómate una foto de tu mano junto a la de alguien del grupo, colócala en tu historia de forma anónima por 24 horas.", efecto: "Reto 🐾" },
        { texto: "Hablando de tus relaciones: cuéntale al grupo cuál fue tu ultima historia de amor.", efecto: "Pregunta 🏷️" },
        { texto: "Llama a tu ex y dile que querías saber cómo está. Si no responde, el reto termina; si no te atreves, elige carta Extrema.", efecto: "Reto 🚫" },
        { texto: "¿Cuál ha sido tu momento más 'migajero' o en el que más hayas rogado amor?", efecto: "Pregunta 👏" },
        { texto: "Dile una verdad incómoda que creas real a alguien de la sala de juego.", efecto: "Reto 😡" },
        { texto: "¿Le darías un beso ahora mismo a alguien de este grupo?", efecto: "Pregunta 🦒" },
        { texto: "Dale un beso tierno en la mejilla a la persona que tienes al lado.", efecto: "Reto 👻" },
        { texto: "¿Qué prefieres: morir rico pero sin tener relaciones toda tu vida, o ser pobre y tenerlas cada vez que desees?", efecto: "Pregunta 👴" },
        { texto: "Susúrrale al oído a la persona que desees qué es lo que más te gusta de ella, luego el grupo debe adivinar qué dijiste.", efecto: "Reto 🗣️" },
        { texto: "¿Has criticado o hablado a las espaldas de alguien de esta sala de juego?", efecto: "Pregunta 🎭" },
        { texto: "Dile a la persona más guapa de la sala qué es lo más hermoso que tiene físicamente.", efecto: "Reto 😉" },
        { texto: "¿Cuándo fue la última vez que diste un beso? Di el nombre de la persona y la fecha.", efecto: "Pregunta 🎬" },
        { texto: "Haz contacto visual por más de 10 segundos con la persona del género opuesto que el grupo decida.", efecto: "Reto 🤖" },
        { texto: "¿Quién es tu 'crush' ahora mismo?", efecto: "Pregunta 🧢" },
        { texto: "Publica una indirecta para tu ex en tus redes; la frase la elegirá alguien del grupo.", efecto: "Reto 🤧" },
        { texto: "¿Cuándo fue la última vez que le tuviste miedo o timidez a una persona que te gustaba?", efecto: "Pregunta 🧟" },
        { texto: "Envíale un mensaje a una amiga diciéndole que la quieres ver de nuevo, pero aclarando que no como amigos.", efecto: "Reto 🦉" },
        { texto: "Hazte pasar por el novio/novia de la persona que el grupo elija por el resto de la ronda.", efecto: "Reto 😁" },
        { texto: "¿Le Has dicho una mentira de las pregunta que te a hecho (Los desterrado).", efecto: "Pregunta 😴" },
        { texto: "Acércate a la persona que consideres más chismosa y dile de frente que es muy brollero (si no está, llámala).", efecto: "Reto ⏳" },
        { texto: "¿Quién fue esa persona que en su momento te encantaba pero ella nunca te presto atencion? (No vale decir 'nadie').", efecto: "Pregunta 🕵️" },
        { texto: "Publica en tu historia el equipo de fútbol que más odias, y coloca: 'Mi equipo favorito, lo amo'.", efecto: "Reto ⛓️" },
        { texto: "¿Alguna vez has antes robado algo? Di la última vez que lo hiciste.", efecto: "Pregunta 😔" },
        { texto: "Intenta bailar de manera sensual tú solo contra la pared de la sala.", efecto: "Reto 🛡️" },
        { texto: "¿Quién es la persona conocida que más te llegaba a excitar físicamente cuando la veías?", efecto: "Pregunta 🔄" },
        { texto: "Susúrrale al oído a un compañero y dile qué te está pareciendo el juego de Los Desterrados.", efecto: "Reto 🦿" },
        { texto: "¿Alguna vez una persona te ha hecho sufrir demasiado por amor?", efecto: "Pregunta 🙇" },
        { texto: "intenta hacer flexiones con una persona arriba de ti.", efecto: "Reto 🤢" },
        { texto: "¿Qué persona te caía muy mal al principio, pero luego la conociste y ahora son muy buenos amigos (o algo más)?", efecto: "Pregunta 😈" },
        { texto: "Dile de frente a la persona que tienes al lado qué es lo que tiene que cambiar para ser mejor.", efecto: "Reto 🎙️" },
        { texto: "¿Has hablado mal de alguien de este cuarto recientemente?", efecto: "Pregunta 🪵" },
        { texto: "¡Carta Premio! Puedes elegir varias cartas del nivel Extremo y otorgarle ese castigo a la persona que tú quieras.", efecto: "Reto 🫣" },
        { texto: "¿Quién es la persona que te confundió tanto que te hizo pensar que ya eran algo más que amigos?", efecto: "Pregunta sn" },
        { texto: "Salta en tu sitio de forma ridícula hasta que el grupo decida que puedes parar.", efecto: "Reto 📱" }
    ],
    "Difícil": [
        { texto: "Voz del Más Allá: Debes hablar únicamente susurrando hasta que vuelva a ser tu turno.", efecto: "Pregunta🤫" },
        { texto: "Posesión: Elige a un amigo. Responderá 'Sí, mi amo' a absolutamente todo lo que le digas.", efecto: "Reto🧠" },
        { texto: "Luz Maldita: El grupo debe decidir si apagar la luz de la habitación durante un minuto completo.", efecto: "Pregunta 🌑" },
        { texto: "El Teléfono Maldito: Entrega tu teléfono desbloqueado al jugador de la izquierda para que envíe un emoticón al azar a tu último chat.", efecto: "Reto📱" },
        { texto: "Mensaje Borrado: Deja que el grupo lea en voz alta el último mensaje de texto que recibiste.", efecto: "Pregunta🔎" },
        { texto: "Maldición del Idioma: El grupo elige un idioma. Debes intentar hablar en ese idioma simulado por una ronda.", efecto: "Reto🌐" },
        { texto: "El Sacrificio: Elige a un jugador. Él te quitará una prenda (reloj, anillo, zapatos) hasta el final del juego.", efecto: "Pregunta💍" },
        { texto: "Llamada Fantasma: Llama a un contacto al azar de tu agenda y cuelga justo cuando te atienda.", efecto: "Reto 📞" },
        { texto: "El Confesionario Oscuro: Revela algo vergonzoso que hayas buscado en internet esta última semana.", efecto: "Pregunta🌐" },
        { texto: "Mano de Hierro: Mantén un brazo estirado hacia el frente sin doblarlo durante los próximos dos turnos.", efecto: "Reto🦾" },
        { texto: "El Esclavo: Elige un jugador. Debes servirle agua o lo que pida durante los próximos tres turnos.", efecto: "Pregunta🧎" },
        { texto: "Verdad Incómoda: Mira fijamente a alguien y dile qué es lo que más te molesta de su actitud.", efecto: "Reto⚡" },
        { texto: "Sin Pestañear Duro: Haz un duelo de miradas con el jugador de enfrente. El primero que pestañee cumple un castigo extra.", efecto: "Pregunta 👁️" },
        { texto: "Canto Obligatorio: Canta el coro de una canción de reggaeton viejo en voz alta con total seriedad.", efecto: "Reto🎤" },
        { texto: "Maldición de la Risa: El grupo pasará 30 segundos intentando hacerte reír. Si cedes, pierdes un punto.", efecto: "Pregunta😂" },
        { texto: "La Silla Vacía: Juega el próximo turno sentado en el suelo debajo de la mesa.", efecto: "Reto🕳️" },
        { texto: "El Traidor Oculto: Elige secretamente a un aliado escribiéndolo en un papel. Si él pierde, tú también pierdes.", efecto: "Pregunta 📝" },
        { texto: "El Secreto del Grupo: Di quién de los presentes crees que sobreviviría menos tiempo en un apocalipsis zombi y por qué.", efecto: "Reto🧟" },
        { texto: "Intercambio de Almas: Cambia de personalidad con el jugador a tu derecha durante los siguientes dos turnos.", efecto: "Pregunta👥" },
        { texto: "El Poema de Terror: Improvisa un poema tétrico dedicado a la bruja del juego en menos de un minuto.", efecto: "Reto✒️" },
        { texto: "Maldición del Agua: Bebe un vaso de agua completo de un solo trago sin detenerte.", efecto: "Pregunta💧" },
        { texto: "Manos de Piedra: No puedes tocar tus pertenencias ni tu teléfono hasta que termine la ronda.", efecto: "Reto 🚫" },
        { texto: "La Sombra: Todo lo que haga el jugador de tu izquierda (moverse, rascarse, hablar), debes imitarlo al instante.", efecto: "Pregunta 👤" },
        { texto: "Preguntas Prohibidas: Si respondes con un 'Sí' o un 'No' en los próximos 5 minutos, debes hacer un reto extremo.", efecto: "Reto 🤐" },
        { texto: "El Mensajero: Envía un mensaje que diga 'Sé lo que hiciste' al tercer contacto de tu WhatsApp.", efecto: "Pregunta ✉️" },
        { texto: "El Juramento: Jura solemnemente no decir ni una sola mentira durante todo lo que queda de juego.", efecto: "Reto📜" },
        { texto: "El Peso del Pasado: Cuenta la peor rabieta o berrinche que recuerdes haber hecho cuando eras niño.", efecto: "Pregunta👶" },
        { texto: "Miedo a la Oscuridad: Cierra los ojos y no los abras bajo ninguna circunstancia durante toda la ronda de tus amigos.", efecto: "Reto🙈" },
        { texto: "El Bufón: Cuenta un chiste. Si nadie se ríe, debes cumplir el reto que el grupo elija.", efecto: "Pregunta 🃏" },
        { texto: "El Crítico: Di en voz alta qué es lo que peor cocina tu mamá o tu papá con total honestidad.", efecto: "Reto🍳" },
        { texto: "Maldición de la Edad: Actúa como si tuvieras 90 años, con temblores y voz rota, por los próximos 3 turnos.", efecto: "Pregunta 👵" },
        { texto: "El Objeto Maldito: Sostén un zapato en tu cabeza y balancéalo sin que se caiga durante un turno completo.", efecto: "Reto 👞" },
        { texto: "El Mudo Siniestro: No puedes emitir palabras, solo ruidos extraños o guturales para comunicarte por un turno.", efecto: "Pregunta👹" },
        { texto: "El Banquete: Come una cucharada de algo que el grupo mezcle (que sea comestible pero raro, como kétchup con mayonesa).", efecto: "Reto🧪" },
        { texto: "Voz de Robot: Habla de corrido y sin entonación como una inteligencia artificial averiada durante un turno.", efecto: "Pregunta 🤖" },
        { texto: "El Exilio: Sal de la habitación por 1 minuto a solas en la oscuridad antes de volver al juego.", efecto: "Reto 🚪" },
        { texto: "El Halago Sarcástico: Dile a tu peor enemigo en el juego 3 cosas que supuestamente 'amarías' de él.", efecto: "Pregunta🎭" },
        { texto: "El Cobarde: Finge tenerle terror absoluto a cualquier objeto común de la sala (como un vaso o una silla) cada vez que lo mires.", efecto: "Reto 😨" },
        { texto: "El Hipnotizado: Quédate mirando fijamente un punto de la pared sin mover la cabeza por los próximos dos minutos.", efecto: "Pregunta.😵‍💫" },
        { texto: "Maldición del Teléfono II: Deja que el grupo revise tus últimas 3 fotos de la galería.", efecto: "Reto 📸" },
        { texto: "El Culpable: Asume la culpa de algo malo que haya pasado en el grupo recientemente con tono dramático.", efecto: "Reto 🐐" },
        { texto: "Maldición Musical: Cada vez que hables, debes hacerlo cantando como si estuvieras en una ópera.", efecto: "Pregunta🎼" },
        { texto: "El Abrazador: Dale un abrazo incómodamente largo (de 15 segundos) al jugador que tengas más lejos.", efecto: "Reto🫂" },
        { texto: "El Hambriento: Habla sobre comida deliciosa desesperadamente antes de responder a cualquier pregunta.", efecto: "Pregunta🍔" },
        { texto: "El Político: Da un discurso de un minuto explicando por qué tú deberías ganar el juego sin decir nada concreto.", efecto: "Reto 🏛️" },
        { texto: "El Espía: Revela quién del grupo crees que guarda el secreto más oscuro de todos.", efecto: "Pregunta 🕵️‍♂️" },
        { texto: "El Tacaño: Niégate rotundamente a compartir cualquier cosa tuya en la sala durante el resto de la partida.", efecto: "Reto 🪙" },
        { texto: "Maldición del Tic: Inventa un tic físico exagerado con tu rostro y hazlo cada vez que pronuncies una vocal.", efecto: "Pregunta 🤪" },
        { texto: "El Desterrado Temporal: No puedes emitir opiniones ni votar en las decisiones del grupo por dos rondas.", efecto: "Reto🤫" },
        { texto: "Pacto de Silencio: No puedes hablar con nadie fuera del juego por el resto de la noche.", efecto: "Pregunta 🔕" }
    ],
    "Extremo": [
        { texto: "El Destierro: Estás eliminado del juego a menos que alguien sacrifique su próximo turno por ti.", efecto: "Muerte súbita ⚰️" },
        { texto: "Confesión Sangrienta: Revela tu mayor secreto o mentira reciente, o dejas el mazo para siempre.", efecto: "Verdad absoluta 🩸" },
        { texto: "El Pacto: Elige a un compañero. Todo castigo o efecto malo que le pase a él, te afectará a ti.", efecto: "Almas gemelas 🔗" },
        { texto: "Llamada de Terror: Llama a tu mamá o un familiar y dile 'Estoy en problemas, no puedo hablar' y cuelga. (¡Recuerda avisarles al terminar!).", efecto: "Pánico familiar 🚨" },
        { texto: "El Historial Expuesto: Muestra tu historial completo de YouTube o Google de los últimos 3 días al grupo.", efecto: "Juicio final 🖥️" },
        { texto: "El Fin de una Amistad: Di abiertamente quién de la sala es la persona en la que menos confías y da tus razones reales.", efecto: "Quiebre total 💔" },
        { texto: "La Sentencia: Permite que el grupo escriba un mensaje de texto libre y se lo envíe a la persona que te gusta o a tu ex.", efecto: "Suicidio social 💘" },
        { texto: "El Intercambio Absoluto: Intercambia tu teléfono con el de otro jugador durante los próximos 15 minutos. Pueden ver lo que sea.", efecto: "Posesión digital 📱" },
        { texto: "El Sacrificio de Cabello: Deja que el grupo te corte un pequeño mechón de cabello o te pinte la cara con marcador permanente.", efecto: "Marcado por la bruja ✒️" },
        { texto: "El Secreto de Oro: Revela algo totalmente prohibido que hayas hecho en tu vida.", efecto: "Confesión criminal 🥷" },
        { texto: "Maldición del Teléfono III: Publica una foto completamente ridícula elegida por el grupo en tus historias de WhatsApp justo ahora.", efecto: "Humillación pública 🌐" },
        { texto: "La Ruleta Rusa: El grupo inventará un castigo o reto asqueroso en este momento y debes cumplirlo sin protestar.", efecto: "Juicio del mazo 🎲" },
        { texto: "El Desprecio: Ignora por completo a la persona que mejor te cae del grupo por el resto de la partida. No la mires ni le hables.", efecto: "Frialdad helada 🥶" },
        { texto: "El Testamento: Escribe un mensaje de despedida dramático en tu grupo de WhatsApp familiar como si te fueras a mudar de país repentinamente.", efecto: "Simulacro ✈️" },
        { texto: "El Espejo de la Verdad: Di qué es lo que más te da envidia de la persona que tienes enfrente.", efecto: "Envidia pura 🐍" },
        { texto: "El Trato con el Demonio: Dale tu billetera a la persona de la derecha. Solo te lo devolverá si completas los próximos 3 retos difíciles sin fallar.", efecto: "Extorsión 💵" },
        { texto: "El Peor Recuerdo: Cuenta detalladamente el momento más vergonzoso que hayas vivido frente a mucha gente.", efecto: "Humillación mental 🧠" },
        { texto: "Maldición del Bloqueo: Bloquea a una persona al azar de tus redes sociales elegida por el grupo durante 24 horas.", efecto: "Corte de lazos 🔕" },
        { texto: "La Cuenta Expuesta: Muestra tus cuentas, ahorros o cuánto dinero tienes exactamente en tus billeteras digitales al grupo.", efecto: "Desnudez financiera 💳" },
        { texto: "La Verdad de la Sala: Si pudieras sacar a una persona de esta habitación para siempre y no volver a verla jamás, ¿quién sería?", efecto: "Destierro físico 🚪" },
        { texto: "El Mensaje de la Discordia: Envía un mensaje a un grupo de amigos diciendo 'Me caen mal todos aquí' y no aclares nada por 10 minutos.", efecto: "Anarquía 💣" },
        { texto: "La Traición Máxima: Cuenta un secreto que un amigo de fuera del juego te haya confiado bajo promesa de silencio absoluto.", efecto: "Rompepactos 🤐" },
        { texto: "La Pócima del Pantano: Bebe una mezcla rara de tres ingredientes que estén en la cocina elegidos por tus amigos (bebidas seguras).", efecto: "Envenenamiento 🧪" },
        { texto: "El Reemplazo: Entrega tu abrigo o zapatos a otro jugador y quédate descalzo hasta el final del nivel.", efecto: "Frío extremo ❄️" },
        { texto: "La Peor Mentira: Confiésale a alguien de la sala una mentira directa que le hayas dicho en el pasado y que nunca haya descubierto.", efecto: "Cicatriz abierta 🩹" },
        { texto: "Maldición de Mudez: No puedes decir una sola palabra durante las próximas dos rondas completas. Si hablas, quedas eliminado.", efecto: "Mudez maldita 😷" },
        { texto: "El Culpable de Todo: Pídele disculpas públicas a un jugador por algo del pasado, fingiendo llorar de manera exagerada.", efecto: "Penitencia 😢" },
        { texto: "El Teléfono Libre II: El jugador a tu izquierda puede leer en voz alta tus últimos 5 chats de WhatsApp (solo los nombres o el último texto).", efecto: "Invasión de privacidad 👁️" },
        { texto: "El Beso de la Muerte: Dale un beso en la mejilla a la persona que el mazo decida (o haz 30 lagartijas de penalización).", efecto: "Afecto maldito 💋" },
        { texto: "El Destierro de Redes: Borra tu última publicación o foto de tus redes sociales sin dar explicaciones a nadie.", efecto: "Purga digital ❌" },
        { texto: "La Falsa Pelea: Llama a un amigo que no esté aquí y empieza a discutir de la nada por un objeto imaginario hasta que se lo crea.", efecto: "Psicosis 😡" },
        { texto: "El Llorón: Llora y quéjate amargamente cada vez que un jugador tira una carta durante los próximos 5 minutos.", efecto: "Lamento tétrico 😭" },
        { texto: "El Juramento de Sangre: Promete regalarle algo tuyo que le guste mucho al jugador de tu izquierda antes de que termine la semana.", efecto: "Ofrenda material 🎁" },
        { texto: "La Confesión del Amor: Revela el nombre completo de la persona que te gusta o te vuelve loco en secreto en este momento.", efecto: "Corazón expuesto 💘" },
        { texto: "La Pesadilla del Teléfono: Deja que el grupo ponga de fondo de pantalla de tu celular la imagen más ridícula que encuentren durante el resto del juego.", efecto: "Parásito visual 🖼️" },
        { texto: "El Préstamo Forzado: Pídele dinero prestado por mensaje a un conocido con una excusa absurda y muestra la respuesta en pantalla.", efecto: "Estafa espiritual 💸" },
        { texto: "El Juicio de la Ropa: Juega los próximos tres turnos usando tu camiseta al revés y los pantalones remangados hasta las rodillas.", efecto: "Bufón real 🤡" },
        { texto: "El Ego Destrozado: Deja que cada miembro del grupo te diga un defecto físico o de personalidad tuyo sin que puedas defenderte.", efecto: "Humildad pura 💔" },
        { texto: "El Exilio en el Baño: Quédate encerrado en el baño a oscuras durante dos turnos enteros mientras los demás siguen jugando.", efecto: "Fosa común 🚽" },
        { texto: "Maldición de la Estatua II: No te muevas de tu posición actual ni cambies tu expresión facial durante los próximos dos minutos enteros.", efecto: "Cuerpo de piedra 🗿" },
        { texto: "La Peor Deuda: Confiésale al grupo a quién de los presentes le debes dinero o un favor y que no tienes ninguna intención de pagar.", efecto: "Moroso místico 🪙" },
        { texto: "El Ataque de Pánico: Finge un ataque de locura o pánico repentino durante 15 segundos y luego vuelve a la normalidad como si nada.", efecto: "Brote tétrico 🧠" },
        { texto: "El Mensaje al Profesor: Envía un emoticón de calavera 💀 o fantasma 👻 sin contexto al último profesor, tutor o adulto con el que hablaste.", efecto: "Suicidio académico 🎓" },
        { texto: "La Revelación Familiar: Cuenta cuál es el secreto familiar más vergonzoso que sabes pero del que nadie habla en tu casa.", efecto: "Esqueleto en el clóset 🦴" },
        { texto: "El Castigo de la Bruja: No puedes usar tus manos para tocar nada; otro jugador debe sostener tu celular o tus cosas el resto de la ronda.", efecto: "Amputación mística 👐" },
        { texto: "El Odio Oculto: Di qué es lo que secretamente te cae peor de la persona que organizó la reunión u hospedó el juego hoy.", efecto: "Veneno puro 🧪" },
        { texto: "Maldición de Idioma Extremo: Habla inventando un lenguaje satánico o extraño completo durante los próximos dos turnos.", efecto: "Posesión lenguaraz 👹" },
        { texto: "El Adiós Definitivo: Si fallas tu próximo turno o el reto que te toca, quedas completamente mudo y desterrado del juego hasta que termine.", efecto: "Muerte definitiva ⚰️" },
        { texto: "El Fin del Misterio: Revela un secreto tuyo que juraste llevarte a la tumba pase lo que pase.", efecto: "Último aliento 🪦" },
        { texto: "El Trato Final: Deja que el jugador con menos puntos decida tu destino completo para el próximo turno.", efecto: "Sumisión extrema 🧎" }
    ]
};

// Copias temporales para evitar repeticiones de cartas
let mazoDeJuego = {
    "Fácil": [...baseDeCartas["Fácil"]],
    "Difícil": [...baseDeCartas["Difícil"]],
    "Extremo": [...baseDeCartas["Extremo"]]
};

// VARIABLES DE CONTROL DE EVENTOS
let contadorCartas = 0;
let yaCalifico = false; // Se reinicia en cada recarga
let modoVortexActivado = false; 
let contadorNivel2 = 0; // Cuenta las cartas usadas en el mazo colapsado

function empezarJuego() {
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('pantalla-juego').classList.remove('oculto');
}

function seleccionar(dificultad) {
    if (mazoDeJuego[dificultad].length === 0) {
        mazoDeJuego[dificultad] = [...baseDeCartas[dificultad]];
    }

    const listaCartas = mazoDeJuego[dificultad];
    const indiceAleatorio = Math.floor(Math.random() * listaCartas.length);
    const cartaRobada = listaCartas.splice(indiceAleatorio, 1)[0];

    document.body.classList.remove('fondo-azul', 'fondo-verde', 'fondo-extremo', 'fondo-dorado');

    if (cartaRobada.texto.includes("¡Carta Premio!")) {
        document.body.classList.add('fondo-dorado');
    } else {
        if (dificultad === 'Fácil') document.body.classList.add('fondo-azul');
        else if (dificultad === 'Difícil') document.body.classList.add('fondo-verde');
        else if (dificultad === 'Extremo') document.body.classList.add('fondo-extremo');
    }

    document.getElementById('enfoque-nivel').innerText = `Modo: ${dificultad}`;
    document.getElementById('enfoque-efecto').innerText = `[ EFECTO: ${cartaRobada.efecto} ]`;
    document.getElementById('enfoque-reto').innerText = `"${cartaRobada.texto}"`;

    document.getElementById('pantalla-juego').classList.add('oculto');
    document.getElementById('pantalla-enfoque').classList.remove('oculto');
}

function volverAlMazo() {
    document.getElementById('pantalla-enfoque').classList.add('oculto');
    
    contadorCartas++;

    if (modoVortexActivado) {
        contadorNivel2++;
    }

    // 1. Alerta de estrellas prioritario a la 4ta carta
    if (contadorCartas === 4 && !yaCalifico) {
        document.getElementById('notificacion-feedback').classList.remove('oculto');
        return; 
    }

    // Muestra la flecha de escape si ya se jugaron 4 cartas en el Nivel 2
    if (modoVortexActivado && contadorNivel2 >= 4) {
        document.getElementById('btn-volver-altar').classList.remove('oculto');
    }

    // 2. Condición del Remolino (Carta 25)
    if (contadorCartas > 25 && !modoVortexActivado) {
        ejecutarRemolinoMistico();
        return; 
    }

    document.getElementById('pantalla-juego').classList.remove('oculto');
}

function ejecutarRemolinoMistico() {
    modoVortexActivado = true;
    contadorNivel2 = 0; 
    const vortex = document.getElementById('vorticemistico');
    const mazoUI = document.getElementById('contenedor-mazo');
    const tituloUI = document.getElementById('titulo-principal');

    vortex.classList.remove('oculto-vortex');
    vortex.classList.add('activar-vortex');

    setTimeout(() => {
        mazoUI.classList.add('succionar-todo');
        tituloUI.classList.add('succionar-todo');
    }, 500);

    setTimeout(() => {
        vortex.classList.remove('activar-vortex');
        vortex.classList.add('oculto-vortex');
        
        tituloUI.innerHTML = `<span style="color:#27F5C2; text-shadow: 0 0 20px #0ab5bb;;">Los Desterrados 2 </span>`;
        
        mazoUI.innerHTML = `
            <div class="carta dificil-premium-dorado" onclick="seleccionar('Difícil')">
                <span class="hola">Sobrevive al nuevo orden</span>
                <div class="emoji">👑</div>
                <span class="texto-dificultad">Difícil Dorado</span>
            </div>
            <div class="carta extremo-premium-rojo" onclick="seleccionar('Extremo')">
                <span class="hola">El juicio final de tus amistades</span>
                <div class="emoji">💀</div>
                <span class="texto-dificultad">Extremo Rojo</span>
            </div>
        `;
    }, 2000);

    setTimeout(() => {
        mazoUI.classList.remove('succionar-todo');
        tituloUI.classList.remove('succionar-todo');
        document.getElementById('pantalla-juego').classList.remove('oculto');
    }, 2600);
}

// Resetea el tablero al Altar original
function regresarAlAltarOriginal() {
    modoVortexActivado = false;
    contadorCartas = 0; 
    contadorNivel2 = 0;

    document.getElementById('btn-volver-altar').classList.add('oculto');

    const tituloUI = document.getElementById('titulo-principal');
    tituloUI.innerHTML = `<span class="letra-l">L</span>os <span class="letra-d">D</span>esterrados`;

    const mazoUI = document.getElementById('contenedor-mazo');
    mazoUI.innerHTML = `
        <div class="carta azul" onclick="seleccionar('Fácil')">
            <span class="hola">No te confíes de mi color</span>
            <div class="emoji">🎭</div>
            <span class="texto-dificultad">Fácil</span>
        </div>
        <div class="carta verde-carta" onclick="seleccionar('Difícil')">
            <span class="hola">Puede que termines en una relación hoy</span>
            <div class="emoji">🌶️</div>
            <span class="texto-dificultad">Difícil</span>
        </div>
        <div class="carta rojo-morado" onclick="seleccionar('Extremo')">
            <span class="hola">Elígeme, no soy mala; solo podrías perder una amistad</span>
            <div class="emoji">🥀</div>
            <span class="texto-dificultad">Extremo</span>
        </div>
    `;
}

function calificar(estrellas) {
    console.log(`El usuario calificó con: ${estrellas} estrellas.`);
    yaCalifico = true;

    const graciasText = document.getElementById('mensaje-agradecimiento');
    graciasText.classList.remove('oculto');

    setTimeout(() => {
        document.getElementById('notificacion-feedback').classList.add('oculto');
        
        if (contadorCartas > 25 && !modoVortexActivado) {
            ejecutarRemolinoMistico();
        } else {
            document.getElementById('pantalla-juego').classList.remove('oculto');
        }
    }, 2000);
}
