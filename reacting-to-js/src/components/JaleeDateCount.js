import '../stylesheets/style.scss'
import Child from 'react-icons/lib/fa/child'

export const JaleeDateCount = ({index}) => (
    <div className="container">
        <div className="sum-text">
            <Child />
            Child {index}
        </div>
    </div>
)
