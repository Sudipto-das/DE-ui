import React, { useEffect, useState } from 'react';
import CommentCard from './commentCard';
import CommentInput from './commentInput';
import getAllRemarks from '../../functions/api/dashboard/fetchRemarks';
import { AppContext } from '../../context/Context';
import CommentsInterface from '../../interface/Comments';
import { useRecoilValue } from 'recoil';
import { projectRecIdState } from '../../store/projectsState/projectRecId';
import Loader from '../ui/loader';
import { projectDataState } from '../../store/projectsState/projectDataState';

const dummyComments = [
    {
        Image: 'https://via.placeholder.com/40', // Replace with actual image URL
        Title: 'Jane S',
        CreatedBy: 'Maria Gomez',
        Description: "I recently used your interior design services for my living room and I couldn't be happier! The team really listened to my needs and...",
    },
    {
        Image: 'https://via.placeholder.com/40', // Replace with actual image URL
        Title: 'John D',
        CreatedBy: 'Maria Gomez',
        Description: 'Working with your team was a breeze. They were professional, attentive, and really knew how to bring my vision to life. My home office...',
    },
    {
        Image: 'https://via.placeholder.com/40', // Replace with actual image URL
        Title: 'Tom H',
        CreatedBy: 'Maria Gomez',
        Description: "I've always struggled with making my small apartment feel cozy and inviting, but your interior design services completely transformed...",
    },
    {
        Image: 'https://via.placeholder.com/40', // Replace with actual image URL
        Title: 'John D',
        CreatedBy: 'Maria Gomez',
        Description: 'Working with your team was a breeze. They were professional, attentive, and really knew how to bring my vision to life. My home office...',
    },
    {
        Image: 'https://via.placeholder.com/40', // Replace with actual image URL
        Title: 'Tom H',
        CreatedBy: 'Maria Gomez',
        Description: "I've always struggled with making my small apartment feel cozy and inviting, but your interior design services completely transformed...",
    },
    // Add more comments as needed
];

const CommentsList = () => {
    const ProjectRecIdState = useRecoilValue(projectRecIdState);
    const projects = useRecoilValue(projectDataState);
    const [comments, setComments] = useState<CommentsInterface[]>([]);
    const [isLoading, setLoading] = useState(false);
    const { raiseToast, user: CurrentUser } = React.useContext(AppContext);
    let ProjectRecId = ProjectRecIdState === '' ? projects.projDetails[0]?.RECID ?? 0 : ProjectRecIdState;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (!CurrentUser?.Id) {
                return;
            }
            try {
                const response = await getAllRemarks(CurrentUser, ProjectRecId, "ProjTable");
                setComments(response.data);
            } catch (error) {
                raiseToast('Error fetching projects');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [CurrentUser, ProjectRecId]);

    return (
        <div className='p-4 border rounded-lg mt-4' style={{ height: 'calc(88vh - 90px)' }}>
            <h1 className='text-xl font-bold mb-4 text-slate-600 font-inter'>Project Comments</h1>
            <div className="h-[69%] 2xl:h-[80%] flex flex-col">
                {isLoading ? (
                    <div className='h-[calc(100vh-8rem)] md:h-[calc(100vh-13rem)] flex items-center justify-center'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {comments.length === 0 ? (
                            <div className='flex items-center justify-center flex-grow'>
                                <p className='text-center text-slate-500'>No comments yet</p>
                            </div>
                        ) : (
                            <div className='overflow-y-auto flex-grow'>
                                {comments.map((comment, index) => (
                                    <CommentCard key={index} {...comment} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
            <CommentInput />
        </div>
    );
};

export default CommentsList;
