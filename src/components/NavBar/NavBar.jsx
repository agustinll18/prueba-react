import React from 'react'
import cart from '../Cart/Cart'

export default function NavBar() {
    return (
        <div>
            <div class="row ">
			    <header>
			    	<figcaption> <h1><b> LLadosgaming </b></h1>
			    	</figcaption>
			    	<section class="Menu">
			    		<ul>
			    			<li><a href="../Home/Home2.html">Home</a>
			    			</li>
			    			<li><a href="../Tienda/Tienda2.html">Componentes</a>
			    			</li>
			    			<li><a href="../SobreNosotros2/SobreNosotros2.html">Sobre Nosotros</a>
			    			</li>
			    			<li><a href="../Registro/Registro2.html">Registro</a>
			    				<ul class="Drop">
			    					<li> <a href="../Sucursales/Sucursales.html"> Sucursales</a>
			    					</li>
			    					<li> <a href="../Correopostal/CorreoPostal2.html"> Correo postal</a>
			    					</li>
			    				</ul>
			    			</li>
			    			<li><a href="../Servicios/Servicios2.html">Servicios</a>
			    				<ul class="Drop2">
			    					<li> <a href="../Productos/Productos.html"> Componentes secundarios</a>
			    					</li>
			    				</ul>
			    			</li>
			    			<li><a href="../Contactanos2/Contactanos2.html">Contactanos</a>
			    			</li>
			    			<li><a href="../Tienda/Tienda2.html">Tienda</a>
			    			</li>
			    			<li><a href="../GESTION/GESTIONDETRABAJADORES.HTML">Trabajadores</a></li>
			    		</ul>
			    		<cart/>
			    	</section>
			    </header>
            </div> 
        </div>
    )
}
