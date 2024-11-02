import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import SearchInput from '../../components/search-input'
import { Spinner } from '../../components/icons'

function Groups() {
    const [searchTerm, setSearchTerm] = useState(null)
    const [groups, setGroups] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (searchTerm === null) {
            const fetchGroup = async () => {
                const { data } = await publicFetch.get('/groups')
                setGroups(data);
            }
            fetchGroup()
        }
    }, [searchTerm])
    return (
        <Layout extra={false}>
            <Head>
                <title>Groups - Askem</title>
            </Head>

            <PageTitle title="Groups" borderBottom={false} group={true} />
            <SearchInput
                placeholder="Search Group"
                isLoading={loading}
                autoFocus
                autoComplete="off"
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {!groups && (
                <div className="loading">
                    <Spinner />
                </div>
            )}
        </Layout>
    )
}

export default Groups
