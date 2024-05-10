import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className=" py-4 border-b flex justify-between px-10">
        <div className="flex flex-col justify-center">
            Medium
        </div>
        <div>
            <Avatar name="Pawan" size={3}/>
        </div>
    </div>
}