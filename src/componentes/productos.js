import React, { Component } from 'react'
import axios from 'axios'
export default class productos extends Component {

    //data
    //productoCantidad	integer($int32)
    //productoDescripcion	string
    //productoId	integer($int32)
    //productoNombre	string
    //productoUbicacion	integer($int32)


    state = {
      productos: [],
      productoId: 0,
      productoNombre: '',
      productoDescripcion: '',
      productoCantidad: 0,
      productoUbicacion: 0
    }

   async componentDidMount(){
    const productosAux = await axios.get('https://sistemas.forus.cl/forus/challenge/dummy-api/producto/')
    console.log(productosAux.data)
    this.setState({productos: productosAux.data})
    //console.log("estado: "+this.state.productos)
  }

  //Metodos

  //Cambia el nombre del producto mientras se escribe
  cambiarNombreProducto = (event) =>{
    this.setState({productoNombre: event.target.value})
  }
  //Cambia el nombre del producto mientras se escribe
  cambiarDescripcionProducto = (event) =>{
    this.setState({productoDescripcion: event.target.value})
  }
  //Cambia el nombre del producto mientras se escribe
  cambiarCantidadProducto = (event) =>{
    this.setState({productoCantidad: event.target.value})
  }
  //Cambia el nombre del producto mientras se escribe
  cambiarUbicacionProducto = (event) =>{
    this.setState({productoUbicacion: event.target.value})
  }


  enviarFormulario = async event =>{
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "cache-control": "no-cache"
    //     }
    //   }

     event.preventDefault();  //event default para cancelar el evento de reiniciar la web al enviar
    // const rest = await axios.post('https://sistemas.forus.cl/forus/challenge/dummy-api/producto/',
    // JSON.stringify({
    //   productoId: 7,
    //   productoNombre: this.state.productoNombre,
    //   productoDescripcion: this.state.productoDescripcion,
    //   productoCantidad: this.state.productoCantidad,
    //   productoUbicacion: this.state.productoUbicacion
    // }),
    // config)
    // console.log(rest);

    var data = JSON.stringify({
      "productoId": 7,
      "productoNombre": "PC3",
      "productoDescripcion": "Computador de escritorio prueba 3",
      "productoCantidad": 3,
      "productoUbicacion": 2
    });
    
    var config = {
      method: 'post',
      url: 'https://sistemas.forus.cl/forus/challenge/dummy-api/producto/',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "cache-control": "no-cache",
        "Access-Control-Allow-Origin": "*"

      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })

  }

  render() {
    return (
      <div className='row'>
        <div className="col-md-4">
          <div className="card card-body">
            <h4>Crear Productos</h4>
            <form onSubmit={this.enviarFormulario}>
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input type="text" className='form-control form-control-sm' onChange={this.cambiarNombreProducto} />
                <label className="form-label">Descripcion</label>
                <input type="text" className='form-control form-control-sm' onChange={this.cambiarDescripcionProducto} />
                <label className="form-label">Cantidad</label>
                <input type="text" className='form-control form-control-sm' onChange={this.cambiarCantidadProducto} />
                <label className="form-label">Ubicacion</label>
                <input type="text" className='form-control form-control-sm' onChange={this.cambiarUbicacionProducto} />
              </div>

              <button type='submit' className='btn btn-primary'>
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {
              this.state.productos.map(productos => (
                <li className='list-group-item list-group-item-action' key={productos.productoId}>
                  {productos.productoNombre}
                </li>)
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
