export function Container({children, className}) {
    return (
        <section className={className} style={{marginRight: "100px", marginLeft: "100px"}}>{children}</section>
    )
}