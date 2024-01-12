interface Props{
    isSideBarMinimized: boolean,
    children: string
}

const SideBarParagraph = function ({isSideBarMinimized, children}: Props) {
    return (
        <p className={`${isSideBarMinimized ? '' : 'hidden'} text-nowrap`}>{children}</p>
    )
}

export default SideBarParagraph