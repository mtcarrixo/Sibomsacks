  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import productoService from "../services/productos.service";

  const imagenesPorModelo = {
    1: "valvuladecargaydescarga.png",
    2: "polleradecierrrevalvuladedescarga.png",
    3: "bocaabiertavalvuladedescarga.png",
    4: "valvuladecargafondociego.png",
    5: "polleradecierrefondociego.png",
    6: "bocaabiertafondociego.png",
  };

  // Información adicional por modelo
  const informacionAdicionalPorModelo = {
    1: {
      titulo: "VÁLVULA DE CARGA Y DESCARGA",
      superSacksTubular: {
        caracteristicas: [
          "Sin costura lateral",
          "Ancho estándar de 90cm x 90 cm",
          "Altura adaptable al pedido"
        ]
      },
      superSacksPlano: {
        caracteristicas: [
          "4 costuras laterales",
          "Ancho variable según pedido",
          "Altura variable según pedido"
        ]
      }
    },
    2: {
      titulo: "POLLERA DE CIERRE Y VÁLVULA DE DESCARGA",
      superSacksTubular: {
        caracteristicas: [
          "Sin costura lateral",
          "Ancho estándar de 90cm x 90 cm",
          "Altura adaptable al pedido"
        ]
      },
      superSacksPlano: {
        caracteristicas: [
          "4 costuras laterales",
          "Ancho variable según pedido",
          "Altura variable según pedido"
        ]
      }
    },
    3: {
      titulo: "BOCA ABIERTA CON VÁLVULA DE DESCARGA",
      superSacksTubular: {
        caracteristicas: [
          "Sin costura lateral",
          "Ancho estándar de 90cm x 90 cm",
          "Altura adaptable al pedido"
        ]
      },
      superSacksPlano: {
        caracteristicas: [
          "4 costuras laterales",
          "Ancho variable según pedido",
          "Altura variable según pedido"
        ]
      }
    },
    4: {
      titulo: "VÁLVULA DE CARGA CON FONDO CIEGO",
      superSacksTubular: {
        caracteristicas: [
          "Sin costura lateral",
          "Ancho estándar de 90cm x 90 cm",
          "Altura adaptable al pedido"
        ]
      },
      superSacksPlano: {
        caracteristicas: [
          "4 costuras laterales",
          "Ancho variable según pedido",
          "Altura variable según pedido"
        ]
      }
    },
    5: {
      titulo: "POLLERA DE CIERRE CON FONDO CIEGO",
      superSacksTubular: {
        caracteristicas: [
          "Sin costura lateral",
          "Ancho estándar de 90cm x 90 cm",
          "Altura adaptable al pedido"
        ]
      },
      superSacksPlano: {
        caracteristicas: [
          "4 costuras laterales",
          "Ancho variable según pedido",
          "Altura variable según pedido"
        ]
      }
    },
    6: {
      titulo: "BOCA ABIERTA CON FONDO CIEGO",
      superSacksTubular: {
        caracteristicas: [
          "Sin costura lateral",
          "Ancho estándar de 90cm x 90 cm",
          "Altura adaptable al pedido"
        ]
      },
      superSacksPlano: {
        caracteristicas: [
          "4 costuras laterales",
          "Ancho variable según pedido",
          "Altura variable según pedido"
        ]
      }
    }
  };

  const ProductoDetalle = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
      const cargarProducto = async () => {
        try {
          const data = await productoService.obtenerPorId(id);
          setProducto(data);
        } catch (error) {
          console.error("❌ Error al cargar el producto:", error.message);
        }
      };

      cargarProducto();
    }, [id]);

    if (!producto) {
      return <div className="container my-5">Cargando producto... ⏳</div>;
    }

    const modelo = producto.caracteristicasGenerales?.id_tipo;
    const nombreImagen = imagenesPorModelo[modelo] || "default.png";
    const imagenSrc = new URL(
      `../assets/images/${nombreImagen}`,
      import.meta.url
    ).href;

    const infoAdicional = informacionAdicionalPorModelo[modelo];

    return (
      <div className="container my-5">
        <div className="row">
          {/* Columna izquierda - Imagen */}
          <div className="col-md-6">
            <div className="mb-3">
              <h2 className="mb-2" style={{ color:'#004aad' }}>MODELO SS {modelo}</h2>
            </div>
            
            <div className="text-center mb-4">
              <img
                src={imagenSrc}
                alt={producto.caracteristicasGenerales?.producto_nombre}
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                  width: "100%",
                  maxWidth: "400px",
                }}
              />
            </div>
          </div>

          {/* Columna derecha - Información adicional */}
          <div className="col-md-6">
            {infoAdicional && (
              <div>
                <div className="p-3 mb-4 border rounded shadow" style={{ backgroundColor: '#F8F9FA', borderColor: '#ffd500', borderWidth: '2px' }}>
                  <h3 className="text-center mb-0" style={{ color: '#004aad', fontWeight: 'bold' }}>{infoAdicional.titulo}</h3>
                </div>
                
                {/* Super sacks tubular */}
                <div className="mb-4">
                  <div className="p-3 rounded" style={{ backgroundColor: '#ffd500' }}>
                    <h5 className="text-left mb-0 "style={{ color: '#000000ff' }}>Super sacks tubular:</h5>
                  </div>
                  <div className="p-3 border border-top-0" style={{ backgroundColor: '#E8E7F3' }}>
                    {infoAdicional.superSacksTubular.caracteristicas.map((caracteristica, index) => (
                      <p key={index} className="mb-1">{caracteristica}</p>
                    ))}
                  </div>
                </div>

                {/* Super sacks plano */}
                <div className="mb-4">
                  <div className="p-3 rounded-top" style={{ backgroundColor: '#ffd500' }}>
                    <h5 className="text-left mb-0"style={{ color: '#000000ff'}}>Super sacks plano:</h5>
                  </div>
                  <div className="p-3 border border-top-0 rounded-bottom" style={{ backgroundColor: '#E8E7F3' }}>
                    {infoAdicional.superSacksPlano.caracteristicas.map((caracteristica, index) => (
                      <p key={index} className="mb-1">{caracteristica}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detalle de producto - Sección expandida horizontalmente */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="p-4 border rounded shadow bg-light">
              <h4 className="mb-4 text-center"> Detalle de producto</h4>
              
              <div className="row">
                <div className="col-md-4">
                  <p><strong>Material:</strong> {producto.material}</p>
                  <p><strong>Color:</strong> {producto.color}</p>
                  <p><strong>Tipo de Costuras:</strong> {producto.tipoCostura}</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Tipo de Tejido:</strong> {producto.tipoTejido}</p>
                  <p><strong>Forro Interior:</strong> {producto.forroInterior}</p>
                  <p><strong>Paleta Recomendada (Cm):</strong> {producto.paletaRecomendada}</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Largo x Ancho Interno (Cm):</strong> {producto.dimensionesInternas}</p>
                  <p><strong>Altura Interna (Cm):</strong> {producto.altura}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductoDetalle;