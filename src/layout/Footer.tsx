interface FooterProps{
    children:React.ReactNode

}

const Footer:React.FC<FooterProps>=({children})=> {
    return (
        <div className="flex flex-rows z-50 shadow-md justify-end w-full fixed bg-stone-50 bottom-0 p-10 right-0 left-0">
            {children}
        </div>
    )
}

export default Footer