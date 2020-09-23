import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getPersons } from '../../selectors';
import { fetchPersons, fetchMorePersons } from '../../actions';

import ShortText from './ShortText';

const Persons = (props) => {

    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(6);

    const getPersonsLocale = async () => {
        const persons = await props.fetchPersons();
        return persons;
    }

    const loadMorePersonsLocale = async () => {
        const persons = await props.fetchMorePersons(page, offset);
        return persons;
    }

    useEffect(() => {
        getPersonsLocale();
        setOffset(offset + 6);
    }, []);

    const handleChangeOffset = () => {
        setOffset(offset + 6);
        loadMorePersonsLocale();
    }

    const rednerPerson = (person) => {

        return (
            <div className='solo-person-container' key={person.id}>
                <div className='solo-person'>
                    <div className='person-photo-container'>
                        <img src={person.photo} alt='Person' className='person-photo' />
                    </div>
                    <ShortText user={person} isName={true} text={person.name} count={10} />
                    <ShortText user={person} isName={false} text={person.position} count={22} />
                    <ShortText user={person} IsName={false} text={person.email} count={22} />
                    <ShortText user={person} IsName={false} text={person.phone} count={22} />
                </div>
            </div>
        )
    }

    const { persons } = props;

    console.log(persons);
    
    return (
        <div className='users-container'>
            <h1>Our cheerful users</h1>
            <h6>Attention! Sorting users by registration date</h6>
            <div className='persons-container'>
                {persons.map(person => rednerPerson(person))}
            </div>
            <button
                className='button'
                onClick={handleChangeOffset}
            >
                Show more
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    persons: getPersons(state)
});

const mapDispatchToProps = {
    fetchPersons,
    fetchMorePersons
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);