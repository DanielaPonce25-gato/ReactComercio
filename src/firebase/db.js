import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where,
    doc,
    getDoc,
    addDoc
}from "firebase/firestore"

import { app } from './config'

const db = getFirestore(app)

export const getItems = async () => {

    const querySnapshot = await getDocs(collection(db, "items"))
    const items = []

    querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id})
    })

    return items

}


export const getCategories = async () => {

    const querySnapshot = await getDocs(collection(db, "categories"))
    const categories = []

    querySnapshot.forEach((doc) => {
        categories.push({...doc.data(), id: doc.id})
    })

    return categories

}


// Filtrar

export const getItemsByCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category))
    const items = []

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id})
    })

    return items
}


export const getItem = async (id) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return {...docSnap.data(), id: docSnap.id}
    } else {
        console.log("El documento no existe!")
    }
}


// agrega data a la base de datos 

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);

        alert(`¡Tu orden se ha creado correctamente! ID: ${docRef.id}`);
    
        return true; 
    } catch (error) {
        console.error("Error al crear la orden: ", error);
        alert("Hubo un error al crear tu orden. Intenta nuevamente.");
        
        return false; 
    }
};



