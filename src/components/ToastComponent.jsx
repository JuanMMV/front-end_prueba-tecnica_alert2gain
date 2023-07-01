import { toast } from "react-hot-toast";

const ToastComponent = (props) => {

    const { textData, color = '#e30202' } = props;

    toast((t) => (
        <div className='text-center'>
            <p className='text-white'> {textData} </p>
        </div>
        ), {
            style: {
                background: color
            }
        }
    )
}

export default ToastComponent