import React, { useState, useRef } from 'react';
import addComment from '../../functions/api/comment/addComment';
import { AppContext } from '../../context/Context';
import { useRecoilValue } from 'recoil';
import { projectRecIdState } from '../../store/projectsState/projectRecId';
import Loader from '../ui/loader';

const CommentInput: React.FC = () => {
    const [textInput, setTextInput] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { raiseToast, user: CurrentUser } = React.useContext(AppContext);
    const projectRecId = useRecoilValue(projectRecIdState);
    const [loading, setLoading] = useState<boolean>(false);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setErrorMessage('');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.target.value);
        setErrorMessage('');
    };

    const handleSubmit = async () => {
        if (!textInput.trim()) {
            setErrorMessage('Text input cannot be empty.');
            return;
        }

        let commentType = 0;
        let fileField = {};

        if (selectedFile) {
            const fileType = selectedFile.type;
            if (fileType.startsWith('image/')) {
                commentType = 1;
                fileField = { Image: selectedFile };
            } else if (fileType.startsWith('video/')) {
                commentType = 2;
                fileField = { Video: selectedFile };
            }
        }

        console.log(fileField);
        

        try {
            setLoading(true);
            const response = await addComment({
                Title: "Remark by " + CurrentUser.Name,
                Type: commentType,
                Description: textInput,
                Image: "",
                Video: "",
                ModifiedBy: CurrentUser.Id,
                CreatedBy: CurrentUser.Id
            },
                CurrentUser,
                {
                    TableName: "ProjTable",
                    RecId: projectRecId
                });

            if (response.status === 200) {
                raiseToast('Comment added successfully', 'success');
                setTextInput('');
                setSelectedFile(null);
            } else {
                throw new Error();
            }
        } catch (error) {
            raiseToast('Error adding comment', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center border-t p-4 gap-2 justify-center">
            <img
                src="Frame 476.png"
                alt="Upload"
                className={`w-8 h-8 p-1 cursor-pointer rounded-lg ${selectedFile && 'bg-green-200'}`}
                onClick={handleImageClick}
            />
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,video/*"
            />
            <div className='border rounded-lg px-2 py-1 2xl:flex justify-between flex-grow'>
                <input
                    type="text"
                    placeholder="Type message here"
                    value={textInput}
                    onChange={handleInputChange}
                    className="flex-grow p-2 border-none rounded-lg mr-4 focus:outline-none"
                />

                <button
                    onClick={handleSubmit}
                    className="bg-[#E6E8EC] text-[#23262F] px-4 py-2 rounded-lg hover:none"
                >
                   {loading ? <Loader height={30} width={30}  /> :  'Send'}
                </button>
            </div>
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </div>
    );
};

export default CommentInput;