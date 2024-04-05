import { Fragment, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/create-note-styles.css'
import HomeButton from "../components/HomeButton";
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import { useHeading } from '../context/HeadingContext';
import { useAddNoteMutation } from '../features/api/apiSlice';

const CreateNote = () => {
    const navigate = useNavigate()
    const { updateHeading } = useHeading();
    const [addNote, { isLoading: isCreating, isSuccess }] = useAddNoteMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData);
        const payload = {
            id: uuidv4(),
            ...data
        }
        addNote(payload)
    }

    useEffect(() => {
        if (isSuccess) {
            navigate('/')
        }
    }, [isSuccess])

    useEffect(() => {
        updateHeading('Create a note!')
    }, [])

    return (
        <Fragment>
            <HomeButton />
            <form onSubmit={handleSubmit}>
                <div className='label'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required />
                </div>

                <div className='label'>
                    <label htmlFor="description">Body</label>
                    <input type="text" name="description" id="description" required />
                </div>

                <div className='select-color'>
                    <label htmlFor='#F3CCF3' className='option-highlight-color' style={{ backgroundColor: '#F3CCF3' }}>
                        <input type="radio" defaultChecked name="highlightColor" id="#F3CCF3" value="#F3CCF3" />
                    </label>

                    <label htmlFor='#ED7D31' className='option-highlight-color' style={{ backgroundColor: '#ED7D31' }}>
                        <input type="radio" name="highlightColor" id="#ED7D31" value="#ED7D31" />
                    </label>

                    <label htmlFor="#FFBE98" className='option-highlight-color' style={{ backgroundColor: '#FFBE98' }}>
                        <input type="radio" name="highlightColor" id="#FFBE98" value="#FFBE98" />
                    </label>
                </div>

                <div className='label'>
                    <label htmlFor="category">Category</label>
                    <select name="category" id='category'>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>

                <button className='submit-cta' type="submit" disabled={isCreating}>
                    {isCreating ? <AiOutlineLoading className="loader" /> : 'create'}
                </button>
            </form>
        </Fragment>
    )
}

export default CreateNote;