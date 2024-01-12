import { ReactNode } from "react"

interface Props{
    children: ReactNode
}

const SideBarLink = function ({children}: Props) {
    return (
        <a href="#" className='px-4 flex items-center gap-4 active__nav-link relative'>
            {children}
        </a>
    )
}
export default SideBarLink