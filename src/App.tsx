import { useRef, useState } from "react";
import { UserResponse } from "sdk";
import AddUser from "./components/AddUser";
import { DialogHandler } from "./components/AddUser/index";
import { PlusIcon } from "./components/Icons";
import UsersList from "./components/UsersList";

function App() {
  const addUserModalRef = useRef<DialogHandler | null>(null);
  const [usersList, setUsersList] = useState<UserResponse[]>([]);

  const handleToggleModal = () => {
    addUserModalRef.current?.toggle();
  };

  return (
    <>
      <AddUser
        onSubmit={(user) => {
          setUsersList((prev) => [...prev, user]);
        }}
        ref={addUserModalRef}
      />
      <div className="container mx-auto">
        <div className="my-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold uppercase">Sheypoor</h1>
          <button className="btn btn-success" onClick={handleToggleModal}>
            Add new user
            <PlusIcon />
          </button>
        </div>
        <div className="overflow-x-auto">
          <UsersList data={usersList} />
        </div>
      </div>
    </>
  );
}

export default App;
