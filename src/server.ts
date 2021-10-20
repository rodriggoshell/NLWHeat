import { serverHttp  } from './app';

serverHttp.listen(8080, () => {
	console.log('Servidor Conectado');
});