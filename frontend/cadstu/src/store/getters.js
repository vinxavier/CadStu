export default {
  getStudentList: (state) => {
    var students = []
    for (var student of state.students) {
      var tempStudent = {
        nome: student.nome,
        serie: student.serie,
        cidade: student.cidade,
        estado: student.estado,
        nome_mae: student.nome_mae,
        data_mens: student.data_mens
      }
      students.push(tempStudent)
    }
    return students
  }
}
