type Props = {
    bgColor: string,
    children: React.ReactNode
}
const Card = ({bgColor = 'bg-gray-100', children} : Props) => {
    return (
        <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card