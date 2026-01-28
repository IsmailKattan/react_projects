import { X} from 'lucide-react';
import "./index.scss"
import type { AlertTypes } from '../../../types';
interface IAlertProps {
  type: AlertTypes; 
  headerIcon: ReactNode;
  title: string; 
  description?: string; 
  children?: ReactNode
}

const Alert  = ({type = "alert-error", headerIcon, title, description, children}: IAlertProps) => {
  return (
    <div className={type}>
      <div className='alert-header'>
        <div className='alert-title'>
          <span>
            {headerIcon}
          </span>
          <h4>{title}</h4>
        </div>
        <span className='close'>
          <X size= {20}/>
        </span>
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  )
}

export default Alert;
