import { Link } from 'react-router-dom'
import './module.css'

interface linkProps {
    path: string;
    linkTitle: string;
  }

const LinkButton = (props: linkProps) =>{

    const { path, linkTitle} = props

    return(
        <Link className='btn' to={path}>{linkTitle}</Link>
    )
}
export default LinkButton