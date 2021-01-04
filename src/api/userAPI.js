import db from "../firebase"

export const userAPI = {
    getUserTodos(){
        db.firestore().collection('tasks').doc()
    }

}