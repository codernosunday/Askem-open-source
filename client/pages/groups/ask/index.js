import React from 'react';
import Head from 'next/head'

import QuestionAskView from '../../../components/question-ask-view'
import Header from '../../../components/layout/header'
import QuestionForm from '../../../components/question-ask-view/question-ask-group'

const AskGroup = () => {
    return (
        <div>
            <Head>
                <title>Ask a Question - Askem</title>
            </Head>

            <Header />
            <QuestionAskView>
                <QuestionForm />
            </QuestionAskView>
        </div>
    )
}

export default AskGroup
