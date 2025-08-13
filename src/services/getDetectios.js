import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export const getDetections = async () => {

  const fullData = []

  const querySnapshot = await getDocs(collection(db, "detections"));
  querySnapshot.forEach((doc) => {
    fullData.push(doc)
    // console.log(doc.id, " => ", doc.data());
  });

  return fullData.length
    
}

export const getLastDetection = async() => {

  const fullData = []

  const querySnapshot = await getDocs(collection(db, "detections"));
  querySnapshot.forEach((doc) => {
    fullData.push(doc.data())
    // console.log(doc.id, " => ", doc.data());
  });

  console.log(fullData)

  let higher = 0
  for(let i = 0; i < fullData.length - 1; i++) {
    if(fullData[i].date.seconds > fullData[i+1].date.seconds) {
      higher = i
    }
  }

  console.log(fullData[higher])

  return fullData[higher]
}

export const getRatsDetection = async() => {

  const fullData = []

  const q = query(collection(db, "detections"), where("tipo", "==", 'rat'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    fullData.push(doc)
  });

  return fullData.length
}

export const getBirdsDetection = async() => {

  const fullData = []

  const q = query(collection(db, "detections"), where("tipo", "==", 'ave'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    fullData.push(doc)
    // console.log(doc.id, " => ", doc.data());
  });

  return fullData.length
}
