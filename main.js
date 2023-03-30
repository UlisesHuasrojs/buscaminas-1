//Constantes del juego
const COLUMNAS = 10;
const FILAS = 10;
const CANTIDAD_MINAS = 10;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");

  // Modificar/completar
  //ponerMinaCasillero(4, 5); //pone una mina en la columna 4, fila 5
  casillerosSinDescubrir = COLUMNAS * FILAS
  ponerMinasTablero();
}


function draw() {
  if (hizoClick == true)
  {
    if (mouseButton == LEFT)
    {
      if (tieneMinaCasillero(columnaPresionada, filaPresionada)){
        perder();
      }
      if(descubrirCasillero(columnaPresionada, filaPresionada))
      {
        //pinta el casillero clickeado. Modificar/completar
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA);
      }
      if (casillerosSinDescubrir == CANTIDAD_MINAS){
        ganoElJuego();
      }
    }
    else
    {
      pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO);
    }
    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }
  
}


function ganoElJuego()
{
  ganar();
  return true;
}

function ponerMinasTablero()
{
  for (var i = 0; i < 10; i++)
  {
    numeroAleatorio = floor(random(0, 10));
    numeroAleatorio2 = floor(random(0, 10));
    ponerMinaCasillero(numeroAleatorio, numeroAleatorio2);
    if(tieneMinaCasillero(numeroAleatorio, numeroAleatorio2))
    {
      return true;
      //esto se ejecuta si tiene una mina
    }
    else
    {
      return false;
      //esto se ejecuta si la columna 4, fila 5 NO tiene una mina
    }
  }
}

function mostrarMinas()
{
  
}

function contarMinasAlrededor(columna, fila)
{
  return 9;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}


/*
for i in range(1, 10):
  accion

for(var contador=0 ; contador < 50 ; contador++)
{
  acciones
}

for(inicializacion; condicion_mientras_que_se_cumple_lo_hace ; paso)
{

}


*/