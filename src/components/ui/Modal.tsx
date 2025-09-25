import "@/styles/components/ui/Modal.scss"
import Warning from "@/assets/icons/warning.tsx";

interface Props {
    title: string,
    text: string,
    icon?:Icons
}

type Icons = "warning"

const Modal = ({title, text, icon}:Props) => {

    const GetIcon = ({icon}: { icon: Icons }) => {
        switch (icon) {
            case "warning":
                return <Warning />
            default:
                return <Warning />
        }
    }
    return (
        <div className="modal__wrapper">
            <div className="modal">
                {icon && <div className="modal__icon"> <GetIcon icon={icon}/> </div>}
                <span className="modal__title">{title}</span>
                <p className="modal__content">{text}</p>
                <button onClick={()=>{window.location.reload()}} className="modal__close">Recharger</button>
            </div>
        </div>
    );
};

export default Modal;