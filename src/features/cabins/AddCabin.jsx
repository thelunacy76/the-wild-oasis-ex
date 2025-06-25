import Button from "./../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "./../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>새로운 캐빈 추가하기</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const clickHendler = () => {
//     setIsOpenModal((show) => !show);
//   };

//   return (
//     <div>
//       <Button onClick={clickHendler}>새로운 캐빈 추가하기</Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
