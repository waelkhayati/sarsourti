import React from 'react';
import Info from './Info';




function ArticleList() {
    const articleInfo = [
        {
            id:1,
            title: 'Schedules',
            date: 'Jan 17',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante ex. Phasellus facilisis lectus magna, et condimentum libero.'
        },
        {
            id:2,
            title: 'Schedules 2',
            date: 'Jan 19',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante ex. Phasellus facilisis lectus magna, et condimentum libero.'
        }
    ];
   
    const personList = articleInfo.map(info => <Info key={info.id} info={info} />)

    return (
        <React.Fragment>
            <div className='col'>
            {personList}
            </div>
            
        </React.Fragment>
    );
}

export default ArticleList;