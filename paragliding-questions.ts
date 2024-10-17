
// UNTIL AERO 25

export const testQuestions = [
  {
    category: "meteo",
    statement: "Las nubes pueden estar constituidas:",
    image: "/public/cloud-types.png",
    correctAnswer: {
      text: "de cristales de hielo y de gotitas de agua.",
      explanation: "Correcto. Las nubes están compuestas por gotitas de agua y cristales de hielo, dependiendo de la altitud y temperatura. La combinación varía según las condiciones atmosféricas."
    },
    incorrectAnswers: [
      {
        text: "de vapor de agua en suspensión.",
        explanation: "Incorrecto. El vapor de agua es invisible y no constituye las nubes. Las nubes se forman cuando el vapor se condensa en gotas de agua líquida o cristales de hielo a temperaturas más bajas."
      },
      {
        text: "de cristales de hielo.",
        explanation: "Incorrecto. Las nubes a menudo contienen cristales de hielo, pero también incluyen gotitas de agua. Solo a temperaturas muy frías las nubes pueden estar formadas principalmente por cristales de hielo."
      },
      {
        text: "de vapor de agua y gotitas de agua.",
        explanation: "Incorrecto. El vapor de agua no es visible y no forma nubes. Las nubes consisten en gotitas de agua líquida y cristales de hielo que se forman a partir de la condensación del vapor."
      }
    ]
  },
  {
    category: "meteo",
    statement: "La causa de la formación de las nubes es:",
    image: "",
    correctAnswer: {
      text: "el enfriamiento del aire hasta su punto de condensación.",
      explanation: "El aire se enfría hasta llegar a su punto de condensación, formando nubes cuando la humedad relativa alcanza el 100%."
    },
    incorrectAnswers: [
      {
        text: "calentamiento del aire frío.",
        explanation: "El calentamiento del aire frío no causa la formación de nubes, sino que generalmente asciende y se mezcla con el aire más cálido."
      },
      {
        text: "una fuerte descendente.",
        explanation: "Las corrientes descendentes no generan nubes; por el contrario, suelen disiparlas."
      },
      {
        text: "calentamiento del aire ascendente.",
        explanation: "El aire ascendente puede formar nubes, pero no es el calentamiento lo que las forma, sino el enfriamiento y condensación del aire."
      }
    ]
  },
  {
    category: "aerodinamica",
    statement: "La pérdida tiene lugar:",
    image: "",
    correctAnswer: {
      text: "siempre con la misma incidencia.",
      explanation: "La pérdida siempre ocurre cuando se alcanza la incidencia crítica, independientemente de la velocidad del vuelo."
    },
    incorrectAnswers: [
      {
        text: "con diferentes incidencias.",
        explanation: "La pérdida no ocurre con diferentes incidencias. Se produce al alcanzar la incidencia crítica, que es constante para cada ala."
      },
      {
        text: "siempre con la misma velocidad.",
        explanation: "La velocidad de pérdida puede variar según las condiciones, como la carga alar, pero la incidencia crítica permanece constante."
      },
      {
        text: "con la misma incidencia, pero a diferentes velocidades según las condiciones.",
        explanation: "La velocidad de pérdida varía según factores como la carga y la altitud, pero la incidencia de pérdida es siempre la misma."
      }
    ]
  },
  {
    category: "aerodinamica",
    statement: "La pérdida se produce cuando:",
    image: "",
    correctAnswer: {
      text: "la incidencia es demasiado fuerte.",
      explanation: "La pérdida ocurre cuando el ángulo de ataque (incidencia) es demasiado alto, lo que provoca que el ala pierda la capacidad de generar sustentación."
    },
    incorrectAnswers: [
      {
        text: "la velocidad es demasiado fuerte.",
        explanation: "La pérdida no se produce por una velocidad demasiado alta, sino por una incidencia crítica del ala."
      },
      {
        text: "la incidencia es demasiado débil.",
        explanation: "Una incidencia demasiado baja no genera suficiente sustentación, pero no es la causa de la pérdida. La pérdida ocurre cuando la incidencia es demasiado alta."
      },
      {
        text: "la velocidad es constante pero la sustentación es insuficiente.",
        explanation: "La velocidad de pérdida puede variar, pero la incidencia crítica es el factor determinante en la pérdida, no la velocidad o la falta de sustentación en sí misma."
      }
    ]
  },
  {
    category: "material",
    statement: "Un paracaídas de reserva redondo es:",
    image: "",
    correctAnswer: {
      text: "un freno aerodinámico.",
      explanation: "Correcto. Un paracaídas de reserva redondo actúa como un freno aerodinámico, ralentizando la caída del paracaidista en caso de un fallo del paracaídas principal."
    },
    incorrectAnswers: [
      {
        text: "un planeador ultraligero.",
        explanation: "Incorrecto. Un paracaídas de reserva redondo no es un planeador ultraligero; su función es la de frenar y estabilizar la caída."
      },
      {
        text: "un 100% de garantía de salvarse en caso de accidente.",
        explanation: "Incorrecto. Aunque un paracaídas de reserva es una medida de seguridad, no ofrece una garantía absoluta de supervivencia en caso de un accidente."
      },
      {
        text: "un dispositivo para realizar acrobacias.",
        explanation: "Incorrecto. Un paracaídas de reserva no está diseñado para realizar acrobacias, su propósito es garantizar una caída controlada en situaciones de emergencia."
      }
    ]
  },
  {
    category: "material",
    statement: "Para una máxima seguridad, desplegar y plegar el paracaídas de reserva, debe hacerse:",
    image: "",
    correctAnswer: {
      text: "dos veces por año.",
      explanation: "Correcto. Desplegar y plegar el paracaídas de reserva al menos dos veces al año asegura que esté en condiciones óptimas de funcionamiento."
    },
    incorrectAnswers: [
      {
        text: "una vez por año.",
        explanation: "Incorrecto. Desplegarlo solo una vez al año puede no ser suficiente para garantizar su seguridad y funcionalidad."
      },
      {
        text: "dejarlo tal cual nos lo vendieron.",
        explanation: "Incorrecto. Dejar el paracaídas sin revisiones regulares puede comprometer su efectividad en situaciones de emergencia."
      },
      {
        text: "cada cinco años.",
        explanation: "Incorrecto. Esperar cinco años entre revisiones puede ser demasiado tiempo y pone en riesgo la seguridad del usuario."
      }
    ]
  },
  {
    category: "raglamento",
    statement: "Un ala de vuelo libre es:",
    image: "",
    correctAnswer: {
      text: "un planeador ultraliviano y una aeronave no sometida a matriculación.",
      explanation: "Correcto. Un ala de vuelo libre se refiere a una aeronave no motorizada, como un planeador ultraliviano, que no requiere matriculación debido a su categoría."
    },
    incorrectAnswers: [
      {
        text: "un freno aerodinámico.",
        explanation: "Incorrecto. Un freno aerodinámico no es un ala de vuelo libre; su función es reducir la velocidad de una aeronave."
      },
      {
        text: "un paracaídas.",
        explanation: "Incorrecto. Un paracaídas es un dispositivo diseñado para desacelerar la caída de un objeto, no se considera un ala de vuelo libre."
      },
      {
        text: "un dispositivo de motor auxiliar.",
        explanation: "Incorrecto. Un ala de vuelo libre no tiene un motor; es una aeronave totalmente no motorizada."
      }
    ]
  },
  {
    category: "raglamento",
    statement: "Prioridades entre aeronaves no motorizadas:",
    image: "",
    correctAnswer: {
      text: "Los P.U.L. tienen prioridad sobre los planeadores y sobre los conjuntos remolcados (avión + planeador, U.L.M. + delta, U.L.M. + bandera publicitaria, etc...).",
      explanation: "Correcto. Los P.U.L. (Planeadores Ultraligeros) tienen prioridad de paso sobre otras aeronaves no motorizadas como los planeadores y conjuntos remolcados."
    },
    incorrectAnswers: [
      {
        text: "Los P.U.L. deben dar prioridad a los planeadores.",
        explanation: "Incorrecto. Los P.U.L. no deben dar prioridad a los planeadores, ya que ellos tienen la prioridad de paso."
      },
      {
        text: "Los P.U.L. tienen prioridad sobre los globos aerostáticos.",
        explanation: "Incorrecto. La normativa de prioridades no siempre otorga prioridad a los P.U.L. sobre los globos aerostáticos, ya que estos tienen sus propias regulaciones."
      },
      {
        text: "Los planeadores tienen prioridad sobre los P.U.L.",
        explanation: "Incorrecto. Esto no es cierto; los P.U.L. tienen prioridad sobre los planeadores en el aire."
      }
    ]
  },
  {
    category: "tecnica",
    statement: "El cuidado de los sitios de vuelo concierne a:",
    image: "",
    correctAnswer: {
      text: "las ligas y los clubes, y cada piloto.",
      explanation: "Correcto. El cuidado de los sitios de vuelo es responsabilidad compartida entre las ligas, los clubes y cada piloto, asegurando así la seguridad y el mantenimiento de los espacios de vuelo."
    },
    incorrectAnswers: [
      {
        text: "la Federación.",
        explanation: "Incorrecto. Aunque la Federación puede tener un papel en la regulación, la responsabilidad recae más en ligas, clubes y pilotos."
      },
      {
        text: "el Ministerio del Interior.",
        explanation: "Incorrecto. El Ministerio del Interior no tiene la responsabilidad directa sobre el cuidado de los sitios de vuelo."
      },
      {
        text: "los instructores de vuelo.",
        explanation: "Incorrecto. Aunque los instructores tienen un papel importante en la formación, no son los responsables del cuidado de los sitios de vuelo."
      }
    ]
  },
  {
    category: "tecnica",
    statement: "Aplicar la regla de la adición es:",
    image: "",
    correctAnswer: {
      text: "evitar la acumulación de factores estresantes que por separado no conducen a accidentes pero sumados tornan el riesgo inaceptable, medir los riesgos y no sumarlos, e identificar los elementos nuevos de una situación y no aceptar más que uno por vez.",
      explanation: "Correcto. La regla de la adición implica gestionar múltiples riesgos de manera que su combinación no genere un riesgo inaceptable para la seguridad."
    },
    incorrectAnswers: [
      {
        text: "no considerar los riesgos menores.",
        explanation: "Incorrecto. La regla de la adición considera todos los riesgos, sin minimizar los menores."
      },
      {
        text: "sumar todos los riesgos sin evaluar su impacto.",
        explanation: "Incorrecto. La regla enfatiza en la evaluación de riesgos, no en simplemente sumarlos."
      },
      {
        text: "evitar cualquier tipo de riesgo.",
        explanation: "Incorrecto. No es realista evitar todos los riesgos; la clave es gestionarlos adecuadamente."
      }
    ]
  }
];




export const paraglidingQuestions = [
 
,
{
  topic: "meteo",
  statement: "Cuando se forma una nube:",
  image: "",
  answers: [
    {
      text: "se genera frío.",
      isCorrect: false,
      explanation: "Durante la formación de nubes, el calor se libera a medida que el vapor de agua se condensa. No se genera frío en este proceso."
    },
    {
      text: "se genera calor.",
      isCorrect: true,
      explanation: "La formación de una nube libera calor latente cuando el vapor de agua se condensa en pequeñas gotas, calentando el aire circundante."
    },
    {
      text: "se detiene la ascendencia.",
      isCorrect: false,
      explanation: "La ascendencia puede continuar incluso después de la formación de la nube, y a menudo es una parte esencial del desarrollo de nubes."
    },
    {
      text: "la temperatura se mantiene constante.",
      isCorrect: false,
      explanation: "La temperatura no se mantiene constante, ya que la formación de la nube implica la liberación de calor durante la condensación."
    }
  ]
},


{
  topic: "meteo",

  statement: "Las nubes que materializan las ondas de resalte son:",
  image: "/public/cloud-types.png",
  answers: [
    {
      text: "cúmulos congestus y cumulonimbus.",
      isCorrect: false,
      explanation: "Estas nubes son de desarrollo vertical y se asocian a tormentas y corrientes convectivas intensas, no a ondas de resalte. Se forman por la subida de aire caliente y son señales de inestabilidad atmosférica."
    },
    {
      text: "cirrostratos y nimbostratos.",
      isCorrect: false,
      explanation: "El cirrostrato forma un velo alto, y el nimbostrato es una nube densa que produce lluvias continuas. No indican ondas de resalte, ya que se forman en frentes atmosféricos."
    },
    {
      text: "altocúmulos lenticulares y cúmulos rotores.",
      isCorrect: true,
      explanation: "Los altocúmulos lenticulares tienen forma de lente y se generan por el flujo de aire sobre montañas, evidenciando ondas de resalte. Los cúmulos rotores se forman debajo, indicando turbulencia."
    },
    {
      text: "estratocúmulos y cirros.",
      isCorrect: false,
      explanation: "Los estratocúmulos son nubes bajas y extensas; los cirros son nubes altas de aspecto fibroso. No se asocian con ondas de resalte, ya que se forman en otras condiciones atmosféricas."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Cirros, cirrocúmulos y cirrostratos son nubes:",
  image: "/public/cloud-types.png",
  answers: [
    {
      text: "del nivel inferior.",
      isCorrect: false,
      explanation: "Las nubes del nivel inferior incluyen estratos y estratocúmulos."
    },
    {
      text: "del nivel medio.",
      isCorrect: false,
      explanation: "Las nubes del nivel medio incluyen altocúmulos y altoestratos, pero no los cirros."
    },
    {
      text: "del nivel superior.",
      isCorrect: true,
      explanation: "Los cirros, cirrocúmulos y cirrostratos son nubes que se encuentran a mayor altitud, en el nivel superior."
    },
    {
      text: "de formación convectiva.",
      isCorrect: false,
      explanation: "Las nubes de formación convectiva suelen ser cúmulos y cumulonimbos, no los cirros."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Altocúmulos y altoestratos son nubes:",
  image: "",
  answers: [
    {
      text: "del nivel inferior.",
      isCorrect: false,
      explanation: "Las nubes del nivel inferior incluyen estratos y estratocúmulos, pero no los altocúmulos y altoestratos."
    },
    {
      text: "del nivel medio.",
      isCorrect: true,
      explanation: "Los altocúmulos y altoestratos son nubes que se forman en el nivel medio, entre 2.000 y 7.000 metros de altitud."
    },
    {
      text: "del nivel superior.",
      isCorrect: false,
      explanation: "Las nubes del nivel superior incluyen cirros, cirrocúmulos y cirrostratos, no los altocúmulos y altoestratos."
    },
    {
      text: "de formación convectiva.",
      isCorrect: false,
      explanation: "Las nubes de formación convectiva suelen ser cúmulos y cumulonimbos, no los altocúmulos y altoestratos."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Estratos y estratocúmulos pertenecen:",
  image: "",
  answers: [
      { text: "al nivel inferior.", isCorrect: true, explanation: "Los estratos y estratocúmulos son nubes de bajo nivel." },
      { text: "al nivel medio.", isCorrect: false, explanation: "Las nubes de nivel medio incluyen altocúmulos y altoestratos." },
      { text: "al nivel superior.", isCorrect: false, explanation: "Las nubes de nivel superior incluyen cirros, cirrostratos y cirrocúmulos." },
      { text: "a todos los niveles.", isCorrect: false, explanation: "No es correcto, ya que estas nubes pertenecen exclusivamente al nivel inferior." }
  ]
}
,
{
  topic: "meteo",

  statement: "Cumulonimbos y nimbostratos pertenecen:",
  image: "",
  answers: [
    {
      text: "solamente al nivel inferior.",
      isCorrect: false,
      explanation: "Los cumulonimbos y nimbostratos pueden abarcar varios niveles de la atmósfera, no se limitan a uno solo."
    },
    {
      text: "sólo al nivel medio.",
      isCorrect: false,
      explanation: "Aunque pueden estar presentes en el nivel medio, también abarcan otros niveles."
    },
    {
      text: "sólo al nivel superior.",
      isCorrect: false,
      explanation: "No se limitan al nivel superior, ya que estas nubes pueden extenderse a varios niveles de la atmósfera."
    },
    {
      text: "a varios niveles a la vez.",
      isCorrect: true,
      explanation: "Los cumulonimbos y nimbostratos son nubes que se extienden a través de varios niveles de la atmósfera."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Una nube orográfica:",
  image: "",
  answers: [
    {
      text: "está fija con respecto al suelo.",
      isCorrect: false,
      explanation: "Su formación también está vinculada al flujo de aire y ascendencia dinámica."
    },
    {
      text: "indica ausencia de viento.",
      isCorrect: false,
      explanation: "Las nubes orográficas se forman debido al viento que se encuentra con una barrera montañosa y se eleva, por lo que no indican ausencia de viento."
    },
    {
      text: "se debe a una ascendente térmica.",
      isCorrect: false,
      explanation: "Las nubes orográficas no se deben a una ascendente térmica, sino a la ascendencia del aire que se eleva al encontrarse con una montaña o colina."
    },
    {
      text: "se debe a una ascendente dinámica y está fija con respecto al suelo.",
      isCorrect: true,
      explanation: "La nube orográfica se forma debido a la ascendencia dinámica del aire que se eleva al chocar con una barrera montañosa y parece estacionaria con respecto al suelo."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las nubes de tipo estratos:",
  image: "",
  answers: [
    {
      text: "se desarrollan horizontalmente y caracterizan capas más bien estables.",
      isCorrect: true,
      explanation: "Las nubes estratos se desarrollan en capas horizontales y se asocian con condiciones atmosféricas estables."
    },
    {
      text: "se desarrollan a gran altura.",
      isCorrect: false,
      explanation: "Las nubes estratos generalmente se forman a altitudes bajas o medias."
    },
    {
      text: "se desarrollan verticalmente.",
      isCorrect: false,
      explanation: "Las nubes estratos no se desarrollan verticalmente; ese es un rasgo de las nubes cumuliformes."
    },
    {
      text: "caracterizan capas más bien inestables.",
      isCorrect: false,
      explanation: "Las nubes estratos están asociadas con capas de aire estable, no inestable."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las nubes del tipo cúmulos:",
  image: "",
  answers: [
    {
      text: "caracterizan capas más bien inestables y se desarrollan verticalmente.",
      isCorrect: true,
      explanation: "Las nubes cúmulos se forman en condiciones atmosféricas inestables y se caracterizan por su desarrollo vertical."
    },
    {
      text: "indican ausencia de viento.",
      isCorrect: false,
      explanation: "Las nubes cúmulos no necesariamente indican la ausencia de viento; pueden formarse en condiciones con viento."
    },
    {
      text: "caracterizan capas más bien estables.",
      isCorrect: false,
      explanation: "Las nubes cúmulos están asociadas con capas inestables, no estables."
    },
    {
      text: "se desarrollan horizontalmente.",
      isCorrect: false,
      explanation: "Las nubes cúmulos se desarrollan principalmente en sentido vertical, no horizontal."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Marque la afirmación exacta:",
  image: "",
  answers: [
    {
      text: "Los cirros están constituidos por cristales de hielo y los cumulonimbos están formados por gotas de agua y cristales de hielo.",
      isCorrect: true,
      explanation: "Los cirros se forman a gran altitud donde las temperaturas son muy bajas, por lo que están compuestos por cristales de hielo. Los cumulonimbos, debido a su gran desarrollo vertical, contienen gotas de agua en las partes bajas y cristales de hielo en las altas."
    },
    {
      text: "Los estratos están constituidos por cristales de hielo y los cumulonimbos están formados solamente por gotas de agua.",
      isCorrect: false,
      explanation: "Los estratos se componen principalmente de pequeñas gotas de agua y rara vez contienen cristales de hielo. Los cumulonimbos, por su gran altitud, contienen tanto gotas de agua en las partes bajas como cristales de hielo en las partes altas."
    },
    {
      text: "Los estratos son las nubes más altas de la atmósfera.",
      isCorrect: false,
      explanation: "Los estratos se forman a baja o media altitud y no son las nubes más altas. Los cirros son las nubes que se desarrollan a las mayores altitudes en la atmósfera."
    },
    {
      text: "Los nimbostratos originan precipitaciones de granizo.",
      isCorrect: false,
      explanation: "Los nimbostratos producen lluvias o nevadas de carácter continuo, pero no granizo. El granizo está asociado principalmente con las nubes cumulonimbos debido a su fuerte desarrollo vertical y corrientes ascendentes."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Cumulonimbos y nimbostratos son nubes de fuerte extensión vertical, presentes en todos los estadios. Debajo, ambos poseen una base oscura borrosa por las precipitaciones, pero se los puede reconocer por:",
  image: "",
  answers: [
    {
      text: "los Ns van acompañados de tormenta y los Cb de un halo.",
      isCorrect: false,
      explanation: "Los nimbostratos (Ns) no van acompañados de tormentas, y los cumulonimbos (Cb) no presentan un halo. Los cumulonimbos son los que producen tormentas."
    },
    {
      text: "los Ns dan lluvia continua y los Cb lluvias violentas, relámpagos y vientos fuertes turbulentos.",
      isCorrect: true,
      explanation: "Los nimbostratos (Ns) generan lluvias continuas y persistentes, mientras que los cumulonimbos (Cb) son responsables de lluvias intensas, relámpagos, y vientos fuertes y turbulentos típicos de tormentas."
    },
    {
      text: "los Ns dan precipitaciones violentas, los Cb lluvia continua.",
      isCorrect: false,
      explanation: "Es al revés: los nimbostratos (Ns) producen lluvias continuas, mientras que los cumulonimbos (Cb) generan precipitaciones violentas y tormentas."
    },
    {
      text: "los Ns producen granizo mientras que los Cb sólo producen niebla.",
      isCorrect: false,
      explanation: "Los nimbostratos (Ns) no producen granizo, y los cumulonimbos (Cb) pueden producir granizo durante tormentas severas. La niebla no es característica de los cumulonimbos."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las calles de nubes se producen generalmente:",
  image: "",
  answers: [
    {
      text: "cuando se instala la convección y aumenta el viento con la altura.",
      isCorrect: true,
      explanation: "Las calles de nubes se forman cuando hay convección y el viento aumenta con la altitud, organizando las nubes en líneas paralelas."
    },
    {
      text: "cuando el viento es nulo.",
      isCorrect: false,
      explanation: "Las calles de nubes requieren la presencia de viento para formarse; sin viento, no se organizan en líneas."
    },
    {
      text: "cuando la masa de aire es estable.",
      isCorrect: false,
      explanation: "Las calles de nubes se forman en condiciones de aire inestable, lo que permite la formación de corrientes ascendentes."
    },
    {
      text: "cuando hay fuertes precipitaciones.",
      isCorrect: false,
      explanation: "Las calles de nubes no están asociadas con fuertes precipitaciones, sino con patrones de convección en condiciones de viento."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Se pueden encontrar turbulencias peligrosas bajo nubes de tipo:",
  image: "",
  answers: [
    {
      text: "cúmulos y rotores de onda de resalte.",
      isCorrect: true,
      explanation: "Las turbulencias peligrosas pueden encontrarse bajo nubes cúmulos debido a la fuerte convección que generan, y bajo rotores de onda de resalte que se forman en zonas de vientos fuertes y racheados detrás de obstáculos montañosos."
    },
    {
      text: "estratos.",
      isCorrect: false,
      explanation: "Las nubes de tipo estrato suelen estar asociadas con condiciones atmosféricas estables y no generan turbulencias peligrosas."
    },
    {
      text: "cirros y estratos.",
      isCorrect: false,
      explanation: "Los cirros se forman a gran altitud y no producen turbulencias peligrosas cerca del suelo, mientras que los estratos están asociados con condiciones más estables."
    },
    {
      text: "rotores de onda de resalte.",
      isCorrect: false,
      explanation: "Aunque los rotores de onda de resalte pueden causar turbulencias peligrosas, esta respuesta no es completa ya que las turbulencias también se encuentran bajo los cúmulos."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Entre las siguientes nubes, las más peligrosas para el vuelo libre son:",
  image: "",
  answers: [
    {
      text: "cumulonimbos y nubes de rotor.",
      isCorrect: true,
      explanation: "Los cumulonimbos son extremadamente peligrosos para el vuelo libre debido a sus fuertes corrientes ascendentes y descendentes, intensa turbulencia, y la posibilidad de tormentas eléctricas, granizo y ráfagas de viento. Las nubes de rotor también son muy peligrosas ya que se forman en el lado de sotavento de obstáculos y generan turbulencias intensas y ráfagas impredecibles."
    },
    {
      text: "estratocúmulos y altostratos.",
      isCorrect: false,
      explanation: "Los estratocúmulos y altostratos están generalmente asociados con condiciones de vuelo más estables y no presentan las turbulencias extremas que hacen peligrosas a las cumulonimbos y nubes de rotor para el vuelo libre."
    },
    {
      text: "cirrostratos y estratocúmulos.",
      isCorrect: false,
      explanation: "Los cirrostratos son nubes altas y finas que no presentan peligro para el vuelo libre, ya que no generan turbulencias. Los estratocúmulos también son relativamente estables y no presentan un peligro significativo para el vuelo libre."
    },
    {
      text: "altostratos.",
      isCorrect: false,
      explanation: "Los altostratos son nubes de nivel medio que, aunque pueden indicar el acercamiento de un frente meteorológico, no generan las turbulencias peligrosas características de los cumulonimbos y nubes de rotor."
    }
  ]
}
,

{
  topic: "meteo",

  statement: "Un cumulonimbo es peligroso:",
  image: "",
  answers: [
    {
      text: "debajo, dentro y varios kilómetros a su alrededor.",
      isCorrect: true,
      explanation: "Un cumulonimbo es peligroso en todas estas áreas. Debajo, puede generar fuertes corrientes descendentes y turbulencias; dentro, presenta intensas turbulencias, vientos fuertes, granizo y actividad eléctrica; y a varios kilómetros a su alrededor, puede influir en las condiciones del viento y crear turbulencias peligrosas debido a sus corrientes de aire."
    },
    {
      text: "solo en su cima.",
      isCorrect: false,
      explanation: "La cima del cumulonimbo no es el único lugar peligroso. La nube afecta a todo el espacio circundante y puede presentar condiciones peligrosas para el vuelo a diferentes alturas y distancias."
    },
    {
      text: "en su base y dentro.",
      isCorrect: false,
      explanation: "El cumulonimbo es peligroso no solo en su base y dentro, sino también en áreas a varios kilómetros de distancia debido a las fuertes corrientes de aire, turbulencias y cambios bruscos de las condiciones meteorológicas."
    },
    {
      text: "dentro",
      isCorrect: false,
      explanation: "El interior del cumulonimbo es muy peligroso, pero no es el único lugar que representa un riesgo. Las turbulencias y corrientes descendentes también pueden extenderse debajo y a varios kilómetros alrededor de la nube."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Los cumulonimbos son peligrosos porque:",
  image: "",
  answers: [
    {
      text: "engendran turbulencias violentas, originan brisas en el suelo que dificultan la aproximación y el aterrizaje, y son la base de ascendentes poderosas que pueden aspirar el ala al interior de la nube.",
      isCorrect: true,
      explanation: "Los cumulonimbos son peligrosos por sus turbulencias violentas, las fuertes ráfagas de viento que pueden alterar las condiciones de aproximación y aterrizaje, y las poderosas corrientes ascendentes que pueden arrastrar a las aeronaves hacia el interior de la nube."
    },
    {
      text: "engendran turbulencias violentas en altura y brisas suaves en el suelo.",
      isCorrect: false,
      explanation: "Si bien los cumulonimbos generan turbulencias violentas, las brisas en el suelo asociadas con ellos no son suaves, sino que pueden ser fuertes e impredecibles, haciendo que la aproximación y el aterrizaje sean problemáticos."
    },
    {
      text: "producen ascendentes poderosas que pueden aspirar el ala al interior de la nube, pero no afectan la aproximación y aterrizaje.",
      isCorrect: false,
      explanation: "Aunque los cumulonimbos generan ascendentes poderosas, también afectan la aproximación y el aterrizaje debido a los vientos fuertes y cambiantes que generan en el suelo."
    },
    {
      text: "originan brisas fuertes en el suelo pero no engendran turbulencias violentas en altura.",
      isCorrect: false,
      explanation: "Los cumulonimbos no solo originan brisas fuertes en el suelo, sino que también son conocidos por engendrar turbulencias violentas en altura, lo que los hace extremadamente peligrosos para el vuelo."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las nubes favorables para los vuelos de performance son:",
  image: "",
  answers: [
    {
      text: "nimbostratos, altoestratos y cumulonimbos.",
      isCorrect: false,
      explanation: "Los nimbostratos y altoestratos están asociados con condiciones de vuelo estables y no son favorables para vuelos de performance. Los cumulonimbos son peligrosos y pueden generar condiciones extremadamente turbulentas, por lo que no son adecuados para vuelos de rendimiento."
    },
    {
      text: "estratos.",
      isCorrect: false,
      explanation: "Las nubes estratos indican condiciones atmosféricas estables y no proporcionan las corrientes ascendentes necesarias para vuelos de performance."
    },
    {
      text: "cúmulos.",
      isCorrect: true,
      explanation: "Las nubes cúmulos son favorables para vuelos de performance, ya que están asociadas con ascendencias térmicas que permiten a las aeronaves ganar altura y volar largas distancias."
    },
    {
      text: "cirrocúmulos, nimbostratos y estratocúmulos.",
      isCorrect: false,
      explanation: "Los cirrocúmulos, nimbostratos y estratocúmulos no son favorables para vuelos de performance, ya que no generan las ascendencias térmicas que se necesitan para este tipo de vuelo."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Entre estas nubes, algunas anuncian mal tiempo:",
  image: "",
  answers: [
    {
      text: "cirrostratos y altoestratos.",
      isCorrect: true,
      explanation: "Los cirrostratos y altoestratos son indicadores de un cambio en el tiempo y pueden preceder la llegada de frentes cálidos o tormentas, anunciando mal tiempo de forma inminente."
    },
    {
      text: "cirrocúmulos y altocúmulos.",
      isCorrect: false,
      explanation: "Los cirrocúmulos y altocúmulos no son indicadores claros de mal tiempo. Los cirrocúmulos generalmente están asociados con condiciones de buen tiempo, y los altocúmulos pueden indicar inestabilidad, pero no necesariamente la llegada de mal tiempo."
    },
    {
      text: "estratocúmulos y cirrocúmulos.",
      isCorrect: false,
      explanation: "Las nubes estratocúmulos suelen indicar condiciones meteorológicas más estables, y los cirrocúmulos están asociados con buen tiempo. Ninguna de estas nubes es un indicador claro de mal tiempo."
    },
    {
      text: "altocúmulos.",
      isCorrect: false,
      explanation: "Los altocúmulos pueden señalar cierta inestabilidad atmosférica, pero no son un signo confiable de mal tiempo inminente."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "La atmósfera está formada por capas. La capa en la que vivimos se llama:",
  image: "",
  answers: [
    {
      text: "ionosfera.",
      isCorrect: false,
      explanation: "La ionosfera es una capa que se extiende aproximadamente desde los 60 km hasta 1,000 km de altitud. Está ionizada por la radiación solar y es importante para la propagación de ondas de radio, pero no es la capa en la que vivimos."
    },
    {
      text: "troposfera.",
      isCorrect: true,
      explanation: "La troposfera es la capa más baja de la atmósfera, donde vivimos. Se extiende desde la superficie terrestre hasta unos 8-15 km de altitud y es donde ocurren la mayoría de los fenómenos meteorológicos."
    },
    {
      text: "estratosfera.",
      isCorrect: false,
      explanation: "La estratosfera se encuentra justo por encima de la troposfera, desde aproximadamente 10-15 km hasta 50 km de altitud. Contiene la capa de ozono, pero no es la capa donde vivimos."
    },
    {
      text: "mesosfera.",
      isCorrect: false,
      explanation: "La mesosfera se sitúa por encima de la estratosfera, extendiéndose aproximadamente desde los 50 km hasta 85 km de altitud. No es la capa en la que vivimos."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "En meteo una masa de aire se caracteriza por:",
  image: "",
  answers: [
    {
      text: "su temperatura, su presión, su humedad y la distribución vertical de la temperatura.",
      isCorrect: true,
      explanation: "Una masa de aire en meteo se caracteriza por su temperatura, su presión, su humedad, y cómo la temperatura se distribuye verticalmente a través de la masa de aire. Estas características determinan el comportamiento y los efectos de la masa de aire en las condiciones meteorológicas."
    },
    {
      text: "su temperatura y la dirección del viento.",
      isCorrect: false,
      explanation: "Aunque la temperatura es una característica importante de una masa de aire, la dirección del viento no define una masa de aire. El viento es un resultado del movimiento de las masas de aire y no una de sus características principales."
    },
    {
      text: "su velocidad y su humedad.",
      isCorrect: false,
      explanation: "La humedad es una característica de una masa de aire, pero la velocidad no lo es. La velocidad se refiere al movimiento del aire y no a las propiedades intrínsecas de la masa de aire en sí misma."
    },
    {
      text: "su presión y su velocidad.",
      isCorrect: false,
      explanation: "Aunque la presión es una característica de una masa de aire, la velocidad no define una masa de aire. La velocidad es más bien un factor relacionado con el movimiento de la masa de aire, no una característica que la defina."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "El hectoPascal es una unidad de:",
  image: "",
  answers: [
    {
      text: "presión.",
      isCorrect: true,
      explanation: "El hectoPascal (hPa) es una unidad de medida de presión atmosférica. Es equivalente a 100 pascales y es ampliamente utilizado en meteo."
    },
    {
      text: "temperatura.",
      isCorrect: false,
      explanation: "La temperatura se mide en grados Celsius (°C), Fahrenheit (°F), o Kelvin (K)."
    },
    {
      text: "humedad.",
      isCorrect: false,
      explanation: "La humedad se mide en porcentaje (%) de humedad relativa."
    },
    {
      text: "velocidad del viento.",
      isCorrect: false,
      explanation: "La velocidad del viento se mide en metros por segundo (m/s) o kilómetros por hora (km/h)."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "La presión atmosférica se debe:",
  image: "",
  answers: [
    {
      text: "a la rotación de la tierra sobre sí misma.",
      isCorrect: false,
      explanation: "La rotación de la Tierra afecta los patrones de viento y la distribución de la presión, pero no es la causa directa de la presión atmosférica."
    },
    {
      text: "al peso de la columna de aire situada encima.",
      isCorrect: true,
      explanation: "La presión atmosférica es causada por el peso de la columna de aire que se encuentra sobre un punto determinado en la superficie terrestre. Es mayor a nivel del mar y disminuye con la altitud."
    },
    {
      text: "al calentamiento solar.",
      isCorrect: false,
      explanation: "El calentamiento solar influye en la temperatura y distribución de la presión, pero no es la causa directa de la presión atmosférica."
    },
    {
      text: "a la fuerza gravitatoria de la Luna.",
      isCorrect: false,
      explanation: "La fuerza gravitatoria de la Luna afecta las mareas en la Tierra, pero no tiene un impacto directo en la presión atmosférica."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "El aire caliente:",
  image: "",
  answers: [
    {
      text: "es más liviano que el aire frío.",
      isCorrect: true,
      explanation: "El aire caliente es menos denso y, por lo tanto, más liviano que el aire frío. Esto hace que tienda a elevarse."
    },
    {
      text: "tiende a bajar con respecto al aire frío.",
      isCorrect: false,
      explanation: "El aire caliente no desciende con respecto al aire frío; más bien, se eleva porque es menos denso."
    },
    {
      text: "es incapaz de moverse hacia arriba.",
      isCorrect: false,
      explanation: "El aire caliente tiende a moverse hacia arriba porque es menos denso que el aire frío. Esta propiedad es fundamental en la formación de corrientes ascendentes."
    },
    {
      text: "es más denso que el aire frío.",
      isCorrect: false,
      explanation: "El aire caliente es menos denso que el aire frío, razón por la cual tiende a subir cuando están en contacto."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Con respecto al aire caliente, a presión y volúmenes iguales, el aire frío es: ",
  image: "",
  answers: [
    {
      text: "más pesado.",
      isCorrect: true,
      explanation: "El aire frío es más denso y, por lo tanto, más pesado que el aire caliente cuando se compara a presión y volúmenes iguales."
    },
    {
      text: "más liviano.",
      isCorrect: false,
      explanation: "El aire frío es más denso y pesado que el aire caliente, no más liviano, cuando se mantienen iguales la presión y el volumen."
    },
    {
      text: "idéntico.",
      isCorrect: false,
      explanation: "El aire frío no es idéntico al aire caliente; la densidad y peso del aire frío son mayores en comparación con el aire caliente a la misma presión y volumen."
    },
    {
      text: "menos denso.",
      isCorrect: false,
      explanation: "El aire frío es más denso que el aire caliente a presión y volúmenes iguales, no menos denso."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Cuando una partícula atmosférica no saturada se eleva sin intercambiar calor con el aire circundante, su temperatura:",
  image: "",
  answers: [
    {
      text: "disminuye 1 grado cada 100 mts.",
      isCorrect: true,
      explanation: "En un proceso adiabático seco, la temperatura de una partícula atmosférica no saturada disminuye aproximadamente 1 grado Celsius por cada 100 metros que asciende."
    },
    {
      text: "aumenta 1 grado cada 100 mts.",
      isCorrect: false,
      explanation: "La temperatura no aumenta; en un proceso adiabático seco, la partícula pierde temperatura a medida que asciende debido a la expansión del aire."
    },
    {
      text: "queda constante.",
      isCorrect: false,
      explanation: "La temperatura de una partícula atmosférica que se eleva no permanece constante; disminuye debido a la expansión del aire en un proceso adiabático seco."
    },
    {
      text: "disminuye 0.5 grados cada 100 mts.",
      isCorrect: false,
      explanation: "La tasa de enfriamiento adiabático seco es de aproximadamente 1 grado Celsius por cada 100 metros, no 0.5 grados."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Dentro de una masa de aire sin nubes, la temperatura es de 15 grados a ras del suelo y de 12 grados a 500 mts. Esta franja de aire es:",
  image: "",
  answers: [
    {
      text: "más bien estable (0.6 grados / 100m = menor que 1).",
      isCorrect: true,
      explanation: "El gradiente térmico es la tasa de cambio de la temperatura con la altitud. En este caso, la temperatura disminuye 3 grados en 500 metros, lo que equivale a 0.6 grados por cada 100 metros (3 grados / 5 = 0.6 grados/100 m). Como este valor es menor que el gradiente adiabático seco (1 grado por 100 metros), indica que la atmósfera es más bien estable."
    },
    {
      text: "más bien inestable.",
      isCorrect: false,
      explanation: "Una atmósfera inestable tendría un gradiente térmico mayor, cercano o superior al gradiente adiabático seco de 1 grado por cada 100 metros. Aquí, el gradiente térmico es de 0.6 grados por cada 100 metros (3 grados / 5 = 0.6 grados/100 m), lo que indica estabilidad."
    },
    {
      text: "probablemente el asentamiento de una inversión.",
      isCorrect: false,
      explanation: "Una inversión térmica ocurre cuando la temperatura aumenta con la altitud. En este caso, la temperatura disminuye con la altitud, por lo que no es un asentamiento de inversión."
    },
    {
      text: "un caso típico de una atmósfera superadiabática.",
      isCorrect: false,
      explanation: "Una atmósfera superadiabática tiene un gradiente térmico que es mayor que el gradiente adiabático seco (más de 1 grado por cada 100 metros). En este caso, el gradiente es de 0.6 grados por 100 metros (3 grados / 5 = 0.6 grados/100 m), lo que indica una atmósfera más bien estable."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Hay una inversión de temperatura entre estos tres relevamientos:",
  image: "",
  answers: [
    {
      text: "-2 grados a 500 mts./-10 grados a 1200 mts. de altura.",
      isCorrect: false,
      explanation: "No hay inversión de temperatura aquí; la temperatura disminuye con la altura, lo cual es el comportamiento normal en la atmósfera."
    },
    {
      text: "+22 grados a 500 mts./+18 grados a 1000 mts. de altura.",
      isCorrect: false,
      explanation: "La temperatura disminuye con la altura en este caso, lo cual es normal. No hay inversión de temperatura ya que una inversión implica un aumento de temperatura con la altitud."
    },
    {
      text: "+18 grados a 500 mts./+22 grados a 1000 mts. de altura.",
      isCorrect: true,
      explanation: "Este es un caso de inversión térmica, ya que la temperatura aumenta con la altitud, pasando de +18 grados a +22 grados entre los 500 y 1000 metros, lo cual es contrario a la tendencia habitual."
    },
    {
      text: "+15 grados a 600 mts./+10 grados a 1200 mts. de altura.",
      isCorrect: false,
      explanation: "En este caso, la temperatura disminuye con la altitud, lo cual es normal y no representa una inversión térmica."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "El calor solar se propaga dentro de la atmósfera según los siguientes procesos:",
  image: "",
  answers: [
    {
      text: "conducción, radiación, convección y evaporación/condensación.",
      isCorrect: true,
      explanation: "El calor solar se propaga a través de varios procesos: la radiación transmite el calor desde el Sol a la superficie de la Tierra; la conducción transfiere calor desde la superficie a las capas más bajas de la atmósfera; la convección transporta el aire caliente hacia arriba; y la evaporación/condensación libera o absorbe calor, contribuyendo a la redistribución de energía dentro de la atmósfera."
    },
    {
      text: "conducción, radiación y gradiente.",
      isCorrect: false,
      explanation: "El gradiente no es un proceso de transferencia de calor, sino que se refiere a la variación de temperatura con la altitud. Los principales procesos de transferencia de calor incluyen conducción, radiación, convección, y evaporación/condensación."
    },
    {
      text: "conducción y condensación únicamente.",
      isCorrect: false,
      explanation: "Aunque la conducción y la condensación son formas de transferencia de calor, no son los únicos procesos. La radiación y la convección también juegan roles cruciales en la propagación del calor dentro de la atmósfera."
    },
    {
      text: "evaporación y condensación.",
      isCorrect: false,
      explanation: "La evaporación y condensación son procesos que contribuyen a la transferencia de calor, pero por sí solas no representan todos los mecanismos principales. La conducción, radiación y convección también son esenciales para la propagación del calor solar en la atmósfera."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "El sol calienta la atmósfera principalmente:",
  image: "",
  answers: [
    {
      text: "directamente por radiación.",
      isCorrect: false,
      explanation: "La radiación solar calienta principalmente la superficie de la Tierra, no la atmósfera de forma directa. La mayor parte del calor en la atmósfera proviene de la transferencia de calor desde el suelo."
    },
    {
      text: "directamente por convección.",
      isCorrect: false,
      explanation: "La convección es un proceso que ocurre después de que el suelo ha sido calentado por la radiación solar. No es un medio directo a través del cual el Sol calienta la atmósfera."
    },
    {
      text: "indirectamente por intermedio del suelo.",
      isCorrect: true,
      explanation: "El sol calienta la superficie terrestre, que a su vez transfiere calor a la atmósfera. Este proceso de calentamiento indirecto es la principal manera en que el aire se calienta."
    },
    {
      text: "mediante la absorción directa de la radiación ultravioleta por el aire.",
      isCorrect: false,
      explanation: "Aunque ciertas capas de la atmósfera, como la estratosfera, absorben radiación ultravioleta, este no es el principal mecanismo de calentamiento de la atmósfera en su conjunto. La mayor parte del calentamiento se produce a través del calor transferido desde el suelo."
    }
  ]
},

{
  topic: "meteo",

  statement: "El calor se propaga por:",
  image: "",
  answers: [
    {
      text: "convección, conducción y radiación.",
      isCorrect: true,
      explanation: "El calor se transfiere a través de tres procesos principales: la conducción (transferencia de calor a través de un material sólido), la convección (movimiento de calor en fluidos como el aire o el agua), y la radiación (transferencia de calor a través de ondas electromagnéticas)."
    },
    {
      text: "convección únicamente.",
      isCorrect: false,
      explanation: "La convección es solo uno de los métodos de transferencia de calor y ocurre en fluidos. El calor también se propaga por conducción y radiación."
    },
    {
      text: "reflexión y absorción.",
      isCorrect: false,
      explanation: "Reflexión y absorción no son procesos de propagación del calor. Son fenómenos que ocurren cuando la radiación interactúa con superficies, pero no describen cómo el calor se transfiere de un lugar a otro."
    },
    {
      text: "sólo por radiación.",
      isCorrect: false,
      explanation: "Aunque la radiación es un proceso importante de transferencia de calor, el calor también se propaga por conducción y convección, por lo que no es el único método."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Se llama anticiclón a una zona:",
  image: "",
  answers: [
    {
      text: "de alta presión y vientos débiles",
      isCorrect: true,
      explanation: "Un anticiclón es una zona de alta presión donde el aire desciende y se dispersa hacia afuera. Los vientos en un anticiclón suelen ser débiles y se mueven en sentido horario en el hemisferio norte y antihorario en el hemisferio sur."
    },
    {
      text: "de baja presión y vientos débiles.",
      isCorrect: false,
      explanation: "Una zona de baja presión se llama ciclón, no anticiclón. Los ciclones suelen estar asociados con vientos más fuertes y condiciones meteorológicas inestables."
    },
    {
      text: "de alta temperatura y vientos fuertes.",
      isCorrect: false,
      explanation: "La característica principal de un anticiclón es la alta presión, no necesariamente la temperatura. Además, los vientos en un anticiclón son generalmente débiles, no fuertes."
    },
    {
      text: "de vientos fuertes.",
      isCorrect: false,
      explanation: "Los anticiclones se asocian típicamente con vientos débiles, no fuertes. Los vientos fuertes son más comunes en zonas de baja presión o ciclones."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Los anticiclones son el asentamiento de:",
  image: "",
  answers: [
    {
      text: "vientos débiles y un movimiento general descendente de masas de aire",
      isCorrect: true,
      explanation: "Los anticiclones se caracterizan por vientos débiles y un movimiento descendente de masas de aire, lo que genera una mayor estabilidad atmosférica y, a menudo, condiciones de tiempo despejado."
    },
    {
      text: "vientos débiles y un movimiento general ascendente de masas de aire.",
      isCorrect: false,
      explanation: "Los vientos débiles son característicos de los anticiclones, pero el movimiento de aire es descendente, no ascendente. El aire descendente es lo que contribuye a la estabilidad y al tiempo despejado asociado con los anticiclones."
    },
    {
      text: "vientos fuertes y un movimiento general ascendente de masas de aire",
      isCorrect: false,
      explanation: "Los anticiclones no se asocian con vientos fuertes ni con un movimiento ascendente de aire. Es el movimiento descendente y los vientos débiles lo que define un anticiclón."
    },
    {
      text: "vientos fuertes y un movimiento general descendente de masas de aire.",
      isCorrect: false,
      explanation: "Aunque el aire se mueve de forma descendente en un anticiclón, los vientos suelen ser débiles, no fuertes. Los vientos fuertes son más típicos de sistemas de baja presión o ciclones."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Llamamos brisa de ladera descendente (catabática):",
  image: "",
  answers: [
    {
      text: "un viento frío que baja por los valles.",
      isCorrect: true,
      explanation: "La brisa catabática es un viento frío que desciende por laderas y valles, generalmente durante la noche, cuando el aire se enfría y se vuelve más denso, lo que causa que se desplace hacia abajo por gravedad."
    },
    {
      text: "un viento meteo que baja a lo largo de una pendiente.",
      isCorrect: false,
      explanation: "Un viento 'meteo' no es un término adecuado para describir la brisa catabática. La brisa catabática es específicamente un viento frío que desciende por la pendiente debido a la densidad del aire."
    },
    {
      text: "un viento que como consecuencia de la convección baja a lo largo de una pendiente.",
      isCorrect: false,
      explanation: "La convección es un proceso que involucra el movimiento ascendente del aire caliente. La brisa catabática no es resultado de convección, sino de enfriamiento y descenso del aire por gravedad."
    },
    {
      text: "un viento cálido que desciende por las laderas.",
      isCorrect: false,
      explanation: "La brisa catabática es un viento frío, no cálido, que desciende por las laderas o valles durante la noche o en condiciones de enfriamiento."
    }
  ]
},

{
  topic: "meteo",

  statement: "La turbulencia:",
  image: "",
  answers: [
    {
      text: "es un movimiento desordenado de partículas de aire que provoca variaciones de incidencia y de velocidad de vuelo.",
      isCorrect: true,
      explanation: "La turbulencia es un movimiento desordenado del aire que puede causar cambios bruscos en la dirección y velocidad de una aeronave, afectando su ángulo de incidencia y velocidad de vuelo."
    },
    {
      text: "siempre es visible.",
      isCorrect: false,
      explanation: "La turbulencia no siempre es visible; puede ocurrir en aire claro, sin nubes u otros indicadores visuales, lo que la hace más peligrosa para los pilotos."
    },
    {
      text: "es un fenómeno exclusivamente meteorológico.",
      isCorrect: false,
      explanation: "La turbulencia puede ser causada por varios factores, no solo por fenómenos meteorológicos; por ejemplo, puede generarse por el flujo alrededor de obstáculos como montañas o edificios."
    },
    {
      text: "solo ocurre en condiciones de mal tiempo.",
      isCorrect: false,
      explanation: "La turbulencia puede ocurrir en condiciones de buen tiempo, como en aire claro o en zonas de convección térmica, y no se limita a situaciones de mal tiempo."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las turbulencias pueden producirse por:",
  image: "",
  answers: [
    {
      text: "el relieve, el encuentro de dos vientos diferentes y ascendentes térmicas.",
      isCorrect: true,
      explanation: "Las turbulencias pueden originarse por el relieve (cuando el aire interactúa con montañas u otros obstáculos), por el encuentro de dos vientos con direcciones o velocidades diferentes, y por las corrientes ascendentes térmicas causadas por el calentamiento desigual del suelo."
    },
    {
      text: "la humedad en el aire.",
      isCorrect: false,
      explanation: "La humedad por sí sola no produce turbulencias. Si bien puede influir en la formación de nubes y condiciones meteorológicas, no es una causa directa de turbulencia."
    },
    {
      text: "la falta de viento.",
      isCorrect: false,
      explanation: "La falta de viento no genera turbulencia. La turbulencia se debe a movimientos desordenados del aire, que suelen ser causados por la presencia y la interacción de vientos o corrientes."
    },
    {
      text: "la ausencia de sol.",
      isCorrect: false,
      explanation: "La ausencia de sol no es un factor que cause turbulencia. En realidad, el calor del sol genera ascendentes térmicas que pueden contribuir a la turbulencia durante el día."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Un viento de 20 kt (nudos) sopla a:",
  image: "",
  answers: [
    {
      text: "18 km/h.",
      isCorrect: false,
      explanation: "Para convertir nudos a km/h, se multiplica el valor en nudos por 1.852. En este caso, 20 kt equivale a 37.04 km/h, por lo que 18 km/h es incorrecto."
    },
    {
      text: "36 km/h.",
      isCorrect: true,
      explanation: "Un viento de 20 kt es aproximadamente 37.04 km/h (20 x 1.852). 36 km/h es una aproximación cercana, por lo que esta respuesta es considerada correcta."
    },
    {
      text: "20 km/h.",
      isCorrect: false,
      explanation: "1 kt no es igual a 1 km/h; 1 kt equivale a 1.852 km/h. Por lo tanto, un viento de 20 kt es mucho más rápido que 20 km/h."
    },
    {
      text: "40 km/h.",
      isCorrect: false,
      explanation: "Un viento de 20 kt equivale a aproximadamente 37.04 km/h, no 40 km/h. Esta respuesta es una sobreestimación de la velocidad."
    }
  ]
},

{
  topic: "meteo",

  statement: "La dirección del viento dada por los servicios meteorológicos siempre es:",
  image: "",
  answers: [
    {
      text: "la dirección de donde viene el viento.",
      isCorrect: true,
      explanation: "La dirección del viento que informan los servicios meteorológicos siempre indica de dónde proviene el viento. Por ejemplo, un viento del norte significa que el viento viene del norte."
    },
    {
      text: "la dirección adonde va el viento.",
      isCorrect: false,
      explanation: "La dirección del viento no se describe por adonde va, sino de donde proviene. Esto es un estándar en meteo."
    },
    {
      text: "la dirección perpendicular a su movimiento.",
      isCorrect: false,
      explanation: "La dirección del viento no se expresa como perpendicular a su movimiento. Siempre se indica desde donde viene."
    },
    {
      text: "la dirección relativa al observador.",
      isCorrect: false,
      explanation: "La dirección del viento no se da en función del observador, sino como una dirección cardinal fija de donde el viento procede."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Un viento 'de 225 grados' es un viento:",
  image: "",
  answers: [
    {
      text: "que proviene del rumbo 225 grados y sopla hacia el nordeste.",
      isCorrect: true,
      explanation: "Un viento 'de 225 grados' significa que el viento se origina en la dirección suroeste (225 grados) y se desplaza hacia el nordeste. En meteo, los grados indican siempre la dirección de donde viene el viento."
    },
    {
      text: "que sopla hacia el rumbo 225 grados hacia el norte.",
      isCorrect: false,
      explanation: "Un viento 'de 225 grados' no sopla hacia esa dirección; en realidad, proviene de 225 grados y se mueve hacia el nordeste. Además, el rumbo 225 grados no apunta hacia el norte sino hacia el suroeste."
    },
    {
      text: "que sopla del rumbo 225 grados hacia el sudeste.",
      isCorrect: false,
      explanation: "Un viento 'de 225 grados' proviene del suroeste y sopla hacia el nordeste, no hacia el sudeste."
    },
    {
      text: "que proviene del rumbo 45 grados hacia el sureste.",
      isCorrect: false,
      explanation: "Un viento que proviene de 45 grados sopla desde el nordeste, no tiene relación con un viento que viene de 225 grados (suroeste) ni sopla hacia el sureste."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Los vientos giran alrededor de las zonas de altas presiones:",
  image: "",
  answers: [
    {
      text: "en sentido horario en el hemisferio norte y en sentido antihorario en el hemisferio sur.",
      isCorrect: true,
      explanation: "En las zonas de altas presiones, los vientos giran en sentido horario en el hemisferio norte y en sentido antihorario en el hemisferio sur debido al efecto Coriolis."
    },
    {
      text: "en sentido antihorario en el hemisferio norte.",
      isCorrect: false,
      explanation: "En el hemisferio norte, los vientos giran en sentido horario alrededor de las altas presiones, no en sentido antihorario."
    },
    {
      text: "en el sentido horario en el hemisferio sur.",
      isCorrect: false,
      explanation: "En el hemisferio sur, los vientos giran en sentido antihorario alrededor de las zonas de altas presiones, no en sentido horario."
    },
    {
      text: "en línea recta desde el centro de alta presión.",
      isCorrect: false,
      explanation: "Los vientos no se desplazan en línea recta desde el centro de alta presión, sino que giran alrededor debido a la rotación de la Tierra y al efecto Coriolis."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "La siguiente situación se llama inversión de la temperatura:",
  image: "",
  answers: [
    {
      text: "una capa de aire caliente está por encima de una capa de aire frío, bloqueando el desarrollo de las ascendentes.",
      isCorrect: true,
      explanation: "Una inversión de temperatura ocurre cuando una capa de aire caliente se sitúa sobre una capa de aire frío, lo que estabiliza la atmósfera e impide que las corrientes ascendentes se desarrollen. Esto limita la convección y la mezcla del aire."
    },
    {
      text: "una capa de aire frío está por encima de una capa de aire caliente, bloqueando el desarrollo de las ascendentes.",
      isCorrect: false,
      explanation: "En condiciones normales, el aire es más frío a medida que subimos en la altitud. Una capa de aire frío sobre aire caliente no representa una inversión de temperatura y generalmente no bloquea las corrientes ascendentes."
    },
    {
      text: "una capa de aire caliente está por encima de una capa de aire frío, favoreciendo el desarrollo de las ascendentes.",
      isCorrect: false,
      explanation: "Cuando una capa de aire caliente se encuentra sobre aire frío, en realidad inhibe las corrientes ascendentes, no las favorece. Esto es lo que caracteriza una inversión de temperatura."
    },
    {
      text: "una capa de aire frío se mueve rápidamente por encima de otra capa fría.",
      isCorrect: false,
      explanation: "Esto no representa una inversión de temperatura, sino un fenómeno que podría estar relacionado con la formación de frentes fríos u otros eventos meteorológicos. No implica el bloqueo de corrientes ascendentes."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Dentro de una atmósfera con tendencia inestable:",
  image: "",
  answers: [
    {
      text: "la temperatura decrece rápidamente cuando uno gana altura y los cúmulos tienen tendencia a desarrollarse.",
      isCorrect: true,
      explanation: "En una atmósfera inestable, la temperatura disminuye rápidamente con la altitud, lo que favorece la formación y desarrollo de nubes cúmulos debido a las corrientes ascendentes más intensas, proporcionando condiciones favorables para el vuelo térmico."
    },
    {
      text: "hay pocas ascendentes.",
      isCorrect: false,
      explanation: "En realidad, en una atmósfera inestable hay más corrientes ascendentes, ya que el aire caliente asciende al disminuir la temperatura con la altitud, generando ascendencias más intensas."
    },
    {
      text: "los estratos tienen tendencia a desarrollarse.",
      isCorrect: false,
      explanation: "Los estratos se desarrollan en condiciones atmosféricas estables donde hay menos movimientos ascendentes, mientras que en atmósferas inestables los cúmulos predominan debido a las corrientes ascendentes."
    },
    {
      text: "la temperatura crece rápidamente cuando uno gana altura y los estratos tienen tendencia a desarrollarse.",
      isCorrect: false,
      explanation: "En una atmósfera inestable, la temperatura no aumenta sino que decrece con la altura, lo que fomenta el desarrollo de cúmulos en lugar de estratos. Los estratos se asocian a atmósferas estables donde la temperatura varía poco con la altitud."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Cuando dos masas de aire de temperaturas diferentes se encuentran:",
  image: "",
  answers: [
    {
      text: "se mezclan fácilmente.",
      isCorrect: false,
      explanation: "Las masas de aire de diferentes temperaturas no se mezclan fácilmente. En lugar de eso, tienden a formar una frontera o frente debido a sus diferencias en densidad."
    },
    {
      text: "el aire más caliente se eleva por encima del aire más frío.",
      isCorrect: true,
      explanation: "El aire caliente es menos denso que el aire frío, por lo que al encontrarse, el aire caliente tiende a ascender por encima del aire más frío, creando un frente cálido que puede dar lugar a la formación de nubes y posibles precipitaciones."
    },
    {
      text: "el aire más caliente se infiltra por debajo del aire más frío.",
      isCorrect: false,
      explanation: "El aire más caliente no se infiltra por debajo del aire más frío debido a su menor densidad; en lugar de eso, asciende sobre el aire frío."
    },
    {
      text: "las dos masas de aire se mantienen separadas sin interacción.",
      isCorrect: false,
      explanation: "Cuando dos masas de aire de diferentes temperaturas se encuentran, siempre hay alguna forma de interacción, ya sea que el aire caliente ascienda sobre el frío o que se forme un frente, pero no permanecen completamente separadas sin interacción."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Cuando pasa un frente, el aire caliente:",
  image: "",
  answers: [
    {
      text: "se eleva.",
      isCorrect: true,
      explanation: "Cuando un frente pasa, el aire caliente, al ser menos denso, se eleva por encima del aire frío, lo que puede generar nubes y precipitaciones, especialmente si el aire caliente es húmedo."
    },
    {
      text: "levanta al aire frío.",
      isCorrect: false,
      explanation: "El aire caliente no tiene la capacidad de levantar el aire frío, ya que el aire frío es más denso y tiende a permanecer en niveles más bajos mientras el aire caliente asciende."
    },
    {
      text: "puede ser enviado hacia abajo o elevado según la situación.",
      isCorrect: false,
      explanation: "El aire caliente siempre tiende a elevarse cuando se encuentra con aire frío debido a su menor densidad, y no desciende en este tipo de interacción."
    },
    {
      text: "se mezcla uniformemente con el aire frío.",
      isCorrect: false,
      explanation: "El aire caliente no se mezcla de manera uniforme con el aire frío. En lugar de eso, se eleva sobre el aire frío al ser menos denso, formando un frente donde ocurre la interacción."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las tendencias generales de un frente frío son:",
  image: "",
  answers: [
    {
      text: "empeoramiento rápido con lluvia, tormentas, viento fuerte, turbulencias.",
      isCorrect: true,
      explanation: "Los frentes fríos están asociados con cambios rápidos y bruscos en el clima, provocando lluvias intensas, tormentas, vientos fuertes y turbulencias, ya que el aire frío denso desplaza rápidamente al aire caliente, creando condiciones inestables."
    },
    {
      text: "empeoramiento lento con lluvia moderada.",
      isCorrect: false,
      explanation: "El empeoramiento lento con lluvia moderada es típico de un frente cálido, donde el aire caliente asciende lentamente sobre el aire frío, resultando en precipitaciones más suaves y constantes."
    },
    {
      text: "empeoramiento lento con tiempo brumoso, cubierto con llovizna.",
      isCorrect: false,
      explanation: "Las condiciones de tiempo brumoso, cubierto y con llovizna son características de un frente cálido, no de un frente frío que provoca cambios más rápidos y severos en el clima."
    },
    {
      text: "empeoramiento rápido con lluvia, viento débil y sin turbulencias.",
      isCorrect: false,
      explanation: "Un frente frío no se caracteriza por vientos débiles y la ausencia de turbulencias; por el contrario, genera vientos fuertes y turbulencias debido al rápido desplazamiento del aire frío y su interacción con el aire caliente."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Un frente frío:",
  image: "",
  answers: [
    {
      text: "es confiable (aire frío = aire estable).",
      isCorrect: false,
      explanation: "Aunque el aire frío tiende a ser más estable que el aire caliente, un frente frío no es confiable. Al pasar, genera inestabilidad atmosférica, con fuertes precipitaciones, ráfagas de viento y turbulencias debido al desplazamiento rápido del aire frío sobre el aire caliente."
    },
    {
      text: "puede dar lugar a fuertes precipitaciones, turbulencias y golpes de viento.",
      isCorrect: true,
      explanation: "Un frente frío suele provocar condiciones meteorológicas inestables, como fuertes precipitaciones, turbulencias y golpes de viento, ya que el aire frío desplaza al aire caliente, lo que causa movimientos verticales intensos y la formación de nubes de desarrollo vertical."
    },
    {
      text: "provoca un aumento gradual de la temperatura.",
      isCorrect: false,
      explanation: "El paso de un frente frío generalmente causa un descenso abrupto de la temperatura, ya que el aire frío reemplaza rápidamente al aire caliente, produciendo un cambio notable en las condiciones térmicas."
    },
    {
      text: "da lugar a precipitaciones moderadas, origina poco viento y por lo tanto es confiable.",
      isCorrect: false,
      explanation: "Un frente frío no suele ser confiable ni generar precipitaciones moderadas y poco viento. En su paso, trae consigo condiciones climáticas más severas, como lluvias intensas, vientos fuertes y turbulencias."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Cuando pasa un frente cálido:",
  image: "",
  answers: [
    {
      text: "las lluvias son continuas, el aire está muy húmedo y el sistema nuboso es importante.",
      isCorrect: true,
      explanation: "Cuando pasa un frente cálido, el aire caliente asciende gradualmente sobre el aire frío, lo que provoca lluvias continuas. El aire se vuelve muy húmedo y el sistema nuboso suele ser extenso e importante, con nubes como nimbostratos y estratos que generan lluvias persistentes."
    },
    {
      text: "las lluvias son continuas y violentas.",
      isCorrect: false,
      explanation: "Las lluvias continuas y violentas son más características de un frente frío. En un frente cálido, las lluvias son continuas pero generalmente de intensidad moderada, no violentas."
    },
    {
      text: "las lluvias son continuas, el aire está poco húmedo y el sistema nuboso es importante.",
      isCorrect: false,
      explanation: "El aire durante el paso de un frente cálido es muy húmedo, no poco húmedo. La humedad aumenta a medida que el aire caliente se desplaza sobre el aire frío y se genera un sistema nuboso importante que causa lluvias continuas."
    },
    {
      text: "las lluvias son intermitentes, el aire está muy húmedo y el sistema nuboso es importante.",
      isCorrect: false,
      explanation: "Las lluvias asociadas a un frente cálido no son intermitentes, sino continuas y persistentes, ya que el aire caliente se eleva lentamente sobre el aire frío, lo que provoca precipitaciones más constantes."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "La cola de una perturbación es la zona:",
  image: "",
  answers: [
    {
      text: "de aire caliente ubicada entre los frentes frío y cálido.",
      isCorrect: false,
      explanation: "El aire caliente ubicado entre los frentes frío y cálido se encuentra en la zona conocida como 'sector cálido', no en la cola de la perturbación."
    },
    {
      text: "de aire frío que se encuentra detrás del frente frío.",
      isCorrect: true,
      explanation: "La cola de una perturbación es la zona de aire frío que sigue al frente frío, ya que una vez que el frente frío pasa, el aire frío más denso se establece en esta región."
    },
    {
      text: "de nubes muy desarrolladas que llegan con el frente frío.",
      isCorrect: false,
      explanation: "Las nubes muy desarrolladas, como los cumulonimbos, están asociadas con el paso del frente frío, pero no se consideran la cola de la perturbación."
    },
    {
      text: "de aire en calma después del paso del frente cálido.",
      isCorrect: false,
      explanation: "El aire en calma no es una característica de la cola de una perturbación. Detrás del frente frío, se experimenta generalmente aire frío y a menudo viento, lo que caracteriza la cola de la perturbación."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "La cola de una perturbación:",
  image: "",
  answers: [
    {
      text: "se caracteriza por un cielo azul, lleno de pequeños cúmulos atractivos, pero a veces provoca condiciones demasiado violentas para el vuelo libre.",
      isCorrect: true,
      explanation: "La cola de una perturbación puede mostrar un cielo azul con cúmulos atractivos, pero al principio puede haber condiciones turbulentas y violentas que no son seguras para el vuelo libre."
    },
    {
      text: "es siempre favorable para el vuelo libre.",
      isCorrect: false,
      explanation: "La cola de una perturbación no es siempre favorable para el vuelo libre, ya que al inicio puede haber condiciones de viento y turbulencia que hacen que el vuelo libre sea peligroso."
    },
    {
      text: "se caracteriza por un cielo azul, lleno de pequeños cúmulos atractivos y siempre provoca condiciones favorables para el vuelo libre.",
      isCorrect: false,
      explanation: "Aunque puede presentar un cielo azul y cúmulos atractivos, no siempre garantiza condiciones favorables para el vuelo libre, especialmente al inicio del período, cuando puede ser violento."
    },
    {
      text: "es generalmente muy favorable en invierno e ideal para aprovechar las mejores condiciones, ya que no tiene turbulencias .",
      isCorrect: false,
      explanation: "La cola de una perturbación es más favorable en verano, ya que en invierno las condiciones tienden a ser más frías y menos predecibles, lo que puede dificultar el vuelo libre."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "La situación meteorológica más favorable para la formación de tormentas aisladas es:",
  image: "",
  answers: [
    {
      text: "un anticiclón.",
      isCorrect: false,
      explanation: "Un anticiclón está asociado con condiciones de alta presión y aire descendente, lo que genera estabilidad atmosférica y cielos despejados, dificultando la formación de tormentas aisladas."
    },
    {
      text: "una depresión.",
      isCorrect: false,
      explanation: "Aunque una depresión genera áreas de baja presión que pueden provocar tormentas, estas tienden a ser más organizadas y extensas, no necesariamente aisladas."
    },
    {
      text: "un pantano barométrico.",
      isCorrect: true,
      explanation: "Un pantano barométrico, caracterizado por una zona de presión relativamente homogénea sin predominio claro de altas o bajas presiones, genera inestabilidad atmosférica favorable para la formación de tormentas aisladas, especialmente en condiciones cálidas."
    },
    {
      text: "una línea de alta presión.",
      isCorrect: false,
      explanation: "Una línea de alta presión generalmente se asocia con estabilidad atmosférica y cielos despejados, lo que no favorece la formación de tormentas aisladas."
    }
  ]
},
{
  topic: "meteo",

  statement: "Una ascendencia dinámica pura es el resultado:",
  image: "",
  answers: [
    {
      text: "de la aceleración del viento en la cima de una montaña.",
      isCorrect: false,
      explanation: "La aceleración del viento en la cima de una montaña puede generar turbulencia y cambios en la velocidad del viento, pero no es la causa principal de una ascendencia dinámica pura."
    },
    {
      text: "del desvío hacia arriba del viento a causa de un obstáculo.",
      isCorrect: true,
      explanation: "Una ascendencia dinámica pura se produce cuando el viento es desviado hacia arriba al encontrarse con un obstáculo, como una colina o montaña, creando una corriente ascendente en la cara de barlovento de la elevación."
    },
    {
      text: "de la dilatación del aire cuando sube por una pendiente.",
      isCorrect: false,
      explanation: "La dilatación del aire al subir por una pendiente está más relacionada con la ascendencia térmica, no con la ascendencia dinámica pura, que depende del desvío del viento debido a un obstáculo."
    },
    {
      text: "de la diferencia de temperatura entre el aire en la ladera y el aire en el valle.",
      isCorrect: false,
      explanation: "La diferencia de temperatura entre el aire en la ladera y el aire en el valle está relacionada con la ascendencia térmica, no con la ascendencia dinámica pura, que se genera por el desvío del viento debido a un obstáculo."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "La zona de ascendencia dinámica varía con:",
  image: "",
  answers: [
    {
      text: "la fuerza del viento, la forma de la pendiente y la orientación de la pendiente con respecto al viento.",
      isCorrect: true,
      explanation: "La zona de ascendencia dinámica depende de la fuerza del viento, la forma de la pendiente y su orientación respecto al viento. Un viento más fuerte y una pendiente bien orientada y con una forma adecuada pueden aumentar la eficacia de la ascendencia dinámica."
    },
    {
      text: "la forma de la pendiente y la altitud del terreno sobre el nivel del mar.",
      isCorrect: false,
      explanation: "La altitud del terreno sobre el nivel del mar no afecta directamente la formación de la zona de ascendencia dinámica. Lo que importa más es la interacción del viento con el relieve."
    },
    {
      text: "la fuerza del viento y la temperatura del aire en la cima de la pendiente.",
      isCorrect: false,
      explanation: "La temperatura del aire influye más en la formación de ascendencias térmicas, no en las ascendencias dinámicas, que dependen del viento y la interacción con la pendiente."
    },
    {
      text: "la orientación y la humedad del aire en la pendiente.",
      isCorrect: false,
      explanation: "La humedad del aire no es un factor que influya directamente en la formación de la zona de ascendencia dinámica, ya que este tipo de ascendencia se basa en el movimiento del viento sobre un obstáculo."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "El viento puede ser peligroso:",
  image: "",
  answers: [
    {
      text: "en el fondo del valle donde se acelera (efecto Venturi), cuando su velocidad se aproxima o supera la del ala, y cerca de algunos filos (riesgo de ser llevado a sotavento).",
      isCorrect: true,
      explanation: "El viento es peligroso en estas condiciones: en el fondo de los valles, donde el efecto Venturi puede acelerarlo, aumentando su velocidad y generando turbulencias; cuando su velocidad se acerca o supera la del ala, lo que puede llevar a la pérdida de control y estabilidad del ala; y cerca de algunos filos, donde hay riesgo de ser arrastrado a sotavento y entrar en áreas de turbulencia."
    },
    {
      text: "en el fondo del valle donde se acelera (efecto Venturi), cerca de algunos filos, cuando su velocidad es inferior a la del ala y cuando está completamente en calma en la ladera.",
      isCorrect: false,
      explanation: "Un viento en calma no es peligroso para el vuelo, aunque puede dificultar el aprovechamiento de las ascendencias y hacer el despegue más complicado. La velocidad inferior a la del ala no representa un peligro, ya que no genera condiciones desestabilizadoras."
    },
    {
      text: "cuando su velocidad es inferior a la del ala y cuando sopla de manera constante y suave durante el día.",
      isCorrect: false,
      explanation: "Un viento que sopla de manera constante y suave es ideal para el vuelo libre, proporcionando condiciones estables y predecibles para el ala. La velocidad inferior a la del ala no implica un peligro, ya que facilita el control del vuelo."
    },
    {
      text: "en el fondo del valle donde aumenta su presión (efecto Venturi), cuando viene directamente desde barlovento a una velocidad baja.",
      isCorrect: false,
      explanation: "Un viento proveniente de barlovento a baja velocidad suele ser seguro y favorable para el vuelo libre, ya que proporciona una corriente ascendente constante en la ladera. El efecto Venturi implica aceleración del viento, no un simple aumento de presión, y solo se vuelve peligroso si la velocidad aumenta considerablemente."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Una cortina de árboles de cara al viento provoca turbulencias:",
  image: "",
  answers: [
    {
      text: "a barlovento de los mismos.",
      isCorrect: false,
      explanation: "La zona de barlovento es donde el viento incide primero sobre los árboles, y allí el flujo de aire suele ser más estable antes de encontrarse con el obstáculo. Las turbulencias no se generan en esta zona."
    },
    {
      text: "a sotavento de los mismos.",
      isCorrect: true,
      explanation: "La cortina de árboles provoca turbulencias a sotavento, ya que el viento que pasa por los árboles se vuelve irregular y turbulento al pasar por el otro lado, generando corrientes de aire caóticas y desiguales."
    },
    {
      text: "en su vertical.",
      isCorrect: false,
      explanation: "Las turbulencias no se forman exactamente en la vertical de los árboles. La mayor parte de la turbulencia se encuentra a sotavento, detrás de los árboles, donde el viento ha sido perturbado por el obstáculo."
    },
    {
      text: "en la parte superior de los árboles, sin extenderse hacia otros lados.",
      isCorrect: false,
      explanation: "Las turbulencias no se limitan solo a la parte superior de los árboles; tienden a extenderse a la zona sotavento, donde el flujo de aire es más perturbado por el obstáculo."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "El gradiente de viento existe sobretodo:",
  image: "",
  answers: [
    {
      text: "con viento fuerte y sobre terreno accidentado",
      isCorrect: true,
      explanation: "El gradiente de viento es más evidente con vientos fuertes y en terrenos accidentados, donde los obstáculos y las variaciones en la topografía generan cambios en la velocidad del viento a diferentes alturas, creando turbulencias y variaciones en el flujo de aire."
    },
    {
      text: "con viento fuerte y en terrenos llanos y despejados sin obstáculos.",
      isCorrect: false,
      explanation: "En terrenos llanos y despejados, el gradiente de viento es menos pronunciado, ya que la ausencia de obstáculos reduce la variación en la velocidad del viento a diferentes alturas, incluso cuando el viento es fuerte."
    },
    {
      text: "cuando hay poco viento y en áreas sin obstáculos.",
      isCorrect: false,
      explanation: "El gradiente de viento es prácticamente inexistente cuando hay poco viento y en áreas sin obstáculos, ya que no hay diferencias significativas en la velocidad del viento entre diferentes alturas."
    },
    {
      text: "únicamente a gran altitud, lejos del terreno.",
      isCorrect: false,
      explanation: "El gradiente de viento es más significativo cerca del terreno debido a la fricción y los obstáculos. A gran altitud, el viento suele ser más constante y el efecto del gradiente es mucho menor."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "El gradiente de viento en el aterrizaje:",
  image: "",
  answers: [
    {
      text: "depende del estado del suelo, de la velocidad del viento y aumenta la tasa de caída.",
      isCorrect: true,
      explanation: "El gradiente de viento en el aterrizaje está influenciado por el estado del suelo, ya que la fricción reduce la velocidad del viento cerca del terreno. Con vientos más fuertes, el gradiente se hace más pronunciado, lo que puede aumentar la tasa de caída al acercarse al suelo, requiriendo ajustes cuidadosos en la fase final del aterrizaje."
    },
    {
      text: "permite mantener la misma velocidad de vuelo durante todo el descenso.",
      isCorrect: false,
      explanation: "El gradiente de viento implica cambios en la velocidad del aire a medida que se desciende, lo que hace necesario ajustar la velocidad de vuelo durante el aterrizaje para mantener un control adecuado y evitar un descenso brusco."
    },
    {
      text: "reduce la tasa de caída a medida que te acercas al suelo.",
      isCorrect: false,
      explanation: "El gradiente de viento tiende a reducir la velocidad del viento cerca del suelo, lo que en realidad puede aumentar la tasa de caída, ya que el ala pierde sustentación a medida que el viento disminuye."
    },
    {
      text: "incrementa con viento débil y obliga a volar a una velocidad constante durante el aterrizaje.",
      isCorrect: false,
      explanation: "El gradiente de viento es menos pronunciado con viento débil. Además, no obliga a mantener una velocidad constante durante el aterrizaje; es necesario ajustarla para compensar los cambios en la velocidad del viento y mantener un aterrizaje controlado."
    }
  ]
}
,

{
  topic: "meteo",

  statement: "Podemos encontrar una zona de cizalladura:",
  image: "",
  answers: [
    {
      text: "atravesando una capa de inversión, entrando y saliendo de una térmica, y en una confluencia.",
      isCorrect: true,
      explanation: "La cizalladura es común al atravesar una capa de inversión, donde hay un cambio brusco en la velocidad y dirección del viento. También se presenta al entrar o salir de una térmica, donde las corrientes ascendentes interactúan con el aire circundante, y en zonas de confluencia, donde dos corrientes de aire se encuentran y generan turbulencia."
    },
    {
      text: "en una confluencia a nivel del suelo en terrenos planos.",
      isCorrect: false,
      explanation: "Aunque las confluencias pueden generar cizalladuras, estas no están limitadas a nivel del suelo ni a terrenos planos. Pueden ocurrir a diferentes altitudes y en diversos tipos de terreno, dependiendo de la interacción de las corrientes de aire."
    },
    {
      text: "únicamente en ladera de mar en condiciones de viento suave y constante.",
      isCorrect: false,
      explanation: "La cizalladura implica variaciones bruscas en la velocidad y dirección del viento, por lo que es poco probable en condiciones de viento suave y constante, que tienden a ser más uniformes y estables."
    },
    {
      text: "únicamente en ladera de montaña cuando hay ausencia de viento en todas las capas atmosféricas.",
      isCorrect: false,
      explanation: "La cizalladura es el resultado de diferencias en la velocidad o dirección del viento entre dos capas de aire. En ausencia total de viento, no pueden formarse cizalladuras, ya que no hay variación que provoque este fenómeno."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Una confluencia se encuentra habitualmente:",
  image: "",
  answers: [
    {
      text: "en la cima de un filo entre dos valles alimentados cada uno por una brisa, a lo largo de un frente de brisa de mar, y entre una brisa y un viento meteo.",
      isCorrect: true,
      explanation: "Una confluencia se produce en varios escenarios: en la cima de un filo entre dos valles, donde las brisas de cada valle se encuentran; a lo largo de un frente de brisa de mar, donde la brisa marina interactúa con el aire más cálido del interior; y en áreas donde una brisa local se encuentra con un viento meteorológico, creando una zona de convergencia y turbulencia."
    },
    {
      text: "en la cima de un filo entre dos valles alimentados por una misma brisa, en una zona completamente despejada sin influencia de vientos.",
      isCorrect: false,
      explanation: "Una confluencia requiere la interacción de dos corrientes de aire de direcciones diferentes. Si ambos valles están alimentados por la misma brisa, no se genera confluencia. Además, no se forma en zonas completamente despejadas sin la influencia de vientos, ya que la confluencia depende de la presencia de dos flujos de aire que se encuentran."
    },
    {
      text: "en la cima de un filo entre dos valles alimentados cada uno por una brisa, en áreas de alta presión donde el viento es constante y uniforme.",
      isCorrect: false,
      explanation: "Aunque la cima de un filo entre dos valles alimentados por diferentes brisas puede ser una zona de confluencia, las áreas de alta presión generalmente se caracterizan por vientos descendentes y uniformes, lo que no favorece la formación de confluencias. Las confluencias requieren la interacción de vientos de diferentes direcciones o intensidades."
    },
    {
      text: "solo en zonas costeras sin influencia del terreno.",
      isCorrect: false,
      explanation: "Si bien las confluencias son comunes en zonas costeras debido a la interacción entre la brisa de mar y el viento terrestre, no se limitan a estas áreas. También se forman en terrenos montañosos y valles donde diferentes brisas o vientos se encuentran y generan una zona de confluencia."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Con buen tiempo, al principio de la tarde, las brisas de montaña:",
  image: "",
  answers: [
    {
      text: "se fortalecen y suben las pendientes.",
      isCorrect: true,
      explanation: "Durante la tarde, con buen tiempo, el sol calienta las laderas de la montaña, lo que provoca que el aire ascienda y las brisas de montaña se fortalezcan, subiendo por las pendientes. Este fenómeno es común y se conoce como viento anabático."
    },
    {
      text: "disminuyen y bajan las pendientes.",
      isCorrect: false,
      explanation: "En realidad, durante la tarde, las brisas de montaña tienden a fortalecerse y subir, no a disminuir ni a bajar las pendientes. El aire cálido sube por las laderas debido al calentamiento solar."
    },
    {
      text: "se mantienen constantes y no suben ni bajan las pendientes.",
      isCorrect: false,
      explanation: "Las brisas de montaña no se mantienen constantes al principio de la tarde; suelen intensificarse y moverse hacia arriba a medida que las laderas se calientan por la radiación solar."
    },
    {
      text: "se desvían hacia los valles y dejan de subir las pendientes.",
      isCorrect: false,
      explanation: "Las brisas de montaña no se desvían hacia los valles en la tarde. En realidad, suben las pendientes a medida que el aire caliente asciende por la ladera, especialmente durante las horas más cálidas del día."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Con buen tiempo, la brisa de mar sopla cuando:",
  image: "",
  answers: [
    {
      text: "la tierra está más caliente que el mar.",
      isCorrect: true,
      explanation: "La brisa de mar se produce cuando la tierra se calienta más que el mar durante el día. El aire caliente sobre la tierra asciende, y el aire más fresco del mar se mueve hacia la costa para reemplazarlo, generando la brisa de mar."
    },
    {
      text: "la tierra está más fría que el mar.",
      isCorrect: false,
      explanation: "Cuando la tierra está más fría que el mar, lo que suele ocurrir por la noche, se produce el fenómeno inverso llamado 'brisa de tierra', donde el aire se desplaza desde la tierra hacia el mar."
    },
    {
      text: "la marea está bajando.",
      isCorrect: false,
      explanation: "La marea no tiene relación directa con la formación de la brisa de mar. Este fenómeno depende de las diferencias de temperatura entre la tierra y el mar, no del movimiento de la marea."
    },
    {
      text: "la marea está subiendo.",
      isCorrect: false,
      explanation: "La subida de la marea no influye en la formación de la brisa de mar. La brisa de mar se forma debido a las diferencias de temperatura entre la tierra caliente y el mar más fresco durante el día."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Con buen tiempo la brisa de tierra sopla cuando:",
  image: "",
  answers: [
    {
      text: "la tierra está más caliente que el mar.",
      isCorrect: false,
      explanation: "Cuando la tierra está más caliente que el mar, se produce la brisa de mar, no la brisa de tierra. La brisa de tierra ocurre cuando la tierra se enfría más rápido que el mar durante la noche."
    },
    {
      text: "la tierra está más fría que el mar.",
      isCorrect: true,
      explanation: "La brisa de tierra sopla cuando la tierra está más fría que el mar, generalmente durante la noche. El aire frío y denso de la tierra se desplaza hacia el mar, reemplazando el aire más cálido que se eleva sobre el agua."
    },
    {
      text: "la marea está bajando.",
      isCorrect: false,
      explanation: "La bajada de la marea no influye en la formación de la brisa de tierra. Este fenómeno depende de las diferencias de temperatura entre la tierra y el mar, no de los movimientos de la marea."
    },
    {
      text: "la marea está subiendo.",
      isCorrect: false,
      explanation: "La subida de la marea no tiene relación con la formación de la brisa de tierra. La brisa de tierra se forma debido al enfriamiento de la tierra en comparación con el mar durante la noche."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Hace buen tiempo en el valle (orientado norte-sur), de mañana, sin viento:",
  image: "",
  answers: [
    {
      text: "se va a desarrollar una brisa de montaña sobre las laderas orientadas al este.",
      isCorrect: true,
      explanation: "Por la mañana, las laderas orientadas al este reciben la luz solar primero y se calientan más rápido. Esto provoca que el aire se caliente y ascienda por estas laderas, creando una brisa de montaña que sube desde el fondo del valle hacia las laderas orientadas al este."
    },
    {
      text: "se va a desarrollar una brisa de montaña sobre las laderas orientadas al oeste.",
      isCorrect: false,
      explanation: "Las laderas orientadas al oeste no reciben la luz solar directamente por la mañana, por lo que no se calientan tanto ni tan rápido como las laderas orientadas al este. Por lo tanto, no se desarrolla una brisa de montaña significativa en las laderas occidentales a esa hora."
    },
    {
      text: "se van a desarrollar ascendentes en el centro del valle.",
      isCorrect: false,
      explanation: "En la mañana, el aire se calienta primero en las laderas orientadas al este, no en el centro del valle. Las ascendentes en el centro del valle se desarrollan más tarde, cuando el calor se acumula y genera corrientes térmicas."
    },
    {
      text: "se va a mantener un flujo de aire descendente en las laderas orientadas al este.",
      isCorrect: false,
      explanation: "Por la mañana, las laderas orientadas al este se calientan y generan un flujo ascendente, no descendente. El aire caliente sube por estas laderas, formando la brisa de montaña."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las brisas de ladera en la montaña:",
  image: "",
  answers: [
    {
      text: "aparecen antes que las brisas del valle, se originan sobre las caras con sol, son turbulentas cuando pasan térmicas, y pueden ser fortalecidas o desviadas por los vientos meteo.",
      isCorrect: true,
      explanation: "Las brisas de ladera surgen antes que las del valle, se originan en las laderas soleadas, se vuelven turbulentas con térmicas y pueden ser afectadas por los vientos meteorológicos."
    },
    {
      text: "aparecen antes que las brisas del valle y nunca son turbulentas.",
      isCorrect: false,
      explanation: "Las brisas de ladera sí pueden ser turbulentas cuando pasan térmicas. Aparecen antes que las del valle, pero no son siempre suaves."
    },
    {
      text: "se originan sobre las caras con sol, son constantes y no pueden ser fortalecidas o desviadas por los vientos meteo.",
      isCorrect: false,
      explanation: "Las brisas de ladera no son constantes y pueden ser alteradas, fortalecidas o desviadas por los vientos meteorológicos."
    },
    {
      text: "se originan sobre las caras sombreadas, son turbulentas cuando pasan térmicas, aparecen después que las brisas del valle y no pueden ser fortalecidas o desviadas por los vientos meteo.",
      isCorrect: false,
      explanation: "Las brisas de ladera surgen en caras soleadas, no sombreadas, antes que las brisas del valle, y pueden ser influenciadas por los vientos meteorológicos."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Las brisas de ladera son descendentes:",
  image: "",
  answers: [
    {
      text: "durante el día.",
      isCorrect: false,
      explanation: "Durante el día, las brisas de ladera son ascendentes, ya que el calor del sol calienta las laderas y provoca que el aire ascienda por ellas."
    },
    {
      text: "durante la noche.",
      isCorrect: true,
      explanation: "Por la noche, las laderas se enfrían y el aire desciende, creando brisas de ladera descendentes conocidas como vientos catabáticos."
    },
    {
      text: "en todo momento ya que siempre son descendentes en las capas inferiores.",
      isCorrect: false,
      explanation: "Las brisas de ladera no son descendentes en todo momento; son ascendentes durante el día y solo descienden por la noche cuando la ladera se enfría."
    },
    {
      text: "cuando hay viento meteo fuerte durante el día.",
      isCorrect: false,
      explanation: "El viento meteo fuerte no hace que las brisas de ladera sean descendentes durante el día; las brisas de ladera siguen siendo ascendentes mientras la ladera esté calentada por el sol."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Una brisa de valle:",
  image: "",
  answers: [
    {
      text: "se fortalece donde el valle se hace más angosto y puede desarrollar grandes velocidades.",
      isCorrect: true,
      explanation: "La brisa de valle se intensifica al pasar por zonas angostas debido al efecto Venturi, que acelera el flujo de aire. Esto permite que la brisa alcance grandes velocidades a medida que sube por el valle durante el día."
    },
    {
      text: "se debilita donde el valle se hace más angosto.",
      isCorrect: false,
      explanation: "Una brisa de valle no se debilita en las zonas angostas. Al contrario, el efecto Venturi hace que se acelere y se fortalezca al pasar por estas áreas estrechas."
    },
    {
      text: "puede desarrollar grandes velocidades y nunca es turbulenta.",
      isCorrect: false,
      explanation: "Aunque la brisa de valle puede alcanzar grandes velocidades, puede volverse turbulenta, especialmente cuando interactúa con obstáculos, cambios de terreno o corrientes térmicas."
    },
    {
      text: "se fortalece donde el valle se hace más angosto, puede ser turbulenta y solo ocurre durante la noche.",
      isCorrect: false,
      explanation: "La brisa de valle es un fenómeno diurno que ocurre cuando el aire caliente asciende desde el valle. No se desarrolla exclusivamente por la noche, y es más intensa durante el día."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Una brisa de valle:",
  image: "",
  answers: [
    {
      text: "a veces se manifiesta en varios miles de metros de espesor, acelera cuando el valle se cierra y puede alcanzar los 30 km/h en verano.",
      isCorrect: true,
      explanation: "La brisa de valle puede ser muy espesa, acelerarse por el efecto Venturi cuando el valle se estrecha, y en verano, debido al fuerte calentamiento solar, alcanzar velocidades de hasta 30 km/h."
    },
    {
      text: "desacelera cuando el valle se cierra y disminuye su velocidad en verano debido al calor.",
      isCorrect: false,
      explanation: "La brisa de valle no desacelera cuando el valle se cierra; se acelera. Además, se intensifica en verano debido al calentamiento solar, no disminuye su velocidad."
    },
    {
      text: "desacelera cuando el valle se cierra y solo se desarrolla en valles que corren de norte a sur.",
      isCorrect: false,
      explanation: "La brisa de valle se acelera cuando el valle se cierra, no desacelera. Además, puede desarrollarse en valles de cualquier orientación, no solo de norte a sur."
    },
    {
      text: "acelera cuando el valle se cierra, es más fuerte en la noche que durante el día y en invierno es más potente.",
      isCorrect: false,
      explanation: "La brisa de valle es más fuerte durante el día debido al calentamiento solar y es menos intensa en invierno debido a la menor radiación solar."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "El viento de Foehn se caracteriza por:",
  image: "",
  answers: [
    {
      text: "una nube de sombrero sobre el relieve en la cara orientada al viento y un descenso de aire cálido, seco y muy turbulento a sotavento.",
      isCorrect: true,
      explanation: "El viento de Foehn se asocia con la formación de una nube de sombrero (nube lenticular) sobre el relieve en la cara orientada al viento y provoca un descenso de aire cálido, seco y turbulento en la zona de sotavento."
    },
    {
      text: "una nube de sombrero sobre el relieve en la cara orientada al viento y un enfriamiento de la masa de aire ubicada a sotavento del relieve.",
      isCorrect: false,
      explanation: "El viento de Foehn causa un calentamiento, no un enfriamiento, del aire a sotavento. El aire se seca y calienta a medida que desciende por la ladera opuesta al viento."
    },
    {
      text: "una nube de sombrero sobre el relieve en la cara orientada al viento y un descenso de aire frío y húmedo en la zona ubicada a sotavento del relieve.",
      isCorrect: false,
      explanation: "El viento de Foehn se caracteriza por un aire que desciende cálido y seco en la zona de sotavento, no frío y húmedo, debido al calentamiento adiabático durante el descenso."
    },
    {
      text: "un descenso de aire cálido, seco y muy turbulento y la ausencia de nubes en la cara orientada al viento.",
      isCorrect: false,
      explanation: "El viento de Foehn a menudo genera una nube lenticular en la cara orientada al viento debido a la elevación del aire húmedo. Por lo tanto, no hay ausencia de nubes, sino presencia de estas formaciones características."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Factores que favorecen la inestabilidad:",
  image: "",
  answers: [
    {
      text: "el calentamiento del suelo y la llegada de aire caliente en los niveles inferiores.",
      isCorrect: true,
      explanation: "El calentamiento del suelo provoca que el aire ascienda y, junto con la llegada de aire caliente en los niveles inferiores, genera inestabilidad al impulsar corrientes ascendentes y mezclas de aire, favoreciendo la formación de nubes y turbulencias."
    },
    {
      text: "el enfriamiento del suelo y la llegada de aire frío en los niveles inferiores.",
      isCorrect: false,
      explanation: "El enfriamiento del suelo y la llegada de aire frío en los niveles inferiores suelen estabilizar la atmósfera, ya que el aire frío tiende a permanecer cerca del suelo y reduce la convección."
    },
    {
      text: "la llegada de aire caliente en altura y el enfriamiento del suelo.",
      isCorrect: false,
      explanation: "La llegada de aire caliente en altura y el enfriamiento del suelo generan condiciones más estables, ya que el aire caliente en altura inhibe el ascenso del aire de los niveles inferiores."
    },
    {
      text: "la llegada de aire frío en altura y el calentamiento del suelo durante la noche.",
      isCorrect: false,
      explanation: "El calentamiento del suelo durante la noche es inusual, y la llegada de aire frío en altura favorece la estabilidad si no hay suficiente calor en los niveles inferiores para impulsar el ascenso del aire."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "En un lindo día de verano, la temperatura máxima se alcanza (horario solar):",
  image: "",
  answers: [
    {
      text: "12 hs.",
      isCorrect: false,
      explanation: "A las 12 hs (mediodía solar) el sol está en su punto más alto, pero la temperatura máxima no se alcanza a esta hora ya que el calentamiento del suelo continúa durante la tarde."
    },
    {
      text: "14 hs.",
      isCorrect: true,
      explanation: "La temperatura máxima se alcanza generalmente alrededor de las 14 hs, ya que el suelo sigue liberando calor y la atmósfera continúa calentándose incluso después del mediodía solar."
    },
    {
      text: "16 hs.",
      isCorrect: false,
      explanation: "Aunque la temperatura aún puede ser alta a las 16 hs, generalmente ha alcanzado su máximo alrededor de las 14 hs, y comienza a disminuir gradualmente después de ese momento."
    },
    {
      text: "10 hs.",
      isCorrect: false,
      explanation: "A las 10 hs, la temperatura aún está aumentando y está lejos de alcanzar su máximo, que ocurre generalmente en las primeras horas de la tarde."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "En general, el fenómeno que bloquea el desarrollo de ascendentes en altura es:",
  image: "",
  answers: [
    {
      text: "una capa de inversión y el carácter estable de la masa de aire.",
      isCorrect: true,
      explanation: "Una capa de inversión actúa como una barrera para las corrientes ascendentes, mientras que una masa de aire estable desalienta la convección, limitando el desarrollo de las ascendentes."
    },
    {
      text: "una base de cúmulos que se forma muy temprano en el día.",
      isCorrect: false,
      explanation: "La base de cúmulos indica el nivel de condensación y no bloquea el desarrollo de ascendentes. Las ascendentes pueden continuar si no hay una capa de inversión o condiciones de estabilidad."
    },
    {
      text: "un cambio brusco en la dirección del viento en capas bajas.",
      isCorrect: false,
      explanation: "Un cambio de dirección del viento puede causar turbulencia, pero no es el factor principal que bloquea las ascendentes. La capa de inversión y la estabilidad de la masa de aire son más determinantes."
    },
    {
      text: "el carácter inestable de la masa de aire por un enfriamiento repentino de la superficie del suelo.",
      isCorrect: false,
      explanation: "La inestabilidad de la masa de aire favorece, no bloquea, las ascendentes. Es la capa de inversión y la estabilidad de la masa de aire lo que realmente impide el desarrollo de las corrientes ascendentes."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Indique los elementos favorables a la convección:",
  image: "",
  answers: [
    {
      text: "viento de fuerza mediana y calentamiento importante a nivel del suelo.",
      isCorrect: true,
      explanation: "Un viento de fuerza mediana ayuda a transportar las térmicas, y un calentamiento importante a nivel del suelo genera las corrientes ascendentes necesarias para la convección."
    },
    {
      text: "viento muy fuerte y ausencia de nubes.",
      isCorrect: false,
      explanation: "Un viento muy fuerte tiende a descomponer las térmicas y dificultar la convección, en lugar de favorecerla. La ausencia de nubes no tiene un impacto directo en la formación de la convección."
    },
    {
      text: "calentamiento moderado del suelo y viento muy fuerte.",
      isCorrect: false,
      explanation: "Un viento muy fuerte generalmente rompe las corrientes de aire ascendentes y no favorece la convección. Se necesita un calentamiento más significativo del suelo para impulsar la convección eficazmente."
    },
    {
      text: "ausencia de viento y calentamiento moderado del suelo.",
      isCorrect: false,
      explanation: "La ausencia de viento dificulta el transporte de térmicas, y un calentamiento moderado no es suficiente para generar la convección de manera efectiva."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Una partícula de aire se eleva si su temperatura con respecto al aire ambiente es:",
  image: "",
  answers: [
    {
      text: "inferior.",
      isCorrect: false,
      explanation: "Una partícula de aire más fría es más densa y tiende a descender, por lo que no se eleva en relación al aire ambiente."
    },
    {
      text: "superior.",
      isCorrect: true,
      explanation: "Una partícula de aire más caliente es menos densa que el aire ambiente, lo que le permite elevarse y generar corrientes ascendentes."
    },
    {
      text: "igual.",
      isCorrect: false,
      explanation: "Si la temperatura de la partícula de aire es igual a la del aire ambiente, no hay diferencia de densidad, y la partícula no se eleva ni desciende."
    },
    {
      text: "mucho más baja.",
      isCorrect: false,
      explanation: "Una partícula de aire mucho más fría es aún más densa y definitivamente no se eleva; tiende a descender en la atmósfera."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Las zonas favorables al origen de una convección son:",
  image: "",
  answers: [
    {
      text: "las zonas urbanizadas, las zonas pedregosas y las zonas secas.",
      isCorrect: true,
      explanation: "Las zonas urbanizadas, pedregosas y secas se calientan rápidamente bajo el sol, favoreciendo la formación de corrientes ascendentes y convección debido al calor que irradian hacia la atmósfera."
    },
    {
      text: "los bosques y las zonas húmedas.",
      isCorrect: false,
      explanation: "Los bosques y las zonas húmedas retienen la humedad y se calientan más lentamente, por lo que son menos propicias para generar corrientes de convección fuertes."
    },
    {
      text: "las áreas cubiertas de vegetación densa y con sombra constante.",
      isCorrect: false,
      explanation: "La vegetación densa y la sombra constante reducen la absorción de calor, lo que dificulta la formación de corrientes ascendentes y convección."
    },
    {
      text: "las zonas urbanizadas, húmedas y con sombra constante.",
      isCorrect: false,
      explanation: "Aunque las zonas urbanizadas se calientan rápidamente, la presencia de humedad y sombra constante reduce la convección, ya que estas condiciones limitan el calentamiento del aire."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Las ascendentes térmicas:",
  image: "",
  answers: [
    {
      text: "pueden presentarse bajo forma de burbujas o de columnas, se originan sobre suelos contrastantes y están rodeadas de descendentes.",
      isCorrect: true,
      explanation: "Las ascendentes térmicas pueden formarse como burbujas o columnas, se generan sobre suelos con diferencias de temperatura (contrastes) y están rodeadas de corrientes descendentes cuando se mezclan con el aire circundante más frío."
    },
    {
      text: "pueden presentarse bajo forma de burbujas o de columnas, suben siempre verticalmente y no están rodeadas de descendentes.",
      isCorrect: false,
      explanation: "Las térmicas no siempre suben verticalmente; pueden desviarse por el viento. Además, siempre están rodeadas de corrientes descendentes al mezclarse con el aire más frío circundante."
    },
    {
      text: "se originan en suelos homogéneos, no se presentan en forma de burbujas y están rodeadas de descendentes.",
      isCorrect: false,
      explanation: "Las térmicas no se originan en suelos homogéneos sino en suelos contrastantes, donde hay diferencias de temperatura. Además, pueden presentarse como burbujas de aire caliente."
    },
    {
      text: "se originan sobre suelos homogéneos, siempre constantes, uniformes en su ascenso y están rodeadas de ascendentes.",
      isCorrect: false,
      explanation: "Las térmicas no son siempre constantes ni uniformes; varían en intensidad y dirección. Además, están rodeadas de corrientes descendentes, no ascendentes, al mezclarse con el aire circundante."
    }
  ]
}


,
{
  topic: "meteo",

  statement: "Las ascendentes térmicas:",
  image: "",
  answers: [
    {
      text: "pueden presentarse bajo forma de burbujas o de columnas, se originan sobre suelos contrastantes y están rodeadas de descendentes.",
      isCorrect: true,
      explanation: "Las ascendentes térmicas pueden presentarse como burbujas o columnas, se generan sobre suelos que tienen diferencias de temperatura (contrastes) y suelen estar rodeadas de corrientes descendentes al mezclarse con el aire circundante."
    },
    {
      text: "pueden presentarse bajo forma de burbujas o de columnas, suben siempre verticalmente y no están rodeadas de descendentes.",
      isCorrect: false,
      explanation: "Las térmicas no siempre suben verticalmente; pueden ser desviadas por el viento. Además, las térmicas están rodeadas de descendentes al mezclarse con el aire más frío y denso que las rodea."
    },
    {
      text: "se originan en suelos homogéneos y no se presentan en forma de burbujas y están rodeadas de descendentes.",
      isCorrect: false,
      explanation: "Las térmicas se originan en suelos que presentan diferencias de temperatura, no en suelos homogéneos. Además, pueden formarse tanto como burbujas de aire caliente como en columnas ascendentes."
    },
    {
      text: "se originan sobre suelos contrastantes, siempre constantes, uniformes en su ascenso y están rodeadas de ascendentes.",
      isCorrect: false,
      explanation: "Las ascendentes térmicas no son siempre constantes ni uniformes. Pueden variar en intensidad y dirección debido al viento, la topografía y las condiciones atmosféricas."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Una térmica puede:",
  image: "",
  answers: [
    {
      text: "estar materializada por un cúmulo que crece, ser desviada por el viento y que no den lugar a ninguna materialización.",
      isCorrect: true,
      explanation: "Una térmica puede manifestarse con un cúmulo que crece sobre ella, ser desviada por el viento en su ascenso, o no presentar ninguna señal visible, haciéndola difícil de detectar."
    },
    {
      text: "estar materializada por un velo de estratos y no ser afectada por el viento.",
      isCorrect: false,
      explanation: "Las térmicas no se materializan como un velo de estratos, sino más bien en forma de cúmulos. Además, las térmicas son influenciadas y desviadas por el viento."
    },
    {
      text: "estar materializada por un velo de estratos y moverse siempre en línea recta hacia arriba, sin ser afectada por el viento.",
      isCorrect: false,
      explanation: "Las térmicas no se materializan como un velo de estratos y no se mueven siempre en línea recta; el viento y otros factores pueden desviar su trayectoria."
    },
    {
      text: "dar lugar siempre a la formación de nubes y permanecer estática sin ser afectada por el viento.",
      isCorrect: false,
      explanation: "No todas las térmicas generan nubes y no son estáticas. Las térmicas ascienden y se mueven, y el viento y otros factores atmosféricos las afectan."
    }
  ]
}

,
{
  topic: "meteo",

  statement: "Una térmica pura o azul:",
  image: "",
  answers: [
    {
      text: "permite ganar un mínimo de 1000 mts.",
      isCorrect: false,
      explanation: "Una térmica azul no garantiza un ascenso de 1000 metros; la altura alcanzada depende de las condiciones atmosféricas. El término 'azul' se refiere a la ausencia de cúmulos, no a la fuerza de la térmica."
    },
    {
      text: "es peligrosa para las alas.",
      isCorrect: false,
      explanation: "Una térmica azul no es intrínsecamente peligrosa para las alas. Aunque puede ser más difícil de detectar por la falta de cúmulos, no es más peligrosa que otras térmicas."
    },
    {
      text: "no forma un cúmulo en su parte superior.",
      isCorrect: true,
      explanation: "Una térmica azul no forma un cúmulo en su parte superior, ya que no hay suficiente humedad para que el vapor de agua condense y forme nubes visibles."
    },
    {
      text: "se forma solamente en una capa de aire con tendencia estable.",
      isCorrect: false,
      explanation: "Las térmicas se forman en capas de aire inestables, no estables, ya que la inestabilidad es lo que permite que el aire caliente ascienda."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "Situaciones en las que un cielo sólo puede tener térmicas azules:",
  image: "",
  answers: [
    {
      text: "aire con tendencia inestable y seco, o con una inversión más bien baja.",
      isCorrect: true,
      explanation: "aire inestable y seco genera térmicas azules, ya que la falta de humedad impide la formación de cúmulos. Una inversión baja también limita el desarrollo de nubes, resultando en térmicas que no se materializan en forma de nubes visibles."
    },
    {
      text: "aire con tendencia estable y seco, o con una inversión más bien alta.",
      isCorrect: false,
      explanation: "El aire estable no favorece la formación de térmicas, ya que las partículas de aire caliente no pueden ascender fácilmente. Las térmicas requieren inestabilidad para desarrollarse."
    },
    {
      text: "aire con tendencia inestable y húmedo, o con una inversión más bien baja.",
      isCorrect: false,
      explanation: "El aire inestable y húmedo suele formar cúmulos, ya que el vapor de agua condensa a medida que el aire asciende, generando nubes visibles en la parte superior de las térmicas."
    },
    {
      text: "aire con una inversión alta y húmedo.",
      isCorrect: false,
      explanation: "Una inversión alta y aire húmedo generalmente bloquean o limitan el desarrollo de las térmicas y favorecen la formación de nubes en los niveles inferiores, no permitiendo que las térmicas se mantengan como 'azules'."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "En atmósfera húmeda, las ascendentes:",
  image: "",
  answers: [
    {
      text: "generalmente no están materializadas.",
      isCorrect: false,
      explanation: "En una atmósfera húmeda, las ascendentes suelen estar materializadas por nubes, ya que el aire húmedo se condensa al ascender, formando cúmulos."
    },
    {
      text: "son muy débiles ya que la atmósfera húmeda tiene tendencia estable.",
      isCorrect: false,
      explanation: "La humedad en la atmósfera no necesariamente significa estabilidad. De hecho, la humedad puede contribuir a la formación de nubes y a fortalecer las ascendentes en condiciones inestables."
    },
    {
      text: "están materializadas por nubes.",
      isCorrect: true,
      explanation: "En una atmósfera húmeda, el vapor de agua se condensa cuando el aire asciende, formando nubes que hacen visibles las corrientes ascendentes."
    },
    {
      text: "se disipan rápidamente al alcanzar cierta altura.",
      isCorrect: false,
      explanation: "En realidad, en una atmósfera húmeda, las ascendentes tienden a mantenerse y formar nubes a medida que el aire asciende y se condensa, en lugar de disiparse rápidamente."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "La restitución es un fenómeno:",
  image: "",
  answers: [
    {
      text: "de inversión de brisas de pendientes por la tarde.",
      isCorrect: false,
      explanation: "La restitución no implica la inversión de las brisas de pendiente. Es un fenómeno relacionado con las ascendentes suaves que se producen al final del día."
    },
    {
      text: "de inversión de brisas del valle por la tarde.",
      isCorrect: false,
      explanation: "La restitución no está relacionada con la inversión de las brisas del valle, sino con la generación de corrientes ascendentes suaves en las horas de la tarde."
    },
    {
      text: "de ascendentes suaves, por la tarde, en lugares donde no hubo ascendentes durante el día.",
      isCorrect: true,
      explanation: "La restitución es un fenómeno que ocurre por la tarde, donde el aire caliente almacenado durante el día asciende lentamente en lugares donde no hubo ascendentes anteriormente."
    },
    {
      text: "de fuertes descendentes que se producen a última hora de la tarde.",
      isCorrect: false,
      explanation: "La restitución se caracteriza por la presencia de suaves ascendentes al final del día, no por fuertes descendentes."
    }
  ]
}
,
{
  topic: "meteo",

  statement: "El fenómeno de restitución se encuentra en general:",
  image: "",
  answers: [
    {
      text: "por la tarde.",
      isCorrect: true,
      explanation: "El fenómeno de restitución ocurre por la tarde cuando el aire caliente almacenado en las laderas y zonas altas comienza a ascender lentamente, generando suaves corrientes ascendentes."
    },
    {
      text: "por la mañana en el centro del valle.",
      isCorrect: false,
      explanation: "El fenómeno de restitución no se presenta por la mañana, ya que es un proceso que ocurre cuando el aire se calienta durante el día y comienza a ascender por la tarde."
    },
    {
      text: "en el centro de los valles durante todo el día.",
      isCorrect: false,
      explanation: "La restitución no ocurre durante todo el día ni se limita al centro de los valles. Es un fenómeno de la tarde que se produce cuando el aire caliente acumulado empieza a ascender."
    },
    {
      text: "a última hora de la noche en zonas planas.",
      isCorrect: false,
      explanation: "La restitución no ocurre a última hora de la noche ni en zonas planas. Es un fenómeno que tiene lugar por la tarde en áreas que han acumulado calor durante el día."
    }
  ]
}, 
{
  topic: "aerodinámica",

  statement: "Sobre un perfil alar, la circulación del flujo de aire al ras del suelo puede ser:",
  image: "",
  answers: [
    {
      text: "turbulenta o laminar.",
      isCorrect: true,
      explanation: "El flujo de aire al ras del suelo puede ser tanto turbulento como laminar, dependiendo de las condiciones del entorno."
    },
    {
      text: "resonante.",
      isCorrect: false,
      explanation: "El flujo de aire al ras del suelo no es resonante. Este término no se usa para describir el flujo de aire en esta situación."
    },
    {
      text: "completamente uniforme.",
      isCorrect: false,
      explanation: "El flujo de aire rara vez es completamente uniforme debido a la interacción con la superficie y otros factores."
    },
    {
      text: "aleatorio e impredecible.",
      isCorrect: false,
      explanation: "Aunque el flujo de aire puede ser turbulento, no es simplemente aleatorio e impredecible; sigue patrones basados en las condiciones del entorno."
    }
  ]
},  
{
  topic: "aerodinámica",

  statement: "Con respecto al intradós, la distancia que debe recorrer una molécula de aire sobre el extradós:",
  image: "",
  answers: [
    {
      text: "es superior.",
      isCorrect: true,
      explanation: "La distancia que debe recorrer una molécula de aire sobre el extradós es mayor debido a la curvatura y la forma del perfil alar, lo que resulta en una velocidad mayor y menor presión sobre el extradós."
    },
    {
      text: "es igual.",
      isCorrect: false,
      explanation: "La distancia no es igual, ya que el extradós tiene una curvatura que obliga a las moléculas de aire a recorrer un camino más largo."
    },
    {
      text: "es inferior.",
      isCorrect: false,
      explanation: "La distancia sobre el extradós no es inferior; debido a la curvatura, la molécula de aire recorre una distancia mayor en el extradós que en el intradós."
    },
    {
      text: "varía constantemente sin un patrón definido.",
      isCorrect: false,
      explanation: "La distancia sobre el extradós es siempre mayor que la del intradós debido a la forma y curvatura del perfil, no varía de manera aleatoria."
    }
  ]
}
,  
{
  topic: "aerodinámica",

statement: "El centro de presión es el punto de aplicación:",
image: "",
answers: [
  {
    text: "de la resultante de fuerzas aerodinámicas.",
    isCorrect: true,
    explanation: "El centro de presión es el punto donde se aplica la resultante de todas las fuerzas aerodinámicas que actúan sobre un perfil."
  },
  {
    text: "de la resultante de fuerzas de gravedad.",
    isCorrect: false,
    explanation: "La fuerza de gravedad actúa a través del centro de gravedad, no del centro de presión."
  },
  {
    text: "de la resistencia del aire.",
    isCorrect: false,
    explanation: "El centro de presión no es el punto de aplicación de la resistencia del aire; la resistencia es solo una parte de las fuerzas aerodinámicas."
  },
  {
    text: "del peso total de la aeronave.",
    isCorrect: false,
    explanation: "El peso total de la aeronave actúa a través del centro de gravedad, no el centro de presión."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "El centro de presión de un ala en vuelo se encuentra aproximadamente:",
image: "",
answers: [
  {
    text: "en la parte delantera del ala.",
    isCorrect: true,
    explanation: "El centro de presión generalmente se ubica hacia la parte delantera del ala, aunque su posición puede cambiar con el ángulo de ataque."
  },
  {
    text: "en el centro geométrico del ala.",
    isCorrect: false,
    explanation: "El centro de presión no se encuentra en el centro geométrico del ala; su posición depende de la distribución de fuerzas aerodinámicas."
  },
  {
    text: "en la parte posterior del ala.",
    isCorrect: false,
    explanation: "El centro de presión no está en la parte posterior del ala durante el vuelo normal, ya que está influenciado por la forma y el ángulo de ataque."
  },
  {
    text: "en el borde de ataque.",
    isCorrect: false,
    explanation: "El centro de presión no está exactamente en el borde de ataque; se encuentra un poco más atrás, en la parte delantera del ala."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "En vuelo rectilíneo estabilizado:",
image: "",
answers: [
  {
    text: "la resistencia se opone al desplazamiento del ala y la sustentación es perpendicular a la trayectoria.",
    isCorrect: true,
    explanation: "En vuelo rectilíneo estabilizado, la resistencia actúa en la dirección opuesta al desplazamiento del ala, mientras que la sustentación actúa de forma perpendicular a la trayectoria del vuelo."
  },
  {
    text: "la R.F.A. es ligeramente inferior al peso ala + piloto.",
    isCorrect: false,
    explanation: "En vuelo rectilíneo estabilizado, la R.F.A. (resultante de fuerzas aerodinámicas) es igual al peso del ala y piloto para mantener un vuelo en equilibrio, no inferior."
  },
  {
    text: "la sustentación depende únicamente de la velocidad del viento.",
    isCorrect: false,
    explanation: "La sustentación depende de varios factores, incluyendo la velocidad del aire relativo, el ángulo de ataque, y la forma del perfil alar, no únicamente de la velocidad del viento."
  },
  {
    text: "la resistencia es paralela al desplazamiento del ala y la sustentación es paralela a la trayectoria.",
    isCorrect: false,
    explanation: "La resistencia siempre se opone al desplazamiento del ala y es paralela a la dirección del flujo de aire, mientras que la sustentación es perpendicular a la trayectoria de vuelo, no paralela."
  }
]
}

,
{
  topic: "aerodinámica",

statement: "Cuando un ala planea en línea recta a velocidad constante, el peso total es:",
image: "",
answers: [
  {
    text: "compensado exactamente por la R.F.A.",
    isCorrect: true,
    explanation: "En un planeo en línea recta a velocidad constante, la Resultante de Fuerzas Aerodinámicas (R.F.A.) equilibra exactamente el peso total, lo que permite un vuelo estable."
  },
  {
    text: "inferior a la R.F.A.",
    isCorrect: false,
    explanation: "Si el peso fuera inferior a la R.F.A., el ala ganaría altura en lugar de planear a velocidad constante."
  },
  {
    text: "superior a la R.F.A.",
    isCorrect: false,
    explanation: "Si el peso fuera superior a la R.F.A., el ala perdería altura y no mantendría un planeo constante."
  },
  {
    text: "no tiene relación directa con la R.F.A.",
    isCorrect: false,
    explanation: "El peso tiene una relación directa con la R.F.A. En vuelo rectilíneo y a velocidad constante, la R.F.A. equilibra el peso para mantener el planeo."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La R.F.A. (resultante de fuerzas aerodinámicas) en vuelo rectilíneo estabilizado es:",
image: "",
answers: [
  {
    text: "directamente opuesto al peso total ala + piloto.",
    isCorrect: true,
    explanation: "En vuelo rectilíneo estabilizado, la R.F.A. actúa en dirección opuesta al peso total del ala y piloto, manteniendo el equilibrio de fuerzas."
  },
  {
    text: "perpendicular al perfil del ala.",
    isCorrect: false,
    explanation: "La R.F.A. no es perpendicular al perfil del ala; su dirección se orienta para contrarrestar el peso total en vuelo estabilizado."
  },
  {
    text: "perpendicular a la dirección del viento relativo.",
    isCorrect: false,
    explanation: "La R.F.A. no es perpendicular al viento relativo; se orienta en la dirección que equilibra el peso en vuelo rectilíneo estabilizado."
  },
  {
    text: "paralela a la trayectoria de vuelo.",
    isCorrect: false,
    explanation: "La R.F.A. no es paralela a la trayectoria de vuelo; está en una dirección que equilibra el peso total para mantener el vuelo estabilizado."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La sustentación y la resistencia de un ala aumentan, entre otras en función del aumento de:",
image: "",
answers: [
  {
    text: "la velocidad relativa al aire del ala.",
    isCorrect: true,
    explanation: "La sustentación y la resistencia de un ala dependen directamente de la velocidad relativa al aire; a mayor velocidad relativa, mayores serán la sustentación y la resistencia."
  },
  {
    text: "la velocidad del viento meteorológico.",
    isCorrect: false,
    explanation: "La velocidad del viento meteorológico no afecta directamente la sustentación y resistencia del ala, ya que estas fuerzas dependen de la velocidad relativa al aire en el que el ala se mueve."
  },
  {
    text: "la velocidad relativa al suelo del ala.",
    isCorrect: false,
    explanation: "La velocidad relativa al suelo no es un factor directo en el aumento de la sustentación y resistencia; lo que importa es la velocidad relativa al aire."
  },
  {
    text: "la temperatura ambiente.",
    isCorrect: false,
    explanation: "La temperatura ambiente no afecta directamente la sustentación y la resistencia; la velocidad relativa al aire es el factor clave que influye en estas fuerzas."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La sustentación de un ala está dada por:",
image: "",
answers: [
  {
    text: "la diferencia de presión entre la parte superior e inferior del perfil.",
    isCorrect: true,
    explanation: "La sustentación de un ala se genera por la desviación de los filetes de aire debido al perfil del ala y la diferencia de presión, donde hay una depresión en la parte superior y una sobrepresión en la parte inferior."
  },
  {
    text: "una depresión que aparece debajo del perfil y una sobrepresión encima.",
    isCorrect: false,
    explanation: "Es incorrecto. La depresión aparece en la parte superior del perfil y la sobrepresión en la parte inferior, lo que contribuye a la sustentación."
  },
  {
    text: "el peso total del ala y del piloto.",
    isCorrect: false,
    explanation: "El peso del ala y del piloto no genera sustentación; es la diferencia de presión y desviación del aire alrededor del perfil lo que produce sustentación."
  },
  {
    text: "la velocidad del viento meteorológico.",
    isCorrect: false,
    explanation: "La velocidad del viento meteorológico no determina directamente la sustentación del ala; es la velocidad relativa al aire y el perfil que afecta la sustentación."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La sustentación en vuelo planeado estabilizado, siempre es:",
image: "",
answers: [
  {
    text: "perpendicular a la trayectoria del vuelo.",
    isCorrect: true,
    explanation: "En vuelo planeado estabilizado, la sustentación siempre es perpendicular a la trayectoria de vuelo, independientemente de otros factores."
  },
  {
    text: "más débil que el peso total ala/piloto.",
    isCorrect: false,
    explanation: "La sustentación no es necesariamente más débil que el peso total; para mantener el vuelo planeado estabilizado, debe equilibrar el componente del peso que actúa perpendicular a la trayectoria."
  },
  {
    text: "constante cualquiera sea la velocidad del ala.",
    isCorrect: false,
    explanation: "La sustentación varía con la velocidad del ala y no es constante; a mayor velocidad relativa al aire, generalmente hay mayor sustentación."
  },
  {
    text: "paralela a la dirección del viento relativo.",
    isCorrect: false,
    explanation: "La sustentación no es paralela a la dirección del viento relativo; siempre actúa perpendicularmente a la trayectoria de vuelo."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Cuando el ángulo de incidencia aumenta a partir de 0 grados, la sustentación:",
image: "",
answers: [
  {
    text: "aumenta, pasa por un máximo, disminuye, y luego cae bruscamente cuando el ala entra en pérdida.",
    isCorrect: true,
    explanation: "A medida que el ángulo de incidencia aumenta, la sustentación se incrementa hasta alcanzar un máximo. Al sobrepasar este punto, la sustentación disminuye y finalmente cae de manera brusca cuando el ala entra en pérdida."
  },
  {
    text: "casi no varía.",
    isCorrect: false,
    explanation: "La sustentación varía significativamente con el ángulo de incidencia; no permanece casi constante, especialmente a medida que se acerca al ángulo de pérdida."
  },
  {
    text: "aumenta progresivamente hasta la pérdida.",
    isCorrect: false,
    explanation: "La sustentación no aumenta de manera progresiva hasta la pérdida. En realidad, alcanza un punto máximo y luego disminuye antes de entrar en pérdida."
  },
  {
    text: "disminuye de forma continua.",
    isCorrect: false,
    explanation: "La sustentación no disminuye de forma continua con el aumento del ángulo de incidencia; inicialmente aumenta hasta alcanzar un máximo antes de disminuir y caer en pérdida."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Sobre un ala en vuelo rectilíneo estabilizado, cuando el piloto provoca un incremento de la incidencia:",
image: "",
answers: [
  {
    text: "la trayectoria se curva hacia arriba y la velocidad disminuye.",
    isCorrect: true,
    explanation: "Al incrementar la incidencia, la sustentación aumenta, lo que curva la trayectoria hacia arriba. Simultáneamente, la mayor resistencia al avance hace que la velocidad disminuya."
  },
  {
    text: "la trayectoria se curva hacia arriba y la velocidad aumenta.",
    isCorrect: false,
    explanation: "La velocidad no aumenta cuando se incrementa la incidencia; el incremento en la resistencia provoca una disminución de la velocidad."
  },
  {
    text: "la trayectoria se curva hacia abajo y la velocidad aumenta.",
    isCorrect: false,
    explanation: "La trayectoria no se curva hacia abajo cuando la incidencia aumenta; la sustentación adicional generada curva la trayectoria hacia arriba, y la velocidad tiende a disminuir debido a la mayor resistencia."
  },
  {
    text: "la sustentación disminuye.",
    isCorrect: false,
    explanation: "La sustentación inicialmente aumenta al incrementar la incidencia. Solo disminuye después de alcanzar el ángulo crítico de pérdida."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "Sobre un ala en vuelo rectilíneo estabilizado, cuando el piloto provoca una disminución de la incidencia:",
image: "",
answers: [
  {
    text: "la trayectoria se curva hacia abajo y la velocidad aumenta.",
    isCorrect: true,
    explanation: "Al disminuir la incidencia, la sustentación se reduce, provocando que la trayectoria se curve hacia abajo. Simultáneamente, la resistencia aerodinámica disminuye, lo que permite que la velocidad aumente."
  },
  {
    text: "la trayectoria se curva hacia arriba.",
    isCorrect: false,
    explanation: "La trayectoria no se curva hacia arriba cuando se disminuye la incidencia; al contrario, la reducción de la sustentación hace que la trayectoria se curve hacia abajo."
  },
  {
    text: "la trayectoria se curva hacia abajo y la velocidad disminuye.",
    isCorrect: false,
    explanation: "La velocidad no disminuye al reducir la incidencia. En realidad, la menor resistencia aerodinámica permite que la velocidad aumente mientras la trayectoria se curva hacia abajo."
  },
  {
    text: "la sustentación aumenta.",
    isCorrect: false,
    explanation: "La sustentación disminuye cuando se reduce la incidencia, lo que resulta en una trayectoria que se curva hacia abajo."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "Sobre un ala en vuelo, hay varias fuentes de resistencia de naturalezas bien distintas:",
image: "",
answers: [
  {
    text: "la fricción, las turbulencias detrás del borde de fuga, y los torbellinos en las puntas del ala.",
    isCorrect: true,
    explanation: "En vuelo, las principales fuentes de resistencia incluyen la fricción con el aire, las turbulencias que se generan detrás del borde de fuga, y los torbellinos que se forman en las puntas del ala."
  },
  {
    text: "la fricción, las turbulencias delante del borde de fuga y la presión generada por la sustentación.",
    isCorrect: false,
    explanation: "Las turbulencias no se generan delante del borde de fuga y la presión generada por la sustentación no es una fuente de resistencia; en realidad, es la diferencia de presión que contribuye a la sustentación."
  },
  {
    text: "las turbulencias delante del borde de fuga y la inercia del ala en vuelo.",
    isCorrect: false,
    explanation: "Las turbulencias no ocurren delante del borde de fuga y la inercia no es una fuente de resistencia aerodinámica, ya que está relacionada con el movimiento y masa del ala, no con la resistencia."
  },
  {
    text: "la fricción, las turbulencias y la fuerza centrífuga durante el giro.",
    isCorrect: false,
    explanation: "La fuerza centrífuga es una fuerza aparente experimentada durante el giro y no es una fuente de resistencia aerodinámica en vuelo rectilíneo estabilizado."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "La resistencia sobre el conjunto ala/piloto:",
image: "",
answers: [
  {
    text: "se divide en resistencia de forma + resistencia inducida + resistencia de fricción.",
    isCorrect: true,
    explanation: "La resistencia total sobre el conjunto ala/piloto se compone de tres tipos principales: la resistencia de forma (debida a la forma del objeto), la resistencia inducida (asociada a la generación de sustentación), y la resistencia de fricción (debida al rozamiento con el aire)."
  },
  {
    text: "es independiente de la velocidad del vuelo.",
    isCorrect: false,
    explanation: "La resistencia no es independiente de la velocidad; de hecho, aumenta con el cuadrado de la velocidad del vuelo."
  },
  {
    text: "es independiente de la forma del ala.",
    isCorrect: false,
    explanation: "La forma del ala influye significativamente en la resistencia, especialmente en la resistencia de forma y resistencia inducida."
  },
  {
    text: "se divide en resistencia de forma + resistencia de temperatura + resistencia de humedad.",
    isCorrect: false,
    explanation: "La resistencia no incluye componentes de temperatura o humedad; está compuesta principalmente por la resistencia de forma, inducida y fricción, relacionadas con la interacción del ala y el aire."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "La resistencia total de una aeronave se divide en:",
image: "",
answers: [
  {
    text: "resistencia inducida, resistencia de forma y resistencia de fricción.",
    isCorrect: true,
    explanation: "La resistencia total de una aeronave se compone de tres tipos principales: la resistencia inducida (relacionada con la generación de sustentación), la resistencia de forma (debida a la forma de la aeronave), y la resistencia de fricción (debida al contacto con el aire)."
  },
  {
    text: "resistencia de sustentación, resistencia de peso y resistencia centrífuga.",
    isCorrect: false,
    explanation: "No existe una categoría de resistencia de sustentación o de peso, y la resistencia centrífuga no es una forma de resistencia aerodinámica. La resistencia total se refiere a la resistencia inducida, de forma, y de fricción."
  },
  {
    text: "resistencia de gravedad, resistencia de presión y resistencia centrífuga.",
    isCorrect: false,
    explanation: "La resistencia aerodinámica no incluye la gravedad, presión o fuerzas centrífugas; la resistencia se clasifica en inducida, de forma, y de fricción."
  },
  {
    text: "resistencia de inducida, resistencia de temperatura y resistencia de fricción.",
    isCorrect: false,
    explanation: "La resistencia aerodinámica no incluye la resistencia de temperatura. Las categorías válidas son resistencia inducida, de forma, y de fricción."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "La resistencia inducida se debe:",
image: "",
answers: [
  {
    text: "al piloto y a las suspensiones.",
    isCorrect: false,
    explanation: "La resistencia inducida no está relacionada con el piloto ni las suspensiones; es el resultado de la generación de sustentación y la formación de torbellinos en las puntas del ala."
  },
  {
    text: "a las turbulencias del borde de fuga del ala.",
    isCorrect: false,
    explanation: "Las turbulencias en el borde de fuga no son la causa principal de la resistencia inducida. La resistencia inducida está relacionada con los torbellinos que se forman en las puntas del ala durante la generación de sustentación."
  },
  {
    text: "a las irregularidades de la superficie del ala.",
    isCorrect: false,
    explanation: "Las irregularidades de la superficie del ala contribuyen a la resistencia de fricción, no a la resistencia inducida."
  },
  {
    text: "a los torbellinos de punta de ala.",
    isCorrect: true,
    explanation: "La resistencia inducida se debe principalmente a los torbellinos que se forman en las puntas del ala cuando se genera sustentación, resultando en una pérdida de eficiencia aerodinámica."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La resistencia de forma se debe:",
image: "",
answers: [
  {
    text: "al piloto y a las suspensiones, así como a las irregularidades de la superficie del ala.",
    isCorrect: true,
    explanation: "La resistencia de forma surge por la interacción del aire con el piloto, las suspensiones, y las irregularidades de la superficie del ala, ya que estos elementos presentan formas que ofrecen resistencia al flujo de aire."
  },
  {
    text: "a las turbulencias del borde de fuga del ala y a la forma de la estructura.",
    isCorrect: false,
    explanation: "Las turbulencias del borde de fuga no son la causa principal de la resistencia de forma; además, aunque la forma de la estructura contribuye a la resistencia, la turbulencia está más relacionada con la resistencia inducida."
  },
  {
    text: "a la interacción con el viento relativo y a las corrientes descendentes.",
    isCorrect: false,
    explanation: "La resistencia de forma no se debe directamente a la interacción con el viento relativo ni a las corrientes descendentes, sino a la forma de los objetos y las irregularidades que presentan resistencia al flujo de aire."
  },
  {
    text: "a los torbellinos de punta de ala y al efecto suelo.",
    isCorrect: false,
    explanation: "Los torbellinos de punta de ala contribuyen a la resistencia inducida y no a la resistencia de forma. El efecto suelo también está relacionado con la aerodinámica pero no con la resistencia de forma."
  }
]
}

,
{
  topic: "aerodinámica",

statement: "La resistencia de fricción se debe:",
image: "",
answers: [
  {
    text: "a las irregularidades de la superficie del ala y al contacto del aire con el ala.",
    isCorrect: true,
    explanation: "La resistencia de fricción se genera debido a las irregularidades de la superficie del ala y al contacto directo del aire con la superficie, lo que crea rozamiento y resistencia."
  },
  {
    text: "al piloto y a las suspensiones.",
    isCorrect: false,
    explanation: "La resistencia de fricción no se debe al piloto y las suspensiones; es principalmente causada por el rozamiento del aire con la superficie del ala."
  },
  {
    text: "a las turbulencias del borde de fuga del ala y a la presión del aire.",
    isCorrect: false,
    explanation: "Las turbulencias del borde de fuga están más relacionadas con la resistencia inducida, no con la resistencia de fricción, que resulta del rozamiento del aire con la superficie del ala."
  },
  {
    text: "a los torbellinos de punta de ala y a la fuerza centrífuga.",
    isCorrect: false,
    explanation: "Los torbellinos de punta de ala contribuyen a la resistencia inducida, y la fuerza centrífuga no es una causa de resistencia de fricción."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Los torbellinos marginales responsables de la resistencia inducida:",
image: "",
answers: [
  {
    text: "existen detrás de todas las alas y contribuyen a la resistencia inducida.",
    isCorrect: true,
    explanation: "Los torbellinos marginales se generan detrás de cualquier ala que produce sustentación, independientemente de su tamaño, y son la causa principal de la resistencia inducida."
  },
  {
    text: "existen sólo detrás de las alas grandes y se intensifican con la carga.",
    isCorrect: false,
    explanation: "Los torbellinos marginales no se limitan a las alas grandes; se forman detrás de todas las alas que generan sustentación, sin importar su tamaño."
  },
  {
    text: "existen sobre todo con viento fuerte y se reducen con el viento débil.",
    isCorrect: false,
    explanation: "Los torbellinos marginales no dependen de la fuerza del viento; son el resultado de la generación de sustentación por el ala."
  },
  {
    text: "se forman sólo a altas velocidades y desaparecen a bajas velocidades.",
    isCorrect: false,
    explanation: "Los torbellinos marginales se forman siempre que hay generación de sustentación, independientemente de la velocidad del ala."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La resistencia parásita se debe:",
image: "",
answers: [
  {
    text: "a todo aquello que no sustenta.",
    isCorrect: true,
    explanation: "La resistencia parásita es causada por todos los elementos que no contribuyen a la sustentación, como el piloto, las suspensiones, y cualquier otro objeto que interfiere con el flujo de aire."
  },
  {
    text: "a las irregularidades de la superficie del ala y a la fricción con el aire.",
    isCorrect: false,
    explanation: "Las irregularidades de la superficie del ala contribuyen a la resistencia de fricción, que es un componente de la resistencia parásita, pero no son la única causa de la resistencia parásita en general."
  },
  {
    text: "a los torbellinos marginales y al efecto suelo.",
    isCorrect: false,
    explanation: "Los torbellinos marginales son responsables de la resistencia inducida, no de la resistencia parásita. El efecto suelo tampoco es una causa directa de la resistencia parásita."
  },
  {
    text: "a la interacción con el viento relativo y la forma del perfil del ala.",
    isCorrect: false,
    explanation: "La resistencia parásita no está directamente relacionada con la forma del perfil del ala; se refiere a la resistencia creada por elementos que no generan sustentación."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Si aumentamos su resistencia, el ala tiende a:",
image: "",
answers: [
  {
    text: "hundirse.",
    isCorrect: true,
    explanation: "Al aumentar la resistencia, el ala pierde sustentación y tiende a hundirse, ya que el flujo de aire se ve interrumpido y disminuye la eficacia aerodinámica."
  },
  {
    text: "ir más despacio.",
    isCorrect: false,
    explanation: "Aunque la resistencia adicional puede disminuir la velocidad, el efecto principal de un aumento en la resistencia es que el ala pierde sustentación y comienza a hundirse."
  },
  {
    text: "acelerar.",
    isCorrect: false,
    explanation: "Aumentar la resistencia no provoca una aceleración; por el contrario, resulta en una pérdida de sustentación que lleva al ala a hundirse."
  },
  {
    text: "ascender.",
    isCorrect: false,
    explanation: "Un incremento en la resistencia no causa que el ala ascienda; al contrario, la mayor resistencia reduce la eficacia aerodinámica y provoca que el ala pierda altura."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "En final, cuando el piloto se incorpora, el ala:",
image: "",
answers: [
  {
    text: "deteriora su penetración y aumenta su tasa de caída.",
    isCorrect: true,
    explanation: "Cuando el piloto se incorpora, se incrementa la resistencia parásita, lo que reduce la capacidad del ala para penetrar el aire de manera eficiente y provoca un aumento en la tasa de caída debido a la pérdida de sustentación."
  },
  {
    text: "mejora su penetración y aumenta su tasa de caída.",
    isCorrect: false,
    explanation: "La penetración del ala no mejora cuando el piloto se incorpora; la mayor resistencia dificulta su capacidad para atravesar el aire, y esto provoca un aumento en la tasa de caída."
  },
  {
    text: "mantiene su velocidad constante y disminuye su tasa de caída.",
    isCorrect: false,
    explanation: "La velocidad y la tasa de caída no se mantienen o disminuyen cuando el piloto se incorpora; la mayor resistencia afecta el rendimiento del ala, provocando un aumento en la tasa de caída."
  },
  {
    text: "deteriora su penetración y disminuye su tasa de caída.",
    isCorrect: false,
    explanation: "La tasa de caída no disminuye cuando el piloto se incorpora; en realidad, la mayor resistencia reduce la penetración y aumenta la tasa de caída."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "Entre los siguientes puntos algunos mejoran la penetración:",
image: "",
answers: [
  {
    text: "perfil limpio sin pliegues ni roturas y suspensiones finas.",
    isCorrect: true,
    explanation: "Un perfil limpio sin pliegues ni roturas y el uso de suspensiones finas minimizan la resistencia al aire, mejorando la penetración del ala."
  },
  {
    text: "posición vertical del piloto y suspensiones anchas.",
    isCorrect: false,
    explanation: "Una posición vertical del piloto y suspensiones anchas aumentan la resistencia al aire, lo que empeora la penetración del ala."
  },
  {
    text: "perfil con pliegues y roturas.",
    isCorrect: false,
    explanation: "Un perfil con pliegues y roturas aumenta la resistencia, lo que afecta negativamente la capacidad del ala para penetrar el aire eficientemente."
  },
  {
    text: "posición horizontal del piloto y suspensiones gruesas.",
    isCorrect: false,
    explanation: "Aunque la posición horizontal del piloto puede reducir la resistencia, las suspensiones gruesas generan mayor fricción con el aire y no contribuyen a mejorar la penetración."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Un ala puede pivotar alrededor de los ejes de:",
image: "",
answers: [
  {
    text: "dirección (vertical, giro), alabeo (longitudinal, balanceo) y profundidad (transversal, cabeceo).",
    isCorrect: true,
    explanation: "Un ala puede pivotar alrededor de tres ejes principales: el eje de dirección (vertical, giro), el eje de alabeo (longitudinal, balanceo), y el eje de profundidad (transversal, cabeceo). Estos ejes permiten los movimientos de giro, balanceo y cabeceo."
  },
  {
    text: "cuerda (vertical, cabeceo), dirección (horizontal, giro) y profundidad (neutro, balanceo).",
    isCorrect: false,
    explanation: "El ala no pivota alrededor de un eje de cuerda (vertical, cabeceo); el cabeceo se refiere al eje transversal o de profundidad, y el giro está en el eje vertical. Además, no existe un eje de 'profundidad (neutro, balanceo)'."
  },
  {
    text: "alabeo (longitudinal, cabeceo), cuerda (vertical, balanceo) y profundidad (transversal, giro).",
    isCorrect: false,
    explanation: "El alabeo está relacionado con el eje longitudinal (balanceo) y no con el cabeceo. La profundidad se relaciona con el cabeceo, no con el giro. Además, el concepto de 'cuerda (vertical, balanceo)' no corresponde a un eje de movimiento real."
  },
  {
    text: "dirección (vertical, balanceo), alabeo (transversal, cabeceo) y cuerda (horizontal, giro).",
    isCorrect: false,
    explanation: "La dirección se asocia con el giro y no con el balanceo. El alabeo es longitudinal y está relacionado con el balanceo, no con el cabeceo. El 'eje de cuerda' no es un eje real de movimiento para el giro."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "La polar de las velocidades es una curva:",
image: "",
answers: [
  {
    text: "que muestra las diferentes velocidades a las que puede llegar un ala en vuelo rectilíneo estabilizado, por una carga y un peso/piloto determinados.",
    isCorrect: true,
    explanation: "La polar de las velocidades es una curva que representa las distintas velocidades posibles de un ala en vuelo rectilíneo estabilizado para una carga y un peso/piloto específicos, reflejando el rendimiento del ala."
  },
  {
    text: "que muestra la forma del perfil del ala.",
    isCorrect: false,
    explanation: "La polar de las velocidades no muestra la forma del perfil del ala; representa el rendimiento y las velocidades posibles del ala bajo diferentes condiciones de carga y peso."
  },
  {
    text: "que indica las velocidades máximas alcanzables en vuelo turbulento.",
    isCorrect: false,
    explanation: "La polar de las velocidades no se utiliza para mostrar las velocidades máximas en vuelo turbulento; está enfocada en el rendimiento en vuelo rectilíneo estabilizado."
  },
  {
    text: "que relaciona el ángulo de ataque con la velocidad de pérdida.",
    isCorrect: false,
    explanation: "La polar de las velocidades no relaciona el ángulo de ataque con la velocidad de pérdida; se utiliza para mostrar las velocidades alcanzables en vuelo estabilizado para diferentes cargas y pesos."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Todos los regímenes de vuelo con un ángulo de incidencia superior al de la tasa de caída mínima:",
image: "",
answers: [
  {
    text: "corresponden a bajos rendimientos para el ala.",
    isCorrect: true,
    explanation: "Cuando el ángulo de incidencia es superior al de la tasa de caída mínima, el ala opera en un régimen menos eficiente, lo que resulta en un menor rendimiento aerodinámico."
  },
  {
    text: "son los más alejados de la pérdida.",
    isCorrect: false,
    explanation: "Un ángulo de incidencia superior al de la tasa de caída mínima significa que el ala está más cerca del ángulo de pérdida, no más alejada de él."
  },
  {
    text: "corresponden a la mejor manejabilidad del ala.",
    isCorrect: false,
    explanation: "Un ángulo de incidencia más alto generalmente no ofrece la mejor manejabilidad; puede hacer que el ala sea más difícil de controlar debido al aumento de la resistencia y la proximidad al ángulo de pérdida."
  },
  {
    text: "están aconsejados para volar cerca del suelo.",
    isCorrect: false,
    explanation: "Volar con un ángulo de incidencia superior al de la tasa de caída mínima no es aconsejable cerca del suelo, ya que el ala está en un régimen menos eficiente y más cercano a la pérdida, lo que puede ser peligroso."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Se llama viento relativo, al viento:",
image: "",
answers: [
  {
    text: "creado por el desplazamiento del aparato en el aire y sentido por el piloto en su cara.",
    isCorrect: true,
    explanation: "El viento relativo es el flujo de aire que se genera por el desplazamiento del aparato a través del aire y es el viento que el piloto siente en su cara durante el vuelo."
  },
  {
    text: "creado por la velocidad/suelo del aparato que sopla de manera natural sin relación con el vuelo.",
    isCorrect: false,
    explanation: "El viento relativo no se genera por la velocidad respecto al suelo ni es un viento que sopla de manera natural; es el resultado del desplazamiento del aparato en el aire."
  },
  {
    text: "creado por el desplazamiento totalmente vertical del aparato producido por el movimiento del aire sin intervención del aparato.",
    isCorrect: false,
    explanation: "El viento relativo es generado por el desplazamiento del aparato en el aire y no está relacionado con un desplazamiento totalmente vertical o con un movimiento del aire sin la intervención del aparato."
  },
  {
    text: "que sopla de manera natural sin relación con el vuelo.",
    isCorrect: false,
    explanation: "El viento relativo es el resultado del movimiento del aparato en el aire, no un viento que sopla de manera natural e independiente del vuelo."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "La velocidad del viento relativo es:",
image: "",
answers: [
  {
    text: "igual a la velocidad del aparato en su trayectoria.",
    isCorrect: true,
    explanation: "La velocidad del viento relativo es igual a la velocidad del aparato respecto al aire en su trayectoria, ya que representa el flujo de aire opuesto al movimiento del aparato."
  },
  {
    text: "influenciada por el viento meteorológico.",
    isCorrect: false,
    explanation: "La velocidad del viento relativo depende del movimiento del aparato en el aire y no está influenciada directamente por el viento meteorológico."
  },
  {
    text: "siempre la misma.",
    isCorrect: false,
    explanation: "La velocidad del viento relativo varía según la velocidad del aparato en su trayectoria; no es una constante."
  },
  {
    text: "dependiente de la altitud del vuelo.",
    isCorrect: false,
    explanation: "La velocidad del viento relativo no depende de la altitud, sino de la velocidad del aparato en su trayectoria a través del aire."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La velocidad relativa aire se define con respecto:",
image: "",
answers: [
  {
    text: "al aire atravesado.",
    isCorrect: true,
    explanation: "La velocidad relativa aire se refiere a la velocidad del aparato con respecto al aire que atraviesa, lo que determina su rendimiento y control durante el vuelo."
  },
  {
    text: "al piso.",
    isCorrect: false,
    explanation: "La velocidad relativa aire no se define con respecto al piso, sino con respecto al aire a través del cual el aparato se desplaza."
  },
  {
    text: "al viento meteorológico.",
    isCorrect: false,
    explanation: "La velocidad relativa aire no se define en relación con el viento meteorológico, sino en función del aire que el aparato atraviesa directamente."
  },
  {
    text: "a la altitud de vuelo.",
    isCorrect: false,
    explanation: "La velocidad relativa aire no se relaciona con la altitud de vuelo; se define por la velocidad del aparato respecto al aire que atraviesa."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "El viento relativo:",
image: "",
answers: [
  {
    text: "tiene por eje la trayectoria/aire del ala.",
    isCorrect: true,
    explanation: "El viento relativo se refiere al flujo de aire que se desplaza en la dirección opuesta a la trayectoria del ala respecto al aire, y no al suelo."
  },
  {
    text: "no varía nunca.",
    isCorrect: false,
    explanation: "El viento relativo varía con la velocidad y la trayectoria del ala en relación con el aire; no es una constante."
  },
  {
    text: "tiene por eje la trayectoria/suelo del ala.",
    isCorrect: false,
    explanation: "El viento relativo se basa en la trayectoria del ala respecto al aire, no al suelo."
  },
  {
    text: "es independiente de la velocidad del ala.",
    isCorrect: false,
    explanation: "El viento relativo depende directamente de la velocidad del ala en relación con el aire; no es independiente de ella."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "La tasa de caída:",
image: "",
answers: [
  {
    text: "es la velocidad vertical del parapente con respecto al aire y tiene un valor mínimo para cada ala que depende del peso del piloto.",
    isCorrect: true,
    explanation: "La tasa de caída se refiere a la velocidad vertical del parapente en relación con el aire y varía dependiendo del ala y el peso del piloto, alcanzando un valor mínimo específico para cada combinación."
  },
  {
    text: "es la velocidad vertical del parapente con respecto al suelo.",
    isCorrect: false,
    explanation: "La tasa de caída se mide en relación al aire, no al suelo. Las condiciones del aire determinan esta velocidad, independientemente del movimiento relativo al suelo."
  },
  {
    text: "es constante para todas las alas y pilotos.",
    isCorrect: false,
    explanation: "La tasa de caída no es constante; varía según el peso del piloto y las características del ala. Cada combinación tiene su propia tasa mínima de caída."
  },
  {
    text: "es independiente del peso del piloto.",
    isCorrect: false,
    explanation: "La tasa de caída depende directamente del peso del piloto y las características del ala, lo que afecta la velocidad a la que desciende el parapente."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Un viento regular en fuerza y dirección no tiene influencia:",
image: "",
answers: [
  {
    text: "sobre la velocidad/aire.",
    isCorrect: true,
    explanation: "Un viento constante en fuerza y dirección no afecta la velocidad del aparato respecto al aire, ya que esta velocidad es determinada únicamente por el movimiento del aparato a través del aire."
  },
  {
    text: "sobre la velocidad/suelo.",
    isCorrect: false,
    explanation: "El viento sí influye en la velocidad del aparato respecto al suelo, ya que la componente del viento se suma o resta a la velocidad del aparato en relación al suelo."
  },
  {
    text: "sobre la fineza/suelo.",
    isCorrect: false,
    explanation: "El viento afecta la fineza/suelo (relación entre distancia recorrida y altura perdida respecto al suelo), ya que cambia la componente horizontal del desplazamiento."
  },
  {
    text: "sobre el frío del piloto.",
    isCorrect: false,
    explanation: "El frío del piloto no tiene relación directa con el viento relativo en el contexto de la aerodinámica del vuelo; es un factor independiente de la influencia del viento en el rendimiento del aparato."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "Usted vuela con fuerte viento de atrás, esto provoca:",
image: "",
answers: [
  {
    text: "un aumento de la velocidad/suelo y un aumento de la fineza/suelo.",
    isCorrect: true,
    explanation: "Con un viento de cola, la velocidad respecto al suelo aumenta, y la fineza/suelo también mejora, ya que se recorre más distancia horizontalmente por cada unidad de altura perdida."
  },
  {
    text: "una disminución de la R.F.A.",
    isCorrect: false,
    explanation: "La R.F.A. (resultante de fuerzas aerodinámicas) no disminuye por volar con viento de atrás; permanece constante respecto al aparato y su velocidad relativa al aire."
  },
  {
    text: "un aumento de la incidencia.",
    isCorrect: false,
    explanation: "La incidencia no aumenta como resultado del viento de cola; la incidencia es determinada por el ángulo entre el ala y el flujo de aire que la rodea."
  },
  {
    text: "una disminución de la velocidad/aire.",
    isCorrect: false,
    explanation: "El viento de cola no afecta la velocidad respecto al aire; solo afecta la velocidad en relación al suelo."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Usted vuela a 35 km/h con 10 km/h de viento de cola, su velocidad/suelo:",
image: "",
answers: [
  {
    text: "es de alrededor de 45 km/h.",
    isCorrect: true,
    explanation: "La velocidad/suelo se incrementa por la velocidad del viento de cola, por lo tanto, 35 km/h + 10 km/h resulta en una velocidad/suelo de aproximadamente 45 km/h."
  },
  {
    text: "queda igual.",
    isCorrect: false,
    explanation: "La velocidad/suelo no queda igual; con un viento de cola, la velocidad respecto al suelo aumenta."
  },
  {
    text: "es de alrededor de 25 km/h.",
    isCorrect: false,
    explanation: "La velocidad/suelo no se reduce a 25 km/h; con un viento de cola, se suma la velocidad del viento a la velocidad del aparato, resultando en un aumento."
  },
  {
    text: "disminuye debido a la resistencia adicional.",
    isCorrect: false,
    explanation: "La velocidad/suelo no disminuye por un viento de cola; la resistencia adicional no es un factor en este caso, ya que el viento de cola incrementa la velocidad respecto al suelo."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Al atravesar una masa de aire turbulento, el conjunto ala + piloto se somete a variaciones:",
image: "",
answers: [
  {
    text: "de incidencia, de velocidad/aire y de R.F.A.",
    isCorrect: true,
    explanation: "Cuando se atraviesa una masa de aire turbulento, el conjunto ala + piloto experimenta variaciones en la incidencia, la velocidad respecto al aire, y la resultante de fuerzas aerodinámicas (R.F.A.) debido a las fluctuaciones en el flujo de aire."
  },
  {
    text: "de incidencia, de masa y de temperatura.",
    isCorrect: false,
    explanation: "La masa y la temperatura del conjunto ala + piloto no cambian al atravesar una masa de aire turbulento; solo se experimentan variaciones aerodinámicas como la incidencia, velocidad/aire, y R.F.A."
  },
  {
    text: "de velocidad/aire y de altitud constante.",
    isCorrect: false,
    explanation: "Al atravesar una masa de aire turbulento, la velocidad/aire varía, pero la altitud no permanece constante debido a las fluctuaciones en las fuerzas aerodinámicas."
  },
  {
    text: "de incidencia, de masa y de dirección de vuelo inalterada.",
    isCorrect: false,
    explanation: "La masa no varía al atravesar la turbulencia y la dirección de vuelo no permanece inalterada; la turbulencia puede causar desviaciones en la dirección del vuelo."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "Cuando usted entra en una ascendente, la incidencia:",
image: "",
answers: [
  {
    text: "aumenta.",
    isCorrect: true,
    explanation: "Al entrar en una corriente ascendente, la dirección del flujo de aire cambia respecto al ala, lo que incrementa el ángulo de incidencia momentáneamente."
  },
  {
    text: "disminuye.",
    isCorrect: false,
    explanation: "La incidencia no disminuye al entrar en una ascendente; en realidad, aumenta porque el flujo de aire ascendente cambia el ángulo del aire que impacta el ala."
  },
  {
    text: "no cambia.",
    isCorrect: false,
    explanation: "La incidencia sí cambia cuando se entra en una ascendente, ya que la dirección del flujo de aire respecto al ala se modifica, provocando un aumento en la incidencia."
  },
  {
    text: "se invierte.",
    isCorrect: false,
    explanation: "La incidencia no se invierte al entrar en una ascendente; simplemente aumenta debido a la modificación del flujo de aire alrededor del ala."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Cuando usted entra en un descendente, la incidencia:",
image: "",
answers: [
  {
    text: "disminuye.",
    isCorrect: true,
    explanation: "Al entrar en una corriente descendente, el flujo de aire cambia en relación al ala, lo que reduce momentáneamente el ángulo de incidencia."
  },
  {
    text: "aumenta.",
    isCorrect: false,
    explanation: "La incidencia no aumenta al entrar en una descendente; de hecho, disminuye debido al cambio en la dirección del flujo de aire respecto al ala."
  },
  {
    text: "no cambia.",
    isCorrect: false,
    explanation: "La incidencia sí cambia cuando se entra en un descendente, ya que la dirección del flujo de aire respecto al ala se modifica, reduciendo la incidencia."
  },
  {
    text: "se mantiene constante.",
    isCorrect: false,
    explanation: "La incidencia no se mantiene constante al entrar en una descendente; disminuye debido a la alteración en el flujo de aire sobre el ala."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Cuando el ala entra en una ascendente:",
image: "",
answers: [
  {
    text: "la R.F.A. aumenta y la incidencia aumenta, acelerando el ala hacia arriba.",
    isCorrect: true,
    explanation: "Cuando el ala entra en una corriente ascendente, la resultante de fuerzas aerodinámicas (R.F.A.) aumenta debido a la mayor sustentación, y la incidencia también se incrementa, lo que causa que el ala acelere hacia arriba."
  },
  {
    text: "la velocidad del ala disminuye de forma muy notable.",
    isCorrect: false,
    explanation: "La velocidad del ala no necesariamente disminuye de forma notable al entrar en una ascendente; en realidad, la sustentación incrementada puede resultar en una aceleración hacia arriba."
  },
  {
    text: "la R.F.A. aumenta y la incidencia disminuye, acelerando el ala hacia abajo.",
    isCorrect: false,
    explanation: "La incidencia no disminuye al entrar en una ascendente; aumenta debido al cambio en la dirección del flujo de aire que impacta el ala, lo que acelera el ala hacia arriba, no hacia abajo."
  },
  {
    text: "la R.F.A. disminuye y la incidencia disminuye, acelerando el ala hacia arriba.",
    isCorrect: false,
    explanation: "La R.F.A. no disminuye al entrar en una ascendente; de hecho, aumenta, proporcionando mayor sustentación y acelerando el ala hacia arriba."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "Cuando el ala entra en una descendente:",
image: "",
answers: [
  {
    text: "la incidencia disminuye y la R.F.A. disminuye, acelerando el ala hacia abajo.",
    isCorrect: true,
    explanation: "Al entrar en una corriente descendente, el flujo de aire cambia en relación al ala, lo que reduce la incidencia y la resultante de fuerzas aerodinámicas (R.F.A.), provocando que el ala acelere hacia abajo."
  },
  {
    text: "la incidencia aumenta y la R.F.A. aumenta, acelerando el ala hacia arriba.",
    isCorrect: false,
    explanation: "La incidencia no aumenta al entrar en una descendente; en realidad, disminuye debido al cambio en la dirección del flujo de aire respecto al ala, y la R.F.A. también disminuye, no aumenta."
  },
  {
    text: "la velocidad disminuye considerablemente.",
    isCorrect: false,
    explanation: "La velocidad del ala no necesariamente disminuye considerablemente al entrar en una descendente; la principal consecuencia es la aceleración hacia abajo debido a la reducción de la R.F.A. y la incidencia."
  },
  {
    text: "la R.F.A. aumenta, y el ala se eleva.",
    isCorrect: false,
    explanation: "La R.F.A. no aumenta al entrar en una descendente; disminuye, lo que provoca que el ala pierda sustentación y acelere hacia abajo."
  }
]

}
,
{
  topic: "aerodinámica",

statement: "En una ascendente un ala en planeo:",
image: "",
answers: [
  {
    text: "baja con respecto al aire ascendente.",
    isCorrect: true,
    explanation: "En una corriente ascendente, un ala en planeo desciende con respecto al aire circundante, aunque puede ganar altitud respecto al suelo si el ascenso del aire es mayor que su tasa de caída."
  },
  {
    text: "sube con respecto al aire ascendente.",
    isCorrect: false,
    explanation: "El ala no sube con respecto al aire ascendente; se mantiene descendiendo en relación con el aire, incluso si gana altitud respecto al suelo."
  },
  {
    text: "sube a la misma velocidad que el aire ascendente.",
    isCorrect: false,
    explanation: "El ala en planeo no asciende a la misma velocidad que el aire; siempre pierde altura en relación al aire, aunque el aire ascendente pueda elevarla en relación al suelo."
  },
  {
    text: "permanece estática con respecto al aire ascendente.",
    isCorrect: false,
    explanation: "Un ala en planeo nunca permanece estática respecto al aire ascendente; siempre desciende en relación al aire circundante."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Con una posición de los comandos igual que en aire inmóvil, en una ascendente regular:",
image: "",
answers: [
  {
    text: "mi velocidad/aire es la misma y mi incidencia es más elevada.",
    isCorrect: true,
    explanation: "En una ascendente regular, la velocidad respecto al aire no cambia si los comandos permanecen en la misma posición que en aire inmóvil. Sin embargo, la incidencia aumenta debido al flujo de aire ascendente."
  },
  {
    text: "mi velocidad es más elevada.",
    isCorrect: false,
    explanation: "La velocidad respecto al aire no aumenta en una ascendente si los comandos permanecen sin cambios; lo que cambia es la incidencia."
  },
  {
    text: "mi incidencia es la misma.",
    isCorrect: false,
    explanation: "La incidencia no se mantiene igual en una ascendente; en realidad, aumenta debido al cambio en la dirección del flujo de aire que impacta el ala."
  },
  {
    text: "mi velocidad disminuye considerablemente.",
    isCorrect: false,
    explanation: "La velocidad respecto al aire no disminuye considerablemente en una ascendente si los comandos permanecen sin cambios; la incidencia es lo que cambia."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Usted está en una descendente, la fineza/suelo:",
image: "",
answers: [
  {
    text: "disminuye.",
    isCorrect: true,
    explanation: "En una descendente, la fineza/suelo disminuye porque el parapente pierde más altura en relación a la distancia recorrida sobre el suelo, reduciendo su eficiencia."
  },
  {
    text: "mejora.",
    isCorrect: false,
    explanation: "La fineza/suelo no mejora en una descendente; la mayor pérdida de altitud en relación al avance sobre el suelo resulta en una menor fineza."
  },
  {
    text: "es la misma.",
    isCorrect: false,
    explanation: "La fineza/suelo no permanece igual en una descendente, ya que la corriente descendente hace que el parapente pierda más altura en relación a la distancia recorrida sobre el suelo."
  },
  {
    text: "aumenta solo en presencia de viento en contra.",
    isCorrect: false,
    explanation: "La fineza/suelo no aumenta en una descendente, incluso con viento en contra; la eficiencia se ve reducida debido a la mayor tasa de caída."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "El ángulo de incidencia está definido por la cuerda alar y:",
image: "",
answers: [
  {
    text: "la dirección del viento relativo.",
    isCorrect: true,
    explanation: "El ángulo de incidencia es el ángulo formado entre la cuerda alar y la dirección del viento relativo que impacta el ala."
  },
  {
    text: "la horizontal.",
    isCorrect: false,
    explanation: "La horizontal no define el ángulo de incidencia; este se forma entre la cuerda alar y la dirección del viento relativo."
  },
  {
    text: "la resultante de fuerzas aerodinámicas.",
    isCorrect: false,
    explanation: "La resultante de fuerzas aerodinámicas no define el ángulo de incidencia; este depende de la cuerda alar y la dirección del viento relativo."
  },
  {
    text: "la dirección de vuelo respecto al suelo.",
    isCorrect: false,
    explanation: "La dirección de vuelo respecto al suelo no define el ángulo de incidencia; el ángulo está determinado por la cuerda alar y la dirección del viento relativo."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "El ángulo entre el planeo del ala y el viento relativo se llama:",
image: "",
answers: [
  {
    text: "ángulo de incidencia.",
    isCorrect: true,
    explanation: "El ángulo de incidencia es el ángulo formado entre la cuerda alar (dirección del planeo del ala) y el viento relativo que impacta el ala."
  },
  {
    text: "ángulo de planeo.",
    isCorrect: false,
    explanation: "El ángulo de planeo se refiere a la relación entre la distancia horizontal recorrida y la altura perdida, no al ángulo entre el ala y el viento relativo."
  },
  {
    text: "ángulo de abertura.",
    isCorrect: false,
    explanation: "El ángulo de abertura no es un término utilizado para describir el ángulo entre el planeo del ala y el viento relativo; el término correcto es ángulo de incidencia."
  },
  {
    text: "ángulo de ataque.",
    isCorrect: false,
    explanation: "El ángulo de ataque is different from the angle of incidence; it refers to the angle between the wing chord line and the oncoming air, not specifically in the context of gliding."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Se llama ángulo de planeo, al ángulo entre:",
image: "",
answers: [
  {
    text: "la trayectoria y la horizontal.",
    isCorrect: true,
    explanation: "El ángulo de planeo es el ángulo formado entre la trayectoria de descenso del ala y la línea horizontal. Este ángulo indica la eficiencia del planeo."
  },
  {
    text: "la cuerda del ala y la trayectoria.",
    isCorrect: false,
    explanation: "El ángulo entre la cuerda del ala y la trayectoria no se define como el ángulo de planeo; está relacionado con el ángulo de ataque."
  },
  {
    text: "la horizontal y la cuerda del ala.",
    isCorrect: false,
    explanation: "El ángulo entre la horizontal y la cuerda del ala no es el ángulo de planeo; este está definido por la trayectoria y la horizontal."
  },
  {
    text: "la dirección del viento relativo y la cuerda del ala.",
    isCorrect: false,
    explanation: "Este ángulo corresponde al ángulo de incidencia, no al ángulo de planeo."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "En un giro el ala se inclina gracias a un movimiento de:",
image: "",
answers: [
  {
    text: "alabeo.",
    isCorrect: true,
    explanation: "El alabeo es el movimiento que permite que el ala se incline hacia los lados, facilitando los giros mediante la rotación alrededor del eje longitudinal del ala."
  },
  {
    text: "dirección.",
    isCorrect: false,
    explanation: "La dirección se refiere al movimiento alrededor del eje vertical y no al movimiento que inclina el ala durante un giro."
  },
  {
    text: "profundidad.",
    isCorrect: false,
    explanation: "La profundidad se relaciona con el movimiento del ala hacia arriba o abajo alrededor del eje transversal y no con la inclinación lateral del ala en un giro."
  },
  {
    text: "cuerda.",
    isCorrect: false,
    explanation: "La cuerda no describe un tipo de movimiento en el contexto del giro del ala; es simplemente una línea imaginaria que va desde el borde de ataque al borde de fuga del perfil alar."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Durante un giro estabilizado a la derecha, el movimiento de alabeo:",
image: "",
answers: [
  {
    text: "es nulo.",
    isCorrect: true,
    explanation: "En un giro estabilizado a la derecha, el movimiento de alabeo es nulo porque el ala ya está inclinada a un ángulo constante, manteniendo un giro equilibrado sin necesidad de más alabeo."
  },
  {
    text: "es hacia la derecha.",
    isCorrect: false,
    explanation: "El movimiento de alabeo hacia la derecha ocurre al iniciar el giro, pero en un giro estabilizado, ya no hay un movimiento de alabeo continuo."
  },
  {
    text: "es hacia la izquierda.",
    isCorrect: false,
    explanation: "En un giro estabilizado a la derecha, no hay movimiento de alabeo hacia la izquierda; el ala ya está inclinada hacia la derecha."
  },
  {
    text: "se alterna constantemente.",
    isCorrect: false,
    explanation: "Durante un giro estabilizado, el movimiento de alabeo no se alterna constantemente; permanece nulo una vez que la inclinación del ala es constante."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "Durante un giro estabilizado a la derecha, el movimiento de dirección es:",
image: "",
answers: [
  {
    text: "hacia la derecha.",
    isCorrect: true,
    explanation: "Durante un giro estabilizado a la derecha, el movimiento de dirección continúa siendo hacia la derecha para mantener la trayectoria curva, compensando la fuerza centrífuga."
  },
  {
    text: "nulo.",
    isCorrect: false,
    explanation: "El movimiento de dirección no es nulo durante un giro estabilizado a la derecha; se requiere un ajuste continuo hacia la derecha para mantener la trayectoria del giro."
  },
  {
    text: "hacia la izquierda.",
    isCorrect: false,
    explanation: "El movimiento de dirección no es hacia la izquierda en un giro estabilizado a la derecha; la dirección debe mantenerse hacia la derecha para conservar el giro."
  },
  {
    text: "alternante entre derecha e izquierda.",
    isCorrect: false,
    explanation: "El movimiento de dirección no alterna entre derecha e izquierda; en un giro estabilizado a la derecha, la dirección permanece hacia la derecha."
  }
]
}
,
{
  topic: "aerodinámica",

statement: "El peso aparente sobre un aparato en giro es:",
image: "",
answers: [
  {
    text: "superior al peso total ala/piloto.",
    isCorrect: true,
    explanation: "Durante un giro, la fuerza centrífuga actúa sobre el aparato, aumentando el peso aparente por encima del peso total ala/piloto debido a la aceleración centrípeta."
  },
  {
    text: "igual al peso total ala/piloto.",
    isCorrect: false,
    explanation: "El peso aparente no es igual al peso total ala/piloto durante un giro; la fuerza centrífuga hace que el peso aparente sea mayor."
  },
  {
    text: "inferior al peso total ala/piloto.",
    isCorrect: false,
    explanation: "El peso aparente nunca es inferior al peso total ala/piloto durante un giro; la fuerza centrífuga siempre hace que sea mayor."
  },
  {
    text: "variable pero siempre menor que en vuelo recto.",
    isCorrect: false,
    explanation: "El peso aparente no es menor en un giro; es mayor que en vuelo recto debido a las fuerzas adicionales que actúan sobre el aparato."
  }
]
}
, 
//HERE
{
topic:"aerodinámica",  
statement: "La fineza es la relación:",
image: "",
answers: [
  {
    text: "velocidad horizontal sobre velocidad vertical.",
    isCorrect: true,
    explanation: "La fineza es la relación entre la velocidad horizontal (distancia recorrida) y la velocidad vertical (descenso). Indica la eficiencia del ala en cuanto a planeo."
  },
  {
    text: "velocidad vertical sobre velocidad horizontal.",
    isCorrect: false,
    explanation: "La fineza no se calcula como velocidad vertical sobre velocidad horizontal; esta relación se invierte en el cálculo de la fineza."
  },
  {
    text: "velocidad de vuelo sobre tasa de caída.",
    isCorrect: false,
    explanation: "La fineza no se define por la velocidad de vuelo sobre la tasa de caída, sino por la relación entre la velocidad horizontal y vertical."
  },
  {
    text: "el ángulo de ataque del ala.",
    isCorrect: false,
    explanation: "El ángulo de ataque no se utiliza para definir la fineza; la fineza se refiere a la relación entre las velocidades horizontal y vertical del ala en planeo."
  }
]
}
,
{
topic:"aerodinámica",  
statement: "La fineza es la relación:",
image: "",
answers: [
  {
    text: "Sustentación sobre resistencia, velocidad horizontal sobre tasa de caída, distancia recorrida horizontalmente sobre distancia recorrida verticalmente.",
    isCorrect: true,
    explanation: "Correcto, la fineza se refiere a la relación entre sustentación y resistencia, la velocidad horizontal sobre la tasa de caída, y también a la distancia horizontal recorrida respecto a la vertical descendida."
  },
  {
    text: "Resistencia sobre sustentación.",
    isCorrect: false,
    explanation: "Incorrecto, la fineza se refiere a la relación de sustentación sobre resistencia, no al revés."
  },
  {
    text: "Distancia recorrida verticalmente sobre distancia recorrida horizontalmente.",
    isCorrect: false,
    explanation: "Incorrecto, la fineza es la relación opuesta, es decir, distancia horizontal sobre distancia vertical."
  },
  {
    text: "Velocidad vertical sobre tasa de caída.",
    isCorrect: false,
    explanation: "Esto es incorrecto, ya que la fineza no se refiere a la velocidad vertical, sino a la relación entre distancia horizontal recorrida y distancia vertical descendida."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La fineza/aire:",
image: "",
answers: [
  {
    text: "varía con la incidencia del aparato y pasa por un máximo para un cierto valor de incidencia.",
    isCorrect: true,
    explanation: "La fineza depende del ángulo de ataque (incidencia) y alcanza un valor máximo en un punto óptimo de la incidencia. Después de este punto, la fineza disminuye."
  },
  {
    text: "es máxima cuando la tasa de caída es mínima y no varía con la incidencia del aparato.",
    isCorrect: false,
    explanation: "La tasa de caída mínima no coincide con la máxima fineza. La fineza también varía con la incidencia del aparato, y no es constante."
  },
  {
    text: "no varía con la incidencia del aparato y es máxima justo antes de la pérdida.",
    isCorrect: false,
    explanation: "La fineza disminuye antes de la pérdida debido al aumento de la resistencia. Además, la fineza varía con la incidencia, por lo que esta afirmación es incorrecta."
  },
  {
    text: "aumenta indefinidamente con la velocidad del aparato.",
    isCorrect: false,
    explanation: "La fineza no aumenta indefinidamente con la velocidad. Al contrario, a velocidades mayores, la resistencia aerodinámica aumenta, lo que reduce la fineza después de un punto óptimo."
  }
]
}

,
{
topic: "aerodinámica",
statement: "Con una incidencia dada, la fineza/aire es independiente:",
image: "",
answers: [
  {
    text: "del viento meteo.",
    isCorrect: true,
    explanation: "La fineza/aire depende del ángulo de ataque y las características aerodinámicas, no del viento meteorológico, ya que este afecta solo a la trayectoria respecto al suelo."
  },
  {
    text: "del peso del piloto.",
    isCorrect: false,
    explanation: "El peso del piloto afecta la tasa de caída, lo que puede influir en la fineza/aire. Un mayor peso puede reducir la fineza en ciertas circunstancias."
  },
  {
    text: "de la velocidad/aire.",
    isCorrect: false,
    explanation: "La fineza está relacionada con la velocidad/aire, ya que un cambio en la velocidad afecta tanto la sustentación como la resistencia aerodinámica."
  },
  {
    text: "de la densidad del aire.",
    isCorrect: false,
    explanation: "La densidad del aire influye en las fuerzas aerodinámicas, como la sustentación y la resistencia, lo que a su vez afecta la fineza/aire."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La fineza/aire es:",
image: "",
answers: [
  {
    text: "el ángulo entre la trayectoria/aire y la horizontal.",
    isCorrect: false,
    explanation: "La fineza no es un ángulo, sino una relación entre la distancia horizontal recorrida y la altura perdida."
  },
  {
    text: "la relación entre la sustentación y la resistencia.",
    isCorrect: true,
    explanation: "La fineza es la relación entre la fuerza de sustentación y la resistencia aerodinámica, determinando el rendimiento del vuelo."
  },
  {
    text: "siempre lo mismo que la fineza/suelo.",
    isCorrect: false,
    explanation: "La fineza/suelo depende del viento meteorológico, mientras que la fineza/aire solo depende de las características aerodinámicas del ala y la velocidad relativa al aire."
  },
  {
    text: "independiente de la velocidad del aparato.",
    isCorrect: false,
    explanation: "La fineza está directamente relacionada con la velocidad del aparato, ya que a diferentes velocidades, la resistencia y sustentación varían."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La fineza/aire máxima es:",
image: "",
answers: [
  {
    text: "una característica propia del aparato y obtenida a una velocidad superior a aquella correspondiente a la de tasa de caída mínima.",
    isCorrect: true,
    explanation: "La fineza máxima depende de las características aerodinámicas del aparato y se alcanza a una velocidad ligeramente superior a la velocidad de mínima tasa de caída."
  },
  {
    text: "proporcional a la carga alar.",
    isCorrect: false,
    explanation: "La carga alar afecta el rendimiento, pero la fineza máxima no es directamente proporcional a la carga alar."
  },
  {
    text: "siempre constante independientemente de la altitud.",
    isCorrect: false,
    explanation: "La fineza varía con la altitud debido a cambios en la densidad del aire, lo que afecta la sustentación y la resistencia."
  },
  {
    text: "máxima justo antes de la pérdida del aparato.",
    isCorrect: false,
    explanation: "Antes de la pérdida, la fineza disminuye drásticamente debido al incremento de la resistencia aerodinámica."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La fineza es más elevada cuando:",
image: "",
answers: [
  {
    text: "la incidencia es pequeña y el ángulo de planeo es pequeño.",
    isCorrect: true,
    explanation: "Cuando la incidencia es pequeña y el ángulo de planeo es bajo, se reduce la resistencia, permitiendo un mejor rendimiento y una mayor distancia horizontal por cada unidad de altura perdida, lo que aumenta la fineza."
  },
  {
    text: "la incidencia es pequeña y el ángulo de planeo es grande.",
    isCorrect: false,
    explanation: "Un ángulo de planeo grande implica una mayor pérdida de altura en relación con la distancia recorrida, lo que disminuye la fineza, incluso si la incidencia es pequeña."
  },
  {
    text: "la incidencia es alta y el viento de frente es fuerte.",
    isCorrect: false,
    explanation: "Una alta incidencia genera más resistencia, y el viento de frente aumenta esta resistencia adicionalmente, lo que reduce significativamente la fineza."
  },
  {
    text: "la incidencia es alta y la velocidad del aparato es máxima.",
    isCorrect: false,
    explanation: "A alta incidencia y con la velocidad máxima del aparato, la resistencia aerodinámica es mucho mayor, lo que disminuye la fineza."
  }
]
}

,
{
topic: "aerodinámica",
statement: "La fineza/suelo:",
image: "",
answers: [
  {
    text: "es idéntica a la fineza/aire en una masa de aire inmóvil.",
    isCorrect: true,
    explanation: "Cuando el aire está en reposo, la fineza respecto al suelo es igual a la fineza respecto al aire, ya que no hay vientos que afecten el rendimiento."
  },
  {
    text: "no varía jamás.",
    isCorrect: false,
    explanation: "La fineza/suelo puede variar dependiendo de factores como el viento meteorológico, ya que afecta la trayectoria respecto al suelo."
  },
  {
    text: "es siempre inferior a la fineza/aire.",
    isCorrect: false,
    explanation: "La fineza/suelo puede ser igual o incluso mayor que la fineza/aire en condiciones de viento de cola, no siempre es inferior."
  },
  {
    text: "es mayor con viento de frente.",
    isCorrect: false,
    explanation: "Con viento de frente, la fineza/suelo disminuye porque el viento reduce la distancia recorrida sobre el suelo en comparación con la fineza/aire."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La fineza/suelo:",
image: "",
answers: [
  {
    text: "aumenta con viento de atrás.",
    isCorrect: true,
    explanation: "Con viento de cola (viento de atrás), el aparato recorre más distancia sobre el suelo por cada unidad de altura perdida, lo que aumenta la fineza/suelo."
  },
  {
    text: "disminuye con viento de atrás.",
    isCorrect: false,
    explanation: "Con viento de cola, la fineza/suelo aumenta, no disminuye, ya que el aparato recorre más distancia sobre el suelo."
  },
  {
    text: "aumenta con viento de frente.",
    isCorrect: false,
    explanation: "Con viento de frente, la resistencia es mayor, lo que reduce la distancia recorrida sobre el suelo y, por lo tanto, disminuye la fineza/suelo."
  },
  {
    text: "es independiente del viento.",
    isCorrect: false,
    explanation: "La fineza/suelo depende del viento, ya que este afecta la distancia que se recorre sobre el suelo."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La fineza/suelo:",
image: "",
answers: [
  {
    text: "aumenta con viento de atrás.",
    isCorrect: true,
    explanation: "Con viento de cola (viento de atrás), el aparato recorre más distancia sobre el suelo por cada unidad de altura perdida, lo que aumenta la fineza/suelo."
  },
  {
    text: "disminuye con viento de atrás.",
    isCorrect: false,
    explanation: "Con viento de cola, la fineza/suelo aumenta, no disminuye, ya que el aparato recorre más distancia sobre el suelo."
  },
  {
    text: "aumenta con viento de frente.",
    isCorrect: false,
    explanation: "Con viento de frente, la resistencia es mayor, lo que reduce la distancia recorrida sobre el suelo y, por lo tanto, disminuye la fineza/suelo."
  },
  {
    text: "es independiente del viento.",
    isCorrect: false,
    explanation: "La fineza/suelo depende del viento, ya que este afecta la distancia que se recorre sobre el suelo."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Para avanzar 4800 mts. en el plano horizontal, usted perdió 600 mts. de altura, su fineza está cerca de:",
image: "",
answers: [
  {
    text: "6",
    isCorrect: false,
    explanation: "La fineza es la relación entre la distancia horizontal recorrida y la altura perdida. En este caso, la fineza es mayor que 6."
  },
  {
    text: "7",
    isCorrect: false,
    explanation: "La fineza es mayor que 7, ya que recorrió 4800 metros horizontales perdiendo 600 metros de altura."
  },
  {
    text: "8",
    isCorrect: true,
    explanation: "La fineza se calcula dividiendo la distancia horizontal recorrida (4800 metros) entre la altura perdida (600 metros). 4800/600 = 8."
  },
  {
    text: "9",
    isCorrect: false,
    explanation: "La fineza es menor que 9, ya que la relación entre la distancia horizontal recorrida y la altura perdida es de 8."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Llamamos carga alar a la relación:",
image: "",
answers: [
  {
    text: "superficie del ala sobre peso total (ala+piloto).",
    isCorrect: false,
    explanation: "La carga alar es la relación entre el peso total (ala + piloto) y la superficie del ala, no al revés."
  },
  {
    text: "peso total (ala+piloto) sobre superficie del ala.",
    isCorrect: true,
    explanation: "La carga alar es la relación entre el peso total del ala y el piloto dividido por la superficie del ala, lo que indica cuánta carga soporta cada unidad de área del ala."
  },
  {
    text: "peso del piloto sobre la superficie del ala.",
    isCorrect: false,
    explanation: "La carga alar incluye tanto el peso del ala como el del piloto, no solo el peso del piloto."
  },
  {
    text: "peso del piloto sobre peso del ala.",
    isCorrect: false,
    explanation: "La carga alar se refiere a la relación entre el peso total (ala + piloto) y la superficie del ala, no a la relación entre los pesos del piloto y del ala."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Usted toma el ala de un piloto más liviano:",
image: "",
answers: [
  {
    text: "con la misma incidencia, vuela más rápido que él, debe correr más rápido en el despegue y tendrá más dificultad en mantener el ala en turbulencia.",
    isCorrect: true,
    explanation: "Un mayor peso hace que el ala necesite más velocidad para generar la misma sustentación, lo que implica mayor velocidad en vuelo y durante el despegue. Además, una mayor carga alar dificulta el manejo del ala en condiciones de turbulencia."
  },
  {
    text: "con la misma incidencia, vuela más lento que él, debe correr más lento en el despegue y le será más facil mantener el ala en turbulencia.",
    isCorrect: false,
    explanation: "Con más peso, el ala vuela más rápido, no más lento."
  },
  {
    text: "con la misma incidencia, vuela más lento que él y usted tendrá menos dificultad en mantener el ala en turbulencia.",
    isCorrect: false,
    explanation: "Con mayor peso y carga alar, será más difícil controlar el ala en turbulencia, ya que la mayor carga hace que el ala sea más sensible a los movimientos bruscos."
  },
  {
    text: "usted debe correr más lento en el despegue.",
    isCorrect: false,
    explanation: "Con mayor peso, debe correr más rápido para generar la sustentación necesaria para despegar."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Si dos pilotos tienen el mismo ala, el más pesado:",
image: "",
answers: [
  {
    text: "desciende más rápido y vuela más rápido.",
    isCorrect: true,
    explanation: "Un piloto más pesado genera mayor carga alar, lo que aumenta la velocidad de vuelo y la tasa de descenso. Esto se debe a que el ala necesita más velocidad para mantener la sustentación, y la mayor carga también implica una mayor tasa de caída."
  },
  {
    text: "desciende menos y vuela menos rápido.",
    isCorrect: false,
    explanation: "Un piloto más pesado vuela más rápido, no más lento, ya que la mayor carga alar requiere más velocidad para generar la sustentación adecuada."
  },
  {
    text: "tiene un ala menos manejable.",
    isCorrect: false,
    explanation: "Aunque la carga alar es mayor, esto no implica necesariamente que el ala sea menos manejable. Sin embargo, puede ser más sensible en ciertas maniobras."
  },
  {
    text: "tiene una tasa de ascenso mayor.",
    isCorrect: false,
    explanation: "Un piloto más pesado desciende más rápido, por lo que no tiene una tasa de ascenso mayor."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Para el mismo ala, un aumento de la carga alar produce un aumento:",
image: "",
answers: [
  {
    text: "de la velocidad horizontal, de las deformaciones del ala y de la tasa de caída.",
    isCorrect: true,
    explanation: "Un aumento de la carga alar provoca que el ala requiera mayor velocidad para mantener la sustentación, incrementa las deformaciones debido al mayor esfuerzo sobre el ala y aumenta la tasa de caída porque el ala tiene que soportar más peso."
  },
  {
    text: "de la fineza.",
    isCorrect: false,
    explanation: "El aumento de la carga alar generalmente reduce la fineza, ya que incrementa la tasa de caída y la resistencia."
  },
  {
    text: "de la velocidad de la gravedad y de la estabilidad en turbulencia.",
    isCorrect: false,
    explanation: "Un aumento de la carga alar hace que el ala sea más sensible a las turbulencias y puede disminuir la estabilidad."
  },
  {
    text: "de la sustentación sin aumentar la resistencia.",
    isCorrect: false,
    explanation: "Aumentar la carga alar incrementa tanto la sustentación como la resistencia, no solo la sustentación."
  }
]
}
,
{
topic: "aerodinámica",
statement: "A igual superficie de ala un piloto más pesado tendrá:",
image: "",
answers: [
  {
    text: "una velocidad máxima superior y una tasa de caída más elevada.",
    isCorrect: true,
    explanation: "Un piloto más pesado vuela más rápido debido a la mayor carga alar, lo que también incrementa la tasa de caída. El ala necesita mayor velocidad para generar la sustentación necesaria, lo que resulta en una velocidad máxima superior y una mayor tasa de descenso."
  },
  {
    text: "una penetración menor.",
    isCorrect: false,
    explanation: "El piloto más pesado tendrá mayor penetración en el aire, ya que la mayor velocidad le permite avanzar mejor contra el viento."
  },
  {
    text: "una velocidad de pérdida idéntica.",
    isCorrect: false,
    explanation: "La velocidad de pérdida será mayor para un piloto más pesado debido a la mayor carga alar, que incrementa la velocidad mínima necesaria para mantener el vuelo."
  },
  {
    text: "una velocidad máxima inferior y una tasa de caída menos elevada.",
    isCorrect: false,
    explanation: "Un piloto más pesado tendrá una velocidad máxima superior y una tasa de caída más elevada debido a la mayor carga alar, no al revés."
  }
]
}

,
{
topic: "aerodinámica",
statement: "Dos alas idénticas sometidas a cargas alares diferentes despegan:",
image: "",
answers: [
  {
    text: "con la misma incidencia pero con velocidades diferentes.",
    isCorrect: true,
    explanation: "Ambas alas despegarán con el mismo ángulo de ataque (incidencia), pero el ala con mayor carga alar requerirá mayor velocidad para generar suficiente sustentación para despegar."
  },
  {
    text: "con la misma velocidad pero con incidencias diferentes.",
    isCorrect: false,
    explanation: "La velocidad de despegue cambia con la carga alar, pero la incidencia permanece constante para ambas alas."
  },
  {
    text: "con la misma velocidad e incidencia.",
    isCorrect: false,
    explanation: "La carga alar más elevada demanda una mayor velocidad de despegue, aunque la incidencia sea la misma."
  },
  {
    text: "con incidencias diferentes y con velocidades diferentes.",
    isCorrect: false,
    explanation: "La incidencia es la misma para ambas alas, pero la velocidad es diferente debido a las diferentes cargas alares."
  }
]
}

,
{
topic: "aerodinámica",
statement: "Dos alas idénticas pero con cargas alares diferentes atraviesan una zona ascendente larga. Cada piloto usa el ala a la velocidad de tasa de caída mínima:",
image: "",
answers: [
  {
    text: "las dos alas ganarán la misma altura.",
    isCorrect: false,
    explanation: "El ala con menor carga alar aprovechará mejor la corriente ascendente, lo que le permitirá ganar más altura."
  },
  {
    text: "el ala más cargada ganará más altura.",
    isCorrect: false,
    explanation: "El ala más cargada tiene una tasa de caída más alta y no podrá ganar tanta altura como el ala menos cargada."
  },
  {
    text: "el ala menos cargada ganará más altura.",
    isCorrect: true,
    explanation: "El ala menos cargada tiene una tasa de caída menor, lo que le permite ganar más altura en una corriente ascendente prolongada."
  },
  {
    text: "ambas alas ganarán altura de manera proporcional a su velocidad de vuelo.",
    isCorrect: false,
    explanation: "La ganancia de altura depende de la tasa de caída mínima, no de la velocidad de vuelo. El ala menos cargada ganará más altura."
  }
]
}
,
{
topic: "aerodinámica",
statement: "El factor de carga es la relación:",
image: "",
answers: [
  {
    text: "peso total (ala+piloto) sobre peso aparente.",
    isCorrect: false,
    explanation: "El factor de carga se calcula como la relación entre el peso aparente y el peso total (ala + piloto), no al revés."
  },
  {
    text: "peso del piloto sobre peso total (ala+piloto).",
    isCorrect: false,
    explanation: "El factor de carga no está relacionado directamente con el peso del piloto, sino con el peso aparente y el peso total."
  },
  {
    text: "peso aparente sobre peso total (ala+piloto).",
    isCorrect: true,
    explanation: "El factor de carga es la relación entre el peso aparente (que incluye las fuerzas adicionales generadas en maniobras o giros) y el peso total (ala + piloto)."
  },
  {
    text: "peso del ala sobre el peso del piloto.",
    isCorrect: false,
    explanation: "El factor de carga no tiene relación con el peso del ala ni del piloto individualmente, sino con el peso aparente y el peso total."
  }
]
}
,
{
topic: "aerodinámica",
statement: "El factor de carga:",
image: "",
answers: [
  {
    text: "es igual a 1 en vuelo rectilíneo estabilizado, es superior a 1 en los giros y es inferior a 1 en el pico de una trepada.",
    isCorrect: true,
    explanation: "En vuelo rectilíneo estabilizado, el factor de carga es igual a 1. En los giros, es superior a 1 debido a la fuerza centrífuga, y es inferior a 1 en el pico de una trepada debido a la reducción momentánea de la fuerza que soporta el ala."
  },
  {
    text: "es inferior a 1 en vuelo rectilíneo estabilizado, depende del peso del piloto y de las indicaciones del constructor.",
    isCorrect: false,
    explanation: "El factor de carga es igual a 1 en vuelo rectilíneo estabilizado y varía con las maniobras, no con el peso del piloto ni con las indicaciones del constructor."
  },
  {
    text: "es superior a 1 en vuelo rectilíneo estabilizado y es constante en todas las maniobras.",
    isCorrect: false,
    explanation: "El factor de carga no es constante; varía en función de las maniobras. En vuelo rectilíneo estabilizado es igual a 1, y en giros o trepadas cambia."
  },
  {
    text: "es superior a 1 en vuelo rectilíneo estabilizado y disminuye en los giros más cerrados.",
    isCorrect: false,
    explanation: "En los giros más cerrados, el factor de carga aumenta debido a la mayor fuerza centrífuga, no disminuye."
  }
]
}

, 
{
topic: "aerodinámica",
statement: "El factor de carga:",
image: "",
answers: [
  {
    text: "puede hacer que el ala se rompa si es muy elevado y puede pasar de 2 en los giros muy cerrados.",
    isCorrect: true,
    explanation: "Un factor de carga elevado puede superar los límites estructurales del ala y provocar su rotura. En giros muy cerrados, el factor de carga puede exceder 2 debido a la mayor fuerza centrífuga."
  },
  {
    text: "no cambia la velocidad de pérdida.",
    isCorrect: false,
    explanation: "El factor de carga afecta la velocidad de pérdida, ya que al aumentar el factor de carga, la velocidad de pérdida también se incrementa."
  },
  {
    text: "puede hacer que el ala se rompa si es muy elevado y no incrementa en los giros muy cerrados.",
    isCorrect: false,
    explanation: "En giros cerrados, el factor de carga aumenta y ejerce mayor esfuerzo sobre el ala, no lo reduce."
  },
  {
    text: "es irrelevante en condiciones de vuelo normal.",
    isCorrect: false,
    explanation: "El factor de carga es relevante en todas las condiciones de vuelo, ya que determina las fuerzas que el ala debe soportar durante diferentes maniobras."
  }
]
}

,
{
topic: "aerodinámica",
statement: "La pérdida tiene lugar:",
image: "",
answers: [
  {
    text: "con diferentes incidencias.",
    isCorrect: false,
    explanation: "La pérdida no ocurre con diferentes incidencias. Se produce al alcanzar la incidencia crítica, que es constante para cada ala."
  },
  {
    text: "siempre con la misma incidencia.",
    isCorrect: true,
    explanation: "La pérdida siempre ocurre cuando se alcanza la incidencia crítica, independientemente de la velocidad del vuelo."
  },
  {
    text: "siempre con la misma velocidad.",
    isCorrect: false,
    explanation: "La velocidad de pérdida puede variar según las condiciones, como la carga alar, pero la incidencia crítica permanece constante."
  },
  {
    text: "con la misma incidencia, pero a diferentes velocidades según las condiciones.",
    isCorrect: false,
    explanation: "La velocidad de pérdida varía según factores como la carga y la altitud, pero la incidencia de pérdida es siempre la misma."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La pérdida se produce cuando:",
image: "",
answers: [
  {
    text: "la velocidad es demasiado fuerte.",
    isCorrect: false,
    explanation: "La pérdida no se produce por una velocidad demasiado alta, sino por una incidencia crítica del ala."
  },
  {
    text: "la incidencia es demasiado débil.",
    isCorrect: false,
    explanation: "Una incidencia demasiado baja no genera suficiente sustentación, pero no es la causa de la pérdida. La pérdida ocurre cuando la incidencia es demasiado alta."
  },
  {
    text: "la incidencia es demasiado fuerte.",
    isCorrect: true,
    explanation: "La pérdida ocurre cuando el ángulo de ataque (incidencia) es demasiado alto, lo que provoca que el ala pierda la capacidad de generar sustentación."
  },
  {
    text: "la velocidad es constante pero la sustentación es insuficiente.",
    isCorrect: false,
    explanation: "La velocidad de pérdida puede variar, pero la incidencia crítica es el factor determinante en la pérdida, no la velocidad o la falta de sustentación en sí misma."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La caída que sigue a la pérdida se debe a:",
image: "",
answers: [
  {
    text: "un avance transitorio del centro de presión.",
    isCorrect: false,
    explanation: "El centro de presión no avanza durante la pérdida, sino que retrocede."
  },
  {
    text: "un retroceso transitorio del centro de presión.",
    isCorrect: true,
    explanation: "Durante la pérdida, el centro de presión retrocede, lo que provoca una pérdida de sustentación y una caída brusca."
  },
  {
    text: "la caída del piloto en la vela.",
    isCorrect: false,
    explanation: "La caída se debe a la pérdida de sustentación, no a una caída física del piloto sobre la vela."
  },
  {
    text: "una pérdida de sustentación debida a un aumento de velocidad.",
    isCorrect: false,
    explanation: "La pérdida de sustentación no está relacionada con un aumento de velocidad, sino con el retroceso del centro de presión y la incidencia crítica."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La pérdida origina generalmente:",
image: "",
answers: [
  {
    text: "un momento de picado y una variación de calado con tendencia a picar.",
    isCorrect: true,
    explanation: "La pérdida genera una pérdida de sustentación que provoca un momento de picado, y una variación de calado con tendencia a que el ala baje de morro."
  },
  {
    text: "un momento de subida.",
    isCorrect: false,
    explanation: "La pérdida no provoca un momento de subida, sino un momento de picado debido a la pérdida de sustentación."
  },
  {
    text: "una variación de calado con tendencia a subir.",
    isCorrect: false,
    explanation: "La variación de calado en la pérdida tiende a hacer que el ala pique, no que suba."
  },
  {
    text: "una estabilización momentánea del ala.",
    isCorrect: false,
    explanation: "La pérdida provoca inestabilidad y un momento de picado, no una estabilización momentánea."
  }
]
}
,
{
topic: "aerodinámica",
statement: "En la pérdida:",
image: "",
answers: [
  {
    text: "la sustentación disminuye y la resistencia aumenta.",
    isCorrect: true,
    explanation: "Durante la pérdida, la sustentación cae bruscamente debido a la incapacidad del ala para generar suficiente levantamiento, mientras que la resistencia aerodinámica aumenta considerablemente."
  },
  {
    text: "la sustentación aumenta y la resistencia aumenta.",
    isCorrect: false,
    explanation: "En una pérdida, la sustentación disminuye, no aumenta, ya que el ala pierde efectividad para generar levantamiento, aunque la resistencia sí aumenta."
  },
  {
    text: "la sustentación disminuye y la resistencia disminuye.",
    isCorrect: false,
    explanation: "La resistencia aerodinámica aumenta en una pérdida debido a la mayor turbulencia y el flujo de aire desordenado sobre el ala."
  },
  {
    text: "la sustentación se mantiene constante.",
    isCorrect: false,
    explanation: "Durante la pérdida, la sustentación no se mantiene constante, sino que disminuye rápidamente."
  }
]
}

,
{
topic: "aerodinámica",
statement: "La pérdida se produce en general:",
image: "",
answers: [
  {
    text: "a la velocidad de tasa de caída mínima.",
    isCorrect: false,
    explanation: "La pérdida no ocurre a la velocidad de tasa de caída mínima, sino a una velocidad inferior cuando la incidencia crítica es alcanzada."
  },
  {
    text: "a una velocidad inferior a la de la tasa de caída mínima.",
    isCorrect: true,
    explanation: "La pérdida generalmente ocurre a una velocidad inferior a la de la tasa de caída mínima, debido al aumento en la incidencia más allá del punto óptimo."
  },
  {
    text: "a una velocidad superior a la de la tasa de caída mínima.",
    isCorrect: false,
    explanation: "La pérdida ocurre cuando la velocidad es demasiado baja y la incidencia es demasiado alta, no a velocidades superiores a la tasa de caída mínima."
  },
  {
    text: "a cualquier velocidad, dependiendo del viento.",
    isCorrect: false,
    explanation: "La pérdida está relacionada con la incidencia crítica y no con el viento ni con cualquier velocidad."
  }
]
}
,
{
topic: "aerodinámica",
statement: "La velocidad de pérdida para un ala determinada:",
image: "",
answers: [
  {
    text: "es más elevada durante el remolque y es más elevada en giro.",
    isCorrect: true,
    explanation: "La velocidad de pérdida aumenta durante el remolque debido a la mayor carga sobre el ala, y también es más elevada en los giros debido al aumento del factor de carga."
  },
  {
    text: "es independiente del peso del piloto.",
    isCorrect: false,
    explanation: "La velocidad de pérdida depende del peso total del ala y el piloto, ya que un mayor peso incrementa la velocidad a la que ocurre la pérdida."
  },
  {
    text: "disminuye durante un vuelo en línea recta.",
    isCorrect: false,
    explanation: "La velocidad de pérdida no disminuye en vuelo recto, se mantiene constante o aumenta con el aumento de la carga."
  },
  {
    text: "es menos elevada durante el remolque y es menos elevada en giro.",
    isCorrect: false,
    explanation: "Durante el remolque y en giros, la velocidad de pérdida es más elevada debido al incremento de la carga, no menos elevada."
  }
]
}

,
{
topic: "aerodinámica",
statement: "La velocidad de pérdida:",
image: "",
answers: [
  {
    text: "aumenta cuando el peso del piloto aumenta y cuando el factor de carga aumenta.",
    isCorrect: true,
    explanation: "La velocidad de pérdida aumenta con el incremento del peso del piloto, ya que el ala necesita más velocidad para generar suficiente sustentación. También aumenta con el factor de carga debido a las fuerzas adicionales ejercidas sobre el ala."
  },
  {
    text: "disminuye cuando el peso del piloto disminuye y cuando el factor de carga aumenta.",
    isCorrect: false,
    explanation: "El aumento del factor de carga incrementa la velocidad de pérdida, no la disminuye. Cuando el peso del piloto disminuye, la velocidad de pérdida también disminuye."
  },
  {
    text: "aumenta cuando el factor de carga disminuye.",
    isCorrect: false,
    explanation: "La velocidad de pérdida disminuye cuando el factor de carga disminuye, ya que hay menos fuerzas adicionales actuando sobre el ala."
  },
  {
    text: "es independiente del factor de carga y del peso del piloto.",
    isCorrect: false,
    explanation: "La velocidad de pérdida está directamente relacionada tanto con el peso del piloto como con el factor de carga. Ambos factores influyen en la velocidad a la que se produce la pérdida."
  }
]
}

,
{
topic: "aerodinámica",
statement: "En giro, un aparato entra en pérdida:",
image: "",
answers: [
  {
    text: "a la misma velocidad y con la misma incidencia que en línea recta.",
    isCorrect: false,
    explanation: "En un giro, la velocidad de pérdida es mayor debido al aumento del factor de carga, aunque la incidencia de pérdida sigue siendo la misma."
  },
  {
    text: "con la misma incidencia pero con una velocidad mayor que en línea recta.",
    isCorrect: true,
    explanation: "En giros, la incidencia de pérdida es la misma que en vuelo recto, pero la velocidad de pérdida aumenta debido al mayor factor de carga."
  },
  {
    text: "con la misma velocidad pero con una incidencia menor que en línea recta.",
    isCorrect: false,
    explanation: "En un giro, la velocidad de pérdida es mayor y la incidencia no disminuye. La incidencia crítica sigue siendo la misma."
  },
  {
    text: "a una velocidad menor pero con una incidencia mayor que en línea recta.",
    isCorrect: false,
    explanation: "En un giro, la velocidad de pérdida es mayor, no menor. La incidencia de pérdida sigue siendo la misma."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Llamamos pérdida dinámica a la pérdida:",
image: "",
answers: [
  {
    text: "precedida por una trepada y provocada por un aumento brusco de la incidencia.",
    isCorrect: true,
    explanation: "La pérdida dinámica ocurre cuando el ala entra en pérdida tras una trepada, generalmente provocada por un aumento brusco de la incidencia más allá del ángulo crítico."
  },
  {
    text: "seguida de una trepada y provocada por una disminución brusca de la incidencia.",
    isCorrect: false,
    explanation: "La pérdida dinámica ocurre tras una trepada, no es seguida por ella, y es causada por un aumento, no por una disminución de la incidencia."
  },
  {
    text: "provocada por una caída brusca de la incidencia.",
    isCorrect: false,
    explanation: "La pérdida dinámica es provocada por un aumento brusco de la incidencia, no por una caída."
  },
  {
    text: "provocada por una desaceleración súbita.",
    isCorrect: false,
    explanation: "La desaceleración súbita no es la causa directa de la pérdida dinámica, sino el aumento repentino de la incidencia."
  }
]
}

,
{
topic: "aerodinámica",
statement: "Con respecto al vuelo normal, durante un remolque, la R.F.A. (resultante de las fuerzas aerodinámicas) es:",
image: "",
answers: [
  {
    text: "más fuerte e inclinada hacia atrás.",
    isCorrect: true,
    explanation: "Durante el remolque, la R.F.A. aumenta debido a las fuerzas adicionales aplicadas al ala y se inclina hacia atrás como resultado de la tracción del remolque."
  },
  {
    text: "más débil e inclinada hacia delante.",
    isCorrect: false,
    explanation: "La R.F.A. es más fuerte durante el remolque debido a las fuerzas adicionales generadas por la tracción, no más débil, ni se inclina hacia adelante."
  },
  {
    text: "vertical.",
    isCorrect: false,
    explanation: "Durante el remolque, la R.F.A. se inclina hacia atrás debido a la fuerza del remolque, no permanece vertical."
  },
  {
    text: "inclinada hacia adelante.",
    isCorrect: false,
    explanation: "La R.F.A. se inclina hacia atrás durante el remolque debido a la fuerza de tracción, no hacia adelante."
  }
]
}


,
{
topic: "aerodinámica",
statement: "Durante un remolque, la R.F.A. es:",
image: "",
answers: [
  {
    text: "igual a la suma vectorial de la fuerza de tracción + peso total e inclinada hacia atrás.",
    isCorrect: true,
    explanation: "Durante el remolque, la R.F.A. es la suma vectorial de la fuerza de tracción y el peso total del sistema, y está inclinada hacia atrás debido a la tracción del remolque."
  },
  {
    text: "igual a la fuerza de tracción e inclinada hacia adelante.",
    isCorrect: false,
    explanation: "La R.F.A. no es solo la fuerza de tracción, también incluye el peso total del ala y el piloto."
  },
  {
    text: "igual al peso del piloto y perpendicular al ala.",
    isCorrect: false,
    explanation: "La R.F.A. está inclinada hacia atrás durante el remolque, no perpendicular al ala."
  },
  {
    text: "dirigida hacia adelante en vuelo normal.",
    isCorrect: false,
    explanation: "En remolque, la R.F.A. se inclina hacia atrás, no hacia adelante."
  }
]
}

,
{
topic: "aerodinámica",
statement: "El centro de presión de un parapente:",
image: "",
answers: [
  {
    text: "varía poco, siendo el parapente más bien estable.",
    isCorrect: true,
    explanation: "El centro de presión en un parapente varía muy poco debido a la naturaleza estable de su diseño aerodinámico."
  },
  {
    text: "está situado a nivel de los elevadores.",
    isCorrect: false,
    explanation: "El centro de presión no se encuentra a nivel de los elevadores, sino en una posición más hacia adelante en el ala."
  },
  {
    text: "efectúa grandes variaciones, siendo el parapente más bien inestable.",
    isCorrect: false,
    explanation: "El parapente es un ala estable, por lo que su centro de presión no efectúa grandes variaciones."
  },
  {
    text: "es constante en todas las maniobras.",
    isCorrect: false,
    explanation: "El centro de presión puede variar ligeramente en algunas maniobras, pero no es completamente constante."
  }
]
}
,
{
topic: "aerodinámica",
statement: "El punto de impacto de un perfil:",
image: "",
answers: [
  {
    text: "separa el flujo de aire del intradós y del extradós, varía en función de la incidencia, es el punto donde la presión de aire es máxima, y define la frontera entre las zonas de depresión y sobrepresión.",
    isCorrect: true,
    explanation: "El punto de impacto de un perfil cumple todas estas funciones: separa el flujo de aire, varía con la incidencia, es donde la presión es máxima, y define la frontera entre las zonas de depresión y sobrepresión."
  },
  {
    text: "separa el flujo de aire del intradós y del extradós y es fijo, independientemente de la incidencia.",
    isCorrect: false,
    explanation: "El punto de impacto varía con la incidencia del perfil, no es fijo."
  },
  {
    text: "no varía en función de la incidencia, es el punto donde la presión es mínima y se encuentra solo en el intradós del perfil.",
    isCorrect: false,
    explanation: "El punto de impacto varía con la incidencia y afecta tanto al intradós como al extradós, además, es el punto donde la presión es máxima, no mínima."
  },
  {
    text: "se encuentra siempre en el borde de ataque.",
    isCorrect: false,
    explanation: "Aunque cercano al borde de ataque, el punto de impacto varía con la incidencia y no siempre está en el borde de ataque."
  }
]
}

,
{
topic: "aerodinámica",
statement: "Si por una determinada incidencia, el punto de impacto del perfil se ubica por encima de la boca de entrada del cajón, mi ala puede:",
image: "",
answers: [
  {
    text: "plegarse.",
    isCorrect: true,
    explanation: "Si el punto de impacto se ubica por encima de la boca de entrada del cajón, el flujo de aire puede verse interrumpido, lo que puede causar que el ala se pliegue."
  },
  {
    text: "entrar en pérdida.",
    isCorrect: false,
    explanation: "La ubicación del punto de impacto no provoca directamente la pérdida, sino un posible plegado del ala."
  },
  {
    text: "aumentar su sustentación.",
    isCorrect: false,
    explanation: "El aumento de la sustentación no se produce cuando el punto de impacto está mal ubicado, sino que puede generar inestabilidad."
  },
  {
    text: "mantener su estabilidad sin efectos adicionales.",
    isCorrect: false,
    explanation: "La ubicación incorrecta del punto de impacto puede provocar problemas como el plegado del ala, no mantener la estabilidad."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Cuanto más se reduce la carga alar, el ala:",
image: "",
answers: [
  {
    text: "tiene una fineza más elevada, una tasa de caída mínima menor y es menos estable.",
    isCorrect: true,
    explanation: "Cuando se reduce la carga alar, el ala mejora su fineza, reduce la tasa de caída mínima y puede volverse menos estable debido a la menor resistencia a las turbulencias."
  },
  {
    text: "despega a más velocidad.",
    isCorrect: false,
    explanation: "Con una menor carga alar, el ala despega a menor velocidad, no a mayor velocidad."
  },
  {
    text: "es más estable en turbulencia.",
    isCorrect: false,
    explanation: "Reducir la carga alar puede hacer que el ala sea menos estable, especialmente en condiciones de turbulencia."
  },
  {
    text: "tiene una fineza más elevada, una tasa de caída mínima mayor y es más estable.",
    isCorrect: false,
    explanation: "Una carga alar reducida disminuye la tasa de caída mínima, no la aumenta. Además, el ala se vuelve menos estable en condiciones de turbulencia."
  }
]
}

,
{
topic: "aerodinámica",
statement: "Para evitar las plegadas, es mejor:",
image: "",
answers: [
  {
    text: "volar con incidencias alejadas de aquellas coincidentes con los límites en los que el parapente deja de volar.",
    isCorrect: true,
    explanation: "Para evitar plegadas, es recomendable mantener el vuelo dentro de los límites seguros de incidencia, lejos de los ángulos que podrían llevar a la pérdida de sustentación."
  },
  {
    text: "frenar al máximo para dar más presión.",
    isCorrect: false,
    explanation: "Frenar al máximo puede aumentar la incidencia, lo que puede llevar a una situación peligrosa de pérdida o plegada."
  },
  {
    text: "desfrenar al máximo ya que la presión es proporcional al cuadrado de la velocidad/aire.",
    isCorrect: false,
    explanation: "Desfrenar al máximo puede aumentar demasiado la velocidad y provocar una inestabilidad o incluso una plegada."
  },
  {
    text: "volar con la mayor velocidad posible para evitar plegadas.",
    isCorrect: false,
    explanation: "Volar a la máxima velocidad puede aumentar la inestabilidad y provocar una plegada, especialmente en condiciones turbulentas."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Si usted vuela con viento fuerte de cola:",
image: "",
answers: [
  {
    text: "su velocidad/suelo aumenta y el efecto del viento sobre su rostro es bastante menos fuerte.",
    isCorrect: true,
    explanation: "Cuando se vuela con viento de cola, la velocidad respecto al suelo aumenta debido al empuje del viento, y el efecto del viento sobre el rostro se reduce ya que el viento proviene desde atrás."
  },
  {
    text: "tiene menos sustentación en el parapente.",
    isCorrect: false,
    explanation: "El viento de cola no afecta la sustentación del parapente, ya que esta depende de la velocidad relativa al aire, no del viento en sí."
  },
  {
    text: "los cajones pueden desinflarse.",
    isCorrect: false,
    explanation: "El viento de cola no causa directamente el desinflado de los cajones; estos se desinflan por otros factores como turbulencias o mala presión interna."
  },
  {
    text: "su velocidad respecto al aire disminuye drásticamente.",
    isCorrect: false,
    explanation: "La velocidad respecto al aire no se ve afectada por el viento de cola; lo que aumenta es la velocidad respecto al suelo."
  }
]
}
,
{
topic: "aerodinámica",
statement: "En la última parte de una trepada importante:",
image: "",
answers: [
  {
    text: "el factor de carga es inferior a 1 y la aparición de una fuerza de inercia hacia arriba aligera el ala.",
    isCorrect: true,
    explanation: "En la última parte de una trepada, el factor de carga cae por debajo de 1 debido a la desaceleración, y la fuerza de inercia hacia arriba reduce la carga sobre el ala, aligerándola."
  },
  {
    text: "el factor de carga es inferior a 1 y el ángulo de incidencia no varía.",
    isCorrect: false,
    explanation: "El ángulo de incidencia puede variar durante la trepada, afectando el comportamiento del ala."
  },
  {
    text: "el ala se vuelve más pesada por la fuerza de inercia.",
    isCorrect: false,
    explanation: "En realidad, la fuerza de inercia hacia arriba aligera el ala, no la hace más pesada."
  },
  {
    text: "el factor de carga es superior a 1.",
    isCorrect: false,
    explanation: "Durante la última parte de una trepada, el factor de carga disminuye por debajo de 1 debido a la desaceleración."
  }
]
}
,
{
topic: "aerodinámica",
statement: "En parapente es posible volar:",
image: "",
answers: [
  {
    text: "con tasa de caída mínima y más lento que con tasa de caída mínima.",
    isCorrect: true,
    explanation: "En parapente es posible volar a la tasa de caída mínima, y también más lento, aunque esto puede acercarse a la velocidad de pérdida."
  },
  {
    text: "sin riesgo a la velocidad de pérdida porque es un paracaídas.",
    isCorrect: false,
    explanation: "Aunque un parapente tiene características de planeo, aún existe un riesgo de entrar en pérdida si se reduce demasiado la velocidad."
  },
  {
    text: "sin riesgo de pérdida en condiciones de viento fuerte.",
    isCorrect: false,
    explanation: "El viento fuerte no elimina el riesgo de pérdida, ya que el control de la velocidad relativa al aire sigue siendo crucial."
  },
  {
    text: "a velocidades ilimitadas sin riesgo de desestabilización.",
    isCorrect: false,
    explanation: "Exceder ciertas velocidades puede provocar inestabilidad y aumentar el riesgo de plegada o pérdida de control."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Incorporarse sobre la silla en final, aumenta en el parapente:",
image: "",
answers: [
  {
    text: "la resistencia de forma.",
    isCorrect: true,
    explanation: "Al incorporarse sobre la silla, el piloto expone más su cuerpo al flujo de aire, lo que aumenta la resistencia de forma debido al mayor perfil frontal."
  },
  {
    text: "la resistencia inducida.",
    isCorrect: false,
    explanation: "La resistencia inducida está relacionada con la generación de sustentación, no con la postura del piloto."
  },
  {
    text: "la resistencia de fricción.",
    isCorrect: false,
    explanation: "La resistencia de fricción está relacionada con la superficie de contacto del ala con el aire, no con la postura del piloto."
  },
  {
    text: "la sustentación.",
    isCorrect: false,
    explanation: "Incorporarse sobre la silla no aumenta la sustentación, sino que incrementa la resistencia aerodinámica del parapente."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Cuando entramos en un giro, el ala se inclina del lado deseado porque:",
image: "",
answers: [
  {
    text: "la carga aumenta del lado del comando bajado y la resistencia aumenta del lado del comando bajado.",
    isCorrect: true,
    explanation: "Al bajar el comando de un lado, se aumenta la carga y la resistencia en ese lado, lo que provoca que el ala se incline hacia el lado deseado."
  },
  {
    text: "la carga disminuye del lado del comando bajado y la resistencia disminuye del lado del comando bajado.",
    isCorrect: false,
    explanation: "La carga no disminuye del lado del comando bajado, sino que aumenta debido a la mayor sustentación generada en ese lado."
  },
  {
    text: "la resistencia disminuye del lado del comando bajado.",
    isCorrect: false,
    explanation: "La resistencia aumenta del lado del comando bajado debido al aumento de la carga y la mayor deformación del ala."
  },
  {
    text: "el comando bajado reduce la sustentación en ambos lados.",
    isCorrect: false,
    explanation: "El comando bajado afecta principalmente el lado en el que se aplica, no reduce la sustentación en ambos lados."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Cuando entramos en un giro, el alabeo invertido que se observa a veces en parapente se debe a:",
image: "",
answers: [
  {
    text: "una disminución de la sustentación del lado del comando bajado.",
    isCorrect: true,
    explanation: "El alabeo invertido ocurre cuando, al bajar el comando, se disminuye la sustentación en ese lado, lo que puede hacer que el ala se incline de manera opuesta a lo esperado inicialmente."
  },
  {
    text: "un aumento de la sustentación del lado del comando bajado.",
    isCorrect: false,
    explanation: "Al bajar el comando, la sustentación disminuye en ese lado, no aumenta, lo que contribuye al alabeo invertido."
  },
  {
    text: "un aumento de la carga del lado del comando bajado.",
    isCorrect: false,
    explanation: "El alabeo invertido no es causado por un aumento de la carga, sino por una disminución de la sustentación en el lado del comando bajado."
  },
  {
    text: "una disminución de la carga del lado contrario al comando bajado.",
    isCorrect: false,
    explanation: "El alabeo invertido se debe a la disminución de la sustentación en el lado del comando bajado, no a la disminución de la carga en el lado contrario."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Cuando entramos en giro, el ala pivota sobre el eje de dirección porque:",
image: "",
answers: [
  {
    text: "la resistencia aumenta del lado del comando bajado.",
    isCorrect: true,
    explanation: "Cuando se baja el comando en un giro, la resistencia en ese lado aumenta, lo que provoca que el ala pivote sobre su eje de dirección."
  },
  {
    text: "la carga disminuye del lado del comando bajado.",
    isCorrect: false,
    explanation: "La carga no disminuye, sino que aumenta en el lado del comando bajado, lo que contribuye al giro del ala."
  },
  {
    text: "la resistencia disminuye del lado del comando bajado.",
    isCorrect: false,
    explanation: "La resistencia no disminuye, sino que aumenta en el lado del comando bajado, lo que permite que el ala pivote."
  },
  {
    text: "la sustentación aumenta del lado contrario al comando bajado.",
    isCorrect: false,
    explanation: "El ala pivota debido al aumento de la resistencia en el lado del comando bajado, no debido a un aumento de la sustentación en el lado contrario."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Si usted usa el ala de un piloto más liviano:",
image: "",
answers: [
  {
    text: "esta se plegará más fácilmente en las turbulencias y las pérdidas de control en caso de plegadas serán más violentas.",
    isCorrect: true,
    explanation: "Al usar un ala diseñada para un piloto más liviano, se incrementa la carga alar, lo que puede hacer que el ala sea más propensa a plegarse en turbulencias y a que las pérdidas de control sean más violentas."
  },
  {
    text: "volará más lento.",
    isCorrect: false,
    explanation: "Con un mayor peso, el ala necesitará volar a una velocidad mayor para generar suficiente sustentación, no más lento."
  },
  {
    text: "esta se plegará menos en las turbulencias.",
    isCorrect: false,
    explanation: "Un ala sobrecargada tiende a ser más inestable y a plegarse más fácilmente en turbulencias, no menos."
  },
  {
    text: "la estabilidad aumentará en condiciones de viento fuerte.",
    isCorrect: false,
    explanation: "El aumento de la carga alar no incrementa la estabilidad en condiciones de viento fuerte; de hecho, puede aumentar la inestabilidad."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Usted usa el ala de un piloto más pesado:",
image: "",
answers: [
  {
    text: "la tasa de caída será un poco más favorable, esta se plegará más fácilmente en las turbulencias y los comandos serán menos eficaces.",
    isCorrect: true,
    explanation: "Al usar un ala diseñada para un piloto más pesado, la tasa de caída puede mejorar ligeramente debido a la mayor velocidad, pero el ala será más propensa a plegarse en turbulencias, y los comandos serán menos eficaces debido al aumento de la carga alar."
  },
  {
    text: "se plegará menos en turbulencias y esta será más maniobrable.",
    isCorrect: false,
    explanation: "Un ala sobrecargada no es más maniobrable; de hecho, la mayor carga alar puede reducir su maniobrabilidad."
  },
  {
    text: "se plegará menos en turbulencias, los comandos seran más eficaces y la estabilidad aumentará en condiciones de turbulencia.",
    isCorrect: false,
    explanation: "La estabilidad en turbulencia no aumenta con una mayor carga alar, ya que el ala se vuelve más propensa a plegarse."
  },
  {
    text: "se plegará menos en turbulencias, los comandos seran más eficaces y la velocidad de pérdida será menor.",
    isCorrect: false,
    explanation: "Con un mayor peso, la velocidad de pérdida aumenta, no disminuye."
  }
]
}
,
{
topic: "aerodinámica",
statement: "El parapente es una aeronave más bien:",
image: "",
answers: [
  {
    text: "de poca estabilidad aerodinámica y de buena estabilidad pendular.",
    isCorrect: true,
    explanation: "El parapente tiene poca estabilidad aerodinámica debido a su diseño flexible, pero cuenta con una buena estabilidad pendular, lo que ayuda a equilibrar la nave durante el vuelo."
  },
  {
    text: "de buena estabilidad aerodinámica y de poca estabilidad pendular.",
    isCorrect: false,
    explanation: "El parapente tiene más estabilidad pendular que aerodinámica, ya que su diseño no es rígido y depende del peso del piloto para mantenerse equilibrado."
  },
  {
    text: "de buena amortiguación aerodinámica y de alta estabilidad pendular.",
    isCorrect: false,
    explanation: "El parapente no posee una buena amortiguación aerodinámica debido a su estructura flexible, aunque sí tiene buena estabilidad pendular."
  },
  {
    text: "de poca amortiguación aerodinámica y de baja estabilidad pendular.",
    isCorrect: false,
    explanation: "Aunque la amortiguación aerodinámica del parapente es limitada, su estabilidad pendular es alta, lo que le proporciona equilibrio en vuelo."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Factores que favorecen la entrada en barrena o giro en negativo:",
image: "",
answers: [
  {
    text: "un gran alargamiento e incidencia elevada.",
    isCorrect: true,
    explanation: "Un gran alargamiento y una incidencia elevada son factores que pueden favorecer la entrada en barrena o giro en negativo, ya que aumentan la inestabilidad del parapente."
  },
  {
    text: "un bajo alargamiento e incidencia elevada.",
    isCorrect: false,
    explanation: "Un bajo alargamiento tiende a mejorar la estabilidad, reduciendo el riesgo de entrada en barrena o giro en negativo."
  },
  {
    text: "un gran alargamiento y poca incidencia.",
    isCorrect: false,
    explanation: "Una menor incidencia no favorece la entrada en barrena o giro en negativo, ya que reduce el ángulo de ataque y ayuda a mantener la estabilidad."
  },
  {
    text: "poca velocidad relativa al aire.",
    isCorrect: false,
    explanation: "Una velocidad más baja no favorece la entrada en barrena o giro en negativo, ya que reduce el riesgo de inestabilidad."
  }
]
}
,
{
topic: "aerodinámica",
statement: "Factores que favorecen la entrada en auto-rotación luego de una plegada:",
image: "",
answers: [
  {
    text: "un gran alargamiento y mucha velocidad.",
    isCorrect: true,
    explanation: "Un gran alargamiento y mucha velocidad son factores que aumentan la inestabilidad y pueden favorecer la entrada en auto-rotación después de una plegada, debido a la mayor superficie de ala y las fuerzas involucradas."
  },
  {
    text: "un bajo alargamiento y mucha velocidad.",
    isCorrect: false,
    explanation: "Un bajo alargamiento tiende a mejorar la estabilidad, reduciendo la posibilidad de entrada en auto-rotación."
  },
  {
    text: "un gran alargamiento y poca velocidad.",
    isCorrect: false,
    explanation: "Una velocidad más baja no favorece la entrada en auto-rotación, ya que disminuye las fuerzas que podrían desestabilizar el ala."
  },
  {
    text: "baja carga alar.",
    isCorrect: false,
    explanation: "Una baja carga alar no es un factor que favorezca la auto-rotación, ya que una carga alar más baja suele mejorar la estabilidad."
  }
]
}
,
    {
topic: "aerodinámica",
statement: "Un ala que se pliega seguido en turbulencia es un ala:",
image: "",
answers: [
  {
    text: "peligrosa, inestable aerodinámicamente en profundidad y poco amortiguada aerodinámicamente en el eje de profundidad.",
    isCorrect: true,
    explanation: "Un ala que se pliega frecuentemente en turbulencia es peligrosa, tiene inestabilidad aerodinámica en el eje de profundidad, y carece de suficiente amortiguación aerodinámica, lo que aumenta su vulnerabilidad en condiciones turbulentas."
  },
  {
    text: "insuficientemente rígida.",
    isCorrect: false,
    explanation: "La rigidez estructural no es el único factor en los plegados; la aerodinámica y el comportamiento en el eje de profundidad juegan un papel más importante."
  },
  {
    text: "muy estable en el eje de profundidad.",
    isCorrect: false,
    explanation: "Un ala que se pliega fácilmente en turbulencia no es estable en el eje de profundidad, ya que la estabilidad reduce el riesgo de plegado."
  },
  {
    text: "diseñada para vuelo en condiciones suaves únicamente.",
    isCorrect: false,
    explanation: "Aunque algunas alas son diseñadas para condiciones suaves, el plegado frecuente en turbulencia es señal de inestabilidad, no de un diseño específico para condiciones suaves."
  }
]
}

  ];
  
 

 

      

      
      
      




export const materialstatements = [
{
    "number": 1,
    "statement": "Un paracaídas de reserva redondo es:",
    "answers": [
      { "text": "un planeador ultraligero.", "isCorrect": false },
      { "text": "un freno aerodinámico.", "isCorrect": true },
      { "text": "un 100% de garantía de salvarse en caso de accidente.", "isCorrect": false }
    ]
  },
  {
    "number": 2,
    "statement": "Para una máxima seguridad, desplegar y plegar el paracaídas de reserva, debe hacerse:",
    "answers": [
      { "text": "dos veces por año.", "isCorrect": true },
      { "text": "una vez por año.", "isCorrect": false },
      { "text": "dejarlo tal cual nos lo vendieron.", "isCorrect": false }
    ]
  },
  {
    "number": 3,
    "statement": "Cuando transportamos o guardamos un parapente o un paracaídas de reserva lo protegemos del contacto o cercanía de:",
    "answers": [
      { "text": "solventes y cuerpos grasos.", "isCorrect": true },
      { "text": "humedad y calor.", "isCorrect": false },
      { "text": "los rayos del sol.", "isCorrect": false }
    ]
  },
  {
    "number": 4,
    "statement": "Llevar un paracaídas de reserva:",
    "answers": [
      { "text": "implica un control de los velcros del cierre del contenedor.", "isCorrect": true },
      { "text": "expose al piloto a aperturas imprevistas.", "isCorrect": false },
      { "text": "no exige ninguna medida especial.", "isCorrect": false }
    ]
  },
  {
    "number": 5,
    "statement": "Un casco de vuelo libre debe:",
    "answers": [
      { "text": "permitir una buena audición y visibilidad.", "isCorrect": true },
      { "text": "ser sólido y absorber los golpes.", "isCorrect": true },
      { "text": "ser liviano para no perjudicar el cuello.", "isCorrect": true }
    ]
  },
  {
    "number": 6,
    "statement": "El anemómetro es un instrumento que indica:",
    "answers": [
      { "text": "la dirección del viento.", "isCorrect": false },
      { "text": "la velocidad del viento.", "isCorrect": true },
      { "text": "la velocidad del viento relativo en vuelo.", "isCorrect": false }
    ]
  },
  {
    "number": 7,
    "statement": "Un altímetro mide:",
    "answers": [
      { "text": "el gradiente vertical de presión atmosférica.", "isCorrect": false },
      { "text": "la variación de la tasa de humedad.", "isCorrect": false },
      { "text": "la altura.", "isCorrect": true }
    ]
  },
  {
    "number": 8,
    "statement": "El altímetro:",
    "answers": [
      { "text": "mide la velocidad con que varía la presión.", "isCorrect": false },
      { "text": "incluso en buen estado puede mostrar para una determinada altura valores que varían según la hora y el lugar", "isCorrect": true },
      { "text": "no sufre la influencia de variaciones de temperatura.", "isCorrect": false },
      { "text": "utiliza una escala de altura calibrada para los valores meteorológicos promedio (atmósfera estándar).", "isCorrect": true }
    ]
  },
  {
    "number": 9,
    "statement": "Un altímetro:",
    "answers": [
      { "text": "puede estar regulado a valores diferentes (nivel del mar, del despegue, del aterrizaje...).", "isCorrect": true },
      { "text": "da una indicación que varía según las condiciones atmosféricas.", "isCorrect": true },
      { "text": "es calibrado definitivamente al momento de su construcción.", "isCorrect": false },
      { "text": "siempre debe ser comparado y regulado con respecto a valores conocidos (despegue, puntos de referencia, aterrizaje...).", "isCorrect": true }
    ]
  },
  {
    "number": 10,
    "statement": "Un variómetro de vuelo libre mide:",
    "answers": [
      { "text": "la velocidad del viento si se utiliza en el suelo.", "isCorrect": false },
      { "text": "la componente vertical de la velocidad/suelo del ala.", "isCorrect": false },
      { "text": "la componente vertical de la velocidad/aire del ala.", "isCorrect": true },
      { "text": "la velocidad de subida de la masa de aire en una térmica.", "isCorrect": true }
    ]
  },
  {
    "number": 11,
    "statement": "Un variómetro de vuelo libre mide la velocidad vertical:",
    "answers": [
      { "text": "de la masa de aire con respecto al suelo.", "isCorrect": false },
      { "text": "de la masa de aire con respecto al ala.", "isCorrect": false },
      { "text": "del ala con respecto al suelo.", "isCorrect": false },
      { "text": "del ala con respecto a la masa de aire.", "isCorrect": true }
    ]
  },
  {
    "number": 12,
    "statement": "Un variómetro de vuelo libre indica:",
    "answers": [
      { "text": "la velocidad vertical del ala con respecto al suelo.", "isCorrect": true },
      { "text": "la altura del ala.", "isCorrect": false },
      { "text": "la dirección del ala con respecto al norte.", "isCorrect": false }
    ]
  },
  {
    "number": 13,
    "statement": "Un variómetro de vuelo libre da las indicaciones en función de la variación:",
    "answers": [
      { "text": "de temperatura.", "isCorrect": false },
      { "text": "de presión atmosférica.", "isCorrect": true },
      { "text": "de humedad.", "isCorrect": false }
    ]
  },
  {
    "number": 14,
    "statement": "La forma del perfil de un ala:",
    "answers": [
      { "text": "es prácticamente la misma para todas las alas.", "isCorrect": false },
      { "text": "es estudiada para cada ala en función del rendimiento deseado.", "isCorrect": true },
      { "text": "tiene muy poca influencia sobre el rendimiento ya que sólo la habilidad del piloto lo puede mejorar.", "isCorrect": false }
    ]
  },
  {
    "number": 15,
    "statement": "Los agujeros en las costillas entre los cajones sirven:",
    "answers": [
      { "text": "para repartir la presión entre los cajones.", "isCorrect": true },
      { "text": "acelerar el inflado.", "isCorrect": true },
      { "text": "dar flexibilidad al perfil.", "isCorrect": false },
      { "text": "aligerar el ala.", "isCorrect": false }
    ]
  },
  {
    "number": 16,
    "statement": "El extradós del ala es la parte:",
    "answers": [
      { "text": "delantera del ala.", "isCorrect": false },
      { "text": "superior del ala.", "isCorrect": true },
      { "text": "inferior del ala.", "isCorrect": false }
    ]
  },
  {
    "number": 17,
    "statement": "Los estábilos:",
    "answers": [
      { "text": "reducen los torbellinos marginales.", "isCorrect": true },
      { "text": "crean resistencia parásita.", "isCorrect": true },
      { "text": "pueden mejorar el rendimiento.", "isCorrect": true }
    ]
  },
  {
    "number": 18,
    "statement": "La superficie de un parapente dada por los constructores generalmente se refiere a:",
    "answers": [
      { "text": "la proyección del ala inflada sobre un plano.", "isCorrect": false },
      { "text": "la superficie del extradós en plano.", "isCorrect": false },
      { "text": "la superficie del intradós en plano.", "isCorrect": true }
    ]
  },
  {
    "number": 19,
    "statement": "La cuerda del ala:",
    "answers": [
      { "text": "está relacionada con el espesor del perfil.", "isCorrect": false },
      { "text": "es la distancia entre el borde de ataque y el borde de fuga.", "isCorrect": true },
      { "text": "es la relación entre el largo de las suspensiones de adelante y atrás.", "isCorrect": false },
      { "text": "varía generalmente a todo el largo de la envergadura.", "isCorrect": true }
    ]
  },

  {
    "number": 20,
    "statement": "La envergadura es:",
    "answers": [
      { "text": "la mayor distancia entre los extremos del ala.", "isCorrect": true },
      { "text": "el número de cajones o alvéolos.", "isCorrect": false },
      { "text": "la distancia entre el borde de ataque y el borde de fuga.", "isCorrect": false }
    ]
  },
  {
    "number": 21,
    "statement": "El alargamiento de un ala es igual:",
    "answers": [
      { "text": "a la cuerda al cuadrado, sobre la superficie.", "isCorrect": false },
      { "text": "a la envergadura al cuadrado, sobre la superficie.", "isCorrect": true },
      { "text": "a la superficie al cuadrado, por la envergadura.", "isCorrect": false }
    ]
  },
  {
    "number": 22,
    "statement": "El calado del ala:",
    "answers": [
      { "text": "depende de la regulación de los frenos.", "isCorrect": false },
      { "text": "está ligado directamente al largo de las suspensiones delanteras y traseras.", "isCorrect": true },
      { "text": "define la incidencia de calado del ala en vuelo.", "isCorrect": true },
      { "text": "puede ser modificado sin riesgo por el usuario ya que está compensado por el peso del piloto en vuelo.", "isCorrect": false }
    ]
  },
  {
    "number": 23,
    "statement": "Un cambio del calado de un parapente influye sobre:",
    "answers": [
      { "text": "la polar de las velocidades.", "isCorrect": true },
      { "text": "la estabilidad y la pérdida.", "isCorrect": true },
      { "text": "la velocidad máxima y la fineza máxima.", "isCorrect": true }
    ]
  },
  {
    "number": 24,
    "statement": "Darle a un ala una calado alto:",
    "answers": [
      { "text": "aumenta el riesgo de plegada.", "isCorrect": false },
      { "text": "aumenta el riesgo de entrada en parachutaje estabilizado.", "isCorrect": true },
      { "text": "torna el ala más lenta para el inflado.", "isCorrect": true },
      { "text": "torna el ala más nerviosa en el despegue.", "isCorrect": false }
    ]
  },
  {
    "number": 25,
    "statement": "Darle a un ala un calado picado:",
    "answers": [
      { "text": "aumenta el riesgo de plegada.", "isCorrect": true },
      { "text": "aumenta el riesgo de entrada en parachutaje estabilizado.", "isCorrect": false },
      { "text": "torna el ala más lenta para el inflado.", "isCorrect": false },
      { "text": "torna el ala más nerviosa en el despegue.", "isCorrect": true }
    ]
  },
  {
    "number": 26,
    "statement": "Las partes de un ala que sufren el mayor esfuerzo en vuelo son:",
    "answers": [
      { "text": "las suspensiones delanteras (A y B).", "isCorrect": true },
      { "text": "la parte trasera del ala.", "isCorrect": false },
      { "text": "la parte delantera del ala.", "isCorrect": true },
      { "text": "las suspensiones traseras.", "isCorrect": false }
    ]
  },
  {
    "number": 27,
    "statement": "Los comandos:",
    "answers": [
      { "text": "reducen el riesgo de pérdida.", "isCorrect": false },
      { "text": "impiden la deformación del ala.", "isCorrect": false },
      { "text": "permiten que el ala se deforme para efectuar movimientos alrededor de los tres ejes de rotación.", "isCorrect": true },
      { "text": "producen migraciones en el centro de presión del perfil.", "isCorrect": true }
    ]
  },
  {
    "number": 28,
    "statement": "Las sillas de parapente:",
    "answers": [
      { "text": "son todas parecidas.", "isCorrect": false },
      { "text": "son de diferentes tipos (estándar, cruzadas, de pilotaje...).", "isCorrect": true },
      { "text": "influyen sobre las características del pilotaje.", "isCorrect": true },
      { "text": "pueden cambiarse sin riesgos.", "isCorrect": false }
    ]
  },
  {
    "number": 29,
    "statement": "Para un ala determinada, el uso de una silla de pilotaje en vez de una silla clásica:",
    "answers": [
      { "text": "disminuye la estabilidad sobre todos los ejes.", "isCorrect": true },
      { "text": "complica las maniobras de despegue.", "isCorrect": true },
      { "text": "necesita un aprendizaje particular.", "isCorrect": true },
      { "text": "sólo presenta ventajas.", "isCorrect": false }
    ]
  },
  {
    "number": 30,
    "statement": "La utilización de trims y/o aceleradores:",
    "answers": [
      { "text": "sólo presenta ventajas.", "isCorrect": false },
      { "text": "no se recomienda.", "isCorrect": false },
      { "text": "debe realizarse con precaución y en modelos previstos por el constructor.", "isCorrect": true },
      { "text": "no tiene efectos.", "isCorrect": false }
    ]
  },
  {
    "number": 31,
    "statement": "La utilización de trims y/o aceleradores puede:",
    "answers": [
      { "text": "aumentar los riesgos de plegada.", "isCorrect": true },
      { "text": "mejorar la penetración.", "isCorrect": true },
      { "text": "facilitar el inflado.", "isCorrect": true },
      { "text": "aumentar los riesgos de entrada en parachutaje estabilizado.", "isCorrect": true }
    ]
  },
  {
    "number": 32,
    "statement": "En vuelo, la posición de manos arriba corresponde:",
    "answers": [
      { "text": "a la velocidad mínima.", "isCorrect": false },
      { "text": "a la tasa de caída mínima.", "isCorrect": false },
      { "text": "a la fineza/aire máxima.", "isCorrect": true },
      { "text": "a la velocidad máxima.", "isCorrect": true }
    ]
  },
  {
    "number": 33,
    "statement": "Criterios para la elección de un ala:",
    "answers": [
      { "text": "la carga alar, la fineza/suelo.", "isCorrect": false },
      { "text": "la fineza máxima, la tasa de caída mínima, la penetración.", "isCorrect": true },
      { "text": "la manejabilidad, el comportamiento en turbulencias.", "isCorrect": true },
      { "text": "la estabilidad.", "isCorrect": true }
    ]
  },
  {
    "number": 34,
    "statement": "Para su seguridad usted hace verificar el ala por el constructor cuando constata:",
    "answers": [
      { "text": "una disminución de la velocidad máxima.", "isCorrect": true },
      { "text": "una lentitud desacostumbrada en el inflado.", "isCorrect": true },
      { "text": "las costuras estropeadas.", "isCorrect": true }
    ]
  },
  {
    "number": 35,
    "statement": "Su ala nueva gira sistemáticamente de un lado, sin frenar y con las cuerdas de los frenos extendidas:",
    "answers": [
      { "text": "usted alarga el comando del lado opuesto.", "isCorrect": false },
      { "text": "usted modifica el nivel de las bandas en la silla.", "isCorrect": false },
      { "text": "usted afloja el cinturón de la pierna del costado opuesto.", "isCorrect": false },
      { "text": "usted contacta al revendedor para un control en fábrica y/o a un instructor o piloto experimentado.", "isCorrect": true }
    ]
  },
  {
    "number": 36,
    "statement": "Alargar los elevadores delanteros:",
    "answers": [
      { "text": "disminuye la penetración del ala.", "isCorrect": true },
      { "text": "favorece la entrada en parachutaje.", "isCorrect": true },
      { "text": "torna el ala lenta en el inflado.", "isCorrect": true },
      { "text": "torna el ala más nerviosa para despegar.", "isCorrect": false }
    ]
  },
  {
    "number": 37,
    "statement": "Alargar los elevadores traseros:",
    "answers": [
      { "text": "aumenta la penetración del ala.", "isCorrect": true },
      { "text": "favorece las plegadas en turbulencia.", "isCorrect": true },
      { "text": "torna el ala más lenta en el inflado.", "isCorrect": false },
      { "text": "torna el ala más nerviosa para despegar.", "isCorrect": true }
    ]
  },
  {
    "number": 38,
    "statement": "Los sistemas de regulación de calado en vuelo (trims, aceleradores):",
    "answers": [
      { "text": "deben prohibirse.", "isCorrect": false },
      { "text": "son desaconsejados a los principiantes.", "isCorrect": true },
      { "text": "deben ser empleados con prudencia en turbulencias, sobre todo en el proceso de regulación.", "isCorrect": true },
      { "text": "deben poder ser desaplicados fácilmente en vuelo.", "isCorrect": true }
    ]
  },
  {
    "number": 39,
    "statement": "Durante el guardado y el transporte, el parapente debe estar protegido de la cercanía o contacto:",
    "answers": [
      { "text": "de campos eléctricos.", "isCorrect": false },
      { "text": "de solvente y cuerpos grasos.", "isCorrect": true },
      { "text": "de la humedad.", "isCorrect": true },
      { "text": "del sol.", "isCorrect": true }
    ]
  },
  {
    "number": 40,
    "statement": "Cite los factores de envejecimiento de un ala:",
    "answers": [
      { "text": "el sol.", "isCorrect": true },
      { "text": "las técnicas de descenso rápido.", "isCorrect": true },
      { "text": "las turbulencias.", "isCorrect": true }
    ]
  },
  {
    "number": 41,
    "statement": "Los comandos regulados demasiado tensos:",
    "answers": [
      { "text": "pueden impedir el ascenso del ala en el inflado.", "isCorrect": true },
      { "text": "disminuyen la posibilidad de toma de velocidad en vuelo en caso de necesidad.", "isCorrect": true },
      { "text": "aumentan el riesgo de pérdida.", "isCorrect": true },
      { "text": "son favorables sobre todo en el caso de los principiantes.", "isCorrect": false }
    ]
  },
  {
    "number": 42,
    "statement": "Cada suspensión resiste un peso del orden de los:",
    "answers": [
      { "text": "8 kg.", "isCorrect": false },
      { "text": "80 kg.", "isCorrect": true },
      { "text": "800 kg.", "isCorrect": false }
    ]
  },
  {
    "number": 43,
    "statement": "Las suspensiones están generalmente fabricadas:",
    "answers": [
      { "text": "con fibras de kevlar.", "isCorrect": true },
      { "text": "con hilos de polietileno trenzados.", "isCorrect": true },
      { "text": "con cintas de poliéster.", "isCorrect": true }
    ]
  },
  {
    "number": 44,
    "statement": "La fibra de kevlar:",
    "answers": [
      { "text": "posee un bajo porcentaje de estiramiento.", "isCorrect": true },
      { "text": "posee una buena elasticidad.", "isCorrect": false },
      { "text": "posee una buena resistencia a la tracción, es débil al corte y la flexión.", "isCorrect": true },
      { "text": "debe estar encintada para una protección eficaz contra la abrasión y los rayos ultravioletas.", "isCorrect": true }
    ]
  },
  {
    "number": 45,
    "statement": "El polietileno:",
    "answers": [
      { "text": "es sensible a la humedad.", "isCorrect": false },
      { "text": "posee un bajo porcentaje de estiramiento.", "isCorrect": true },
      { "text": "posee una baja temperatura de fusión (riesgo importante de ruptura por frotamiento).", "isCorrect": true },
      { "text": "posee una buena resistencia a la tracción.", "isCorrect": true }
    ]
  },
  {
    "number": 46,
    "statement": "Un nudo en la suspensión:",
    "answers": [
      { "text": "aumenta la resistencia a la tracción.", "isCorrect": false },
      { "text": "puede disminuir la resistencia a la tracción hasta un 50%.", "isCorrect": true },
      { "text": "no influye sobre la resistencia a la tracción.", "isCorrect": false }
    ]
  },
  {
    "number": 47,
    "statement": "La A.C.P.U.L. (asociación de constructores de planeadores ultralivianos) tiene por fin:",
    "answers": [
      { "text": "promover la práctica del vuelo libre en competición.", "isCorrect": false },
      { "text": "promover el comercio del vuelo libre.", "isCorrect": false },
      { "text": "hacer progresar la tecnología del material.", "isCorrect": true },
      { "text": "ofrecer una homologación francesa para las alas de vuelo libre.", "isCorrect": true }
    ]
  },
  {
    "number": 48,
    "statement": "Desde 1991 la homologación ACPUL parapente:",
    "answers": [
      { "text": "separa los parapentes en tres niveles de resultados.", "isCorrect": false },
      { "text": "es única para todos los parapentes.", "isCorrect": true },
      { "text": "está constituida por ensayos en vuelo con pilotos de prueba y de resistencia en suelo detrás de un vehículo.", "isCorrect": true }
    ]
  },
  {
    "number": 49,
    "statement": "El sticker ACPUL en un parapente:",
    "answers": [
      { "text": "no es obligatorio sobre todos los ejemplares de un modelo homologado.", "isCorrect": false },
      { "text": "da indicaciones sobre el comportamiento de ese modelo en ciertas configuraciones de vuelo.", "isCorrect": true },
      { "text": "permite hacerse una idea sobre el nivel de pilotaje requerido para ese modelo (principiante, intermedio...).", "isCorrect": true },
      { "text": "indica con qué tipo de silla han sido realizadas las pruebas.", "isCorrect": true }
    ]
  },
  {
    "number": 50,
    "statement": "La homologación ACPUL para un parapente:",
    "answers": [
      { "text": "certifica que todo parapente homologado es utilizable sin riesgo por cualquier piloto (incluso principiantes).", "isCorrect": false },
      { "text": "permite hacerse una idea del comportamiento de ese modelo.", "isCorrect": true },
      { "text": "obliga al constructor a conservar las características técnicas en todos los ejemplares producidos.", "isCorrect": true },
      { "text": "es válida sin importar la silla montada sobre el ala.", "isCorrect": false }
    ]
  }


]



export const rulesstatements = [
    {
        "number": 1,
        "statement": "Un ala de vuelo libre es:",
        "answers": [
          { "text": "un freno aerodinámico.", "isCorrect": false },
          { "text": "un planeador ultraliviano.", "isCorrect": true },
          { "text": "una aeronave no sometida a matriculación.", "isCorrect": true },
          { "text": "un paracaídas.", "isCorrect": false }
        ]
      },
      {
        "number": 2,
        "statement": "Prioridades entre aeronaves no motorizadas:",
        "answers": [
          { "text": "Los P.U.L. tienen prioridad sobre los planeadores.", "isCorrect": true },
          { "text": "los P.U.L. deben dar prioridad a los planeadores.", "isCorrect": false },
          { "text": "los P.U.L. tienen prioridad sobre los conjuntos remolcados (avión + planeador, U.L.M. + delta, U.L.M. + bandera publicitaria, etc...).", "isCorrect": true }
        ]
      },
      {
        "number": 3,
        "statement": "Prioridades entre P.U.L.:",
        "answers": [
          { "text": "el delta debe dar prioridad al parapente.", "isCorrect": false },
          { "text": "el parapente debe dar prioridad al delta.", "isCorrect": false },
          { "text": "delta y parapente deben observar las mismas reglas de prioridad en el aire.", "isCorrect": true }
        ]
      },
      {
        "number": 4,
        "statement": "Un ala viene de frente a usted, usted efectúa:",
        "answers": [
          { "text": "un giro a la izquierda (el otro también gira a la izquierda).", "isCorrect": false },
          { "text": "un giro a la derecha (el otro también gira a la derecha).", "isCorrect": true },
          { "text": "un descenso (el otro queda en el mismo nivel).", "isCorrect": false }
        ]
      },
      {
        "number": 5,
        "statement": "En vuelo, un P.U.L viene de su derecha con una ruta convergente:",
        "answers": [
          { "text": "usted tiene prioridad.", "isCorrect": false },
          { "text": "usted debe ceder la prioridad.", "isCorrect": true },
          { "text": "la prioridad es en función del tamaño de las aeronaves.", "isCorrect": false }
        ]
      },
      {
        "number": 6,
        "statement": "Lejos del relieve usted sigue la misma ruta y al mismo nivel que un ala más lenta, usted la sobrepasa por:",
        "answers": [
          { "text": "la izquierda.", "isCorrect": false },
          { "text": "arriba.", "isCorrect": false },
          { "text": "la derecha.", "isCorrect": true }
        ]
      },
      {
        "number": 7,
        "statement": "Volando a la misma altura la prioridad la tiene:",
        "answers": [
          { "text": "el ala que llega por la derecha.", "isCorrect": true },
          { "text": "el biplaza sobre el monoplaza.", "isCorrect": false },
          { "text": "el ala que llega primero a la ascendente.", "isCorrect": true },
          { "text": "el ala piloteada por un principiante.", "isCorrect": false }
        ]
      },
      {
        "number": 8,
        "statement": "En vuelo de ladera, la prioridad la tiene el ala que:",
        "answers": [
          { "text": "tiene la ladera a su derecha.", "isCorrect": true },
          { "text": "tiene la ladera a su izquierda.", "isCorrect": false },
          { "text": "está situada a barlovento del relieve.", "isCorrect": false },
          { "text": "está situada a sotavento del relieve.", "isCorrect": false }
        ]
      },
      {
        "number": 9,
        "statement": "Usted está en vuelo de ladera, el relieve está a su izquierda. Un ala llega de frente a la misma altura:",
        "answers": [
          { "text": "el otro tiene prioridad.", "isCorrect": true },
          { "text": "usted tiene prioridad y mantiene su rumbo.", "isCorrect": false },
          { "text": "usted intenta pasarla por debajo.", "isCorrect": false }
        ]
      },
      {
        "number": 10,
        "statement": "Dos alas se siguen cerca de un relieve situado a su derecha, la segunda ala es más rápida:",
        "answers": [
          { "text": "debe sobrepasar por la izquierda.", "isCorrect": false },
          { "text": "debe sobrepasar por la derecha entre el relieve y el otro ala.", "isCorrect": false },
          { "text": "da media vuelta.", "isCorrect": true }
        ]
      },
      {
        "number": 11,
        "statement": "Usted es el primero en entrar en una ascendente:",
        "answers": [
          { "text": "las alas que llegan después deben adoptar su sentido de giro.", "isCorrect": true },
          { "text": "un ala que entra en la ascendente al mismo nivel que usted debe girar a 180 grados y en el mismo sentido.", "isCorrect": true },
          { "text": "usted tiene prioridad sobre un ala situada por debajo y que lo alcanza.", "isCorrect": false },
          { "text": "ningún otro ala tiene derecho a usar esta ascendente.", "isCorrect": false }
        ]
      },
      {
        "number": 12,
        "statement": "Usted quiere entrar en una ascendente mientras que otra ala gira 50 mts. por debajo:",
        "answers": [
          { "text": "usted gira en el mismo sentido que el otro ala.", "isCorrect": true },
          { "text": "gira en sentido inverso para poder vigilarlo.", "isCorrect": false },
          { "text": "espera que pase por encima para entrar ya que si no la descendente periférica puede llevarlo a su misma altura.", "isCorrect": false }
        ]
      },
      {
        "number": 13,
        "statement": "El vuelo en el interior de las nubes está permitido:",
        "answers": [
          { "text": "a más de 300 metros por encima de todo relieve.", "isCorrect": false },
          { "text": "a más de 900 metros por encima del nivel del mar.", "isCorrect": false },
          { "text": "en ninguna parte.", "isCorrect": true }
        ]
      },
      {
        "number": 14,
        "statement": "Sobrevolar obstáculos aislados debe efectuarse con un margen vertical y horizontal mínimo de:",
        "answers": [
          { "text": "50 metros.", "isCorrect": false },
          { "text": "100 metros.", "isCorrect": false },
          { "text": "150 metros.", "isCorrect": true },
          { "text": "200 metros.", "isCorrect": false }
        ]
      },
      {
        "number": 15,
        "statement": "Sobrevolar zonas urbanizadas o un aglomeramiento de personas debe hacerse con un margen mínimo de:",
        "answers": [
          { "text": "50 metros en vertical y 100 metros en horizontal.", "isCorrect": false },
          { "text": "100 metros en vertical y 200 metros en horizontal.", "isCorrect": false },
          { "text": "300 metros en vertical y 600 metros en horizontal.", "isCorrect": true }
        ]
      },
      {
        "number": 16,
        "statement": "Las reglas de vuelo obligan a cada piloto:",
        "answers": [
          { "text": "a respetar una distancia suficiente para prevenir las colisiones.", "isCorrect": true },
          { "text": "a tomar por la derecha en caso de cruce a la misma altura.", "isCorrect": true },
          { "text": "a pasar un ala más lenta por la izquierda.", "isCorrect": false },
          { "text": "a girar en el mismo sentido que la primer ala que entra en la ascendencia térmica.", "isCorrect": true }
        ]
      }


]


export const flyTecnicstatements = [
    {
      "number": 1,
      "statement": "El cuidado de los sitios de vuelo concierne a:",
      "answers": [
        { "text": "la Federación.", "isCorrect": false },
        { "text": "las ligas y los clubes.", "isCorrect": true },
        { "text": "el Ministerio del Interior.", "isCorrect": false },
        { "text": "cada piloto.", "isCorrect": true }
      ]
    },
    {
      "number": 2,
      "statement": "Aplicar la regla de la adición es:",
      "answers": [
        { "text": "evitar la acumulación de factores estresantes que por separado no conducen a accidentes pero sumados tornan el riesgo inaceptable.", "isCorrect": true },
        { "text": "medir los riesgos y no sumarlos.", "isCorrect": true },
        { "text": "identificar los elementos nuevos de una situación y no aceptar más que uno por vez.", "isCorrect": true }
      ]
    },
    {
      "number": 3,
      "statement": "La hipoxia:",
      "answers": [
        { "text": "se debe a un déficit de oxígeno en la sangre.", "isCorrect": true },
        { "text": "se debe al enfriamiento de la atmósfera.", "isCorrect": false },
        { "text": "se puede manifestar como una sensación de bienestar.", "isCorrect": true },
        { "text": "provoca alteración del juicio y una disminución de la coordinación muscular.", "isCorrect": true }
      ]
    },
    {
      "number": 4,
      "statement": "La hipoxia:",
      "answers": [
        { "text": "los primeros síntomas pueden aparecer hacia los 2000 mts. sobre el nivel del mar.", "isCorrect": true },
        { "text": "no concierne a los pilotos de vuelo libre.", "isCorrect": false },
        { "text": "puede alterar el juicio.", "isCorrect": true },
        { "text": "tiene efectos diferentes sobre cada piloto.", "isCorrect": true }
      ]
    },
    {
      "number": 5,
      "statement": "Factores que agravan el riesgo de hipoxia:",
      "answers": [
        { "text": "fatiga corporal.", "isCorrect": true },
        { "text": "alcohol y tabaco.", "isCorrect": true },
        { "text": "alimentación rica en grasas.", "isCorrect": false },
        { "text": "piloto poco abrigado.", "isCorrect": true }
      ]
    },
    {
      "number": 6,
      "statement": "Previendo la posibilidad de ganar mucha altura o un vuelo prolongado, es recomendable equiparse con:",
      "answers": [
        { "text": "vestimenta deportiva ligera.", "isCorrect": false },
        { "text": "medicamentos antináuseas.", "isCorrect": false },
        { "text": "buen calzado, vestimentas abrigadas, guantes, gafas de sol, agua potable.", "isCorrect": true }
      ]
    },
    {
      "number": 7,
      "statement": "Con viento fuerte, el vuelo cautivo sobre un punto fijo (cuerda atada al suelo):",
      "answers": [
        { "text": "no es nunca peligroso.", "isCorrect": false },
        { "text": "puede ser usado en escuela.", "isCorrect": false },
        { "text": "está desaconsejado.", "isCorrect": true },
        { "text": "puede provocar situaciones en las que el ala se torna incontrolable.", "isCorrect": true }
      ]
    },
    {
      "number": 8,
      "statement": "Cuando la inversión nocturna es muy neta, los vuelos de la mañana serán:",
      "answers": [
        { "text": "probablemente calmos.", "isCorrect": true },
        { "text": "perturbados muy temprano por la actividad térmica.", "isCorrect": false },
        { "text": "favorables para los amantes de las performances.", "isCorrect": false }
      ]
    },
    {
      "number": 9,
      "statement": "Son las 11 hs. La convección térmica ya empezó (3/8 de cúmulos). Un velo de cirroestratos anuncia la llegada de un frente cálido por el oeste. La evolución de la convección durante el día será:",
      "answers": [
        { "text": "evolución de los cúmulos en cumulonimbos.", "isCorrect": false },
        { "text": "desaparición inmediata de las ascendencias.", "isCorrect": false },
        { "text": "desaparición progresiva de las ascendencias.", "isCorrect": true }
      ]
    },
    {
      "number": 10,
      "statement": "Al establecer un plan de vuelo se tiene en cuenta:",
      "answers": [
        { "text": "la situación de los terrenos de despegue y aterrizaje.", "isCorrect": true },
        { "text": "las performances del ala.", "isCorrect": true },
        { "text": "el viento en altura.", "isCorrect": true },
        { "text": "el viento del valle.", "isCorrect": true }
      ]
    },
    {
      "number": 11,
      "statement": "Para despegar en seguridad, es mejor elegir una pendiente:",
      "answers": [
        { "text": "cóncava, con un corte neto.", "isCorrect": false },
        { "text": "convexa y progresiva.", "isCorrect": true },
        { "text": "sin obstáculos.", "isCorrect": true }
      ]
    },
    {
      "number": 12,
      "statement": "La inclinación de un área de despegue debe ser:",
      "answers": [
        { "text": "inferior o igual a la inclinación de la fineza máxima del ala.", "isCorrect": false },
        { "text": "superior a la inclinación de fineza máxima del ala.", "isCorrect": true },
        { "text": "no se debe comparar con la inclinación de fineza del ala.", "isCorrect": false }
      ]
    },
    {
      "number": 13,
      "statement": "Usted se prepara a despegar a las 15 hs. de una ladera soleada donde se establece una ligera brisa de montaña. El viento meteo es nulo:",
      "answers": [
        { "text": "el viento será nulo o muy débil en el valle.", "isCorrect": false },
        { "text": "se debe prever la eventualidad de viento fuerte en el valle, sobre todo si es estrecho.", "isCorrect": true },
        { "text": "en todos los casos es prudente prever las posibilidades de aterrizajes alternativos teniendo en cuenta un eventual viento fuerte en el valle.", "isCorrect": true }
      ]
    },
    {
      "number": 14,
      "statement": "Su despegue está orientado hacia el oeste, hay buen tiempo. Para encontrar las mejores condiciones de partida, es mejor despegar:",
      "answers": [
        { "text": "en la mañana.", "isCorrect": false },
        { "text": "el momento del día no importa.", "isCorrect": false },
        { "text": "al comienzo de la tarde.", "isCorrect": true }
      ]
    },
    {
      "number": 15,
      "statement": "Su despegue está orientado hacia el este, hay buen tiempo. Para encontrar las mejores condiciones, es mejor despegar:",
      "answers": [
        { "text": "en la mañana.", "isCorrect": true },
        { "text": "el momento del día no importa.", "isCorrect": false },
        { "text": "durante la tarde.", "isCorrect": false }
      ]
    },
    {
      "number": 16,
      "statement": "Está en la montaña, no hay viento, en teoría con la fineza del ala usted llegaría exactamente al terreno del aterrizaje. Usted:",
      "answers": [
        { "text": "no vuela.", "isCorrect": true },
        { "text": "vuela.", "isCorrect": false },
        { "text": "vuela a mediodía para aprovechar las ascendencias.", "isCorrect": false },
        { "text": "el efecto del suelo lo va a ayudar en el aterrizaje.", "isCorrect": false }
      ]
    },
    {
      "number": 17,
      "statement": "Una capa de estratos de 40 metros de espesor está situada por debajo del despegue:",
      "answers": [
        { "text": "40 mts. es poco, Ud. despega.", "isCorrect": false },
        { "text": "espera a que se despeje si no, no despega.", "isCorrect": true },
        { "text": "si hay suficiente viento para un vuelo de pendiente, Ud. despega y se mantiene por encima de la capa.", "isCorrect": false }
      ]
    },
    {
      "number": 18,
      "statement": "Con respecto al viento medido en el despegue a 2 metros del suelo, existe el riesgo que 30 metros más arriba sea:",
      "answers": [
        { "text": "de la misma fuerza.", "isCorrect": false },
        { "text": "más fuerte.", "isCorrect": true },
        { "text": "menos fuerte.", "isCorrect": false }
      ]
    },
    {
      "number": 19,
      "statement": "Viento de 10 km/h cruzado en el despegue:",
      "answers": [
        { "text": "Ud. espera mejores condiciones.", "isCorrect": true },
        { "text": "una buena carrera y listo.", "isCorrect": false },
        { "text": "un viento cruzado pero poco fuerte no es problema.", "isCorrect": false },
        { "text": "Ud. busca un despegue mejor orientado.", "isCorrect": true }
      ]
    },
    {
      "number": 20,
      "statement": "Durante la corrida para despegar, si la pendiente del suelo aumenta y el calado no varía, la incidencia:",
      "answers": [
        { "text": "no cambia.", "isCorrect": false },
        { "text": "disminuye.", "isCorrect": false },
        { "text": "aumenta.", "isCorrect": true }
      ]
    },
    {
      "number": 21,
      "statement": "Durante la corrida del despegue, su incidencia es el ángulo entre el plano del ala y:",
      "answers": [
        { "text": "el suelo.", "isCorrect": false },
        { "text": "la vertical.", "isCorrect": false },
        { "text": "la horizontal.", "isCorrect": true }
      ]
    },
    {
      "number": 22,
      "statement": "Durante el despegue el viento es de atrás. Las posibilidades de no despegar se deben a:",
      "answers": [
        { "text": "ausencia del efecto suelo.", "isCorrect": false },
        { "text": "a los efectos del gradiente del viento.", "isCorrect": false },
        { "text": "a la fuerte velocidad que debería alcanzar mientras corre.", "isCorrect": true }
      ]
    },
    {
      "number": 23,
      "statement": "En el despegue hay 20 km/h sobre la ladera, su ala vuela a partir de los 30 km/h, en su trayectoria para despegar usted debe correr a:",
      "answers": [
        { "text": "10 km/h.", "isCorrect": true },
        { "text": "20 km/h.", "isCorrect": false },
        { "text": "30 km/h.", "isCorrect": false },
        { "text": "40 km/h.", "isCorrect": false }
      ]
    },
    {
      "number": 24,
      "statement": "En alta montaña, la densidad del aire disminuye con la altitud y para que mi ala pueda despegar, debo correr:",
      "answers": [
        { "text": "más rápido.", "isCorrect": true },
        { "text": "menos rápido.", "isCorrect": false },
        { "text": "por más tiempo.", "isCorrect": true },
        { "text": "por menos tiempo.", "isCorrect": false }
      ]
    },
    {
      "number": 25,
      "statement": "Después de una carrera de despegue rozando el suelo con la silla, usted logra despegar por muy poco:",
      "answers": [
        { "text": "está seguramente en régimen de vuelo rápido, puede disminuir la velocidad para entrar en tasa de caída mínima.", "isCorrect": false },
        { "text": "está en régimen de vuelo lento y debe rasar el relieve tomando velocidad para pasar a régimen de vuelo normal.", "isCorrect": false },
        { "text": "está probablemente en peligro, si no toma inmediatamente velocidad/aire, puede caer.", "isCorrect": true }
      ]
    },
    {
      "number": 26,
      "statement": "Un amigo acaba de despegar, usted lo alcanza para volar juntos:",
      "answers": [
        { "text": "es peligroso porque se encontrará con la turbulencia de su ala.", "isCorrect": true },
        { "text": "es la única manera de hacer buenas fotos.", "isCorrect": false },
        { "text": "es delicado pero posible.", "isCorrect": false }
      ]
    },
    {
      "number": 27,
      "statement": "La turbulencia que provoca otra ala es peligrosa:",
      "answers": [
        { "text": "varios minutos después de su paso.", "isCorrect": false },
        { "text": "sobre algunas decenas de metros detrás en su trayectoria/aire.", "isCorrect": true },
        { "text": "porque puede provocar plegadas en la propia.", "isCorrect": true }
      ]
    },
    {
      "number": 28,
      "statement": "Las turbulencias de un ala son peligrosas para otra aeronave situada:",
      "answers": [
        { "text": "delante.", "isCorrect": false },
        { "text": "detrás.", "isCorrect": true },
        { "text": "debajo.", "isCorrect": true },
        { "text": "en la trayectoria/aire.", "isCorrect": true }
      ]
    },
    {
      "number": 29,
      "statement": "Volar asegurándose un lugar de aterrizaje es:",
      "answers": [
        { "text": "tener una autonomía que permite alcanzarlo en todo momento sin importar las condiciones aerológicas encontradas.", "isCorrect": true },
        { "text": "quedarse sobre el sitio habitual sin hacer distancia.", "isCorrect": false }
      ]
    },
    {
      "number": 30,
      "statement": "En el caso que el viento meteo cambie de orientación o de intensidad durante el vuelo, conviene:",
      "answers": [
        { "text": "cambiar a tiempo el plan de vuelo para tener mejor chance de un aterrizaje seguro.", "isCorrect": true },
        { "text": "poner rumbo inmediatamente hacia el terreno para volver cueste lo que cueste.", "isCorrect": false },
        { "text": "desacelerar al máximo para retardar el momento de aterrizaje que será delicado.", "isCorrect": false },
        { "text": "localizar inmediatamente terrenos alternativos para prepararse ante la eventualidad de un aterrizaje de emergencia.", "isCorrect": true }
      ]
    },
    {
        "number": 31,
        "statement": "Un ala vuela de cara al viento, avanza con respecto al suelo, el viento es:",
        "answers": [
          { "text": "más fuerte que la velocidad/aire del ala.", "isCorrect": false },
          { "text": "menos fuerte que la velocidad/aire del ala.", "isCorrect": true },
          { "text": "no se puede saber.", "isCorrect": false }
        ]
      },
      {
        "number": 32,
        "statement": "Usted vuela con viento de cola, su velocidad/aire de crucero es igual a la velocidad del viento meteo, el suelo:",
        "answers": [
          { "text": "desfila dos veces más rápido que con viento nulo.", "isCorrect": true },
          { "text": "desfila dos veces menos rápido que con viento nulo.", "isCorrect": false },
          { "text": "parece fijo.", "isCorrect": false }
        ]
      },
      {
        "number": 33,
        "statement": "La velocidad de su aparato con respecto al suelo es:",
        "answers": [
          { "text": "más elevada con viento de cara.", "isCorrect": false },
          { "text": "más elevada con viento de cola.", "isCorrect": true },
          { "text": "no cambia jamás.", "isCorrect": false }
        ]
      },
      {
        "number": 34,
        "statement": "Cuando usted vuela con viento de cola cerca del suelo, la impresión visual tiende a modificar la percepción de la velocidad/aire, puede suceder que usted sin darse cuenta:",
        "answers": [
          { "text": "vuele demasiado lento.", "isCorrect": true },
          { "text": "vuele demasiado rápido.", "isCorrect": false },
          { "text": "entre en pérdida.", "isCorrect": true }
        ]
      },
      {
        "number": 35,
        "statement": "Si vuela de cara a un viento meteo, para conservar la fineza/suelo máxima, con respecto a la velocidad correspondiente a la fineza/aire máxima, usted debe:",
        "answers": [
          { "text": "volar más rápido.", "isCorrect": true },
          { "text": "volar menos rápido.", "isCorrect": false },
          { "text": "buscar la menor tasa de caída.", "isCorrect": false }
        ]
      },
      {
        "number": 36,
        "statement": "Para conservar una fineza/suelo máxima, se debe volar más rápido que a la velocidad de fineza/aire máxima:",
        "answers": [
          { "text": "en una ascendencia.", "isCorrect": false },
          { "text": "en una descendente.", "isCorrect": true },
          { "text": "con viento de cara.", "isCorrect": true },
          { "text": "con viento de cola.", "isCorrect": false }
        ]
      },
      {
        "number": 37,
        "statement": "Usted se cruza de frente con otro ala, su velocidad de cruce es igual a:",
        "answers": [
          { "text": "su velocidad/aire.", "isCorrect": false },
          { "text": "la suma de las dos velocidades/aire.", "isCorrect": true },
          { "text": "la mitad de su velocidad/aire.", "isCorrect": false }
        ]
      },
      {
        "number": 38,
        "statement": "Usted se cruza con otro ala, debe calcular y reaccionar:",
        "answers": [
          { "text": "más rápido que de costumbre.", "isCorrect": true },
          { "text": "como de costumbre.", "isCorrect": false },
          { "text": "con viento de cara tiene más tiempo que de costumbre.", "isCorrect": false }
        ]
      },
      {
        "number": 39,
        "statement": "Su trayectoria/suelo es perpendicular al sentido del viento:",
        "answers": [
          { "text": "la cuerda central del ala es perpendicular al sentido del viento.", "isCorrect": false },
          { "text": "Ud. está necesariamente en derrapaje.", "isCorrect": false },
          { "text": "Ud. está derivando.", "isCorrect": true }
        ]
      },
      {
        "number": 40,
        "statement": "En vuelo con viento de costado:",
        "answers": [
          { "text": "la cuerda central del ala se pone en la dirección del viento, es el efecto veleta.", "isCorrect": false },
          { "text": "se debe adoptar un ángulo de contra-deriva si se dirige hacia un punto que no está en el eje del viento.", "isCorrect": true },
          { "text": "la cuerda central del ala forma un ángulo con la trayectoria/suelo.", "isCorrect": true },
          { "text": "la cuerda central del ala queda paralela a la trayectoria/suelo.", "isCorrect": false }
        ]
      },
      {
        "number": 41,
        "statement": "Marque los dos elementos que definen el ángulo de deriva:",
        "answers": [
          { "text": "la cuerda central.", "isCorrect": false },
          { "text": "la dirección del viento meteo.", "isCorrect": false },
          { "text": "la dirección del viento relativo.", "isCorrect": true },
          { "text": "la trayectoria/suelo.", "isCorrect": true }
        ]
      },
      {
        "number": 42,
        "statement": "Se pueden encontrar fuertes turbulencias peligrosas:",
        "answers": [
          { "text": "a sotavento de un relieve con viento fuerte.", "isCorrect": true },
          { "text": "en las zonas de cizalladuras.", "isCorrect": true },
          { "text": "en las zonas de ascendencias dinámicas.", "isCorrect": false }
        ]
      },
      {
        "number": 43,
        "statement": "En condiciones turbulentas es mejor:",
        "answers": [
          { "text": "no efectuar maniobras que requieran mucha precisión.", "isCorrect": true },
          { "text": "volar con tasa de caída mínima.", "isCorrect": false },
          { "text": "no acercarse a los límites de las variables del pilotaje.", "isCorrect": true }
        ]
      },
      {
        "number": 44,
        "statement": "En régimen turbulento es mejor:",
        "answers": [
          { "text": "no efectuar maniobras que requieran mucha precisión.", "isCorrect": true },
          { "text": "no jugar con las velocidades demasiado bajas.", "isCorrect": true },
          { "text": "no jugar con las velocidades demasiado altas.", "isCorrect": true }
        ]
      },
      {
        "number": 45,
        "statement": "En turbulencia:",
        "answers": [
          { "text": "los esfuerzos sobre la estructura aumentan con la velocidad del vuelo.", "isCorrect": true },
          { "text": "se debe volar lo más lento posible para no fatigar la estructura.", "isCorrect": false },
          { "text": "se debe volar lo más rápido posible para salir de la zona.", "isCorrect": false }
        ]
      },
      {
        "number": 46,
        "statement": "Usted recorre una parte del circuito donde el viento está bien de costado con respecto a su ruta. Elige preferentemente los cúmulos:",
        "answers": [
          { "text": "a barlovento de la ruta a seguir.", "isCorrect": true },
          { "text": "a sotavento de la ruta a seguir.", "isCorrect": false },
          { "text": "sobre la ruta a seguir.", "isCorrect": false }
        ]
      },
      {
        "number": 47,
        "statement": "Antes de efectuar un giro, se debe:",
        "answers": [
          { "text": "evaluar la pérdida de altura debida al viraje y la nueva trayectoria.", "isCorrect": true },
          { "text": "verificar que la zona en la que estaremos luego del viraje está libre.", "isCorrect": true },
          { "text": "ir más lento.", "isCorrect": false }
        ]
      },
      {
        "number": 48,
        "statement": "En vuelo de ladera usted:",
        "answers": [
          { "text": "gira de espaldas a la ladera.", "isCorrect": false },
          { "text": "gira de cara a la ladera.", "isCorrect": false },
          { "text": "presta atención al gradiente de viento cerca del relieve.", "isCorrect": true },
          { "text": "conserva un margen de velocidad suficiente para conseguir alejarse de la ladera en caso de urgencia.", "isCorrect": true }
        ]
      },
      {
        "number": 49,
        "statement": "En vuelo de ladera, para aprovechar mejor la ascendencia, se vuela con la incidencia:",
        "answers": [
          { "text": "de tasa de caída mínima.", "isCorrect": true },
          { "text": "de fineza máxima.", "isCorrect": false },
          { "text": "de velocidad máxima.", "isCorrect": false },
          { "text": "de velocidad mínima.", "isCorrect": false }
        ]
      },
      {
        "number": 50,
        "statement": "En vuelo de ladera, usted gira:",
        "answers": [
          { "text": "hacia el lado en que el ala se levanta.", "isCorrect": false },
          { "text": "hacia el lado del relieve.", "isCorrect": false },
          { "text": "hacia el lado opuesto al relieve.", "isCorrect": true }
        ]
      },
      {
        "number": 51,
        "statement": "En vuelo de ladera, el giro de cara a la pendiente es:",
        "answers": [
          { "text": "es recomendable.", "isCorrect": false },
          { "text": "mejor evitarlo.", "isCorrect": true },
          { "text": "es difícil de controlar y peligroso por el hecho del desfile rápido del suelo con viento de atrás.", "isCorrect": true },
          { "text": "es el que impone la inclinación más fuerte para el mismo radio de giro con respecto al suelo.", "isCorrect": true }
        ]
      },
      {
        "number": 52,
        "statement": "El vuelo de ladera necesita:",
        "answers": [
          { "text": "un control perfecto de la trayectoria.", "isCorrect": true },
          { "text": "una observación constante de la evolución del viento.", "isCorrect": true },
          { "text": "estar habituado a los efectos de la deriva impuestos por el viento.", "isCorrect": true }
        ]
      },
      {
        "number": 53,
        "statement": "Durante un vuelo de ladera con atmósfera turbulenta:",
        "answers": [
          { "text": "se evita descender por abajo de los filos.", "isCorrect": true },
          { "text": "se vuela un poco más lejos del relieve y se aumenta la velocidad.", "isCorrect": true },
          { "text": "se vuela lo más rápido posible.", "isCorrect": false }
        ]
      },
      {
        "number": 54,
        "statement": "En una térmica:",
        "answers": [
          { "text": "Ud. aumenta la inclinación cuando la ascendencia aumenta.", "isCorrect": false },
          { "text": "Ud. disminuye la inclinación cuando la ascendencia aumenta.", "isCorrect": true },
          { "text": "se puede volar lentamente sin riesgo de giro en negativo porque el aire ascendente impedirá una eventual abatida.", "isCorrect": false },
          { "text": "aumenta la inclinación cuando la ascendencia disminuye.", "isCorrect": true }
        ]
      },
      {
        "number": 55,
        "statement": "Usted entra en una térmica y comienza un giro de 360 grados. Luego de 90 grados de giro el variómetro se pone en negativo, usted:",
        "answers": [
          { "text": "disminuye la inclinación.", "isCorrect": false },
          { "text": "invierte el sentido del giro.", "isCorrect": false },
          { "text": "continúa el giro hasta los 270 grados luego toma una línea recta para retomar la ascendencia.", "isCorrect": true }
        ]
      },
      {
        "number": 56,
        "statement": "En una térmica durante los 360 grados, el variómetro llega a un máximo y luego cae a valores apenas positivos, usted:",
        "answers": [
          { "text": "invierte el sentido del giro.", "isCorrect": false },
          { "text": "para re-centrarse, alarga el giro justo antes de la zona de máxima ascendencia y luego lo cierra.", "isCorrect": true },
          { "text": "abandona la ascendencia para tomarla por otro lado.", "isCorrect": false }
        ]
      },
      {
        "number": 57,
        "statement": "Cuando un piloto aprovecha una burbuja térmica para ganar altura:",
        "answers": [
          { "text": "se eleva a la misma velocidad que la burbuja.", "isCorrect": false },
          { "text": "aborda la burbuja por su parte inferior y sale en la cima.", "isCorrect": false },
          { "text": "desciende continuamente en el interior de la burbuja.", "isCorrect": true }
        ]
      },
      {
        "number": 58,
        "statement": "Usted llega a colocarse debajo de un gran cúmulo, observa algunas nubes deshilachadas y una marca de variómetro fuertemente positiva, usted:",
        "answers": [
          { "text": "aprovecha para ganar altura.", "isCorrect": false },
          { "text": "aumenta la velocidad para llevar el variómetro a cero.", "isCorrect": false },
          { "text": "acelera para ir hacia el lado más claro escapando de la influencia de la nube.", "isCorrect": true },
          { "text": "busca la descendente del lado de barlovento de la nube.", "isCorrect": false }
        ]
      },
      {
        "number": 59,
        "statement": "Durante una espiral su aparato derivó 3 km en 10 min. La fuerza del viento es:",
        "answers": [
          { "text": "imposible de saber.", "isCorrect": false },
          { "text": "10 km/h", "isCorrect": false },
          { "text": "18 km/h", "isCorrect": true }
        ]
      },
      {
        "number": 60,
        "statement": "Durante una espiral su aparato derivó 3 km en 10 min. La fuerza del viento es: *VELOCIDAD = DISTANCIA (km) / TIEMPO (h)*",
        "answers": [
          { "text": "imposible de saber.", "isCorrect": false },
          { "text": "10 km/h", "isCorrect": false },
          { "text": "18 km/h", "isCorrect": true }
        ]
      },
      {
        "number": 61,
        "statement": "Usted se acerca a la base de un cúmulo:",
        "answers": [
          { "text": "no hay riesgo de aspiración.", "isCorrect": false },
          { "text": "puede ser aspirado por la ascendencia que tiende a hacerse más fuerte.", "isCorrect": true },
          { "text": "el riesgo es menor mientras la nube no sea del tipo congestus o nimbus.", "isCorrect": false },
          { "text": "el riesgo se agrava si la base está por debajo de los filos más altos.", "isCorrect": false }
        ]
      },
      {
        "number": 62,
        "statement": "En región montañosa, se buscan las ascendencias térmicas preferentemente:",
        "answers": [
          { "text": "en el fondo de los valles.", "isCorrect": false },
          { "text": "sobre las partes pedregosas orientadas al sol.", "isCorrect": true },
          { "text": "sobre las vertientes al abrigo del sol y del viento.", "isCorrect": false }
        ]
      },
      {
        "number": 63,
        "statement": "En un bello día de ascendencias en el que se han anunciado tormentas, hay que preocuparse si:",
        "answers": [
          { "text": "el cielo se cubre rápidamente.", "isCorrect": true },
          { "text": "se sube por todos lados.", "isCorrect": true },
          { "text": "las sombras de las nubes en el suelo se agrandan rápidamente.", "isCorrect": true }
        ]
      },
      {
        "number": 64,
        "statement": "Un gran cúmulo aislado siempre es inofensivo:",
        "answers": [
          { "text": "falso, puede tener una ascendencia superior a sus posibilidades de fuga y convertirse en cumulonimbo.", "isCorrect": true },
          { "text": "falso, puede esconder otras aeronaves.", "isCorrect": true },
          { "text": "verdadero.", "isCorrect": false }
        ]
      },
      {
        "number": 65,
        "statement": "El paso de un cumulonimbo en su sector de vuelo:",
        "answers": [
          { "text": "lo invita a aprovechar las ascendencias antes de las lluvias.", "isCorrect": false },
          { "text": "lo obliga a aterrizar inmediatamente.", "isCorrect": true },
          { "text": "puede volver problemático el aterrizaje.", "isCorrect": true }
        ]
      },
      {
        "number": 66,
        "statement": "Hacer un descenso rápido en espiral cerrado encadenado:",
        "answers": [
          { "text": "no es peligroso.", "isCorrect": false },
          { "text": "lo expone a importantes factores de carga.", "isCorrect": true },
          { "text": "le hace perder todas las referencias exteriores.", "isCorrect": true },
          { "text": "puede traer pérdida del conocimiento.", "isCorrect": true }
        ]
      },
      {
        "number": 67,
        "statement": "Luego de un vuelo de duración, conviene relajar y preparar los brazos y piernas para la carrera del aterrizaje:",
        "answers": [
          { "text": "antes de la aproximación.", "isCorrect": true },
          { "text": "durante la aproximación.", "isCorrect": false },
          { "text": "en final.", "isCorrect": false },
          { "text": "haciendo algunas locuras aéreas durante la aproximación.", "isCorrect": false }
        ]
      },
      {
        "number": 68,
        "statement": "Usted tiene viento de cara de 10 km/h para volver al terreno de aterrizaje:",
        "answers": [
          { "text": "trata de mantenerse en tasa de caída mínima para tener tiempo de efectuar el trayecto.", "isCorrect": false },
          { "text": "vuela lo más rápido posible para tener una velocidad de penetración máxima***.", "isCorrect": true },
          { "text": "tomando puntos de referencia y manejando la velocidad, trata de encontrar el mejor ángulo de planeo.", "isCorrect": true }
        ]
      },
      {
        "number": 69,
        "statement": "Un terreno de aterrizaje desconocido debe reconocerse:",
        "answers": [
          { "text": "en vuelo, poniéndose en la vertical para observarlo***.", "isCorrect": true },
          { "text": "antes del vuelo.", "isCorrect": true },
          { "text": "en el momento de aterrizar.", "isCorrect": false }
        ]
      },
      {
        "number": 70,
        "statement": "Usted se dirige hacia el terreno de aterrizaje con viento de cola a la velocidad de crucero, ve los límites más cercanos del terreno subir en relación a usted:",
        "answers": [
          { "text": "va a llegar justo al terreno y aterrizar con viento de cola.", "isCorrect": false },
          { "text": "va a llegar encima del terreno, dar media vuelta y aterrizar con viento de cara***.", "isCorrect": true },
          { "text": "elige un aterrizaje auxiliar mejor ubicado.", "isCorrect": true },
          { "text": "baja la velocidad para utilizar la mejor fineza/suelo debida al viento de cola.", "isCorrect": false }
        ]
      },
      {
        "number": 71,
        "statement": "Usted está en su aproximación, hay un ala debajo suyo:",
        "answers": [
          { "text": "Ud. la observa esperándola ya que le debe dar prioridad.", "isCorrect": true },
          { "text": "Ud. tiene prioridad sobre el otro ala.", "isCorrect": false },
          { "text": "Ud. hace algunos espirales cerrados para aterrizar antes.", "isCorrect": false },
          { "text": "Ud. realiza su vuelo, ya que en la aproximación no hay prioridades.", "isCorrect": false }
        ]
      },
      {
        "number": 72,
        "statement": "Una buena aproximación:",
        "answers": [
          { "text": "se prepara con anticipación.", "isCorrect": true },
          { "text": "tiene en cuenta el viento meteo y sus variaciones posibles.", "isCorrect": true },
          { "text": "debe poder modificarse en caso de necesidad.", "isCorrect": true }
        ]
      },
      {
        "number": 73,
        "statement": "Una buena aproximación implica una final:",
        "answers": [
          { "text": "de cara al viento en el fin del terreno.", "isCorrect": false },
          { "text": "cara al viento en la entrada del terreno.", "isCorrect": true },
          { "text": "todo depende de las condiciones.***", "isCorrect": true }
        ]
      },
      {
        "number": 74,
        "statement": "Los giros de 360 grados al aterrizar:",
        "answers": [
          { "text": "permiten ser precisos en el aterrizaje.", "isCorrect": false },
          { "text": "están desaconsejados.", "isCorrect": true },
          { "text": "le hacen perder de vista los puntos de referencia.", "isCorrect": true },
          { "text": "lo expone a riesgo de choque con las otras alas que se aproximan.", "isCorrect": true }
        ]
      },
      {
        "number": 75,
        "statement": "Un buen aterrizaje comprende:",
        "answers": [
          { "text": "un reconocimiento a buena altura (viento en suelo, problemas, circuito previsto...).", "isCorrect": true },
          { "text": "giros en S para apreciar las condiciones y ser preciso.", "isCorrect": true },
          { "text": "un último giro no demasiado cerca del suelo y un segmento en final estabilizado.", "isCorrect": true }
        ]
      },
      {
        "number": 76,
        "statement": "Usted está realizando una aproximación en S, su trayectoria se hunde con respecto al plan de descenso previsto, usted debe:",
        "answers": [
          { "text": "disminuir la amplitud de las S.", "isCorrect": true },
          { "text": "aumentar el radio de los giros.", "isCorrect": true },
          { "text": "si hace falta volar en línea recta hacia el terreno.", "isCorrect": true },
          { "text": "acelerar para no perder tiempo.", "isCorrect": false }
        ]
      },
      {
        "number": 77,
        "statement": "Para ser preciso en el aterrizaje, la visualización correcta de la inclinación de la trayectoria en final es indispensable. Esta inclinación:",
        "answers": [
          { "text": "varía en función de la incidencia.", "isCorrect": true },
          { "text": "varía en función de la dirección y de la velocidad del viento.", "isCorrect": true },
          { "text": "no depende de las características aerodinámicas del ala.", "isCorrect": false }
        ]
      },
      {
        "number": 78,
        "statement": "Usted está en final, de cara al terreno de aterrizaje, se da cuenta que está un poco largo y alto y puede pasarse. Elige:",
        "answers": [
          { "text": "perder altura colocando el ala en leve parachutaje.", "isCorrect": false },
          { "text": "perder altura acelerando***.", "isCorrect": false },
          { "text": "aumentar el trayecto a recorrer desviando el rumbo.", "isCorrect": true },
          { "text": "aumentar la resistencia parásita incorporándose.", "isCorrect": true }
        ]
      },
      {
        "number": 79,
        "statement": "En final, si el objetivo fijado desciende en el campo de visión, usted:",
        "answers": [
          { "text": "se está quedando corto.", "isCorrect": true },
          { "text": "se está pasando de largo.", "isCorrect": false },
          { "text": "debe desacelerar al máximo.", "isCorrect": false }
        ]
      },
      {
        "number": 80,
        "statement": "Una toma de velocidad antes del aterrizaje:",
        "answers": [
          { "text": "es inútil.", "isCorrect": false },
          { "text": "es necesaria para conservar una reserva de velocidad/aire en caso de gradiente.", "isCorrect": true },
          { "text": "es peligrosa ya que el aparato hará una trepada al frenar.", "isCorrect": false },
          { "text": "es necesaria para mejorar la maniobrabilidad cerca del suelo***.", "isCorrect": true }
        ]
      },
      {
        "number": 81,
        "statement": "El gradiente del viento de cara al aterrizaje:",
        "answers": [
          { "text": "no tiene efecto sobre la velocidad/aire.", "isCorrect": false },
          { "text": "es peligroso, puede conducir a una situación de pérdida.", "isCorrect": true },
          { "text": "aumenta la tasa de caída.", "isCorrect": true },
          { "text": "implica por seguridad la necesidad de una toma de velocidad.", "isCorrect": true }
        ]
      },
      {
        "number": 82,
        "statement": "El frenado final en un aterrizaje con viento fuerte:",
        "answers": [
          { "text": "no es siempre necesario***.", "isCorrect": false },
          { "text": "no es peligroso.", "isCorrect": false },
          { "text": "demanda una dosificación precisa.", "isCorrect": true }
        ]
      },
      {
        "number": 83,
        "statement": "El parapente:",
        "answers": [
          { "text": "no requiere demasiado aprendizaje.", "isCorrect": false },
          { "text": "responde a las mismas leyes del aire y a las mismas exigencias que los otros deportes aéreos.", "isCorrect": true },
          { "text": "perdona la mayor parte de los errores de pilotaje ya que se practica en un paracaídas.", "isCorrect": false },
          { "text": "necesita un aprendizaje serio cuando uno lo utiliza como planeador (vuelo de performance) y un aprendizaje ligero en paralpinismo (para descender de montañas).", "isCorrect": false }
        ]
      },
      {
        "number": 84,
        "statement": "El primer vuelo importante en parapente:",
        "answers": [
          { "text": "se hace el primer o segundo día del curso luego de haber inflado el parapente un par de veces.", "isCorrect": false },
          { "text": "se hace directamente, debido a los riesgos de accidente en ladera escuela.", "isCorrect": false },
          { "text": "necesita de un aprendizaje técnico serio.", "isCorrect": true },
          { "text": "necesita de una adaptación progresiva al vacío.", "isCorrect": true }
        ]
      },
      {
        "number": 85,
        "statement": "Pasarla licencia de piloto de parapente requiere una progresión:",
        "answers": [
          { "text": "que dura varias semanas.", "isCorrect": true },
          { "text": "que dura alrededor de una semana.", "isCorrect": false },
          { "text": "que incluya un mínimo de 40 vuelos importantes.", "isCorrect": true },
          { "text": "que termina con la compra de su primera ala.", "isCorrect": false }
        ]
      },
      {
        "number": 86,
        "statement": "Al recibir un ala nueva, usted debe:",
        "answers": [
          { "text": "en primer lugar, probarla con uno o dos inflados en el llano para verificar los comandos.", "isCorrect": true },
          { "text": "luego verificar las performances del ala en un sitio conocido de vuelo.", "isCorrect": true },
          { "text": "agregar un mosquetón sobre las bandas para facilitar el agarre.", "isCorrect": false }
        ]
      },
      {
        "number": 87,
        "statement": "El mejor perfil de un terreno de despegue es aquel en el que el piloto puede:",
        "answers": [
          { "text": "alejarse rápidamente del relieve.", "isCorrect": true },
          { "text": "correr fácilmente en la pendiente para obtener la velocidad de vuelo.", "isCorrect": true },
          { "text": "correr poco para lanzarse en vuelo rápidamente.", "isCorrect": false },
          { "text": "detenerse en caso de problemas con el inflado.", "isCorrect": true }
        ]
      },
      {
        "number": 88,
        "statement": "El despegue en alta montaña:",
        "answers": [
          { "text": "está facilitado por la menor densidad del aire.", "isCorrect": false },
          { "text": "es paralpinismo y no vuelo libre.", "isCorrect": false },
          { "text": "necesita de un nivel de experiencia alto.", "isCorrect": true },
          { "text": "no requiere ningún conocimiento particular del alpinismo.", "isCorrect": false }
        ]
      },
      {
        "number": 89,
        "statement": "El despegue sin viento:",
        "answers": [
          { "text": "es peligroso.", "isCorrect": false },
          { "text": "obliga a correr, al menos a la velocidad de tasa de caída mínima del ala.", "isCorrect": true },
          { "text": "necesita de un control importante con los comandos***.", "isCorrect": true }
        ]
      },
      {
        "number": 90,
        "statement": "En el despegue hay 30 km/h de viento, mi ala vuela a una velocidad máxima de 35 km/h:",
        "answers": [
          { "text": "debo correr a 5 km/h para despegar.", "isCorrect": false },
          { "text": "no despego porque estimo que el margen de seguridad no es suficiente.", "isCorrect": true },
          { "text": "tiro de las bandas delanteras apenas haya despegado.", "isCorrect": false }
        ]
      },
      {
        "number": 91,
        "statement": "En el despegue, con 20 km/h de cara, puede inflarse el ala:",
        "answers": [
          { "text": "cara a la pendiente como de costumbre.", "isCorrect": false },
          { "text": "cara a la pendiente haciendo que otra persona nos asegure para no recular en el momento en que el ala se eleva***.", "isCorrect": true },
          { "text": "de espaldas a la pendiente dándose vuelta el piloto para despegar***.", "isCorrect": true }
        ]
      },
      {
        "number": 92,
        "statement": "Inflar de cara al ala permite despegar:",
        "answers": [
          { "text": "sin riesgo con un viento superior a 30 km/h.", "isCorrect": false },
          { "text": "con viento moderado.", "isCorrect": true },
          { "text": "permite controlar el ala fácilmente mientras ésta se eleva.", "isCorrect": true },
          { "text": "sin ninguna ayuda en todos los casos.", "isCorrect": false }
        ]
      },
      {
        "number": 93,
        "statement": "En el despegue el viento es de costado (30 grados, 3 m/s):",
        "answers": [
          { "text": "Ud. infla de cara al viento, toma velocidad y orienta progresivamente la carrera de cara a la pendiente.", "isCorrect": true },
          { "text": "corre en el eje de máxima pendiente tirando de las bandas delanteras.", "isCorrect": false }
        ]
      },
      {
        "number": 94,
        "statement": "30 km/h de viento de cara en el despegue, usted está solo:",
        "answers": [
          { "text": "es demasiado, se abstiene de volar.", "isCorrect": true },
          { "text": "un piloto experimentado puede despegar sin problemas de espaldas al viento.", "isCorrect": false },
          { "text": "hace unas pruebas de inflado ya que, o no podrá hacerlo o el ala saldrá sola sin necesidad de correr.", "isCorrect": false }
        ]
      },
      {
        "number": 95,
        "statement": "La instalación del parapente en el suelo depende:",
        "answers": [
          { "text": "de la fuerza y la dirección del viento.", "isCorrect": true },
          { "text": "de la ladera.", "isCorrect": true },
          { "text": "de las características del parapente.", "isCorrect": true }
        ]
      },
      {
        "number": 96,
        "statement": "El despegue en parapente se compone de:",
        "answers": [
          { "text": "inflado del ala (aceleración y vista hacia adelante).", "isCorrect": true },
          { "text": "estabilización y control del ala (temporización y vista hacia el ala).", "isCorrect": true },
          { "text": "despegue (aceleración y vista hacia adelante).", "isCorrect": true }
        ]
      },
      {
        "number": 97,
        "statement": "La estabilización y control del ala:",
        "answers": [
          { "text": "es necesaria para controlar toda el ala y detectar eventuales nudos en las suspensiones.", "isCorrect": true },
          { "text": "requiere una detención momentánea de la aceleración.***", "isCorrect": true },
          { "text": "es necesaria para verificar que la aeronave que se acaba de construir es apta para el vuelo.", "isCorrect": false }
        ]
      },
      {
        "number": 98,
        "statement": "La fase de aceleración luego de la estabilización requiere:",
        "answers": [
          { "text": "inclinarse hacia adelante para una toma de velocidad eficaz.", "isCorrect": true },
          { "text": "inclinarse hacia adelante para evitar la pérdida de equilibrio.", "isCorrect": true },
          { "text": "inclinarse hacia atrás para controlar mejor el ala.", "isCorrect": false }
        ]
      },
      {
        "number": 99,
        "statement": "Durante un inflado con viento fuerte, el ala comienza a tirarlo hacia atrás muy fuertemente, usted corre el riesgo de ser arrastrado:",
        "answers": [
          { "text": "suelta los comandos y se sujeta a lo que puede para sostenerse.", "isCorrect": false },
          { "text": "tira de los dos comandos a fondo para detenerse.", "isCorrect": false },
          { "text": "sujeta el ala tirando de una banda trasera y yendo hacia la misma.", "isCorrect": true },
          { "text": "pone el ala en bandera con la ayuda de las bandas traseras.", "isCorrect": true }
        ]
      },
      {
        "number": 100,
        "statement": "Durante un inflado el ala se coloca en medialuna, usted debe:",
        "answers": [
          { "text": "acelerar a fondo en la pendiente.", "isCorrect": false },
          { "text": "tirar los comandos, luego sujetar las bandas delanteras.", "isCorrect": false },
          { "text": "parar y empezar de nuevo.", "isCorrect": true },
          { "text": "tirar de las bandas delanteras.", "isCorrect": false }
        ]
      },
      {
        "number": 101,
        "statement": "Luego del inflado, su ala presenta un defecto de inflado a la derecha y se desvía hacia la derecha:",
        "answers": [
          { "text": "corre más lento y tira fuerte del comando derecho.", "isCorrect": false },
          { "text": "frena vigorosamente a la derecha, luego gira a la izquierda.", "isCorrect": false },
          { "text": "sigue el ala hasta corregir la trayectoria usando los comandos, luego tira de los comandos para terminar de inflar.", "isCorrect": true }
        ]
      },
      {
        "number": 102,
        "statement": "Durante la estabilización, su ala queda a la izquierda:",
        "answers": [
          { "text": "Ud. corrige desplazándose a la derecha para recuperar el ala.", "isCorrect": false },
          { "text": "sigue al ala desplazándose hacia la izquierda frenando suavemente a la derecha para traerla de nuevo a la línea de máxima pendiente.", "isCorrect": true },
          { "text": "conserva la velocidad tirando de las bandas delanteras.", "isCorrect": false },
          { "text": "acelera y frena a la izquierda.", "isCorrect": false }
        ]
      },
      {
        "number": 103,
        "statement": "Durante la estabilización tiene varios cajones laterales izquierdos cerrados:",
        "answers": [
          { "text": "tira del comando derecho y desacelera.", "isCorrect": false },
          { "text": "tira de la banda delantera izquierda para dar más velocidad a ese lado.", "isCorrect": false },
          { "text": "mantiene la velocidad y trata de re-inflar con un movimiento suave de los comandos.", "isCorrect": true },
          { "text": "no se preocupa, siempre terminan por abrirse solos.", "isCorrect": false }
        ]
      },
      {
        "number": 104,
        "statement": "En el suelo su ala se desvía de la trayectoria prevista:",
        "answers": [
          { "text": "Ud. corrige trayendo el ala con el cuerpo y frenando del lado hacia el que la quiere traer***.", "isCorrect": true },
          { "text": "sigue al ala para quedarse en el centro y traerla frenando del lado adonde quiere ir.", "isCorrect": true },
          { "text": "Ud. corrige con los delanteros.", "isCorrect": false }
        ]
      },
      {
        "number": 105,
        "statement": "Su ala está inflada, estabilizada. Para despegar:",
        "answers": [
          { "text": "sigue acelerando teniendo firme las bandas delanteras.", "isCorrect": false },
          { "text": "acelera con las manos arriba hasta el despegue.", "isCorrect": false },
          { "text": "acelera con las manos arriba y frena en el momento del despegue.", "isCorrect": false },
          { "text": "acelera ubicando los comandos al nivel de régimen de vuelo de crucero.", "isCorrect": true }
        ]
      },
      {
        "number": 106,
        "statement": "Justo después del despegue, usted:",
        "answers": [
          { "text": "suelta los comandos para sentarse mejor.", "isCorrect": false },
          { "text": "no puede pilotear si está mal sentado.", "isCorrect": false },
          { "text": "verifica visualmente que el parapente está bien inflado.***", "isCorrect": true },
          { "text": "se ocupa de su trayectoria y de los otros pilotos que están volando.", "isCorrect": true }
        ]
      },
      {
        "number": 107,
        "statement": "La utilización de las bandas delanteras en vuelo:",
        "answers": [
          { "text": "no es muy aprovechable aerodinámicamente porque el ala se hunde más de lo que se gana en penetración.", "isCorrect": true },
          { "text": "puede originar plegadas intempestivas.", "isCorrect": true },
          { "text": "origina más problemas que soluciones.", "isCorrect": true }
        ]
      },
      {
        "number": 108,
        "statement": "Tirar de las bandas delanteras en vuelo:",
        "answers": [
          { "text": "no presenta ningún peligro.", "isCorrect": false },
          { "text": "es imposible.", "isCorrect": false },
          { "text": "puede causar una plegada del ala.", "isCorrect": true }
        ]
      },
      {
        "number": 109,
        "statement": "Volando, con los brazos arriba, los comandos están tensos y el borde de fuga está un poco bajo:",
        "answers": [
          { "text": "esto mejora la fineza sin acción sobre los comandos.", "isCorrect": false },
          { "text": "tiene poca influencia sobre el ala.", "isCorrect": false },
          { "text": "es mejor para el inflado.", "isCorrect": false },
          { "text": "se deben alargar y regular los comandos para el próximo vuelo.", "isCorrect": true }
        ]
      },
      {
        "number": 110,
        "statement": "Volando, si suelta los comandos:",
        "answers": [
          { "text": "el ala desacelera progresivamente.", "isCorrect": false },
          { "text": "el ala vuela a velocidad máxima.", "isCorrect": true },
          { "text": "jamás hay que soltarlos.", "isCorrect": false }
        ]
      },
      {
        "number": 111,
        "statement": "Usted hace las orejas:",
        "answers": [
          { "text": "teniendo los comandos en las manos.", "isCorrect": false },
          { "text": "tirando las bandas delanteras.", "isCorrect": false },
          { "text": "tirando simétricamente una o varias suspensiones delanteras exteriores (leer las indicaciones técnicas de su ala).", "isCorrect": true }
        ]
      },
      {
        "number": 112,
        "statement": "Cuando hace las orejas usted:",
        "answers": [
          { "text": "aumenta la tasa de caída.", "isCorrect": true },
          { "text": "disminuye la fineza/aire.", "isCorrect": true },
          { "text": "aumenta la maniobrabilidad del ala.", "isCorrect": false }
        ]
      },
      {
        "number": 113,
        "statement": "Cuando hace las orejas usted:",
        "answers": [
          { "text": "su velocidad/aire aumenta.", "isCorrect": true },
          { "text": "con viento de cara su fineza/suelo aumenta.", "isCorrect": false },
          { "text": "desciende más rápidamente en seguridad.", "isCorrect": true },
          { "text": "no estropea el ala***.", "isCorrect": true }
        ]
      },
      {
        "number": 114,
        "statement": "En turbulencia, usted hace las orejas:",
        "answers": [
          { "text": "su ala será más estable.", "isCorrect": true },
          { "text": "su ala será más sensible.", "isCorrect": false },
          { "text": "está desaconsejado.", "isCorrect": false }
        ]
      },
      {
        "number": 115,
        "statement": "Tirar bandas 'B':",
        "answers": [
          { "text": "es una forma de descenso rápido.", "isCorrect": true },
          { "text": "es una práctica sin peligro.", "isCorrect": false },
          { "text": "estropea los puntos de anclaje de esta línea de suspensiones.", "isCorrect": true },
          { "text": "puede ocasionar una situación de parachutaje estabilizado.", "isCorrect": true }
        ]
      },
      {
        "number": 116,
        "statement": "A velocidad de tasa de caída mínima, para comenzar un giro a la derecha sin perder demasiada velocidad con el consiguiente riesgo de meterse en barrena plana, usted debe:",
        "answers": [
          { "text": "tirar del comando derecho.", "isCorrect": false },
          { "text": "tirar del delantero izquierdo.", "isCorrect": false },
          { "text": "levantar el comando izquierdo.", "isCorrect": true }
        ]
      },
      {
        "number": 117,
        "statement": "Una entrada en giro de 360 grados:",
        "answers": [
          { "text": "no debe hacerse al aterrizar.", "isCorrect": true },
          { "text": "puede ser vigorosa porque el riesgo de pérdida es nulo.", "isCorrect": false },
          { "text": "se facilita con una acción sobre la silla.", "isCorrect": true },
          { "text": "debe hacerse más inclinada cuanto más estrecha es la ascendente.", "isCorrect": true }
        ]
      },
      {
        "number": 118,
        "statement": "Un giro de 360 grados:",
        "answers": [
          { "text": "disminuye la tasa de caída.", "isCorrect": false },
          { "text": "aumenta la tasa de caída.", "isCorrect": true },
          { "text": "permite evaluar la deriva.", "isCorrect": true }
        ]
      },
      {
        "number": 119,
        "statement": "Luego de un error de pilotaje, usted nota la detención casi total del viento relativo. El ala se hunde. Para volver lo más rápido posible al régimen de vuelo normal usted debe:",
        "answers": [
          { "text": "tirar de los comandos.", "isCorrect": false },
          { "text": "tirar progresivamente de los delanteros para disminuir la incidencia.", "isCorrect": false },
          { "text": "soltar suavemente los comandos para amortiguar la abatida.", "isCorrect": true }
        ]
      },
      {
        "number": 120,
        "statement": "La entrada en pérdida puede ser peligrosa:",
        "answers": [
          { "text": "cerca del suelo.", "isCorrect": true },
          { "text": "en un ala mal regulada.", "isCorrect": true },
          { "text": "en condiciones turbulentas.", "isCorrect": true }
        ]
      },
      {
        "number": 121,
        "statement": "Para salir de una entrada en pérdida simétrica:",
        "answers": [
          { "text": "espere a que el ala se abra sola.", "isCorrect": false },
          { "text": "dé golpes secos a las bandas delanteras.", "isCorrect": false },
          { "text": "dé golpes secos a los comandos.", "isCorrect": false },
          { "text": "suelte suavemente los comandos y amortigüe la abatida.", "isCorrect": true }
        ]
      },
      {
        "number": 122,
        "statement": "Usted vuela con tasa de caída mínima, va a entrar en una ascendente:",
        "answers": [
          { "text": "se prepara a frenar.", "isCorrect": false },
          { "text": "conserva su régimen de vuelo.", "isCorrect": false },
          { "text": "se prepara a soltar los comandos***.", "isCorrect": true },
          { "text": "aumenta su velocidad.", "isCorrect": true }
        ]
      },
      {
        "number": 123,
        "statement": "Para permanecer en una ascendente dinámica cerca del relieve, usted:",
        "answers": [
          { "text": "hace giros de 360 grados adelante de la ladera.", "isCorrect": false },
          { "text": "baja mucho los comandos para volar lentamente.", "isCorrect": false },
          { "text": "hace '8' largos girando de cara al viento.", "isCorrect": true },
          { "text": "hace '8' largos girando de cara a la pendiente.", "isCorrect": false }
        ]
      },
      {
        "number": 124,
        "statement": "Volando, si siente turbulencias:",
        "answers": [
          { "text": "tira de los delanteros.", "isCorrect": false },
          { "text": "deja los brazos arriba.", "isCorrect": true },
          { "text": "vuela un poco más lento que en régimen de crucero.***", "isCorrect": false }
        ]
      },
      {
        "number": 125,
        "statement": "En vuelo turbulento para minimizar los riesgos de autorrotación y de giro hacia la ladera, hay que volar:",
        "answers": [
          { "text": "con incidencias débiles.", "isCorrect": false },
          { "text": "con incidencias fuertes.", "isCorrect": false },
          { "text": "entre tasa de caída mínima y fineza máxima.", "isCorrect": true }
        ]
      },
      {
        "number": 126,
        "statement": "En vuelo de ladera una turbulencia violenta pliega 50% del ala:",
        "answers": [
          { "text": "levanta los brazos y toma velocidad para evitar la entrada en pérdida.***", "isCorrect": true },
          { "text": "observa la naturaleza del terreno bajo sus pies y se prepara a un aterrizaje forzado.", "isCorrect": false },
          { "text": "controla su trayectoria para evitar un giro hacia la ladera manteniendo una velocidad suficiente para evitar la entrada en pérdida o la auto-rotación.", "isCorrect": true },
          { "text": "tira del comando correspondiente al lado cerrado para lograr abrirlo.", "isCorrect": false }
        ]
      },
      {
        "number": 127,
        "statement": "Durante un vuelo de ladera a 50 mts. del suelo, usted se hunde bruscamente hacia el relieve, el silbido del viento relativo disminuye. Para evitar el golpe:",
        "answers": [
          { "text": "frena inmediatamente para controlar mejor el ala.", "isCorrect": false },
          { "text": "desfrena tranquilamente y gira cuando la velocidad es suficiente para alejarse de la ladera.", "isCorrect": true },
          { "text": "la situación es irrecuperable, se prepara a aterrizar en la ladera.", "isCorrect": false }
        ]
      },
      {
        "number": 128,
        "statement": "Su ala se desinfla bruscamente del lado del relieve:",
        "answers": [
          { "text": "la vuelve a inflar enérgicamente evitando un giro hacia el relieve.", "isCorrect": false },
          { "text": "trata en primer lugar de retirarse del relieve conservando velocidad suficiente antes de ejecutar la maniobra adecuada para inflar el ala.", "isCorrect": true },
          { "text": "no hace nada, el ala se infla automáticamente.", "isCorrect": false }
        ]
      },
      {
        "number": 129,
        "statement": "Usted está de espaldas al relieve y se pliegan varios cajones a la izquierda del ala, lo que le hace girar a la izquierda:",
        "answers": [
          { "text": "si el parapente tiene homologación ACPUL, lo deja que se recupere solo.", "isCorrect": false },
          { "text": "frena violentamente a la izquierda para volver a inflar el lado cerrado.", "isCorrect": false },
          { "text": "frena simétricamente de los dos lados.", "isCorrect": false },
          { "text": "Ud. corrige a la derecha para alejarse del relieve, conservando la velocidad suficiente.", "isCorrect": true }
        ]
      },
      {
        "number": 130,
        "statement": "En vuelo turbulento, su ala se pliega adelante en la mayor parte del borde de ataque, usted:",
        "answers": [
          { "text": "tira violentamente de los dos comandos.", "isCorrect": false },
          { "text": "hace un frenaje moderado.", "isCorrect": true },
          { "text": "levanta las manos para conseguir velocidad máxima.", "isCorrect": false }
        ]
      },
      {
        "number": 131,
        "statement": "Varios cajones laterales izquierdos se cierran:",
        "answers": [
          { "text": "suelta los comandos para acelerar y volver a inflar.", "isCorrect": false },
          { "text": "frena del lado opuesto para estabilizar la trayectoria conservando la velocidad suficiente.", "isCorrect": true },
          { "text": "carga el peso del lado derecho de la silla.", "isCorrect": true },
          { "text": "realiza movimientos suaves y amplios con el comando izquierdo, con la trayectoria estabilizada.", "isCorrect": true }
        ]
      },
      {
        "number": 132,
        "statement": "Su ala se encuentra en parachutaje, las maniobras habituales para salir son:",
        "answers": [
          { "text": "entrar en giro.", "isCorrect": false },
          { "text": "tirar de los dos comandos para ponerla en pérdida transitoriamente.***", "isCorrect": true },
          { "text": "tirar de las dos bandas delanteras.***", "isCorrect": true },
          { "text": "si está cerca del suelo, se prepara a un aterrizaje forzoso sin hacer nada ya que cualquiera de la maniobras anteriores lo tirará hacia adelante tomando velocidad.", "isCorrect": true }
        ]
      },
      {
        "number": 133,
        "statement": "El riesgo de entrada en barrena plana:",
        "answers": [
          { "text": "aumenta bajando fuerte un comando en un vuelo lento.", "isCorrect": true },
          { "text": "aumenta bajando fuerte un comando en un vuelo rápido.", "isCorrect": false },
          { "text": "varía según el tipo de ala.", "isCorrect": true }
        ]
      },
      {
        "number": 134,
        "statement": "Para salir de una barrena plana, se debe:",
        "answers": [
          { "text": "levantar suavemente los comandos contrarrestando del lado exterior.", "isCorrect": true },
          { "text": "frenar del costado exterior en el giro y tirar de la banda delantera del costado interior.", "isCorrect": false }
        ]
      },
      {
        "number": 135,
        "statement": "Volando se le rompe el comando derecho, puede pilotar con:",
        "answers": [
          { "text": "el comando izquierdo y la banda trasera derecha.", "isCorrect": true },
          { "text": "el comando izquierdo y la banda delantera derecha.", "isCorrect": false },
          { "text": "las dos bandas traseras (simetría de sensaciones).", "isCorrect": true },
          { "text": "las bandas delanteras para aterrizar rápidamente.", "isCorrect": false }
        ]
      },
      {
        "number": 136,
        "statement": "La rotura de un comando:",
        "answers": [
          { "text": "hace el pilotaje imposible.", "isCorrect": false },
          { "text": "desinfla el ala.", "isCorrect": false },
          { "text": "puede ser compensado piloteando con las bandas traseras.", "isCorrect": true }
        ]
      },
      {
        "number": 137,
        "statement": "Está obligado a aterrizar en un terreno en pendiente***:",
        "answers": [
          { "text": "aterriza siempre en contra de la pendiente.", "isCorrect": false },
          { "text": "si la pendiente es fuerte, aterriza de cara al viento.", "isCorrect": false },
          { "text": "si la pendiente es débil, aterriza de cara al viento.", "isCorrect": true },
          { "text": "si la pendiente es fuerte, aterriza de costado a la pendiente.***", "isCorrect": true }
        ]
      },
      {
        "number": 138,
        "statement": "Está en la final de cara al terreno de aterrizaje, se da cuenta que está un poco alto y largo, pudiendo pasarse del terreno:",
        "answers": [
          { "text": "frena progresivamente el ala hasta el punto de parachutaje.", "isCorrect": false },
          { "text": "pierde altura haciendo un giro de 360 grados.", "isCorrect": false },
          { "text": "aumenta el trayecto haciendo una pequeña 'S'.", "isCorrect": true },
          { "text": "tira y suelta los comandos varias veces para sacudir el ala y disminuir la fineza.", "isCorrect": false }
        ]
      },
      {
        "number": 139,
        "statement": "La toma de velocidad antes del aterrizaje:",
        "answers": [
          { "text": "no es necesaria en parapente.", "isCorrect": false },
          { "text": "hace falta para conservar una buena velocidad/aire ya que el viento disminuye al acercarse al suelo.", "isCorrect": true },
          { "text": "es peligrosa porque el aparato hará una trepada durante el frenado final.", "isCorrect": false },
          { "text": "hace la acción de frenado más eficaz.", "isCorrect": true }
        ]
      },
      {
        "number": 140,
        "statement": "Para aterrizar suavemente cuando no hay viento:",
        "answers": [
          { "text": "Ud. vuela toda la fase final con los comandos a nivel de la cadera.", "isCorrect": false },
          { "text": "Ud. hace giros en 'S' hasta el aterrizaje.", "isCorrect": false },
          { "text": "Ud. tira a fondo de los comandos en la entrada al terreno.", "isCorrect": false },
          { "text": "toma velocidad al principio de la fase final.", "isCorrect": true }
        ]
      },
      {
        "number": 141,
        "statement": "A 5 mts. del suelo se da cuenta que va a aterrizar con viento de costado:",
        "answers": [
          { "text": "Ud. realiza el frenado final normalmente sin intentar girar.", "isCorrect": true },
          { "text": "intenta girar para quedar de cara al viento.", "isCorrect": false },
          { "text": "tira a fondo de los comandos para corregir.", "isCorrect": false }
        ]
      },
      {
        "number": 142,
        "statement": "En final, a 30 mts. del suelo se da cuenta que va a aterrizar con viento de cola:",
        "answers": [
          { "text": "se prepara a frenar enérgicamente y a correr.", "isCorrect": true },
          { "text": "hace un giro de 180 grados para corregir.", "isCorrect": false },
          { "text": "tira de los comandos para entrar en parachutaje.", "isCorrect": false }
        ]
      },
      {
        "number": 143,
        "statement": "Hay 20 km/h de viento en el aterrizaje, usted se prepara:",
        "answers": [
          { "text": "a tirar a fondo de los comandos la posarse.", "isCorrect": false },
          { "text": "a frenar suavemente y acompañar caminando hacia atrás a la vela en su descenso.", "isCorrect": true },
          { "text": "a tirar de las bandas delanteras para frenar suavemente.", "isCorrect": false },
          { "text": "a darse vuelta después del aterrizaje y sujetar una o las dos bandas traseras para no dejarse arrastrar.", "isCorrect": true }
        ]
      },
      {
        "number": 144,
        "statement": "En el aterrizaje:",
        "answers": [
          { "text": "hay que mirar el ala para asegurarse de que no se cierre.", "isCorrect": false },
          { "text": "hay que disminuir mucho la velocidad.", "isCorrect": false },
          { "text": "se desaconseja aterrizar en giro ya que se aumenta la tasa de caída y el balanceo lateral del piloto.", "isCorrect": true },
          { "text": "hay que aumentar la velocidad en final antes del frenado.", "isCorrect": true }
        ]
      },
      {
        "number": 145,
        "statement": "El circuito de aproximación en el aterrizaje sirve:",
        "answers": [
          { "text": "solamente como entrenamiento para la posterior aprobación de los exámenes organizados por la F.A.V.L.", "isCorrect": false },
          { "text": "exclusivamente a los principiantes como maniobra de ayuda en los primeros aterrizajes.", "isCorrect": false },
          { "text": "al igual que en el caso de otras aeronaves, como procedimiento que ofrece al piloto el máximo de posibilidades de un aterrizaje preciso.", "isCorrect": true },
          { "text": "de acuerdo a la zona elegida para la destrucción de altura y en función del sentido de giro, para indicar a los pilotos que se acercan cuál es el tipo de circuito elegido para aterrizar.", "isCorrect": true }
        ]
      },
      {
        "number": 146,
        "statement": "La parte del circuito de aproximación indicada con el número 1 en el diagrama se llama:",
        "answers": [
          { "text": "básica.", "isCorrect": false },
          { "text": "destrucción.", "isCorrect": true },
          { "text": "inicial.", "isCorrect": false },
          { "text": "final.", "isCorrect": false }
        ]
      },
      {
        "number": 147,
        "statement": "La parte del circuito de aproximación indicada con el número 2 en el diagrama se llama:",
        "answers": [
          { "text": "básica.", "isCorrect": false },
          { "text": "destrucción.", "isCorrect": false },
          { "text": "inicial.", "isCorrect": true },
          { "text": "final.", "isCorrect": false }
        ]
      },
      {
        "number": 148,
        "statement": "La parte del circuito de aproximación indicada con el número 3 en el diagrama se llama:",
        "answers": [
          { "text": "básica.", "isCorrect": true },
          { "text": "destrucción.", "isCorrect": false },
          { "text": "inicial.", "isCorrect": false },
          { "text": "final.", "isCorrect": false }
        ]
      },
      {
        "number": 149,
        "statement": "La parte del circuito de aproximación indicada con el número 4 en el diagrama se llama:",
        "answers": [
          { "text": "básica.", "isCorrect": false },
          { "text": "destrucción.", "isCorrect": false },
          { "text": "inicial.", "isCorrect": false },
          { "text": "final.", "isCorrect": true }
        ]
      },
      {
        "number": 150,
        "statement": "Al llegar con demasiada altura a la zona de aterrizaje, y antes de comenzar la fase inicial usted siempre pierde esa altura:",
        "answers": [
          { "text": "con giros a su izquierda.", "isCorrect": false },
          { "text": "con giros a su derecha.", "isCorrect": false },
          { "text": "con giros en el mismo sentido del circuito de aproximación elegido.", "isCorrect": true },
          { "text": "realizando giros en 'S'.", "isCorrect": false }
        ]
      },
      {
        "number": 151,
        "statement": "Usted ha decidido realizar un circuito de aproximación hacia la izquierda. La destrucción del excedente de altura antes de la fase inicial debe hacerse en el cuadrante:",
        "answers": [
          { "text": "superior izquierdo.", "isCorrect": true },
          { "text": "superior derecho.", "isCorrect": false },
          { "text": "inferior derecho", "isCorrect": false },
          { "text": "inferior izquierdo.", "isCorrect": false }
        ]
      },
      {
        "number": 152,
        "statement": "Usted ha decidido realizar un circuito de aproximación hacia la derecha. La destrucción del excedente de altura antes de la fase inicial debe hacerse en el cuadrante:",
        "answers": [
          { "text": "superior izquierdo..", "isCorrect": false },
          { "text": "superior derecho.", "isCorrect": true },
          { "text": "inferior derecho", "isCorrect": false },
          { "text": "inferior izquierdo.", "isCorrect": false }
        ]
      },
      {
        "number": 153,
        "statement": "Ud. llega primero a la zona de aterrizaje seguido a 50 mts. en distancia horizontal por otros dos pilotos. El viento es nulo, no existen obstáculos en ninguno de los límites de la pista, y no hay normas específicas de aterrizaje para el lugar. Dado que usted es el primer piloto:",
        "answers": [
          { "text": "puede elegir un circuito hacia derecha o izquierda y con la fase final en cualquier dirección, dado que el viento es nulo.", "isCorrect": false },
          { "text": "puede elegir libremente la dirección de la fase final, pero debe realizar un circuito de aproximación a la izquierda.", "isCorrect": false },
          { "text": "puede elegir libremente una aproximación a izquierda o derecha, pero la fase final debe ser transversal al eje del valle.", "isCorrect": true },
          { "text": "debe realizar un circuito de aproximación hacia la izquierda, pero la fase final debe ser transversal al eje del valle.", "isCorrect": false }
        ]
      },
      {
        "number": 153,
        "statement": "Ud. llega primero a la zona de aterrizaje seguido a 50 mts. en distancia horizontal por otros dos pilotos. El viento es nulo, no existen obstáculos en ninguno de los límites de la pista, y no hay normas específicas de aterrizaje para el lugar. Dado que usted es el primer piloto:",
        "answers": [
          { "text": "puede elegir un circuito hacia derecha o izquierda y con la fase final en cualquier dirección, dado que el viento es nulo***.", "isCorrect": true },
          { "text": "puede elegir libremente la dirección de la fase final, pero debe realizar un circuito de aproximación a la izquierda.***", "isCorrect": true },
          { "text": "puede elegir libremente una aproximación a izquierda o derecha, pero la fase final debe ser transversal al eje del valle.", "isCorrect": false },
          { "text": "debe realizar un circuito de aproximación hacia la izquierda, pero la fase final debe ser transversal al eje del valle.", "isCorrect": false }
        ]
      },
      {
        "number": 154,
        "statement":"Ud. llega primero a la zona de aterrizaje seguido a 50 mts. en distancia horizontal por otros dos pilotos. El viento es nulo, y Ud. comienza un circuito de aproximación hacia la izquierda con fase final hacia el oeste. Al entrar en básica Ud. descubre que en realidad hay un viento de 2 a 5 km/h del este, y por lo tanto:",
        "answers": [
          { "text": "continúa con el circuito elegido, pero prevé que su trayectoria en la fase final tendrá menor pendiente.", "isCorrect": true },
          { "text": "interrumpe inmediatamente el circuito elegido dirigiéndose hacia la zona a sotavento del punto, y aterriza contra el viento.", "isCorrect": false },
          { "text": "continúa con el circuito elegido, pero prevé que su trayectoria en la fase final tendrá mayor pendiente.", "isCorrect": false },
          { "text": "asume la fase final como básica, y finalmente aterriza con el viento de costado.", "isCorrect": false }
        ]
      },
      {
        "number": 155,
        "statement":"Ud. llega segundo a la zona de aterrizaje, con distancias de 50 mts. en la horizontal respecto del primero y el tercero. Existe un suave viento del oeste (2 a 5 km/h) y no existen obstáculos en las inmediaciones. El primer piloto inicia un circuito de aproximación hacia la derecha, y planea aterrizar con viento de cola. Usted:",
        "answers": [
          { "text": "sigue al piloto que le precede realizando el mismo circuito de aproximación para evitar el riesgo de colisión.", "isCorrect": true },
          { "text": "efectúa un circuito de aproximación hacia la derecha, pero previendo un aterrizaje contra el viento..", "isCorrect": false },
          { "text": "efectúa un circuito aproximación hacia la izquierda y aterriza también con viento de cola.", "isCorrect": false },
          { "text": "efectúa un circuito de aproximación hacia la izquierda y aterriza con viento de frente.", "isCorrect": false }
        ]
      },
      {
        "number": 155,
        "statement":"Ud. está realizando su circuito de aproximación en un aterrizaje en el que la manga indica una suave brisa del oeste. En final descubre que el viento ha girado y ahora viene del este con 5 a 10 km/h de intensidad. Ud.:",
        "answers": [
          { "text": "realiza inmediatamente un giro de 180 grados y aterriza contra el viento.", "isCorrect": false },
          { "text": "continúa el recorrido de acuerdo a lo previsto volando más frenado para compensar el viento de cola y disminuir la velocidad con respecto al suelo.", "isCorrect": false },
          { "text": "continúa el recorrido de acuerdo a lo previsto, se incorpora, vuela sin frenar, y tira de los comandos para el aterrizaje algo más temprano.", "isCorrect": true },
          { "text": "continúa el recorrido de acuerdo a lo previsto y por medio de sucesivos y regulares tirones de ambos comandos intenta que el ala pierda altura en forma vertical.", "isCorrect": false }
        ]
      },
      {
        "number": 156,
        "statement":"Cuando se aterriza con viento de cola:",
        "answers": [
          { "text": "la trayectoria tiene una pendiente menor y la velocidad de aterrizaje es más baja.", "isCorrect": false },
          { "text": "la trayectoria tiene una pendiente mayor y la velocidad de aterrizaje es más alta***.", "isCorrect": true },
          { "text": "la trayectoria tiene una pendiente menor y la velocidad de aterrizaje es más alta.***", "isCorrect": true },
          { "text": "la trayectoria tiene una pendiente mayor y la velocidad de aterrizaje es más baja.", "isCorrect": false }
        ]
      },
      {
        "number": 156,
        "statement":"Cuando se aterriza con viento de frente:",
        "answers": [
          { "text": "la trayectoria tiene una pendiente menor y la velocidad de aterrizaje es más baja***.", "isCorrect": true },
          { "text": "la trayectoria tiene una pendiente mayor y la velocidad de aterrizaje es más alta", "isCorrect": false },
          { "text": "la trayectoria tiene una pendiente menor y la velocidad de aterrizaje es más alta.", "isCorrect": false },
          { "text": "la trayectoria tiene una pendiente mayor y la velocidad de aterrizaje es más baja.***", "isCorrect": true }
        ]
      },
      {
        "number": 157,
        "statement":"Usted aterriza con un viento de frente de 30 km/h. Apenas sus pies tocan el suelo::",
        "answers": [
          { "text": "tira de los comandos hacia abajo todo lo que pueda para que el ala deje inmediatamente de volar.", "isCorrect": false },
          { "text": "gira 180 grados y tira los comandos hacia abajo todo lo que puede para que el ala deje inmediatamente de volar.***", "isCorrect": true },
          { "text": "tira todo lo que pueda de un comando para que el ala caiga sobre el borde de ataque y de esa manera deje de sustentar.", "isCorrect": false },
          { "text": "gira 180 grados y tira de las bandas B o C para que le ala deje inmediatamente de volar***.", "isCorrect": true }
        ]
      }
  ]
  