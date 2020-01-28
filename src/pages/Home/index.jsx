import React from 'react';
import './Home.scss';
import Message from 'components/Message';

export default class Home extends React.Component{
    render(){
        return(
            <section className="home">
                <div> 
                <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="Hello. I know You do not know me. But I wish you happiness 😀"
                    isReaded={true}
                    date={new Date(2019,11,20)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest "
                    isReaded={true}
                    date={new Date(2019,11,22)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="StressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTest StressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTest StressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTest"
                    isReaded={true}
                    attachments={
                        {
                            imgs:[
                                {src:'https://picsum.photos/200/300?random=9'},
                                {src:'https://picsum.photos/200/300?random=8'},
                                {src:'https://picsum.photos/200/300?random=7'},
                                {src:'https://picsum.photos/200/300?random=6'},
                                {src:'https://picsum.photos/200/300?random=5'},
                                {src:'https://picsum.photos/200/300?random=4'},
                                {src:'https://picsum.photos/200/300?random=3'},
                                {src:'https://picsum.photos/200/300?random=2'},
                                {src:'https://picsum.photos/200/300?random=1'}
                            ]
                        }
                    }
                    date={new Date(2019,11,27)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="What is cooking, good looking?"
                    attachments={
                        {
                            imgs:[{src:'https://source.unsplash.com/random'}]
                        }
                    }
                    date={new Date(2019,11,30)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="A"
                    date={new Date(2020,0,1)}
                    isMe={true}
                    attachments={
                        {
                            imgs:[
                                {src:'https://picsum.photos/200/300?random=13'},
                                {src:'https://picsum.photos/200/300?random=12'},
                                {src:'https://picsum.photos/200/300?random=11'},
                                {src:'https://picsum.photos/200/300?random=14'}
                            ]
                        }
                    }
                    />
                </div>
            </section>
        )
    }
}