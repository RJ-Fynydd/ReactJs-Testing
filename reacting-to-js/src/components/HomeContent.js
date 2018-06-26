export const HomeContent = ({contentData}) => (
    <div className="content">
        {contentData.map(function (obj, index) {
            return (
                <div key={index} className="content-box">
                    <h1>{obj.heading}</h1>
                    <p>{obj.body}</p>
                </div>
            )
        })}
    </div>
)
