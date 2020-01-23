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
                    date={new Date(2019,12,20)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest StressTest "
                    date={new Date(2019,12,22)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="StressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTest StressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTest StressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTestStressTest"
                    date={new Date(2019,12,27)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="What is cooking, good looking?"
                    date={new Date(2019,12,30)} />
                    <Message 
                    avatar={"https://sun9-61.userapi.com/c206624/v206624712/2cc4c/0zQkIX0pM1k.jpg?ava=1"}
                    text="A"
                    date={new Date(2020,1,1)} />
                </div>
            </section>
        )
    }
}