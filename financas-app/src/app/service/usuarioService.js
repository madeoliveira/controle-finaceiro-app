import ApiService  from "../apiservice";

class UsuarioService extends ApiService{
    constructor(){
        super('/api/usuario')
    }
}
export default UsuarioService;