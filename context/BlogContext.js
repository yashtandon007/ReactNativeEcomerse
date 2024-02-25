import React, {useReducer, useState} from "react";

export const BlogContext = React.createContext();
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {title:`Blog ${state.length + 1}`}
            ]
        default:
            return state
    }
}
export const BlogProvider = ({children}) => {


    const [blogs, dispatch] = useReducer(blogReducer, [{title: `Blog `}])

    const addBlogPost = () => {
        dispatch({
            type: "add_blogpost"
        })
    }
    return <BlogContext.Provider value={{blogs, addBlogPost}}>
        {children}
    </BlogContext.Provider>
}

