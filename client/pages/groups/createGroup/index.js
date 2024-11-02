import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { publicFetch } from '../../../util/fetcher'
import Layout from '../../../components/layout'
import PageTitle from '../../../components/page-title'
import FormGroup from '../../../components/form-create-group'
const index = () => {
    return (
        <Layout extra={false}>
            <Head>
                <title>Create group</title>
            </Head>
            <PageTitle title="Create Group" borderBottom={false} />
            <FormGroup></FormGroup>
        </Layout>
    )
}

export default index