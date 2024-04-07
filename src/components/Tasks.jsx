import {
  collection,
  query,
  getFirestore,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { app } from "@/firebase";
import { Task } from "./Task";

const Tasks = async () => {
  const db = getFirestore(app);
  const q = query(collection(db, "tasks"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return (
    <div>
      {data.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
