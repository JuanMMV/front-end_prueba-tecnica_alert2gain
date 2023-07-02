import { toast } from "react-hot-toast";

const ToastComponent = (props) => {

    const { textData, color = '#b91c1c' } = props;

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