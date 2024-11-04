import React, { useEffect, useState } from 'react';

function GettingStarted () {

    const [nickname, setNickname] = useState('');
    const [readText,setReadText] = useState('');
 
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            event.preventDefault();

            const newNickname = event.target.value;
            setNickname(newNickname);

            const validasyonNickname = newNickname.replace(/[\s\d]/g, '').length > 2;
            

            if(validasyonNickname) {
                const positiveMessage = `Let's get started! ${newNickname.trim()}`;
                setReadText(positiveMessage);
            } else if (newNickname === '') {
                const nötrMessage = `You can't just enter spaces!`;
                setReadText(nötrMessage); 
            } else {
                const negativeMessage = `${newNickname.trim()} is not valid!`;
                setReadText(negativeMessage);
            }

            event.target.value = '' ;

            {console.log(readText,validasyonNickname)};

        }
        
        const bannedCharacters = ['*', '!', '@', '#', '$', '%', '^', '&', '(', ')', '-', '=', '+','_',';',':'];

        if (bannedCharacters.includes(event.key)) {

            event.preventDefault();
            
        }
    }

    
    
    

   
    
    


    const handleChange = (event) => {
        
    };
    
    return(
        <>
            <form>

                <label htmlFor='exampleNickname'>
                    Type your nickname and press Enter
                </label>

                <input
                    id='exampleNickname'
                    type='text'
                    name='nickname'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}>
                </input>

                <p>{readText}</p>
            
            </form>
        </>
    )
}

export default GettingStarted