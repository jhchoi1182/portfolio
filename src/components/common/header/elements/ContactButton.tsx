import { useRecoilState } from "recoil";
import { contactModalAtom } from "../../../../libs/atoms";
import ContactModal from "../../../contactModal/index/ContactModal";

function ContactButton() {
  const [isContactModal, setIsContactModal] = useRecoilState(contactModalAtom);

  return (
    <li className="navHover">
      <button onClick={() => setIsContactModal(true)}>CONTACT</button>
      {isContactModal && <ContactModal />}
    </li>
  );
}

export default ContactButton;
