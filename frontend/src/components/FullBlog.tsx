import { Appbar } from "./Appbar"
import { Blog } from "../hooks"

export const FullBlog = ({blog}: {blog: Blog}) => {
    return <div>
                <Appbar />
                <div className="grid grid-cols-12 px-10 pt-200">
                    <div className="col-span-8">
                        <div className="text-3xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        hello
                    </div>
                </div>
            </div>
}