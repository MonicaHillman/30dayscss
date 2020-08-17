import React from 'react';
import './styles.css'
import PageHeader from '../../components/Header';

function DayThree() {
    return (
        <div id="page-day-three" className="container">
            <PageHeader
                title="Day 3 - Change Color"
                link="challengesList"
            />
            <main>
                <section>
                    <span className="slide">
                        <span>MONICA</span>
                        <span> </span>
                        <span>MAZZOCHI</span>
                        <span> </span>
                        <span>HILLMAN</span>
                        <span> </span>
                        <span>MONICA</span>
                        <span> </span>
                        <span>MAZZOCHI</span>
                        <span> </span>
                        <span>HILLMAN</span>
                        <span> </span>
                    </span>
                    <div className="wrapper">
                        <span className="slide">
                        <span>MONICA</span>
                        <span> </span>
                        <span>MAZZOCHI</span>
                        <span> </span>
                        <span>HILLMAN</span>
                        <span> </span>
                        <span>MONICA</span>
                        <span> </span>
                        <span>MAZZOCHI</span>
                        <span> </span>
                        <span>HILLMAN</span>
                        <span> </span>
                        </span>
                    </div>
                </section>
            </main>
        </div>

    );
}

export default DayThree;