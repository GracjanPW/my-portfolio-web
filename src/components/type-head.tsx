export const TypeHead = ({active }:{active:boolean}) => {
    if (!active) return null;
    return <span className="type-head">|</span>
}