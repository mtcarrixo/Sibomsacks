{productos.map((producto) => {
  const modelo = producto.caracteristicasGenerales?.id_tipo;
  const nombreImagen = imagenesPorModelo[modelo] || "default.png";
  const imagenSrc = `/images/${nombreImagen}`; // ✅ corregido

  return (
    <div className="col-md-4 col-sm-6" key={producto.id}>
      <div className="card product-card h-100 shadow-sm border-0 rounded">
        <img
          src={imagenSrc}
          alt={`Modelo ${modelo}`}
          className="product-image"
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-semibold">
              {producto.caracteristicasGenerales?.producto_nombre || "Sin nombre"}
            </h5>
            <p className="card-text text-muted">
              <strong>{producto.caracteristicasGenerales.tipo || "N/A"}</strong>
            </p>
          </div>
          <button
            className="btn btn-producto mt-3"
            onClick={() => navigate(`/productos/${producto.id}`)}
          >
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
})}
