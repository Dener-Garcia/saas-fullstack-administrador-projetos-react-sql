import { Link } from 'react-router-dom'
import './module.css'

interface linkProps {
    path: string;
    linkTitle: ReactNode;
  }

const LinkButton = (props: linkProps) =>{
    return(
        <Link to={path}>{linkTitle}</Link>
    )
}
export default LinkButton