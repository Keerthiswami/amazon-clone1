"use client"
import SearchResult from '../../components/SearchResults';
import { useSupabase } from '../../../lib1/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SearchPage = () => {
    const { query } = useParams();
    const {filterData,getFilteredData} = useSupabase();

    useEffect(()=>{
        getFilteredData(query?.toString())
    },);
 console.log(filterData);
    
    return (
        <div>
            <SearchResult filterData = {filterData}/>
        </div>
    )
}

export default SearchPage