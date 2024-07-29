import React, { useEffect, useState } from 'react';
import CommentCard from './commentCard';
import CommentInput from './commentInput';
import getAllRemarks from '../../functions/api/dashboard/fetchRemarks';
import { AppContext } from '../../context/Context';


const dummyComments = [
    {
        
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'Jane S',
        designer: 'Maria Gomez',
        comment: "I recently used your interior design services for my living room and I couldn't be happier! The team really listened to my needs and...",
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'John D',
        designer: 'Maria Gomez',
        comment: 'Working with your team was a breeze. They were professional, attentive, and really knew how to bring my vision to life. My home office...',
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'Tom H',
        designer: 'Maria Gomez',
        comment: "I've always struggled with making my small apartment feel cozy and inviting, but your interior design services completely transformed...",
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'John D',
        designer: 'Maria Gomez',
        comment: 'Working with your team was a breeze. They were professional, attentive, and really knew how to bring my vision to life. My home office...',
    },
    {
        userImage: 'https://via.placeholder.com/40',  // Replace with actual image URL
        userName: 'Tom H',
        designer: 'Maria Gomez',
        comment: "I've always struggled with making my small apartment feel cozy and inviting, but your interior design services completely transformed...",
    },
    // Add more comments as needed
];

const CommentsList = ({ProjectRecId} : {ProjectRecId : number} ) => {

    const [comments, setComments] = useState([]);
    const {
        setLoading,
        raiseToast,
        user: CurrentUser,
    } = React.useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {


            setLoading(true);
            if (!CurrentUser?.Id) {
                return;
            }
            try {
                const response = await getAllRemarks(CurrentUser,ProjectRecId,"ProjTable");
                setComments(response.data);
            } catch (error) {
                raiseToast('Error fetching projects');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [CurrentUser]);

    console.log(comments);
    

    return (
        <div className='p-4 border rounded-lg mt-4' style={{ height: 'calc(88vh - 90px)' }}>
            <h1 className='text-xl font-bold mb-4 text-slate-600 font-inter'>Project Comments</h1>
            <div className="overflow-y-auto h-[69%] 2xl:h-[80%]">
                {dummyComments.map((comment, index) => (
                    <CommentCard key={index} {...comment} />
                ))}
            </div>
            <CommentInput />
        </div>
    );
};

export default CommentsList;
