import React from 'react';

const Landing = () => {
    return (
        <div className='ui container'>
            <div className='ui raised very padded text container segment '>
                <h2 className='ui header center aligned'>WELCOME</h2>
                <p>Survey generator is designed for you to send out a batch of surveys to customers and gain feedback on their feedback. </p>

                <h1 className='ui header center aligned'>Give it a try</h1>
            </div>

            <div className='ui raised very padded text container segment'>
                <div class='ui relaxed divided list '>
                    <div class='item'>
                        <i class='large github middle aligned icon'></i>
                        <div class='content'>
                            <a class='header'></a>
                            <div class='description'>login using google's authentication system</div>
                        </div>
                    </div>
                    <div class='item'>
                        <i class='large github middle aligned icon'></i>
                        <div class='content'>
                            <a class='header'></a>
                            <div class='description'>Create a 'YES' or 'NO' survey by filling out a Form</div>
                        </div>
                    </div>
                    <div class='item'>
                        <i class='large github middle aligned icon'></i>
                        <div class='content'>
                            <a class='header'></a>
                            <div class='description'>preview the sample</div>
                        </div>
                    </div>
                    <div class='item'>
                        <i class='large github middle aligned icon'></i>
                        <div class='content'>
                            <a class='header'></a>
                            <div class='description'>SUBMIT! thats it</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
