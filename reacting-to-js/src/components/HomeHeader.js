import Left from 'react-icons/lib/md/chevron-left'
import Right from 'react-icons/lib/md/chevron-right'

export const HomeHeader = ({headerText}) => (
    <div className="home">
        <h1><Left />/<Right />{headerText}<Left />/<Right /></h1>
    </div>
)
