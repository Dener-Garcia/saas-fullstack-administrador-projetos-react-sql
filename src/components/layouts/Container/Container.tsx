import { ReactNode } from 'react';
import './module.css'


interface ContainerProps {
    customClass?: string;
    children: ReactNode;
  }

const Container = (props: ContainerProps) => {
    return(
        <div className={ `container ${props.customClass}` } >
            {props.children}
        </div>
    )
}

export default Container