import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import SearchInput from '../../components/search-input'
import GroupList from '../../components/group-list'
import GroupItem from '../../components/group-list/group-items'
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
        } else {
            const delayDebounceFn = setTimeout(async () => {
                setLoading(true)
                const { data } = await publicFetch.get(
                    searchTerm ? `/groups/${searchTerm}` : `/groups`
                )
                setGroups(data)
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
            {groups && (
                <>
                    <GroupList>
                        {groups?.map(({ name, avartar, created, id }) => (
                            <GroupItem
                                key={id}
                                name={name}
                                avatar={avartar}
                                created={created}
                            />
                        ))}
                    </GroupList>

                    {groups.length == 0 && (
                        <p className="not-found">No users matched your search.</p>
                    )}
                </>
            )}
        </Layout>
    )
}
export default Groups
