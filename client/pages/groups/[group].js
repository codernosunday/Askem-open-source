import React, { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import { GroupAuthContext } from '../../store/groupauth'
import { publicFetch } from '../../util/fetcher'
import PageTitle from '../../components/page-title'
import Layout from '../../components/layout'

export async function getServerSideProps(context) {
    const { group } = context.params;

    return {
        props: { name: group },
    };
}

const GroupDetail = ({ name }) => {
    const { valueGroup, setValueGroup } = useContext(GroupAuthContext)
    useEffect(() => {
        const fetchDataGroup = async () => {
            const { data } = await publicFetch.get(`/group/${name}`)
            setValueGroup(data);
        }
        fetchDataGroup()
    }, [])
    return (
        <>
            <Head>
                <title>Group {name}</title>
            </Head>
            <Layout extra={true}>
                <PageTitle title={"Group"} linkRoute={'/groups/ask'} borderBottom={false} />
            </Layout>
        </>
    )
}

export default GroupDetail