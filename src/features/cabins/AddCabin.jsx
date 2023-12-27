import React from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  //const [isOpenModal, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </>
  );
  // return (
  //   <div>
  //     <Button onClick={() => setIsModalOpen(!isOpenModal)}>
  //       {isOpenModal ? "close the form" : "Add a new Cabin"}
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => setIsModalOpen(false)}>
  //         <CreateCabinForm setIsModalOpen={setIsModalOpen} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}
