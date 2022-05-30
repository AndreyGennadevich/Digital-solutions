import { useParams } from "react-router-dom";
import { useGetCommentsListQuery } from "../services/commentsService";
import { useGetPostQuery } from "../services/postsService";
import { Loader, Error, PostCard, CommentsList, CommentsBtn, ModalWindow } from "../components";
import { useState } from "react";


export const PostInfoPage = () => {

    const [ modal, setModal ] = useState(false);

    const params = useParams();
    const { data: postData, isLoading, isError } = useGetPostQuery({ postId: params.idPost });
    const { data: commentsData } = useGetCommentsListQuery({ postId: params.idPost })

    const funcModalWindow = () => {
        setModal(!modal)
    };

    return (
        <>
            { commentsData && postData && <>
                <PostCard post={ postData } />
                <CommentsList comments={ commentsData } />
                <CommentsBtn openModal={funcModalWindow} />
                { modal && <ModalWindow postId={params.idPost} funcModalWindow={funcModalWindow}/>}
            </>
            }
            { isLoading && <Loader/> }
            { isError && <Error/> }
        </>
    );
};