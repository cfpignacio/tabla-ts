import './style.css';
import { generarTablaUsuarios } from './usuarios/tabla';
import { getUsuarios } from './usuarios/usuario.service';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="divTablaUsuarios"></div>
`;

const divTabla = document.querySelector<HTMLDivElement>('#divTablaUsuarios')!;
// obtengo usuarios de la api
const usuarios = await getUsuarios();

// genero la tabla de usuarios con los datos obtenidos de la api y le paso el div de la tabla
generarTablaUsuarios(usuarios, divTabla);
