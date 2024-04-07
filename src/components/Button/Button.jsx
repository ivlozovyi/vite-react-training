import classes from'./Button.module.css'

export default function Button({children, isActive, ...props}) {
    // const handleMouseEnter = () => console.log('entered');
    return(
        <button 
        {...props}
        className={
            isActive ? `${classes.button} ${classes.active}` : classes.active
        } 
        >
            {children}
        </button>
    )
}