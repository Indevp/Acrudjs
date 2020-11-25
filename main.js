class Usuario{

    constructor(nombre,edad,dni,curso){
        this.nombre=nombre
        this.edad=edad
        this.dni=dni
        this.curso=curso
    }

}
class Curso{
    constructor(nombre,id){
        this.nombre=nombre
        this.id=id
    }
}
var arrayobjectCurso=[]
function agregarCurso(){
    var option=document.getElementById('curso')
    var c1=new Curso("POO",1)
    var c2=new Curso("PHP",2)
    var c3=new Curso("PYTHON",3)
    var c4=new Curso("ANGULAR",4)
    var c5=new Curso("NODEJS",5)
    var con='<option>Seleccione su curso</option>'
    arrayobjectCurso.push(c1,c2,c3,c4,c5)

for(let i of arrayobjectCurso){
    con+='<option >'+i.nombre+'</option>'
    
}
return option.innerHTML=con
}

/*------*/
var arrayobject=[]
var nombre
var edad
var dni
var idc
var curso
var tabla=document.getElementById('salida')
var button=document.getElementById('b1')
function listar() {
   var con=''
   for (let x of arrayobject) {
    con+='<tr> <td>'+x.nombre+'</td> <td>'+x.edad+'</td> <td>'+x.dni+'</td> <td>'+x.curso+'</td><td><button class="bg btn-info"  type="button" onclick="editar('+x.dni+')">Editar</button>'
    con+='  <button class="bg btn-danger"  onclick="eliminar('+x.dni+')">Eliminar</button></td></tr>'
   }
   return tabla.innerHTML=con
}
function agregar(){
    nombre=document.getElementById('nombre').value
    edad=document.getElementById('edad').value  
    dni=document.getElementById('dni').value
    curso=document.getElementById('curso').value
    var p1=new Usuario(nombre,edad,dni,curso)
    arrayobject.push(p1)
    listar()
    limpiar()
}
function limpiar(){
$('#nombre').val("")
$('#edad').val("")
$('#dni').val("")
}
function editar(dni){
    
    for (let x of arrayobject) {
        if (x.dni==dni) {
            $('#nombre').val(x.nombre)
            $('#edad').val(x.edad)
            $('#dni').val(x.dni)
           return button.innerHTML='<button class="btn btn-success" '+
             'type="button" onclick="guardar('+dni+')">guradar</button><br>'+
             '<button class="btn btn-warning"  type="button" onclick="rese()">Cancelar</button>'
           
        }
    }
}
function rese(){
    limpiar()
    return button.innerHTML=''

}
function guardar(dni){
    for (let x of arrayobject) {
        if (x.dni==dni) {
            x.nombre= $('#nombre').val()
            x.edad=$('#edad').val()
            x.dni=$('#dni').val()
            x.curso=$('#curso').val()
        }
    }
    listar()
}
function eliminar(dni){
    for (let x of arrayobject) {
        if (x.dni==dni) {
            arrayobject.splice( arrayobject.indexOf(x),1)
            
        }
    }
    listar()
    
}
agregarCurso()