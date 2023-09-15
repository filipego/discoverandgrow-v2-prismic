
function Container({ children, wrapperClasses, classes }) {



    return (
        <div className={`wrapper ${wrapperClasses ? `${wrapperClasses}` : ''}`}>
            <div className={`container ${classes ? `${classes}` : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Container