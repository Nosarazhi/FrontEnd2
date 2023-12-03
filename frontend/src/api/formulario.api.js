import axios from 'axios'

const turnosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/turnos/'
})

export const getAllTasks  = () => {
   return turnosApi.get('/')
}


export const crearTurno  = () => {
    return turnosApi.post('/', turno)
 }