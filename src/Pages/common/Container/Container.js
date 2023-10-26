export function Container({children, className}) {
    return (
        <section className={className} style={{marginRight: "290px", marginLeft: "290px"}}>{children}</section>
    )
}