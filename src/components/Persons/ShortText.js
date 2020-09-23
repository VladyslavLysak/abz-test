import React, { useState } from 'react';
import * as R from 'ramda';

const ShortText = (user) => {

    const [showBox, setShowBox] = useState(false);

    const getShortText = (text, count) => {

        let word = text.split(' ');
        let isShort = false;
        let longText = text;

        word.forEach((element) => {
            if (element.length > count) {
                text = `${R.take(count, element)}...`;
                isShort = true;
            }
        });

        return (
            <div
                onMouseEnter={() => setShowBox(true)}
                onMouseOut={() => setShowBox(false)}
            >
                {text}
                <div className='short-text-container'>
                    {showBox && isShort &&
                        <div className='long-text-container'>
                            <span>
                                <h6>
                                    {longText}
                                </h6>
                            </span>
                        </div>
                    }
                </div>
            </div>
        );
    };

    return (
        <div>
            {user.isName &&
                <h3>
                    {getShortText(user.text, user.count)}
                </h3>
            }
            {!user.isName &&
                <h6>
                    {getShortText(user.text, user.count)}
                </h6>
            }
        </div>
    );
}

export default ShortText;