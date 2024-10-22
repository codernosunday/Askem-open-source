import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import SearchInput from '../../components/search-input'
import { Spinner } from '../../components/icons'

function Groups() {
    const [searchTerm, setSearchTerm] = useState(null)
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (searchTerm === null) {
            const fetchUser = async () => {
                const { data } = await publicFetch.get('/users')
                setUsers(data)
            }

            fetchUser()
        } else {
            const delayDebounceFn = setTimeout(async () => {
                setLoading(true)
                const { data } = await publicFetch.get(
                    searchTerm ? `/users/${searchTerm}` : `/users`
                )
                setUsers(data)
                setLoading(false)
            }, 500)

            return () => clearTimeout(delayDebounceFn)
        }
    }, [searchTerm])

    return (
        <Layout extra={false}>
            <Head>
                <title>Groups - Askem</title>
            </Head>

            <PageTitle title="Groups" borderBottom={false} />

            <SearchInput
                placeholder="Search Group"
                isLoading={loading}
                autoFocus
                autoComplete="off"
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {!users && (
                <div className="loading">
                    <Spinner />
                </div>
            )}
        </Layout>
    )
}

export default Groups
